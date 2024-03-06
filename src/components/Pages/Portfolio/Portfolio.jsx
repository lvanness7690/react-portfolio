// Assuming Portfolio.jsx is still within src/components/Pages/Portfolio/Portfolio.jsx
import React from 'react';
import projectsData from './../../projectData'; // Update this path according to the actual location
import './portfolio.css';

function Portfolio() {
  return (
    <div className="portfolio">
      <h2>My Portfolio</h2>
      <div className="projects">
        {projectsData.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
