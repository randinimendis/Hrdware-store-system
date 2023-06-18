import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext} from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";

const NavBar2 = () => {
  const navigate = useNavigate();

  const { token, fname, lname, logout } = useContext(AuthContext);

  const handleLogOut = () => {
    logout();

    localStorage.removeItem("address");
    localStorage.removeItem("email");
    localStorage.removeItem("fname");
    localStorage.removeItem("lname");
    localStorage.removeItem("phone");
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    
    navigate("/login");
  };
  return (
    <div className="">
      {token ? (
        <>
          <div className="col-auto">
            <Link to={"/profile"} style={{textDecoration:"none", paddingTop:"5px"}}>
              <b>Hi, {fname + " " + lname}</b>
            </Link>
          </div>
          <div className="col-auto">
            <button
              className="btn btn-outline-primary"
              onClick={() => handleLogOut()}
            >
              Logout
            </button>
          </div>
        </>
      ) : (
        <>
        
          <div className="col-auto">
            <button
              className="btn btn-outline-primary"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          </div>
          <div className="col-auto">
            <button
              className="btn btn-outline-success"
              onClick={() => navigate("/register")}
            >
              Register
            </button>
          </div>
        </>
      )}
      <div className="col-auto">
        <button className="btn btn-success" onClick={() => navigate("/cart")}>
          <FontAwesomeIcon icon={faShoppingCart} style={{ marginRight: 2 }} />
          View Cart
        </button>
      </div>
    </div>
  );
};

export default NavBar2;
