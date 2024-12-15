// components/Header.jsx
import React from 'react';
import { Menu } from 'lucide-react';
import Navigation from './Navigation';

const Header = ({ isHeaderActive, isHeaderHidden, isNavActive, setIsNavActive }) => (
  <header className={`fixed w-full z-30 transition-all duration-300 ${isHeaderActive ? 'bg-black/95' : ''} ${isHeaderHidden ? '-translate-y-full' : ''}`} style={{ top: '40px' }}>
    <div className="container mx-auto px-4 py-4 flex justify-between items-center">
      <a href="#" className="z-10">
        <img src="/logo.svg" alt="TollywoodBites" className="h-16 w-auto" />
      </a>

      <Navigation isNavActive={isNavActive} setIsNavActive={setIsNavActive} />

      <div className="flex items-center">
        <button className="px-8 py-4 bg-[#FBA40E] text-black text-sm font-bold tracking-wider hover:bg-[#FBA40E]/90 transition-all duration-300">
          ORDER NOW
        </button>
        <button 
          className="md:hidden ml-4 text-white"
          onClick={() => setIsNavActive(true)}
        >
          <Menu size={24} />
        </button>
      </div>
    </div>
  </header>
);

export default Header;