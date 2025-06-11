import React from "react";
import styles from "../styles/projects.module.css";

const ProjectCard = ({
  title,
  description,
  icon,
  tags = [],
  viewMode = "grid",
  onClick,
}) => {
  return (
    <div
      className={`${styles.projectCard} ${
        viewMode === "list" ? styles.list : ""
      }`}
      onClick={onClick}
      role="button"
      tabIndex={0}
    >
      <div className={styles.projectIcon}>{icon}</div>
      <div className={styles.projectContent}>
        <h3 className={styles.projectTitle}>{title}</h3>
        <p className={styles.projectDescription}>{description}</p>
        {tags.length > 0 && (
          <div className={styles.tags}>
            {tags.slice(0, 3).map((tag, index) => (
              <span key={index} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
