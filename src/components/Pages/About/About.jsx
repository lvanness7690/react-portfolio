import React from 'react';
import './about.css';
import headshot from '../../../assets/Headshot.png';

function About() {
  return (
    <div className="about">
      <h2>About Me</h2>
      <img src={headshot} alt="My Headshot" className="headshot" style={{ maxWidth: '300px', maxHeight: '300px', borderRadius: '50%' }}/>
      <p>With nearly a decade of diverse professional experience and a fervent passion for technology, I proudly hold certification as a Full Stack Developer from IBM and Columbia Engineering Bootcamp. I bring to the table a robust skill set encompassing HTML, CSS, JavaScript, and frameworks like React, along with expertise in server-side development using Express and Node.js. My proficiency extends to managing data with both relational (MySQL) and NoSQL (MongoDB) databases, ensuring seamless functionality across the stack.</p>
      <p>I am adept at employing Git for version control, implementing MVC architecture for maintainable codebases, and leveraging Object-Oriented Programming principles to design scalable solutions. With exceptional attention to detail and a collaborative mindset, I thrive in team environments, where my strong work ethic drives success. Whether it's crafting dynamic web applications, integrating APIs, or customizing solutions with WordPress, I am dedicated to delivering high-quality results that exceed expectations. Let's connect and explore how my skills and experience can contribute to your next project.</p>
    </div>
  );
}

export default About;
