import React from 'react';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

const InfoBar = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-black/90 z-40">
      <div className="flex items-center justify-between px-4 py-1">
        <div className="flex items-center space-x-6">
          <div className="flex items-center gap-2 text-gray-300/80">
            <MapPin className="h-4 w-4" />
            <span className="text-xs">601 Fort worth Dr, Denton, Texas, 76201, USA</span>
          </div>
          <div className="flex items-center gap-2 text-gray-300/80">
            <Clock className="h-4 w-4" />
            <span className="text-xs">Daily : 5:00 pm to 1:00 am</span>
          </div>
        </div>
        
        <div className="flex items-center space-x-6">
          <a href="tel:+18177213918" className="flex items-center gap-2 text-gray-300/80 hover:text-white">
            <Phone className="h-4 w-4" />
            <span className="text-xs">+1 (817) 721-3918</span>
          </a>
          <a href="mailto:tollywoodbitesdenton@gmail.com" className="flex items-center gap-2 text-gray-300/80 hover:text-white">
            <Mail className="h-4 w-4" />
            <span className="text-xs">tollywoodbitesdenton@gmail.com</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default InfoBar;