// components/OrderButton.jsx
import React from 'react';

const OrderButton = () => (
  <div className="absolute bottom-8 right-8 w-32 h-32 bg-[#FBA40E] flex flex-col items-center justify-center text-black cursor-pointer hover:bg-[#FBA40E]/90 transition-colors">
    <div>
      <img src="/hero-icon.png" alt="Order" className="w-12 h-12 mb-2 mx-auto" />
      <span className="text-xs font-bold tracking-wider">ORDER NOW</span>
    </div>
  </div>
);

export default OrderButton;