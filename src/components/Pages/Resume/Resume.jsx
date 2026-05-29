import React from 'react';
import { FaFileArrowDown } from 'react-icons/fa6';
import './resume.css';
import resumePdf from '../../../assets/Resume.pdf';

function Resume() {
  return (
    <div className="resume">
      <div className="summary-statement">
        <p className="eyebrow resume-eyebrow">Resume</p>
        <h2 className='page-header'>Implementation, AI Workflow &amp; Customer-Facing Systems Lead</h2>
        <p>
          Implementation, AI workflow, and customer-facing systems lead focused on building and improving
          the workflows teams rely on to serve customers, run operations, and grow revenue. I build
          internal tools, registration platforms, website and CRM workflows, GTM systems, and AI-enabled
          processes that help non-technical teams work faster and with more structure. Known for
          translating between stakeholders, client needs, and technical systems across hospitality and
          corporate-client delivery, I combine hands-on building with implementation depth, operational
          judgment, and practical AI adoption.
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
                  <li>Built and manage the Elevate Dashboard, an internal operations platform that centralizes event planning, ticketing workflows, user administration, vendor and chef coordination, and production management in one shared system for premium hospitality and corporate client experiences.</li>
                  <li>Serve as the team&apos;s AI and workflow implementation lead, identifying new tools, piloting practical use cases, and helping colleagues apply AI systems to real business workflows.</li>
                  <li>Oversee the technical production layer for roughly 25 virtual events annually and 5-10 private concerts and large-format live experiences each year, coordinating production teams, clients, venues, and stakeholders to deliver high-touch corporate hospitality programs.</li>
                  <li>Oversaw launch of the new Elevate Experiences website, coordinating developers, design, copy, stakeholder review, QA, launch readiness, and post-launch iteration across a modular experience library, case studies, testimonials, and inquiry flows for a premium hospitality and corporate client business.</li>
                  <li>Manage the Elevate Experiences website post-launch, adding new content weekly, maintaining SEO hygiene, monitoring Google Analytics, and supporting HubSpot form workflows, Salesforce campaign tracking, and related GTM integrations tied to client engagement and demand generation.</li>
                  <li>Developed the platform using React (CRA), serverless Node.js API routes on Vercel, Redis/Upstash shared data, Google Sheets API workflows, GitHub CI/CD, pull requests, preview deployments, and production auto-deploys.</li>
                  <li>Implemented auth, users, invites, roles, permissions, event/ticket data models, admin tooling, local-vs-shared read-only guards, and production safety workflows.</li>
                  <li>Added PDF/Word exports, event/ticket enhancements, regression coverage, build checks, Playwright smoke tests, deployment verification, weekly audit/patch workflows, and release reporting.</li>
                  <li>Built AI-assisted prospecting workflows using Claude, ZoomInfo, and Outreach to research companies, create targeted prospect lists, enrich lead data, and support outbound email marketing campaigns.</li>
                  <li>Manage email marketing and lead-generation operations, connecting sales, research, and campaign workflows so the team can move from prospect discovery to Outreach execution more efficiently.</li>
                  <li>Built and automated an inventory and logistics tracker with Google Forms, Google Sheets, and Apps Script to manage a recurring 3-year event series spanning roughly 60 events, 600 shipped bins, and about 12,000-24,000 tracked items.</li>
                  <li>Designed the tracker around a unified data model for event intake, schedule mapping, shipment status, replacement logs, and dashboard reporting; automated recap emails, submission-status syncing, low-inventory alerts, damaged-item replacement workflows, destination routing, and safe resend/delete-cascade recovery flows.</li>
                </ul>
              </div>
              <div className="resume-role">
                <h3>VP, Innovation & Technology</h3>
                <p>Zinc Agency</p>
                <p>2020 - 2024 | New York, NY</p>
                <ul className="work-experience-item">
                  <li>Led the company&apos;s pivot to virtual programming during COVID, building the technical platform that helped preserve the business, expand virtual event offerings, and support continued delivery for corporate hospitality clients when in-person events were shut down.</li>
                  <li>Identified, implemented, and rolled out Hive as the core project management system for the division, building custom workflows, forms, automations, and Salesforce-connected operating structure that the team still uses daily across Zinc Agency and Elevate Experiences.</li>
                  <li>Engineered a custom streaming platform using WordPress, JavaScript, CSS, HTML, web APIs, embedded video/meeting APIs including Whereby, branded event pages, embedded launch flows, and reusable registration workflows.</li>
                  <li>Supported more than 2,000 celebrity-led livestreams and managed technical specifications, talent booking, and coordination with crews and stakeholders.</li>
                  <li>When events returned in person, repurposed the streaming and registration infrastructure instead of abandoning it, evolving the platform into InviteMeNow for in-person, virtual, and hybrid event registration management.</li>
                  <li>Converted the virtual-event infrastructure into the in-person registration management platform now used for client-facing event experiences, improving how the team delivered branded programs across formats.</li>
                  <li>Built InviteMeNow as a customizable alternative to expensive event SaaS subscriptions such as Splash, with branded pages, custom URLs/subdomains, rich content, maps, directions, speaker information, API-driven launch flows, and client-facing hospitality experiences delivered through a custom wrapper.</li>
                </ul>
              </div>
              <div className="resume-role">
                <h3>Director of Products</h3>
                <p>Zinc Agency</p>
                <p>2018 - 2020 | New York, NY</p>
                <ul className="work-experience-item">
                  <li>Led budget creation, experience pricing, product packaging, and sales strategy for premium entertainment and experiential offerings.</li>
                  <li>Drafted and signed contracts, managed legal agreements, and coordinated talent, venue, and corporate-client requirements.</li>
                  <li>Coordinated critical operations, including talent negotiations and mediation between artists, representatives, and event stakeholders.</li>
                </ul>
              </div>
              <div className="resume-role">
                <h3>Account Executive</h3>
                <p>Creative Artists Agency</p>
                <p>2014 - 2018 | New York, NY</p>
                <ul className="work-experience-item">
                  <li>Developed experiential concepts using CAA-represented talent for corporate buyers and premium client programs.</li>
                  <li>Managed logistics for sold events, including talent booking, agency coordination, venue planning, transportation, concierge-style details, and client communication.</li>
                  <li>Built client relationship and cold outreach skills while managing high-expectation entertainment and brand partnerships.</li>
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
