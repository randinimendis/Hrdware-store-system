import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import NavBar2 from "./NavBar2";

const MainLayout = ({ Component }) => {
  return (
    <>
      <NavBar />
      <NavBar2 />
      <div className="row" style={{ height: "100vh" }}>
        <Component />
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
