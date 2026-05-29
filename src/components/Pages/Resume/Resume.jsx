import React from 'react';
import './resume.css';
import resumePdf from '../../../assets/Resume.pdf';

function Resume() {
  return (
    <div className="resume">
      <div className="summary-statement">
        <p className="eyebrow resume-eyebrow">Resume</p>
        <h2 className='page-header'>AI Workflow &amp; Technical Operations</h2>
        <p>Customer-facing systems builder with experience across internal tools, AI workflow adoption, implementation-heavy operations, GTM systems, and client delivery. I bring a builder-operator mindset shaped by real production work in hospitality, corporate client experiences, and modern web systems.</p>
        <a href={resumePdf} download="Leighton Van Ness Resume.pdf" className="download-button">
          Download Resume
        </a>
      </div>
      
      <div className="columns">
        <div className="left-column">
          <section>
            <h2>EDUCATION</h2>
            <p>University of Colorado Boulder</p>
            <p>M.S. in Computer Science</p>
            <p>Expected June 2027</p>
            <p>New York University</p>
            <p>B.A. in Management</p>
            <p>2011 - 2013 | New York, NY</p>
            <p>University of St. Andrews</p>
            <p>Honors in Economics</p>
            <p>2009 - 2011 | St. Andrews, Scotland, UK</p>
          </section>

          <section>
            <h2>CERTIFICATIONS</h2>
            <p>Columbia Engineering Coding Boot Camp Professional Certificate</p>
            <p>2024</p>
            <p>IBM Full Stack Software Developer Professional Certificate</p>
            <p>2023</p>
          </section>

          <section>
            <h2>SKILLS</h2>
            <ul className="skills-list">
              <li>JavaScript / TypeScript</li>
              <li>React</li>
              <li>Node.js / Express.js</li>
              <li>REST APIs / GraphQL</li>
              <li>HTML / CSS</li>
              <li>Redis / Upstash / Vercel KV</li>
              <li>MongoDB / Mongoose</li>
              <li>MySQL / Sequelize</li>
              <li>Google Sheets API / Apps Script</li>
              <li>GitHub / CI/CD / Vercel</li>
              <li>Playwright / Jest</li>
              <li>Salesforce / HubSpot</li>
              <li>ZoomInfo / Outreach</li>
              <li>Claude / OpenAI / Codex</li>
              <li>WordPress / Web APIs</li>
            </ul>
          </section>
        </div>

        <div className="right-column">
          <section>
            <h2>WORK EXPERIENCE</h2>
            <div>
              <h3>VP, Innovation</h3>
              <p>Elevate Experiences</p>
              <p>2024 - Present | New York, NY</p>
              <ul className="work-experience-item">
                <li>Built and manage the Elevate Dashboard, an internal operations platform supporting premium hospitality and corporate client experiences across planning, ticketing, user administration, vendor and chef coordination, and production workflows.</li>
                <li>Serve as the team&apos;s AI and workflow implementation lead, helping colleagues adopt practical AI systems across research, prospecting, internal automation, and day-to-day execution.</li>
                <li>Oversee website operations, analytics, content updates, and Salesforce/HubSpot integration support tied to client engagement and demand generation.</li>
                <li>Built AI-assisted prospecting workflows using Claude, OpenAI, ZoomInfo, and Outreach, and automated logistics workflows using Google Forms, Sheets, and Apps Script.</li>
              </ul>
            </div>
            <div>
              <h3>VP, Innovation & Technology</h3>
              <p>Zinc Agency</p>
              <p>2020 - 2024 | New York, NY</p>
              <ul className="work-experience-item">
                <li>Led the company&apos;s pivot to virtual programming during COVID, building the technical platform that preserved delivery for corporate hospitality clients while in-person events were shut down.</li>
                <li>Engineered a custom streaming and registration platform using WordPress, JavaScript, CSS, HTML, web APIs, and Zoom integrations.</li>
                <li>Supported more than 2,000 celebrity-led livestreams and managed technical specifications, talent booking, and coordination with crews and stakeholders.</li>
                <li>Repurposed the virtual infrastructure into InviteMeNow, a branded registration platform for in-person, virtual, and hybrid client-facing hospitality experiences.</li>
              </ul>
            </div>
            <div>
              <h3>Director of Products</h3>
              <p>Zinc Agency</p>
              <p>2018 - 2020 | New York, NY</p>
              <ul className="work-experience-item">
                <li>Led budget creation, experience pricing, product packaging, and sales strategy for premium entertainment and experiential offerings.</li>
                <li>Drafted and signed contracts, managed legal agreements, and coordinated talent, venue, and corporate-client requirements.</li>
                <li>Coordinated critical operations, including talent negotiations and mediation between artists, representatives, and event stakeholders.</li>
              </ul>
            </div>
            <div>
              <h3>Account Executive</h3>
              <p>Creative Artists Agency</p>
              <p>2014 - 2018 | New York, NY</p>
              <ul className="work-experience-item">
                <li>Developed experiential concepts using CAA-represented talent for corporate buyers and premium client programs.</li>
                <li>Managed logistics for sold events, including talent booking, agency coordination, venue planning, transportation, concierge-style details, and client communication.</li>
                <li>Built client relationship and outreach skills while managing high-expectation entertainment and brand partnerships.</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Resume;
