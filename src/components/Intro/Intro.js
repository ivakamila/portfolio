import React from "react";
import "./Intro.css";
import myPhoto from "../../assets/personal-photo.png";

const Intro = () => {
  return (
    <section className="intro" id="intro">
      <div className="intro-container">
        <div className="intro-left">
          <div className="social-icons">
            <a href="https://github.com/ivakamila">
              <i className="fab fa-github-square"></i>
            </a>
            <a href="https://www.linkedin.com/in/kamila-ivashchenko-76817878/">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
          <h2>Hi there, I'm </h2>
          <h1>Kamila Ivashchenko</h1>
          <h3>Front End Developer</h3>
          <div className="intro-btn">
            <button>About Me</button>
            <button>Contact Me</button>
          </div>
        </div>
        <div className="intro-right">
          <img src={myPhoto} alt="Kamila's profile" className="profile-photo" />
        </div>
      </div>
    </section>
  );
};

export default Intro;
