import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [showLoginDropdown, setShowLoginDropdown] = useState(false);
  const [showRegisterDropdown, setShowRegisterDropdown] = useState(false);

  const handleLoginClick = () => {
    setShowLoginDropdown(!showLoginDropdown);
    setShowRegisterDropdown(false);
  };

  const handleRegisterClick = () => {
    setShowRegisterDropdown(!showRegisterDropdown);
    setShowLoginDropdown(false);
  };

  const closeDropdowns = () => {
    setShowLoginDropdown(false);
    setShowRegisterDropdown(false);
  };

  return (
    <nav className="navbar" onClick={closeDropdowns}>
      <div className="navbar-logo">
        Medi<span>Dispense</span>
      </div>
      <ul className="navbar-links" onClick={e => e.stopPropagation()}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/features">Features</Link></li>

        <li className="dropdown">
          <span onClick={handleLoginClick}>Login</span>
          {showLoginDropdown && (
            <ul className="dropdown-menu">
              <li><Link to="/login">Patient Login</Link></li>
              <li><Link to="/login/doctor">Doctor Login</Link></li>
            </ul>
          )}
        </li>

        <li className="dropdown">
          <span onClick={handleRegisterClick}>Register</span>
          {showRegisterDropdown && (
            <ul className="dropdown-menu">
              <li><Link to="/register">Patient Register</Link></li>
              <li><Link to="/register/doctor">Doctor Register</Link></li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
