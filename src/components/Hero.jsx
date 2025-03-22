import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-[70vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-primary/90"></div>
        <img 
          src="/banana-leaves-bg.jpg" 
          alt="Banana Leaves" 
          className="w-full h-full object-cover object-center"
        />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-down">
          Premium <span className="text-secondary">Banana Leaves</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-2xl mx-auto">
          Sustainably sourced, naturally perfect. Export quality banana leaves for culinary and eco-friendly packaging needs.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-secondary hover:bg-accent text-white px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105">
            Explore Products
          </button>
          <button className="border-2 border-white hover:border-secondary text-white hover:text-secondary px-8 py-3 rounded-full font-bold transition-all">
            Contact Supplier
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;