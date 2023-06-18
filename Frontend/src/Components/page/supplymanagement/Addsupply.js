import React, { useState } from "react";
import '../supplymanagement/Supplybg.css'
import '../supplymanagement/Supplyregister.css'
import SupplyHeader from '../supplymanagement/SupplyHeader'

import axios from "axios";


export default function Addsupply() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [discription, setDiscription] = useState("");

  function sendData(event) {
    event.preventDefault();
    alert("insert");
    setName("");
    setEmail("");
    setPhone("");
    setAddress("");
    setDiscription("");


    const newSupplier = {
      name,
      email,
      phone,
      address,
      discription
    }

    axios.post("http://localhost:8000/api/supdetails/", newSupplier).then(() => {
      console.log("data send succesfull!");

      //alert("added")
    }).catch((err) => {
      alert("err")
    })



  }

  return (
    <div className='bodycolor'>
      <SupplyHeader/>
    <div className="testbox">

      <form onSubmit={sendData} className='add-supply-form'>
      <label className="hed"><h2>Add Suppliers</h2></label>
        <div className="iteam">
          <label for="name">Name:</label>
          <input className="add-supply-input" type="text" id="name" name="name" onChange={(event) => {
            setName(event.target.value);

          }} />
        </div>
        <div className="iteam">
          <label for="phone">phone:</label>
          <input className="add-supply-input" type="text" id="phone" name="phone" onChange={(event) => {
            setPhone(event.target.value);

          }} />
        </div>

        <div className="iteam">
          <label for="email">email:</label>
          <input className="add-supply-input" type="text" id="email" name="email" onChange={(event) => {
            setEmail(event.target.value);

          }} />
        </div>
        <div className="iteam">
          <label for="address">Address:</label>
          <input className="add-supply-input" type="text" id="address" name="address" onChange={(event) => {
            setAddress(event.target.value);

          }} />
        </div>
        <div className="iteam">
          <label for="discription">Discription:</label>
          <input className="add-supply-input" type="text" id="discription" name="discription" onChange={(event) => {
            setDiscription(event.target.value);

          }} />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

    </div>
    </div>



  )

}

