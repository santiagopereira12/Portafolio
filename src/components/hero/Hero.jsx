import React from 'react'
import './Hero.css'
import Profile from '../../assets/logos/profile.jpeg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={Profile} alt="" />
      <h1><span>Santiago Pereira,</span> Desarrollador Backend y Administrador de Base de datos</h1>
      <p>Soy Desarrollador Backend y Administrador de Base de datos, enfocado en el aprendizaje continuo, apacionado por los retos y tengo diferentes conocimientos en desarrollo e infraestructura</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  )
}

export default Hero
