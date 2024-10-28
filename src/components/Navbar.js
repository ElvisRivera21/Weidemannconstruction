import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const location = useLocation();
  const brightGoldColor = '#FFEB9C'; // Brighter gold to make text pop
  const hoverColor = '#FFD700'; // Slightly more golden color on hover
  const activeColor = '#FFFFFF'; // Brighter white for the active link

  return (
    <nav
      style={{
        background: 'linear-gradient(90deg, rgba(2,0,36,1) 34%, rgba(92,82,3,1) 79%, rgba(235,201,117,1) 100%)',
      }}
      className="border-b border-gray-200"
    >
      <div className="max-w-screen-xl mx-auto p-4 flex items-center justify-between">
        {/* Logo Section */}
        <Link to="/" className="flex items-center space-x-3">
          <img
            src="photos/Weidemann Construction2.0-2.png" // Update this to reference the correct path from public folder
            alt="Weidemann Yellow Logo"
            className="h-16"
          />
          <span
            className="text-2xl font-semibold"
            style={{ fontFamily: 'Cinzel, serif', color: brightGoldColor }}
          >
            Weidemann Construction
          </span>
        </Link>

        {/* Navigation Links */}
        <div
          className={`${
            navbarOpen ? 'block' : 'hidden'
          } w-full md:flex md:items-center md:w-auto`}
        >
          <div className="flex flex-col md:flex-row md:space-x-4 mt-2 md:mt-0">
            {/* Link Items */}
            {['/', '/about', '/services', '/portfolio', '/contact'].map((path, index) => (
              <Link
                key={index}
                to={path}
                className={`py-2 px-4 rounded-md transition-colors 
                ${location.pathname === path ? 'text-blue-500 font-bold' : 'hover:text-blue-500'}`}
                style={{
                  fontFamily: 'Merriweather, serif',
                  color: location.pathname === path ? activeColor : brightGoldColor,
                  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)', // Subtle shadow for visibility
                }}
              >
                {path === '/' ? 'Home' : path.replace('/', '').charAt(0).toUpperCase() + path.slice(2)}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
