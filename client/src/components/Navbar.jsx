import React, { useState } from "react";
import { FaHome, FaBook, FaUser, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/" className="text-2xl font-bold">
                USCL
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="/"
                className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ease-in-out"
              >
                <FaHome className="inline-block mr-1" /> Home
              </Link>
              <Link
                to="/about"
                className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ease-in-out"
              >
                About
              </Link>

              <Link
                to="/learn"
                className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ease-in-out"
              >
                <FaBook className="inline-block mr-1" /> Courses
              </Link>
              <Link
                to="/login"
                className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ease-in-out"
              >
                <FaUser className="inline-block mr-1" /> Login
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <FaTimes className="block h-6 w-6" />
              ) : (
                <FaBars className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="/"
            className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ease-in-out"
          >
            <FaHome className="inline-block mr-1" /> Home
          </Link>
          <Link
            to="/learn"
            className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ease-in-out"
          >
            <FaBook className="inline-block mr-1" /> Courses
          </Link>
          <Link
            to="/login"
            className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ease-in-out"
          >
            <FaUser className="inline-block mr-1" /> Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
