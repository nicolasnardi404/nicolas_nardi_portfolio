import React from "react";
import Link from "next/link";
import Projects from "./components/Projects";
import "./styles/App.css";
import "./styles/Projects.css";
import "./styles/ProjectModal.css";
import "./styles/ProjectCard.css";

export default function Home() {
  return (
    <div>
      <nav>
        <Link href="/login">Go to Login</Link>
      </nav>
      <Projects />
    </div>
  );
}
