/*import React, { useState } from 'react';
import { AppBar, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import ConstructionIcon from '@mui/icons-material/Construction';
import{ NavLink } from 'react-router-dom';
const Header = () => {
    const [value,setValue] = useState();
    return (
        <div>
        <AppBar sx={{backGroundColor: "#232F3D"}} position= "sticky">
        <Toolbar>
       
                  <Typography style={{fontSize:40}}>
                     <ConstructionIcon style={{fontSize:30,marginRight:20}}/>
                     Repair Management
                  </Typography>
        </Toolbar>
        </AppBar> 
        <Tabs
        textColor="inherit"
        indicatorColor='secondary'
        value={value}
        onChange={(e, val) => setValue(val)}
        >
        
         
                <Tab LinkComponent={NavLink} to ="/view"label="View Repairs" />
                <Tab LinkComponent={NavLink} to ="/add"label="Add Repairs" />
               <Tab LinkComponent={NavLink} to ="/status"label="Repair Status" />
               <Tab LinkComponent={NavLink} to ="/report"label="Repair Report" />
               <Tab LinkComponent={NavLink} to ="/return"label="Return Items" />
                <Tab LinkComponent={NavLink} to ="/returnitem"label="View Return Items" />
            
                </Tabs>
             </div>
    );
};
export default Header;*/

import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


export default class RepHeader extends Component {
  render() {
    return (
      <div>
        
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">TOOL Shed</a>
          <button
            class="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-bars"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
            <a class="nav-link" href="/">Dashboard</a>
              <a class="nav-link" href="/view">View Repairs</a>
              <a class="nav-link" href="/rapiradd">Add Repairs</a>
              <a class="nav-link" href="/status">Repair Status</a>
              <a class="nav-link" href="/report">Repair Report</a>
              <a class="nav-link" href="/return">Return Items</a>
              <a class="nav-link" href="/returnitem">View Return Items</a>
       
              
              

              
            </div>
          </div>
        </div>

        
        
      </nav>
      
      </div>
      

      
    )
  }
}