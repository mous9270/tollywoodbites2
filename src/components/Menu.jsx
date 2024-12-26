import React, { useState } from "react";
import menuData from "./menuData.jsx";

const FoodMenu = () => {
  const [activeCategory, setActiveCategory] = useState(menuData.categories[0].name);

  const renderMenuItem = (item) => (
    <div className="py-2 border-b border-white/10">
      <h4 className="text-white text-sm font-medium capitalize">{item.name}</h4>
    </div>
  );

  return (
    <section
    className="bg-[#0D0D0D] min-h-screen relative overflow-hidden z-0" // Ensure z-index is set properly
    id="menu"
  >
    {/* Background Shapes */}
    <img
      src="/public/shape-5.png"
      alt="shape-5"
      className="absolute transform animate-oscillate w-240 opacity-40 z-[-1]" // Send background behind content
    />
    <img
      src="/public/shape-6.png"
      alt="shape-6"
      className="absolute right-0 bottom-0 transform animate-oscillate w-240 opacity-40 z-[-1]" // Send background behind content
    />
  
    <div className="container mx-auto px-4">
      {/* Header */}
      <div className="text-center mb-16 pt-16">
        <p className="text-[#FBA40E] text-sm font-bold tracking-[0.4em] uppercase mb-4">
          Our Services
        </p>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-8">
          Catering
        </h2>
      </div>
  
      {/* Category Navigation */}
      <div className="overflow-x-auto whitespace-nowrap flex justify-center space-x-8 mb-12 border-b border-white/10 pb-2">
        {menuData.categories.map((category, idx) => (
          <button
            key={idx}
            onClick={() => setActiveCategory(category.name)}
            className={`text-sm uppercase tracking-wide pb-1 border-b-2 transition-colors duration-200 ${
              activeCategory === category.name
                ? "border-[#FBA40E] text-[#FBA40E]"
                : "border-transparent hover:border-white/30 text-white/70 hover:text-white"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
  
      {/* Menu Items */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {menuData.categories
          .find((cat) => cat.name === activeCategory)
          ?.items.map((item, index) => (
            <div
              key={index}
              className="bg-black/50 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:border-[#FBA40E] transition-colors duration-300"
            >
              {renderMenuItem(item)}
            </div>
          ))}
      </div>
    </div>
  </section>
  
  );
};

export default FoodMenu;
