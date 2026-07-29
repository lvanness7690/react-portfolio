import React from 'react';
import { FaFileArrowDown } from 'react-icons/fa6';
import './resume.css';
import resumePdf from '../../../assets/Resume.pdf';

function Resume() {
  return (
    <div className="resume">
      <div className="summary-statement">
        <p className="eyebrow resume-eyebrow">Resume</p>
        <h2 className='page-header'>AI Operations, Implementation &amp; Customer-Facing Systems Lead</h2>
        <p>
          AI operations, implementation, and customer-facing systems leader who builds internal tools,
          operational platforms, GTM workflows, and AI-enabled processes. Translate business needs into
          practical systems spanning product operations, workflow automation, client delivery, and revenue
          operations. Bring hands-on technical fluency across APIs, modern web platforms, CRM systems,
          analytics, and deployment workflows.
        </p>
        <a href={resumePdf} download="Leighton Van Ness Resume.pdf" className="download-button icon-button-link">
          <FaFileArrowDown aria-hidden="true" />
          <span>Download Resume</span>
        </a>
      </div>

      <div className="columns">
        <div className="left-column">
          <section className="resume-panel">
            <h2>EDUCATION</h2>
            <div className="panel-scroll panel-scroll-compact">
              <div className="resume-stack">
                <div className="resume-entry">
                  <p className="resume-entry-title">CU Boulder</p>
                  <p className="resume-entry-detail">M.S. Computer Science, Estimated Completion 2026</p>
                </div>
                <div className="resume-entry">
                  <p className="resume-entry-title">New York University</p>
                  <p className="resume-entry-detail">Management</p>
                  <p className="resume-entry-meta">2011 - 2013 | New York, NY</p>
                </div>
                <div className="resume-entry">
                  <p className="resume-entry-title">University of St. Andrews</p>
                  <p className="resume-entry-detail">Economics</p>
                  <p className="resume-entry-meta">2009 - 2011 | St. Andrews, Scotland, UK</p>
                </div>
              </div>
            </div>
          </section>

          <section className="resume-panel">
            <h2>CERTIFICATIONS</h2>
            <div className="panel-scroll panel-scroll-compact">
              <div className="resume-stack">
                <div className="resume-entry">
                  <p className="resume-entry-title">Columbia Engineering Coding Boot Camp Professional Certificate</p>
                  <p className="resume-entry-meta">October 2023 - March 2024</p>
                </div>
                <div className="resume-entry">
                  <p className="resume-entry-title">IBM Full Stack Software Developer Professional Certificate</p>
                  <p className="resume-entry-meta">May 2023 - September 2023</p>
                </div>
              </div>
            </div>
          </section>

          <section className="resume-panel">
            <h2>SKILLS</h2>
            <div className="panel-scroll">
              <div className="skills-groups">
                <div className="skill-group">
                  <p className="skill-group-label">AI &amp; Automation</p>
                  <p className="skill-group-copy">AI tools, prospecting agents, prompt/workflow design, research automation, API integrations, Apps Script, Zapier</p>
                </div>
                <div className="skill-group">
                  <p className="skill-group-label">Platforms &amp; GTM Systems</p>
                  <p className="skill-group-copy">Salesforce, HubSpot, ZoomInfo, Outreach, Google Analytics, SEO, Google Sheets</p>
                </div>
                <div className="skill-group">
                  <p className="skill-group-label">Product Engineering</p>
                  <p className="skill-group-copy">JavaScript, TypeScript, React, Node.js, Express, REST APIs, GraphQL, Redis, MongoDB, MySQL</p>
                </div>
                <div className="skill-group">
                  <p className="skill-group-label">Delivery &amp; Quality</p>
                  <p className="skill-group-copy">Vercel, GitHub, CI/CD, Playwright, Jest, auth and permissions, deployment verification, PDF/Word exports</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="right-column">
          <section className="resume-panel resume-panel-work">
            <h2>WORK EXPERIENCE</h2>
            <div className="panel-scroll panel-scroll-work">
              <div className="resume-role">
                <h3>VP, Innovation</h3>
                <p>Elevate Experiences</p>
                <p>2024 - Present | New York, NY</p>
                <ul className="work-experience-item">
                  <li>Built and manage the Elevate Dashboard, a shared operations platform for event planning, ticketing, user administration, vendor and talent coordination, and production management.</li>
                  <li>Developed the platform with React, serverless Node.js APIs, Redis/Upstash, Google Sheets integrations, and role-based access controls on Vercel.</li>
                  <li>Established CI/CD, preview deployments, automated tests, production safeguards, PDF/Word exports, and recurring release verification.</li>
                  <li>Lead AI and workflow implementation, evaluating tools, piloting practical use cases, and helping teams apply AI systems to operating workflows.</li>
                  <li>Built an AI prospecting agent with API integrations that identifies and qualifies prospects, manages sending infrastructure, launches targeted outbound campaigns, and has generated new leads.</li>
                  <li>Oversee technical production for approximately 25 virtual events annually and 5-10 private concerts and large-format live experiences.</li>
                  <li>Led the Elevate Experiences website launch and now manage SEO, analytics, content, inquiry flows, and HubSpot- and Salesforce-connected GTM workflows.</li>
                  <li>Built an automated logistics tracker supporting approximately 60 events, 600 shipped bins, and 12,000-24,000 items with status syncing, alerts, routing, and recovery workflows.</li>
                </ul>
              </div>
              <div className="resume-role">
                <h3>VP, Innovation & Technology</h3>
                <p>Zinc Agency</p>
                <p>2020 - 2024 | New York, NY</p>
                <ul className="work-experience-item">
                  <li>Led the company&apos;s pivot to virtual programming during COVID, building the technical platform that preserved service delivery and expanded virtual event offerings.</li>
                  <li>Implemented Hive as the division&apos;s core project management system, creating custom workflows, forms, automations, and Salesforce-connected operating structure still used across Zinc Agency and Elevate Experiences.</li>
                  <li>Engineered a custom streaming and registration platform using WordPress, JavaScript, web APIs, embedded meeting tools, and reusable branded event workflows.</li>
                  <li>Supported more than 2,000 celebrity-led livestreams, managing technical specifications, talent coordination, and production stakeholders.</li>
                  <li>Repurposed the platform into InviteMeNow, a customizable registration system for in-person, virtual, and hybrid client experiences.</li>
                </ul>
              </div>
              <div className="resume-role">
                <h3>Director of Products</h3>
                <p>Zinc Agency</p>
                <p>2018 - 2020 | New York, NY</p>
                <ul className="work-experience-item">
                  <li>Led budget creation, experience pricing, product packaging, and sales strategy for premium entertainment and experiential offerings.</li>
                  <li>Managed contracts, legal agreements, talent and venue requirements, and critical coordination among artists, representatives, and event stakeholders.</li>
                </ul>
              </div>
              <div className="resume-role">
                <h3>Account Executive</h3>
                <p>Creative Artists Agency</p>
                <p>2014 - 2018 | New York, NY</p>
                <ul className="work-experience-item">
                  <li>Developed experiential concepts using CAA-represented talent for corporate buyers and premium client programs.</li>
                  <li>Managed sold-event logistics, agency coordination, venue planning, transportation, concierge details, and client communication.</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Resume;
