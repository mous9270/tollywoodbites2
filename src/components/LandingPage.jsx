import React, { useState, useEffect, useCallback } from 'react';
import InfoBar from './InfoBar';
import Header from './Header';
import HeroSlide from './HeroSlide';
import SliderControls from './SliderControls';
import OrderButton from './OrderButton';

const slides = [
  {
    image: "/hero-slider-1.jpg",
    subtitle: "amazing & delicious",
    title: "Where every flavor\ntells a story",
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
    subtitle: "Traditional & Hygiene",
    title: "For the love of\nflavorful bites",
    text: "Gather your crew for a blockbuster feast on wheels!"
  }
];

const LandingPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isNavActive, setIsNavActive] = useState(false);
  const [isHeaderActive, setIsHeaderActive] = useState(false);
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);
  const [lastScrollPos, setLastScrollPos] = useState(0);

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

  const slideNext = () => setCurrentSlide(prev => prev >= slides.length - 1 ? 0 : prev + 1);
  const slidePrev = () => setCurrentSlide(prev => prev <= 0 ? slides.length - 1 : prev - 1);

  return (
    <div className="min-h-screen bg-black text-white">
      <InfoBar />
      
      <Header 
        isHeaderActive={isHeaderActive}
        isHeaderHidden={isHeaderHidden}
        isNavActive={isNavActive}
        setIsNavActive={setIsNavActive}
      />

      <section className="relative min-h-screen pt-40 overflow-hidden">
        {slides.map((slide, index) => (
          <HeroSlide 
            key={index}
            slide={slide}
            isActive={currentSlide === index}
          />
        ))}

        <SliderControls onPrev={slidePrev} onNext={slideNext} />
        <OrderButton />
      </section>

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