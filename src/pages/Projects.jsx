import React from 'react'
import {useState, useEffect, useContext} from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'

// import assets
import SelectArrow from '../assets/shared/select-arrow.png';
import Laptop from '../assets/projects/laptop.png';
import GithubIcon from '../assets/shared/github-icon-purple.png';

// Context
import { LanguageContext } from '../components/LanguageContext';

const Projects = () => {

  const [category, setCategory] = useState("All Categories");
  const [catDropdown, setCatDropdown] = useState(false)
  const { language, toggleLanguage, translations } = useContext(LanguageContext);


  const projects = [
    // Projects data
    {
      name: "C-Based Chat Application", 
      category: "network", 
      description: " officiis maxime nostrum explicabo corrupti delectus aspernatur? Est cumque nesciunt iste soluta nihil recusandae, enim quia? ",
      imagePath: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1600",
      github: "github link here",
      deploy: "yes",
    },
    {
      name: "Streamed Keylogger (Win32 API)", 
      category: "network", 
      description: "Lorem, ipsum dolor maxime nostrum explicabo corrupti delectus aspernatur? Est cumque nesciunt iste soluta nihil recusandae, enim quia? ",
      imagePath: "https://images.unsplash.com/photo-1555532538-dcdbd01d373d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1928&q=80",
      github: "github link here",
      deploy: "",
    },
    {
      name: "C-Based HTTP live Server", 
      category: "network",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos labore quia cupiditate, dicta, quis officiis maxime nostrum explicabo corrupti delectus aspernatur? Est cumque nesciunt iste soluta nihil recusandae, enim quia? ",
      imagePath: "https://images.unsplash.com/photo-1664570000007-db164768644d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2017&q=80",
      github: "github link here",
      deploy: "",
    }
  ];

  // Apply filter based on category 
  const filteredProjects = category.toLowerCase() === "all categories" ? projects : projects.filter((project) => project.category === category);

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

              <p className='name'>{translations?.projectsPage?.project[index]?.name}</p>

              <img className='project-image' src={translations?.projectsPage?.project[index]?.imagePath}></img>
              <p className='label'>Description</p>
              <p className='description'>{translations?.projectsPage?.project[index]?.description}</p>

              <div className='link-container'>
                <Link className='project-link' to={translations?.projectsPage?.project[index]?.repoLink}>View on Github<img src={GithubIcon} alt="Official Github icon"></img></Link>
                
                {translations?.projectsPage?.project[index]?.deployLink != "" ? <><p>Or</p><Link className='project-link deploy' to={translations?.projectsPage?.project[index]?.deployLink}>Check deploy</Link></>: "" }
              </div>
            </div>
          ))}
        </section>



      </div>

    </>
  )
}

export default Projects