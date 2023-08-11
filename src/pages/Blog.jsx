import React, { useState } from 'react';
import './Blog.css';
import BlogPopup from './BlogPopup'; // Corrected import path

function BlogPost({ title, content, onReadMoreClick }) {
  return (
    <div className="blog-post">
      <h2 className="blog-title">{title}</h2>
      <p className="blog-content">{content}</p>
      {/* Update the button to trigger the parent's read more function */}
      <button className="blog-button" onClick={onReadMoreClick}>
        Read More
      </button>
    </div>
  );
}

function BlogCardList({ topBlogs }) {
  const [selectedBlog, setSelectedBlog] = useState(null);

  // Function to handle the blog card click and open the popup
  const handleBlogClick = (blog) => {
    setSelectedBlog(blog);
  };

  // Function to close the popup
  const handleClosePopup = () => {
    setSelectedBlog(null);
  };

  return (
    <div className="blog-card-container">
      {topBlogs.map((blog, index) => (
        <div key={index} className="blog-card blog-card-appear">
          <h3>{blog.title}</h3>
          <p>{blog.content}</p>
          {/* Pass the handleBlogClick function as a prop */}
          <BlogPost
            title={blog.title}
            content={blog.content}
            onReadMoreClick={() => handleBlogClick(blog)}
          />
          
        </div>
      ))}

      {/* Render the popup when a blog is selected */}
      {selectedBlog && <BlogPopup blog={selectedBlog} onClose={handleClosePopup} />}
    </div>
  );
}

export { BlogCardList };
