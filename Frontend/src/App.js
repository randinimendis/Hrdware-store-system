import "./App.css";
import HomePage from "./Components/HomePage";
import MainLayout from "./Components/MainLayout";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Addemployee from "./Components/page/employeMag/Addemployee"
import Admin from "./Components/page/employeMag/Admin"
import EditEmployee from "./Components/page/employeMag/EditEmployee"
import Dashboerd from "./Components/page/employeMag/Dashboerd";


import Empinquiry from "./Components/page/employeMag/Empinquiry"
import InquirViweAdmin from "./Components/page/employeMag/InquirViweAdmin";

import "./App.css";
import Login from "./Components/Login";
import Register from "./Components/Register";
//import Profile from "./Components/Profile";
//import Cart from "./Components/Cart";
import Profile from "./Components/Profile"
import Cart from "./Components/Cart"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CustomerPrivateRoute from "./CustomerPrivateRoute";
import { AuthContext } from "./AuthContext";
import { useContext, useEffect, useState } from "react";
import GuestsRoute from "./GuestRoute";
import AddWarranty from "./Components/page/warranty/AddWarranty";
import WarrAddmin from "./Components/page/warranty/WarrAdmin";
import EditWarranty from "./Components/page/warranty/EditWarranty";
import Addsupply from "./Components/page/supplymanagement/Addsupply";
import SupplyAdmin from "./Components/page/supplymanagement/SupplyAdmin";
import EditSupply from "./Components/page/supplymanagement/EditSupply";
import Addpurchase from "./Components/page/supplymanagement/Addpurchase";
import Addpurchasetable from "./Components/page/supplymanagement/Addpurchasetable";
import Editpurchase from "./Components/page/supplymanagement/Editpurchase";
import ViewRepair from "./Components/page/repair/ViewRepair";
import AddRepair from "./Components/page/repair/AddRepair";
import RepaireStatusTableRow from "./Components/page/repair/RepaireStatusTableRow"
import UpdateRepair from "./Components/page/repair/UpdateRepair";
import Returnitem from "./Components/page/repair/ReturnItems";
import RepairReport from "./Components/page/repair/RepairReport";
import ViewReturnItem from "./Components/page/repair/ViewReturnItems";
import Welcome from "./Components/page/Inventory/Welcome";
import Inventory1 from "./Components/page/Inventory/Inventory1";
import LowStockReport from "./Components/page/Inventory/LowStockReport";
import OutOfStockReport from "./Components/page/Inventory/OutOfStockReport";
import AddItem from "./Components/page/Inventory/AddItem";
import EditItem from "./Components/page/Inventory/EditItem";
import DeleteItem from "./Components/page/Inventory/DeleteItem";
import Card from "./Components/page/Inventory/Card";
import VehAdmin from "./Components/page/vehical/VehAdmin";
import Addvehicle from "./Components/page/vehical/Addvehicle";
import Editvehicle from "./Components/page/vehical/Editvehicle";
import AddCheckouts from "./Components/page/finace/AddCheckouts";
import Edit from "./Components/page/finace/Edit";
import ViewCheckout from "./Components/page/finace/ViewCheckout";

function App() {
  const { login } = useContext(AuthContext);
  const [role, SetRole] = useState("")
  useEffect(() => {
    const address = localStorage.getItem("address");
    const email = localStorage.getItem("email");
    const fname = localStorage.getItem("fname");
    const lname = localStorage.getItem("lname");
    const phone = localStorage.getItem("phone");
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");
    SetRole(role);
    login(address, email, fname, lname, phone, token);
  }, [login]);

  const customerRoutes = (
    <BrowserRouter basename="/">
      <Routes>
        {/* PUBLIC ROUTES */}

        <Route exact path="/" element={<MainLayout Component={HomePage} />} />
        <Route path="/home" element={<Navigate to="/" />} />

        {/* GUEST ROUTES */}
        <Route element={<GuestsRoute />}>
          <Route
            exact
            path="/login"
            element={<MainLayout Component={Login} />}
          />
          <Route
            exact
            path="/register"
            element={<MainLayout Component={Register} />}
          />
        </Route>

        
           
        {/* Finace routes */}
        <Route path="/finadd" element={<AddCheckouts />} exact />
        <Route path="/finview" element={<ViewCheckout />} exact />
        <Route path="/update/:id" element={<Edit />} exact />

        {/* warranty routes */}
        <Route path="/waradd" element={<AddWarranty />} />
        <Route path="/warradmin" element={<WarrAddmin />} />
        <Route path="/warranty/edit/:id" element={<EditWarranty />} />

        {/* CUSTOMER PRIVATE ROUTES */}
        <Route element={<CustomerPrivateRoute />}>
        {/*  <Route path="/cart" element={<MainLayout Component={Cart} />} />*/}
        <Route path ="/cart" element={<MainLayout Component={Cart}/>} />
          <Route
            exact
            path="/profile"
            element={<MainLayout Component={Profile} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )

  const employeeRoutes = (
    <BrowserRouter basename="/">
      <Routes>

        {/**Employee maneger side */}
        <Route path="/" element={<Welcome />} />
        <Route path="/add" element={<Addemployee />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/edit/:id" element={<EditEmployee />} />
        <Route path="/empdashboard" element={<Dashboerd />} />

        <Route path="/supplyadd" element={<Addsupply />} />
        <Route path="/supplyadmin" element={<SupplyAdmin />} />
        <Route path="/supplyedit/:id" element={<EditSupply />} />
        <Route path="/supplypurch" element={<Addpurchase />} />
        <Route path="/supplyAllpdudactdetail" element={<Addpurchasetable />} />
        <Route path="/puedit/:id" element={<Editpurchase />} />


        {/* issue found in status not fixed */}
        <Route path="/view" element={<ViewRepair />} exact />
        <Route path="/rapiradd" element={<AddRepair />} />
        <Route path="/editRepaire" element={<UpdateRepair />} />
        <Route path="/return" element={<Returnitem />} />
        <Route path="/status" element={<RepaireStatusTableRow />} />
        <Route path="/report" element={<RepairReport />} />
        <Route path="/returnitem" element={<ViewReturnItem />} />

        <Route path='/Inventory' element={<Inventory1 />} />
        <Route path='/Inventory/LowStock' element={<LowStockReport />} />
        <Route path='/Inventory/EmptyStock' element={<OutOfStockReport />} />
        <Route path='/Add' element={<AddItem />} />
        <Route path='/Inventory/Edit' element={<EditItem />} />
        <Route path='/Inventory/Delete/:id' element={<DeleteItem />} />
        <Route path='/Sales' element={<Card />} />

        <Route path="/vehadmin" element={<VehAdmin />} />
        <Route path="/vehadd" element={<Addvehicle />} />
        <Route path="/vehedit/:id" element={<Editvehicle />} />

        {/**Employee side */}
        <Route path="/emplsinquir" element={<Empinquiry />} />
        <Route path="/inquiryShow" element={<InquirViweAdmin />} />


      </Routes>
    </BrowserRouter>
  )

  return (
    <>
      <ToastContainer
        position="top-right"
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover={false}
        pauseOnFocusLoss={false}
      />
      {
        role === "emp" || role === "admin" ? employeeRoutes :
          customerRoutes}
    </>
  );
}

export default App;
