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
  isModern,
}) {
  return (
    <div
      className={`${styles.projectDetailsWrapper} ${
        isModern ? styles.modernWrapper : ""
      }`}
      style={{
        backgroundColor: isModern ? "var(--modern-bg)" : "var(--win95-bg)",
      }}
    >
      <button
        className={`${styles.navButton} ${styles.prevButton} ${
          isModern ? styles.modernNavButton : ""
        }`}
        onClick={onPrevious}
        disabled={!hasPrevious}
        aria-label="Previous project"
        style={{
          color: isModern ? "var(--modern-secondary)" : undefined,
          opacity: !hasPrevious ? 0.5 : 1,
        }}
      >
        <FaChevronLeft />
      </button>

      <div
        className={`${styles.projectDetails} ${
          isModern ? styles.modernProjectDetails : ""
        }`}
        style={{
          backgroundColor: isModern ? "var(--modern-surface)" : undefined,
          boxShadow: isModern ? "var(--modern-shadow-md)" : undefined,
        }}
      >
        <div
          className={`${styles.titleBar} ${
            isModern ? styles.modernTitleBar : ""
          }`}
          style={{
            backgroundColor: isModern ? "var(--modern-surface)" : undefined,
            color: isModern ? "var(--modern-text)" : undefined,
            borderBottom: isModern
              ? "1px solid var(--modern-border)"
              : undefined,
          }}
        >
          <div className={styles.titleBarText}>
            <FaFolder
              size={16}
              style={{
                marginRight: 4,
                color: isModern ? "var(--modern-primary)" : undefined,
              }}
            />
            {project.title}
          </div>
          <button
            className={`${styles.closeButton} ${
              isModern ? styles.modernCloseButton : ""
            }`}
            onClick={onClose}
            style={{
              color: isModern ? "var(--modern-secondary)" : undefined,
            }}
          >
            <FaTimes size={12} />
          </button>
        </div>

        {project.image && (
          <div
            className={`${styles.projectImage} ${
              isModern ? styles.modernProjectImage : ""
            }`}
          >
            <Image
              src={project.image}
              alt={project.title}
              width={800}
              height={450}
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
                borderRadius: isModern ? "8px" : "0",
              }}
              priority
            />
          </div>
        )}

        <div
          className={`${styles.projectDescription} ${
            isModern ? styles.modernProjectDescription : ""
          }`}
          style={{
            color: isModern ? "var(--modern-text)" : undefined,
          }}
        >
          {project.longDescription || project.description}
        </div>

        <div
          className={`${styles.tags} ${isModern ? styles.modernTags : ""}`}
          style={{
            gap: isModern ? "8px" : undefined,
          }}
        >
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className={`${styles.tag} ${isModern ? styles.modernTag : ""}`}
              style={{
                backgroundColor: isModern ? "var(--modern-hover)" : undefined,
                color: isModern ? "var(--modern-primary)" : undefined,
                borderRadius: isModern ? "6px" : undefined,
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.projectLink} ${
              isModern ? styles.modernProjectLink : ""
            }`}
            style={{
              backgroundColor: isModern ? "var(--modern-primary)" : undefined,
              color: isModern ? "white" : undefined,
              borderRadius: isModern ? "6px" : undefined,
              boxShadow: isModern ? "var(--modern-shadow)" : undefined,
            }}
          >
            <FaExternalLinkAlt size={12} style={{ marginRight: 8 }} />
            Visit Project
          </a>
        )}
      </div>

      <button
        className={`${styles.navButton} ${styles.nextButton} ${
          isModern ? styles.modernNavButton : ""
        }`}
        onClick={onNext}
        disabled={!hasNext}
        aria-label="Next project"
        style={{
          color: isModern ? "var(--modern-secondary)" : undefined,
          opacity: !hasNext ? 0.5 : 1,
        }}
      >
        <FaChevronRight />
      </button>
    </div>
  );
}
