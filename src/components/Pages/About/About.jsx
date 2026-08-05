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
          <p className="eyebrow">AI operations, implementation, sales enablement, and customer systems</p>
          <h2>I build AI-enabled sales and operations systems - and lead the customer-facing delivery that makes them useful.</h2>
          <p>
            AI operations, implementation, sales-enablement, and customer-facing systems leader who builds
            internal tools, operational platforms, GTM workflows, and AI-enabled processes. Partner with
            sales teams and enterprise customers to translate business needs into dependable systems and delivery
            across CRM workflows, account programs, events, and post-sale execution, backed by hands-on fluency
            across APIs, modern web platforms, CRM systems, analytics, and deployment workflows.
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
              <dd>AI operations, sales enablement, customer delivery</dd>
            </div>
            <div>
              <dt>Target roles</dt>
              <dd>AI operations, implementation, sales enablement, customer success</dd>
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
          <p>Build custom AI sales agents and API-connected workflows for list building, research, qualification, personalized outreach, sending operations, and CRM synchronization.</p>
        </div>
        <div>
          <span className="highlight-icon" aria-hidden="true">
            <FaChartLine />
          </span>
          <h3>Implementation & Delivery</h3>
          <p>Serve on two seven-figure enterprise account teams, translating customer needs into reliable systems, onsite support, and technical execution across premium corporate programs.</p>
        </div>
      </section>

      <section className="fit-section">
        <h2>Where I Fit</h2>
        <p>
          I am targeting companies building ambitious technical products, especially AI, frontier tech,
          infrastructure, and high-growth software teams. The strongest fit is roles where I can combine
          hands-on building, systems thinking, implementation depth, sales enablement, and customer workflow insight.
        </p>
        <ul>
          <li>Implementation, solutions, and technical operations roles</li>
          <li>AI operations, workflow operations, and AI-enabled systems roles</li>
          <li>Product operations, business operations, and internal tools</li>
          <li>GTM systems, automation, CRM operations, and revenue operations</li>
          <li>Technical sales development, sales enablement, and customer success</li>
        </ul>
      </section>
    </div>
  );
}

export default About;
