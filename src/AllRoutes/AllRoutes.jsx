import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminPanel from "../components/AdminPanel";
import Calender from "../Utils/Calender";
import Cities from "../Utils/Cities";
import Contact from "../Utils/Contact";
import Home from "../Utils/Home";
import PageNotFound from "../Utils/PageNotFound";
import Partners from "../Utils/Partners";
import Register from "../Utils/Register"
import TheApp from "../Utils/TheApp";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" exact={true} element={<Home />} />
        <Route path="/cities" element={<Cities />} />
        <Route path="/partners" element={<Partners/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/calender" element={<Calender/>} />
        <Route path="/apps" element={<TheApp/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/admin" element={<AdminPanel/>}/>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    </div>
  );
};

export default AllRoutes;
