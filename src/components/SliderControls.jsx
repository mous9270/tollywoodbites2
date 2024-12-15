// components/SliderControls.jsx
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SliderControls = ({ onPrev, onNext }) => (
  <>
    <button
      onClick={onPrev}
      className="absolute left-8 top-1/2 -translate-y-1/2 w-12 h-12 border border-[#FBA40E] text-[#FBA40E] hover:bg-[#FBA40E] hover:text-black transition-colors grid place-items-center rotate-45"
    >
      <ChevronLeft className="-rotate-45" />
    </button>
    <button
      onClick={onNext}
      className="absolute right-8 top-1/2 -translate-y-1/2 w-12 h-12 border border-[#FBA40E] text-[#FBA40E] hover:bg-[#FBA40E] hover:text-black transition-colors grid place-items-center rotate-45"
    >
      <ChevronRight className="-rotate-45" />
    </button>
  </>
);

export default SliderControls;