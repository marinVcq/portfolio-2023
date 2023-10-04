import React, {useState, useEffect} from 'react'
import { Link, useLocation } from "react-router-dom";
import Burger from '../assets/shared/menu_open.png';
import Close from '../assets/shared/menu_close.png';
import DoubleArrow from '../assets/shared/double_arrow.png';

const Navbar = () => {

  const location = useLocation();
  const [navbarExpand, setNavbarExpand] = useState(false);
  const [bodyScroll, setBodyScroll] = useState(true);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

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
           <div className='profil-photo'></div>
          <h2 className='navbar-title'>Marin Durand</h2>
        </div>

        <img src={!navbarExpand ? Burger: Close} alt="burger btn" className={`menu-btn ${navbarExpand ? "rotate" : ""}`} onClick={handleToggle}></img>
      </div>

      <div className={`links-container-wrapped ${navbarExpand ? "expand" : ""}`}>
        <Link className='link' to="/" onClick={navbarExpand ? handleToggle : null}><span>&#62;</span> Home</Link>
        <Link className='link' to="/projects" onClick={navbarExpand ? handleToggle : null}><span>&#62;</span> Projects</Link>
        <Link className='link' to="/contact"onClick={navbarExpand ? handleToggle : null}><span>&#62;</span> Contact</Link>
        <Link className='link' to="/resume"onClick={navbarExpand ? handleToggle : null}><span>&#62;</span> Resume</Link>
        <div className='wrap-menu-btn' onClick={handleToggle}><img src={DoubleArrow} alt="double arrow up"></img></div>
      </div>

      {screenWidth > 550 ?
        <div className='links-container-unwrapped'>
          <Link className='link' to="/" onClick={navbarExpand ? handleToggle : null}> Home
            <div className={location.pathname === '/' ? 'selector selected' : 'selector'}></div>
          </Link>
          <Link className='link' to="/projects" onClick={navbarExpand ? handleToggle : null}>Projects
            <div className={location.pathname === '/projects' ? 'selector selected' : 'selector'}></div>
          </Link>
          <Link className='link' to="/contact"onClick={navbarExpand ? handleToggle : null}> Contact
            <div className={location.pathname === '/contact' ? 'selector selected' : 'selector'}></div>
          </Link>
          <Link className='link' to="/resume"onClick={navbarExpand ? handleToggle : null}> Resume
            <div className={location.pathname === '/resume' ? 'selector selected' : 'selector'}></div>
          </Link>
        </div>
       : ""}   

    </div>
  )
}

export default Navbar