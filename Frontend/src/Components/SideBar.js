import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div
      className="col-md-2"
      style={{
        background: "rgb(143 143 143/9%)",
        paddingTop: "10px",
      }}
    >
      <nav id="sidebar">
        <div className="nav flex-column">
          <div>
            <h3
              className="nav-link active"
              style={{
                color: "black",
              }}
              data-bs-toggle="collapse"
              to="#category1"
              role="button"
              aria-expanded="false"
              aria-controls="category1"
            >
              <b>DASHBOARD</b>
            </h3>
          </div>
          <Link
            className="nav-link active"
            style={{
              color: "black",
              fontWeight: "bold",
            }}
            data-bs-toggle="collapse"
            to="#category1"
            role="button"
            aria-expanded="false"
            aria-controls="category1"
          >
            <i className="fas fa-chevron-right float-end"></i>Building hardware
          </Link>
          <div id="category1" className="collapse">
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  style={{
                    color: "black",
                  }}
                  to="#"
                >
                  Doors
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  style={{
                    color: "black",
                  }}
                  to="#"
                >
                  Flooring
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  style={{
                    color: "black",
                  }}
                  to="#"
                >
                  Water Proofing
                </Link>
              </li>
            </ul>
          </div>

          <Link
            className="nav-link"
            style={{
              color: "black",
              fontWeight: "bold",
            }}
            data-bs-toggle="collapse"
            to="#category2"
            role="button"
            aria-expanded="false"
            aria-controls="category2"
          >
            <i className="fas fa-chevron-right float-end"></i>Car Care
          </Link>
          <div id="category2" className="collapse">
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  style={{
                    color: "black",
                  }}
                  to="#"
                >
                  Accessories
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  style={{
                    color: "black",
                  }}
                  to="#"
                >
                  Exterior
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  style={{
                    color: "black",
                  }}
                  to="#"
                >
                  Interior
                </Link>
              </li>
            </ul>
          </div>

          <Link
            className="nav-link"
            style={{
              color: "black",
              fontWeight: "bold",
            }}
            data-bs-toggle="collapse"
            to="#category3"
            role="button"
            aria-expanded="false"
            aria-controls="category3"
          >
            <i className="fas fa-chevron-right float-end"></i>Paints
          </Link>
          <div id="category3" className="collapse">
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  style={{
                    color: "black",
                  }}
                  to="#"
                >
                  Floor paints
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  style={{
                    color: "black",
                  }}
                  to="#"
                >
                  Painting tools
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  style={{
                    color: "black",
                  }}
                  to="#"
                >
                  Under coat
                </Link>
              </li>
            </ul>
          </div>

          <Link
            className="nav-link"
            style={{
              color: "black",
              fontWeight: "bold",
            }}
            data-bs-toggle="collapse"
            to="#category4"
            role="button"
            aria-expanded="false"
            aria-controls="category4"
          >
            <i className="fas fa-chevron-right float-end"></i>Tools
          </Link>
          <div id="category4" className="collapse">
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  style={{
                    color: "black",
                  }}
                  to="#"
                >
                  Cutting tools
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  style={{
                    color: "black",
                  }}
                  to="#"
                >
                  DIY tools
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  style={{
                    color: "black",
                  }}
                  to="#"
                >
                  Handtools
                </Link>
              </li>
            </ul>
          </div>

          <Link
            className="nav-link"
            style={{
              color: "black",
              fontWeight: "bold",
            }}
            data-bs-toggle="collapse"
            to="#category5"
            role="button"
            aria-expanded="false"
            aria-controls="category5"
          >
            <i className="fas fa-chevron-right float-end"></i>Plumbing
          </Link>
          <div id="category5" className="collapse">
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  style={{
                    color: "black",
                  }}
                  to="#"
                >
                  Taps
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  style={{
                    color: "black",
                  }}
                  to="#"
                >
                  Valves
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  style={{
                    color: "black",
                  }}
                  to="#"
                >
                  Tanks
                </Link>
              </li>
            </ul>
          </div>

          <Link
            className="nav-link"
            style={{
              color: "black",
              fontWeight: "bold",
            }}
            data-bs-toggle="collapse"
            to="#category6"
            role="button"
            aria-expanded="false"
            aria-controls="category6"
          >
            <i className="fas fa-chevron-right float-end"></i>Roofing
          </Link>
          <div id="category6" className="collapse">
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  style={{
                    color: "black",
                  }}
                  to="#"
                >
                  Ceiling sheets
                </Link>
              </li>
            </ul>
          </div>
          <a
            className="nav-link"
            style={{
              color: "black",
              fontWeight: "bold",
            }}
            href="/finview"
          >
            <i className="fas fa-chevron-right float-end"></i>Finace
          </a>
          <a
            className="nav-link"
            style={{
              color: "black",
              fontWeight: "bold",
            }}
            href="/warradmin"
          >
            <i className="fas fa-chevron-right float-end"></i>Warranty
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
