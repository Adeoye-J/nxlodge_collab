import React from 'react'
import { IoSparklesSharp } from "react-icons/io5";
import { FaHandPointLeft, FaHandPointRight } from 'react-icons/fa'
import "./faq.css"
// import { FaStar } from "react-icons/fa"


const FAQ = () => {

    const faquestions = [
        {
            id: 1,
            question: "How do I search for properties on NxLodge?",
            response: "Learn how to use our user-friendly search tools to find properties that match your criteria."
        },
        {
            id: 2,
            question: "What documents do I need to sell my properties through NxLodge?",
            response: "Find out about the necessary documentation for listing your property with us."
        },
        {
            id: 3,
            question: "How can I contact an Estatein agent?",
            response: "Discover the different ways to get in touch with our experienced agents."
        },
        {
            id: 4,
            question: "How can I contact an Estatein agent?",
            response: "Discover the different ways to get in touch with our experienced agents."
        },
        {
            id: 5,
            question: "How can I contact an Estatein agent?",
            response: "Discover the different ways to get in touch with our experienced agents."
        },
        {
            id: 6,
            question: "How can I contact an Estatein agent?",
            response: "Discover the different ways to get in touch with our experienced agents."
        },
        {
            id: 7,
            question: "How can I contact an Estatein agent?",
            response: "Discover the different ways to get in touch with our experienced agents."
        },
    ]

  return (
    <div className='faq-container section-padding'>
        <div className="faq-intro">
            {/* <div className="faq-intro"> */}
                <IoSparklesSharp />
                <h1>Frequently Asked Questions</h1>
                <p>Find answers to common questions about NxLodge's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way.</p>
            {/* </div> */}
            {/* <button>View All Properties</button> */}
        </div>
        <p className='scroll-info'>Scroll Left <FaHandPointLeft size={34} color="blue" /> or Right <FaHandPointRight size={34} color="blue" /> for other FAQs.</p>
        <div className="faq-content">
            {
                faquestions.map(faquestion => (
                    <div className="faq-detail" key={faquestion.id}>
                        <div className="faq-val">
                            <h1>{faquestion.question}</h1>
                            <p>{faquestion.response}</p>
                            <button>Read More</button>
                        </div>
                    </div>
                ))
            }


        </div>
    </div>
  )
}

export default FAQ
