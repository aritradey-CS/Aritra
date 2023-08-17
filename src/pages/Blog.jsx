import React from 'react';
import './Blog.css';


function BlogPost({ title, content }) {
  return (
    <div className="blog-post">
      <h2 className="blog-title">{title}</h2>
      <p className="blog-content">{content}</p>
      <button className="blog-button">Read More</button>
    </div>
  );
}

function BlogCardList({ topBlogs }) {
  return (
    <div className="blog-card-container">
      {topBlogs.map((blog, index) => (
        <div key={index} className="blog-card blog-card-appear">
          <h3>{blog.title}</h3>
          <p>{blog.content}</p>
        </div>
      ))}
    </div>
  );
}

export { BlogPost, BlogCardList }; // Export both components
