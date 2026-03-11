import React from 'react';
import Starfield from './Starfield';
import './LoadingScreen.css'; // Assuming you will create a CSS file for styles

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <Starfield />
      <div className="welcome-message">
        <h1>Hello, Welcome to Fatoumata Soumare’s portfolio</h1>
      </div>
    </div>
  );
};

export default LoadingScreen;