import React,{useState} from 'react'
import '../employeMag/empbg.css'
import '../employeMag/empregister.css'
import axios from "axios";
import Header from "../employeMag/Header"

export default function AddVehicleBooking() {

const [name,setName]= useState("");
const [salary,setSalary]= useState("");
const [gender,setGender]= useState("");
const [nic,setNic]=useState("");
const [email,setEmail]=useState("");
const [position,setPosition]=useState("");
 const [error,setError]=useState(false);

    function sendData(e) {
         e.preventDefault();
        
    const newEmloyee ={
            name,
            salary,
            gender,
            nic,
            position,
            email

        }


        ///** validation */

        if (name.length==0){
            setError(true)
          } else if (name.length==0){
            setError(true);
          } else if (salary.length==0){
            setError(true);
          } else if (gender.length==0){
            setError(true);
          }else if (nic.length==0){
            setError(true);
          }else if (position.indexOf(".") >= 0){
            setError(true);
          }
        
          else{
        axios.post("http://localhost:8000/api/empdetail/", newEmloyee).then(() =>{
            alert("User Added")

        }).catch((err) =>{
            alert(err.response.data.message)
        })
        }
    }



  return (
    <div className='bodycolor'>
        <Header/>
        <div className="testbox">
            <form onSubmit={sendData} className='add-emp-form'>
            <label className="hed"><h2>Add Employee</h2></label>
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
                    <label for="outlined-disabled">Employee salary<span>*</span></label>
                    <input
                        className='add-emp-input' 
                        //disabled 
                        required
                        id="salary" 
                        type="tel" 
                        //value="100000"
                        placeholder="Employee Salary"
                        onChange={(e) =>{

                            setSalary(e.target.value);
                            
                        }} 
                    />

                        {error&&salary.length <=0 ?
                       <label style={{color:"red"}}>*Cannot be empty</label>:""}




                </div>

                <div className="item">
                    <label htmlfor="gender">Employee gender<span>*</span></label>
                    <input
                        className='add-emp-input' 
                        //disabled 
                        required
                        id="gender" 
                        type="text" 
                        //value="MiniCooper"
                        placeholder="Employee Gender"
                        onChange={(e) =>{

                            setGender(e.target.value);
                            
                        }}
                    />
                      

                      {error&&gender.length <=0 ?
                       <label style={{color:"red"}}>*Cannot be empty</label>:""}



                </div>
                <div className="item">
                    <label htmlfor="email">Employee email<span>*</span></label>
                    <input
                        className='add-emp-input' 
                        //disabled 
                        required
                        id="email" 
                        type="email" 
                        //value="MiniCooper"
                        placeholder="Employee Email"
                        onChange={(e) =>{

                            setEmail(e.target.value);
                            
                        }}
                    />
                      

                      {error&&email.length <=0 ?
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
                    <label for="deti-datetime">Employee Position</label>
                    <input
                        className='add-emp-input' 
                        type="text" 
                        id="postion" 
                        name="postion" 
                        placeholder="Employee postion"
                        required 
                        onChange={(e) =>{

                            setPosition(e.target.value);
                            
                        }}
                    />



                    {error&&position.length <=0 ?
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