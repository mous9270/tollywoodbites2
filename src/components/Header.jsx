import React from 'react';
import { Menu } from 'lucide-react';
import AnimatedButton from './AnimatedButton';
import Navigation from './Navigation';

const Header = ({ isHeaderActive, isHeaderHidden, isNavActive, setIsNavActive }) => (
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

        {/* Center: Navigation */}
        <div className="hidden md:flex flex-1 justify-center">
          <Navigation isNavActive={isNavActive} setIsNavActive={setIsNavActive} />
        </div>

        {/* Right: Button */}
        <div className="hidden md:block">
          <AnimatedButton secondary>ORDER NOW</AnimatedButton>
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-white hover:text-[#FBA40E] transition-colors"
          onClick={() => setIsNavActive(true)}
        >
          <Menu size={24} />
        </button>
      </div>
    </div>

    {/* Mobile Navigation */}
    {isNavActive && (
      <div className="md:hidden">
        <Navigation isNavActive={isNavActive} setIsNavActive={setIsNavActive} />
      </div>
    )}
  </header>
);

export default Header;
