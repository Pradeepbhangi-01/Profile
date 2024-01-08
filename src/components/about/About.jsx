import React from "react";
import "./About.scss";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function About() {
  return (
    <div className="container">
      <div className="profile-container">
        <div className="about-title">
          <h2>Pradeep Bhangi</h2>
        </div>
        <div className="icon-container">
          <ul className="follow ">
            <li className="hover-link">
              <a href="https://github.com/Pradeepbhangi-01" target="_blank">
                <FaGithub />
              </a>
            </li>
            <li className="hover-link">
              <a
                href="https://www.linkedin.com/in/pradeep-bhangi-93a148193/"
                target="_blank"
              >
                <FaLinkedin />
              </a>
            </li>

            <li className="hover-link">
              <a href="" target="_blank">
                <FaXTwitter />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
