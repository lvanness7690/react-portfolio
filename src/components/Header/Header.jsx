import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

function Header() {
  return (
    <header>
      <Link className="site-mark" to="/">
        <span>Leighton Van Ness</span>
        <small>AI Workflow &amp; Technical Operations</small>
      </Link>
      <nav>
        <ul>
          <li><Link to="/">About</Link></li>
          <li><Link to="/portfolio">Work</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/resume">Resume</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
