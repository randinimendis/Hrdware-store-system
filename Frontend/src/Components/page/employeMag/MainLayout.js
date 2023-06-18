import React from "react";
import Header from "react";

const MainLayout = ({ Component }) => {
  return (
    <>
      <Header />
     
      <div className="row" style={{ height: "100vh" }}>
        <Component />
      </div>
      
    </>
  );
};

export default MainLayout;
