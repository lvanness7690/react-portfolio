import React from 'react';
import Project from './Project/Project';
import './portfolio.css';

function Portfolio() {
  // Sample data for projects
  const projects = [
    {
      title: "Project 1",
      description: "Description of project 1",
      imageUrl: "path/to/image",
      repoUrl: "https://github.com/project1",
      liveUrl: "https://project1.com"
    },
    // Add more projects as needed
  ];

  return (
    <div className="portfolio">
      <h2>My Portfolio</h2>
      <div className="projects">
        {projects.map(project => (
          <Project key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
