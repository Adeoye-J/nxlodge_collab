import React, { useState } from 'react'
import "./navbar.css"
import logo from "../../assets/nxlodgelogo.png"
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import {Link} from "react-router-dom"

const NavItem = () => {
  return(
    <>
      <ul className='nav-list'>
        <li className='nav-list-item'><Link to="/" className='nav-link'>Home</Link></li>
        <li className='nav-list-item'><Link to="/about" className='nav-link make-active'>About Us</Link></li>
        <li className='nav-list-item'><Link to="#" className='nav-link'>Properties</Link></li>
        <li className='nav-list-item'><Link to="#" className='nav-link'>Services</Link></li>
      </ul>
    </>
  )
}

const NavBar = () => {

  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <header className='section-padding navbar-container'>
      <div className="logo">
        <img src={logo} alt="logo_here" />
      </div>
      <nav className='nav-bar'>
        <NavItem />
      </nav>
      <div className='menu'>
        <button>Contact Us</button>
        <button className="login">Login</button>
        <div className="menu-bar">
          {toggleMenu ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} /> : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />}
        </div>
      </div>
      {toggleMenu && 
            <nav className='menu-nav-bar'>
              <NavItem />
            </nav>
        }
    </header>
  )
}

export default NavBar