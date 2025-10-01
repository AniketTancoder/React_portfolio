import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const navbar = document.querySelector('.navbar');
      const menuToggle = document.querySelector('.menu-toggle');
      if (!navbar.contains(event.target) && !menuToggle.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <header className="header">
      <nav className={`navbar ${isMenuOpen ? 'show' : ''}`}>
        <a href="#home" style={{ '--i': 1 }} className="active">HOME</a>
        <a href="#education" style={{ '--i': 2 }}>EDUCATION</a>
        <a href="#skills" style={{ '--i': 3 }}>SKILL</a>
        <a href="#Certificates" style={{ '--i': 4 }}>CERTIFICATES</a>
        <a href="#portfolio" style={{ '--i': 5 }}>PROJECTS</a>
        <a href="#internships" style={{ '--i': 6 }}>INTERNSHIPS</a>
        <a href="#contact" style={{ '--i': 7 }}>CONTACT</a>
      </nav>
      <div className="menu-toggle" onClick={toggleMenu}>☰</div>
    </header>
  );
};

export default Header;