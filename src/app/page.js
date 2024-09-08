"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Projects from "./components/Projects";
import styles from "./styles/publicDiary.module.css";
import "./styles/App.css";
import "./styles/Projects.css";
import "./styles/ProjectModal.css";
import "./styles/ProjectCard.css";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if there's a token in localStorage
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  return (
    <div>
      <nav className={styles.nav}>
        {isLoggedIn && (
          <Link href="/diary" className={styles.navLink}>
            Write
          </Link>
        )}
        <Link href="/public-diary" className={styles.navLink}>
          Code Diary
        </Link>
      </nav>
      <Projects />
    </div>
  );
}
