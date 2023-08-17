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

export default BlogPost;
