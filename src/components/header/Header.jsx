import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiMenu, FiX } from 'react-icons/fi';
import './Header.css';
import { useNavigate } from 'react-router-dom';
const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <div className="logo-icon">
            <img src="/logos/header-logo.png" alt="Logo" />
          </div>
          <Link to="/">Signature D World</Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="nav-links desktop-nav">
          <Link to="/" className="nav-link active">Home</Link>
          <Link to="/products" className="nav-link">Categories</Link>
          <Link to="/about" className="nav-link">About us</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </nav>

        {/* Desktop Search */}
        <div className="search-container desktop-search">
          <div className="search-box">
            <input 
              type="text" 
              placeholder="Search for products" 
              className="search-input"
            />
            <button className="search-button" onClick={() => navigate('/products')}>
              <FiSearch size={16}  />
            </button>
          </div>
        </div>

        {/* Mobile Hamburger Button */}
        <button className="hamburger-button" onClick={toggleMenu}>
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`mobile-menu-overlay ${isMenuOpen ? 'active' : ''}`}>
          <div className="mobile-menu">
            {/* Mobile Search */}
            <div className="mobile-search">
              <div className="search-box">
                <input 
                  type="text" 
                  placeholder="Search for products" 
                  className="search-input"
                />
                <button className="search-button">
                  <FiSearch size={16} />
                </button>
              </div>
            </div>

            {/* Mobile Navigation */}
            <nav className="mobile-nav">
              <Link to="/" className="mobile-nav-link active" onClick={closeMenu}>
                Home
              </Link>
              <Link to="/products" className="mobile-nav-link" onClick={closeMenu}>
                Categories
              </Link>
              <Link to="/about" className="mobile-nav-link" onClick={closeMenu}>
                About us
              </Link>
              <Link to="/contact" className="mobile-nav-link" onClick={closeMenu}>
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;