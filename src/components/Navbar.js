import React from "react";
// import "../App.css";
export const Navbar = () => {
  return (
    <header>
      <nav className="container flex navigation">
        <div className="flex nav-left">
          <h3>Kishan</h3>
          <div className="line">Soft. Engineer</div>
        </div>
        <div className="menu">
          <ul className="flex">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#about">About Me</a>
            </li>
            <li>
              <a href="#contact">Contact Me</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
