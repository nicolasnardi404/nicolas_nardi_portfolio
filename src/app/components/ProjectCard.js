import React from "react";
import styles from "../styles/projects.module.css";

const ProjectCard = ({
  title,
  description,
  icon,
  tags = [],
  viewMode = "grid",
  onClick,
  isModern = false,
}) => {
  return (
    <div
      className={`${styles.projectCard} ${
        viewMode === "list" ? styles.list : ""
      } ${isModern ? styles.modernProjectCard : ""}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
    >
      <div
        className={`${styles.projectIcon} ${isModern ? styles.modernIcon : ""}`}
      >
        {icon}
      </div>
      <div className={styles.projectContent}>
        <h3
          className={`${styles.projectTitle} ${
            isModern ? styles.modernTitle : ""
          }`}
        >
          {title}
        </h3>
        <p
          className={`${styles.projectDescription} ${
            isModern ? styles.modernDescription : ""
          }`}
        >
          {description}
        </p>
        {tags.length > 0 && (
          <div
            className={`${styles.tags} ${isModern ? styles.modernTags : ""}`}
          >
            {tags.map((tag, index) => (
              <span
                key={index}
                className={`${styles.tag} ${isModern ? styles.modernTag : ""}`}
              >
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
