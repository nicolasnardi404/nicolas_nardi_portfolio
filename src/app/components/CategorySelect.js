import React, { useState, useEffect } from "react";
import styles from "../styles/CategorySelect.module.css";

const CategorySelect = ({ onCategoryChange, initialCategory }) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(
    initialCategory || ""
  );
  const [newCategory, setNewCategory] = useState("");

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    setSelectedCategory(initialCategory || "");
  }, [initialCategory]);

  const fetchCategories = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/diary/categories`
      );
      if (response.ok) {
        const data = await response.json();
        setCategories(data);
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    setSelectedCategory(value);
    if (value !== "new") {
      onCategoryChange(value);
    }
  };

  const handleNewCategorySubmit = () => {
    if (newCategory.trim() && !categories.includes(newCategory.trim())) {
      const updatedCategory = newCategory.trim();
      setCategories([...categories, updatedCategory]);
      setSelectedCategory(updatedCategory);
      onCategoryChange(updatedCategory);
      setNewCategory("");
    }
  };

  return (
    <div className={styles.categorySelect}>
      <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="">Select a category</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
        <option value="new">Add new category</option>
      </select>
      {selectedCategory === "new" && (
        <div className={styles.newCategory}>
          <input
            type="text"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            placeholder="Enter new category"
          />
          <button type="button" onClick={handleNewCategorySubmit}>
            Add
          </button>
        </div>
      )}
    </div>
  );
};

export default CategorySelect;
