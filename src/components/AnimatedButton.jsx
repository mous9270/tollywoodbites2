import { useState } from 'react';

const AnimatedButton = ({ 
  children, 
  secondary = false,
  className = ""
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Updated colors to use #FBA40E
  const baseColors = secondary 
    ? {
        background: 'bg-[#FBA40E]',  // Using the custom color for secondary
        text: 'text-black',
        border: 'border-[#FBA40E]',
        hoverText: 'text-white'
      }
    : {
        background: 'bg-transparent',
        text: 'text-[#FBA40E]',      // Using the custom color for primary
        border: 'border-[#FBA40E]',
        hoverText: 'text-black'
      };

  return (
    <button 
      className={`
        relative overflow-hidden
        px-16 py-4              
        border-2 
        font-bold 
        text-sm                
        tracking-widest
        uppercase
        transition-colors
        duration-500
        ${baseColors.background}
        ${baseColors.text}
        ${baseColors.border}
        ${className}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Circle reveal background */}
      <div 
        className={`
          absolute 
          left-1/2 
          -translate-x-1/2
          w-[300%]
          aspect-square 
          rounded-full
          transition-all
          duration-500
          ${secondary ? 'bg-black' : 'bg-[#FBA40E]'}
          ${isHovered ? 'bottom-[-150%]' : 'bottom-full'}
        `}
      />

      {/* Main text */}
      <span 
        className={`
          relative
          block
          transition-transform
          duration-500
          z-10
          ${isHovered ? '-translate-y-12' : 'translate-y-0'}
        `}
      >
        {children}
      </span>

      {/* Hidden text that slides up */}
      <span 
        className={`
          absolute
          w-full
          left-0
          transition-transform
          duration-500
          z-10
          ${isHovered ? '-translate-y-5' : 'translate-y-10'}
          ${baseColors.hoverText}
        `}
        aria-hidden="true"
      >
        {children}
      </span>
    </button>
  );
};

export default AnimatedButton;