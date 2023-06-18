import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SupplyHeader from '../supplymanagement/SupplyHeader'
import { Link } from 'react-router-dom'; // add this import
import SupplyGenpdf from '../supplymanagement/SupplyGenpdf'
import 'jspdf-autotable';


const TableRow = (props) => {
  const handleDeleteClick = () => {
    props.onDelete(props.obj._id);
  };
  

  return (
    
    <tr>
      <td>{props.obj.productname}</td>
      <td>{props.obj.suppliername}</td>
      <td>{props.obj.requireddate}</td>
      <td>{props.obj.supplierid}</td>
      <td>{props.obj.quentity}</td>
      <td>{props.obj.note}</td>
      <td>
        <Link to={"/puedit/" + props.obj._id} className="btn btn-primary">Edit</Link>
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
// change name admin
const Addpurchasetable = () => {
  const [purchdel, setPurchdel] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    axios.get("http://localhost:8000/api/purches/get")
      .then(response => {
        console.log(response.data); // Check the data structure
        setPurchdel(response.data.addpurche);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8000/api/purches/delete/${id}`)
      .then(response => {
        console.log('addpurche deleted:', response.data);
        // Refresh the addpurche state after deletion
        axios.get("http://localhost:8000/api/purches/get")
          .then(response => {
            console.log(response.data); // Check the data structure
            setPurchdel(response.data.addpurche);
          })
          .catch(error => {
            console.log(error);
          });
      })
      .catch(error => {
        console.log('Error deleting addpurche:', error);
      });
  }

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  }

  const filteredRows = purchdel.filter(row => {
    return row.productname.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    
    <div className='bodycolor'>
      <SupplyHeader/>
      <h3 align="center">All Suppliers List</h3>
    
   <SupplyGenpdf/>  
      <input
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={handleInputChange}
      />
      <p>Showing {filteredRows.length} out of {purchdel.length} purchdel</p>
      <table className="table table-striped table table-light" style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>product name</th>
            <th>supplier name</th>
            <th>requireddate</th>
            <th>supplier id</th>
            <th>quentity</th>
            <th>note</th>
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

export default Addpurchasetable;
