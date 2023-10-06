import React from 'react'
import {useState, useEffect} from 'react'

// Import assets
import Mail from '../assets/shared/mail-icon.png';
import Github from '../assets/shared/github-icon.png';
import Dev from '../assets/shared/dev-icon.png';
import MailWhite from '../assets/shared/mail-icon-white.png';
import GithubWhite from '../assets/shared/github-icon-white.png';
import DevWhite from '../assets/shared/dev-icon-white.png';

import { Link } from "react-router-dom";

// Link with Hover change
const HomeLink = ({ to, text,logoDark, logoLight }) => {
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
      className='icon-link' 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
    >
      {text}
      <img src={isHovered ? logoLight : logoDark} alt={`icon ${text} details`} />
    </Link>
  );
};

const Home = () => {

  return (
      <div className='home-container'>

        <header className='home-header'></header>

        <section className='home-content'>

          <div>
            <h1>I'm <span>Marin Durand</span></h1>  
            <p className='subtitle'>Welcome on my student portfolio!</p>
          </div>

          <p className='home-description'>
            Currently in my third year of a Bachelor's program at Brest Open Campus, I'm studying about software development and IT industry.
          </p>

          <div className='portrait-photo round'></div>
        </section>

        {/* From devicon.dev dont forget this */}
        <div className='language-icons'>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" className='language-icon' alt='official c language icon'/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" className='language-icon' alt='official C++ language icon' />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" className='language-icon' alt='official C Sharp language icon'/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" className='language-icon' alt='official Python language icon' />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" className='language-icon' alt='official CSS3 language icon' />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" className='language-icon' alt='official Html5 language icon'/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" className='language-icon' alt='official NodeJs language icon'/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg"  className='language-icon' alt='official dotnet Core language icon'/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" className='language-icon' alt='official SASS language icon' />
        </div>



        <div className='icon-links-container'>
          <HomeLink to='/projects' text='See my projects' logoDark={Dev} logoLight={DevWhite}></HomeLink>
          <HomeLink to='https://github.com/marinVcq' text='My Github' logoDark={Github} logoLight={GithubWhite}></HomeLink>
          <HomeLink to='/contact' text='Contact Me' logoDark={Mail} logoLight={MailWhite}></HomeLink>
        </div>

      </div>
  )
}

export default Home