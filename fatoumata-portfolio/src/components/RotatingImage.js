import React from 'react';
import './RotatingImage.css'; // Import the CSS for styling

const RotatingImage = () => {
  return (
    <div className="rotating-image-container">
      <img 
        src={require('../assets/profile.jpg')} 
        alt="Fatoumata Soumare" 
        className="rotating-image" 
      />
    </div>
  );
};

export default RotatingImage;