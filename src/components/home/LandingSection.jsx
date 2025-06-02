import React, { use } from 'react';
import "../../components/home/LandingSection.css";
import { useNavigate } from 'react-router-dom';

const LandingSection = () => {
  const navigate = useNavigate();
  return (
    <div className="landingsection-container">
      <div className="landing-content">
        <h1>
          <span className="highlight">EVERYTHING</span> YOU NEED <br /> FOR YOUR HOME
        </h1>
        <p>
          Discover quality household items, stylish crockery, essential stationery, mobile accessories, and fashionable shoes - all in one place.
        </p>
        <button className="shop-now-button" onClick={() => navigate('/products')}>
          <span className="button-icon">🛒</span> Shop Now
        </button>
      </div>
    </div>
  );
};

export default LandingSection;