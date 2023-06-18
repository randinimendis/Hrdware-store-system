import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-white bg-dark">
      <div className="container py-4 py-lg-5">
        <div className="row justify-content-center">
          <div className="col-sm-3 col-md-3 text-center text-lg-start d-flex flex-column">
            <h3 className="fs-6 text-white">Site map</h3>
            <ul className="list-unstyled">
              <li>About us</li>
              <li>
                <Link className="link-light" to="contact-us">
                  Contact us
                </Link>
              </li>
              <li>
                <Link className="link-light" href="privacy-policy">
                  Privacy policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-sm-3 col-md-3 text-center text-lg-start d-flex flex-column">
            <h3 className="fs-6 text-white">Find us</h3>
            <div className="row">
              <div className="col">
                <FontAwesomeIcon icon={faFacebookF} />
              </div>
              <div className="col">
                <FontAwesomeIcon icon={faInstagram} />
              </div>
              <div className="col">
                <FontAwesomeIcon icon={faTwitter} />
              </div>
            </div>
          </div>
          <div className="col-sm-3 col-md-3 text-center text-lg-start d-flex flex-column">
            <h3 className="fs-6 text-white">Newsletter</h3>
            <ul className="list-unstyled">
              <li></li>
            </ul>
            <div className="input-group">
              <input
                className="form-control"
                type="text"
                placeholder="Email address"
                style={{ borderRadius: "0" }}
              />
              <button
                className="btn btn-primary"
                type="button"
                style={{ borderRadius: "0" }}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <hr />
        <div className="d-flex justify-content-between align-items-center pt-3">
          <p className="mb-0">Copyright © TOOL shed</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
