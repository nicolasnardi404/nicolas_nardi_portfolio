import React from "react";
import styles from "../styles/ProjectCard.module.css";

const ProjectCard = ({ title, tags, description, onClick, size }) => {
  return (
    <div
      className={`${styles.projectCard} ${
        size === "large" ? styles.large : styles.small
      }`}
      onClick={onClick}
    >
      <h3 className={styles.projectTitle}>{title}</h3>
      <p className={styles.projectDescription}>{description}</p>
      <div className={styles.tags}>
        {tags.map((tag, index) => (
          <span key={index} className={styles.tag}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
