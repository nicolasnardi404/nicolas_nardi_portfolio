"use client";
import React from "react";
import Projects from "./components/Projects";
import styles from "./styles/projects.module.css";

export default function Home() {
  return (
    <main className={styles.container}>
      <Projects />
    </main>
  );
}
