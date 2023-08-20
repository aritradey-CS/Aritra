import React, { useState } from "react";
import Docxtemplater from "docxtemplater";
import PizZip from "pizzip";
import "./BlogPostForm.css";
import BlogPost from "../components/BlogPost";

function BlogList() {
  const [posts, setPosts] = useState([]);

  const handleNewPostSubmit = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <div className="blog-list">
      <div className="blog-section">
        {posts.map((post, index) => (
          <BlogPost key={index} post={post} />
        ))}
      </div>
      <div className="blog-form-section">
        <BlogPostForm onSubmit={handleNewPostSubmit} />
      </div>
    </div>
  );
}

function BlogPostForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = () => {
    const post = {
      name,
      contact,
      category,
      content,
    };

    onSubmit(post);

    // Generate a word document
    const template = require("./blog_template.docx");
    const contentTemplate = new Uint8Array(template);
    const doc = new Docxtemplater(new PizZip(contentTemplate));
    doc.setData({ name, contact, category, content });
    doc.render();

    // Download the generated word document
    const blob = doc.getZip().generate({ type: "blob" });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = "blog_post.docx";
    link.click();
  };

  return (
    <div className="blog-post-form">
      <h2>Create a New Post</h2>
      <div className="form-group">
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Contact Details:</label>
        <input
          type="text"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Post Category:</label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Post Content:</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <button className="submit-button" onClick={handleSubmit}>
        Submit and Download as Word
      </button>
    </div>
  );
}

export default BlogList;
