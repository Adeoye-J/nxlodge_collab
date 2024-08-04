import React, { useState } from 'react'
import { IoSparklesSharp } from "react-icons/io5";
import {RiArrowDownDoubleFill, RiArrowUpDoubleFill} from "react-icons/ri"
import "./faq.css"


const FAQ = () => {

    const [activeFaq, setActiveFaq] = useState(null)

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

    const handleFaq = (id) => {
        setActiveFaq(activeFaq === id ? null : id)
    }

  return (
    <div className='faq-container section-padding'>
        <div className="faq-intro">
            <IoSparklesSharp />
            <h1>Frequently Asked Questions</h1>
            <p>Find answers to common questions about NxLodge's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way.</p>
        </div>
        <div className="faq-content">
            {
                faquestions.map(faquestion => (
                    <div className="faq-value" key={faquestion.id}>
                        <div className="question" onClick={() => handleFaq(faquestion.id)}>
                            <p>{faquestion.question}</p>
                            <div className="down-arrow">
                                {activeFaq == faquestion.id ? <RiArrowUpDoubleFill size={30} /> : <RiArrowDownDoubleFill size={30} /> }
                            </div>
                        </div>
                        {
                            activeFaq == faquestion.id && 
                            <div className="response">
                                <div className="divider"></div>
                                <p>{faquestion.response}</p>
                            </div>
                        }
                    </div>
                ))
            }


        </div>
    </div>
  )
}

export default FAQ
