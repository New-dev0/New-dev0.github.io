import React, { useState, useEffect } from 'react';

const NightLamp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(Math.random() > 0.7); // 30% chance of appearing
    };

    const interval = setInterval(toggleVisibility, 5000); // Check every 5 seconds

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="night-lamp">
      <div className="minecraft-torch">
        <div className="torch-handle"></div>
        <div className="torch-head"></div>
        <div className="torch-flame"></div>
      </div>
    </div>
  );
};

export default NightLamp;
