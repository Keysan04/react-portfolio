import React from "react";
import profilePic from "../assets/kisan.png";
const About = () => {
  return (
    <section id="#about" className="about">
      <h2 className="title"> About Me </h2>
      <div className="container flex">
        <div className="about-left flex">
          <img src={profilePic} alt="profilie-pic" />
        </div>
        <div className="about-right">
          <h2>Kishan Thapa</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sunt
            in quae enim ipsa cum quisquam eligendi architecto maiores quia
            dolores eos vel voluptates praesentium, necessitatibus facilis
            fugiat inventore ex.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
            perspiciatis.
          </p>
          <p>Sydney, Australia </p>
          <div>
            <div className="tag">Interest</div>
            <div className="flex interests">
              <span>Coding</span>
              <span>Reading</span>
              <span>Reading</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
