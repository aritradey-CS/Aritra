import React, { useState } from "react";
import "./Home.css";
import { BlogCardList } from "../pages/Blog";
import { animateScroll as scroll } from "react-scroll";
import { useSpring } from "react-spring"; // Removed 'animated'

const initialTopBlogs = [
  { title: "Top Blog 1", content: "Lorem ipsum dolor sit amet." },
  { title: "Top Blog 2", content: "Consectetur adipiscing elit." },
  // Add more top blog objects
];

const additionalBlogs = [
  {
    title: "Additional Blog 1",
    content: "Additional content for Blog 1 goes here.",
  },
  {
    title: "Additional Blog 2",
    content: "Additional content for Blog 2 goes here.",
  },
  {
    title: "Additional Blog 3",
    content: "Additional content for Blog 1 goes here.",
  },
  {
    title: "Additional Blog 4",
    content: "Additional content for Blog 2 goes here.",
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
      <h2 className="home-title">Welcome aspirants!</h2>
      <p className="home-content">
        I am an engineering student in the Department of Computer Science, I
        have completed my diploma course in 2019 and graduate in 2022 now doing
        Master's. from my blog, you can get informations for digital
        technologies which are may included in your course or beyond!
      </p>
      <button
        className={`home-button ${expanded ? "expanded" : ""}`}
        onClick={handleExploreClick}
      >
        Explore
      </button>

      {expanded && (
        <button
          className="home-button2"
          onClick={() => handleCollapseClick(setBlogs, setExpanded)}
        >
          Collapse
        </button>
      )}
      <h3>Top Blogs</h3>
      <BlogCardList topBlogs={blogs} />
    </div>
  );
}

export default Home;
