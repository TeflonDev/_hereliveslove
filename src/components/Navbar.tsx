import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart, Menu, X, Home, BookOpen, Camera, Star, Users } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: <Home className="w-4 h-4" /> },
    { path: '/story', label: 'Our Story', icon: <BookOpen className="w-4 h-4" /> },
    { path: '/gallery', label: 'Gallery', icon: <Camera className="w-4 h-4" /> },
    { path: '/dreams', label: 'Dreams', icon: <Star className="w-4 h-4" /> },
    { path: '/about', label: 'About Us', icon: <Users className="w-4 h-4" /> },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 text-xl font-bold text-gray-800 hover:text-orange-600 transition-colors">
            <Heart className="w-6 h-6 text-rose-500" />
            <span>Tony, Maggie & Miles</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-200 ${
                  location.pathname === item.path
                    ? 'bg-orange-100 text-orange-600 font-semibold'
                    : 'text-gray-600 hover:text-orange-600 hover:bg-orange-50'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:text-orange-600 hover:bg-orange-50 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center space-x-2 px-4 py-3 rounded-lg transition-all duration-200 ${
                  location.pathname === item.path
                    ? 'bg-orange-100 text-orange-600 font-semibold'
                    : 'text-gray-600 hover:text-orange-600 hover:bg-orange-50'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;