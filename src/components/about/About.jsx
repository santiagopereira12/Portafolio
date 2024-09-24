import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/logos/profile.jpeg'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>Tengo experiencia en Desarrollo de aplicaciones Backend con Java, utilizando framework en Spring Boot, Control de versiones en Maven, manejo de motores de bases de datos en MySQL y Oracle, despliegue con Docker e interacción de consumo de API en frontend con REACT, manejo de repositorio en GitHub, tambien poseo experiencia en la Administración de Bases de datos con Oracle y conocimientos basicos en comandos de terminal Linux.</p>
                <p>Soy una Persona bastante proactiva, enfocado en el aprendizaje continuo, esto se puede evidenciar dado a los diferentes certificados que he podido obtener en plataformas como platzi y udemy, tambien soy una persona versatil capaz de acoplarse a diferentes retos.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>Java</p><hr style={{width: "45%"}}/></div>
                <div className="about-skill"><p>React</p><hr style={{width: "35%"}}/></div>
                <div className="about-skill"><p>Oracle</p><hr style={{width: "40%"}}/></div>
                <div className="about-skill"><p>Linux</p><hr style={{width: "20%"}}/></div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>3+</h1>
            <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>30+</h1>
            <p>PROYECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>2+</h1>
            <p>POSITIONS HELD</p>
        </div>
      </div>
    </div>
  )
}

export default About
