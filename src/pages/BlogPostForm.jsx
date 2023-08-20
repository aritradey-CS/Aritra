import React, { useState } from "react";
import "./BlogPostForm.css";
import BlogPost from "../components/BlogPost"; // Assuming you have a BlogPost component
import NewBlogPostForm from "./BlogPostForm"; // Import the new component


function BlogPostForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = () => {
    // Prepare the post content and data
    const post = {
      name,
      contact,
      category,
      content,
    };

    // Call the onSubmit callback to handle post submission
    onSubmit(post);
  };


  function BlogList() {
    const [posts, setPosts] = useState([]); // Assume you have an array of blog posts
  
    const handleNewPostSubmit = (newPost) => {
      // Add the new post to the posts array
      setPosts([...posts, newPost]);
    };


  return (
    <div className="blog-list">
    <div className="blog-section">
      {/* Display existing blog posts */}
      {posts.map((post, index) => (
        <BlogPost key={index} post={post} />
      ))}
    </div>

    <div className="blog-form-section">
        {/* Include the BlogPostForm component here */}
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
        Submit
      </button>
    </div>
        <BlogPostForm onSubmit={handleNewPostSubmit} />
      </div>
    </div>

);
}
}

export default BlogList;
