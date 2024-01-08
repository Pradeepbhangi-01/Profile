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
            <h3 className="experience-designation m0 m-blue">
              NodeJS developer
            </h3>
            <h4 className="experience-company-name">TCS Bangalore</h4>
            <h5 className="experience-duration m0">Dec 2021 - Sept 2023</h5>

            <p className="experience-description text-align-justify">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>

        <div className="timeline-box left">
          <div className="timeline-container">
            <div className="timeline-logo">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Tata_Consultancy_Services_Logo.svg/2560px-Tata_Consultancy_Services_Logo.svg.png" />
            </div>
            <h3 className="experience-designation m0 m-blue">
              NodeJS developer
            </h3>
            <h4 className="experience-company-name">TCS Bangalore</h4>
            <h5 className="experience-duration m0">Dec 2021 - Sept 2023</h5>

            <p className="experience-description text-align-justify">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>

        <div id="timeline-divider">
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
