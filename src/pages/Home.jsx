import React from 'react';
import './Home.css';
import { BlogCardList } from '../pages/Blog'; // Adjust the import path

const topBlogs = [
  { title: 'Top Blog 1', content: 'Lorem ipsum dolor sit amet.' },
  { title: 'Top Blog 2', content: 'Consectetur adipiscing elit.' },
  // Add more top blog objects
];

function Home() {
  return (
    <div className="home-container">
      <h2 className="home-title">Welcome to My Blog!</h2>
      <p className="home-content">
        This is the home page content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
        vel urna quis felis posuere interdum a non erat.
      </p>
      <button className="home-button">Explore</button>

      <h3>Top Blogs</h3>
      <BlogCardList topBlogs={topBlogs} />
    </div>
  );
}

export default Home;
