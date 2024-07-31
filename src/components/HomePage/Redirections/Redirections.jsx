import React from 'react'
import {MdNorthEast } from "react-icons/md"
import { FaStar, FaGraduationCap, FaUsers } from 'react-icons/fa';
import "./redirections.css";

const Redirections = () => {

    const redirections = [
        {
            id: 1,
            icon: <FaStar />,
            text: "Find your Preferred Lodge"
        },
        {
            id: 2,
            icon: <FaGraduationCap />,
            text: "Unlock Property Value"
        },
        {
            id: 3,
            icon: <FaUsers />,
            text: "Effortless Property Management"
        },
        {
            id: 4,
            icon: <FaStar />,
            text: "Smart investments, Informed Decisions"
        }
    ]

  return (
    <div className='redirections-container'>
        {redirections.map(redirection => (
            <div className="redirection" key={redirection.id}>
                <div className="icon-container">
                    {redirection.icon}
                </div>
                <p>{redirection.text}</p>
                <div className="arrow-container"><MdNorthEast className='arrow' /></div>
            </div>
        ))}
    </div>
  )
}

export default Redirections
