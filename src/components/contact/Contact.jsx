import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import call_icon from '../../assets/call_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import mail_icon from '../../assets/mail_icon.svg'
import github from '../../assets/logos/icons8-github.svg'
import linkedin from '../../assets/logos/icons8-linkedin.svg'

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "2a63818c-2c94-4f9b-a00d-d1a7cdb30c36");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            alert(res.message);
        }
    };

    return (
        <div id='contact' className='contact'>
            <div className="contact-title">
                <h1>Get in Touch</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>Me encuentro disponible para realizar nuevos proyecto o escuchar nuevas ofertas, comparto mi numero personal así podemos discutir de una mejor manera mi perfil profesional.</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="" /> <p>santiagopereirag09@gmail.com</p>
                        </div>
                    </div>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={call_icon} alt="" /> <p>+57 313 3421714</p>
                        </div>
                    </div>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={location_icon} alt="" /><p>Bogotá, Colombia</p>
                        </div>
                    </div>
                    <div className="contact-details">
                        <div className="contact-detail-icon">
                            <a href="https://www.linkedin.com/in/santiago-pereira-0912/" target='_blank' rel='nooper noreferrer'>
                                <img src={linkedin} alt="" className='icon-linkedin' />
                            </a>
                            <a href="https://github.com/santiagopereira12?tab=repositories" target='_blank' rel='noopener noreferrer'>
                                <img src={github} alt="" className='icon-github' />
                            </a>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor="name">Your Name</label>
                    <input type="text" placeholder="Enter Your Name" name="name" required />
                    <label htmlFor="email">Your Email</label>
                    <input type="email" placeholder="Enter your email" name="email" required />
                    <label htmlFor="message">Write your message here</label>
                    <textarea name="message" rows="8" placeholder="Enter your message" required></textarea>
                    <button type="submit" className="contact-submit">Submit now</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
