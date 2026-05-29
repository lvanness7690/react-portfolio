import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import './contact.css';

function Contact() {
  return (
    <div className="contact">
      <p className="eyebrow">Contact</p>
      <h2>Let's talk about AI workflow, internal tools, or technical operations roles.</h2>
      <p>
        I am open to AI operations, technical operations, GTM systems, internal tools,
        solutions, product operations, and engineering-adjacent roles.
      </p>
      <div className="contact-links">
        <a className="icon-button-link" href="mailto:leighton@vanness.net">
          <FaEnvelope aria-hidden="true" />
          <span>leighton@vanness.net</span>
        </a>
        <a className="icon-button-link" href="https://github.com/lvanness7690" target="_blank" rel="noopener noreferrer">
          <FaGithub aria-hidden="true" />
          <span>GitHub</span>
        </a>
        <a className="icon-button-link" href="https://www.linkedin.com/in/leighton-van-ness-9b901036/" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn aria-hidden="true" />
          <span>LinkedIn</span>
        </a>
      </div>
    </div>
  );
}

export default Contact;
