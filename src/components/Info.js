import React from "react";

const Info = () => {
  return (
    <section className="flex container banner">
      <div className="info-content flex">
        <div className="icon-container flex">
          <i class="fa-solid fa-ribbon"></i>
        </div>
        <div>
          <strong>IT</strong>
          <p>Graduate</p>
        </div>
      </div>

      <div className="info-divider"></div>
      <div className="info-content flex">
        <div className="icon-container flex">
          <i class="fa-solid fa-ribbon"></i>
        </div>
        <div>
          <strong>5+ projects</strong>
          <p>Completed</p>
        </div>
      </div>
      <div className="info-divider"></div>
      <div className="info-content flex">
        <div className="icon-container flex">
          <i class="fa-solid fa-ribbon"></i>
        </div>
        <div>
          <strong>1 year </strong>
          <p>Experience</p>
        </div>
      </div>

      <div></div>
      <div></div>
    </section>
  );
};

export default Info;
