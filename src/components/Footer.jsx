import React from 'react';
import { MapPin, Clock, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';
import AnimatedButton from './AnimatedButton';

const Footer = () => {
  const mapsUrl = "https://www.google.com/maps/dir//601+Fort+Worth+Dr,+Denton,+TX+76201,+United+States/@33.1874407,-97.1250665,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x864dcbfec00b8863:0xcd509ed78ca5e3f1!2m2!1d-97.1367077!2d33.1996591?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D";

  return (
    <footer className="bg-black" id="contact">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and About */}
          <div className="space-y-6">
            <img src="/logo.svg" alt="TollywoodBites" className="h-24 w-auto" />
            <p className="text-white/70">
              Experience the authentic flavors of Indian cuisine, crafted with passion and served with love.
            </p>
            <div className="flex space-x-4">
              
              <a href="#" className="text-white/70 hover:text-[#FBA40E] transition-colors">
                <Instagram size={24} />
              </a>
              
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-xl mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <a href="#home" className="text-white/70 hover:text-[#FBA40E] transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-white/70 hover:text-[#FBA40E] transition-colors">About Us</a>
              </li>
              <li>
                <a href="#menu" className="text-white/70 hover:text-[#FBA40E] transition-colors">Menu</a>
              </li>
              <li>
                <a href="#location" className="text-white/70 hover:text-[#FBA40E] transition-colors">Location</a>
              </li>
              <li>
                <a href="#gallery" className="text-white/70 hover:text-[#FBA40E] transition-colors">Gallery</a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-[#FBA40E] transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-xl mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="flex items-center gap-3 text-white/70 hover:text-[#FBA40E] transition-colors"
                >
                  <MapPin size={20} />
                  <span>601 Fort worth Dr, Denton, Texas, 76201, USA</span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <Clock size={20} />
                <span>Daily: 5:00 pm to 1:00 am</span>
              </li>
              <li>
                <a 
                  href="tel:+18177213918" 
                  className="flex items-center gap-3 text-white/70 hover:text-[#FBA40E] transition-colors"
                >
                  <Phone size={20} />
                  <span>+1 (817) 721-3918</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:tollywoodbitesdenton@gmail.com" 
                  className="flex items-center gap-3 text-white/70 hover:text-[#FBA40E] transition-colors"
                >
                  <Mail size={20} />
                  <span>tollywoodbitesdenton@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-white font-bold text-xl mb-6">Opening Hours</h3>
            <div className="space-y-4">
              <div className="flex justify-between text-white/70">
                <span>Monday - Sunday</span>
                <span>5:00 PM - 1:00 AM</span>
              </div>
              <AnimatedButton className="w-full">
                Order Now
              </AnimatedButton>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/70 text-center md:text-left">
              © {new Date().getFullYear()} TollywoodBites. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-white/70 hover:text-[#FBA40E] transition-colors">Privacy Policy</a>
              <a href="#" className="text-white/70 hover:text-[#FBA40E] transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;