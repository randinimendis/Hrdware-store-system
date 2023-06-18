import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
      <nav className="navbar navbar-dark navbar-expand-md bg-dark py-3">
        <div className="container">
          <Link className="navbar-brand d-flex align-items-center" to="/">
          <span>
            <img src={"brand.PNG"} style={{width:"70px"}} alt="brand"/>
          </span>
          </Link>
          <button
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navcol-5"
          >
            <span className="visually-hidden">Toggle navigation</span>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div id="navcol-5" className="collapse navbar-collapse">
            <p className="navbar-text assistance">
              <strong>
                <span>NEED ASSISTANCE?</span>
              </strong>
              <br />
              <span>Call us on 0117825999</span>
            </p>
            <p className="navbar-text delivery">
              <strong>
                <span>ISLAND WIDE DELIVERY</span>
              </strong>
              <br />
              <span>Cash on delivery available</span>
            </p>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item" style={{ marginRight: "10px" }}>
                <input type="search" style={{ height: "37px" }} />
              </li>
              <li className="nav-item">
                <button className="btn btn-primary" type="button">
                  Search
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
};

export default NavBar;
