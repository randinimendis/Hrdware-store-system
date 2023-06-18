import React,{useState} from 'react'
import '../warranty/warhead.css'
import '../warranty/warregister.css'
import './WarHeader.component'
import axios from "axios";
import WarHeader from './WarHeader.component';

export default function AddWarranty() {

const [firstname,setfName]= useState("");
const [lastname,setlname]= useState("");
const [itemname,setitemn]= useState("");
const [contactnumber,setcnumber]=useState("");
const [invoicenumber,setinvoiceno]=useState("");
const [purchaseddate,setpurchesd]=useState("");
const [natureoftheproblem,setnature]=useState("");
const [attachitemphotos,setattachph]=useState("");



    function sendData(e) {
         e.preventDefault();
        
    const newwarranty ={
        firstname, 
        lastname,
        itemname,
        contactnumber,
        invoicenumber,
        purchaseddate,
        natureoftheproblem,
        attachitemphotos

        }

        axios.post("http://localhost:8000/api/warranty/", newwarranty).then(() =>{
            alert("warranty added")

        }).catch((err) =>{
            alert(err)
        })

    }



  return (
    
    <div>
      
        <WarHeader/>
        <div className="testbox">
     
            <form onSubmit={sendData} className='add-warr-form'>
            <label className="hed"><h2>Enter Warranty Details</h2></label>
                <div className="item">
                   
                    <label for="outlined-disabled">First Name<span>*</span></label>
                    <input className='add-warr-input'
                        // disabled 
                        required
                        id="fname" 
                        type="text" {...("firstName")}
                        //value="Sandali" 
                        placeholder="First Name"
                          onChange={(e) =>{

                            setfName(e.target.value); //event

                        }}
                    />
                </div>
            
                <div className="item">
                    <label for="outlined-disabled">Last Name<span>*</span></label>
                    <input className='add-warr-input'
                     
                        required
                        id="lname" 
                        type="text" 
                        placeholder="Last Name"
                        onChange={(e) =>{

                            setlname(e.target.value);
                            
                        }} 
                    />
                </div>

                <div className="item">
                    <label htmlfor="outlined-disabled">Item Name<span>*</span></label>
                    <input className='add-warr-input'
                        //disabled 
                        required
                        id="itemn" 
                        type="text" 
                        placeholder="Item Name"
                        onChange={(e) =>{

                            setitemn(e.target.value);
                            
                        }}
                    />
                </div>

                <div className="item">
                    <label htmlFor="outlined-disabled"> Contact Number<span>*</span></label>
                    <div className="name-item">
                    <input className='add-warr-input'
                    id="contactno" type="text" name="Contact Number" placeholder="Enter Your Contact number" 
                          title="Phone number with 7-9 and remaing 9 digit with 0-9"required onChange={(e)=>{
                         setcnumber(e.target.value);
      }}/>
                    
                    </div>
                </div>

                

                <div className="item">
                    <label for="outlined-disabled">Invoice Number</label>
                    <input className='add-warr-input'
                        type="text" 
                        id="invoice" 
                        name="invoice" 
                        placeholder="Enter your Invoice Number"
                        required 
                        onChange={(e) =>{

                            setinvoiceno(e.target.value);
                            
                        }}
                    />
                </div>


                <div className="item">
                    <label for="outlined-disabled">Purchased Date</label>
                    <input className='add-warr-input'
                        type="text" 
                        id="date" 
                        name="date" 
                        placeholder="purchased date"
                        required 
                        onChange={(e) =>{

                            setpurchesd(e.target.value);
                            
                        }}
                    />
                </div>

                <div className="item">
                    <label for="outlined-disabled"> Nature Of The Problem</label>
                    <input className='add-warr-input'
                        type="text" 
                        id="problem" 
                        name="problem" 
                        placeholder=" Enter Nature Of The Problem"
                        required 
                        onChange={(e) =>{

                            setnature(e.target.value);
                            
                        }}
                    />
                </div>


                

                <div class="form-group">
                        <label for="exampleFormControlFile1">Attach Item Photos</label>
                        <input type="file" class="form-control-file" id="exampleFormControlFile1"
                        onChange={(e) =>{

                                setattachph(e.target.value);

                        }
                        
                        }/>
                                            </div>


                

                <div className="btn-block">
                <button type="submit" class="btn btn-primary mb-2">SUBMIT</button><br/>
                </div>
                </form>
            </div>
        </div>
    )
}