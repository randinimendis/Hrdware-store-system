import React, { useState } from 'react'
import './ListButton.css'
import axios from 'axios'

import { useLocation, useNavigate } from 'react-router-dom'
export default function EditForm(props) {
    const location = useLocation()
    const {_id,name,brand,code,price,qty,allocated,available,alertLevel} = location.state.data
    const[newName,setName] = useState(name)
    const[newBrand,setBrand] = useState(brand)
    const[newPrice,setPrice] = useState(price)
    const[newAllocated,setAllocated] = useState(allocated)
    const[newQty,setQty] = useState(qty)
    const[newAlertLevel,setAlertLevel] = useState(alertLevel)
    const[newCode,setCode] = useState(code)
    const navigate = useNavigate()
    const goBack = (e)=>navigate("/Inventory")
    var color="";

    if(props.color === "red"){
        color = "SubmitBtn buttons rounded border border-red-500 bg-transparent px-4 py-2 font-semibold text-red-700 hover:border-transparent hover:bg-red-500 hover:text-white"
    }else{
        color = "SubmitBtn buttons rounded border border-blue-500 bg-transparent px-4 py-2 font-semibold text-blue-700 hover:border-transparent hover:bg-blue-500 hover:text-white";
    }
  return (
    <div>
        <form onSubmit={(e)=>{
            e.preventDefault()
            const newProduct = {
                productId : _id,
                code : newCode,
                brand : newBrand,
                name : newName,
                price : newPrice,
                qty : newQty,
                allocated : newAllocated,
                available : newQty,
                alertLevel : newAlertLevel
            }
            axios.put("http://localhost:8000/api/product",newProduct).then((response)=>{

                goBack()
            })
        }}>
        <div className='btnWrapper'>
        <div className='feildWrapper'>
                <input type='number' placeholder='Enter Item Name'  id='ItemName' className='feilds' defaultValue={newCode}
                onChange={(e)=>{
                    setCode(e.target.value)
                }}/>
                <label htmlFor='ItemName' className='labeles'>Item Code</label>
            </div>
            <div className='feildWrapper'>
                <input type='text' placeholder='Enter Item Name'  id='ItemName' className='feilds' defaultValue={newName}
                onChange={(e)=>{
                    setName(e.target.value)
                }}/>
                <label htmlFor='ItemName' className='labeles'>Item Name</label>
            </div>
                
            <div className='feildWrapper'>
                <input type='text' id='BrandName' placeholder='Enter Brand Name' className='feilds' defaultValue={newBrand}
                onChange={(e)=>{
                    setBrand(e.target.value)
                }}/>
                <label htmlFor='BrandName' className='labeles'>Brand Name</label> 
            </div> 
            <div className='feildWrapper'>
                <input type='number'  min= '0' id='ValueOfStock' placeholder='Enter Value'  className='feilds' defaultValue={newPrice}
                onChange={(e)=>{
                    setPrice(e.target.value)
                }}/>
                <label htmlFor='ValueOfStock' className='labeles'>Product price</label>
            </div>
                
            <div className='feildWrapper'>
                <input type='text'id='Date' className='feilds' defaultValue={newAllocated}
                onChange={(e)=>{
                    setAllocated(e.target.value)
                }}/>
                <label htmlFor='Date' className='labeles'>Allocated</label>
            </div>
                
            <div className='feildWrapper'>
                <input type='number' min= '0'id='Quantity' placeholder='Enter Quantity' className='feilds' defaultValue={newQty}
                onChange={(e)=>{
                    setQty(e.target.value)
                }}/>
                <label htmlFor='Quantity' className='labeles'>Quantity</label>
            </div>
            <div className='feildWrapper'>
                <input type='number' min= '0'id='Quantity' placeholder='Enter Quantity' className='feilds' defaultValue={newAlertLevel}
                onChange={(e)=>{
                    setAlertLevel(e.target.value)
                }}/>
                <label htmlFor='Quantity' className='labeles'>Alert level</label>
            </div>

        </div>
        <div style={{display : "flex" , flexDirection : "row" ,justifyContent : "center", width:"100%"}}>
            <div className='feildWrapper2' style={{margin : "10px"}}>
                <button value={props.name} className={color} style={{border : "1px solid red" , color: "red"}} 
                onClick={(e)=>{
                    e.preventDefault()
                    goBack()
                }}>Cancel</button>

            </div>
            <div className='feildWrapper2' style={{margin : "10px"}}>
                <input type='submit'id='submit' value={props.name} className={color} />

            </div>
        </div>
            </form>
    </div>
  )
  
}
