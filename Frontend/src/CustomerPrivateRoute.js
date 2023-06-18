import React, {  useContext, useEffect, useState } from "react";
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


const CustomerPrivateRoute = ({ element: Element, ...rest }) => {
	const isAuth = useAuth();
  if (isAuth === null)
    // waiting..
    return null;

  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default CustomerPrivateRoute;
