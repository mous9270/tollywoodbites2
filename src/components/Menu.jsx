import React, { useState } from "react";
import menuData from "./menuData.jsx"; // Updated import path with correct extension

const FoodMenu = () => {
  const [activeCategory, setActiveCategory] = useState(menuData.categories[0].name);

  const renderMenuItem = (item) => {
    if (item.variants) {
      return (
        <div className="flex flex-col gap-2">
          <h4 className="text-white text-lg font-medium">{item.name}</h4>
          <div className="pl-4 space-y-2">
            {item.variants.map((variant, vIdx) => (
              <div key={vIdx} className="flex justify-between items-center">
                <span className="text-white/70 text-sm capitalize">
                  {variant.type}
                </span>
                <span className="text-[#FBA40E] font-bold">
                  ${variant.price.toFixed(2)}
                </span>
              </div>
            ))}
          </div>
        </div>
      );
    }

    return (
      <div className="flex justify-between items-center">
        <h4 className="text-white text-lg font-medium">
          {item.name}
        </h4>
        <span className="text-[#FBA40E] font-bold text-lg">
          ${item.price.toFixed(2)}
        </span>
      </div>
    );
  };

  return (
    <section className="relative min-h-screen bg-black py-24 overflow-hidden" id="menu">
      {/* Oscillating Shapes */}
      <img
        src="./shape-1.png"
        alt="Decorative"
        className="absolute left-0 bottom-0 w-1/4 opacity-60 animate-oscillate"
      />
      <img
        src="./shape-2.png"
        alt="Decorative"
        className="absolute right-0 top-0 w-1/4 opacity-60 animate-oscillate"
      />

      <div className="container mx-auto px-4">
        {/* Title Section */}
        <div className="text-center mb-16 relative z-10">
          <p className="text-[#FBA40E] text-sm font-bold tracking-[0.4em] uppercase mb-4">
            Our Menu
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-8">
            Discover Our Delicacies
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto relative z-10">
          {/* Left Panel - Categories */}
          <div className="w-full lg:w-1/3">
            <div className="bg-black/50 backdrop-blur-sm p-6 rounded-lg border border-white/10">
              <h3 className="text-white font-bold text-xl mb-6">Categories</h3>
              <div className="space-y-2">
                {menuData.categories.map((category, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveCategory(category.name)}
                    className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                      activeCategory === category.name
                        ? "bg-[#FBA40E] text-black font-bold"
                        : "text-white hover:bg-white/10"
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Panel - Menu Items */}
          <div className="w-full lg:w-2/3">
            <div className="bg-black/50 backdrop-blur-sm p-6 rounded-lg border border-white/10">
              <h3 className="text-[#FBA40E] font-serif text-3xl mb-8">
                {activeCategory}
              </h3>
              <div className="space-y-4">
                {menuData.categories
                  .find(cat => cat.name === activeCategory)
                  ?.items.map((item, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-lg border border-white/10 hover:border-[#FBA40E] transition-colors duration-300"
                    >
                      {renderMenuItem(item)}
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodMenu;