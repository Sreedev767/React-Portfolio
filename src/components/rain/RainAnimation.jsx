import React from 'react';
import './RainAnimation.css'; // CSS file containing styles for the rain effect

function RainEffect() {
  return (
    <div className="rain-effect-container">
      {/* Rain container for back layer */}
      <div className="rain-container back">
        {/* Raindrops for back layer */}
        {Array.from({ length: 40 }).map((_, index) => (
          <div
            key={index}
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `-${Math.random() * 2000}ms`,
              height: `${Math.random() * 60 + 10}px`,
              opacity: `${Math.random() * 0.5 + 0.5}`,
            }}
          />
        ))}
      </div>
      {/* Rain container for front layer */}
      <div className="rain-container front">
        {/* Raindrops for front layer */}
        {Array.from({ length: 40 }).map((_, index) => (
          <div
            key={index}
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `-${Math.random() * 2000}ms`,
              height: `${Math.random() * 60 + 10}px`,
              opacity: `${Math.random() * 0.5 + 0.5}`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default RainEffect;