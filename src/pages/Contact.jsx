import React from 'react'
import {useState, useEffect} from 'react'
import {Link} from "react-router-dom"

// Import assets
import ContactImage from '../assets/shared/contact-illustration.png';
import LinkedinLogo from '../assets/shared/linkedin-icon.png';
import MailLogo from '../assets/shared/mail-blue-icon.png';
import LinkedinLogoWhite from '../assets/shared/linkedin-icon-white.png';
import MailLogoWhite from '../assets/shared/mail-white-icon.png';

const email = 'myemail';
const subject = 'Contact Inquiry';
const contactQuote = 'Hello,\n\nI am reaching out for further information or inquiries.';

const handleMailButtonClick = () => {
  const mailtoURL = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(contactQuote)}`;
  window.location.href = mailtoURL;
};

// Link with Hover change
const ContactLink = ({ to, text,logoDark, logoLight }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Link 
      to={to} 
      className='contact-btn' 
      onClick={handleMailButtonClick}
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
    >
      {text}
      <img src={isHovered ? logoLight : logoDark} alt={`icon ${text} details`} />
    </Link>
  );
};

const Contact = () => {

  return (
    <div className='contact-container'>
        <header>
          <h1 className='page-title'>Get in touch</h1>
          <p className='header-description'>
            Welcome to my contact page! If you have questions, opportunities, or just want to connect on IT and DevOps topics, I'm all ears. Use the email below or social media. Excited to hear from you!
          </p>
        </header>

        <section className='contacts-btn-container'>
          <ContactLink to='#' text='Contact Me' logoDark={MailLogo} logoLight={MailLogoWhite}></ContactLink>
          <ContactLink to='#' text='Contact Me on Linkedin' logoDark={LinkedinLogo} logoLight={LinkedinLogoWhite}></ContactLink>
        </section>

        <img className='contact-illustration' src={ContactImage}></img>
    </div>
  )
}

export default Contact