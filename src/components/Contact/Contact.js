import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="contact" id="contact">
      <h2 className="title">Contact me</h2>
      <div className="contact-container">
        <div className="left">
          <h3>Contact Info</h3>
          <div className="info">
            <i className="fas fa-phone-alt info-icon"></i>
            <p>+46987987987</p>
          </div>
          <div className="info">
            <i className="fas fa-envelope info-icon"></i>
            <p>ivakamila@gmail.com</p>
          </div>
          <div className="info">
            <i className="fas fa-map-marker-alt info-icon"></i>
            <p>Gothenburg, Sweden</p>
          </div>
        </div>
        <div className="right">
          <form action="" className="contact-form">
            <label htmlFor="name">
              Your name
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label htmlFor="email">
              Your email
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label htmlFor="message">
              Your message
              <textarea
                type="text"
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </label>
            <button className="submit-btn" type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
