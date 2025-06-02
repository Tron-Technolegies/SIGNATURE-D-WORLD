import React from 'react';
import { FaShieldAlt, FaHeadset, FaDollarSign } from 'react-icons/fa';
import  "../../components/home/AboutUs.css"; 

const AboutUs = () => {
  const aboutUsData = [
    {
      title: "QUALITY GUARANTEE",
      description: "Every product is carefully vetted for quality and durability. We stand behind everything we sell.",
      icon: "FaShieldAlt"
    },
    {
      title: "24/7 SUPPORT",
      description: "Our customer service team is available around the clock to help with any questions or concerns.",
      icon: "FaHeadset"
    },
    {
      title: "BEST PRICES",
      description: "We offer competitive pricing and regular sales to ensure you get the best value for your money.",
      icon: "FaDollarSign"
    }
  ];

  const iconComponents = {
    FaShieldAlt: FaShieldAlt,
    FaHeadset: FaHeadset,
    FaDollarSign: FaDollarSign
  };

  return (
    <div className="about-us-container">
      <h1 className="about-us-title">About us</h1>
      <p className="about-us-description">
        Founded in 2025, Signature D World has grown from a small family business to the trusted online retailer serving thousands of
        customers nationwide. We’re passionate about helping you create the perfect home and lifestyle with quality products at
        affordable prices. Our mission is simple: to provide exceptional products, outstanding service, and an unmatched shopping
        experience that makes your life easier and more beautiful.
      </p>
      <div className="about-us-cards">
        {aboutUsData.map((item, index) => {
          const IconComponent = iconComponents[item.icon];
          return (
            <div className="card" key={index}>
              <IconComponent className="card-icon" />
              <h3 className="card-title">{item.title}</h3>
              <p className="card-description">{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AboutUs;