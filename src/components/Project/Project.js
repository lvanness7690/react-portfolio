import React from 'react';
import './project.css';

function Project({ title, description, imageUrl, repoUrl, liveUrl }) {
  return (
    <div className="project">
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={liveUrl}>Live Version</a> | <a href={repoUrl}>GitHub Repo</a>
    </div>
  );
}

export default Project;
