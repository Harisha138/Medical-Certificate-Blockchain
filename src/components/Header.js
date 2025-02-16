import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ currentUser, onLogout }) => {
  return (
    <nav className="navbar">
      <div className="logo">MedCertichain</div>
      <ul className="nav-links">
        {/* Always visible links */}
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>

        {/* Conditional rendering based on login status */}
        {currentUser ? (
          // Logged-in user view
          <>
            <li>
              <span>
                Welcome,{' '}
                {currentUser.role === 'doctor'
                  ? `Dr. ${currentUser.name}`
                  : currentUser.name}
              </span>
            </li>
            <li>
              <button onClick={onLogout} className="btn logout-btn">
                Logout
              </button>
            </li>
          </>
        ) : (
          // Guest view
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Header;