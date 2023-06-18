import "./DeliveryDashboard.css";import DashboardCard from "../components/common/DashboardCard";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { api } from "../../config";
import {Button} from '@chakra-ui/react';




const DeliveryDashboard = () => {
   
   //const [maincategory, setMaincategory] = useState([]);
   const [driver,setDriver]=useState([]);
   useEffect(() => {
          
          

    //    const getCategory = async () => {

    //        const result = await axios.get(`${api}/maincategory/get_main_category`);
    //        setMaincategory(result.data);
    //        console.log(result.data);
           
       

    //    }

       const getdriver =async()=>{

           const result=await axios.get(`${api}/driver/`);
           setDriver(result.data);

       }


       getdriver();
       //getCategory();


   }, [])

 
    return (
       <div class="col main pt-5 mt-3">
        
       <nav aria-label="breadcrumb" style={{backgroundColor:"#0B1145",borderRadius:"1em"}}>
       <ol class="breadcrumb" style={{backgroundColor:"#0B1145",borderRadius:"2em"}}>
          <h6 class="display-6 font-weight-bold text-white">Welcome  to Delivery Dashboard..!!</h6>
       </ol>
       </nav>
       <p class="lead d-none d-sm-block">Delivery Records</p>

       
       <div class="row mb-4 ml-1 mr-1 pt-0 pb-0" style={{justifyContent:"center", gap:"70px"}}>
           
         <DashboardCard bcolor="#0B1145" cardtext="All Drivers" value={driver.length}/>
         <DashboardCard bcolor="#F2C800" cardtext="Total Deliveries" value="368"/>
         <DashboardCard bcolor="#0B1145"  cardtext="Complete deliveries" value="100"/>
         
       
           
          
           
       </div>
       <div class="row mb-3 ml-1 mr-1 pt-0 pb-0" style={{justifyContent:"center",gap:"70px" }}>
           
     
             
         </div>

       <hr/>
      
      
       <div class="row" style={{justifyContent:"center" }}>
       <div className="col-lg-5 col-md-6 col-sm-12 col-sm-offset-5">
               <h4 className='title mt-3 mb-3 text-center text-secondary'> Delivered by Month Chart</h4>
             </div>
           
           <div className="col-lg-5 col-md-6 col-sm-12 col-sm-offset-5">
               <h4 className='title mt-3 mb-3 text-center text-secondary'> Chart</h4>
             </div>
       </div>
      
       <a id="more"></a>
       <hr/>

       
           <div class="row" className="head" >
             <h5 class="mt-3 mb-3 text-secondary">
              Check More Records of Drivers
             </h5>
            <Button colorScheme="blue" size="sm" >view all</Button>
             

             </div>
               <div class="table-responsive">
                   <table class="table table-striped">
                       <thead class="thead-light">
                           <tr>
                               <th>Driver Name</th>
                               <th>Contact No.</th>
                               <th>Kind of Vehicle</th>
                               <th>LicenseNo.</th>
                             
                           </tr>
                       </thead>
                       <tbody>

                       {
driver.map((pro)=>{

 return( 
  <tr key={pro.id}>

      <td>{pro.Drivername}</td>
      <td>{pro.Contact}</td>
      <td>{pro.VehicleType}</td>
      <td>{pro.LicenseNo}</td>
     

  </tr>)

})

 }
                        
         
        
                     
                       </tbody>
                   </table>
               </div>
        
      
       <a id="more"></a>
       <hr/>
       
      
     
       

      
    
       
       
       

   </div>
    )
}
 
export default DeliveryDashboard;