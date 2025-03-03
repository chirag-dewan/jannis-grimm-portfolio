import React, { useState, useEffect } from 'react';

const TypingAnimation = ({ 
  texts = ['Software Engineer', 'iOS Developer', 'UI/UX Enthusiast'],
  typeSpeed = 100,
  deleteSpeed = 50,
  delayBetween = 2000,
  className = ''
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  useEffect(() => {
    let timeout;
    
    // Set timeout to handle typing and deleting
    if (isWaiting) {
      timeout = setTimeout(() => {
        setIsWaiting(false);
        setIsDeleting(true);
      }, delayBetween);
    } else if (isDeleting) {
      if (currentText.length === 0) {
        setIsDeleting(false);
        setCurrentTextIndex(index => (index + 1) % texts.length);
      } else {
        timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, deleteSpeed);
      }
    } else {
      const fullText = texts[currentTextIndex];
      if (currentText === fullText) {
        setIsWaiting(true);
      } else {
        timeout = setTimeout(() => {
          setCurrentText(fullText.slice(0, currentText.length + 1));
        }, typeSpeed);
      }
    }
    
    return () => clearTimeout(timeout);
  }, [currentText, currentTextIndex, isDeleting, isWaiting, texts, typeSpeed, deleteSpeed, delayBetween]);

  return (
    <span className={className}>
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default TypingAnimation;
