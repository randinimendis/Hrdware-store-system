import React,{useState} from 'react'
import '../employeMag/empbg.css'
import '../employeMag/empregister.css'

import axios from "axios";
import EmpHead from '../employeMag/EmpHead'
import Header from './Header';


export default function Empinquiry() {

const [name,setName]= useState("");
const [nic,setNic]=useState("");
const [inquiry,setinquiry]=useState("");
 const [error,setError]=useState(false);

    function sendData(e) {
         e.preventDefault();
        
    const newInquiry ={
            name,
            nic,
            inquiry
            

        }


        ///** validation */

        if (name.length==0){
            setError(true)
          } else if (name.length==0){
            setError(true);
          }else if (nic.length==0){
            setError(true);
          }else if (inquiry.indexOf(".") >= 0){
            setError(true);
          }
        
          else{
        axios.post("http://localhost:8000/api/inquiry/", newInquiry).then(() =>{
            alert("User Added")

        }).catch((err) =>{
            alert(err)
        })
        }
    }



  return (
    <div className='bodycolor'>
        <Header/>
        <div className="testbox">
            <form onSubmit={sendData} className='add-emp-form'>
            <label className="hed"><h2> Employee Name</h2></label>
                <div className="item">
                   
                    <label for="outlined-disabled">Employee Name<span>*</span></label>
                    <input
                        className='add-emp-input' 
                        // disabled 
                        required
                        id="name" 
                        type="text" {...("firstName")}
                        //value="Randini" 
                        placeholder="Employee Name"
                          onChange={(e) =>{

                            setName(e.target.value); //event

                        }} />
                 {/*/    validation* */}

                 {error&&name.length <=0 ?
            <label style={{color:"red"}}>*Cannot be empty</label>:""}


                </div>
            
                

                <div className="item">
                    <label htmlFor="nic"> Employee NIC<span>*</span></label>
                    <div className="name-item">
                    <input
                        className='add-emp-input' 
                               id="nic" 
                               type="text" 
                               name="nic" 
                               placeholder="Employee NIC" 
                                required 
                                pattern="^\d{11}[vV]|\d{12}$"
                                onChange={(e) => {
                                setNic(e.target.value);
    }}
/>

                    {error&&nic.length <=0 ?
                       <label style={{color:"red"}}>*Cannot be empty</label>:""}


                    </div>
                </div>

                

                <div className="item">
                    <label for="deti-datetime">Employee inquiry</label>
                    <input
                        className='add-emp-input' 
                        type="text" 
                        id="inquiry" 
                        name="inquiry" 
                        placeholder="Employee inquiry"
                        required 
                        onChange={(e) =>{

                            setinquiry(e.target.value);
                            
                        }}
                    />



                    {error&&inquiry.length <=0 ?
                       <label style={{color:"red"}}>*Cannot be empty</label>:""}
                </div>

                

                <div className="btn-block">
                <button type="submit" class="btn btn-primary mb-2">Submit</button>
                </div>

             </form>
            </div>
        </div>
    )
}