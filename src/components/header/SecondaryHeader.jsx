import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FiSearch, FiMenu, FiX } from 'react-icons/fi';
import './SecondaryHeader.css';
import headerlogo from '../../../public/logos/header-logo.png';

const SecondaryHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="secondary-header">
      <div className="secondary-header-container">
        <div className="logo">
          <Link to="/">
            <span className="logo-icon"><img src={headerlogo} alt="" /></span> Signature D World
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="nav-links desktop-nav">
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
          <Link to="/products" className={location.pathname === '/products' ? 'active' : ''}>Categories</Link>
          <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About us</Link>
          <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link>
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
              <FiSearch size={16} />
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
              <Link to="/" className={location.pathname === '/' ? 'mobile-nav-link active' : 'mobile-nav-link'} onClick={closeMenu}>
                Home
              </Link>
              <Link to="/products" className={location.pathname === '/products' ? 'mobile-nav-link active' : 'mobile-nav-link'} onClick={closeMenu}>
                Categories
              </Link>
              <Link to="/about" className={location.pathname === '/about' ? 'mobile-nav-link active' : 'mobile-nav-link'} onClick={closeMenu}>
                About us
              </Link>
              <Link to="/contact" className={location.pathname === '/contact' ? 'mobile-nav-link active' : 'mobile-nav-link'} onClick={closeMenu}>
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default SecondaryHeader;