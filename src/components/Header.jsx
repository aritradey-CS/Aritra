import React from 'react';
import { useSpring, animated } from 'react-spring';
import './Header.css';
import profileImage from '../assets/profile.jpg'; // Import your profile image
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Header() {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <animated.header style={props}> 
      <div className="header-container">
        <div className="profile-image-container">
          <a href="/" className="profile-image-link">
            <img src={profileImage} alt="Profile" className="profile-image" />
          </a>
        </div>
        <div className="profile-details">
          <h1>Aritra Dey</h1>
          <p>aritra1999.dey@gmail.com <br /> 8582970748</p>
          <div className="social-links">
            <a href="https://github.com/aritradey-CS" target="_blank" rel="noopener noreferrer" className="social-button">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.linkedin.com/in/aritra-dey-13552418b/" target="_blank" rel="noopener noreferrer" className="social-button">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      </div>
    </animated.header>
  );
}

export default Header;
