// Example for animating blog posts
import React from 'react';
import { useSpring, animated } from 'react-spring';

function BlogPost({ title, content }) {
  const props = useSpring({ opacity: 1, transform: 'scale(1)', from: { opacity: 0, transform: 'scale(0.5)' } });

  return (
    <animated.div className="blog-post" style={props}>
      <h2>{title}</h2>
      <p>{content}</p>
    </animated.div>
  );
}

export default BlogPost;
