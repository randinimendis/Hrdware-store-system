import React, { useState } from 'react'
import'./LowStockRepo.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function EmptyStockReport(props) {
  const[lowItemList,setLowItemList] = useState([])
  
  const data = [
    {
    id:"kfa9afadf90",
    name:"Water tank",
    allocated:1001,
    available:"Pe+",
    alterlevel:170000.00,
    quantity:50,  
    leadTime:5
  },
  {
    id:"faf2rf2453t3",
    name:"Glass cleaner",
    allocated:1002,
    available:"3m",
    alterlevel:40000.00,
    quantity:100,  
    leadTime:3
  },
  {
    id:"23f5gn57kji7",
    name:"White paints",
    allocated:1003,
    available:"Dulux",
    alterlevel:120000.00,
    quantity:2000,  
    leadTime:8
  },
  {
    id:"6k7kh45h6k5r",
    name:"Led bulbs",
    allocated:1004,
    available:"Kelani",
    alterlevel:20000.00,
    quantity:150,  
    leadTime:11
  },

]

if(lowItemList.length == 0){
  axios.get("http://localhost:8000/api/product/emptyProduct").then((response)=>{
    if(response.data.length != 0 ){
      setLowItemList(response.data)
    }
  })
}
  return (    
    <div>
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
        
        
          {lowItemList.map((index, idx) => {
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
                        setLowItemList([])
                      })
                    }
                  }}>Delete</button> </div>
                  
                 </div> 
                 </div>
             
            )
          })} 
        
      </div>

   
    </div>

        <div className='buttonSection'>
        <button className='buttons mb-8 rounded border border-blue-500 bg-transparent px-4 py-2 font-semibold text-blue-700 hover:border-transparent hover:bg-blue-500 hover:text-white'>Download Report</button>
        </div>

    </div>
  )
}
