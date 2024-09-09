"use client";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import styles from "../styles/publicDiary.module.css";
import Link from "next/link";
import { formatText } from "../Utils/formatText";

export default function PublicDiary() {
  const [entries, setEntries] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    fetchPublicEntries();
    fetchCategories();
    checkLoginStatus();
  }, []);

  const checkLoginStatus = () => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  };

  const fetchPublicEntries = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/public-diary`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch entries");
      }
      const data = await response.json();
      setEntries(data);
    } catch (error) {
      setError("Failed to load entries. Please try again later.");
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/public-diary/categories`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch categories");
      }
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const filteredEntries = selectedCategory
    ? entries.filter((entry) => entry.category === selectedCategory)
    : entries;

  return (
    <>
      <Header />
      <main className={styles.container}>
        <div className={styles.header}>
          <div className={styles.titleContainer}>
            <h1 className={styles.title}>Code Diary</h1>
            <p className={styles.description}>
              This is a public diary of my coding journey.
            </p>
          </div>
          <nav className={styles.nav}>
            {isLoggedIn && (
              <Link href="/diary" className={styles.navLink}>
                My Diary
              </Link>
            )}
          </nav>
        </div>
        <div className={styles.categoryFilter}>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {error && <p className={styles.error}>{error}</p>}

        <div className={styles.entries}>
          {filteredEntries.map((entry) => (
            <div key={entry.id} className={styles.entry}>
              <h2>{entry.title}</h2>
              <p
                dangerouslySetInnerHTML={{ __html: formatText(entry.content) }}
              />
              <div className={styles.entryFooter}>
                <span className={styles.category}>
                  {entry.category.toUpperCase()}
                </span>
                <small>{new Date(entry.createdAt).toLocaleString()}</small>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
