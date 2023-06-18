import React,{useState} from 'react'
import VehHeader from '../vehical/VehHeader'
import axios from "axios";
import '../vehical/vehhead.css'
import '../vehical/vehregister.css'

export default function Addvehicle() {

const [regNo,setRegNo]= useState("");
const [vCode,setVcode]= useState("");
const [brand,setBrand]= useState("");
const [capacity,setCapacity]=useState("");
const [licence_expDate,setLicence_expDate]=useState("");


    function sendData(e) {
         e.preventDefault();
        
    const newVehicle ={
            regNo,
            vCode,
            brand,
            capacity,
            licence_expDate

        }

        axios.post("http://localhost:8000/api/vehs/", newVehicle).then(() =>{
            //localhost:8070/vehs/
            alert("User Added")

        }).catch((err) =>{
            alert(err)
        })

    }



  return (
    <div>
        <VehHeader/>
        <div className="testbox">
            <form onSubmit={sendData} className='add-vhe-form'>
            <label className="hed"><h2>Add Vehicle</h2></label>
               <div className="item">
                   
                    <label for="outlined-disabled">Vehicle Registration Number<span>*</span></label>
                    <input className='add-veh-input'
                        // disabled 
                        required
                        id="regNo" 
                        type="text" 
                        //DAA-0101 
                        placeholder="AAA-0000"
                          onChange={(e) =>{

                            setRegNo(e.target.value); //event

                        }}
                    />
                </div>
            
                <div className="item">
                    <label for="outlined-disabled">Vehicle Code Number<span>*</span></label>
                    <input className='add-veh-input'
                        //disabled 
                        required
                        id="vCode" 
                        type="number" 
                        //value="10"
                        placeholder="0000"
                        onChange={(e) =>{

                            setVcode(e.target.value);
                            
                        }} 
                    />
                </div>

                <div className="item">
                    <label htmlfor="gender">Vehicle Brand<span>*</span></label>
                    <input className='add-veh-input'
                        //disabled 
                        required
                        id="brand" 
                        type="text" 
                        //value="Toyota"
                        placeholder="ABCDEFG"
                        onChange={(e) =>{

                            setBrand(e.target.value);
                            
                        }}
                    />
                </div>

                <div className="item">
                    <label htmlFor="nic">Vehicle capacity(Kg)<span>*</span></label>
                    <div className="name-item">
                    <input className='add-veh-input'
                               id="capacity" 
                               type="number"  
                               placeholder="100" 
                                required 
                                onChange={(e) => {
                                setCapacity(e.target.value);
    }}
/>
                    </div>
                </div>

                

                <div className="item">
                    <label for="deti-datetime">Vehicle licence expiry date</label>
                    <input className='add-vhe-input'
                        type="date" 
                        id="licence_expDate" 
                        placeholder="2024-01-01"
                        required 
                        onChange={(e) =>{

                            setLicence_expDate(e.target.value);
                            
                        }}
                    />
                </div>

                

                <div className="btn-block">
                <button type="submit" class="btn btn-primary mb-2">Submit</button>
                </div>

             </form>
            </div>
        </div>
    )
}