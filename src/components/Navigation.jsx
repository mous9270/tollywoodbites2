// components/Navigation.jsx
import React from 'react';
import { X } from 'lucide-react';

const Navigation = ({ isNavActive, setIsNavActive }) => (
  <div className={`fixed md:relative top-0 ${isNavActive ? 'right-0' : '-right-full'} md:right-0 w-full max-w-sm md:max-w-none h-screen md:h-auto bg-black md:bg-transparent transition-all duration-300 md:transition-none z-50`}>
    <nav className="p-8 md:p-0">
      <button 
        className="md:hidden absolute top-4 right-4 text-white"
        onClick={() => setIsNavActive(false)}
      >
        <X size={24} />
      </button>
      <div className="flex flex-col md:flex-row gap-8 md:gap-12">
        <a href="#" className="text-sm font-bold tracking-wider hover:text-[#FBA40E] transition-colors">HOME</a>
        <a href="#" className="text-sm font-bold tracking-wider hover:text-[#FBA40E] transition-colors">MENU</a>
        <a href="#" className="text-sm font-bold tracking-wider hover:text-[#FBA40E] transition-colors">ABOUT US</a>
        <a href="#" className="text-sm font-bold tracking-wider hover:text-[#FBA40E] transition-colors">CONTACT</a>
      </div>
    </nav>
  </div>
);

export default Navigation;