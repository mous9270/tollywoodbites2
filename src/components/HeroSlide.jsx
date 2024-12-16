import React from 'react';
import AnimatedButton from './AnimatedButton';

const HeroSlide = ({ slide, isActive }) => {
    return (
      <div 
        className={`
          absolute inset-0 
          transition-opacity duration-1000 
          ${isActive ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className={`
              w-full h-full 
              transform-gpu
              transition-all duration-[6500ms] ease-out
              ${isActive ? 'scale-110' : 'scale-100'}
            `}
          >
            <img 
              src={slide.image} 
              alt="" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <p className="text-[#FBA40E] text-sm font-bold tracking-[0.4em] uppercase mb-6">{slide.subtitle}</p>
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl mb-6 whitespace-pre-line leading-tight text-white">{slide.title}</h1>
          <p className="text-lg mb-8 text-white/80">{slide.text}</p>
          <div className={`transition-transform duration-500 ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <AnimatedButton>VIEW OUR MENU</AnimatedButton>
          </div>
        </div>
      </div>
    );
};

export default HeroSlide;