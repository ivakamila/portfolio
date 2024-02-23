import React, { useState, useEffect } from "react";
import "./Footer.scss";

const Footer = () => {
  const [url, setUrl] = useState(null)

  useEffect(() => {
    setUrl(window.location.pathname)
  }, [])

  return (
    <footer className="footer">
      <div className="large-container">
        <div className="copyright">
          <p>© 2022 Kamila Ivashchenko</p>
        </div>
        <div>
          <ul className="footer-links">
            <li>
              <a href={`${url}#top`}>Home</a>
            </li>
            <li>
              <a href={`${url}#about`}>About</a>
            </li>
            <li>
              <a href={`${url}#resume`}>Resume</a>
            </li>
            <li>
              <a href={`${url}#projects`}>Projects</a>
            </li>
            <li>
              <a href={`${url}#contact`}>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
