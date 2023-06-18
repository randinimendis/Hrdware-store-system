/*import React from 'react'

function Dashboerd() {
  return (
    <div>
      <div class="col main pt-5 mt-3">
        
        <nav aria-label="breadcrumb" style={{backgroundColor:"#0B1145",borderRadius:"1em"}}>
        <ol class="breadcrumb" style={{backgroundColor:"#0B1145",borderRadius:"2em"}}>
           <h6 class="display-6 font-weight-bold text-white">Welcome  to Employee Manage Dashboard..!!</h6>
        </ol>
        </nav>
        <p class="lead d-none d-sm-block">Employee table Records</p>
 
        
        <div class="row mb-4 ml-1 mr-1 pt-0 pb-0" style={{justifyContent:"center", gap:"70px"}}>
            
          <DashboardCard bcolor="#0B1145" cardtext="All Employee" value={name.length}/>
          <DashboardCard bcolor="#F2C800" cardtext="Total Employee salary" value="368"/>
         
          
        
            
           
            
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
               Check More Records of Employee
              </h5>
             <Button colorScheme="blue" size="sm" >view all</Button>
              
 
              </div>
                <div class="table-responsive">
                    <table class="table table-striped">
                        <thead class="thead-light">
                            <tr>
                                <th>Employee Name</th>
                                <th>Employee salary</th>
                                <th>Employee gender</th>
                                <th>Employee nic</th>
                                <th>Employee position</th>
                              
                            </tr>
                        </thead>
                        <tbody>
 
                        {
 driver.map((pro)=>{
 
  return( 
   <tr key={pro.id}>
 
       <td>{pro.name}</td>
       <td>{pro.salary}</td>
       <td>{pro.gender}</td>
       <td>{pro.nic}</td>
       <td>{pro.position}</td>
      
 
   </tr>)
 
 })
 
  }                
                        </tbody>
                    </table>
                </div>
         
       
        <a id="more"></a>
        <hr/>  
 
    </div>
    </div>
  )
}

export default Dashboerd;
*/
/*
//import DashboardCard from "../components/common/DashboardCard";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import { api } from "../../config";
import {Button} from '@chakra-ui/react';
import DashboardCard from "../employeMag/DashboardCard"



const Dashboerd = () => {
   
   //const [maincategory, setMaincategory] = useState([]);
   const [employee,setname]=useState([]);
   useEffect(() => {
          
          

    //    const getCategory = async () => {

    //        const result = await axios.get(`${api}/maincategory/get_main_category`);
    //        setMaincategory(result.data);
    //        console.log(result.data);
           
       

    //    }

       const getemployee =async()=>{

           const result=await axios.get("http://localhost:8000/api/empdetail/get");
           setname(result.data);

       }


       getemployee();
       //getCategory();


   }, [])

 
    return (
       <div class="col main pt-5 mt-3">
        
       <nav aria-label="breadcrumb" style={{backgroundColor:"#0B1145",borderRadius:"1em"}}>
       <ol class="breadcrumb" style={{backgroundColor:"#0B1145",borderRadius:"2em"}}>
          <h6 class="display-6 font-weight-bold text-white">Welcome  to Employee Manage Dashboard..!!</h6>
       </ol>
       </nav>
       <p class="lead d-none d-sm-block">Employee Records</p>

       
       <div class="row mb-4 ml-1 mr-1 pt-0 pb-0" style={{justifyContent:"center", gap:"70px"}}>
           
       <DashboardCard bcolor="#0B1145" cardtext="All Employee" value={name.length}/>
        <DashboardCard bcolor="#F2C800" cardtext="Total Employee salary" value="368"/>
         
       
           
          
           
       </div>
       <div class="row mb-3 ml-1 mr-1 pt-0 pb-0" style={{justifyContent:"center",gap:"70px" }}>
           
     
             
         </div>

       <hr/>
      
      
       <div class="row" style={{justifyContent:"center" }}>
       <div className="col-lg-5 col-md-6 col-sm-12 col-sm-offset-5">
               <h4 className='title mt-3 mb-3 text-center text-secondary'> Employee by Month Chart</h4>
             </div>
           
           <div className="col-lg-5 col-md-6 col-sm-12 col-sm-offset-5">
               <h4 className='title mt-3 mb-3 text-center text-secondary'> Chart</h4>
             </div>
       </div>
      
       <a id="more"></a>
       <hr/>

       
           <div class="row" className="head" >
             <h5 class="mt-3 mb-3 text-secondary">
              Check More Records of Employee
             </h5>
            <Button colorScheme="blue" size="sm" >view all</Button>
             

             </div>
               <div class="table-responsive">
                   <table class="table table-striped">
                       <thead class="thead-light">
                           <tr>
                           <th>Employee Name</th>
                                <th>Employee salary</th>
                                <th>Employee gender</th>
                                <th>Employee nic</th>
                                <th>Employee position</th>
                             
                           </tr>
                       </thead>
                       <tbody>

                       {
employee.map((pro)=>{

 return( 
  <tr key={pro.id}>

       <td>{pro.name}</td>
       <td>{pro.salary}</td>
       <td>{pro.gender}</td>
       <td>{pro.nic}</td>
       <td>{pro.position}</td>
     

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
 
export default Dashboerd;*/

