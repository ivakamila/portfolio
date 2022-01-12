import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <nav className="footer">
      <div className="copyright">
        <p>© 2022 Kamila Ivashchenko</p>
      </div>
      <div>
        <ul className="footer-links">
          <li>
            <a href="#top">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#resume">Resume</a>
          </li>
          <li>
            <a href="projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Footer;
