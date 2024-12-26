import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import AnimatedButton from './AnimatedButton';

const Header = ({ isHeaderActive, isHeaderHidden, isNavActive, setIsNavActive }) => {
  const [activeSection, setActiveSection] = useState('home');

  const leftNavLinks = [
    { id: 'home', label: 'HOME' },
    { id: 'location', label: 'LOCATION' }
  ];

  const rightNavLinks = [
    
    { id: 'menu', label: 'MENU' },
    { id: 'order', label: 'ORDER NOW' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [...leftNavLinks, ...rightNavLinks].map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 200;

      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(sections[index].id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed w-full z-30 ml-4 mt-4 transition-all duration-300 overflow-hidden
          ${isHeaderActive ? 'bg-[#0D0D0D]' : ''}
          ${isHeaderHidden ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}
        style={{ top: '40px' }}
      >
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-center justify-center gap-12 h-24">
            {/* Left Nav Links */}
            {leftNavLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-sm font-bold tracking-wider transition-colors
                  ${activeSection === link.id ? 'text-[#FBA40E]' : 'text-white hover:text-[#FBA40E]'}`}
              >
                {link.label}
              </button>
            ))}

            {/* Center Logo */}
            <a 
              href="#home" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('home');
              }}
              className="block"
            >
              <img 
                src="/logo.svg" 
                alt="TollywoodBites" 
                className="h-44 w-auto transform transition-transform hover:scale-110"
              />
            </a>

            {/* Right Nav Links */}
            {rightNavLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-sm font-bold tracking-wider transition-colors
                  ${activeSection === link.id ? 'text-[#FBA40E]' : 'text-white hover:text-[#FBA40E]'}`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
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
            {[...leftNavLinks, ...rightNavLinks].map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  scrollToSection(link.id);
                  setIsNavActive(false);
                }}
                className={`text-sm font-bold tracking-wider transition-colors
                  ${activeSection === link.id ? 'text-[#FBA40E]' : 'text-white hover:text-[#FBA40E]'}`}
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