import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

const TiltCard = ({ 
  children, 
  className = '', 
  glareEffect = true,
  perspective = 1000,
  glareColor = 'rgba(255, 255, 255, 0.25)',
  scale = 1.05,
  speed = 500
}) => {
  const [tiltRotation, setTiltRotation] = useState({ x: 0, y: 0 });
  const [glarePosition, setGlarePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    
    // Calculate mouse position relative to card
    const x = e.clientX - rect.left; // x position within the element
    const y = e.clientY - rect.top;  // y position within the element
    
    // Calculate rotation based on mouse position
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Calculate rotation (inverted so it tilts toward the mouse)
    const rotateY = ((x - centerX) / centerX) * 10; // max 10 degrees
    const rotateX = ((centerY - y) / centerY) * 10; // max 10 degrees
    
    setTiltRotation({ x: rotateX, y: rotateY });
    
    // Calculate glare position (follows mouse)
    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;
    setGlarePosition({ x: glareX, y: glareY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTiltRotation({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      className={`relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: `${perspective}px`,
        transformStyle: 'preserve-3d',
      }}
      animate={{
        rotateX: tiltRotation.x,
        rotateY: tiltRotation.y,
        scale: isHovered ? scale : 1,
      }}
      transition={{
        type: 'spring',
        stiffness: 400,
        damping: 30,
        duration: speed / 1000,
      }}
    >
      {children}
      
      {/* Glare effect */}
      {glareEffect && isHovered && (
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, ${glareColor} 0%, transparent 80%)`,
            mixBlendMode: 'overlay',
          }}
        />
      )}
    </motion.div>
  );
};

export default TiltCard;
