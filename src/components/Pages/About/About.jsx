import React from 'react';
import {
  FaArrowRightLong,
  FaEnvelope,
  FaFileLines,
  FaGithub,
  FaGlobe,
  FaLinkedinIn,
  FaRobot,
  FaScrewdriverWrench,
  FaChartLine,
} from 'react-icons/fa6';
import './about.css';
import headshot from '../../../assets/Headshot.png';

function About() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-copy">
          <p className="eyebrow">AI workflow, implementation, and customer-facing systems</p>
          <h2>I build customer-facing systems, internal tools, and AI workflows that make teams faster.</h2>
          <p>
            I work at the intersection of operations, client delivery, GTM, and software: turning messy
            manual processes into dashboards, automations, registration platforms, website systems,
            prospecting workflows, and practical AI tools that non-technical teams can actually use.
          </p>
          <p>
            Recently, I built and manage the Elevate Dashboard with React, serverless Node.js API routes
            on Vercel, Redis/Upstash, Google Sheets API workflows, GitHub CI/CD, and Playwright checks.
            I also helped lead the Elevate website launch and related GTM systems work, and I serve as the
            go-to person for applying Claude, OpenAI/ChatGPT, Codex, and related tools to real business
            workflows across research, lead generation, email marketing, operations, and internal tooling.
          </p>
          <p>
            My background also includes customer-facing systems, implementation-heavy operations, live event
            production, technical account-style coordination, and workflow ownership across premium
            hospitality and corporate client delivery.
          </p>
          <div className="about-actions">
            <a className="primary-action icon-button-link" href="/portfolio">
              <FaArrowRightLong aria-hidden="true" />
              <span>View Work</span>
            </a>
            <a className="icon-button-link" href="/resume">
              <FaFileLines aria-hidden="true" />
              <span>Resume</span>
            </a>
            <a className="icon-button-link" href="mailto:leighton@vanness.net">
              <FaEnvelope aria-hidden="true" />
              <span>Contact</span>
            </a>
          </div>
        </div>
        <aside className="hero-card" aria-label="Leighton Van Ness profile summary">
          <div className="hero-card-media">
            <img src={headshot} alt="Leighton Van Ness" className="headshot" />
          </div>
          <div>
            <strong>Leighton Van Ness</strong>
            <span>VP, Innovation</span>
            <div className="hero-card-links">
              <a
                className="icon-link"
                href="https://www.linkedin.com/in/leighton-van-ness-9b901036/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn aria-hidden="true" />
                <span>LinkedIn</span>
              </a>
              <a
                className="icon-link"
                href="https://github.com/lvanness7690"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub aria-hidden="true" />
                <span>GitHub</span>
              </a>
              <a
                className="icon-link"
                href="https://vanness.net"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGlobe aria-hidden="true" />
                <span>Portfolio</span>
              </a>
              <a className="icon-link" href="mailto:leighton@vanness.net">
                <FaEnvelope aria-hidden="true" />
                <span>Email</span>
              </a>
            </div>
          </div>
          <dl>
            <div>
              <dt>Current focus</dt>
              <dd>AI adoption, customer-facing systems, GTM workflows</dd>
            </div>
            <div>
              <dt>Target roles</dt>
              <dd>Customer success, implementation, technical account, product ops</dd>
            </div>
          </dl>
        </aside>
      </section>

      <section className="about-highlights">
        <div>
          <span className="highlight-icon" aria-hidden="true">
            <FaScrewdriverWrench />
          </span>
          <h3>Internal Tools</h3>
          <p>Built systems for planning, ticket workflows, user administration, exports, QA, production operations, and cross-team execution.</p>
        </div>
        <div>
          <span className="highlight-icon" aria-hidden="true">
            <FaRobot />
          </span>
          <h3>AI Workflows</h3>
          <p>Implemented practical Claude/OpenAI-assisted research, prospect-list creation, ZoomInfo enrichment, and Outreach workflows.</p>
        </div>
        <div>
          <span className="highlight-icon" aria-hidden="true">
            <FaChartLine />
          </span>
          <h3>Implementation & Delivery</h3>
          <p>Own website operations, analytics, CRM integration support, registration systems, and technical execution across premium hospitality and corporate client delivery.</p>
        </div>
      </section>

      <section className="fit-section">
        <h2>Where I Fit</h2>
        <p>
          I am targeting companies building ambitious technical products, especially AI, frontier tech,
          infrastructure, and high-growth software teams. The strongest fit is roles where I can combine
          hands-on building, systems thinking, implementation depth, and customer or internal workflow insight.
        </p>
        <ul>
          <li>Customer success, technical account, and implementation roles</li>
          <li>AI operations, workflow operations, and support-heavy systems roles</li>
          <li>Product operations, business operations, and internal tools</li>
          <li>GTM systems, automation, and revenue or marketing operations</li>
        </ul>
      </section>
    </div>
  );
}

export default About;
