import React, { useState } from "react";
import "./Home.css";
import { BlogCardList } from "../pages/Blog";
import { animateScroll as scroll } from "react-scroll";
import FloatingButton from "./FloatingButton";
import PostPopup from "./BlogPostForm"; // Import the PostPopup component

const initialTopBlogs = [
  { title: "Top Blog 1", content: "Lorem ipsum dolor sit amet." },
  { title: "Top Blog 2", content: "Consectetur adipiscing elit." },
  // Add more top blog objects
];

const additionalBlogs = [
  { title: "Top Blog 3", content: "Lorem ipsum dolor sit amet." },
  { title: "Top Blog 4", content: "Lorem ipsum dolor sit amet." },
  { title: "Top Blog 5", content: "Lorem ipsum dolor sit amet." },
  { title: "Top Blog 6", content: "Lorem ipsum dolor sit amet." },
  { title: "Top Blog 7", content: "Lorem ipsum dolor sit amet." },

  // ... (additional blog data)
];

function Home() {
  const [expanded, setExpanded] = useState(false);
  const [blogs, setBlogs] = useState(initialTopBlogs);
  const [showPostPopup, setShowPostPopup] = useState(false);

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

  const handleOpenPostPopup = () => {
    setShowPostPopup(true);
  };

  const handleClosePostPopup = () => {
    setShowPostPopup(false);
  };

  const handlePostSubmit = (post) => {
    // Implement logic to save the post data
    console.log("Post submitted:", post);
  };

  return (
    <div className="home-container">
      <h2 className="home-title">Welcome aspirants!</h2>
      <p className="home-content">
        I am an engineering student in the Department of Computer Science, I
        have completed my diploma course in 2019 and graduated in 2022. I am now pursuing my Master's. From my blog, you can get information on digital
        technologies that are relevant to your course and beyond!
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
          onClick={handleCollapseClick}
        >
          Collapse
        </button>
      )}

      <FloatingButton onPostClick={handleOpenPostPopup} />
      <h3>Top Blogs</h3>
      <BlogCardList topBlogs={blogs} />

      {showPostPopup && (
        <PostPopup onClose={handleClosePostPopup} onSubmit={handlePostSubmit} />
      )}
    </div>
  );
}

export default Home;
