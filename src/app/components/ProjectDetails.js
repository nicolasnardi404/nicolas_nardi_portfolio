import React from "react";
import Image from "next/image";
import styles from "../styles/ProjectDetails.module.css";
import {
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaExternalLinkAlt,
  FaFolder,
} from "react-icons/fa";

export default function ProjectDetails({
  project,
  onClose,
  onPrevious,
  onNext,
  hasPrevious,
  hasNext,
}) {
  return (
    <div className={styles.projectDetailsWrapper}>
      <button
        className={`${styles.navButton} ${styles.prevButton}`}
        onClick={onPrevious}
        disabled={!hasPrevious}
        aria-label="Previous project"
      >
        <FaChevronLeft />
      </button>

      <div className={styles.projectDetails}>
        <div className={styles.titleBar}>
          <div className={styles.titleBarText}>
            <FaFolder size={16} style={{ marginRight: 4 }} />
            {project.title}
          </div>
          <button className={styles.closeButton} onClick={onClose}>
            <FaTimes size={12} />
          </button>
        </div>

        {project.image && (
          <div className={styles.projectImage}>
            <Image
              src={project.image}
              alt={project.title}
              width={800}
              height={450}
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
              }}
              priority
            />
          </div>
        )}

        <div className={styles.projectDescription}>
          {project.longDescription || project.description}
        </div>

        <div className={styles.tags}>
          {project.tags.map((tag, index) => (
            <span key={index} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectLink}
          >
            <FaExternalLinkAlt size={12} style={{ marginRight: 8 }} />
            Visit Project
          </a>
        )}
      </div>

      <button
        className={`${styles.navButton} ${styles.nextButton}`}
        onClick={onNext}
        disabled={!hasNext}
        aria-label="Next project"
      >
        <FaChevronRight />
      </button>
    </div>
  );
}
