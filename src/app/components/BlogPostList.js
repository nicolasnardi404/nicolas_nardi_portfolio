// app/components/BlogPostList.js (Client Component)
"use client";

import { useState } from "react";
import styles from "../styles/articles.module.css";

export default function BlogPostList({ posts }) {
  const [selectedPost, setSelectedPost] = useState(null);

  const openModal = (post) => {
    setSelectedPost(post);
  };

  const closeModal = () => {
    setSelectedPost(null);
  };

  const getContentText = (articleContent) => {
    if (!articleContent || !articleContent.content) return "";
    return articleContent.content
      .map((item) => {
        if (item.nodeType === "paragraph") {
          return item.content.map((content) => content.value).join("");
        }
        return "";
      })
      .join("\n");
  };

  return (
    <>
      <div className={styles.blogContainer}>
        {posts.map((post) => {
          const contentText = post.fields.diary;

          return (
            <article key={post.sys.id} className={styles.blogPost}>
              <h3 className={styles.postTitle}>
                {post.fields.title || "Untitled"}
              </h3>
              <p className={styles.postExcerpt}>
                {contentText
                  ? contentText.substring(0, 200) +
                    (contentText.length > 200 ? "..." : "")
                  : "No content available"}
              </p>
            </article>
          );
        })}
      </div>
    </>
  );
}
