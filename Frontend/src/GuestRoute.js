import React, { useState, useEffect, useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "./AuthContext";

const useAuth = () => {
  const [isAuth, setIsAuth] = useState(null);
  const { token } = useContext(AuthContext);

  useEffect(() => {
    if (token === null) {
      setIsAuth(false);
    } else {
      setIsAuth(true);
    }
  }, [token]);
  return isAuth;
};

const GuestsRoute = ({ location }) => {
  const isAuth = useAuth();
  if (isAuth === null) return null;

  if (!isAuth) {
    return <Outlet />;
  } else {
    return <Navigate to="/" />;
  }
};

export default GuestsRoute;
