import React, { useState } from 'react';
import { AppBar, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import PaymentsIcon from '@mui/icons-material/Payments';
import{ NavLink } from 'react-router-dom';

const FinacHeader = () => {
    const [value,setValue] = useState();
    return (
        <div>
        <AppBar sx={{backgroundColor: "#232F3D"}} position= "sticky">
        <Toolbar>
       
                  <Typography>
                     <PaymentsIcon/><br></br>
                     Payment Management
                  </Typography>
        </Toolbar>
        </AppBar> 
        <Tabs
        textColor="inherit"
        indicatorColor='secondary'
        value={value}
        onChange={(e, val) => setValue(val)}
        >
        
                <Tab LinkComponent={NavLink} to ="/finadd"label="Add Checkouts" />
                <Tab LinkComponent={NavLink} to ="/finview"label="View Checkout" />
                <Tab LinkComponent={NavLink} to ="/update"label="Edit Checkout" />
               {/* <Tab LinkComponent={NavLink} to ="/addMoney"label="Money Transfer" />
                <Tab LinkComponent={NavLink} to = "/addcard" label = "Card" />
                <Tab LinkComponent={NavLink} to = "/addservice" label = "service" />*/}
                </Tabs>
             </div>
    );
};
export default FinacHeader;
