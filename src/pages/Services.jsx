import React from 'react';
import { servicesData } from '../data';

const Services = () => {
  return (
    <div className="bg-neutral-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary to-secondary py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.toptal.com/designers/subtlepatterns/uploads/double-bubble-outline.png')] bg-cover opacity-20"></div>
        <div className="container mx-auto px-4 relative">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-4">
            Our Services
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Comprehensive solutions for your digital needs
          </p>
        </div>
      </div>

      {/* Services Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <img src={service.icon} alt={service.title} className="w-10 h-10 mr-3" />
                  <h3 className="text-xl font-bold text-primary-900">{service.title}</h3>
                </div>
                <p className="text-neutral-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;