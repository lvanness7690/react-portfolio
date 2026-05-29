import React from 'react';
import { FaFileArrowDown } from 'react-icons/fa6';
import './resume.css';
import resumePdf from '../../../assets/Resume.pdf';

function Resume() {
  return (
    <div className="resume">
      <div className="summary-statement">
        <p className="eyebrow resume-eyebrow">Resume</p>
        <h2 className='page-header'>AI Workflow &amp; Technical Operations Lead</h2>
        <p>
          Customer-facing systems builder focused on internal tools, operational systems, automation,
          GTM systems, and client-facing platforms. I bring a builder-operator mindset shaped by AI
          workflow implementation, hospitality and corporate client delivery, and modern web systems.
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
                <li>React / CRA / Vite</li>
                <li>Node.js / Express.js / serverless routes</li>
                <li>REST APIs / GraphQL / Apollo</li>
                <li>HTML / CSS / JavaScript</li>
                <li>Redis / Upstash / Vercel KV / Convex</li>
                <li>MongoDB / Mongoose / MySQL / Sequelize</li>
                <li>Google Sheets API / Apps Script / Google Forms</li>
                <li>GitHub / CI-CD / Vercel / preview deploys</li>
                <li>Playwright / Jest / build checks</li>
                <li>Salesforce / HubSpot / Zapier</li>
                <li>ZoomInfo / Outreach / SEO / Google Analytics</li>
                <li>Claude / OpenAI / Codex / OpenClaw</li>
                <li>WordPress / WPEngine / Cloudflare / Whereby APIs</li>
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
                  <li>Built and manage the Elevate Dashboard, an internal operations platform centralizing event planning, ticketing workflows, user administration, vendor and chef coordination, and production management for premium hospitality and corporate client experiences.</li>
                  <li>Serve as the team&apos;s AI and workflow implementation lead, piloting practical use cases and helping colleagues apply AI systems to research, prospecting, internal automation, and day-to-day execution.</li>
                  <li>Oversee the technical production layer for roughly 25 virtual events annually and 5 to 10 private concerts and large-format live experiences each year, coordinating production teams, clients, venues, and stakeholders.</li>
                  <li>Oversaw launch of the new Elevate Experiences website, coordinating developers, design, copy, stakeholder review, QA, launch readiness, and post-launch improvements.</li>
                  <li>Manage website operations post-launch, including content updates, SEO hygiene, Google Analytics, and Salesforce, HubSpot, and related integration workflows tied to client engagement and demand generation.</li>
                  <li>Developed the platform using React, serverless Node.js API routes on Vercel, Redis/Upstash, Google Sheets API workflows, GitHub CI/CD, and production-readiness testing.</li>
                  <li>Implemented auth, users, invites, roles, permissions, event and ticket data models, admin tooling, and production safety workflows.</li>
                  <li>Added PDF and Word exports, regression coverage, build checks, Playwright smoke tests, deployment verification, weekly audit workflows, and release reporting.</li>
                  <li>Built AI-assisted prospecting workflows using Claude, ZoomInfo, and Outreach to research companies, create targeted prospect lists, enrich lead data, and support outbound email marketing campaigns.</li>
                  <li>Built and automated an inventory and logistics tracker with Google Forms, Google Sheets, and Apps Script to manage a recurring three-year event series spanning roughly 60 events, 600 shipped bins, and about 12,000 to 24,000 tracked items.</li>
                </ul>
              </div>
              <div className="resume-role">
                <h3>VP, Innovation & Technology</h3>
                <p>Zinc Agency</p>
                <p>2020 - 2024 | New York, NY</p>
                <ul className="work-experience-item">
                  <li>Led the company&apos;s pivot to virtual programming during COVID, building the technical platform that preserved delivery for corporate hospitality clients while in-person events were shut down.</li>
                  <li>Identified, implemented, and rolled out Hive as the core project management system for the division, building custom workflows and operating structure still used daily across Zinc Agency and Elevate Experiences.</li>
                  <li>Engineered a custom streaming platform using WordPress, JavaScript, CSS, HTML, Cloudflare, WPEngine, web APIs, and embedded video and meeting APIs including Whereby.</li>
                  <li>Supported more than 2,000 celebrity-led livestreams and managed technical specifications, talent booking, and coordination with crews and stakeholders.</li>
                  <li>Repurposed the virtual-event infrastructure into InviteMeNow, a registration platform for in-person, virtual, and hybrid client-facing hospitality experiences.</li>
                  <li>Built InviteMeNow as a customizable alternative to external event SaaS subscriptions such as Splash, with branded pages, custom URLs, maps, speaker information, and API-driven launch flows.</li>
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
