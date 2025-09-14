import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, BookOpen, Users, Phone, Info } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCoursesDropdownOpen, setIsCoursesDropdownOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const courseCategories = [
    { name: 'Machine Learning', path: '/courses?category=ml' },
    { name: 'Deep Learning', path: '/courses?category=dl' },
    { name: 'Natural Language Processing', path: '/courses?category=nlp' },
    { name: 'Computer Vision', path: '/courses?category=cv' },
    { name: 'Data Science', path: '/courses?category=ds' },
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-primary-600 to-primary-700 rounded-lg flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-gradient">AI Academy</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`font-medium transition-colors duration-200 ${
                isActive('/') ? 'text-primary-600' : 'text-gray-700 hover:text-primary-600'
              }`}
            >
              Home
            </Link>

            {/* Courses Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setIsCoursesDropdownOpen(true)}
                onMouseLeave={() => setIsCoursesDropdownOpen(false)}
                className={`flex items-center space-x-1 font-medium transition-colors duration-200 ${
                  location.pathname.startsWith('/courses') ? 'text-primary-600' : 'text-gray-700 hover:text-primary-600'
                }`}
              >
                <span>Courses</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {isCoursesDropdownOpen && (
                <div
                  onMouseEnter={() => setIsCoursesDropdownOpen(true)}
                  onMouseLeave={() => setIsCoursesDropdownOpen(false)}
                  className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2"
                >
                  <Link
                    to="/courses"
                    className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200"
                  >
                    All Courses
                  </Link>
                  <div className="border-t border-gray-100 my-2"></div>
                  {courseCategories.map((category) => (
                    <Link
                      key={category.name}
                      to={category.path}
                      className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/about"
              className={`font-medium transition-colors duration-200 ${
                isActive('/about') ? 'text-primary-600' : 'text-gray-700 hover:text-primary-600'
              }`}
            >
              About
            </Link>

            <Link
              to="/contact"
              className={`font-medium transition-colors duration-200 ${
                isActive('/contact') ? 'text-primary-600' : 'text-gray-700 hover:text-primary-600'
              }`}
            >
              Contact
            </Link>

            <Link to="/courses" className="btn-primary">
              Get Started
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center space-x-2 font-medium transition-colors duration-200 ${
                  isActive('/') ? 'text-primary-600' : 'text-gray-700'
                }`}
              >
                <span>Home</span>
              </Link>

              <Link
                to="/courses"
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center space-x-2 font-medium transition-colors duration-200 ${
                  location.pathname.startsWith('/courses') ? 'text-primary-600' : 'text-gray-700'
                }`}
              >
                <BookOpen className="w-5 h-5" />
                <span>Courses</span>
              </Link>

              <Link
                to="/about"
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center space-x-2 font-medium transition-colors duration-200 ${
                  isActive('/about') ? 'text-primary-600' : 'text-gray-700'
                }`}
              >
                <Info className="w-5 h-5" />
                <span>About</span>
              </Link>

              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center space-x-2 font-medium transition-colors duration-200 ${
                  isActive('/contact') ? 'text-primary-600' : 'text-gray-700'
                }`}
              >
                <Phone className="w-5 h-5" />
                <span>Contact</span>
              </Link>

              <Link
                to="/courses"
                onClick={() => setIsMenuOpen(false)}
                className="btn-primary inline-block text-center mt-4"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;