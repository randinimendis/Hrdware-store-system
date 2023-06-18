import React, { Component, useContext, useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthContext } from '../../../AuthContext';
import { useNavigate } from 'react-router-dom';


export default function Header() {
  const navigate = useNavigate();
  const [role,SetRole]=useState("")

  const {  logout } = useContext(AuthContext);

  useEffect(() => { 
    const role = localStorage.getItem("role");
    SetRole(role);
  }, []);

  const handleLogOut = () => {
    logout();

    localStorage.removeItem("address");
    localStorage.removeItem("email");
    localStorage.removeItem("fname");
    localStorage.removeItem("lname");
    localStorage.removeItem("phone");
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    localStorage.removeItem("role");
    
    navigate("/login");
  };
 

    
    return (
      <div>
        
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">TOOL Shed</a>
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              
              {role==="admin" && <a className="nav-link" href="#"></a>}
              {role==="admin" &&<a className="nav-link" href="/">Dashboard</a>}
              {role==="admin" &&<a className="nav-link" href="/add">Add employee</a>}
              {role==="admin" &&<a className="nav-link" href="/admin">All Employee</a>}
              {role==="admin" &&<a className="nav-link" href="/inquiryShow">Employee Inquiry</a>}
              {role==="emp" &&<a className="nav-link" href="/emplsinquir">Add inquirys </a>}
              <span style={{cursor:"pointer"}} className="nav-link"  onClick={()=>handleLogOut()} >Log Out </span>

              
              

              
            </div>
          </div>
        </div>

        
        
      </nav>
      
      </div>
      

      
    )
  }

 
