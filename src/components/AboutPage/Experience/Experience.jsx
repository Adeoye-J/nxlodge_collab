import React from 'react'
import { IoSparklesSharp } from "react-icons/io5";
import "./experience.css"

const Experience = () => {

const steps = [
    {
        id: 1,
        step_number: "Step 01",
        heading: "Navigating the NxLodge Experience",
        paragraph: "At NxLodge, we've designed a straightforward process to help you find and purchase your dream property with ease. Here's a step-by-step guide to how it all works."
    },
    {
        id: 2,
        step_number: "Step 02",
        heading: "Narrowing Down Your Choices",
        paragraph: "Once you've found properties that catch your eye, save them to your account or make a shortlist. This allows you to compare and revisit your favorites as you make your decision."
    },
    {
        id: 3,
        step_number: "Step 03",
        heading: "Personalized Guidance",
        paragraph: "Have questions about a property or need more information? Our dedicated team of real estate experts is just a call or message away."
    },
    {
        id: 4,
        step_number: "Step 04",
        heading: "See It for Yourself",
        paragraph: "Arrange viewings of the properties you're interested in. We'll coordinate with the property owners and accompany you to ensure you get a firsthand look at your potential new home."
    },
    {
        id: 5,
        step_number: "Step 05",
        heading: "Making Informed Decisions",
        paragraph: "Before making an offer, our team will assist you with due diligence, including property inspections, legal checks, and market analysis. We want you to be fully informed and confident in your choice."
    },
    {
        id: 6,
        step_number: "Step 06",
        heading: "Getting the Best Deal",
        paragraph: "We'll help you negotiate the best terms and prepare your offer. Our goal is to secure the property at the right price and on favorable terms."
    }
]


  return (
    <section className="section-padding experience-container">
        <div className="experience-header">
            <IoSparklesSharp />
            <h1>Navigating the NxLodge Experience</h1>
            <p>At NxLodge, we've designed a straightforward process to help you find and purchase your dream property with ease. Here's a step-by-step guide to how it all works.</p>
        </div>
        <div className="experience-steps">
            {
                steps.map(step => (
                    <div className="experience-step" key={step.id}>
                        <h3>{step.step_number}</h3>
                        <div className="experience-content">
                            <h2>{step.heading}</h2>
                            <p>{step.paragraph}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default Experience