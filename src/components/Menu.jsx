import React, { useState } from "react";
import menuData from "./menuData.jsx";

const FoodMenu = () => {
  const [activeCategory, setActiveCategory] = useState(menuData.categories[0].name);

  const renderMenuItem = (item) => (
    <div className="py-4 border-b border-white/10 flex justify-between items-center">
      <h4 className="text-white text-2xl font-medium capitalize">{item.name}</h4>
      {item.variants ? (
        <div className="text-right">
          {item.variants.map((variant, idx) => (
            <div key={idx} className="text-white/70 text-2xl">
              {variant.type}: ${variant.price}
            </div>
          ))}
        </div>
      ) : (
        <span className="text-white/70 text-2xl">${item.price}</span>
      )}
    </div>
  );

  return (
    <section
      className="bg-[#0D0D0D] min-h-screen relative overflow-hidden z-0"
      id="menu"
    >
      <img
        src="/public/shape-5.png"
        alt="shape-5"
        className="absolute transform animate-oscillate w-240 opacity-80 z-[-1]"
      />
      <img
        src="/public/shape-6.png"
        alt="shape-6"
        className="absolute right-0 bottom-0 transform animate-oscillate w-240 opacity-80 z-[-1]"
      />
    
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 pt-16">
          <p className="text-[#FBA40E] text-2xl font-bold tracking-[0.4em] uppercase mb-4">
            Our Menu
          </p>
          <h2 className="font-serif text-6xl md:text-7xl lg:text-8xl text-white mb-8">
            Discover Our Delicacies
          </h2>
        </div>
    
        <div className="relative mb-12">
          <div className="flex flex-wrap justify-center gap-6 px-4 pb-2 border-b border-white/10">
            {menuData.categories.map((category, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCategory(category.name)}
                className={`text-lg uppercase tracking-wide pb-1 border-b-2 transition-colors duration-200 ${
                  activeCategory === category.name
                    ? "border-[#FBA40E] text-[#FBA40E]"
                    : "border-transparent hover:border-white/30 text-white/70 hover:text-white"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
    
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuData.categories
            .find((cat) => cat.name === activeCategory)
            ?.items.map((item, index) => (
              <div
                key={index}
                className="bg-black/50 backdrop-blur-sm p-8 rounded-lg border border-white/10 hover:border-[#FBA40E] transition-colors duration-300"
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