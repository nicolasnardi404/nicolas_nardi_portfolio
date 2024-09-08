"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "../styles/diary.module.css";
import Link from "next/link";

export default function Diary() {
  const [entries, setEntries] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");
  const router = useRouter();

  useEffect(() => {
    // Check if user is authenticated
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
    } else {
      fetchEntries();
    }
  }, []);

  const fetchEntries = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/diary`,
        {
          headers: {
            "x-auth-token": localStorage.getItem("token"),
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setEntries(data);
      } else {
        console.error("Failed to fetch entries");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/diary`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": localStorage.getItem("token"),
          },
          body: JSON.stringify({ title: newTitle, content: newContent }),
        }
      );
      if (response.ok) {
        setNewTitle("");
        setNewContent("");
        fetchEntries();
      } else {
        console.error("Failed to add entry");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>My Diary</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          placeholder="Enter title..."
          className={styles.input}
          required
        />
        <textarea
          value={newContent}
          onChange={(e) => setNewContent(e.target.value)}
          placeholder="Write your diary entry here..."
          className={styles.textarea}
          required
        />
        <button type="submit" className={styles.button}>
          Add Entry
        </button>
      </form>
      <div className={styles.entries}>
        {entries.map((entry, index) => (
          <div key={index} className={styles.entry}>
            <h2>{entry.title}</h2>
            <p>{entry.content}</p>
            <small>{new Date(entry.createdAt).toLocaleString()}</small>
          </div>
        ))}
      </div>
      <Link href="/public-diary" className={styles.link}>
        View Public Entries
      </Link>
    </div>
  );
}
