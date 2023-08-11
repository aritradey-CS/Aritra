import React, { useState } from 'react';
import './Home.css';
import { BlogCardList } from '../pages/Blog'; // Adjust the import path
import { animateScroll as scroll } from 'react-scroll'; // Import react-scroll


const initialTopBlogs = [
  { title: 'Top Blog 1', content: 'Lorem ipsum dolor sit amet.' },
  { title: 'Top Blog 2', content: 'Consectetur adipiscing elit.' },
  // Add more top blog objects
];

const additionalBlogs = [
  {
    title: 'Additional Blog 1',
    content: 'Additional content for Blog 1 goes here.',
  },
  {
    title: 'Additional Blog 2',
    content: 'Additional content for Blog 2 goes here.',
  },

  {
    title: 'Additional Blog 3',
    content: 'Additional content for Blog 1 goes here.',
  },
  {
    title: 'Additional Blog 4',
    content: 'Additional content for Blog 2 goes here.',
  },
  // Add more demo blogs as needed
  // Add more demo blogs as needed
];

function Home() {
  const [expanded, setExpanded] = useState(false);
  const [blogs, setBlogs] = useState(initialTopBlogs);

  const handleExploreClick = () => {
    if (!expanded) {
      setBlogs([...blogs, ...additionalBlogs]);
      scroll.scrollToBottom(); // Scroll to the bottom smoothly
    }
    setExpanded(true);
  };
  
  const handleCollapseClick = () => {
    setBlogs(initialTopBlogs);
    setExpanded(false);
  };

  return (
    <div className="home-container">
      <h2 className="home-title">Welcome to My Blog!</h2>
      <p className="home-content">
        This is the home page content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
        vel urna quis felis posuere interdum a non erat.
      </p>
      <button className="home-button" onClick={handleExploreClick}>
        Explore
      </button>

      <h3>Top Blogs</h3>
      <BlogCardList topBlogs={blogs} />
    </div>
  );
}

export default Home;
