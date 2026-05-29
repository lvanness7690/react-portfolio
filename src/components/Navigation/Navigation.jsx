import React from 'react';
import { Link } from 'react-router-dom';
import './navigation.css';

function Navigation() {
  return (
    <nav>
      <ul>
        <li><Link to="/">About</Link></li>
        <li><Link to="/portfolio">Work</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/resume">Resume</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;
