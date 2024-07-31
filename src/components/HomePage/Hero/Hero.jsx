import React from 'react'
// import { FaArrowUp  } from "react-icons/fa"
// import {MdNorthEast } from "react-icons/md"
import heroPic from "../../../assets/hero_placeholder.png"
import "./hero.css"

const Hero = () => {
  return (
    <div className='hero-container section-padding'>
      {/* <RightUpwardArrow /> */}
      {/* <FaArrowUp style={{ transform: 'rotate(45deg)' }}/> */}
      {/* <MdNorthEast /> */}

      <div className="hero-content">
        <h1>Discover Your Dream Lodge with NxLodge</h1>
        <p>Your journey to finding the perfect lodge begins here. Explore our listings to find the lodge that matches your preference.</p>
        <button className='learn-more'>Learn More</button>
        <button className='browse-properties'>Browse Properties</button>
        {/* To be Included once we start having users and clients who have gotten lodges through this platform. */}
        <div className="users-summary">
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
        </div>
      </div>
      <div className="hero-image">
        <img src={heroPic} alt="" />
      </div>
    </div>
  )
}

export default Hero
