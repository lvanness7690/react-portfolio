import React from 'react';
import { FaGithub, FaLaptopCode } from 'react-icons/fa'; // Import GitHub and Laptop Code icons from Font Awesome
import projectsData from './../../projectData'; 
import './portfolio.css';

function Portfolio() {
  return (
    <div className="portfolio">
      <h2 className="portfolio-title">MY PORTFOLIO</h2>
      <p className="portfolio-description">Here are a few projects I've worked on recently. Hover over the image to view the GitHub Repo and the Live Application.</p>
      <div className="projects">
        {projectsData.map((project, index) => (
          <div key={index} className="project">
            <h3>{project.title}</h3>
            <div className="project-image">
              <img src={project.imageUrl} alt={project.title} />
              <div className="overlay">
                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                  <FaGithub size={16} /> GitHub Repo
                </a>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <FaLaptopCode size={16} /> Live Application
                </a>
              </div>
            </div>
            <p className="description">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
