
import { Box, Button,MenuItem, InputLabel,Select,FormLabel, TextField } from "@mui/material";
    
import axios from 'axios';
import React, { Component } from 'react';
import './ch.css'
import FinacHeader from '../finace/FinacHeader'


export default  class AddCheckouts extends  Component{
constructor(props){
    super(props);

    this.onChangepaymenttype = this.onChangepaymenttype.bind(this);
    this.onChangeemail = this.onChangeemail.bind(this);
    this.onChangeaddress = this.onChangeaddress.bind(this);
    this.onChangecity = this.onChangecity.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        paymenttype: '',
        city: '',
        address:'',
        email:'',
        name:''
       
    }
    this.onChangename = this.onChangename.bind(this)
}

onChangename(e){
  this.setState({
    name : e.target.value
  });
}
onChangeemail(e){
    this.setState( {
        email: e.target.value
    });
}
onChangecity(e){
    this.setState( {
        city: e.target.value
    });
}
onChangeaddress(e){
    this.setState( {
        address: e.target.value
    });
}
onChangepaymenttype(e){
    this.setState( {
        paymenttype: e.target.value
    });
}

onSubmit(e){
    e.preventDefault();
    //this.state.status = 'pending';
    const obj = {
        name : this.state.name,
        email : this.state.email,
        address : this.state.address,
        city : this.state.city,
        paymenttype : this.state.paymenttype,
        
    };

    axios.post('http://localhost:8000/api/payments/',obj)
                            .then(res => {
                                alert("details added Successfully");
                                this.setState({
                                   name :'',
                                    email: '',
                                    city:'',
                                    address:'',
                                    paymenttype:''
                        
                                })
                                console.log(res.data)});
                                window.location.replace('/finview');
}


render() {
    return(
        <div>
            <FinacHeader/>
            <form onSubmit={this.onSubmit}>
            <center>   
            <b> 01. Checkouts </b>
            </center> 
           
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
  
  <TextField value={this.state.name} onChange={this.onChangename} type="text" margin="normal" fullWidth variant ="outlined" name="name" />
  
  <FormLabel> Email</FormLabel>
  <TextField value={this.state.email} 
  type = "email" 
  name="email" 
  onChange={this.onChangeemail}
   fullWidth variant ="outlined" />
 

  <FormLabel> Address</FormLabel>
  <TextField value={this.state.address} onChange={this.onChangeaddress}type="text"margin="normal" fullWidth variant ="outlined" name="address"  />
  
  <FormLabel> City</FormLabel>
  <TextField value={this.state.city} type= "text"  onChange={this.onChangecity}margin="normal" fullWidth variant ="outlined" name="city"/>
  


  <InputLabel id="demo-simple-select-label">payment Type</InputLabel>
<Select
labelId="demo-simple-select-label"
id="demo-simple-select"
margin="normal"
fullWidth variant ="outlined"
label="Payment Type"
value = {this.state.paymenttype}
onChange={this.onChangepaymenttype}
>
<MenuItem value=""  disabled >Select Option</MenuItem>
<MenuItem value={"pick up order"}>Pick up Order</MenuItem>
<MenuItem value={"money transfer"}>Money Transfer</MenuItem>
<MenuItem value={"cash on delivery"}>Cash on Delivery</MenuItem>
</Select>


<br></br>
  <Button variant ="contained"type ="submit" 
             >Submit</Button>

             <br></br>
             <br></br>
             <center>   
            <b> 02. Delivery </b>
            </center> 
            <br></br>
<FormLabel>Do you need to bring products to doorstep</FormLabel>
<br></br>
<select labelId="demo-simple-select-label"
id="demo-simple-select"
margin="normal"
fullWidth variant ="outlined">
<MenuItem value=""  disabled >Select Option</MenuItem>
<MenuItem value={"pick up order"}>Yes</MenuItem>
<MenuItem value={"money transfer"}>No</MenuItem>
</select>

<br></br>

<Button variant ="contained"type ="submit" 
             >Go To Delivery</Button>
        
                {/* <FormControlLabel control={<Checkbox Checked={inputs.alldetailsarecorrect} />} label="All details are correct"/> */}
                
                </Box>
            </form>
        </div>
    )
}
}