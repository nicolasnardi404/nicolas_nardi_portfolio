import React from "react";
import "../styles/Projects.css";

const ProjectCard = ({ title, tags, description, onClick, size }) => {
  return (
    <div className="project-card" onClick={onClick}>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="tags">
        {tags.map((tag, index) => (
          <span key={index} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
