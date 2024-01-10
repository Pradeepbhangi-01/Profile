import React from "react";
import "./Experience.scss";

function Experience() {
  return (
    <section id="experience">
      <h1 className="section-heading mb75px">
        <span>
          <i className="fas fa-briefcase"></i>
        </span>
        <span> Work Experience </span>
      </h1>
 
      <div className="timeline">
        <div className="timeline-box">
          <div className="timeline-container">
            <div className="timeline-logo">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Tata_Consultancy_Services_Logo.svg/2560px-Tata_Consultancy_Services_Logo.svg.png" />
            </div>
            <h3 className="experience-designation1 m0 m-blue">
              MERN developer
            </h3>
            <h4 className="experience-company-name">TCS Bangalore</h4>
            <h5 className="experience-duration m0">Jan 2023 - Sept 2023</h5>

            <p className="experience-description text-align-justify">
              As a MERN Stack Developer with 1.5 years of hands-on experience, I
              am adept at designing, implementing, and maintaining robust and
              scalable web applications. My expertise lies in utilizing MongoDB
              for efficient data storage, Express.js for server-side application
              logic, React for building dynamic user interfaces, and Node.js for
              seamless server-side operations.
            </p>
          </div>
        </div>

        <div className="timeline-box left">
          <div className="timeline-container">
            <div className="timeline-logo">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Tata_Consultancy_Services_Logo.svg/2560px-Tata_Consultancy_Services_Logo.svg.png" />
            </div>
            <h3 className="experience-designation1 m0 m-blue">
              NodeJS developer
            </h3>
            <h4 className="experience-company-name">TCS Bangalore</h4>
            <h5 className="experience-duration m0">Dec 2021 - Dec 2022</h5>

            <p className="experience-description text-align-justify">
              {" "}
              I designed and maintained scalable solutions, developed RESTful
              APIs, and integrated databases for seamless data flow. I conducted
              code reviews, optimized performance, and collaborated
              cross-functionally. Proficient in MongoDB, I ensured secure
              development practices and stayed updated on industry trends for
              continual process enhancement.
            </p>
          </div>
        </div>

        <div id="timeline-divider1">
          <div className="timeline-traveller">
            <div>
              <i className="fas fa-plane"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
