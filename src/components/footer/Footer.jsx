import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import "../../components/footer/Footer.css";
import footerlogo from "../../../public/logos/footerlogo_signature.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <div className="footer-logo">
            <img src={footerlogo} alt="Signature D World Logo" />
            <h1>Signature D World</h1>
          </div>
          <p>Your one-stop shop for quality household items, accessories, and daily essentials.</p>
          <div className="footer-contact">
            <p><FaEnvelope className="icon" /> info@signaturedworld.com</p>
            <p><FaPhone className="icon" /> +91 1234567890</p>
            <p><FaMapMarkerAlt className="icon" /> 123 Home Street, City, STATE 12345</p>
          </div>
        </div>

        <div className="footer-section">
          <h2>Quick Link</h2>
          <ul>
            <li><a href="#">About us</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h2>Categories</h2>
          <ul>
            <li><a href="#">Household Items</a></li>
            <li><a href="#">Crockery</a></li>
            <li><a href="#">Stationery</a></li>
            <li><a href="#">Mobile Accessories</a></li>
            <li><a href="#">Shoes</a></li>
            <li><a href="#">Fashion</a></li>
            <li><a href="#">Gifts</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h2>Customer Service</h2>
          <ul>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Signature D World. All rights reserved. Built with care for your home.</p>
      </div>
    </footer>
  );
};

export default Footer;