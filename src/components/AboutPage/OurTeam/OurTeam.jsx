import React from 'react'
import "./ourTeam.css"
import { IoSparklesSharp } from "react-icons/io5";
import { FaTwitter, FaPaperPlane } from 'react-icons/fa';
import team_1 from "../../../assets/team_1.png";
import team_2 from "../../../assets/team_2.png";
import team_3 from "../../../assets/team_3.png";
import team_4 from "../../../assets/team_4.png";

const OurTeam = () => {

  const teams = [
    {
      id: 1,
      image: team_1,
      name: "Max Mitchell",
      role: "Founder"
    },
    {
      id: 2,
      image: team_2,
      name: "Sarah Johnson",
      role: "Chief Real Estate Officer"
    },
    {
      id: 3,
      image: team_3,
      name: "David Brown",
      role: "Head of Property Management"
    },
    {
      id: 4,
      image: team_4,
      name: "Michael Turner",
      role: "Legal Counsel"
    }
  ]

  return (
    <section className="section-padding team-container">
        <div className="team-header">
          <IoSparklesSharp />
          <h1>Meet the NxLodge Team</h1>
          <p>At NxLodge, our success is driven by the dedication and expertise of our team. Get to know the people behind our mission to make your real estate dreams a reality.</p>
        </div>
        <div className="team-content">
          {teams.map((team) => (
            <div className="team" key={team.id}>
              <div className="team-image">
                <img src={team.image} alt="team member 1" />
                <div className='team-logo'><FaTwitter /></div>
              </div>
              <div className="team-details">
                <h3>{team.name}</h3>
                <p>{team.role}</p>
                <div className="team-message">
                  <input type="text" placeholder='Say Hello 👋' />
                  <div className='team-send'><FaPaperPlane /></div>
                </div>
              </div>
            </div>
          ))}
        </div>
    </section>
  )
}

export default OurTeam