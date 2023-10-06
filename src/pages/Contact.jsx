import React from 'react'
import {useState, useEffect, useContext} from 'react'
import {Link} from "react-router-dom"

// Import assets
import ContactImage from '../assets/shared/contact-illustration.png';
import LinkedinLogo from '../assets/shared/linkedin-icon.png';
import MailLogo from '../assets/shared/mail-blue-icon.png';
import LinkedinLogoWhite from '../assets/shared/linkedin-icon-white.png';
import MailLogoWhite from '../assets/shared/mail-white-icon.png';

// Context
import { LanguageContext } from '../components/LanguageContext';



// Link with Hover change
const ContactLink = ({ to, text,logoDark, logoLight }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { language, toggleLanguage, translations } = useContext(LanguageContext);
  
  const email = translations?.contactPage?.email;
  const subject = translations?.contactPage?.subject;
  const contactQuote = translations?.contactPage?.body;

  const handleMailButtonClick = () => {
    const mailtoURL = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(contactQuote)}`;
    window.location.href = mailtoURL;
  };

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

  const { language, toggleLanguage, translations } = useContext(LanguageContext);
  
  return (
    <div className='contact-container'>
        <header>
          <h1 className='page-title'>{translations?.contactPage?.title}</h1>
          <p className='header-description'>
            {translations?.contactPage?.description}
          </p>
        </header>

        <section className='contacts-btn-container'>
          <ContactLink to='#' text={translations?.contactPage?.mailBtn} logoDark={MailLogo} logoLight={MailLogoWhite}></ContactLink>
          <ContactLink to='#' text={translations?.contactPage?.linkedinBtn} logoDark={LinkedinLogo} logoLight={LinkedinLogoWhite}></ContactLink>
        </section>

        <img className='contact-illustration' src={ContactImage}></img>
    </div>
  )
}

export default Contact