import React, { useState } from "react";

const Contact = () => {
  const [formStatus, setFormStatus] = useState({ submitted: false, message: "" });
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setFormStatus({ 
      submitted: true, 
      message: "Thank you for your message! We'll get back to you soon." 
    });
    // Reset form after submission
    setTimeout(() => {
      setFormData({ firstName: "", lastName: "", email: "", message: "" });
      setFormStatus({ submitted: false, message: "" });
    }, 5000);
  };

  const contactInfo = [
    {
      icon: "https://img.icons8.com/ios-filled/100/2E7D32/marker.png",
      title: "Our Office",
      description: "Jl. Raya Garut-Tasikmalaya No.123, Garut, Jawa Barat",
      mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3956.8496630593054!2d107.97798007526939!3d-7.370741992638575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwMjInMTQuNyJTIDEwN8KwNTgnNTAuMCJF!5e0!3m2!1sid!2sid!4v1742804568245!5m2!1sid!2sid" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      bgColor: "bg-primary-100",
    },
    {
      icon: "https://img.icons8.com/ios-filled/100/2E7D32/phone.png",
      title: "Phone Number",
      description: "+62 821 1234 5678",
      link: "tel:+6282112345678",
      bgColor: "bg-secondary-100",
    },
    {
      icon: "https://img.icons8.com/ios-filled/100/2E7D32/email.png",
      title: "Email Address",
      description: "support@bananaleaf.id",
      link: "mailto:support@bananaleaf.id",
      bgColor: "bg-accent-100",
    },
  ];

  const businessHours = [
    { day: "Monday - Friday", hours: "09:00 - 18:00" },
    { day: "Saturday", hours: "10:00 - 15:00" },
    { day: "Sunday", hours: "Closed" },
  ];

  return (
    <div className="bg-neutral-50">
      {/* Hero Section - Improved responsive padding and text sizes */}
      <div className="relative bg-gradient-to-r from-primary to-secondary py-12 sm:py-16 md:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.toptal.com/designers/subtlepatterns/uploads/double-bubble-outline.png')] bg-cover opacity-20"></div>
        <div className="container mx-auto px-4 sm:px-6 relative">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-3 sm:mb-4 animate-fade-in-down">
            Hubungi Kami
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-2xl">
            Kami siap membantu! Jangan ragu untuk menghubungi kami kapan saja.
          </p>
        </div>
      </div>

      {/* Contact Information Section - Improved grid responsiveness */}
      <section className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div
                className={`w-16 h-16 sm:w-20 sm:h-20 ${info.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6`}
              >
                <img src={info.icon} alt={info.title} className="w-8 h-8 sm:w-10 sm:h-10" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-primary-900 mb-2 sm:mb-3">
                {info.title}
              </h3>
              <p className="text-sm sm:text-base text-neutral-600 mb-4 sm:mb-6">{info.description}</p>
              {info.link && (
                <a
                  href={info.link}
                  className="inline-flex items-center text-primary-600 hover:text-primary-800 font-medium group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contact via {info.title.split(" ")[0]}
                  <svg
                    className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Contact Form Section - Improved layout for small screens */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-start">
          <div className="w-full order-2 lg:order-1">
            <div className="relative h-[250px] sm:h-[300px] md:h-[400px] lg:h-[450px] rounded-xl overflow-hidden shadow-lg">
              <div className="w-full h-full" dangerouslySetInnerHTML={{ __html: contactInfo[0].mapEmbed }}></div>
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-6 bg-white/90 backdrop-blur-sm">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-primary-900">
                  Jam Operasional
                </h3>
                <div className="mt-1 sm:mt-2 space-y-1 text-xs sm:text-sm md:text-base">
                  {businessHours.map((time, index) => (
                    <div
                      key={index}
                      className="flex justify-between text-neutral-600"
                    >
                      <span>{time.day}</span>
                      <span className="font-medium">{time.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8 w-full order-1 lg:order-2">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-primary-900 mb-4 sm:mb-6 md:mb-8">
              Kirim Pesan
            </h2>
            {formStatus.submitted ? (
              <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-lg mb-6">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p>{formStatus.message}</p>
                </div>
              </div>
            ) : (
              <form className="space-y-3 sm:space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1 md:mb-2">
                      Nama Depan
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-3 py-2 md:px-4 md:py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                      placeholder="John"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1 md:mb-2">
                      Nama Belakang
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-3 py-2 md:px-4 md:py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                    placeholder="john.doe@example.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Pesan
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary focus:border-primary min-h-[150px] transition-all"
                    placeholder="Pesan Anda di sini..."
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-white px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base rounded-lg font-bold hover:bg-secondary transition-all duration-300 hover:shadow-lg transform hover:scale-105 flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Kirim Pesan
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;