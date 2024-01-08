import React from "react";
import "./Navbar.scss";

function Navbar() {
  return (
    <div className="container">
      <div className="nav-container">
        <div className="main-container">
          <ul className="list-items">
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Experience</li>
            <li>Eduction</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
