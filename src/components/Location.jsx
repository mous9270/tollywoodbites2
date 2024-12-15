import React from 'react';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';
import AnimatedButton from './AnimatedButton';

const LocationSection = () => {
  const handleMapClick = () => {
    window.open('https://www.google.com/maps/dir//601+Fort+Worth+Dr,+Denton,+TX+76201,+United+States/@33.1874407,-97.1250665,14.52z/data=!4m8!4m7!1m0!1m5!1m1!1s0x864dcbfec00b8863:0xcd509ed78ca5e3f1!2m2!1d-97.1367077!2d33.1996591?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D', '_blank');
  };

  return (
    <section className="min-h-screen bg-[#0D0D0D] flex flex-col md:flex-row">
      {/* Left Content Section */}
      <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
        <div className="max-w-xl">
          <p className="text-[#FBA40E] text-sm font-bold tracking-[0.4em] uppercase mb-4">
            Visit Us
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-8 text-white">
            Experience Authentic Indian Flavors
          </h2>
          
          {/* Location Info */}
          <div className="space-y-6 mb-12">
            <div className="flex items-start gap-4">
              <MapPin className="h-6 w-6 text-[#FBA40E] mt-1" />
              <div>
                <h3 className="text-white font-bold mb-2">Our Location</h3>
                <p className="text-white/80">601 Fort worth Dr, Denton, Texas, 76201, USA</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <Clock className="h-6 w-6 text-[#FBA40E] mt-1" />
              <div>
                <h3 className="text-white font-bold mb-2">Opening Hours</h3>
                <p className="text-white/80">Daily: 5:00 pm to 1:00 am</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <Phone className="h-6 w-6 text-[#FBA40E] mt-1" />
              <div>
                <h3 className="text-white font-bold mb-2">Contact Number</h3>
                <a href="tel:+18177213918" className="text-white/80 hover:text-[#FBA40E] transition-colors">
                  +1 (817) 721-3918
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <Mail className="h-6 w-6 text-[#FBA40E] mt-1" />
              <div>
                <h3 className="text-white font-bold mb-2">Email Address</h3>
                <a href="mailto:tollywoodbitesdenton@gmail.com" className="text-white/80 hover:text-[#FBA40E] transition-colors">
                  tollywoodbitesdenton@gmail.com
                </a>
              </div>
            </div>
          </div>
          
          <AnimatedButton onClick={handleMapClick}>
            Get Directions
          </AnimatedButton>
        </div>
      </div>

      {/* Right Map Section */}
      <div className="w-full md:w-1/2 min-h-[400px] md:min-h-screen relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.638382658!2d-97.13670772355226!3d33.19965907253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864dcbfec00b8863%3A0xcd509ed78ca5e3f1!2s601%20Fort%20Worth%20Dr%2C%20Denton%2C%20TX%2076201!5e0!3m2!1sen!2sus!4v1702663494559!5m2!1sen!2sus"
          className="absolute inset-0 w-full h-full"
          style={{ filter: 'invert(90%) hue-rotate(180deg)' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-click"
        />
        <div 
          className="absolute inset-0 cursor-pointer hover:bg-[#FBA40E]/10 transition-colors"
          onClick={handleMapClick}
        />
      </div>
    </section>
  );
};

export default LocationSection;