"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
// import styles from "./styles/publicDiary.module.css";
import styles from "./styles/projects.module.css";
import "./styles/App.css";
import "./styles/Projects.css";
import "./styles/ProjectCard.module.css";
import { FaPencilAlt, FaBook } from "react-icons/fa"; // Import icons
import Projects from "./components/Projects";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.profileSection}>
          <Image
            src="/images/nicolas.jpg"
            alt="Nicolas Nardi"
            width={100}
            height={100}
            className={styles.profileImg}
          />
          <h1 className={styles.title}>
            Nicolas Nardi (They/Them) - Web Developer and Artist
          </h1>
        </div>
        <nav className={styles.nav}>
          {isLoggedIn && (
            <Link href="/diary" className={styles.navLink}>
              <FaPencilAlt className={styles.icon} />
              Write
            </Link>
          )}
          <Link href="/public-diary" className={styles.navLink}>
            <FaBook className={styles.icon} />
            Code Diary
          </Link>
        </nav>
      </header>
      <main className={styles.main}>
        <Projects />
      </main>
    </div>
  );
}
