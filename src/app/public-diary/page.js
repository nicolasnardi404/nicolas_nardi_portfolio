"use client";
import { useState, useEffect } from "react";
import styles from "../styles/publicDiary.module.css";
import Link from "next/link";

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
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Public Diary</h1>
        <nav className={styles.nav}>
          {isLoggedIn && (
            <Link href="/diary" className={styles.navLink}>
              My Diary
            </Link>
          )}
        </nav>
      </header>

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
            <p>{entry.content}</p>
            <div className={styles.entryFooter}>
              <span className={styles.category}>
                {entry.category.toUpperCase()}
              </span>
              <small>{new Date(entry.createdAt).toLocaleString()}</small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
