import React from 'react'
import "./ourValues.css"
import { FaStar, FaGraduationCap, FaUsers } from 'react-icons/fa';
import { IoSparklesSharp } from "react-icons/io5";


const OurValues = () => {

    const values = [
        {
            id: 1,
            icon: <FaStar />,
            title: "Trust",
            text: "Trust is the cornerstone of every successful real estate transaction."
        },
        {
            id: 2,
            icon: <FaGraduationCap />,
            title: "Excellence",
            text: "We set the bar high for ourselves. From the properties we list to the services we provide."
        },
        {
            id: 3,
            icon: <FaUsers />,
            title: "Client-Centric",
            text: "Your dreams and needs are at the center of our universe. We listen, understand."
        },
        {
            id: 4,
            icon: <FaStar />,
            title: "Our Commitment",
            text: "We are dedicated to providing you with the highest level of service, professionalism, and support."
        }
    ] 

  return (
    <section className='section-padding values-container'>
        <div className="values-text">
            <IoSparklesSharp />
            <h1>Our Values</h1>
            <p>Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.</p>
        </div>
        <div className="values-details">
            {
                values.map(value => (
                    <div className="values-content" key={value.id}>
                        <div className="values-title">
                            <div className='icon'>{value.icon}</div>
                            <h2>{value.title}</h2>
                        </div>
                        <p>{value.text}</p>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default OurValues