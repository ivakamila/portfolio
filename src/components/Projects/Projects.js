import React from "react";
import ZenHome from "./../../assets/zenhome.png";
import Portfolio from "./../../assets/portfolio.png";
import BuildupNepal from "./../../assets/buildup-nepal.png";
import { BsGithub } from "react-icons/bs";
import { FaExternalLinkAlt } from "react-icons/fa";
import "./Projects.scss";

const Projects = () => {
  return (
    <div className="projects section" id="projects">
      <h2 className="title">My Projects</h2>
      <div className="project-list large-container">
        <div className="project-card">
          <img src={ZenHome} alt="ZenHome" className="project-img" />
          <div className="project-info">
            <h3>ZenHome</h3>
            <div className="project-desc">
              <p>
                ZenHome is an e-commerce application built with React for the
                frontend and Firebase for the backend.
              </p>
              <p>
                The application uses Firebase for authentication and storing
                product data.
              </p>
            </div>
            <ul className="project-stack">
              <li>HTML5</li>
              <li>CSS</li>
              <li>React.js</li>
              <li>Firebase</li>
            </ul>
            <div className="project-links">
              <a href="https://github.com/ivakamila/ZenHomes" target="_blank">
                <BsGithub />
              </a>
              <a href="https://ivakamila.github.io/ZenHomes" target="_blank">
                <FaExternalLinkAlt />
              </a>
            </div>
          </div>
        </div>
        <div className="project-card">
          <img src={BuildupNepal} alt="Buildup Nepal" className="project-img" />
          <div className="project-info">
            <h3>Buildup Nepal</h3>
            <div className="project-desc">
              <p>Development of a web application that showcases the performance and impact of a client's business. </p>
            </div>
            <ul className="project-stack">
              <li>HTML5</li>
              <li>CSS</li>
              <li>React.js</li>
              <li>Chart.js</li>
            </ul>
            <div className="project-links">
              <a href="https://github.com/ivakamila/BuildUpNepal" target="_blank">
                <BsGithub />
              </a>
              <a href="https://ivakamila.github.io/BuildUpNepal" target="_blank">
                <FaExternalLinkAlt />
              </a>
            </div>
          </div>
        </div>
        <div className="project-card">
          <img src={Portfolio} alt="ZenHome" className="project-img" />
          <div className="project-info">
            <h3>Portfolio</h3>
            <div className="project-desc">
              <p>A single page portfolio application.</p>
            </div>
            <ul className="project-stack">
              <li>HTML5</li>
              <li>SCSS</li>
              <li>React.js</li>
            </ul>
            <div className="project-links">
              <a href="https://github.com/ivakamila/portfolio" target="_blank">
                <BsGithub />
              </a>
              <a href="https://ivakamila.github.io/portfolio" target="_blank">
                <FaExternalLinkAlt />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
