import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [activeTab, setActiveTab] = useState("kuliner");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      const elements = document.querySelectorAll(".fade-in-element");
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const isInViewport = rect.top <= window.innerHeight * 0.8;
        if (isInViewport) {
          el.classList.add("is-visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on initial load

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const productCategories = [
    { id: "kuliner", name: "Kuliner" },
    { id: "kemasan", name: "Kemasan" },
    { id: "dekorasi", name: "Dekorasi" },
  ];

  const productData = {
    kuliner: [
      {
        title: "Daun Pisang Premium",
        description:
          "Daun pisang segar kualitas premium untuk membungkus dan memasak hidangan tradisional. Dipilih khusus untuk memastikan ketahanan dan aroma terbaik.",
        price: "Rp 85.000 / pak",
        image:
          "https://down-id.img.susercontent.com/file/aaf59fd491a7839b5ab44c38c84566d0",
        badge: "Best Seller",
      },
      {
        title: "Lembaran Saji Premium",
        description:
          "Daun pisang pre-cut premium dengan ukuran standar untuk penyajian. Ideal untuk restoran dan katering yang mengedepankan kualitas.",
        price: "Rp 75.000 / pak",
        image:
          "https://images.tokopedia.net/img/cache/700/VqbcmM/2023/3/9/c0360489-2d05-4e97-b031-0f175ba8a9d2.jpg",
        badge: "Premium",
      },
      {
        title: "Daun Pisang Kukus",
        description:
          "Daun pisang khusus untuk mengukus, dipotong sesuai standar ukuran kukusan. Memberikan aroma alami pada masakan.",
        price: "Rp 65.000 / pak",
        image:
          "https://i.ytimg.com/vi/oLw69PH-b3E/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB2UmxHAUW8ZQXhvgMG8VI_s5okXw",
        badge: "Food Grade",
      },
    ],
    kemasan: [
      {
        title: "Piring Daun Premium",
        description:
          "Piring alami dari daun pisang, dipotong dan dibentuk sempurna. Ideal untuk restoran dan katering yang mengutamakan presentasi tradisional.",
        price: "Rp 95.000 / pak (50 pcs)",
        image:
          "https://down-id.img.susercontent.com/file/4c0090427025c270d6e56b9fda8ce536",
        badge: "Best Seller",
      },
      {
        title: "Kotak Nasi Tradisional",
        description:
          "Kemasan nasi dan lauk dari daun pisang. Tahan panas, praktis, dan ramah lingkungan. Cocok untuk katering dan restoran.",
        price: "Rp 120.000 / pak (25 set)",
        image:
          "https://cdn0-production-images-kly.akamaized.net/wwaSUud7Ocprk1QfQpMIQVzdtew=/217x0:884x667/1200x900/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3508197/original/056748500_1626077326-shutterstock_1842662752.jpg",
        badge: "Food Grade",
      },
      {
        title: "Pembungkus Jajanan Pasar",
        description:
          "Daun pisang siap pakai untuk membungkus kue tradisional. Dipotong sesuai ukuran standar dan dibersihkan sempurna.",
        price: "Rp 75.000 / pak (100 pcs)",
        image:
          "https://i.ytimg.com/vi/oLw69PH-b3E/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB2UmxHAUW8ZQXhvgMG8VI_s5okXw",
        badge: "Traditional",
      },
    ],
    dekorasi: [
      {
        title: "Hiasan Dinding Daun Natural",
        description:
          "Hiasan dinding dari daun pisang yang diawetkan secara alami. Menciptakan nuansa tropis yang elegan untuk interior rumah atau kantor.",
        price: "Rp 145.000 / set",
        image:
          "https://down-id.img.susercontent.com/file/id-11134207-7r98w-ls0whaupbi1z37",
        badge: "Handmade",
      },
      {
        title: "Hiasan Gantung Daun Natural",
        description:
          "Hiasan gantung artistik dari daun pisang yang diawetkan. Menciptakan focal point yang menarik untuk dekorasi interior rumah atau acara.",
        price: "Rp 165.000 / set",
        image:
          "https://down-id.img.susercontent.com/file/f394e2cd602245236e32217167f808b9",
        badge: "Best Seller",
      },
      {
        title: "Rangkaian Dekorasi Acara",
        description:
          "Set dekorasi lengkap dari daun pisang untuk acara tradisional. Termasuk hiasan meja, backdrop, dan aksesori pelengkap.",
        price: "Rp 750.000 / paket",
        image:
          "https://ae01.alicdn.com/kf/S111d699e5c39444c9e1c9d92f740ddd50.jpeg_640x640q90.jpeg",
        badge: "Premium",
      },
    ],
  };

  const testimonials = [
    {
      name: "Chef William Wongso",
      role: "Executive Chef, Plataran Group",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      quote:
        "BananaLeaf telah menjadi mitra terpercaya kami selama bertahun-tahun. Kualitas produk mereka selalu konsisten dan layanan yang diberikan sangat profesional.",
    },
    {
      name: "Ibu Maria Devina",
      role: "Founder & CEO, EcoPackage Indonesia",
      image: "https://randomuser.me/api/portraits/women/32.jpg",
      quote:
        "Kolaborasi dengan BananaLeaf membawa inovasi baru dalam industri kemasan ramah lingkungan. Produk mereka tidak hanya sustainable tapi juga memenuhi standar kualitas tertinggi.",
    },
    {
      name: "Bapak Richard Halim",
      role: "Creative Director, Bali Event Organizer",
      image: "https://randomuser.me/api/portraits/men/68.jpg",
      quote:
        "Produk dekorasi BananaLeaf memberikan sentuhan elegan dan alami yang sempurna untuk event-event premium kami. Klien selalu terkesan dengan kualitas dan keunikannya.",
    },
  ];

  return (
    <div className="bg-neutral-50">
      {/* Hero Section with Video Background */}
      <div className="relative h-screen overflow-hidden">
        <video
          className="absolute w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-palm-tree-in-a-garden-1456-large.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/70 to-secondary/70"></div>

        {/* Batik Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('https://www.toptal.com/designers/subtlepatterns/uploads/double-bubble-outline.png')] bg-repeat opacity-30 mix-blend-soft-light"></div>

        <div className="container mx-auto px-4 h-full flex items-center relative">
          <div
            className={`max-w-3xl transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
              Kemasan Alami Terbaik dari Alam
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-8">
              Daun pisang berkualitas premium untuk kuliner, kemasan, dan
              dekorasi. Dipanen secara berkelanjutan dan diekspor ke seluruh
              dunia.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="#products"
                className="bg-white text-primary px-8 py-3 rounded-full font-bold hover:bg-primary hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Jelajahi Produk
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-primary transition-all duration-300 transform hover:-translate-y-1"
              >
                Minta Penawaran
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <a href="#products" className="animate-bounce">
            <svg
              className="w-10 h-10 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              ></path>
            </svg>
          </a>
        </div>
      </div>

      {/* Products Section with Tabs */}
      <section id="products" className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-16 fade-in-element">
          <span className="text-primary font-medium uppercase tracking-wider">
            Produk Kami
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-primary-900 mt-2 mb-4">
            Daun Pisang Premium
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Jelajahi berbagai daun pisang berkualitas tinggi untuk berbagai
            kebutuhan
          </p>
        </div>

        {/* Product Category Tabs */}
        <div className="flex justify-center mb-12 fade-in-element overflow-x-auto pb-2 px-2 -mx-2">
          <div className="inline-flex rounded-full bg-neutral-200 p-1">
            {productCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-4 sm:px-6 py-2 rounded-full font-medium transition-all duration-300 whitespace-nowrap ${
                  activeTab === category.id
                    ? "bg-primary text-white shadow-md"
                    : "text-neutral-600 hover:text-primary"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {productData[activeTab].map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group transform hover:-translate-y-2 fade-in-element"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                {product.badge && (
                  <div className="absolute top-4 right-4 bg-primary text-white text-sm font-bold px-3 py-1 rounded-full">
                    {product.badge}
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary-900 mb-2">
                  {product.title}
                </h3>
                <p className="text-neutral-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-primary-800 font-bold">
                    {product.price}
                  </span>
                  <Link
                    to={`/products/${activeTab}/${product.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="bg-primary-100 text-primary-800 px-4 py-2 rounded-full font-medium hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    Lihat Detail
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-neutral-50 to-transparent"></div>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 fade-in-element">
              <span className="text-primary font-medium uppercase tracking-wider">
                Mengapa Memilih Kami
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-900 mt-2 mb-6">
                Keunggulan Berkelanjutan
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 bg-neutral-50 p-4 rounded-xl hover:shadow-md transition-all duration-300">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                      <img
                        src="https://img.icons8.com/color/48/certificate.png"
                        alt="Certified"
                        className="w-6 h-6"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary-900 mb-2">
                      Tersertifikasi Organik
                    </h3>
                    <p className="text-neutral-600">
                      Daun pisang kami ditanam tanpa pestisida dan memenuhi
                      standar organik internasional.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 bg-neutral-50 p-4 rounded-xl hover:shadow-md transition-all duration-300">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                      <img
                        src="https://img.icons8.com/color/48/leaf.png"
                        alt="Fresh"
                        className="w-6 h-6"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary-900 mb-2">
                      Kesegaran Vakum
                    </h3>
                    <p className="text-neutral-600">
                      Proses pengawetan khusus kami memastikan daun tetap segar
                      hingga 30 hari.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 bg-neutral-50 p-4 rounded-xl hover:shadow-md transition-all duration-300">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                      <img
                        src="https://img.icons8.com/color/48/earth-planet.png"
                        alt="Global"
                        className="w-6 h-6"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary-900 mb-2">
                      Jaringan Distribusi Global
                    </h3>
                    <p className="text-neutral-600">
                      Pengiriman dengan suhu terkontrol ke lebih dari 50 negara
                      dengan waktu pengiriman 3-5 hari.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <img
                src="https://images.pexels.com/photos/5835354/pexels-photo-5835354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Perkebunan Kami"
                className="rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-primary to-secondary py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="text-white">
              <h3 className="text-3xl md:text-4xl font-bold mb-2">50+</h3>
              <p className="text-base md:text-lg">Negara Terlayani</p>
            </div>
            <div className="text-white">
              <h3 className="text-3xl md:text-4xl font-bold mb-2">98%</h3>
              <p className="text-base md:text-lg">Kepuasan Pelanggan</p>
            </div>
            <div className="text-white">
              <h3 className="text-3xl md:text-4xl font-bold mb-2">20+</h3>
              <p className="text-base md:text-lg">Tahun Pengalaman</p>
            </div>
            <div className="text-white">
              <h3 className="text-3xl md:text-4xl font-bold mb-2">1Jt+</h3>
              <p className="text-base md:text-lg">Daun Dikirim per Bulan</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-neutral-100 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary font-medium uppercase tracking-wider">
              Testimoni
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-900 mt-2 mb-4">
              Apa Kata Klien Kami
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Dipercaya oleh restoran, produsen makanan, dan pengecer di seluruh
              dunia
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mr-4 object-cover border-2 border-primary"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-primary-900">
                      {testimonial.name}
                    </h3>
                    <p className="text-neutral-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-neutral-600 italic">"{testimonial.quote}"</p>
                <div className="mt-4 flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="bg-neutral-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary font-medium uppercase tracking-wider">
              Komitmen Kami
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-900 mt-2 mb-4">
              Praktik Berkelanjutan
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Kami berdedikasi untuk pertanian dan produksi yang bertanggung
              jawab terhadap lingkungan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <img
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2013&auto=format&fit=crop"
                alt="Pertanian Ramah Lingkungan"
                className="w-full h-48 object-cover transform hover:scale-105 transition-all duration-500"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary-900 mb-3">
                  Pertanian Ramah Lingkungan
                </h3>
                <p className="text-neutral-600">
                  Perkebunan kami menggunakan metode pertanian organik yang
                  menjaga kesehatan tanah dan keanekaragaman hayati.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <img
                src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=2070&auto=format&fit=crop"
                alt="Produksi Tanpa Limbah"
                className="w-full h-48 object-cover transform hover:scale-105 transition-all duration-500"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary-900 mb-3">
                  Produksi Tanpa Limbah
                </h3>
                <p className="text-neutral-600">
                  Kami memanfaatkan setiap bagian dari tanaman pisang,
                  memastikan tidak ada yang terbuang dalam proses produksi kami.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <img
                src="https://images.unsplash.com/photo-1605600659873-d808a13e4d2a?q=80&w=2070&auto=format&fit=crop"
                alt="Dukungan Komunitas"
                className="w-full h-48 object-cover transform hover:scale-105 transition-all duration-500"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary-900 mb-3">
                  Dukungan Komunitas
                </h3>
                <p className="text-neutral-600">
                  Kami bermitra dengan komunitas lokal, memberikan upah yang
                  adil dan mendukung inisiatif pendidikan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary font-medium uppercase tracking-wider">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-900 mt-2 mb-4">
              Pertanyaan yang Sering Diajukan
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Semua yang perlu Anda ketahui tentang produk daun pisang kami
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-neutral-50 rounded-xl p-6 hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-bold text-primary-900 mb-3">
                Berapa lama daun tetap segar?
              </h3>
              <p className="text-neutral-600">
                Daun pisang vakum kami tetap segar hingga 30 hari jika disimpan
                di lemari pendingin. Setelah dibuka, kami sarankan untuk
                menggunakannya dalam 3-5 hari untuk kesegaran optimal.
              </p>
            </div>

            <div className="bg-neutral-50 rounded-xl p-6 hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-bold text-primary-900 mb-3">
                Apakah Anda mengirim secara internasional?
              </h3>
              <p className="text-neutral-600">
                Ya, kami mengirim ke lebih dari 50 negara di seluruh dunia.
                Kemasan dengan suhu terkontrol kami memastikan daun tiba dalam
                kondisi sempurna, terlepas dari tujuan.
              </p>
            </div>

            <div className="bg-neutral-50 rounded-xl p-6 hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-bold text-primary-900 mb-3">
                Apakah produk Anda tersertifikasi organik?
              </h3>
              <p className="text-neutral-600">
                Ya, semua daun pisang kami tersertifikasi organik oleh standar
                internasional. Kami tidak menggunakan pestisida atau bahan kimia
                berbahaya dalam proses pertanian kami.
              </p>
            </div>

            <div className="bg-neutral-50 rounded-xl p-6 hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-bold text-primary-900 mb-3">
                Bisakah saya memesan dalam jumlah besar untuk bisnis saya?
              </h3>
              <p className="text-neutral-600">
                Tentu saja! Kami menawarkan harga khusus untuk pesanan dalam
                jumlah besar dan dapat menyesuaikan kemasan sesuai kebutuhan
                bisnis Anda. Silakan hubungi tim penjualan kami untuk informasi
                lebih lanjut.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-secondary py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white mb-6">
            Siap Memesan Daun Pisang Premium?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Bergabunglah dengan jaringan global pelanggan yang puas dan rasakan
            perbedaan kualitasnya
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-white text-primary px-8 py-3 rounded-full font-bold hover:bg-transparent hover:text-white hover:border-white border-2 border-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Minta Penawaran
            </Link>
            <Link
              to="/products"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-primary transition-all duration-300 transform hover:-translate-y-1"
            >
              Lihat Semua Produk
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
