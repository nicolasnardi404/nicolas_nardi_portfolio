"use client";
import { useState, useEffect } from "react";
import styles from "../styles/publicDiary.module.css";

export default function PublicDiary() {
  const [entries, setEntries] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPublicEntries();
  }, []);

  const fetchPublicEntries = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/public-diary`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setEntries(data);
    } catch (error) {
      console.error("Error fetching public entries:", error);
      setError("Failed to load public entries. Please try again later.");
    }
  };

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Public Diary Entries</h1>
      {entries.length === 0 ? (
        <p className={styles.noEntries}>
          No entries yet. Be the first to add one!
        </p>
      ) : (
        <div className={styles.entries}>
          {entries.map((entry, index) => (
            <div key={index} className={styles.entry}>
              <h2>{entry.title}</h2>
              <p>{entry.content}</p>
              <small>{new Date(entry.createdAt).toLocaleString()}</small>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
