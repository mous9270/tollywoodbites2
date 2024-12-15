import React from 'react';
import { Menu } from 'lucide-react';
import AnimatedButton from './AnimatedButton';

const Header = ({ isHeaderActive, isHeaderHidden, isNavActive, setIsNavActive }) => (
    <header 
      className={`fixed w-full z-30 transition-all duration-300 ${
        isHeaderActive ? 'bg-[#0D0D0D]' : ''
      } ${isHeaderHidden ? '-translate-y-full' : ''}`} 
      style={{ top: '40px' }}
    >
      <div className="flex items-center justify-between px-4 py-4">
        <div className="flex items-center">
          <a href="#" className="z-10">
            <img src="/logo.svg" alt="TollywoodBites" className="h-24 w-auto mb-4" />
          </a>
        </div>
  
        <div className="flex items-center space-x-6">
          <AnimatedButton secondary>ORDER NOW</AnimatedButton>
          <button 
            className="md:hidden text-white"
            onClick={() => setIsNavActive(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );

export default Header;