import React from "react";
import profilePic from "../assets/kisan.png";
// import "../App.css";
export const Hero = () => {
  return (
    <section id="home" className="container hero-section">
      <div className="grid hero">
        <div className="left flex">
          <p>
            Hi I am <span>Kishan Thapa</span>
          </p>
          <h3>Software Engineer</h3>
          <p>I love coding and teach others what I know</p>
          <button className="download-btn">
            <a href="../assets/portfolio-website.pdf">
              <i class="fa-solid fa-download"></i>Download CV
            </a>
          </button>
        </div>
        <div className="right flex">
          <div className="img-container">
            <img src={profilePic} />
          </div>
        </div>
      </div>
    </section>
  );
};
