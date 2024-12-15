import React, { useState } from "react";

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
    <div className="flex flex-col md:flex-row h-screen bg-[#FAF3E0] text-[#333]">
      {/* Left Panel */}
      <div className="w-full md:w-1/3 bg-[#FFFFFF] p-6 shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Categories</h2>
        <ul>
          {categories.map((category) => (
            <li
              key={category.id}
              onClick={() => setActiveCategory(category.name)}
              className={`cursor-pointer p-4 mb-2 rounded-lg transition-all ${
                activeCategory === category.name
                  ? "bg-[#FBA40E] text-white font-semibold"
                  : "hover:bg-[#FBA40E]/20"
              }`}
            >
              {category.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Right Panel */}
      <div className="w-full md:w-2/3 p-6">
        <h2 className="text-3xl font-bold text-[#FBA40E] mb-6">
          {activeCategory}
        </h2>
        <div className="grid gap-4">
          {foodItems[activeCategory].map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-white p-4 shadow-md rounded-md hover:shadow-lg transition"
            >
              <span className="font-semibold text-lg">{item.name}</span>
              <span className="text-[#FBA40E] font-bold text-lg">
                ${item.price}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoodMenu;
