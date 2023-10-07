import React, {useState, useEffect, useContext} from 'react'
import { Link, useLocation } from "react-router-dom";

// Import assets
import Burger from '../assets/shared/menu_open.png';
import Close from '../assets/shared/menu_close.png';
import DoubleArrow from '../assets/shared/double_arrow.png';
import FrenchFlag from '../assets/shared/french-icon.png';
import EnglishFlag from '../assets/shared/english-icon.png';

// Import context
import { LanguageContext } from '../components/LanguageContext';



const Navbar = () => {

  const location = useLocation();
  const [navbarExpand, setNavbarExpand] = useState(false);
  const [bodyScroll, setBodyScroll] = useState(true);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // Context
  const { language, toggleLanguage, translations } = useContext(LanguageContext);

  // Check the viewport
  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener('resize', changeWidth)

  }, [])

  // Check for bodyScroll avoid unpredictible behavior 
  useEffect(() => {
    navbarExpand ? setBodyScroll(false) : setBodyScroll(true)
    if(!bodyScroll){
      document.body.style.overflowY = 'hidden';
    }else{
      document.body.style.overflowY = 'scroll';
    }      
  })

  const handleToggle = () => {
    setNavbarExpand(prev => !prev);
  }

  return (
    <div className='navbar-container'>


      {screenWidth < 550 ?
        <div className={`background-layer ${navbarExpand ? "expand" : ""}`}></div> : ""
      }

      <div className='top-container'>

        <div>       
           <div className='profil-photo round'></div>
          <h2 className='navbar-title'><span>&#60;</span> Marin/<span>&#62;</span></h2>
        </div>

        <img src={!navbarExpand ? Burger: Close} alt="burger btn" className={`menu-btn ${navbarExpand ? "rotate" : ""}`} onClick={handleToggle}></img>
      </div>

      <img className={`language-btn ${navbarExpand ? "displayed" : ""}`} src={language === 'en' ? FrenchFlag : EnglishFlag} onClick={toggleLanguage}></img>

      <div className={`links-container-wrapped ${navbarExpand ? "expand" : ""}`}>
        <Link className='link' to="/" onClick={navbarExpand ? handleToggle : null}><span>&#62;</span>{translations?.navbar?.homeLink}</Link>
        <Link className='link' to="/projects" onClick={navbarExpand ? handleToggle : null}><span>&#62;</span>{translations?.navbar?.projectsLink}</Link>
        <Link className='link' to="/contact"onClick={navbarExpand ? handleToggle : null}><span>&#62;</span>{translations?.navbar?.contactLink}</Link>
        <Link className='link' to="/resume"onClick={navbarExpand ? handleToggle : null}><span>&#62;</span>{translations?.navbar?.resumeLink}</Link>
        <div className='wrap-menu-btn' onClick={handleToggle}><img src={DoubleArrow} alt="double arrow up"></img></div>
      </div>

      {screenWidth > 550 ?
        <div className='links-container-unwrapped'>
          <Link className='link' to="/" onClick={navbarExpand ? handleToggle : null}>
            {translations?.navbar?.homeLink}
            <div className={location.pathname === '/' ? 'selector selected' : 'selector'}></div>
          </Link>
          <Link className='link' to="/projects" onClick={navbarExpand ? handleToggle : null}>
            {translations?.navbar?.projectsLink}
            <div className={location.pathname === '/projects' ? 'selector selected' : 'selector'}></div>
          </Link>
          <Link className='link' to="/contact"onClick={navbarExpand ? handleToggle : null}>
            {translations?.navbar?.contactLink}
            <div className={location.pathname === '/contact' ? 'selector selected' : 'selector'}></div>
          </Link>
          <Link className='link' to="/resume"onClick={navbarExpand ? handleToggle : null}>
            {translations?.navbar?.resumeLink}
            <div className={location.pathname === '/resume' ? 'selector selected' : 'selector'}></div>
          </Link>
        </div>
       : ""}   

    </div>
  )
}

export default Navbar