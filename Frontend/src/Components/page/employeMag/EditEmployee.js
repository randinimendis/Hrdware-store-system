import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../employeMag/empregister.css'

const EditEmployee = () => {
  const [name, setName] = useState('');
  const [salary, setSalary] = useState('');
  const [gender, setGender] = useState('');
  const [nic, setNic] = useState('');
  const [position, setPosition] = useState('');
  //const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    axios.get('http://localhost:8000/api/empdetail/get/' + id)
      .then(response => {
        setName(response.data.empdet.name);
        setSalary(response.data.empdet.salary);
        setGender(response.data.empdet.gender);
        setNic(response.data.empdet.nic);
        setPosition(response.data.empdet.position);
       // setIsLoading(false);
      })

      .catch(function (error) {
        console.log(error);
      })
  }, [id]);

  const onSubmit = (e) => {
    e.preventDefault();

    const updatedEmployee = {
      name: name,
      salary: salary,
      gender: gender,
      nic: nic,
      position: position
    };

    axios.put('http://localhost:8000/api/empdetail/update/' + id, updatedEmployee)
      .then(res => console.log(res.data));

    window.location = '/admin';
  }; 


  return (
    <div className='bodycolor'>
      <div className="testbox">
      <form onSubmit={onSubmit} className='add-emp-form'>
      <h3 align="center">Update Employee</h3>
        <div className="item">
          <label>Name: </label>
          <input   className="add-emp-input"
                  type="text"
                
                 value={name}
                 onChange={e => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Salary: </label>
          <input  className="add-emp-input" type="text"
                 //className="form-control add-emp-input"
                 value={salary}
                 onChange={e => setSalary(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Gender: </label>
          <input className="add-emp-input" type="text"
                 //className="form-control add-emp-input"
                 value={gender}
                 onChange={e => setGender(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>NIC: </label>
          <input className="add-emp-input" type="text"
                // className="form-control add-emp-input"
                 value={nic}
                 onChange={e => setNic(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Position: </label>
          <input className="add-emp-input" type="text"
                 //className="form-control add-emp-input"
                 value={position}
                 onChange={e => setPosition(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input type="submit" value="Update Employee" className="btn btn-primary add-emp-input" />
        </div>
      </form>
    </div>
    </div>
  );
};

export default EditEmployee;