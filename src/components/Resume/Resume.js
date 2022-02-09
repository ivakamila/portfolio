import React, { useState } from "react";
import data from "../../data";
import { saveAs } from "file-saver";
import CV from "../../assets/CV.pdf";
import "./Resume.css";

const Resume = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const getActiveClass = (index, className) => {
    return toggleState === index ? className : "";
  };

  const saveFile = () => {
    saveAs(CV, "Kamila Ivashchenko's CV.pdf");
  };

  const { Tabs, Education, Experience, ProgrammingSkills, Interests } = data;

  return (
    <div className="resume" id="resume">
      <h2 className="title">Resume</h2>
      <div className="tabs">
        <div className="tab-list">
          <ul>
            {Tabs.map((item, index) => {
              return (
                <li
                  key={index}
                  className={`tab-title ${getActiveClass(
                    index,
                    "active-tabs"
                  )}`}
                  onClick={() => toggleTab(index)}
                >
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="resume-info">
          {Education.map((item) => {
            return (
              <div
                className={`content ${getActiveClass(0, "active-content")}`}
                key={item.id}
              >
                <h3>{item.university}</h3>
                <h4>{item.major}</h4>
                <p className="dates">{item.years}</p>
              </div>
            );
          })}
          {Experience.map((item) => {
            return (
              <div
                className={`content ${getActiveClass(1, "active-content")}`}
                key={item.id}
              >
                <h3>
                  {item.title} <span>({item.years})</span>
                </h3>
                <h4>{item.position}</h4>
                {item.duties.map((duty, index) => {
                  return (
                    <div key={index} className="job-desc">
                      <p>
                        <i className="fas fa-angle-double-right job-icon"></i>
                        {duty}
                      </p>
                    </div>
                  );
                })}
              </div>
            );
          })}
          {getActiveClass(2, "active-content") && (
            <div className="skills">
              {ProgrammingSkills.map((skill, index) => {
                return (
                  <div
                    className={`content ${getActiveClass(
                      2,
                      "active-content skills"
                    )}`}
                    key={index}
                  >
                    <div className="skill">
                      {skill.icon}
                      <p>{skill.title}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
          {getActiveClass(3, "active-content") && (
            <div className="interests">
              {Interests.map((interest, index) => {
                return (
                  <div
                    className={`content ${getActiveClass(
                      3,
                      "active-content interests"
                    )}`}
                    key={index}
                  >
                    <div className="interest">
                      {interest.icon}
                      <p>{interest.title}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      <button className="btn" onClick={saveFile}>
        <i className="fa fa-download"></i> Download CV
      </button>
    </div>
  );
};

export default Resume;
