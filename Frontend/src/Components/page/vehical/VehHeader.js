import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';



export default class VehHeader extends Component {
  render() {
    return (
      <div>
        
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">TOOL Shed</a>
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
              <a class="nav-link" href="/vehadd">Add Vehicle </a>
              <a class="nav-link" href="/vehadmin">Vehicles</a>             
            </div>
          </div>
        </div>

        
        
      </nav>
      
      </div>

      
    )
  }
}