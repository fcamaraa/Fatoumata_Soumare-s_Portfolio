import React, { useState, useEffect } from 'react';
import './CafeScene.css';

const CafeScene = () => {
  const [sceneLoaded, setSceneLoaded] = useState(false);
  const [profileRolledIn, setProfileRolledIn] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showCafeElements, setShowCafeElements] = useState(false);
  const [bubbleText, setBubbleText] = useState("Welcome to Fatoumata's Cafe! Click to explore my journey...");

  const menuItems = [
    { name: 'About', section: 'about' },
    { name: 'Education', section: 'education' },
    { name: 'Internships', section: 'internships' },
    { name: 'NY Liberty', section: 'ny-liberty' },
    { name: 'Jolie Den', section: 'jolie-den' },
    { name: 'Now', section: 'now' }
  ];

  useEffect(() => {
    // Step 1: Start with blank scene, then show profile rolling in
    const timer1 = setTimeout(() => {
      setProfileRolledIn(true);
    }, 1000);

    // Step 2: Show introductory speech bubble 
    const timer2 = setTimeout(() => {
      setShowBubble(true);
    }, 3500);

    // Step 3: Change bubble text and show menu banner
    const timer3 = setTimeout(() => {
      setBubbleText("Click one of the menu items to learn more about me!");
      setShowMenu(true);
    }, 5500);

    // Step 4: Show cafe atmosphere elements (tables, chairs, lighting)
    const timer4 = setTimeout(() => {
      setShowCafeElements(true);
      setSceneLoaded(true);
    }, 7000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  const handleMenuClick = (section) => {
    setBubbleText(`Click one of the menu items to learn more about me!`);
    // Add navigation logic here
  };

  return (
    <div className="cafe-scene">
      {/* Background atmosphere - appears last in sequence */}
      {showCafeElements && (
        <div className="cafe-background">
          <div className="warm-lighting"></div>
          <div className="table table-1"></div>
          <div className="table table-2"></div>
          <div className="table table-3"></div>
          <div className="table table-4"></div>
          <div className="chair chair-1"></div>
          <div className="chair chair-2"></div>
          <div className="chair chair-3"></div>
          <div className="chair chair-4"></div>
          <div className="chair chair-5"></div>
          <div className="chair chair-6"></div>
        </div>
      )}

      {/* Hanging Menu Banner - appears third in sequence */}
      {showMenu && (
        <div className="menu-banner">
          <div className="chain chain-left"></div>
          <div className="chain chain-right"></div>
          <div className="menu-board">
            <div className="menu-header">
              <h1>Fatoumata Soumare</h1>
              <p>Marketer • Creative • Entrepreneur</p>
            </div>
            <div className="menu-items">
              {menuItems.map((item, index) => (
                <div 
                  key={index} 
                  className="menu-item"
                  onClick={() => handleMenuClick(item.section)}
                >
                  {item.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Rolling Profile Image - appears first in sequence */}
      <div className={`profile-container ${profileRolledIn ? 'rolled-in' : ''}`}>
        <img 
          src={require('../assets/profile.jpg')} 
          alt="Fatoumata Soumare" 
          className="profile-image"
        />
        
        {/* Speech Bubble - appears second in sequence */}
        {showBubble && (
          <div className="speech-bubble">
            <div className="bubble-content">
              {bubbleText}
            </div>
            <div className="bubble-tail"></div>
          </div>
        )}
      </div>

      {/* Ambient elements - appear with cafe atmosphere */}
      {showCafeElements && (
        <>
          <div className="steam steam-1"></div>
          <div className="steam steam-2"></div>
          <div className="steam steam-3"></div>
        </>
      )}
    </div>
  );
};

export default CafeScene;
