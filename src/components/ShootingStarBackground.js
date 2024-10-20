import React from 'react';

const ShootingStarBackground = () => {
  const totalFishes = 10;

  const createFishes = () => {
    return Array.from({ length: totalFishes }, (_, i) => {
      const top = Math.random() * 100;
      const right = Math.random() * 100;
      const animationDuration = 15 + Math.random() * 10; // 15-25 seconds
      const animationDelay = Math.random() * 15; // 0-15 seconds delay
      const size = 20 + Math.random() * 30; // 20-50px

      return (
        <div 
          key={i} 
          className="fish" 
          style={{
            top: `${top}%`,
            right: `${right}%`,
            width: `${size}px`,
            height: `${size / 2}px`,
            animationDuration: `${animationDuration}s`,
            animationDelay: `${animationDelay}s`
          }}
        >
          <div className="fish-body"></div>
          <div className="fish-tail"></div>
        </div>
      );
    });
  };

  return (
    <div className="aquarium">
      {createFishes()}
    </div>
  );
};

export default ShootingStarBackground;
