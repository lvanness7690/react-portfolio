import React from 'react';
import { FaFileArrowDown } from 'react-icons/fa6';
import './resume.css';
import resumePdf from '../../../assets/Resume.pdf';
import resumeData from '../../../data/resumeData.json';

function Resume() {
  return (
    <div className="resume">
      <div className="summary-statement">
        <p className="eyebrow resume-eyebrow">Resume</p>
        <h2 className='page-header'>{resumeData.headline}</h2>
        <p>{resumeData.summary}</p>
        <a href={resumePdf} download="Leighton Van Ness Resume.pdf" className="download-button icon-button-link">
          <FaFileArrowDown aria-hidden="true" />
          <span>Download Resume</span>
        </a>
      </div>

      <div className="columns">
        <div className="left-column">
          <section className="resume-panel">
            <h2>EDUCATION</h2>
            <div className="panel-scroll panel-scroll-compact">
              <div className="resume-stack">
                {resumeData.education.map((entry) => (
                  <div className="resume-entry" key={entry.institution}>
                    <p className="resume-entry-title">{entry.institution}</p>
                    <p className="resume-entry-detail">{entry.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="resume-panel">
            <h2>CERTIFICATIONS</h2>
            <div className="panel-scroll panel-scroll-compact">
              <div className="resume-stack">
                {resumeData.certifications.map((entry) => (
                  <div className="resume-entry" key={entry.institution}>
                    <p className="resume-entry-title">{entry.institution}</p>
                    <p className="resume-entry-detail">{entry.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="resume-panel">
            <h2>SKILLS</h2>
            <div className="panel-scroll">
              <div className="skills-groups">
                {resumeData.skills.map((skill) => (
                  <div className="skill-group" key={skill.label}>
                    <p className="skill-group-label">{skill.label}</p>
                    <p className="skill-group-copy">{skill.items}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        <div className="right-column">
          <section className="resume-panel resume-panel-work">
            <h2>WORK EXPERIENCE</h2>
            <div className="panel-scroll panel-scroll-work">
              {resumeData.experience.map((entry) => (
                <div className="resume-role" key={`${entry.company}-${entry.role}`}>
                  <h3>{entry.role}</h3>
                  <p>{entry.company}</p>
                  <p>{entry.meta}</p>
                  <ul className="work-experience-item">
                    {entry.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Resume;
