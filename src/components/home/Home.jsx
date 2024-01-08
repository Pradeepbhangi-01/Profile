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
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni iusto
          ipsa quas aspernatur deserunt commodi magnam cumque cupiditate
          aliquam. Deserunt totam recusandae molestiae. Sit unde repellendus
          architecto fugiat voluptas dicta.
        </div>
      </div>
    </div>
  );
}

export default Home;
