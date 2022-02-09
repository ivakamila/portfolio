import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-me" id="about">
      <h2 className="title">About Me</h2>
      <div className="about-container">
        <p>
          Hi! I'm Kamila, a self taught front-end developer based in Gothenburg.
          My core skills are HTML, CSS, JavaScript and React.
        </p>
        <p>
          I come from 7 years of experience in working with SEO and affiliate
          marketing.
        </p>
        <p>
          I have a passion for creating, learning, and thinking of how to make
          things better.
        </p>
        <p>When I'm not coding, I enjoy traveling, reading and working out.</p>
      </div>
    </div>
  );
};

export default About;
