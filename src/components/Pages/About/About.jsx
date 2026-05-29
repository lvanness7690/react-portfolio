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
          <p className="eyebrow">Implementation, AI workflow, and customer-facing systems</p>
          <h2>I build customer-facing systems, AI workflows, and internal tools that help teams deliver.</h2>
          <p>
            Implementation, AI workflow, and customer-facing systems lead focused on building and improving
            the workflows teams rely on to serve customers, run operations, and grow revenue. I build
            internal tools, registration platforms, website and CRM workflows, GTM systems, and AI-enabled
            processes that help non-technical teams work faster and with more structure. Known for
            translating between stakeholders, client needs, and technical systems across hospitality and
            corporate-client delivery, I combine hands-on building with implementation depth, operational
            judgment, and practical AI adoption.
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
