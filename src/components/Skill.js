import React from "react";

const Skill = () => {
  return (
    <section id="skills" className="flex container skills">
      <h2 className="title">My Skills</h2>
      <div>
        <div>
          <i class="fa-brands fa-html5"></i>
          <p>HTML</p>
        </div>
        <div>
          <i class="fa-brands fa-js"></i>
          <h3>&nbsp;&nbsp;JS</h3>
        </div>
        <div>
          <i class="fa-brands fa-css3-alt"></i>
          <h3>CSS</h3>
        </div>
        <div>
          <i class="fa-brands fa-react"></i>
          <h3>React</h3>
        </div>
      </div>
    </section>
  );
};

export default Skill;
