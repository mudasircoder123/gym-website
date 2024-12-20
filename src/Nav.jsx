import React, { useState } from "react";
import Hamburger from 'hamburger-react';
import { Link } from "react-router-dom"; // Import Link for navigation
import './nav.css';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false); // Close menu when link is clicked
  };

  return (
    <>
      <header className="bg-gradient-to-r from-black to-gray-800 text-white fixed top-0 left-0 w-full z-50 shadow-lg h-26 rounded-lg">
        <nav className="flex justify-between items-center p-4 max-w-7xl mx-auto">
          {/* Logo */}
          <div className="text-4xl font-bold text-teal-400 font-sans tracking-wider">
            <Link to="/">The Fitness Connection.</Link>
          </div>

          {/* Hamburger Icon for mobile view */}
          <div className="md:hidden">
            {/* This will toggle the menu and show the "X" button when the menu is open */}
            <Hamburger toggled={isMenuOpen} toggle={toggleMenu} color="#FFFFFF" size={24} />
          </div>

          {/* Navigation links */}
          <ul
            className={`transition-transform duration-300 ease-in-out ${isMenuOpen ? "transform translate-x-0" : "transform -translate-x-full"} 
              md:transform-none md:transition-none fixed md:static inset-0 bg-gray-900 md:bg-transparent text-center flex flex-col md:flex-row items-center gap-8 md:gap-10 p-8 md:p-0 text-2xl font-semibold uppercase`}
          >
            <li className="hover:text-teal-400 transition duration-300">
              <Link to="/" onClick={closeMenu}>Home</Link>
            </li>
            <li className="hover:text-teal-400 transition duration-300">
              <Link to="/about" onClick={closeMenu}>About</Link>
            </li>
            <li className="hover:text-teal-400 transition duration-300">
              <Link to="/programs" onClick={closeMenu}>Services</Link>
            </li>
            <li className="hover:text-teal-400 transition duration-300">
              <Link to="/contact" onClick={closeMenu}>Contact</Link>
            </li>
            
            <li className="hover:text-teal-400 transition duration-300">
              <Link to="/trainingCard" onClick={closeMenu}>catalog</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Nav;


