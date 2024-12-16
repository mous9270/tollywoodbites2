import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import AnimatedButton from './AnimatedButton';

const Navigation = ({ isNavActive, setIsNavActive }) => {
  const [activeSection, setActiveSection] = useState('home');

  // ... keep existing scrollToSection and useEffect functions ...

  const navLinks = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT' },
    { id: 'menu', label: 'MENU' },
    { id: 'location', label: 'LOCATION' },
    { id: 'gallery', label: 'GALLERY' },
    { id: 'contact', label: 'CONTACT' }
  ];

  return (
    <div className={`fixed md:relative top-0 ${isNavActive ? 'right-0' : '-right-full'} md:right-0 w-full max-w-sm md:max-w-none h-screen md:h-auto bg-black md:bg-transparent transition-all duration-300 md:transition-none z-50`}>
      <nav className="p-8 md:p-0">
        <button 
          className="md:hidden absolute top-4 right-4 text-white hover:text-[#FBA40E] transition-colors"
          onClick={() => setIsNavActive(false)}
        >
          <X size={24} />
        </button>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-8">
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
      </nav>
    </div>
  );
};

export default Navigation;