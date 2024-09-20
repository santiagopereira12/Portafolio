import React from 'react'
import logo from '../../assets/logos/Logo.svg'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={logo} alt="" />
      <ul className="nav-menu">
        <li>Home</li>
        <li>About Me</li>
        <li>Services</li>
        <li>Portafolio</li>
        <li>Contact</li>
      </ul>

      <div className="nav-connect">Connect With Me</div>
    </div>
  )
}

export default Navbar
