import React from "react";
import { Link } from "react-router-dom";
// import "../App.css";
export const Navbar = () => {
  return (
    <header>
      <nav className="container flex navigation">
        <div className="flex nav-left">
          <h3>Kishan</h3>
          <div className="line">Soft</div>
        </div>
        <div className="menu">
          <ul className="flex">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/skills">Skills</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/about">About Me</Link>
            </li>
            <li>
              <Link to="/contact">Contact Me</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
