import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class WarHeader extends Component {
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
              <a class="nav-link" href="/waradd">Warranty Registration </a>
              <a class="nav-link" href="/warradmin">Warranty Claim Process</a>
              
            </div>
          </div>
        </div>
        
      </nav>
      </div>
    )
  }
}