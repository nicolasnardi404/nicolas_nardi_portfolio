"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Header.module.css";

export default function Header({ isModern }) {
  return (
    <header
      className={`${styles.header} ${isModern ? styles.modernHeader : ""}`}
    >
      <div
        className={`${styles.profileSection} ${
          isModern ? styles.modernProfileSection : ""
        }`}
      >
        <Image
          src="/images/nicolas.jpg"
          alt="Nicolas Nardi"
          width={150}
          height={150}
          className={`${styles.profileImg} ${
            isModern ? styles.modernProfileImg : ""
          }`}
          priority
        />
        <div
          className={`${styles.profileInfo} ${
            isModern ? styles.modernProfileInfo : ""
          }`}
        >
          <h1
            className={`${styles.title} ${isModern ? styles.modernTitle : ""}`}
          >
            Nicolas Nardi (They/Them)
          </h1>
          <h2
            className={`${styles.subtitle} ${
              isModern ? styles.modernSubtitle : ""
            }`}
          >
            Software Developer, Bio Gardener and Artist
          </h2>
        </div>
      </div>
    </header>
  );
}
