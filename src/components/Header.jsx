import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import AnimatedButton from './AnimatedButton';

const Header = ({ isHeaderActive, isHeaderHidden, isNavActive, setIsNavActive }) => {
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT' },
    { id: 'menu', label: 'MENU' },
    { id: 'location', label: 'LOCATION' },
    { id: 'gallery', label: 'GALLERY' },
    { id: 'contact', label: 'CONTACT' }
  ];

  return (
    <>
      <header
        className={`fixed w-full z-30 transition-all duration-300 ${
          isHeaderActive ? 'bg-[#0D0D0D]' : ''
        } ${isHeaderHidden ? '-translate-y-full' : ''}`}
        style={{ top: '40px' }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Left: Logo */}
            <div className="flex-shrink-0">
              <a href="#home">
                <img src="/logo.svg" alt="TollywoodBites" className="h-24 w-auto" />
              </a>
            </div>

            {/* Center: Navigation Links (Desktop) */}
            <div className="hidden md:flex flex-1 justify-center">
              <div className="flex items-center justify-center gap-8">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className={`text-sm font-bold tracking-wider transition-colors ${
                      activeSection === link.id ? 'text-[#FBA40E]' : 'text-white hover:text-[#FBA40E]'
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Right: CTA Button & Mobile Menu */}
            <div className="flex items-center gap-4">
              <div className="hidden md:block">
                <AnimatedButton secondary>ORDER NOW</AnimatedButton>
              </div>
              <button
                className="md:hidden text-white hover:text-[#FBA40E] transition-colors"
                onClick={() => setIsNavActive(true)}
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      <div 
        className={`fixed top-0 ${isNavActive ? 'right-0' : '-right-full'} 
          w-full max-w-sm h-screen bg-black transition-all duration-300 z-50 
          md:hidden`}
      >
        <nav className="p-8">
          <button 
            className="absolute top-4 right-4 text-white hover:text-[#FBA40E] transition-colors"
            onClick={() => setIsNavActive(false)}
          >
            <X size={24} />
          </button>
          <div className="flex flex-col items-center gap-8 mt-16">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  scrollToSection(link.id);
                  setIsNavActive(false);
                }}
                className={`text-sm font-bold tracking-wider transition-colors ${
                  activeSection === link.id ? 'text-[#FBA40E]' : 'text-white hover:text-[#FBA40E]'
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="mt-8">
              <AnimatedButton secondary>ORDER NOW</AnimatedButton>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Navigation Backdrop */}
      {isNavActive && (
        <div 
          className="fixed inset-0 bg-black/80 z-40 md:hidden"
          onClick={() => setIsNavActive(false)}
        />
      )}
    </>
  );
};

export default Header;