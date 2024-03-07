import React from 'react';
import projectsData from './../../projectData'; 
import './portfolio.css';

function Portfolio() {
  return (
    <div className="portfolio">
      <h2>My Portfolio</h2>
      <div className="projects">
        {projectsData.map((project, index) => (
          <div key={index} className="project">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <img src={project.imageUrl} alt={project.title} />
            <div>
              <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">Repository</a>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Live</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
