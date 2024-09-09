"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "../styles/diary.module.css";
import Link from "next/link";
import { FaEdit, FaTrash } from "react-icons/fa"; // Import icons

export default function Diary() {
  const [entries, setEntries] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");
  const [editingId, setEditingId] = useState(null);
  const router = useRouter();

  useEffect(() => {
    fetchEntries();
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
        console.log(data);
        setEntries(data);
      } else {
        console.error("Failed to fetch entries");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = editingId
        ? `${process.env.NEXT_PUBLIC_API_URL}/api/diary/${editingId}`
        : `${process.env.NEXT_PUBLIC_API_URL}/api/diary`;
      const method = editingId ? "PUT" : "POST";

      const response = await fetch(url, {
        method: method,
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": localStorage.getItem("token"),
        },
        body: JSON.stringify({ title: newTitle, content: newContent }),
      });
      if (response.ok) {
        setNewTitle("");
        setNewContent("");
        setEditingId(null);
        fetchEntries();
      } else {
        console.error("Failed to add/edit entry");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleEdit = (entry) => {
    setNewTitle(entry.title);
    setNewContent(entry.content);
    setEditingId(entry.id); // Make sure this is correctly set
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this entry?")) {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/diary/${id}`,
          {
            method: "DELETE",
            headers: {
              "x-auth-token": localStorage.getItem("token"),
            },
          }
        );
        if (response.ok) {
          fetchEntries();
        } else {
          console.error("Failed to delete entry");
        }
      } catch (error) {
        console.error("Error:", error);
      }
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
          {editingId ? "Update Entry" : "Add Entry"}
        </button>
        {editingId && (
          <button
            type="button"
            onClick={() => {
              setEditingId(null);
              setNewTitle("");
              setNewContent("");
            }}
            className={styles.button}
          >
            Cancel Edit
          </button>
        )}
      </form>
      <div className={styles.entries}>
        {entries.map((entry) => (
          <div key={entry.id} className={styles.entry}>
            <div className={styles.entryHeader}>
              <h2>{entry.title}</h2>
              <div className={styles.entryActions}>
                <button
                  onClick={() => handleEdit(entry)}
                  className={`${styles.button} ${styles.editButton}`}
                  title="Edit entry"
                >
                  <FaEdit />
                </button>
                <button
                  onClick={() => handleDelete(entry.id)}
                  className={`${styles.button} ${styles.deleteButton}`}
                  title="Delete entry"
                >
                  <FaTrash />
                </button>
              </div>
            </div>
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
