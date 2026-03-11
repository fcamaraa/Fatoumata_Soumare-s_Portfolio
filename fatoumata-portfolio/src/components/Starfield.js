import React from 'react';
import './Starfield.css';

const Starfield = () => {
  const stars = Array.from({ length: 100 }).map((_, index) => (
    <div key={index} className="star" />
  ));

  return <div className="starfield">{stars}</div>;
};

export default Starfield;