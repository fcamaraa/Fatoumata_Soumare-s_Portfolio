import React, { useEffect, useRef } from 'react';
import './PaintbrushName.css'; // Assuming you will create a CSS file for styles

const PaintbrushName = () => {
  const nameRef = useRef(null);

  useEffect(() => {
    const drawName = () => {
      if (nameRef.current) {
        nameRef.current.classList.add('fade-in');
      }
    };

    const timeout = setTimeout(() => {
      drawName();
    }, 1000); // Delay before drawing the name

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="paintbrush-name-container">
      <h1 ref={nameRef} className="paintbrush-name">
        Fatoumata Soumare
      </h1>
    </div>
  );
};

export default PaintbrushName;