/*
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from '@chakra-ui/react';
import DashboardCard from "../employeMag/DashboardCard"
import Header from "../employeMag/Header"

const Dashboerd = () => {
   
   const [empdetails, setEmpdetails] = useState([]);

   useEffect(() => {
    axios.get("http://localhost:8000/api/empdetail/get")
      .then(response => {
        console.log(response.data); // Check the data structure
        setEmpdetails(response.data.empdetail);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

   return (
    <div>
    <Header/>
       <div class="col main pt-5 mt-3">
     
           <nav aria-label="breadcrumb" style={{backgroundColor:"#0B1145",borderRadius:"1em"}}>
               <ol class="breadcrumb" style={{backgroundColor:"#0B1145",borderRadius:"2em"}}>
                  <h6 class="display-6 font-weight-bold text-white">Welcome  to Employee Manage Dashboard..!!</h6>
               </ol>
           </nav>
           <p class="lead d-none d-sm-block">Employee Records</p>

           <div class="row mb-4 ml-1 mr-1 pt-0 pb-0" style={{justifyContent:"center", gap:"70px"}}>
               <DashboardCard bcolor="#0B1145" cardtext="All Employee" value={empdetails.length}/>
               <DashboardCard bcolor="#F2C800" cardtext="Total Employee salary" value="368"/>
           </div>

           <hr/>

           <div class="row" style={{justifyContent:"center" }}>
               <div className="col-lg-5 col-md-6 col-sm-12 col-sm-offset-5">
                   <h4 className='title mt-3 mb-3 text-center text-secondary'> Employee by Month Chart</h4>
               </div>
               <div className="col-lg-5 col-md-6 col-sm-12 col-sm-offset-5">
                   <h4 className='title mt-3 mb-3 text-center text-secondary'> Chart</h4>
               </div>
           </div>

           <a id="more"></a>
           <hr/>

           <div class="row" className="head" >
               <h5 class="mt-3 mb-3 text-secondary">
                  Check More Records of Employee
               </h5>
               <Button colorScheme="blue" size="sm" >view all</Button>
           </div>

           <div class="table-responsive">
               <table class="table table-striped">
                   <thead class="thead-light">
                       <tr>
                           <th>Employee Name</th>
                           <th>Employee salary</th>
                           <th>Employee gender</th>
                           <th>Employee nic</th>
                           <th>Employee position</th>
                       </tr>
                   </thead>
                   <tbody>
                           

                       {empdetails.length > 0 && empdetails.map((employee) => (
                       
                           <tr key={employee._id}>
                               <td>{empdetails.name}</td>
                               <td>{empdetails.salary}</td>
                               <td>{empdetails.gender}</td>
                               <td>{empdetails.nic}</td>
                               <td>{empdetails.position}</td>

                            </tr>))}
                    </tbody>
                </table>
            </div>
        </div>
        </div>
   )
}
 
export default Dashboerd;

                       */
