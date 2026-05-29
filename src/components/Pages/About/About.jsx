import React from 'react';
import { FaArrowRight, FaRobot, FaTools, FaChartLine } from 'react-icons/fa';
import './about.css';
import headshot from '../../../assets/Headshot.png';

function About() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-copy">
          <p className="eyebrow">AI workflow and technical operations lead</p>
          <h2>I build the systems, workflows, and internal tools that make teams faster.</h2>
          <p>
            I am an AI workflow and technical operations leader with a background spanning internal tools,
            client-facing systems, GTM workflows, and operational platforms. In my current role at Elevate
            Experiences, I built the Elevate Dashboard, an internal operations platform that supports premium
            hospitality and corporate client experiences across planning, ticketing, user administration,
            and production workflows.
          </p>
          <p>
            My work sits at the intersection of technical execution and practical business operations. I use
            React, Node.js, APIs, Vercel, Google Sheets workflows, and AI tools such as Claude, OpenAI, and
            Codex to turn ambiguous problems into useful systems. I am especially interested in roles across
            engineering-adjacent product work, AI operations, implementation, customer-facing technical roles,
            and internal tooling, where I can combine systems thinking, technical fluency, and real-world execution.
          </p>
          <div className="about-actions">
            <a className="primary-action" href="/portfolio">View Work <FaArrowRight size={14} /></a>
            <a href="/resume">Resume</a>
            <a href="mailto:leighton@vanness.net">Contact</a>
          </div>
        </div>
        <aside className="hero-card" aria-label="Leighton Van Ness profile summary">
          <img src={headshot} alt="Leighton Van Ness" className="headshot" />
          <div>
            <strong>Leighton Van Ness</strong>
            <span>VP, Innovation</span>
          </div>
          <dl>
            <div>
              <dt>Current focus</dt>
              <dd>AI adoption, internal systems, GTM workflows</dd>
            </div>
            <div>
              <dt>Target roles</dt>
              <dd>AI ops, technical ops, solutions, product ops</dd>
            </div>
          </dl>
        </aside>
      </section>

      <section className="about-highlights">
        <div>
          <FaTools size={18} />
          <h3>Internal Tools</h3>
          <p>Built systems for planning, ticket workflows, user administration, exports, QA, and production operations.</p>
        </div>
        <div>
          <FaRobot size={18} />
          <h3>AI Workflows</h3>
          <p>Implemented practical Claude/OpenAI-assisted research, prospecting, enrichment, and workflow automation for non-technical teams.</p>
        </div>
        <div>
          <FaChartLine size={18} />
          <h3>Customer-Facing Ops</h3>
          <p>Own website operations, analytics, CRM integration support, and technical execution across premium hospitality and corporate client delivery.</p>
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
          <li>AI operations and workflow implementation</li>
          <li>Technical operations and internal tools</li>
          <li>Customer success, solutions, and implementation</li>
          <li>GTM systems, automation, and revenue operations tooling</li>
        </ul>
      </section>
    </div>
  );
}

export default About;
