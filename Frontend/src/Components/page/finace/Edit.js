import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './ch.css'
import { TextField,MenuItem,FormLabel,Box,Button,InputLabel,Select } from '@mui/material';
import FinacHeader from '../finace/FinacHeader';

const Edit = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [paymenttype, setPaymenttype] = useState('');
  //const [isLoading, setIsLoading] = useState(true);

  //const { id } = useParams();
  const id = useParams().id;
console.log(id)
  useEffect(() => {
    axios.get(`http://localhost:8000/api/payments/${id}`)
      .then(response => {
    //  console.log(response.data.Payment.name)
        setName(response.data.Payment.name);
        setEmail(response.data.Payment.email);
        setAddress(response.data.Payment.address);
        setCity(response.data.Payment.city);
        setPaymenttype(response.data.Payment.paymenttype);
       // setIsLoading(false);
      })

      .catch(function (error) {
        console.log(error);
      })
  }, [id]);

  const onSubmit = (e) => {
    e.preventDefault();

    const updatedCheckout = {
      name: name,
      email: email,
      address: address,
      city: city,
      paymenttype: paymenttype
    };

    axios.put(`http://localhost:8000/api/payments/${id}`, updatedCheckout)
      .then(res => console.log(res.data));

    window.location = '/finview';
  };
//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

  return (/*
    <div>
      
     <center> <form onSubmit={onSubmit}>
      <h3 align="center">Update Checkout</h3>
        <div className="form-group">
          <label>Name: </label>
          <input type="text"
                 className="form-control"
                 value={name}
                 onChange={e => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Email: </label>
          <input type="text"
                 className="form-control"
                 value={email}
                 onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Address: </label>
          <input type="text"
                 className="form-control"
                 value={address}
                 onChange={e => setAddress(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>City: </label>
          <input type="text"
                 className="form-control"
                 value={city}
                 onChange={e => setCity(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Payment Type: </label>
          <input type="text"
                 className="form-control"
                 value={paymenttype}
                 onChange={e => setPaymenttype(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button type="submit"  className="btn-update " >Update</button>
        </div>
      </form></center>
    </div>*/

<div>
  <FinacHeader/>
<form onSubmit={onSubmit}>

<Box
display="flex"
flexDirection="column"
justifyContent={"center"}
maxWidth={500}
alignContent={"center"}
alignSelf={"center"}
marginLeft={"auto"}
marginRight={"auto"}
marginTop={6}
>
    {/* <FormLabel> name</FormLabel>
    <TextField value={nameD} margin="normal" fullWidth variant ="outlined" name="nameD"/> */}

<FormLabel> Name </FormLabel>

<TextField value={name} onChange={e => setName(e.target.value)} type="text" margin="normal" fullWidth variant ="outlined" name="name" />

<FormLabel> Email</FormLabel>
<TextField value={email} 
type = "email" 
name="email" 
onChange={e => setEmail(e.target.value)}
fullWidth variant ="outlined" />


<FormLabel> Address</FormLabel>
<TextField value={address} onChange={e => setAddress(e.target.value)}type="text"margin="normal" fullWidth variant ="outlined" name="address"  />

<FormLabel> City</FormLabel>
<TextField value={city} type= "text"  onChange={e => setCity(e.target.value)}margin="normal" fullWidth variant ="outlined" name="city"/>



<InputLabel id="demo-simple-select-label">payment Type</InputLabel>
<Select
labelId="demo-simple-select-label"
id="demo-simple-select"
margin="normal"
fullWidth variant ="outlined"
label="Payment Type"
value = {paymenttype}
onChange={e => setPaymenttype(e.target.value)}
>
<MenuItem value=""  disabled >Select Option</MenuItem>
<MenuItem value={"pick up order"}>Pick up Order</MenuItem>
<MenuItem value={"money transfer"}>Money Transfer</MenuItem>
<MenuItem value={"cash on delivery"}>Cash on Delivery</MenuItem>
</Select>



<Button variant ="contained"type ="submit" 
 >Update</Button>

    {/* <FormControlLabel control={<Checkbox Checked={inputs.alldetailsarecorrect} />} label="All details are correct"/> */}
    
    </Box>
</form>
</div>
  );
};

export default Edit;