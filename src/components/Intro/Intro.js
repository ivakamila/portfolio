import React from "react";
import "./Intro.css";
import myPhoto from "../../assets/personal-photo.png";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

const Intro = () => {
  return (
    <section className="intro" id="intro">
      <div className="intro-container">
        <div className="intro-left">
          <div className="social-icons">
            <a href="https://github.com/ivakamila" target="_blank">
              <BsGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/kamila-ivashchenko-76817878/"
              target="_blank"
            >
              <BsLinkedin />
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
