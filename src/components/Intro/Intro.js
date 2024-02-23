import React from "react";
import "./Intro.scss";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

const Intro = () => {
  return (
    <section className="intro" id="intro">
      <div className="intro-container">
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
            <a hrf="/#about">About Me</a>
            <a href="/#contact">Contact Me</a>
        </div>
        <a href="/#about" className="down-arrow"></a>
      </div>
    </section>
  );
};

export default Intro;
