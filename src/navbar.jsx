import React, { useState } from 'react';
import './navbar.css';

const Navbar = () => {
  const [isDarkMode, setDarkMode] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.style.setProperty('--background-color', '#fff');
      document.documentElement.style.setProperty('--text-color', '#333');
    } else {
      document.documentElement.style.setProperty('--background-color', '#333');
      document.documentElement.style.setProperty('--text-color', '#fff');
    }
  };

  const handleLogout = () => {
    alert('Logged out!'); 
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="navbar">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/profile">Your Profile</a>
        </li>
        <li>
          <button onClick={toggleDropdown}>More</button>
          {isDropdownOpen && (
            <div className="dropdown-content">
              <button onClick={handleLogout}>Logout</button>
              <button onClick={toggleDarkMode}>
                {isDarkMode ? 'Light Mode' : 'Dark Mode'}
              </button>
              <button>Settings</button>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
