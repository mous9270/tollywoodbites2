import React, { useState } from "react";
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  "/image_1.png",
  "/image_2.png",
  "/image_3.png",
  "/image_4.png",
  "/image_5.png",
  "/image_6.png",
  "/image_7.png",
  "/image_8.png",
];

const Gallery = () => {
  const [currentImage, setCurrentImage] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (index) => {
    setCurrentImage(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setCurrentImage(null);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImage((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImage((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  return (
    <section className="min-h-screen bg-[#0D0D0D] py-24">
      <div className="container mx-auto px-4">
        {/* Title Section */}
        <div className="text-center mb-16">
          <p className="text-[#FBA40E] text-sm font-bold tracking-[0.4em] uppercase mb-4">
            Our Gallery
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-8">
            Delicious Moments Captured
          </h2>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {images.map((src, index) => (
            <div
              key={index}
              className="relative group cursor-pointer aspect-square overflow-hidden rounded-lg"
              onClick={() => openModal(index)}
            >
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300">
                <div className="absolute inset-0 border-2 border-[#FBA40E] opacity-0 group-hover:opacity-100 m-4 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {isOpen && currentImage !== null && (
          <div 
            className="fixed inset-0 bg-black/95 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={closeModal}
          >
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 text-white hover:text-[#FBA40E] transition-colors"
              onClick={closeModal}
            >
              <X size={32} />
            </button>

            {/* Navigation Buttons */}
            <button
              className="absolute left-6 text-white hover:text-[#FBA40E] transition-colors"
              onClick={prevImage}
            >
              <ChevronLeft size={48} />
            </button>

            <button
              className="absolute right-6 text-white hover:text-[#FBA40E] transition-colors"
              onClick={nextImage}
            >
              <ChevronRight size={48} />
            </button>

            {/* Image */}
            <div className="relative max-w-[90vw] max-h-[90vh]">
              <img
                src={images[currentImage]}
                alt={`Gallery ${currentImage + 1}`}
                className="max-w-full max-h-[90vh] rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
              
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;