import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './footer.css';

function Footer() {
  return (
    <footer>
      <p>AI workflow, internal tools, and technical operations.</p>
      <div className="footer-links">
        <a href="https://github.com/lvanness7690" aria-label="GitHub"><FaGithub size={24} /></a>
        <a href="https://www.linkedin.com/in/leighton-van-ness-9b901036/" aria-label="LinkedIn"><FaLinkedin size={24} /></a>
        <a href="mailto:leighton@vanness.net" aria-label="Email"><FaEnvelope size={24} /></a>
      </div>
    </footer>
  );
}

export default Footer;
