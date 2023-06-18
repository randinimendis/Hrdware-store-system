import React from 'react'
import TopicBox from './TopicBox'
import Content from './Content'
import './Home.css'


export default function Welcome() {
  return (

    <div className='backGround relative  bg-cover bg-no-repeat'>
      <TopicBox/> 
      <div className="flex flex-wrap justify-center">
            
            <Content route="/Inventory" text="INVENTORY MANAGEMENET"/>  
            <Content route="/empdashboard" text="Employee MANAGEMENET"/>  
            <Content route="/supplyadmin" text="supply MANAGEMENET"/>  
            <Content route="/view" text="Repair MANAGEMENET"/>  
            <Content route="/vehadmin" text="Transport MANAGEMENET"/>  

      </div>      
    </div>
  )
}

