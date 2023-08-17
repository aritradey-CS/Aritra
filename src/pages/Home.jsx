import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <h2 className="home-title">Welcome to My Blog!</h2>
      <p className="home-content">
        This is the home page content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
        vel urna quis felis posuere interdum a non erat. Cras congue felis in elit ultricies, nec
        tincidunt libero varius. Vestibulum in convallis arcu.
      </p>
      <button className="home-button">Explore</button>
    </div>
  );
}

export default Home;
