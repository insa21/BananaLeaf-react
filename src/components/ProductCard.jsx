import React from 'react';

const ProductCard = ({ title, price, image }) => {
  return (
    <div className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-60 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <div className="flex justify-between items-center">
          <span className="text-secondary text-lg font-bold">${price}</span>
          <button className="bg-primary hover:bg-accent text-white px-4 py-2 rounded-lg transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;