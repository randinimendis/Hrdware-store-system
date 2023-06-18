import React, { useState } from 'react'
import './Contentes.css'
import { Link } from 'react-router-dom'
import axios from "axios"

export default function Contentsec(props) {
  const data = [
    {
    id:"kfa9afadf90",
    name:"Water tank",
    code:1001,
    brand:"Pe+",
    value:170000.00,
    quantity:50,  
  },
  {
    id:"faf2rf2453t3",
    name:"Glass cleaner",
    code:1002,
    brand:"3m",
    value:40000.00,
    quantity:100,  
  },
  {
    id:"23f5gn57kji7",
    name:"White paints",
    code:1003,
    brand:"Dulux",
    value:120000.00,
    quantity:2000,  
  },
  {
    id:"6k7kh45h6k5r",
    name:"Led bulbs",
    code:1004,
    brand:"Kelani",
    value:20000.00,
    quantity:150,  
  },
 

]
const [itemList,setItemList] = useState([])
const [emptyItemList,setEmptyItemList] = useState([])
const [lowItemList,setLowItemList] = useState([])

if(itemList.length == 0){
  axios.get("http://localhost:8000/api/product").then((response)=>{
    if(response.data.length != 0 ){
      setItemList(response.data)
    }
  })
}
if(emptyItemList.length == 0){
  axios.get("http://localhost:8000/api/product/emptyProduct").then((response)=>{
    if(response.data.length != 0 ){
      setEmptyItemList(response.data)
    }
  })
}
if(lowItemList.length == 0){
  axios.get("http://localhost:8000/api/product/lowProduct").then((response)=>{
    if(response.data.length != 0 ){
      setLowItemList(response.data)
    }
  })
}
  return (

    <div>
       <div className='contentWrapper'>
        <Link to="/">
          <button className='b1 h-full px-2'>
            <div className='home'>Home</div>
          </button>
        </Link>
          <button className='b2 h-full  px-2'>
            <div className='item'>Item list</div></button>
          <Link to="/Inventory/LowStock">
            <button className='b3 h-full  px-2'>
            <div className='report'>Low Stock Report</div>
            </button>
          </Link>
        </div>

      <div className='tableWrapper'> 
      <div>
        <div className='raw1'>
        <div className='r1'>Name</div>
        <div className='r2'>Code</div>
        <div className='r3'>Brand</div>
        <div className='r3'>price</div>
        <div className='r4'>Value of stock</div>
        <div className='r5'>Quantity</div>
        <div className='r6'>Action</div>
        </div>
        
        
          {itemList.map((index, idx) => {
            return(
              <div className='raw2'>
                  <div className='r11'>{index.name}</div>
                  <div className='r12'>{index.code}</div>
                  <div className='r13'>{index.brand}</div>
                  <div className='r13'>{index.price}</div>
                  <div className='r14'>{index.price * index.available}</div>
                  <div className='r15'>{index.available}</div>
                  <div className='r16'>
                  <Link to={"/Inventory/Edit"} state= {{data : index}}>
                  <div className='edit text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-2 py-1 text-center mr-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900' > <button>Edit</button> </div>
                  </Link>
                  
                  <div className='delete text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-2 py-1 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900'> <button
                  onClick={(e)=>{
                    if(window.confirm("Are you sure you want to delete this item")){
                      const p = {
                        productId : index._id
                       }
                      axios.delete("http://localhost:8000/api/product",{data : p}).then((result)=>{
                        setItemList([])
                      })
                    }
                  }}>Delete</button> </div>
                  
                 </div> 
                 </div>
             
            )
          })} 
        
      </div>

    <div className='buttonSection mb-32'>
      <button className='buttons rounded border border-blue-500 bg-transparent px-4 py-2 font-semibold text-blue-700 hover:border-transparent hover:bg-blue-500 hover:text-white'>Total Products  {itemList.length}</button>
      <Link to={'/Inventory/LowStock'}><button className='buttons rounded border border-blue-500 bg-transparent px-4 py-2 font-semibold text-blue-700 hover:border-transparent hover:bg-blue-500 hover:text-white'>Low Stock Products {lowItemList.length}</button></Link>
      <Link to={'/Inventory/EmptyStock'}><button className='buttons rounded border border-blue-500 bg-transparent px-4 py-2 font-semibold text-blue-700 hover:border-transparent hover:bg-blue-500 hover:text-white'>Out Of Stock Products {emptyItemList.length}</button></Link>
      <Link to={"/Add"}><button className='buttons rounded border border-blue-500 bg-transparent px-4 py-2 font-semibold text-blue-700 hover:border-transparent hover:bg-blue-500 hover:text-white'>Add item</button></Link>
    </div>
    </div>
</div>
  )
}