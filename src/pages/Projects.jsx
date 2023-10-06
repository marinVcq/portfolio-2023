import React from 'react'
import {useState, useEffect, useContext} from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'

// import assets
import SelectArrow from '../assets/shared/select-arrow.png';
import Laptop from '../assets/projects/laptop.png';
import GithubIcon from '../assets/shared/github-icon-purple.png';

// Import context
import { LanguageContext } from '../components/LanguageContext';

const Projects = () => {

  const [category, setCategory] = useState("All Categories");
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [catDropdown, setCatDropdown] = useState(false)
  const { language, toggleLanguage, translations } = useContext(LanguageContext);

  // Apply filter based on category 
  const projectData = translations?.projectsPage?.project;

  useEffect(() => {
    // Ensure projectData is defined before attempting to filter
    if (projectData) {
      const updatedFilteredProjects =
        category.toLowerCase() === 'all categories'
          ? projectData
          : projectData.filter((project) => project.category === category);

      setFilteredProjects(updatedFilteredProjects);
    }
  }, [category, projectData]);

  const handleDropdown = () => {
    setCatDropdown(prev => !prev);
  }

  const handleCat = (category) => {

    setCategory(category);
    setCatDropdown(prev => !prev);
  }

  const getBackgroundColor = (index) => {
    const colors = ["#F0F0F0", "#E0E0E0", "#D0D0D0"]; // Array of three colors
    return colors[index % colors.length]; // Alternating between the three colors
  };

  return (
    <>
      <div className='projects-container'>

        <header>
          <h1 className='page-title'>{translations?.projectsPage?.title}</h1>
          <p className='header-description'>
            {translations?.projectsPage?.description}
          </p>
        </header>

        <div className='selector-container'>

          <div className='selector-box'>
            <p className='selected-value'>{category}</p>
            <img className={`selector-arrow ${catDropdown ? "rotate" : ""}`} src={SelectArrow} onClick={handleDropdown}></img>
          </div>

          <div className={`values ${catDropdown ? "expand" : ""}`}>
            <p className='value' onClick={() => handleCat("all categories")}>All categories</p>
            <p className='value' onClick={() => handleCat("network")}>Network</p>
            <p className='value' onClick={() => handleCat("web")}>Web</p>
            <p className='value' onClick={() => handleCat("game")}>Game</p>
            <p className='value' onClick={() => handleCat("software")}>Software</p>
          </div>

        </div>

        <img src={Laptop} className='header-image'></img>

        <section className="projects-section">
          <h2 className="project-category">{category}</h2>
          {filteredProjects.map((project, index) => (

            <div key={index} className="project" style={{ backgroundColor: getBackgroundColor(index) }}>

              <p className='name'>{project?.name}</p>

              <img className='project-image' src={project?.imagePath}></img>
              <p className='label'>Description</p>
              <p className='description'>{project?.description}</p>

              <div className='link-container'>
                <Link className='project-link' to={project?.repoLink}>View on Github<img src={GithubIcon} alt="Official Github icon"></img></Link>
                
                {project?.deployLink != "" ? <><p>Or</p><Link className='project-link deploy' to={project?.deployLink}>Check deploy</Link></>: "" }
              </div>
            </div>
          ))}
        </section>



      </div>

    </>
  )
}

export default Projects