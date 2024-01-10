import React from "react";
import "./Education.scss";
import nvsImg from "../../assets/images/nvs.jpeg";
import sitImg from "../../assets/images/sitImg.png";

function Education() {
  return (
    <section id="education">
      <h1 class="section-heading mb75px">
        <span>
          <i class="fas fa-graduation-cap"></i>
        </span>
        <span> Education </span>
      </h1>

      <div class="timeline">
        <div class="timeline-box left">
          <div class="timeline-container">
            <div class="timeline-logo1">
              <img src={sitImg} />
            </div>
            <h3 class="experience-designation m0 m-blue">
              Bachelor's Degree in Mechanical Engineering
            </h3>
            <h4 class="experience-company-name">
              Siddaganga Institue Of Technology, Tumkur
            </h4>
            <h5 class="experience-duration m0">Aug, 2017 - July 2021</h5>
            <br />
            <h5 class="experience-duration m0">CGPA 7.33</h5>
          </div>
        </div>

        <div class="timeline-box right">
          <div class="timeline-container">
            <div class="timeline-logo1">
              <img src={nvsImg} />
            </div>
            <h3 class="experience-designation m0 m-blue">
              Higher Secondary School
            </h3>
            <h4 class="experience-company-name">
              Jawahar Navodaya Vidayalaya, Narayanpur
            </h4>
            <h5 class="experience-duration m0">June 2015 - May 2017</h5>
            <br />
            <h5 class="experience-duration m0">Class XII - 70.80%</h5>
          </div>
        </div>

        <div id="timeline-divider">
          <div class="timeline-traveller">
            <div>
              <i class="fas fa-plane"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
