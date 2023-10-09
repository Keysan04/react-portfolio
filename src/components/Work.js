import React from "react";
import projectImage from "../assets/Himal.jpg";
const Work = () => {
  return (
    <section id="projects">
      <h2 className="title">My Recent Works</h2>
      <div className="grid projects-container">
        <div className="project-card">
          <div className="top">
            <img src={projectImage} alt="project-img" />
          </div>
          <div className="bottom-container">
            <h3>Personal Portfolio Website</h3>
            <p>October 2023</p>
            <a href="">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="">
              <i className="fa-brands fa-chrome"></i>
            </a>
            <a href="">
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
        <div className="project-card">
          <div className="top">
            <img src={projectImage} alt="project-img" />
          </div>
          <div className="bottom-container">
            <h3>CMS</h3>
            <p>October 2023</p>
            <a href="">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="">
              <i className="fa-brands fa-chrome"></i>
            </a>
            <a href="">
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
        <div className="project-card">
          <div className="top">
            <img src={projectImage} alt="project-img" />
          </div>
          <div className="bottom-container">
            <h3>IEIMS </h3>
            <p>October 2018</p>
            <a href="">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="">
              <i className="fa-brands fa-chrome"></i>
            </a>
            <a href="">
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
        <div className="project-card">
          <div className="top">
            <img src={projectImage} alt="project-img" />
          </div>
          <div className="bottom-container">
            <h3>NP CERT</h3>
            <p>July 2019</p>
            <a href="">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="">
              <i className="fa-brands fa-chrome"></i>
            </a>
            <a href="">
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
