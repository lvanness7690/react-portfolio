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
          <p className="eyebrow">AI operations, implementation, and customer-facing systems</p>
          <h2>I build AI-enabled workflows, internal tools, and customer-facing systems that help teams operate and grow.</h2>
          <p>
            AI operations, implementation, and customer-facing systems leader who builds internal tools,
            operational platforms, GTM workflows, and AI-enabled processes. Translate business needs into
            practical systems spanning product operations, workflow automation, client delivery, and revenue
            operations. Bring hands-on technical fluency across APIs, modern web platforms, CRM systems,
            analytics, and deployment workflows.
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
              <dd>AI operations, customer-facing systems, GTM workflows</dd>
            </div>
            <div>
              <dt>Target roles</dt>
              <dd>AI operations, implementation, technical operations, product ops</dd>
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
          <p>Build AI agents and API-connected workflows for research, prospecting, qualification, automation, and targeted outbound execution.</p>
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
          <li>Implementation, solutions, and technical operations roles</li>
          <li>AI operations, workflow operations, and AI-enabled systems roles</li>
          <li>Product operations, business operations, and internal tools</li>
          <li>GTM systems, automation, and revenue or marketing operations</li>
        </ul>
      </section>
    </div>
  );
}

export default About;
