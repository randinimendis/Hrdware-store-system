import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


export default class Header extends Component {
  render() {
    return (
      <div>
        
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">TOOL Shed</a>
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
              
              <a className="nav-link" href="/"></a>
              <a className="nav-link" href="/emplsdash"> Employee Dashboard</a>
              <a className="nav-link" href="/emplsinquir">Add inquirys </a>
              
              
              

              
            </div>
          </div>
        </div>

        
        
      </nav>
      
      </div>
      

      
    )
  }
}