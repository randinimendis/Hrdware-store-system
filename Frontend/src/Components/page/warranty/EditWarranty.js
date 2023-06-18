import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../warranty/warregister.css'
import WarHeader from './WarHeader.component';

const EditWarranty = () => {
    const [firstname,setfName]= useState("");
    const [lastname,setlname]= useState("");
    const [itemname,setitemn]= useState("");
    const [contactnumber,setcnumber]=useState("");
    const [invoicenumber,setinvoiceno]=useState("");
    const [purchaseddate,setpurchesd]=useState("");
    const [natureoftheproblem,setnature]=useState("");
    const [attachitemphotos,setattachph]=useState("");
    

  const { id } = useParams();

  useEffect(() => {
    console.log(">>>");
    axios.get('http://localhost:8000/api/warranty/get/' + id)
      .then(response => {
        setfName(response.data.warrantyd.firstname);
        setlname(response.data.warrantyd.lastname);
        setitemn(response.data.warrantyd.itemname);
        setcnumber(response.data.warrantyd.contactnumber);
        setinvoiceno(response.data.warrantyd.invoicenumber);
        setpurchesd(response.data.warrantyd.purchaseddate);
        setnature(response.data.warrantyd.natureoftheproblem);
        setattachph(response.data.warrantyd.attachitemphotos);
       // setIsLoading(false);
      })

      .catch(function (error) {
        console.log(error);
      })
  }, [id]);

  const onSubmit = (e) => {
    e.preventDefault();

    const updatedwarrantydetails = {
        firstname: firstname,
        lastname: lastname,
        itemname: itemname,
        contactnumber: contactnumber,
        invoicenumber: invoicenumber,
        purchaseddate: purchaseddate,
        natureoftheproblem: natureoftheproblem,
        attachitemphotos: attachitemphotos
    };

    axios.put('http://localhost:8000/api/warranty/update/' + id, updatedwarrantydetails)
    //http://localhost:8000/warranty/
      .then(res => console.log(res.data));

    window.location = '/warrAdmin';
  };
//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

  return (
    <div>
      <WarHeader/>
    <form onSubmit={onSubmit} className='add-warr-form'>
    <h3 align="center">Update Warranty</h3>
      <div className="form-group">
        <label>First Name: </label>
        <input className='add-warr-input'
               type="text"
             //  className="form-control"
               value={firstname}
               onChange={e => setfName(e.target.value)}
        />
      </div>
      <div className="item">
        <label>Last Name: </label>
        <input className='add-warr-input'
                type="text"
              // className="form-control"
               value={lastname}
               onChange={e => setlname(e.target.value)}/>
      </div>
      <div className="item">
        <label>Item Name: </label>
        <input className='add-warr-input'
               type="text"
               //className="form-control"
               value={itemname}
               onChange={e => setitemn(e.target.value)}
        />
      </div>
      <div className="item">
        <label>Contact Number: </label>
        <input className='add-warr-input'
               type="text"
               //className="form-control"
               value={contactnumber}
               onChange={e => setcnumber(e.target.value)}
        />
      </div>

      <div className="item">
        <label>Invoice Number: </label>
        <input className='add-warr-input'
               type="text"
               //className="form-control"
               value={invoicenumber}
               onChange={e => setinvoiceno(e.target.value)}
        />
      </div>

      <div className="item">
        <label>Purchased Date: </label>
        <input className='add-warr-input'
               type="text"
               //className="form-control"
               value={purchaseddate}
               onChange={e => setpurchesd(e.target.value)}
        />
      </div>

      <div className="item">
        <label>Nature Of The Problem: </label>
        <input className='add-warr-input'
                type="text"
               //className="form-control"
               value={natureoftheproblem}
               onChange={e => setnature(e.target.value)}
        />
      </div>

      <div className="item">
        <label>Attach Item Photos: </label>
        <input className='add-warr-input'
                type="text"
              // className="form-control"
               value={attachitemphotos}
               onChange={e => setattachph(e.target.value)}
        />
      </div>
                          {/**chenge css class form-group */}
                
      <div className="iteam">
        <input type="submit" value="Update Warranty" className="btn btn-primary" />
      </div>
    </form>
  </div>
  );
};

export default EditWarranty;