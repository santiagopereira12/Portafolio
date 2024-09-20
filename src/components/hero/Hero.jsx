import React from 'react'
import './Hero.css'
import Profile from '../../assets/logos/profile.jpeg'

const Hero = () => {
  return (
    <div className='hero'>
      <img src={Profile} alt="" />
      <h1><span>Santiago Pereira,</span> Desarrollador Backend y Administrador de Base de datos</h1>
      <p>Soy Desarrollador Backend y Administrador de Base de datos, enfocado en el aprendizaje continuo, apacionado por los retos y tengo diferentes conocimientos en desarrollo e infraestructura</p>
      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  )
}

export default Hero
