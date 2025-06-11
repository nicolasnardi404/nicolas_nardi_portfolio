"use client"; // Ensure this is at the very top of the file

import React, { useState } from "react";
import styles from "../styles/projects.module.css";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaFolder,
  FaThLarge,
  FaList,
  FaRobot,
  FaRainbow,
  FaPencilAlt,
  FaPalette,
  FaHome,
} from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "CYBER PLANTA",
    tags: ["Python", "React", "JavaScript"],
    description: "Permaculture Chat Bot",
    icon: <FaRobot />,
  },
  {
    id: 2,
    title: "RANDOM RAINBOW",
    description: "Queer Video Art Platform",
    tags: ["React", "JavaScript", "Java"],
    icon: <FaRainbow />,
  },
  {
    id: 3,
    title: "I WANNA BE NADI NICOCO",
    description: "AI Generative Poetry",
    tags: ["JavaScript", "React", "Node.js"],
    icon: <FaPencilAlt />,
  },
  {
    id: 4,
    title: "NADI NICOCO",
    tags: ["HTML", "CSS", "JavaScript"],
    description: "Artist Portfolio",
    icon: <FaPalette />,
  },
  {
    id: 5,
    title: "QUARTO AMBIENTE",
    tags: ["HTML", "CSS", "JavaScript"],
    description: "Art Collective Portfolio",
    icon: <FaHome />,
  },
];

const Projects = () => {
  const [viewMode, setViewMode] = useState("grid");
  const [showEmail, setShowEmail] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.window}>
        <div className={styles.titleBar}>
          <div className={styles.titleBarText}>
            <FaFolder size={12} />
            My Portfolio - File Explorer
          </div>
        </div>

        <div className={styles.toolbar}>
          <button className={styles.toolbarButton}>
            <FaFolder size={11} /> File
          </button>
          <button
            className={styles.toolbarButton}
            onClick={() => setViewMode(viewMode === "grid" ? "list" : "grid")}
          >
            {viewMode === "grid" ? (
              <FaThLarge size={11} />
            ) : (
              <FaList size={11} />
            )}
            Grid View
          </button>
        </div>

        <div className={styles.introCard}>
          <p className={styles.introText}>
            Nicolas Nardi is a web developer, permaculture gardener, and artist
            who blends technology with creative expression. Through their
            AI-driven project, Cyber Planta, Nicolas focuses on sharing
            knowledge about bio-agriculture, fungi, and eco-feminism.
          </p>
          <div className={styles.socialLinks}>
            <a
              href="https://www.linkedin.com/in/nícolas-nardi"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <FaLinkedin size={11} /> LinkedIn
            </a>
            <a
              href="https://github.com/nicolasnardi404"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <FaGithub size={11} /> GitHub
            </a>
            <button
              onClick={() => setShowEmail(!showEmail)}
              className={styles.socialLink}
            >
              <FaEnvelope size={11} />
              {showEmail ? "nicolasnardi404@gmail.com" : "Email"}
            </button>
          </div>
        </div>

        <div className={styles.projectsGrid} data-view-mode={viewMode}>
          {projects.map((project) => (
            <div
              key={project.id}
              className={`${styles.projectCard} ${styles[viewMode]}`}
            >
              <div className={styles.projectIcon}>{project.icon}</div>
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>
                  {project.description}
                </p>
                <div className={styles.tags}>
                  {project.tags.map((tag, index) => (
                    <span key={index} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.statusBar}>
          <span>{projects.length} items</span>
          <span>3.72 MB free of 521 MB</span>
        </div>
      </div>
    </div>
  );
};

export default Projects;
