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
      className={`${
        isModern
          ? styles.modernProjectDetailsWrapper
          : styles.projectDetailsWrapper
      }`}
      style={{
        backgroundColor: isModern ? undefined : "var(--win95-bg)",
      }}
    >
      <button
        className={`${isModern ? styles.modernNavButton : styles.navButton} ${
          styles.prevButton
        }`}
        onClick={onPrevious}
        disabled={!hasPrevious}
        aria-label="Previous project"
        style={{
          color: isModern ? undefined : undefined,
          opacity: !hasPrevious ? 0.5 : 1,
        }}
      >
        <FaChevronLeft />
      </button>

      <div
        className={`${
          isModern ? styles.modernProjectDetails : styles.projectDetails
        }`}
        style={{
          backgroundColor: isModern ? undefined : undefined,
          boxShadow: isModern ? undefined : undefined,
        }}
      >
        <div
          className={`${isModern ? styles.modernTitleBar : styles.titleBar}`}
          style={{
            backgroundColor: isModern ? undefined : undefined,
            color: isModern ? undefined : undefined,
            borderBottom: isModern ? undefined : undefined,
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
            className={`${
              isModern ? styles.modernCloseButton : styles.closeButton
            }`}
            onClick={onClose}
            style={{
              color: isModern ? undefined : undefined,
            }}
          >
            <FaTimes size={12} />
          </button>
        </div>

        {project.image && (
          <div
            className={`${
              isModern ? styles.modernProjectImage : styles.projectImage
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
                borderRadius: isModern ? "0" : "0",
              }}
              priority
            />
          </div>
        )}

        <div
          className={`${
            isModern
              ? styles.modernProjectDescription
              : styles.projectDescription
          }`}
          style={{
            color: isModern ? undefined : undefined,
          }}
        >
          {project.longDescription || project.description}
        </div>

        <div
          className={`${isModern ? styles.modernTags : styles.tags}`}
          style={{
            gap: isModern ? undefined : undefined,
          }}
        >
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className={`${isModern ? styles.modernTag : styles.tag}`}
              style={{
                backgroundColor: isModern ? undefined : undefined,
                color: isModern ? undefined : undefined,
                borderRadius: isModern ? undefined : undefined,
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
            className={`${
              isModern ? styles.modernProjectLink : styles.projectLink
            }`}
            style={{
              backgroundColor: isModern ? undefined : undefined,
              color: isModern ? undefined : undefined,
              borderRadius: isModern ? undefined : undefined,
              boxShadow: isModern ? undefined : undefined,
            }}
          >
            <FaExternalLinkAlt size={12} style={{ marginRight: 8 }} />
            Visit Project
          </a>
        )}
      </div>

      <button
        className={`${isModern ? styles.modernNavButton : styles.navButton} ${
          styles.nextButton
        }`}
        onClick={onNext}
        disabled={!hasNext}
        aria-label="Next project"
        style={{
          color: isModern ? undefined : undefined,
          opacity: !hasNext ? 0.5 : 1,
        }}
      >
        <FaChevronRight />
      </button>
    </div>
  );
}
