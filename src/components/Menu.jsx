import React, { useState } from "react";
import AnimatedButton from './AnimatedButton';

const FoodMenu = () => {
  const categories = [
    { id: 1, name: "Snacks" },
    { id: 2, name: "Tiffins" },
    { id: 3, name: "Chat" },
    { id: 4, name: "Meals" },
    { id: 5, name: "Fast Food" },
  ];

  const foodItems = {
    Snacks: [
      { name: "Samosa (2 pcs)", price: "3.99" },
      { name: "Spring Potato", price: "4.99" },
      { name: "Mirchi Bajji", price: "5.99" },
    ],
    Tiffins: [
      { name: "Idly", price: "4.99" },
      { name: "Ghee Karam Idly", price: "5.99" },
      { name: "Masala Dosa", price: "6.99" },
    ],
    Chat: [
      { name: "Pani Puri", price: "5.99" },
      { name: "Samosa Chat", price: "6.99" },
      { name: "Dahi Puri", price: "3.99" },
    ],
    Meals: [
      { name: "Chicken Biriyani", price: "10.99" },
      { name: "Veg Meals", price: "8.99" },
    ],
    "Fast Food": [
      { name: "Noodles", price: "6.99" },
      { name: "Fried Rice", price: "7.99" },
      { name: "Manchurian", price: "8.99" },
    ],
  };

  const [activeCategory, setActiveCategory] = useState("Snacks");

  return (
    <section className="min-h-screen bg-[#0D0D0D] py-24">
      <div className="container mx-auto px-4">
        {/* Title Section */}
        <div className="text-center mb-16">
          <p className="text-[#FBA40E] text-sm font-bold tracking-[0.4em] uppercase mb-4">
            Our Menu
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-8">
            Discover Our Delicacies
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
          {/* Left Panel - Categories */}
          <div className="w-full lg:w-1/3">
            <div className="bg-black/50 backdrop-blur-sm p-6 rounded-lg border border-white/10">
              <h3 className="text-white font-bold text-xl mb-6">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
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
                {foodItems[activeCategory].map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center p-4 rounded-lg border border-white/10 hover:border-[#FBA40E] transition-colors duration-300"
                  >
                    <div className="flex-1">
                      <h4 className="text-white text-lg font-medium">
                        {item.name}
                      </h4>
                    </div>
                    <div className="flex items-center gap-8">
                      <span className="text-[#FBA40E] font-bold text-lg">
                        ${item.price}
                      </span>
                      <AnimatedButton secondary className="px-6 py-2">
                        Order
                      </AnimatedButton>
                    </div>
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