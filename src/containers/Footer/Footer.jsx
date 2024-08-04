import React from 'react'
import "./footer.css"
import logo from "../../assets/nxlodgelogo.png"
import { FaEnvelope, FaRegEnvelope, FaEnvelopeOpen, FaRegEnvelopeOpen } from 'react-icons/fa';
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube, FaPaperPlane  } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className='footer-container section-padding'>
        <div className='footer-content'>
            <div className="footer-contact">
                <img src={logo} alt="nxlodge logo" />
                <div className="input-section">
                    <div className="envelope">
                        <FaEnvelope size={24} />
                    </div>
                    <input type="email" placeholder="Enter Your Email" />
                    <div className="send-mail">
                        <FaPaperPlane size={24} color="white" />
                    </div>
                </div>
            </div>
            <div className="footer-links">
                <ul>
                    <li className='list-title'>Home</li>
                    <li>Hero Section</li>
                    <li>Features</li>
                    <li>Properties</li>
                    <li>Testimonials</li>
                    <li>FAQ's</li>
                </ul>
                <ul>
                    <li className='list-title'>About Us</li>
                    <li>Our Values</li>
                    <li>Our Experience</li>
                    <li>Our Team</li>
                    <li>Our Clients</li>
                </ul>
                <ul>
                    <li className='list-title'>Properties</li>
                    <li>Porfolio</li>
                    <li>Categories</li>
                </ul>
                <ul>
                    <li className='list-title'>Services</li>
                    <li>Valuation Mastery</li>
                    <li>Strategic Marketing</li>
                    <li>Negotiation Wizardry</li>
                    <li>Closing Success</li>
                    <li>Property Management</li>
                </ul>
                <ul>
                    <li className='list-title'>Contact Us</li>
                    <li>Contact Form</li>
                    <li>Our Offices</li>
                </ul>
            </div>
        </div>
        <div className="footer-socials">
            <div className="rights">
                <p>@2024 NxLodge. All Rights Reserved.</p> 
                <a href="#">Terms & Conditions</a>
            </div>
            <div className="social-links">
                <div className="link">
                    <FaFacebook size={24} />
                </div>
                <div className="link">
                    <FaLinkedin size={24} />
                </div>
                <div className="link">
                    <FaTwitter size={24} />
                </div>
                <div className="link">
                    <FaYoutube size={24} />
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer