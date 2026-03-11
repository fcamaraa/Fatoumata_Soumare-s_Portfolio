import React, { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import CafeScene from './components/CafeScene';
import './styles/main.css';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Loading screen duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app">
      {loading ? (
        <LoadingScreen />
      ) : (
        <CafeScene />
      )}
    </div>
  );
};

export default App;