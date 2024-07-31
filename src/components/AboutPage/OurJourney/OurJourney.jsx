import React from 'react'
import heroPic from "../../../assets/hero_placeholder.png"
import { IoSparklesSharp } from "react-icons/io5";
import "./ourJourney.css"

const OurJourney = () => {
    return (
        <div className='journey-container section-padding'>
            <div className="journey-content">
                <IoSparklesSharp />
                <h1>Our Journey</h1>
                <p>Our Story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary. Over the years, we've expanded our reach, forged valuable partnerships, and gained the trust of countless clients.</p>
                
                {/* To be Included once we start having users and clients who have gotten lodges through this platform. */}
                <div className="journey-users-summary">
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

export default OurJourney
