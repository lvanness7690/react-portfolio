import React from 'react';
import './resume.css';

function Resume() {
  return (
    <div className="resume">
      <div className="summary-statement">
        <h2 className='page-header'>FULL-STACK DEVELOPER</h2>
        <p>With nearly a decade of diverse professional experience and a strong passion for technology, I am a certified Full Stack Developer from IBM and Columbia Engineering Bootcamp. I possess a strong work ethic, exceptional attention to detail, and thrive in collaborative team environments.</p>
         <a href="https://github.com/lvanness7690/react-portfolio/blob/7cf331deaa038a36886b495e889fed66ae4a6a90/src/assets/Resume.pdf" download className="download-button">
      Download Resume
    </a>
      </div>
      
      <div className="columns">
        <div className="left-column">
          <section>
            <h2>EDUCATION</h2>
            <p>New York University</p>
            <p>M.S. in Management</p>
            <p>🗓 2011 - 2014 📍 New York, NY</p>
            <p>University of St. Andrews</p>
            <p>Honors in Economics</p>
            <p>🗓 2009 - 2011 📍 St. Andrews, Scotland, UK</p>
          </section>

          <section>
            <h2>CERTIFICATIONS</h2>
            <p>Columbia Engineering Coding Boot Camp Professional Certificate</p>
            <p>🗓 October 2023 - March 2024</p>
            <p>IBM Full Stack Software Developer Professional Certificate</p>
            <p>🗓 May 2023 - September 2023</p>
          </section>

          <section>
            <h2>SKILLS</h2>
            <ul className="skills-list">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript (JS)</li>
              <li>jQuery</li>
              <li>Express.js</li>
              <li>Node.js</li>
              <li>React</li>
              <li>Bootstrap</li>
              <li>MySQL</li>
              <li>MongoDB</li>
              <li>Git</li>
              <li>Model-View-Controller (MVC)</li>
              <li>Object-Relational Mapping (ORM)</li>
              <li>Object-Oriented Programming (OOP)</li>
              <li>Web APIs</li>
              <li>Server-Side APIs</li>
              <li>WordPress</li>
            </ul>
          </section>
        </div>

        <div className="right-column">
          <section>
            <h2>WORK EXPERIENCE</h2>
            <div>
              <h3>VP Innovation & Technology</h3>
              <p>Zinc Agency</p>
              <p>🗓 2020 - Present 📍 New York, NY</p>
              <ul className="work-experience-item">
                <li>Transitioned to VP of Innovation and Technology, leading the successful pivot to virtual streaming amid the pandemic and the development of a proprietary streaming platform.</li>
                <li>Engineered a custom streaming solution utilizing WordPress, JavaScript, CSS, HTML, and web APIs, demonstrating strong technical proficiency and innovative problem-solving.</li>
                <li>Successfully hosted over 2,000+ celebrity-led livestreams from 2020 to present.</li>
                <li>Managed all facets of event production for virtual streams, including talent booking, technical specifications, and coordination with on-site crews to ensure high-quality broadcasts.</li>
                <li>Leveraged the success of the streaming platform to develop a comprehensive registration system for managing in-person events, further enhancing operational efficiency and client service capabilities.</li>
              </ul>
            </div>
            <div>
              <h3>Director of Products</h3>
              <p>Zinc Agency</p>
              <p>🗓 2018 - 2020 📍 New York, NY</p>
              <ul className="work-experience-item">
                <li>Led the end-to-end process of budget creation, experience pricing, and sales strategy formulation, enabling the sales team to effectively pitch and secure client commitments.</li>
                <li>Drafted and signed contracts, overseeing legal agreements to safeguard company interests, and facilitate smooth collaboration between talent, venues, and corporate clients.</li>
                <li>Coordinated critical operations, including talent negotiations, mediating between artists, their representatives, and event stakeholders to align expectations and requirements.</li>
              </ul>
            </div>
            <div>
              <h3>Account Executive</h3>
              <p>Creative Artists Agency</p>
              <p>🗓 2014 - 2018 📍 New York, NY</p>
              <ul className="work-experience-item">
                <li>Conceived and developed unique experiential concepts leveraging CAA-represented talent, tailored for corporate buyers, driving innovation and client engagement in premium experiences.</li>
                <li>Managed all logistical aspects of sold events, including talent booking through agencies, venue and transportation arrangements, ensuring seamless execution and high client satisfaction.</li>
                <li>Sharpened my communication skills with lots of cold calling, learning how to engage potential clients and laying the foundation for lasting business relationships.</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Resume;
