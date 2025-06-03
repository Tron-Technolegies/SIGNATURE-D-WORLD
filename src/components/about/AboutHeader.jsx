import React from 'react';
import { FaRocket } from 'react-icons/fa';
import { HiLightBulb } from "react-icons/hi";
import "../../components/about/AboutHeader.css"; 

const AboutHeader = () => {
  return (
    <div className="about-header">
      <div className="about-header__container">
        
        {/* Left Content Section */}
        <div className="about-header__content">
          <p className="about-header__breadcrumb">
            ~ WHO WE ARE
          </p>
          
          <h1 className="about-header__heading">
            We Help To Get Solutions
          </h1>
          
          <p className="about-header__description">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
          
          {/* Features Section */}
          <div className="about-header__features">
            <div className="about-header__feature">
              <div className="about-header__icon-wrapper">
                <FaRocket size={20} />
              </div>
              <div className="about-header__feature-content">
                <h3 className="about-header__feature-title">Lorem Ipsum</h3>
                <p className="about-header__feature-text">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
              </div>
            </div>
            
            <div className="about-header__feature">
              <div className="about-header__icon-wrapper">
                <HiLightBulb size={20} />
              </div>
              <div className="about-header__feature-content">
                <h3 className="about-header__feature-title">Lorem Ipsum</h3>
                <p className="about-header__feature-text">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
              </div>
            </div>
          </div>
          
          <button className="about-header__team-button">
            OUR TEAM
          </button>
        </div>
        
        {/* Right Image Section */}
        <div className="about-header__image-section">
          <div className="about-header__image-container">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Team member"
              className="about-header__team-image"
            />
            <div className="about-header__tooltip">
              <p className="about-header__tooltip-title">Looking for help?</p>
              <p className="about-header__tooltip-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default AboutHeader;