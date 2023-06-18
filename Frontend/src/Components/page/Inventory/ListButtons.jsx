import React, { useState } from 'react'
import './ListButton.css'
import axios from 'axios'

import { useNavigate } from 'react-router-dom'
export default function ListButtons(props) {
    const[name,setName] = useState("")
    const[brand,setBrand] = useState("")
    const[price,setPrice] = useState(0)
    const[allocated,setAllocated] = useState(0)
    const[qty,setQty] = useState(0)
    const[alertLevel,setAlertLevel] = useState(0)
    const[code,setCode] = useState(0)
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
                
                code : code,
                brand : brand,
                name : name,
                price : price,
                qty : qty,
                allocated : allocated,
                available : qty,
                alertLevel : alertLevel
            }
            axios.post("http://localhost:8000/api/product",newProduct).then((response)=>{
                goBack()
            })
        }}>
        <div className='btnWrapper'>
        <div className='feildWrapper'>
                <input type='number' placeholder='Enter Item Name'  id='ItemName' className='feilds' defaultValue={code}
                onChange={(e)=>{
                    setCode(e.target.value)
                }}/>
                <label htmlFor='ItemName' className='labeles'>Item Code</label>
            </div>
            <div className='feildWrapper'>
                <input type='text' placeholder='Enter Item Name'  id='ItemName' className='feilds' defaultValue={name}
                onChange={(e)=>{
                    setName(e.target.value)
                }}/>
                <label htmlFor='ItemName' className='labeles'>Item Name</label>
            </div>
                
            <div className='feildWrapper'>
                <input type='text' id='BrandName' placeholder='Enter Brand Name' className='feilds' defaultValue={brand}
                onChange={(e)=>{
                    setBrand(e.target.value)
                }}/>
                <label htmlFor='BrandName' className='labeles'>Brand Name</label> 
            </div> 
            <div className='feildWrapper'>
                <input type='number'  min= '0' id='ValueOfStock' placeholder='Enter Value'  className='feilds' defaultValue={price}
                onChange={(e)=>{
                    setPrice(e.target.value)
                }}/>
                <label htmlFor='ValueOfStock' className='labeles'>Product price</label>
            </div>
                
            <div className='feildWrapper'>
                <input type='text'id='Date' className='feilds' defaultValue={allocated}
                onChange={(e)=>{
                    setAllocated(e.target.value)
                }}/>
                <label htmlFor='Date' className='labeles'>Allocated</label>
            </div>
                
            <div className='feildWrapper'>
                <input type='number' min= '0'id='Quantity' placeholder='Enter Quantity' className='feilds' defaultValue={qty}
                onChange={(e)=>{
                    setQty(e.target.value)
                }}/>
                <label htmlFor='Quantity' className='labeles'>Quantity</label>
            </div>
            <div className='feildWrapper'>
                <input type='number' min= '0'id='Quantity' placeholder='Enter Quantity' className='feilds' defaultValue={alertLevel}
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
