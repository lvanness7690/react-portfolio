import React from 'react';
import './resume.css';
import resumePdf from '../../../assets/Resume.pdf';

function Resume() {
  return (
    <div className="resume">
      <div className="summary-statement">
        <p className="eyebrow resume-eyebrow">Resume</p>
        <h2 className='page-header'>AI Workflow &amp; Technical Operations Lead</h2>
        <p>
          Customer-facing systems builder with experience across internal tools, AI workflow adoption,
          implementation-heavy operations, GTM systems, and client delivery. I bring a builder-operator
          mindset shaped by real production work in hospitality, corporate client experiences, live event
          operations, and modern web systems.
        </p>
        <a href={resumePdf} download="Leighton Van Ness Resume.pdf" className="download-button">
          Download Resume
        </a>
      </div>

      <div className="columns">
        <div className="left-column">
          <section className="resume-panel">
            <h2>EDUCATION</h2>
            <div className="panel-scroll panel-scroll-compact">
              <div className="resume-stack">
                <p>CU Boulder</p>
                <p>M.S. in Computer Science, Expected June 2027</p>
                <p>New York University</p>
                <p>B.A. in Management</p>
                <p>2011 - 2013 | New York, NY</p>
                <p>University of St. Andrews</p>
                <p>Honors in Economics</p>
                <p>2009 - 2011 | St. Andrews, Scotland, UK</p>
              </div>
            </div>
          </section>

          <section className="resume-panel">
            <h2>CERTIFICATIONS</h2>
            <div className="panel-scroll panel-scroll-compact">
              <div className="resume-stack">
                <p>Columbia Engineering Coding Boot Camp Professional Certificate</p>
                <p>October 2023 - March 2024</p>
                <p>IBM Full Stack Software Developer Professional Certificate</p>
                <p>May 2023 - September 2023</p>
              </div>
            </div>
          </section>

          <section className="resume-panel">
            <h2>SKILLS</h2>
            <div className="panel-scroll">
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
                <li>Salesforce / HubSpot / Zapier</li>
                <li>ZoomInfo / Outreach</li>
                <li>Claude / OpenAI / Codex</li>
                <li>WordPress / WPEngine / Cloudflare / Web APIs</li>
              </ul>
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
                  <li>Built and manage the Elevate Dashboard, an internal operations platform supporting premium hospitality and corporate client experiences across planning, ticketing, user administration, vendor and chef coordination, and production workflows.</li>
                  <li>Serve as the team&apos;s AI and workflow implementation lead, helping colleagues adopt practical AI systems across research, prospecting, internal automation, and day-to-day execution.</li>
                  <li>Oversee technical production for recurring virtual events and private concerts, coordinating clients, venues, production teams, and delivery stakeholders across live experiences.</li>
                  <li>Oversee website operations, analytics, content updates, and Salesforce/HubSpot integration support tied to client engagement and demand generation.</li>
                  <li>Built AI-assisted prospecting workflows using Claude, OpenAI, ZoomInfo, and Outreach, and automated logistics workflows using Google Forms, Sheets, and Apps Script.</li>
                </ul>
              </div>
              <div className="resume-role">
                <h3>VP, Innovation & Technology</h3>
                <p>Zinc Agency</p>
                <p>2020 - 2024 | New York, NY</p>
                <ul className="work-experience-item">
                  <li>Led the company&apos;s pivot to virtual programming during COVID, building the technical platform that preserved delivery for corporate hospitality clients while in-person events were shut down.</li>
                  <li>Engineered a custom streaming and registration platform using WordPress, JavaScript, CSS, HTML, Cloudflare, WPEngine, web APIs, and embedded meeting infrastructure including Whereby.</li>
                  <li>Identified, implemented, and rolled out Hive as the core project management system for the division, building custom workflows that still support day-to-day operations across Zinc Agency and Elevate Experiences.</li>
                  <li>Supported more than 2,000 celebrity-led livestreams and managed technical specifications, talent booking, and coordination with crews and stakeholders.</li>
                  <li>Repurposed the virtual infrastructure into InviteMeNow, a branded registration platform for in-person, virtual, and hybrid client-facing hospitality experiences that reduced reliance on external event SaaS tools.</li>
                </ul>
              </div>
              <div className="resume-role">
                <h3>Director of Products</h3>
                <p>Zinc Agency</p>
                <p>2018 - 2020 | New York, NY</p>
                <ul className="work-experience-item">
                  <li>Led the end-to-end process of budget creation, experience pricing, and sales strategy formulation, enabling the sales team to effectively pitch and secure client commitments.</li>
                  <li>Drafted and signed contracts, overseeing legal agreements to safeguard company interests, and facilitate smooth collaboration between talent, venues, and corporate clients.</li>
                  <li>Coordinated critical operations, including talent negotiations, mediating between artists, their representatives, and event stakeholders to align expectations and requirements.</li>
                </ul>
              </div>
              <div className="resume-role">
                <h3>Account Executive</h3>
                <p>Creative Artists Agency</p>
                <p>2014 - 2018 | New York, NY</p>
                <ul className="work-experience-item">
                  <li>Conceived and developed unique experiential concepts leveraging CAA-represented talent, tailored for corporate buyers, driving innovation and client engagement in premium experiences.</li>
                  <li>Managed all logistical aspects of sold events, including talent booking through agencies, venue and transportation arrangements, ensuring seamless execution and high client satisfaction.</li>
                  <li>Sharpened my communication skills with lots of cold calling, learning how to engage potential clients and laying the foundation for lasting business relationships.</li>
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
