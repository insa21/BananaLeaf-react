import React from 'react';
import { teamMembers } from '../data';

const About = () => {
  return (
    <div className="bg-neutral-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary to-secondary py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.toptal.com/designers/subtlepatterns/uploads/double-bubble-outline.png')] bg-cover opacity-20"></div>
        <div className="container mx-auto px-4 relative">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-4">
            About Us
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Learn more about our team and our mission
          </p>
        </div>
      </div>

      {/* Team Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            The talented individuals behind BananaLeaf
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary-900 mb-2">{member.name}</h3>
                <p className="text-neutral-600 font-medium mb-2">{member.position}</p>
                <p className="text-neutral-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;