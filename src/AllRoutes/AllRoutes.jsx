import React from "react";
import { Route, Routes } from "react-router-dom";
import Cities from "../Utils/Cities";
import Home from "../Utils/Home";
import Partners from "../Utils/Partners";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/cities" element={<Cities />} />
        <Route path="/partners" element={<Partners/>} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
