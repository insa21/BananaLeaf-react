import React from 'react';
import Navbar from '../components/Navbar';

const Contact = () => {
  const contactInfo = [
    {
      icon: 'https://img.icons8.com/ios-filled/100/2E7D32/marker.png',
      title: 'Our Office',
      description: 'Jl. Sudirman No. 123, Jakarta Selatan, Indonesia',
      link: 'https://goo.gl/maps/ABC123XYZ',
      bgColor: 'bg-primary-100'
    },
    {
      icon: 'https://img.icons8.com/ios-filled/100/2E7D32/phone.png',
      title: 'Phone Number',
      description: '+62 21 1234 5678',
      link: 'tel:+622112345678',
      bgColor: 'bg-secondary-100'
    },
    {
      icon: 'https://img.icons8.com/ios-filled/100/2E7D32/email.png',
      title: 'Email Address',
      description: 'support@bananaleaf.id',
      link: 'mailto:support@bananaleaf.id',
      bgColor: 'bg-accent-100'
    }
  ];

  const businessHours = [
    { day: 'Monday - Friday', hours: '09:00 - 18:00' },
    { day: 'Saturday', hours: '10:00 - 15:00' },
    { day: 'Sunday', hours: 'Closed' }
  ];

  return (
    <div className="bg-neutral-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary to-secondary py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.toptal.com/designers/subtlepatterns/uploads/double-bubble-outline.png')] bg-cover opacity-20"></div>
        <div className="container mx-auto px-4 relative">
          <h1 className="text-3xl md:text-5xl font-display font-bold text-white mb-4 animate-fade-in-down">
            Contact Us
          </h1>
          <p className="text-base md:text-xl text-white/90 max-w-2xl">
            We're here to help! Reach out to us anytime.
          </p>
        </div>
      </div>

      {/* Contact Information Section */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8 mb-12 md:mb-16">
          {contactInfo.map((info, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-lg p-6 md:p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`w-20 h-20 ${info.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:scale-110`}>
                <img src={info.icon} alt={info.title} className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-primary-900 mb-3">{info.title}</h3>
              <p className="text-neutral-600 mb-6">{info.description}</p>
              <a 
                href={info.link} 
                className="inline-flex items-center text-primary-600 hover:text-primary-800 font-medium group"
                target="_blank" 
                rel="noopener noreferrer"
              >
                Contact via {info.title.split(' ')[0]}
                <svg 
                  className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-2" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* Contact Form Section */}
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="w-full mt-8 lg:mt-0">
            <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-lg group">
              <img 
                src="https://source.unsplash.com/600x400/?office,jakarta" 
                alt="Our Office" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-white/80 backdrop-blur-sm">
                <h3 className="text-lg md:text-xl font-bold text-primary-900">Business Hours</h3>
                <div className="mt-1 md:mt-2 space-y-1 text-sm md:text-base">
                  {businessHours.map((time, index) => (
                    <div key={index} className="flex justify-between text-neutral-600">
                      <span>{time.day}</span>
                      <span>{time.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-primary-900 mb-6 md:mb-8">
              Send Us a Message
            </h2>
            <form className="space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1 md:mb-2">First Name</label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 md:px-4 md:py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                    placeholder="John"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1 md:mb-2">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 md:px-4 md:py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                  placeholder="john.doe@example.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">Message</label>
                <textarea 
                  className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary focus:border-primary min-h-[150px] transition-all"
                  placeholder="Your message here..."
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-primary text-white px-6 py-3 rounded-lg font-bold hover:bg-secondary transition-all duration-300 hover:shadow-lg transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;