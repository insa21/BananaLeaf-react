import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="bg-neutral-50">
      {/* Hero Section with Parallax Effect */}
      <div className="relative h-[70vh] min-h-[500px] bg-gradient-to-r from-primary to-secondary overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.toptal.com/designers/subtlepatterns/uploads/double-bubble-outline.png')] bg-cover opacity-20 animate-pulse"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight">
                Tentang BananaLeaf
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed">
                Menghadirkan produk daun pisang berkualitas untuk kebutuhan
                kuliner, kemasan, dan dekorasi. Kami berkomitmen melestarikan
                tradisi dengan sentuhan modern yang ramah lingkungan.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Vision & Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6 bg-neutral-50 p-8 rounded-3xl shadow-sm"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-900 border-b-2 border-primary pb-3 inline-block">
                Visi Kami
              </h2>
              <p className="text-lg text-neutral-600 leading-relaxed">
                Menjadi pionir dalam penyediaan produk daun pisang berkualitas
                tinggi yang menggabungkan nilai tradisional dengan kebutuhan
                modern, sambil mendukung kelestarian lingkungan dan pemberdayaan
                masyarakat lokal.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6 bg-neutral-50 p-8 rounded-3xl shadow-sm"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-900 border-b-2 border-primary pb-3 inline-block">
                Misi Kami
              </h2>
              <ul className="text-lg text-neutral-600 leading-relaxed space-y-4">
                <li className="flex items-start">
                  <span className="text-primary mr-2 text-xl">•</span>
                  <span>Menyediakan produk daun pisang berkualitas tinggi untuk
                  berbagai kebutuhan</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 text-xl">•</span>
                  <span>Mendukung praktik pertanian berkelanjutan dan pemberdayaan
                  petani lokal</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 text-xl">•</span>
                  <span>Mengembangkan inovasi dalam pengolahan dan pengawetan daun
                  pisang</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 text-xl">•</span>
                  <span>Mengurangi penggunaan plastik dengan alternatif ramah
                  lingkungan</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-b from-white to-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4 inline-block">CORE VALUES</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-900 mb-4">
              Nilai-Nilai Kami
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-4">
                Keberlanjutan
              </h3>
              <p className="text-neutral-600">
                Berkomitmen untuk praktik bisnis yang ramah lingkungan dan
                mendukung pertanian berkelanjutan.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-4">
                Kualitas
              </h3>
              <p className="text-neutral-600">
                Mengutamakan standar kualitas tertinggi dalam setiap produk dan
                layanan yang kami berikan.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-4">
                Inovasi
              </h3>
              <p className="text-neutral-600">
                Terus berinovasi dalam pengembangan produk dan solusi untuk
                memenuhi kebutuhan modern.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact & Achievements Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4 inline-block">OUR IMPACT</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-900 mb-4">
              Dampak & Pencapaian
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Perjalanan kami dalam menciptakan solusi ramah lingkungan
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300"
            >
              <div className="text-5xl font-bold text-primary mb-4">5000+</div>
              <p className="text-neutral-600 font-medium">Pelanggan Puas</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300"
            >
              <div className="text-5xl font-bold text-primary mb-4">100+</div>
              <p className="text-neutral-600 font-medium">Mitra Petani Lokal</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300"
            >
              <div className="text-5xl font-bold text-primary mb-4">-50%</div>
              <p className="text-neutral-600 font-medium">Pengurangan Plastik</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300"
            >
              <div className="text-5xl font-bold text-primary mb-4">25+</div>
              <p className="text-neutral-600 font-medium">Varian Produk</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
