import React from "react";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import "../Style/Navbar.css";
import {Link, NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
      <div className="Navbar">
        <div>
        <Link to={"/"}><img
            src="https://secureservercdn.net/45.40.145.201/79x.0e9.myftpupload.com/wp-content/uploads/2020/11/SparkAmerica2020-02-515x65.png"
            alt="logo"
          /></Link>
        </div>
      </div>
      <div className="Links">
        <NavLink style={({ isActive }) => { return { color: isActive ? "orange" : "" } }} to={"/cities"}><div>JOIN THE MOVEMENT</div></NavLink>
        <NavLink style={({ isActive }) => { return { color: isActive ? "orange" : "" } }} to={"/partners"}> <div>PARTNERS</div></NavLink>
        <NavLink style={({ isActive }) => { return { color: isActive ? "orange" : "" } }} to={"/calender"}> <div>CALENDER</div></NavLink>
        <NavLink style={({ isActive }) => { return { color: isActive ? "orange" : "" } }} to={"/apps"}> <div>THE APP</div></NavLink>
        <NavLink style={({ isActive }) => { return { color: isActive ? "orange" : "" } }} to={"/contact"}><div>CONTACT US</div></NavLink>
        <NavLink style={({ isActive }) => { return { color: isActive ? "orange" : "" } }} to={"/register"}> <div>REGISTER</div></NavLink>
        <a rel="noreferrer" href="https://www.facebook.com/" target={"_blank"}><div style={{ color: "#4267B2" }}>
          <FaFacebookSquare />
        </div></a>
        <a rel="noreferrer" href="https://www.instagram.com/" target={"_blank"}>  <div style={{ color: "#8a3ab9" }}>
          <FaInstagram />
        </div></a>
      </div>
    </>
  );
};

export default Navbar;
