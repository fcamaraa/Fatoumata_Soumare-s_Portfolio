import React from 'react';
import { Link } from 'react-router-dom';
import './PlanetsNav.css'; // Assuming you will create a CSS file for styling

const planets = [
  { name: 'About', path: '/about' },
  { name: 'Education', path: '/education' },
  { name: 'Previous Internships', path: '/previous-internships' },
  { name: 'NY Liberty', path: '/ny-liberty' },
  { name: 'Jolie Den', path: '/jolie-den' },
  { name: 'Now', path: '/now' },
];

const PlanetsNav = () => {
  return (
    <nav className="planets-nav">
      {planets.map((planet, index) => (
        <Link key={index} to={planet.path} className="planet">
          {planet.name}
        </Link>
      ))}
    </nav>
  );
};

export default PlanetsNav;