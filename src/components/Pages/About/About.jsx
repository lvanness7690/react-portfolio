import React from 'react';
import './about.css';
import headshot from '../../../assets/Headshot.png';

function About() {
  return (
    <div>
      <h2 className='about-style'>ABOUT ME</h2>
      <img src={headshot} alt="My Headshot" className="headshot" style={{ maxWidth: '200px', maxHeight: '200px', borderRadius: '50%' }}/>
      <p className="about-style">I am an AI workflow and technical operations leader with a background spanning internal tools, client-facing systems, GTM workflows, and operational platforms. In my current role at Elevate Experiences, I built the Elevate Dashboard, an internal operations platform that supports premium hospitality and corporate client experiences across planning, ticketing, user administration, and production workflows.</p>
      <p className="about-style">My work sits at the intersection of technical execution and practical business operations. I use React, Node.js, APIs, Vercel, Google Sheets workflows, and AI tools such as Claude, OpenAI, and Codex to turn ambiguous problems into useful systems. I am especially interested in roles across engineering-adjacent product work, AI operations, implementation, customer-facing technical roles, and internal tooling, where I can combine systems thinking, technical fluency, and real-world execution.</p>
    </div>
  );
}

export default About;
