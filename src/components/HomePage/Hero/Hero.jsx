import React from "react";
import heroPic from "../../../assets/image5.jpg";
import "./hero.css";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1>
          Discover Your Dream Lodge with <span>NxLodge</span>
        </h1>
        <p>
          Your journey to finding the perfect lodge begins here. Explore our
          listings to find the lodge that matches your preference.
        </p>

        <div className="action-btn">
          <button className="learn-more">Learn More</button>
          <button className="browse-properties">Browse Properties</button>
        </div>

        {/* To be included when we have them. */}
        {/* <div className="users-summary">
          <div className="review">
            <h2>200+</h2>
            <p>Happy Customers</p>
          </div>

          <div className="review">
            <h2>10k+</h2>
            <p>Lodges for Students</p>
          </div>

          <div className="review">
            <h2>16+</h2>
            <p>Years of Experience</p>
          </div>
        </div> */}
      </div>

      <div className="hero-image">
        <img src={heroPic} alt="hero pic showing lodges" />
      </div>
    </div>
  );
};

export default Hero;
