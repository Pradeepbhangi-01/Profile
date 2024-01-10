import React from "react";
import "./Home.scss";
import profileImg from "../../assets/images/profile.jpg";
import Navbar from "../navbar/Navbar";
import About from "../about/About";

function Home() {
  return (
    <div>
      <div className="main-container">
        <Navbar />
        <About />
      </div>

      <div className="section">
        <div className="img-container">
          <img src={profileImg} alt="profile Image" />
        </div>
        <div className="description-container">
          Enthusiastic and skilled full stack software developer with 1.5 years
          of experience in front-end and back-end development. Dedicated to
          delivering high-quality code and fostering collaborative solutions for
          exceptional user experiences.
        </div>
      </div>
    </div>
  );
}

export default Home;
