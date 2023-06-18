import React, { createContext, useState } from "react";

// Create the context
export const AuthContext = createContext();

// Create the context provider
export const AuthProvider = ({ children }) => {
  const [address, setAddress] = useState(null);
  const [email, setEmail] = useState(null);
  const [fname, setFname] = useState(null);
  const [lname, setLname] = useState(null);
  const [phone, setPhone] = useState(null);
  const [token, setToken] = useState(null);
  const [id, setId] = useState(null);

  // Set the token when the user logs in
  const login = (address, email, fname, lname, phone, token,id) => {
    setAddress(address);
    setEmail(email);
    setFname(fname);
    setLname(lname);
    setPhone(phone);
    setToken(token);
    setId(id);
  };

  // Clear the token when the user logs out
  const logout = () => {
    setAddress(null);
    setEmail(null);
    setFname(null);
    setLname(null);
    setPhone(null);
    setToken(null);
    setId(null);
  };

  // Pass the token and login/logout functions to the value prop
  return (
    <AuthContext.Provider
      value={{ address, email, fname, lname, phone, token, id, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
