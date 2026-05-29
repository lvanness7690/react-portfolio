import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

function Header() {
  return (
    <header>
      <div>
        <h1>Leighton Van Ness</h1>
        <p>AI Workflow &amp; Technical Operations</p>
      </div>
      <nav>
        <ul>
          <li><Link to="/">About</Link></li>
          <li><Link to="/portfolio">Work</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/meet">Meet</Link></li>
          <li><Link to="/resume">Resume</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
