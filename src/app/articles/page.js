// app/blog/page.js (Server Component by default)

import React from "react";
import client from "../lib/contentful"; // Adjust the import path as necessary
import styles from "../styles/articles.module.css";
import Header from "../components/Header";

export default async function Articles() {
  // Fetch data from Contentful securely on the server
  try {
    const response = await client.getEntries({
      content_type: "code_diary", // Ensure this matches your Contentful content type ID
      order: "-sys.createdAt",
    });

    return (
      <>
        <Header />
        <main className={styles.container}>
          <div className={styles.header}>
            <div className={styles.titleContainer}>
              <h1 className={styles.title}>Code Articles</h1>
              <p className={styles.description}>
                Technical articles and coding insights.
              </p>
            </div>
          </div>

          <div className={styles.entries}>
            {response.items.map((item) => (
              <div key={item.sys.id} className={styles.entry}>
                <h2>{item.fields.title}</h2>
                <p>{item.fields.diary}</p>
                <div className={styles.entryFooter}>
                  <div className={styles.categories}>
                    {Array.isArray(item.fields.category) &&
                      item.fields.category.map((cat, index) => (
                        <span key={index} className={styles.category}>
                          {cat.toUpperCase()}
                        </span>
                      ))}
                  </div>
                  <small>{new Date(item.sys.createdAt).toLocaleString()}</small>
                </div>
              </div>
            ))}
          </div>
        </main>
      </>
    );
  } catch (error) {
    console.error("Error fetching data from Contentful:", error);
    console.error("Error details:", {
      message: error.message,
      stack: error.stack,
      response: error.response?.data, // If it's an API error
    });
    return <div>Error loading articles.</div>;
  }
}
