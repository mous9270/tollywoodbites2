import React from 'react';

const AnimatedButton = ({ children, secondary }) => {
    return (
      <button className={`
        relative overflow-hidden px-8 py-4 border-2 
        ${secondary ? 'bg-[#FBA40E] text-black border-[#FBA40E]' : 'border-[#FBA40E] text-[#FBA40E]'}
        text-sm font-bold tracking-wider group
      `}>
        <div className="relative z-10 transition-transform duration-300 group-hover:-translate-y-10">
          {children}
        </div>
        <div className="absolute z-10 w-full text-center transition-all duration-300 -top-10 group-hover:translate-y-10">
          {children}
        </div>
        <div className="absolute inset-0 w-[200%] h-[200%] -bottom-full left-1/2 -translate-x-1/2 rounded-[50%] bg-[#FBA40E] transition-all duration-500 group-hover:-bottom-1/2" />
      </button>
    );
  };

  export default AnimatedButton;