"use client";
import React from "react";
import Projects from "./components/Projects";
import Header from "./components/Header";
import styles from "./styles/projects.module.css";

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <Projects />
      </main>
    </>
  );
}
