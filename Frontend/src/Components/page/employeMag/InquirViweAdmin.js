



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // add this import
import 'jspdf-autotable';
import Report from './Report';
import Header from "../employeMag/Header"



const TableRow = (props) => {
  const handleDeleteClick = () => {
    props.onDelete(props.obj._id);
  };


  


  return (
    
    
    <tr>
      <td>{props.obj.name}</td>
      <td>{props.obj.nic}</td>
      <td>{props.obj.inquiry}</td>
      <td>

      </td>
      <td>
        <button
          type="submit"
          className="btn btn-danger"
          onClick={handleDeleteClick}>
          Delete
        </button>
      </td>
    </tr>
  );
}

const InquirViweAdmin = () => {
  const [inquirys, setInquirys] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    axios.get("http://localhost:8000/api/inquiry/get")
      .then(response => {
        console.log(response.data); // Check the data structure
        setInquirys(response.data.inquiry);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8000/api/inquiry/delete/${id}`)
      .then(response => {
        console.log('inquiry deleted:', response.data);
        // Refresh the empdetails state after deletion
        axios.get("http://localhost:8000/api/inquiry/get")
          .then(response => {
            console.log(response.data); // Check the data structure
            setInquirys(response.data.inquiry);
          })
          .catch(error => {
            console.log(error);
          });
      })
      .catch(error => {
        console.log('Error deleting inquiry:', error);
      });
  }

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  }

  const filteredRows = inquirys.filter(row => {
    return row.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    
    <div className='bodycolor'>
      <Header/>
      <h3 align="center">All inquiry List</h3>
      <Report />
      <input
        className='add-emp-input'
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={handleInputChange}
      />
      <p>Showing {filteredRows.length} out of {inquirys.length} inquiry</p>
      <table className="table table-striped table table-light" style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>NIC</th>
            <th>Inquiry</th>
            <th colSpan="2">Action</th>
           </tr>
        </thead>
        <tbody>
          {filteredRows.map((object, i) => {
            return (
              <TableRow
                obj={object}
                key={i}
                onDelete={handleDelete}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default InquirViweAdmin;
