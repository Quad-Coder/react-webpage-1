import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../videos/R.gif";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/R" className="navbar-logo">
            <img src={logo} alt="loading..." />
          </Link>
          <div className="menu-icon">
            <i className=""></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
