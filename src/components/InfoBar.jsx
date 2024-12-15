import React from 'react';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

const InfoBar = () => {
    return (
      <div className="fixed top-0 left-0 w-full z-40 py-2">
        <div className="flex items-center justify-between px-4">
          <div className="flex items-center space-x-6">
            <div className="flex items-center gap-2 text-white/80">
              <MapPin className="h-4 w-4" />
              <span className="text-xs">601 Fort worth Dr, Denton, Texas, 76201, USA</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <Clock className="h-4 w-4" />
              <span className="text-xs">Daily : 5:00 pm to 1:00 am</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            <a href="tel:+18177213918" className="flex items-center gap-2 text-white/80 hover:text-[#FBA40E] transition-colors">
              <Phone className="h-4 w-4" />
              <span className="text-xs">+1 (817) 721-3918</span>
            </a>
            <a href="mailto:tollywoodbitesdenton@gmail.com" className="flex items-center gap-2 text-white/80 hover:text-[#FBA40E] transition-colors">
              <Mail className="h-4 w-4" />
              <span className="text-xs">tollywoodbitesdenton@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    );
  };

export default InfoBar;