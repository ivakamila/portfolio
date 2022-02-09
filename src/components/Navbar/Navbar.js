import React, { useState } from "react";
import logo from "../../assets/logo.png";
import data from "../../data";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { NavLinks } = data;

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <a href="/#">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <div className="menu-icon" onClick={handleClick}>
        <i className={open ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <div className={`nav-links ${open ? "active" : ""}`}>
        {NavLinks.map((item, index) => {
          return (
            <a href={`/${item.id}`} onClick={handleClick} key={index}>
              {item.title}
            </a>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
