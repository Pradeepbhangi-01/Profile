import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <section id="contact">
      <h1 class="section-heading mb50px">
        <span>
          <i class="far fa-address-card"></i>
        </span>
        <span> Contact </span>
      </h1>
      <div id="contact-container">
        <div id="contact-form-container">
          <form id="contact-form">
            <input
              id="input-name"
              name="name"
              type="text"
              placeholder="Your Name"
            />
            <input
              id="input-email"
              name="input-email"
              type="text"
              required
              placeholder="Your Email"
            />
            <textarea
              id="input-message"
              name="input-message"
              rows="2"
              cols="40"
              placeholder="Message"
            ></textarea>
            <button class="sub-btn" type="submit">
              SEND MESSAGE
            </button>
          </form>
        </div>
        <div id="my-details-container">
          <h3>Get In touch</h3>
          <p>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>

          <h3>My Address</h3>
          <div class="my-details-info-container">
            <i class="fas fa-map-marker-alt"></i>
            <span>Bengaluru, India</span>
          </div>

          <div class="my-details-info-container">
            <i class="far fa-envelope"></i>
            <span>pradeepbhangi.tech@gmail.com</span>
          </div>
        </div>
      </div>

      <div class="text-center social-icons">
        <ul class="horizontal-list">
          <li>
            <a href="https://www.linkedin.com/in/pradeep-bhangi-93a148193/">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </li>

          <li>
            <a href="https://github.com/Pradeepbhangi-01" target="_blank">
              <i class="fab fa-github"></i>
            </a>
          </li>

          <li>
            <a href="" target="_blank">
              <i class="fab fa-twitter"></i>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Footer;
