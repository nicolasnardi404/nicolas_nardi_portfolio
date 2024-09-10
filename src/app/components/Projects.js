"use client"; // Ensure this is at the very top of the file

import React, { useState, useRef } from "react";
import styles from "../styles/projects.module.css";
import ProjectCard from "./ProjectCard";
import ProjectDetails from "./ProjectDetails";
import {
  FaLinkedin,
  FaGithub,
  FaChevronLeft,
  FaChevronRight,
  FaPencilAlt,
  FaBook,
  FaEnvelope,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);
  const projectDetailsRef = useRef(null);
  const [showEmail, setShowEmail] = useState(false);

  const projects = [
    {
      id: 1,
      title: "RANDOM RAINBOW",
      description: "Queer video art platform",
      imageName: "/images/randomrainbow.png",
      tags: [
        "React",
        "JavaScript",
        "Java",
        "Spring Boot",
        "PostgreSQL",
        "Docker",
        "Deployment",
      ],
      url: "https://www.randomrainbow.art",
      longDescription: `Random Rainbow is a cyber art project designed to connect queer video art through a random experience.

      The application features a "Random" button that when clicked selects a random video from the database and displays it to the user.`,
    },
    {
      id: 2,
      title: "I WANNA BE NADI NICOCO",
      description: "AI generative poetry based on the works of nadi nicoco",
      imageName: "/images/iwannabenadinicoco.png",
      tags: [
        "JavaScript",
        "React",
        "Node.js",
        "Express",
        "PostgreSQL",
        "OpenAI",
        "Vercel",
      ],
      url: "https://www.iwannabenadinicoco.com",
      longDescription: `An AI-generated poetry blog inspired by the works of nadi nicoco. 
      Every day the machine selects a random topic then generates and posts a poem in Nadi Nicoco's style on the blog.`,
    },
    {
      id: 3,
      title: "NADI NICOCO",
      tags: ["HTML", "CSS", "JavaScript"],
      description: "artist portfolio",
      imageName: "/images/nadinicoco.png",
      url: "https://www.nadinicoco.com",
      longDescription: `Nadi Nicoco is a Brazilian artist who works with text, image, and sound.
      This project is an experimental and interactive website that showcases their work.
      It features different pages where visitors can explore the various media Nadi Nicoco works with.
      The website serves as a dynamic portfolio, highlighting the artist's diverse creative output.`,
    },
    {
      id: 4,
      title: "QUARTO AMBIENTE",
      tags: ["HTML", "CSS", "JavaScript"],
      description: "art collective portfolio",
      imageName: "/images/quarto-ambiente.png",
      url: "https://www.quartoambiente.com.br",
      longDescription: `Quarto Ambiente is a Brazilian art collective that worked mainly between 2014-2016 in Porto Alegre, Brazil.
      They created experimental films, produced zines, and performed throughout the city.
      This website showcases the collective's work and includes their zines for download and a gallery with the artists' work.
      It serves as an archive of the collective's work and a platform to share their knowledge.`,
    },
  ];

  const handleProjectClick = (index) => {
    setSelectedProjectIndex(index);
    if (projectDetailsRef.current) {
      projectDetailsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavigation = (direction) => {
    if (direction === "prev") {
      setSelectedProjectIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : projects.length - 1
      );
    } else if (direction === "next") {
      setSelectedProjectIndex((prevIndex) =>
        prevIndex < projects.length - 1 ? prevIndex + 1 : 0
      );
    }
  };

  return (
    <div className={styles.projectsSection}>
      <div className={styles.introCard}>
        <p className={styles.introText}>
          Nicolas is a web developer and artist who blends technology with
          creative expression. They work on projects like an AI tool that
          generates and refines poems, which are posted daily on a blog. They
          also manage Random Rainbow, a platform dedicated to showcasing queer
          video art and supporting artists in sharing their work.
        </p>
        <div className={styles.socialLinks}>
          <a
            href="https://www.linkedin.com/in/nícolas-nardi"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <FaLinkedin /> LinkedIn
          </a>
          <a
            href="https://github.com/nicolasnardi404"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <FaGithub /> GitHub
          </a>
          <button
            onClick={() => setShowEmail(!showEmail)}
            className={styles.socialLink}
          >
            <FaEnvelope /> {showEmail ? "nicolasnardi404@gmail.com" : "Email"}
          </button>
        </div>
      </div>
      <h1 className={styles.projectsTitle}>Projects:</h1>
      <div className={styles.projectsContainer}>
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            {...project}
            onClick={() => handleProjectClick(index)}
          />
        ))}
      </div>

      <div ref={projectDetailsRef} className={styles.projectDetailsContainer}>
        {selectedProjectIndex !== null && (
          <ProjectDetails
            project={projects[selectedProjectIndex]}
            onPrev={() => handleNavigation("prev")}
            onNext={() => handleNavigation("next")}
            isFirst={selectedProjectIndex === 0}
            isLast={selectedProjectIndex === projects.length - 1}
          />
        )}
      </div>
    </div>
  );
};

export default Projects;
