import React from 'react'
import {useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'

// import assets
import SelectArrow from '../assets/shared/select-arrow.png';
import Laptop from '../assets/projects/laptop.png';
import GithubIcon from '../assets/shared/github-icon-purple.png';

const Projects = () => {

  const [category, setCategory] = useState("All Categories");
  const [catDropdown, setCatDropdown] = useState(false)

  const projects = [
    // Projects data
    {
      name: "C-Based Chat Application", 
      category: "network", 
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos labore quia cupiditate, dicta, quis officiis maxime nostrum explicabo corrupti delectus aspernatur? Est cumque nesciunt iste soluta nihil recusandae, enim quia? ",
      imagePath: "https://images.pexels.com/photos/4226881/pexels-photo-4226881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      github: "github link here",
    },
    {
      name: "C-Based Chat Application", 
      category: "network", 
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos labore quia cupiditate, dicta, quis officiis maxime nostrum explicabo corrupti delectus aspernatur? Est cumque nesciunt iste soluta nihil recusandae, enim quia? ",
      imagePath: "https://images.pexels.com/photos/4226881/pexels-photo-4226881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      github: "github link here",
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

  return (
    <div className='projects-container'>

      <header>
        <h1 className='page-title'>Projects</h1>
        <p className='header-description'>This section is a curated collection of personal and academic projects, 
          showcasing the hands-on experiences that shape my IT and DevOps exploration.
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
          <div key={index} className="project">
            <p className='name'>{project.name}</p>
            <img className='project-image' src={project.imagePath}></img>
            <p className='label'>Description</p>
            <p className='description'>{project.description}</p>
            <Link className='project-link' to={project.github}>View on Github<img src={GithubIcon} alt="Official Github icon"></img></Link>
          </div>
        ))}
      </section>

    </div>
  )
}

export default Projects