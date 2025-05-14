import React, { useState } from 'react';
import '../styles/Navbar.css';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <Link to="/" className="logo"><span>Sulemana</span> Iddrisu</Link>
      <nav className={`navbar ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
        <Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={() => setIsMobileMenuOpen(false)}>HOME</Link>
        <Link to="/about" className={location.pathname === '/about' ? 'active' : ''} onClick={() => setIsMobileMenuOpen(false)}>ABOUT</Link>
        <Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''} onClick={() => setIsMobileMenuOpen(false)}>PROJECTS</Link>
        <Link to="/blog" className={location.pathname === '/blog' ? 'active' : ''} onClick={() => setIsMobileMenuOpen(false)}>BLOG</Link>
      </nav>
      <Link to="/contact" className="contact" onClick={() => setIsMobileMenuOpen(false)}>CONTACT ME</Link>

      {/* Hamburger Menu Icon */}
      <div className="hamburger" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </header>
  );
};

export default Navbar;