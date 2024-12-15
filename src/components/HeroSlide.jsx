// components/HeroSlide.jsx
import React from 'react';

const HeroSlide = ({ slide, isActive }) => (
  <div className={`absolute inset-0 transition-opacity duration-1000 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
    <div className="absolute inset-0">
      <img src={slide.image} alt="" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/60" />
    </div>
    
    <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
      <p className="text-[#FBA40E] text-sm font-bold tracking-[0.4em] uppercase mb-6">{slide.subtitle}</p>
      <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl mb-6 whitespace-pre-line leading-tight">{slide.title}</h1>
      <p className="text-lg mb-8 text-white/80">{slide.text}</p>
      <button className="px-8 py-4 bg-[#FBA40E] text-black text-sm font-bold tracking-wider hover:bg-[#FBA40E]/90 transition-all duration-300">
        VIEW OUR MENU
      </button>
    </div>
  </div>
);

export default HeroSlide;