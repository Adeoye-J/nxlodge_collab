import React, { useEffect, useState } from 'react'
import "./navbar.css"
import logo from "../../assets/nxlodgelogo.png"
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa'
import {Link} from "react-router-dom"

const NavItem = () => {

  const [highlight, setHighlight] = useState(false)

  return(
    <>
      <ul className='nav-list'>
        <li className= "nav-list-item" ><Link onClick={() => setHighlight(true)} className={`nav-link ${highlight && "make-active"}`} to="/" >Home</Link></li>
        <li className= "nav-list-item" ><Link onClick={() => setHighlight(true)} className={`nav-link ${highlight && "make-active"}`} to="/about" >About Us</Link></li>
        <li className= "nav-list-item" ><Link onClick={() => setHighlight(true)} className={`nav-link ${highlight && "make-active"}`} to="#" >Properties</Link></li>
        <li className= "nav-list-item" ><Link onClick={() => setHighlight(true)} className={`nav-link ${highlight && "make-active"}`} to="#" >Services</Link></li>
        <button className='contact'>Contact Us</button>
        <button className="login">SignIn / SignUp</button>
      </ul>
    </>
  )
}

const NavBar = () => {

  const [toggleMenu, setToggleMenu] = useState(false)
  const [scroll, setScroll] = useState(false)

  const handleScroll = () => {
    window.scrollY > 50 ? setScroll(true) : setScroll(false)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return(() => {
      window.removeEventListener("scroll", handleScroll)
    })
  }, [])

  return (
    <header className={`section-padding navbar-container ${scroll && "scroll"}`}>
      <div className="logo">
        <Link to="/home"><img src={logo} alt="logo_here" /></Link>
      </div>

      <nav className='nav-bar'>
        <NavItem />
      </nav>

      <div className='menu'>
        <button className='contact'>Contact Us</button>
        <button className="login">SignIn / SignUp</button>

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