import { GeistMono } from 'geist/font/mono';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (event) => {
    const section = event.currentTarget;
    const rect = section.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Calculate distance from center with increased sensitivity
    const deltaX = (event.clientX - centerX) / (rect.width / 4); // Increased sensitivity
    const deltaY = (event.clientY - centerY) / (rect.height / 4);
    
    // Increased rotation angle for more noticeable effect
    setRotateX(-deltaY * 15);
    setRotateY(deltaX * 15);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      className="h-screen w-full flex flex-col justify-center items-center"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1500,
        transformStyle: 'preserve-3d'
      }}
      animate={{
        rotateX,
        rotateY,
      }}
      transition={{
        type: "spring",
        stiffness: 400,  // Increased for faster response
        damping: 20,     // Reduced for more dynamic movement
        mass: 0.5        // Reduced for faster acceleration
      }}
    >
      <div 
        className="relative"
        style={{ 
          transformStyle: 'preserve-3d',
          transform: 'translateZ(60px)'  // Increased depth effect
        }}
      >
        <div className="w-[400px] h-[250px] rounded-2xl overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="/images/person.jpg"  // Updated image source
            alt="Hero image"
          />
        </div>
        
        <motion.h1 
          className={`text-lg opacity-80 mt-2 uppercase font-mono text-center ${GeistMono.className}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Banoth Hemanth sai{" "}
          <span className="text-sm lowercase">@fullstack developer</span>
        </motion.h1>
      </div>
    </motion.div>
  );
};

export default HeroSection;