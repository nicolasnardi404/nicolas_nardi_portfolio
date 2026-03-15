"use client"; // Ensure this is at the very top of the file

import React, { useState, useEffect } from "react";
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
  FaToggleOn,
} from "react-icons/fa";
import ProjectCard from "./ProjectCard";
import ProjectDetails from "./ProjectDetails";
import Header from "./Header";
import ParticleBackground from "./CSSParticleBackground";

const projects = [
  {
    id: 7,
    title: "APEFOREST",
    description: "Reforestation Platform",
    longDescription:
      "A platform connecting indigenous and local communities with sustainability-focused investors to fund and scale reforestation initiatives that benefit both the environment and local populations.",
    tags: ["React", "JavaScript", "Node.js", "Sustainability", "Social Impact"],
    image: "/images/apeforest.webp",
    link: "https://www.apeforest.net/",
    icon: <FaHome />,
  },
  {
    id: 1,
    title: "NICOCO STUDIO",
    description: "Creative Tools Collection",
    longDescription:
      "A collection of interactive creative tools for designers and developers. This experimental toolbox features animation tools, typography explorers, 3D builders, gradient generators, and cosmic design elements to spark creativity and enhance digital projects.",
    tags: ["JavaScript", "Three.js", "Canvas", "Creative Coding"],
    image: "/images/nicoco_studio.webp",
    link: "/",
    icon: <FaPalette />,
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
    image: "/images/randomrainbow.webp",
    link: "https://randomrainbow.art",
    icon: <FaRainbow />,
  },
  {
    id: 6,
    title: "RANDOM RAINBOW LAB",
    tags: [
      "p5.js",
      "Processing",
      "Hand Controller Library",
      "JavaScript",
      "HTML",
      "CSS",
    ],
    description: "Open Source Live Video Controller",
    longDescription:
      "An open-source live video editing platform that enables real-time video manipulation with various effects. The platform features a Live Video Hand Controller interface that allows artists to control effects through hand gestures, with capabilities for recording and saving edited videos. Thistool is designed to enhance live performances and facilitate creative digital expression.",
    image: "/images/randomrainbowlab.webp",
    link: "https://lab.randomrainbow.art",
    icon: <FaHome />,
  },
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
    description: "Permaculture Chat Bot (2024-2025)",
    longDescription:
      "An AI-powered chatbot focused on permaculture and bio-agriculture that was live between 2024-2025. This project combined machine learning with ecological knowledge to provide guidance on sustainable gardening practices and environmental consciousness. While the live service is no longer available, the code remains accessible on GitHub.",
    image: "/images/cyberplanta.webp",
    link: "https://github.com/nicolasnardi404/permaculture-chatbot",
    icon: <FaRobot />,
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
    image: "/images/iwannabenadinicoco.webp",
    link: "https://iwannabe.nadinicoco.com",
    icon: <FaPencilAlt />,
  },
  {
    id: 4,
    title: "NADI NICOCO",
    tags: ["HTML", "CSS", "JavaScript"],
    description: "Windows 95-Inspired Artist Portfolio",
    longDescription:
      "A nostalgic digital art portfolio featuring a Windows 95-inspired interface, complete with classic desktop icons, windows, and retro UI elements. This creative platform showcases digital and traditional artwork through an interactive experience that pays homage to the golden age of personal computing while presenting contemporary artistic works.",
    image: "/images/nadinicoco.webp",
    link: "https://nadinicoco.com",
    icon: <FaPalette />,
  },
  {
    id: 5,
    title: "QUARTO AMBIENTE",
    tags: ["HTML", "CSS", "JavaScript"],
    description: "Art Collective Portfolio",
    longDescription:
      "A digital gallery space for an art collective, featuring interactive exhibitions and collaborative projects that explore environmental and social themes.",
    image: "/images/quarto-ambiente.webp",
    link: "https://quartoambiente.com.br",
    icon: <FaHome />,
  },
];