/*
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from '@chakra-ui/react';
import DashboardCard from "../employeMag/DashboardCard"
import Header from "../employeMag/Header"

const Dashboerd = () => {
   
   const [empdetails, setEmpdetails] = useState([]);

   useEffect(() => {
    axios.get("http://localhost:8000/api/empdetail/get")
      .then(response => {
        console.log(response.data); // Check the data structure
        setEmpdetails(response.data.empdetail);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  

   return (
    <div>
    <Header/>
       <div className="col main pt-5 mt-3">
     
           <nav aria-label="breadcrumb" style={{backgroundColor:"#0B1145",borderRadius:"1em"}}>
               <ol className="breadcrumb" style={{backgroundColor:"#0B1145",borderRadius:"2em"}}>
                  <h6 className="display-6 font-weight-bold text-white">Welcome  to Employee Manage Dashboard..!!</h6>
               </ol>
           </nav>
           <p className="lead d-none d-sm-block">Employee Records</p>

           <div className="row mb-4 ml-1 mr-1 pt-0 pb-0" style={{justifyContent:"center", gap:"70px"}}>
               <DashboardCard bcolor="#0B1145" cardtext="All Employee" value={empdetails.length}/>
               <DashboardCard bcolor="#F2C800" cardtext="Total Employee salary" value={totalSalary}/>
           </div>

           <hr/>

           <div className="row" style={{justifyContent:"center" }}>
               <div className="col-lg-5 col-md-6 col-sm-12 col-sm-offset-5">
                   <h4 className='title mt-3 mb-3 text-center text-secondary'> Employee by Month Chart</h4>
               </div>
               <div className="col-lg-5 col-md-6 col-sm-12 col-sm-offset-5">
                   <h4 className='title mt-3 mb-3 text-center text-secondary'> Chart</h4>
               </div>
           </div>

           <a id="more"></a>
           <hr/>

           <div className="row" className="head" >
               <h5 className="mt-3 mb-3 text-secondary">
                  Check More Records of Employee
               </h5>
               <Button colorScheme="blue" size="sm" >view all</Button>
           </div>

           <div className="table-responsive">
               <table className="table table-striped">
                   <thead className="thead-light">
                       <tr>
                           <th>Employee Name</th>
                           <th>Employee salary</th>
                           <th>Employee gender</th>
                           <th>Employee nic</th>
                           <th>Employee position</th>
                       </tr>
                   </thead>
                   <tbody>
                           

                       {empdetails.length > 0 && empdetails.map((employee) => (
                       
                           <tr key={employee._id}>
                               <td>{employee.name}</td>
                               <td>{employee.salary}</td>
                               <td>{employee.gender}</td>
                               <td>{employee.nic}</td>
                               <td>{employee.position}</td>

                            </tr>))}
                    </tbody>
                </table>
            </div>    
     </div>
   </div>
   )}

   export default Dashboerd;*/


   import React, { useState, useEffect } from 'react';
   import axios from 'axios';
   import { Button } from '@chakra-ui/react';
   import DashboardCard from "../employeMag/DashboardCard"
   import Header from "../employeMag/Header"
   
   const Dashboerd = () => {
    const [empdetails, setEmpdetails] = useState([]);
    const [totalSalary, setTotalSalary] = useState(null); // update initial state to null
    
    useEffect(() => {
      axios.get("http://localhost:8000/api/empdetail/get")
        .then(response => {
          console.log(response.data); // Check the data structure
          setEmpdetails(response.data.empdetail);
          setTotalSalary(response.data.totalSalary); // Set totalSalary from the API response
        })
        .catch(error => {
          console.log(error);
        });
    }, []);
    
    return (
      <div className='bodycolor'>
        <Header />
        <div className="col main pt-5 mt-3">
          <nav aria-label="breadcrumb" style={{ backgroundColor: "#0B1145", borderRadius: "1em" }}>
            <ol className="breadcrumb" style={{ backgroundColor: "#0B1145", borderRadius: "2em" }}>
              <h6 className="display-6 font-weight-bold text-white">Welcome  to Employee Manage Dashboard..!!</h6>
            </ol>
          </nav>
          <p className="lead d-none d-sm-block">Employee Records</p>
    
          <div className="row mb-4 ml-1 mr-1 pt-0 pb-0" style={{ justifyContent: "center", gap: "70px" }}>
            <DashboardCard bcolor="#0B1145" cardtext="All Employee" value={empdetails.length} />
            {totalSalary != null && <DashboardCard bcolor="#F2C800" cardtext="Total Employee salary" value={`$${totalSalary}`} />} {/* Add a check before rendering the DashboardCard */}
          </div>
    
          <hr />
    
          <div className="row" style={{ justifyContent: "center" }}>
            <div className="col-lg-5 col-md-6 col-sm-12 col-sm-offset-5">
              <h4 className='title mt-3 mb-3 text-center text-secondary'> Employee by Month Chart</h4>
            </div>
            <div className="col-lg-5 col-md-6 col-sm-12 col-sm-offset-5">
              <h4 className='title mt-3 mb-3 text-center text-secondary'> Chart</h4>
            </div>
          </div>
    
          <a id="more"></a>
          <hr />
    
          <div className="row" className="head" >
            <h5 className="mt-3 mb-3 text-secondary">
              Check More Records of Employee
            </h5>
            <Button colorScheme="blue" size="sm" >view all</Button>
          </div>
    
          <div className="table-responsive">
            <table className="table table-striped">
              <thead className="thead-light">
                <tr>
                  <th>Employee Name</th>
                  <th>Employee salary</th>
                  <th>Employee gender</th>
                  <th>Employee nic</th>
                  <th>Employee position</th>
                </tr>
              </thead>
              <tbody>
              {empdetails.length > 0 && empdetails.map((employee) => (
  
                          <tr key={employee._id}>
                               <td>{employee.name}</td>
                               <td>{employee.salary}</td>
                               <td>{employee.gender}</td>
                               <td>{employee.nic}</td>
                               <td>{employee.position}</td>

                            </tr>))}
                    </tbody>
                </table>
            </div>    
     </div>
   </div>
   )}

   export default Dashboerd;
   
