import React from 'react'
import "./Hero2.css"
import { Link } from 'react-router-dom'

const Hero2 = () => {
  return (
    <div className='hero-2'>
        <div className="hero-content">
            <h1>Find Your Perfect Student Lodge Effortlessly</h1>
            <p>Explore, Compare, and Secure Your Ideal Accommodation</p>
            <div className="hero-buttons">
                <Link to="/property"><button>Explore Properties</button></Link>
                <Link to="/wishlist"><button>List Your Property</button></Link>
            </div>
            <div className="search-bar">
                <input type="text" placeholder="Search properties..." />
                <button className='search-btn'>Search</button>
            </div>
        </div>
    </div>
  )
}

export default Hero2
