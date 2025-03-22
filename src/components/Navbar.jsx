import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <NavLink to="/" className="flex items-center space-x-2">
              <img 
                src="https://img.icons8.com/fluency/96/banana.png" 
                alt="Logo" 
                className="w-10 h-10 transition-transform duration-300 hover:scale-110"
              />
              <span className="text-2xl font-bold text-primary hover:text-secondary transition-colors">
                BananaLeaf
              </span>
            </NavLink>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <NavLink
              to="/"
              className={({ isActive }) => 
                `px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  isActive ? 'text-primary font-bold' : 'text-gray-700 hover:text-primary'
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => 
                `px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  isActive ? 'text-primary font-bold' : 'text-gray-700 hover:text-primary'
                }`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) => 
                `px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  isActive ? 'text-primary font-bold' : 'text-gray-700 hover:text-primary'
                }`
              }
            >
              Services
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => 
                `px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  isActive 
                    ? 'bg-primary text-white shadow-lg' 
                    : 'bg-gradient-to-r from-primary to-secondary text-white hover:from-secondary hover:to-primary shadow-lg hover:shadow-xl'
                }`
              }
            >
              Contact
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-primary focus:outline-none transition-colors duration-200"
            >
              <svg
                className="h-8 w-8 transform transition-transform duration-300"
                style={{ transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-white/95 backdrop-blur-sm overflow-hidden transition-all duration-500 ${
        isOpen ? 'max-h-96' : 'max-h-0'
      }`}>
        <div className="px-4 pt-2 pb-3 space-y-1">
          <NavLink
            to="/"
            className={({ isActive }) => 
              `block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                isActive ? 'text-primary font-bold' : 'text-gray-700 hover:text-primary'
              }`
            }
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => 
              `block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                isActive ? 'text-primary font-bold' : 'text-gray-700 hover:text-primary'
              }`
            }
            onClick={() => setIsOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) => 
              `block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                isActive ? 'text-primary font-bold' : 'text-gray-700 hover:text-primary'
              }`
            }
            onClick={() => setIsOpen(false)}
          >
            Services
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => 
              `block px-4 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                isActive 
                  ? 'bg-primary text-white' 
                  : 'bg-gradient-to-r from-primary to-secondary text-white hover:from-secondary hover:to-primary'
              }`
            }
            onClick={() => setIsOpen(false)}
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;