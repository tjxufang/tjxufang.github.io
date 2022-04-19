import React from 'react';
import './Homepage.scss';
import { Link } from 'react-router-dom';
import MainButton from 'Components/Buttons/MainButton';
import IntroTypewriter from 'Components/IntroTypewriter';

function Homepage() {
  return (
    <div className="homepage-container view-container flex-center">
      <div className="intro-container row">
        <div className="intro-background" />
        <div className="intro-avatar flex-center">
          <img src="assets/fx.jpeg" alt="avatar" />
        </div>
        <div className="intro-text">
          <h1>
            Hello there! Welcome to my page!
          </h1>
          <IntroTypewriter />
          <div className="btn-container">
            <Link to="/about">
              <MainButton>Learn more about me</MainButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
