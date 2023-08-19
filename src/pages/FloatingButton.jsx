import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPen, faComment, faInfo, faTimes, faCircle } from "@fortawesome/free-solid-svg-icons"; // Import the correct icons
import "./FloatingButton.css";

const options = [
  { icon: faEnvelope, action: "Contact" },
  { icon: faPen, action: "Post" },
  { icon: faComment, action: "Chat" },
  { icon: faInfo, action: "About" },
];

function FloatingButton() {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
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
            <div key={index} className="option" onClick={() => console.log(option.action)}>
              <FontAwesomeIcon icon={option.icon} />
            </div>
          ))}
        </div>
      )}
    </animated.div>
  );
}

export default FloatingButton;
