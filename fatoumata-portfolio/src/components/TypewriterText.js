import React, { useEffect, useState } from 'react';

const TypewriterText = () => {
  const [text, setText] = useState('');
  const fullText = 'marketer...';
  const typingSpeed = 150; // milliseconds

  useEffect(() => {
    let index = 0;
    const type = () => {
      if (index < fullText.length) {
        setText((prev) => prev + fullText.charAt(index));
        index++;
        setTimeout(type, typingSpeed);
      }
    };
    type();
  }, []);

  return (
    <div className="typewriter-text">
      {text}
    </div>
  );
};

export default TypewriterText;