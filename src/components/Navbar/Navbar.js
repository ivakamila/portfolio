import React, { useState } from "react";
import data from "../../data";
import "./Navbar.scss";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { NavLinks } = data;

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <nav className="navbar">
      <div className="large-container">
        <div className="logo">
          <a href="/#">
            KI
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
      </div>
    </nav>
  );
};

export default Navbar;
