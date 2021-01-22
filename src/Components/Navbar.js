import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";
import Burger from "./Burger";
import { MenuItems } from "./MenuItems";

const Navbar = () => {
  return (
    // BEM
    <nav className="navbar">
      <Link to="/">
        <h3 className="navbar__logo">Awesome Movies</h3>
      </Link>
      <Burger />
    </nav>
  );
};

export default Navbar;
