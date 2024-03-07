import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'; // Import icons from Font Awesome
import './footer.css';

function Footer() {
  return (
    <footer>
      <a href="https://github.com/lvanness7690"><FaGithub size={32} /></a> | 
      <a href="https://www.linkedin.com/in/leighton-van-ness-9b901036/"><FaLinkedin size={32} /></a> |
      <a href="mailto:leighton@vanness.net"><FaEnvelope size={32} /></a>
    </footer>
  );
}

export default Footer;
