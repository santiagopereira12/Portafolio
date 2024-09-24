import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/logos/java-4.svg'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
            <img src={footer_logo} alt="" />
            <p>Soy Desarrollador backend de Colombia con 3 años de experiencia en el area, con conocimientos en Administración de Base de datos</p>
        </div>
        <div className="footer-top-right">
            <div className="footer-email-input">
                <img src={user_icon} alt="" />
                <input type="email" placeholder='Enter your email'/>
            </div>
            <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">© 2024 Santiago Pereira. All rights reserved.</p>
        <dev className="footer-bottom-right">
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
        </dev>
      </div>
    </div>
  )
}

export default Footer
