import React, { useState, useEffect } from "react";
import CategorySelect from "./CategorySelect";
import styles from "../styles/diary.module.css";

const DiaryEntryForm = ({ onSubmit, editingEntry, onCancelEdit }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    if (editingEntry) {
      setTitle(editingEntry.title);
      setContent(editingEntry.content);
      setCategory(editingEntry.category);
    } else {
      setTitle("");
      setContent("");
      setCategory("");
    }
  }, [editingEntry]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, content, category });
    if (!editingEntry) {
      setTitle("");
      setContent("");
      setCategory("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
        className={styles.input}
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Content"
        required
        className={styles.textarea}
      />
      <CategorySelect
        onCategoryChange={setCategory}
        initialCategory={category}
      />
      <div className={styles.buttonGroup}>
        <button type="submit">{editingEntry ? "Update" : "Submit"}</button>
        {editingEntry && (
          <button
            type="button"
            onClick={onCancelEdit}
            className={styles.cancelButton}
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default DiaryEntryForm;