const Projects = () => {
  const [viewMode, setViewMode] = useState("grid");
  const [showEmail, setShowEmail] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModernTheme, setIsModernTheme] = useState(false);

  // Update document theme
  useEffect(() => {
    document.body.dataset.theme = isModernTheme ? "modern" : "classic";
  }, [isModernTheme]);

  const handleThemeToggle = () => {
    setIsModernTheme((prev) => !prev);
  };

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

  return (
    <>
      <Header isModern={isModernTheme} />
      {isModernTheme && <ParticleBackground />}
      <div
        className={`${styles.container} ${isModernTheme ? styles.modern : ""}`}
      >
        <button
          onClick={handleThemeToggle}
          style={{
            position: "fixed",
            top: "20px",
            right: "20px",
            zIndex: 1000,
            padding: "10px 20px",
            backgroundColor: isModernTheme
              ? "var(--modern-surface)"
              : "var(--win95-gray)",
            color: isModernTheme ? "var(--modern-text)" : "var(--win95-text)",
            border: isModernTheme
              ? "1px solid var(--modern-border)"
              : "2px solid var(--win95-white)",
            borderRightColor: isModernTheme
              ? "var(--modern-border)"
              : "var(--win95-black)",
            borderBottomColor: isModernTheme
              ? "var(--modern-border)"
              : "var(--win95-black)",
            borderRadius: isModernTheme ? "8px" : "0",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            boxShadow: isModernTheme ? "var(--modern-shadow)" : "none",
            transition: "all 0.3s ease",
            fontSize: isModernTheme ? "14px" : "12px",
            fontFamily: isModernTheme
              ? "system-ui, sans-serif"
              : "MS Sans Serif, sans-serif",
          }}
        >
          <FaToggleOn
            size={16}
            style={{
              transform: isModernTheme ? "rotate(180deg)" : "none",
              transition: "transform 0.3s ease",
              color: isModernTheme ? "var(--modern-primary)" : "inherit",
            }}
          />
          {isModernTheme ? "Classic Mode" : "Modern Mode"}
        </button>

        <div
          className={`${styles.window} ${
            isModernTheme ? styles.modernWindow : ""
          }`}
        >
          <div
            className={`${styles.titleBar} ${
              isModernTheme ? styles.modernTitleBar : ""
            }`}
          >
            <div className={styles.titleBarText}>
              <FaFolder size={12} />
              My Portfolio
            </div>
          </div>
          <div
            className={`${styles.introCard} ${
              isModernTheme ? styles.modernIntroCard : ""
            }`}
          >
            <p
              className={`${styles.introText} ${
                isModernTheme ? styles.modernText : ""
              }`}
            >
              Nicolas Nardi (they/them) is a full stack software developer with
              also a background in regenerative agriculture and arts. They are
              the co-founder of Apeforest, an early-stage start-up focused on
              helping indigenous and local communities register their
              reforestation projects and find ways to get investment from
              companies worried about sustainability and community. They also
              work as a freelance with other start-ups and companies, working on
              MVPs, process automation, and web design.
            </p>
            <div
              className={`${styles.socialLinks} ${
                isModernTheme ? styles.modernSocialLinks : ""
              }`}
            >
              <a
                href="https://www.linkedin.com/in/nícolas-nardi"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.socialLink} ${
                  isModernTheme ? styles.modernSocialLink : ""
                }`}
              >
                <FaLinkedin size={11} /> LinkedIn
              </a>
              <a
                href="https://github.com/nicolasnardi404"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.socialLink} ${
                  isModernTheme ? styles.modernSocialLink : ""
                }`}
              >
                <FaGithub size={11} /> GitHub
              </a>
              <button
                onClick={() => setShowEmail(!showEmail)}
                className={`${styles.socialLink} ${
                  isModernTheme ? styles.modernSocialLink : ""
                }`}
              >
                <FaEnvelope size={11} />
                {showEmail ? "nicolasnardi404@gmail.com" : "Email"}
              </button>
            </div>
          </div>
          <div
            className={`${styles.projectsGrid} ${
              isModernTheme ? styles.modernGrid : ""
            }`}
          >
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                icon={project.icon}
                tags={project.tags}
                viewMode={viewMode}
                isModern={isModernTheme}
                onClick={() => handleProjectClick(project, index)}
              />
            ))}
          </div>
        </div>

        {selectedProject && (
          <ProjectDetails
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
            onPrevious={handlePrevious}
            onNext={handleNext}
            hasPrevious={currentIndex > 0}
            hasNext={currentIndex < projects.length - 1}
            isModern={isModernTheme}
          />
        )}
      </div>
    </>
  );
};

export default Projects;
