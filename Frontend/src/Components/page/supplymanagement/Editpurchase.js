import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SupplyHeader from '../supplymanagement/SupplyHeader'
import { useParams } from 'react-router-dom';
import '../supplymanagement/Supplyregister.css'

const Editpurchase = () => {
    const [productname, setProductname] = useState("");
    const [suppliername, setSuppliername] = useState("");
    const [supplierid, setSupplierid] = useState("");
    const [quentity, setQuentity] = useState("");
    const [requireddate, setRequireddate] = useState("");
    const [note, setNote] = useState("");
  //const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    axios.get('http://localhost:8000/api/purches/get/' + id)
     //locallhost:5000/supdetails
      .then(response => {
        setProductname(response.data.purdet.productname);
        setSuppliername(response.data.purdet.suppliername);
        setSupplierid(response.data.purdet.supplierid);
        setQuentity(response.data.purdet.quentity);
        setRequireddate(response.data.purdet.requireddate);
        setNote(response.data.purdet.note);
       // setIsLoading(false);
      })

      .catch(function (error) {
        console.log(error);
      })
  }, [id]);

  const onSubmit = (e) => {
    e.preventDefault();

    const updatedProduct = {
        productname:productname,
        suppliername:suppliername,
        requireddate:requireddate,
        supplierid:supplierid,
        quentity:quentity,
        note:note
    };

    axios.put('http://localhost:8000/api/purches/update/' + id, updatedProduct)
     //locallhost:5000/supdetails
      .then(res => console.log(res.data));

    window.location = '/addpurchasetable';
  };
//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

  return (
    <div className='bodycolor'>
      <SupplyHeader/>
          <div className="testbox">
      <form onSubmit={onSubmit} className='add-supply-form'>
      <h3 align="center">Update Purchase</h3>
        <div className="form-group">
          <label>Product name: </label>
          <input className="add-supply-input" type="text"
                 //className="form-control"
                 value={productname}
                 onChange={e => setProductname(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>supplier name: </label>
          <input className="add-supply-input" type="text"
                 //className="form-control"
                 value={suppliername}
                 onChange={e => setSuppliername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>required date: </label>
          <input className="add-supply-input" type="text"
                 //className="form-control"
                 value={requireddate}
                 onChange={e => setRequireddate(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>supplier ID: </label>
          <input className="add-supply-input" type="text"
                 //className="form-control"
                 value={supplierid}
                 onChange={e => setSupplierid(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Quentity: </label>
          <input className="add-supply-input" type="text"
                 //className="form-control"
                 value={quentity}
                 onChange={e => setRequireddate(e.target.value)}
          />
        </div>


        <div className="form-group">
          <label>Note: </label>
          <input className="add-supply-input" type="text"
                // className="form-control"
                 value={note}
                 onChange={e => setNote(e.target.value)}
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

export default Editpurchase;