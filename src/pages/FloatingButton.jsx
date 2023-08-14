import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPen,
  faComment,
  faInfo,
  faTimes,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import "./FloatingButton.css";
import PostPopup from "./PostPopup"; // Import the PostPopup component

const options = [
  { icon: faEnvelope, action: "Contact" },
  { icon: faPen, action: "Post" },
  { icon: faComment, action: "Chat" },
  { icon: faInfo, action: "About" },
];

function FloatingButton() {
  const [expanded, setExpanded] = useState(false);
  const [showPostPopup, setShowPostPopup] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const handelOpenPostPopup = () => {
    setShowPostPopup(true);
  };

  const handleClosePostPopup = () => {
    setShowPostPopup(false);
  };

  const handlePostSubmit = (post) => {
    console.log("Post submitted:", post);
  };

  const containerProps = useSpring({
    transform: expanded ? "scale(1)" : "scale(0.7)",
  });

  return (
    <animated.div className="floating-button-container" style={containerProps}>
      <div className={`floating-button ${expanded ? "expanded" : ""}`} onClick={handleToggle}>
        {expanded ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faCircle} />}
      </div>
      {expanded && (
        <div className="options-container">
          {options.map((option, index) => (
            <div
              key={index}
              className="option"
              onClick={option.action === "Post" ? handelOpenPostPopup : () => console.log(option.action)}
            >
              <FontAwesomeIcon icon={option.icon} />
            </div>
          ))}
        </div>
      )}
      {showPostPopup && <PostPopup onClose={handleClosePostPopup} onSubmit={handlePostSubmit} />}
    </animated.div>
  );
}

export default FloatingButton;
