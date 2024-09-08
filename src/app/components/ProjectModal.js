import React, { useCallback, useEffect } from "react";
import "../styles/ProjectModal.css";

const ProjectModal = ({ project, onClose }) => {
  const descriptionParagraphs = project.longDescription
    .split("\n")
    .filter(Boolean);

  const handleOutsideClick = useCallback(
    (e) => {
      if (e.target.classList.contains("project-modal-overlay")) {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [handleOutsideClick]);

  return (
    <div className="project-modal-overlay">
      <div className="project-modal-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h2>{project.title}</h2>
        {descriptionParagraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
        <div className="tags">
          {project.tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            Visit Project
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectModal;
