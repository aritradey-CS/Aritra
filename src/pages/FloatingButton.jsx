import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import './FloatingButton.css';

const options = [
  { icon: "✉️", action: "Contact" },
  { icon: "📝", action: "Post" },
  { icon: "💬", action: "Chat" },
  { icon: "ℹ️", action: "About" },
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
        {expanded ? "✕" : "⚫"}
      </div>
      {expanded && (
        <div className="options-container">
          {options.map((option, index) => (
            <div key={index} className="option" onClick={() => console.log(option.action)}>
              {option.icon}
            </div>
          ))}
        </div>
      )}
    </animated.div>
  );
}

export default FloatingButton;
