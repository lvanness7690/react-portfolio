import React, { useRef } from 'react';
import {
  FaArrowUpRightFromSquare,
  FaFileLines,
  FaGithub,
} from 'react-icons/fa6';
import projectsData from './../../projectData';
import './portfolio.css';
import crewControlScreen1 from '../../../assets/crew-control-screen-1.png';
import crewControlScreen2 from '../../../assets/crew-control-screen-2.png';
import crewControlScreen3 from '../../../assets/crew-control-screen-3.png';
import crewControlScreen4 from '../../../assets/crew-control-screen-4.png';

function Portfolio() {
  const featuredGalleryRef = useRef(null);

  const scrollFeaturedGallery = (direction) => {
    const gallery = featuredGalleryRef.current;

    if (!gallery) {
      return;
    }

    gallery.scrollBy({
      left: direction * gallery.clientWidth,
      behavior: 'smooth',
    });
  };

  const caseStudies = [
    {
      title: 'Elevate Dashboard',
      category: 'Internal tools / technical operations',
      description:
        'Internal operations platform centralizing planning, ticket workflows, user administration, vendor coordination, exports, QA, and production management.',
      caseStudyUrl: '/case-studies/elevate-dashboard.html',
    },
    {
      title: 'AI Prospecting & GTM Workflow',
      category: 'AI workflow / GTM systems',
      description:
        'Practical Claude, OpenAI, ZoomInfo, and Outreach workflow for company research, lead enrichment, campaign prep, and AI adoption across a non-technical team.',
      caseStudyUrl: '/case-studies/ai-prospecting-gtm-workflow.html',
    },
    {
      title: 'Inventory & Logistics Tracker',
      category: 'Automation / operations',
      description:
        'Google Forms, Sheets, and Apps Script tracker supporting a recurring three-year event series spanning roughly 60 events, 600 shipped bins, and 12,000 to 24,000 tracked items.',
      caseStudyUrl: '/case-studies/inventory-logistics-tracker.html',
    },
    {
      title: 'Zincstream & InviteMeNow Platform',
      category: 'Streaming / registration / client delivery',
      description:
        'A proprietary streaming platform repurposed into a branded registration system for in-person, virtual, and hybrid client experiences with custom event pages, galleries, maps, and support flows.',
      caseStudyUrl: '/case-studies/zincstream-invitemenow-platform.html',
    },
    {
      title: 'Hive Rollout & Workflow Automation',
      category: 'Internal systems / workflow ops',
      description:
        'Division-wide Hive rollout with custom workflows, forms, Salesforce-connected automations, and operating structure that improved coordination, efficiency, and adoption across teams.',
      caseStudyUrl: '/case-studies/hive-rollout-workflow-automation.html',
    },
    {
      title: 'Elevate Website Launch & GTM Systems',
      category: 'Website ops / GTM systems / implementation',
      description:
        'Launch and post-launch operations for a premium hospitality marketing site, including stakeholder coordination, QA, SEO, analytics, inquiry flows, and CRM-connected GTM support.',
      caseStudyUrl: '/case-studies/elevate-website-launch-gtm-systems.html',
    },
  ];

  return (
    <div className="portfolio">
      <p className="eyebrow portfolio-eyebrow">Selected work</p>
      <h2 className="portfolio-title">Customer-facing systems, AI workflows, and operational platforms.</h2>
      <p className="portfolio-description">
        Recent work first: implementation-heavy systems, internal operations platforms, GTM workflows,
        and client-delivery tools built for real business environments. Earlier technical projects are
        included underneath as proof of technical fluency.
      </p>

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
            <a
              className="icon-button-link"
              href="https://github.com/lvanness7690/crew-control"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub aria-hidden="true" />
              <span>GitHub Repo</span>
            </a>
            <a
              className="icon-button-link"
              href="https://www.crewcontrolai.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaArrowUpRightFromSquare aria-hidden="true" />
              <span>Visit Live Site</span>
            </a>
          </div>
        </div>
        <div className="featured-media">
          <div
            className="featured-gallery"
            aria-label="Crew Control screenshot gallery"
            ref={featuredGalleryRef}
          >
            <img src={crewControlScreen1} alt="Crew Control overview" className="featured-shot" />
            <img src={crewControlScreen2} alt="Crew Control automations calendar view" className="featured-shot" />
            <img src={crewControlScreen3} alt="Crew Control project board" className="featured-shot" />
            <img src={crewControlScreen4} alt="Crew Control agent chat modal" className="featured-shot" />
          </div>
          <div className="gallery-controls" aria-label="Crew Control gallery controls">
            <button
              type="button"
              className="gallery-arrow"
              aria-label="Previous Crew Control screenshot"
              onClick={() => scrollFeaturedGallery(-1)}
            >
              <span className="gallery-arrow-glyph" aria-hidden="true">&larr;</span>
            </button>
            <button
              type="button"
              className="gallery-arrow"
              aria-label="Next Crew Control screenshot"
              onClick={() => scrollFeaturedGallery(1)}
            >
              <span className="gallery-arrow-glyph" aria-hidden="true">&rarr;</span>
            </button>
          </div>
        </div>
      </section>

      <section className="case-study-section">
        <div className="case-study-header">
          <p className="featured-label">Case Studies</p>
          <h3>Systems Built for Real-World Operations</h3>
          <p>
            Operational and customer-facing systems I built for planning, workflow automation, GTM
            execution, website operations, logistics, and client delivery in live business environments.
          </p>
        </div>
        <div className="case-study-grid">
          {caseStudies.map((study) => (
            <article key={study.title} className="case-study-card">
              <p className="project-category">{study.category}</p>
              <h4>{study.title}</h4>
              <p>{study.description}</p>
              <div className="project-links">
                <a className="icon-button-link" href={study.caseStudyUrl} target="_blank" rel="noopener noreferrer">
                  <FaFileLines aria-hidden="true" />
                  <span>Open Case Study</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <h3 className="section-label">Earlier Technical Projects</h3>
      <div className="projects">
        {projectsData.map((project, index) => (
          <article key={index} className="project">
            <h3>{project.title}</h3>
            <p className="project-category">{project.category}</p>
            <div className="project-image">
              <img src={project.imageUrl} alt={project.title} />
              <div className="overlay">
                <a className="icon-button-link" href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                  <FaGithub aria-hidden="true" />
                  <span>GitHub Repo</span>
                </a>
                <a className="icon-button-link" href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <FaArrowUpRightFromSquare aria-hidden="true" />
                  <span>Live Application</span>
                </a>
              </div>
            </div>
            <p className="description">{project.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
