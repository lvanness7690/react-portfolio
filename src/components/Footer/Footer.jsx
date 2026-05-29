import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import './footer.css';

function Footer() {
  return (
    <footer>
      <p>Implementation, AI workflow, and customer-facing systems.</p>
      <div className="footer-links">
        <a className="icon-link" href="https://github.com/lvanness7690">
          <FaGithub aria-hidden="true" />
          <span>GitHub</span>
        </a>
        <a className="icon-link" href="https://www.linkedin.com/in/leighton-van-ness-9b901036/">
          <FaLinkedinIn aria-hidden="true" />
          <span>LinkedIn</span>
        </a>
        <a className="icon-link" href="mailto:leighton@vanness.net">
          <FaEnvelope aria-hidden="true" />
          <span>Email</span>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
