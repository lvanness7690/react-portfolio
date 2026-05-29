import React from 'react';
import { FaGithub, FaLaptopCode } from 'react-icons/fa'; // Import GitHub and Laptop Code icons from Font Awesome
import projectsData from './../../projectData'; 
import './portfolio.css';
import crewControlOverview from '../../../assets/crew-control-overview.png';

function Portfolio() {
  return (
    <div className="portfolio">
      <h2 className="portfolio-title">MY PORTFOLIO</h2>
      <p className="portfolio-description">Selected product, platform, and application work across internal tools, AI workflow operations, and full-stack builds.</p>

      <section className="featured-project">
        <div className="featured-copy">
          <p className="featured-label">Featured Project</p>
          <h3>Crew Control</h3>
          <p>
            Crew Control is built around a simple idea: a normal business user should be able to
            access a ready-to-run team of AI agents without inventing the system from scratch.
            The product focuses on preconfigured AI teammates, assignment clarity, review-gated
            execution, automations, and evidence-backed delivery so companies can adopt AI labor
            with more structure and less setup burden.
          </p>
          <p>
            I also built the front-end marketing site at crewcontrolai.com, translating that
            product thesis into a clear operator-facing narrative across walkthroughs, FAQ,
            case studies, testimonials, pricing, and implementation flow.
          </p>
          <div className="featured-links">
            <a href="https://www.crewcontrolai.com" target="_blank" rel="noopener noreferrer">
              <FaLaptopCode size={16} /> Visit Live Site
            </a>
          </div>
        </div>
        <div className="featured-image-wrap">
          <img src={crewControlOverview} alt="Crew Control overview screenshot" className="featured-image" />
        </div>
      </section>

      <p className="portfolio-description">Additional projects below. Hover over an image to view the GitHub repo and live application when available.</p>
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
