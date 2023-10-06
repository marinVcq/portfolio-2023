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

        <button className='download-btn'>{translations?.resumePage?.btnLabel}</button>

        <img className='resume-illustration' src={ResumeImage}></img>
    </div>
  )
}

export default Resume