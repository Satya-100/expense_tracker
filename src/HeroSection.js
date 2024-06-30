import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero">
      <div className="hero-text">
        <h1>Welcome to Expense Tracker</h1>
        <p>Keep track of your expenses easily and efficiently. Take control of your finances today.</p>
        <button className="hero-button">Get Started</button>
      </div>
      <div className="hero-image">
        <img src="path/to/your/image.jpg" alt="Expense Tracker" />
      </div>
    </div>
  );
};

export default HeroSection;
