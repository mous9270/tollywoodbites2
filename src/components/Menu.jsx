import React, { useState } from "react";
import menuData from "./menuData.jsx";

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
        <h4 className="text-white text-lg font-medium">{item.name}</h4>
        <span className="text-[#FBA40E] font-bold text-lg">${item.price.toFixed(2)}</span>
      </div>
    );
  };

  return (
    <section className="relative min-h-screen bg-black py-24 overflow-hidden" id="menu">
      <div className="container mx-auto px-4">
        {/* Title Section */}
        <div className="text-center mb-16">
          <p className="text-[#FBA40E] text-sm font-bold tracking-[0.4em] uppercase mb-4">
            Our Menu
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-white">
            Discover Our Delicacies
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Category Navigation */}
          <div className="w-full lg:w-1/4">
            <div className="overflow-x-auto whitespace-nowrap flex space-x-4 p-4 bg-black/50 rounded-lg border border-white/10">
              {menuData.categories.map((category, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveCategory(category.name)}
                  className={`px-6 py-3 rounded-lg ${
                    activeCategory === category.name
                      ? "bg-[#FBA40E] text-black font-bold"
                      : "text-white bg-white/10 hover:bg-[#FBA40E]/10"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Menu Items */}
          <div className="w-full lg:w-3/4">
            <div className="p-6 bg-black/50 rounded-lg border border-white/10">
              <h3 className="text-[#FBA40E] font-serif text-3xl mb-8">{activeCategory}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {menuData.categories
                  .find((cat) => cat.name === activeCategory)
                  ?.items.map((item, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-lg border border-white/10 hover:border-[#FBA40E] transition-colors"
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
