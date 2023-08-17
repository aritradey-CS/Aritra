// Example for animating the header
import React from 'react';
import { useSpring, animated } from 'react-spring';
import './Header.css';

function Header() {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <animated.header style={props}>
      <h1>My Personal Blog</h1>
    </animated.header>
  );
}

export default Header;
