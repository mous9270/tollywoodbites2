import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Clock, Phone, Mail, Menu, X } from 'lucide-react';

const LandingPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isNavActive, setIsNavActive] = useState(false);
  const [isHeaderActive, setIsHeaderActive] = useState(false);
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);
  const [lastScrollPos, setLastScrollPos] = useState(0);

  const slides = [
    {
      image: "/hero-slider-1.jpg",
      subtitle: "Traditional & Hygiene",
      title: "For the love of\nflavorful bites",
      text: "Gather your crew for a blockbuster feast on wheels!"
    },
    {
      image: "/hero-slider-2.jpg",
      subtitle: "Blockbuster Experience",
      title: "Flavors Inspired by\nEpic Stories",
      text: "Gather your crew for a blockbuster feast on wheels!"
    },
    {
      image: "/hero-slider-3.jpg",
      subtitle: "amazing & delicious",
      title: "Where every flavor\ntells a story",
      text: "Gather your crew for a blockbuster feast on wheels!"
    }
  ];

  const handleScroll = useCallback(() => {
    const isScrollBottom = lastScrollPos < window.scrollY;
    setIsHeaderHidden(isScrollBottom);
    setLastScrollPos(window.scrollY);
    setIsHeaderActive(window.scrollY >= 50);
  }, [lastScrollPos]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev >= slides.length - 1 ? 0 : prev + 1));
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const slideNext = () => {
    setCurrentSlide(prev => prev >= slides.length - 1 ? 0 : prev + 1);
  };

  const slidePrev = () => {
    setCurrentSlide(prev => prev <= 0 ? slides.length - 1 : prev - 1);
  };

  return (
    <div className="min-h-screen bg-[#090B0B] text-white">
      {/* Topbar */}
      <div className="hidden md:block fixed top-0 left-0 w-full border-b border-white/20 z-40 bg-[#090B0B]">
        <div className="container mx-auto px-4 py-2 flex justify-center items-center gap-8">
          <a href="tel:8177213918" className="flex items-center gap-2 hover:text-[#B5986D] transition-colors">
            <Phone size={16} />
            <span className="text-sm">+1 (817) 721-3918</span>
          </a>
          <a href="mailto:tollywoodbitesdenton@gmail.com" className="flex items-center gap-2 hover:text-[#B5986D] transition-colors">
            <Mail size={16} />
            <span className="text-sm">tollywoodbitesdenton@gmail.com</span>
          </a>
        </div>
      </div>

      {/* Header */}
      <header className={`fixed w-full z-30 transition-all duration-300 ${isHeaderActive ? 'bg-[#090B0B]/95' : ''} ${isHeaderHidden ? '-translate-y-full' : ''}`} style={{ top: isHeaderActive ? '0' : '51px' }}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#" className="z-10">
            <img src="/logo.svg" alt="TollywoodBites" className="h-12 w-auto" />
          </a>

          {/* Navigation */}
          <div className={`fixed md:relative top-0 ${isNavActive ? 'right-0' : '-right-full'} md:right-0 w-full max-w-sm md:max-w-none h-screen md:h-auto bg-[#090B0B] md:bg-transparent transition-all duration-300 md:transition-none z-50`}>
            <nav className="p-8 md:p-0">
              <button 
                className="md:hidden absolute top-4 right-4 text-white"
                onClick={() => setIsNavActive(false)}
              >
                <X size={24} />
              </button>
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                <a href="#" className="text-sm font-bold tracking-wider hover:text-[#B5986D] transition-colors">HOME</a>
                <a href="#" className="text-sm font-bold tracking-wider hover:text-[#B5986D] transition-colors">MENU</a>
                <a href="#" className="text-sm font-bold tracking-wider hover:text-[#B5986D] transition-colors">ABOUT US</a>
                <a href="#" className="text-sm font-bold tracking-wider hover:text-[#B5986D] transition-colors">CONTACT</a>
              </div>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden md:block px-6 py-3 border-2 border-[#B5986D] text-[#B5986D] text-sm font-bold tracking-wider hover:bg-[#B5986D] hover:text-black transition-all duration-300">
              ORDER NOW
            </button>
            <button 
              className="md:hidden text-white"
              onClick={() => setIsNavActive(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen pt-32 pb-16 overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0">
              <img 
                src={slide.image}
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50" />
            </div>
            
            <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
              <p className="text-[#B5986D] text-sm font-bold tracking-[0.4em] uppercase mb-4">{slide.subtitle}</p>
              <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-4 whitespace-pre-line">{slide.title}</h1>
              <p className="text-lg mb-8">{slide.text}</p>
              <button className="px-8 py-3 border-2 border-[#B5986D] text-[#B5986D] text-sm font-bold tracking-wider hover:bg-[#B5986D] hover:text-black transition-all duration-300">
                VIEW OUR MENU
              </button>
            </div>
          </div>
        ))}

        {/* Slider Controls */}
        <button
          onClick={slidePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 border border-[#B5986D] text-[#B5986D] hover:bg-[#B5986D] hover:text-black transition-colors grid place-items-center rotate-45"
        >
          <ChevronLeft className="-rotate-45" />
        </button>
        <button
          onClick={slideNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 border border-[#B5986D] text-[#B5986D] hover:bg-[#B5986D] hover:text-black transition-colors grid place-items-center rotate-45"
        >
          <ChevronRight className="-rotate-45" />
        </button>

        {/* Order Now Button */}
        <a href="#" className="absolute bottom-8 right-8 w-28 h-28 bg-[#B5986D] flex flex-col items-center justify-center text-black">
          <img src="/hero-icon.png" alt="Order" className="w-12 h-12 mb-2" />
          <span className="text-xs font-bold tracking-wider">ORDER NOW</span>
        </a>
      </section>

      {/* Overlay for mobile menu */}
      {isNavActive && (
        <div 
          className="fixed inset-0 bg-black/80 z-40 md:hidden"
          onClick={() => setIsNavActive(false)}
        />
      )}
    </div>
  );
};

export default LandingPage;