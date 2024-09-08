import React from "react";
import Link from "next/link";
import Projects from "./components/Projects";
import styles from "./styles/publicDiary.module.css";
import "./styles/App.css";
import "./styles/Projects.css";
import "./styles/ProjectModal.css";
import "./styles/ProjectCard.css";

export default function Home() {
  return (
    <div>
      <nav className={styles.nav}>
        <Link href="/login" className={styles.navLink}>
          Go to Login
        </Link>
        <Link href="/diary" className={styles.navLink}>
          My Diary
        </Link>
        <Link href="/public-diary" className={styles.navLink}>
          Public Diary
        </Link>
      </nav>
      <Projects />
    </div>
  );
}
