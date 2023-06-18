import React, { useState } from "react";
import SupplyHeader from '../supplymanagement/SupplyHeader'
import '../supplymanagement/Supplyhead.css'
import '../supplymanagement/Supplybg.css'
import '../supplymanagement/Supplyregister.css'
import axios from "axios";



export default function Addpurchase() {

  const [productname, setProductname] = useState("");
  const [suppliername, setSuppliername] = useState("");
  const [supplierid, setSupplierid] = useState("");
  const [quentity, setQuentity] = useState("");
  const [requireddate, setRequireddate] = useState("");
  const [note, setNote] = useState("");

  function sendData(event) {
    event.preventDefault();
    alert("insert");
    setProductname("");
    setSuppliername("");
    setSupplierid("");
    setQuentity("");
    setRequireddate("");
    setNote("");


    const newSupplierPRO = {
            productname,
            suppliername, 
            requireddate,
            supplierid,
            quentity,
            note
    }

    axios.post("http://localhost:8000/api/purches", newSupplierPRO).then(() => {
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

      <form onSubmit={sendData} className= 'add-supply-form'>
      <label className="hed" ><h2 classname="h2" id="jh2">Add Suppliers Products</h2></label>
        <div className="forms">
          <label for="name">Products Name:</label>
          <input className="add-supply-input" type ="text" id="productname" name="productname" onChange={(event) => {
            setProductname(event.target.value);

          }} />
        </div>
        <div className="iteam">
          <label for="phone">supplier Name:</label>
          <input className="add-supply-input" type="text" id="suppliername" name="suppliername" onChange={(event) => {
            setSuppliername(event.target.value);

          }} />
        </div>

        <div className="iteam">
          <label for="email">supplier ID:</label>
          <input className="add-supply-input" type="text" id="supplierid" name="supplierid" onChange={(event) => {
          setSupplierid(event.target.value);

          }} />
        </div>
        <div className="iteam">
          <label for="address">quentity:</label>
          <input className="add-supply-input" type="text" id="quentity" name="quentity" onChange={(event) => {
            setQuentity(event.target.value);

          }} />
        </div>
        <div className="iteam">
          <label for="discription">requireddate:</label>
          <input  className="add-supply-input" type="date" id="requireddate" name="requireddate" onChange={(event) => {
            setRequireddate(event.target.value);

          }} />
        </div>

        <div className="iteam">
          <label for="discription">Note:</label>
          <input className="add-supply-input"  type="text" id="note" name="note" onChange={(event) => {
            setNote(event.target.value);

          }} />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

    </div>
    </div>



  )

}


