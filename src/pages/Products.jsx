import React from 'react';

const Products = () => {
  return (
    <div className="container mx-auto py-16">
      <h1 className="text-4xl font-bold mb-8">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Sample product cards */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <img src="/placeholder.jpg" alt="Fresh Banana Leaves" className="w-full h-48 object-cover rounded mb-4" />
          <h3 className="text-xl font-semibold">Fresh Banana Leaves</h3>
          <p className="text-gray-600 mb-4">Premium quality fresh banana leaves for food packaging</p>
          <p className="text-primary font-bold">$5.99 / pack</p>
        </div>
        {/* Add more product cards */}
      </div>
    </div>
  );
};

export default Products;