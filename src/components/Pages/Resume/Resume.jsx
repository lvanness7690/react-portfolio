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
          AI operations, implementation, sales-enablement, and customer-facing systems leader who builds
          internal tools, operational platforms, GTM workflows, and AI-enabled processes. Partner with
          sales teams and enterprise customers to translate business needs into dependable systems and delivery
          across CRM workflows, account programs, events, and post-sale execution, backed by hands-on fluency
          across APIs, modern web platforms, CRM systems, analytics, and deployment workflows.
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
                  <p className="skill-group-copy">ChatGPT, AI agents, sales prospecting automation, prompt/workflow design, research automation, API integrations, Apps Script, Zapier</p>
                </div>
                <div className="skill-group">
                  <p className="skill-group-label">Platforms &amp; GTM Systems</p>
                  <p className="skill-group-copy">Salesforce, HubSpot, ZoomInfo, Outreach, Instantly, MailerLite, multi-domain email infrastructure, Google Analytics, SEO, Google Sheets</p>
                </div>
                <div className="skill-group">
                  <p className="skill-group-label">Product Engineering</p>
                  <p className="skill-group-copy">JavaScript, TypeScript, React, Node.js, Express, REST APIs, GraphQL, Redis, MongoDB, MySQL, Sanity</p>
                </div>
                <div className="skill-group">
                  <p className="skill-group-label">Delivery &amp; Quality</p>
                  <p className="skill-group-copy">Vercel, Netlify, Render, GitHub, CI/CD, Playwright, Jest, auth and permissions, deployment verification, PDF/Word exports</p>
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
                  <li>Built and manage the Elevate Dashboard, a React and serverless Node.js operations platform on Vercel with Redis/Upstash, Google Sheets integrations, and role-based access for event planning, ticketing, user administration, vendor and talent coordination, and production management.</li>
                  <li>Established CI/CD, preview deployments, automated tests, production safeguards, PDF/Word exports, and recurring release verification.</li>
                  <li>Lead AI and workflow implementation, evaluating tools, piloting practical use cases, and helping teams apply AI systems to operating workflows.</li>
                  <li>Built a custom, end-to-end AI sales agent using ChatGPT, Instantly, MailerLite, APIs, and multi-domain email infrastructure to automatically build targeted prospect lists, research and qualify leads, personalize and run cold-outreach sequences, manage sending operations, and synchronize lead and engagement data with CRM workflows.</li>
                  <li>Serve on account teams for two of Elevate&apos;s largest enterprise clients, each representing seven figures in annual business, meeting with customers to understand future needs, strengthen relationships through in-person programs, and support onsite delivery.</li>
                  <li>Lead technical and back-end execution for approximately 25 virtual events annually and 5-10 private concerts and large-format experiences, ensuring the systems I built perform reliably across client programs and coordinating talent, vendors, logistics, and production teams.</li>
                  <li>Led the Elevate Experiences website launch and now manage SEO, analytics, content, inquiry flows, and HubSpot- and Salesforce-connected workflows that support sales handoffs and customer delivery.</li>
                  <li>Built an automated logistics tracker supporting approximately 60 events, 600 shipped bins, and 12,000-24,000 items with status syncing, alerts, routing, and recovery workflows.</li>
                </ul>
              </div>
              <div className="resume-role">
                <h3>VP, Innovation & Technology</h3>
                <p>Zinc Agency</p>
                <p>2020 - 2024 | New York, NY</p>
                <ul className="work-experience-item">
                  <li>Led the company&apos;s pivot to virtual programming during COVID, engineering a custom streaming and registration platform with WordPress, JavaScript, web APIs, embedded meeting tools, and reusable branded workflows.</li>
                  <li>Implemented Hive as the division&apos;s core project management system, creating custom workflows, forms, automations, and Salesforce-connected operating structure still used across Zinc Agency and Elevate Experiences.</li>
                  <li>Supported more than 2,000 celebrity-led livestreams, working directly with corporate clients to translate program goals into technical specifications and coordinating talent, platform, production, and operational stakeholders through delivery.</li>
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
                  <li>Worked directly with corporate buyers to develop talent-led experiential concepts, then coordinated the agency, venue, transportation, concierge, and production requirements needed to deliver sold programs successfully.</li>
                  <li>Managed client communication and cross-functional execution throughout planning and delivery for premium corporate programs.</li>
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
