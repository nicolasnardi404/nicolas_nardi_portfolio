import React from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styles from "../styles/ProjectDetails.module.css";

const ProjectDetails = ({ project, onPrev, onNext }) => {
  return (
    <div className={styles.projectDetailsWrapper}>
      <button
        className={`${styles.navButton} ${styles.prevButton}`}
        onClick={onPrev}
      >
        <FaChevronLeft />
      </button>
      <div className={styles.projectDetails}>
        <h2 className={styles.projectTitle}>{project.title}</h2>
        <p className={styles.projectDescription}>
          {project.longDescription || project.description}
        </p>
        <div className={styles.projectImage}>
          <Image
            src={project.imageName}
            alt={project.title}
            width={800}
            height={450}
            layout="responsive"
          />
        </div>
        <div className={styles.tags}>
          {project.tags.map((tag, index) => (
            <span key={index} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectLink}
          >
            Visit Project
          </a>
        )}
      </div>
      <button
        className={`${styles.navButton} ${styles.nextButton}`}
        onClick={onNext}
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default ProjectDetails;
