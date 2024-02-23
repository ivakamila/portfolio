import React from "react";
import "./About.scss";

const About = () => {
  return (
    <div className="about-me section" id="about">
      <h2 className="title">About Me</h2>
      <div className="about-container small-container">
        <p>
          My name is Kamila Ivashchenko and I'm a self taught frontend developer based in Gothenburg.
          Currently I work at Mardi Gras Digital, where my main focus 
          is being part of a team that's building an in-house component library and working on e-commerce 
          projects for different customers.
        </p>
        <p>
          I come from 7 years of experience in working with SEO and affiliate
          marketing, which also included managing Wordpress websites and creating optimized content. 
        </p>
        <p>Two years ago I transitioned to frontend development and since then I have mainly worked with 
          the Vue framework, Razor Pages and the Umbraco CMS.</p>
        <p>
          I'm passionate about beautiful interfaces and intuitively implemented UX. 
          I enjoy creating, learning, and thinking of how to make
          things better.
        </p>
        <p>When I'm not coding, I enjoy traveling, reading and running.</p>
      </div>
    </div>
  );
};

export default About;
