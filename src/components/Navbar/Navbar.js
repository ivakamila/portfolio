import React, { useEffect, useState } from "react";
import data from "../../data";
import "./Navbar.scss";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [url, setUrl] = useState(null)
  const { NavLinks } = data;

  const handleClick = () => {
    setOpen(!open);
    setUrl(window.location.pathname)
  };

  return (
    <nav className="navbar">
      <div className="large-container">
        <div className="logo">
          <a href={`${url}#`} onClick={handleClick}>
            KI
          </a>
        </div>
        <div className="menu-icon" onClick={handleClick}>
          <i className={open ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <div className={`nav-links ${open ? "active" : ""}`}>
          {NavLinks.map((item, index) => {
            return (
              <a href={`${url}${item.id}`} onClick={handleClick} key={index}>
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
