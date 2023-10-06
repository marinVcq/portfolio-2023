import React, {useContext} from 'react'

// Import assets
import ResumeImage from '../assets/shared/resume-illustration.png';


// Import context
import { LanguageContext } from '../components/LanguageContext';

const Resume = () => {

  // Context
  const { language, toggleLanguage, translations } = useContext(LanguageContext);

  return (
    <div className='resume-container'>
        <header>
          <h1 className='page-title'>{translations?.resumePage?.title}</h1>
          <p className='header-description'>
            {translations?.resumePage?.description}
          </p>
        </header>

        <button className='download-btn'>
          <a href='/cv_marin_durand_2023.pdf' download>{translations?.resumePage?.btnLabel}</a>
        </button>


        <img className='resume-illustration' src={ResumeImage}></img>
    </div>
  )
}

export default Resume