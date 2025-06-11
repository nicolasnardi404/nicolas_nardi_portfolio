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
import ProjectCard from "./ProjectCard";
import ProjectDetails from "./ProjectDetails";

const projects = [
  {
    id: 1,
    title: "CYBER PLANTA",
    tags: [
      "Python",
      "React",
      "JavaScript",
      "Multi Modal AI",
      "LangChain",
      "RAG",
      "Hugging Face",
      "OpenAI",
    ],
    description: "Permaculture Chat Bot",
    longDescription:
      "An AI-powered chatbot focused on permaculture and bio-agriculture. This project combines machine learning with ecological knowledge to provide guidance on sustainable gardening practices and environmental consciousness.",
    image: "/images/cyberplanta.png",
    link: "https://github.com/nicolasnardi404/cyberplanta",
    icon: <FaRobot />,
  },
  {
    id: 2,
    title: "RANDOM RAINBOW",
    description: "Queer Video Art Platform",
    longDescription:
      "A digital platform celebrating queer video art and experimental media. This project creates a space for LGBTQIA+ artists to share and discover unique visual expressions.",
    tags: [
      "React",
      "JavaScript",
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Docker",
      "Deployment",
    ],
    image: "/images/randomrainbow.png",
    link: "https://randomrainbow.art",
    icon: <FaRainbow />,
  },
  {
    id: 3,
    title: "I WANNA BE NADI NICOCO",
    description: "AI Generative Poetry Based on the works of Nadi Nicoco",
    longDescription:
      "An experimental AI project that generates poetry inspired by personal narratives and identity exploration. The project uses machine learning to create unique poetic expressions.",
    tags: [
      "JavaScript",
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "OpenAI",
      "Vercel",
    ],
    image: "/images/iwannabenadinicoco.png",
    link: "https://iwannabenadinicoco.art",
    icon: <FaPencilAlt />,
  },
  {
    id: 4,
    title: "NADI NICOCO",
    tags: ["HTML", "CSS", "JavaScript"],
    description: "Artist Portfolio",
    longDescription:
      "A personal artist portfolio showcasing digital and traditional artwork, exploring themes of identity, technology, and nature through various mediums.",
    image: "/images/nadinicoco.png",
    link: "https://nadinicoco.art",
    icon: <FaPalette />,
  },
  {
    id: 5,
    title: "QUARTO AMBIENTE",
    tags: ["HTML", "CSS", "JavaScript"],
    description: "Art Collective Portfolio",
    longDescription:
      "A digital gallery space for an art collective, featuring interactive exhibitions and collaborative projects that explore environmental and social themes.",
    image: "/images/quarto-ambiente.png",
    link: "https://quartoambiente.art",
    icon: <FaHome />,
  },
];

const Projects = () => {
  const [viewMode, setViewMode] = useState("grid");
  const [showEmail, setShowEmail] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleProjectClick = (project, index) => {
    setSelectedProject(project);
    setCurrentIndex(index);
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setSelectedProject(projects[currentIndex - 1]);
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < projects.length - 1) {
      setSelectedProject(projects[currentIndex + 1]);
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleClose = () => {
    setSelectedProject(null);
  };

  return (
    <div className={styles.container}>
      <div className={styles.window}>
        <div className={styles.titleBar}>
          <div className={styles.titleBarText}>
            <FaFolder size={12} />
            My Portfolio - File Explorer
          </div>
        </div>

        <div className={styles.introCard}>
          <p className={styles.introText}>
            Nicolas Nardi (they/them) is a creative and curious web developer
            with experience in full-stack development and independent projects.
            With a background in permaculture and biodiversity, they developed
            projects like Cyber Planta to create more awareness about
            bio-agriculture. As a multidisciplinary artist, they explore poetry,
            drawing, video art, and creative coding. Currently based in Palermo,
            Italy, they're passionate about projects at the intersection of
            technology and environmental consciousness.
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
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              icon={project.icon}
              tags={project.tags}
              onClick={() => handleProjectClick(project, index)}
            />
          ))}
        </div>

        <div className={styles.statusBar}>
          <span>{projects.length} items</span>
          <span>3.72 MB free of 521 MB</span>
        </div>
      </div>

      {selectedProject && (
        <ProjectDetails
          project={selectedProject}
          onClose={handleClose}
          onPrevious={handlePrevious}
          onNext={handleNext}
          hasPrevious={currentIndex > 0}
          hasNext={currentIndex < projects.length - 1}
        />
      )}
    </div>
  );
};

export default Projects;
