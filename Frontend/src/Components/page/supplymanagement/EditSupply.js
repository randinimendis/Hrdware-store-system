import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SupplyHeader from '../supplymanagement/SupplyHeader'
import { useParams } from 'react-router-dom';
import '../supplymanagement/Supplyregister.css'

const EditSupply = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [discription, setDiscription] = useState("");
  //const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    axios.get('http://localhost:8000/api/supdetails/get/' + id)
     //locallhost:5000/supdetails
      .then(response => {
        setName(response.data.supdet.name);
        setEmail(response.data.supdet.email);
        setPhone(response.data.supdet.phone);
        setAddress(response.data.supdet.address);
        setDiscription(response.data.supdet.discription);
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
      email: email,
      phone: phone,
      address: address,
      discription: discription
    };

    axios.put('http://localhost:8000/api/supdetails/update/' + id, updatedEmployee)
     //locallhost:5000/supdetails
      .then(res => console.log(res.data));

    window.location = '/supplyadmin';
  };
//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

  return (
    <div className='bodycolor'>
       <SupplyHeader/>
          <div className="testbox">
      <form onSubmit={onSubmit} className='add-supply-form'>
      <h3 align="center">Update Suppliers</h3>
        <div className="form-group">
          <label>Name: </label>
          <input className="add-supply-input" type="text"
                // className="form-control"
                 value={name}
                 onChange={e => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Email: </label>
          <input className="add-supply-input" type="text"
                 //className="form-control"
                 value={email}
                 onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Phone: </label>
          <input className="add-supply-input" type="text"
                 //className="form-control"
                 value={phone}
                 onChange={e => setPhone(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Address: </label>
          <input className="add-supply-input" type="text"
                 //className="form-control"
                 value={address}
                 onChange={e => setAddress(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Discription: </label>
          <input className="add-supply-input" type="text"
                 //className="form-control"
                 value={discription}
                 onChange={e => setDiscription(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input type="submit" value="Update Employee" className="btn btn-primary" />
        </div>
      </form>
    </div>
    </div>
  );
};

export default EditSupply;