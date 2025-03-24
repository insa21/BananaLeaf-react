import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Products = () => {
  const [filter, setFilter] = useState("all");

  const products = [
    {
      id: 1,
      name: "Daun Pisang Segar",
      category: "fresh",
      price: "Rp 25.000 / pack",
      description:
        "Daun pisang segar berkualitas premium untuk pembungkus makanan tradisional.",
      image:
        "https://sip-exim.co.id/uploads/filemanager/Cara%20packing%20daun%20pisang%20untuk%20ekspor%204.jpg",
    },
    {
      id: 2,
      name: "Piring Daun Pisang",
      category: "plates",
      price: "Rp 35.000 / 20pcs",
      description:
        "Piring ramah lingkungan dari daun pisang untuk acara dan penggunaan sehari-hari.",
      image:
        "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2023/3/9/c0360489-2d05-4e97-b031-0f175ba8a9d2.jpg",
    },
    {
      id: 3,
      name: "Wadah Makanan Daun Pisang",
      category: "containers",
      price: "Rp 45.000 / 10pcs",
      description:
        "Wadah makanan biodegradable dari daun pisang untuk katering dan restoran.",
      image:
        "https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/p1/995/2024/03/02/Desain-tanpa-judul-3853842977.jpg",
    },
    {
      id: 4,
      name: "Kertas Daun Pisang",
      category: "paper",
      price: "Rp 15.000 / pack",
      description:
        "Kertas alami dari serat daun pisang untuk kerajinan dan pembungkus.",
      image:
        "https://down-id.img.susercontent.com/file/e5c2f6132d37aa427c42667aa6cb6f80",
    },
    {
      id: 5,
      name: "Tas Daun Pisang",
      category: "crafts",
      price: "Rp 75.000 / pcs",
      description:
        "Tas belanja ekologis yang terbuat dari anyaman daun pisang yang dikeringkan.",
      image:
        "https://down-id.img.susercontent.com/file/sg-11134201-22100-smee6crzwvivb5",
    },
    {
      id: 6,
      name: "Kotak Hadiah Daun Pisang",
      category: "crafts",
      price: "Rp 50.000 / 5pcs",
      description:
        "Kotak hadiah unik dan ramah lingkungan dari daun pisang untuk kado spesial.",
      image:
        "https://media.istockphoto.com/id/471372003/photo/gift-box.jpg?s=612x612&w=is&k=20&c=Cx_10RCjII8Q_2EV844L0hazNbjwB9kE68Vuvg0VYf0=",
    },
  ];

  const filteredProducts =
    filter === "all"
      ? products
      : products.filter((product) => product.category === filter);

  return (
    <div className="bg-neutral-50">
      {/* Hero Section */}
      <div className="relative h-[40vh] min-h-[300px] bg-gradient-to-r from-primary to-secondary overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.toptal.com/designers/subtlepatterns/uploads/double-bubble-outline.png')] bg-cover opacity-20"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                Produk Kami
              </h1>
              <p className="text-lg text-white/90 max-w-2xl">
                Berbagai produk daun pisang berkualitas tinggi dan ramah
                lingkungan
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === "all"
                  ? "bg-primary text-white"
                  : "bg-white text-neutral-700 hover:bg-neutral-100"
              }`}
            >
              Semua Produk
            </button>
            <button
              onClick={() => setFilter("fresh")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === "fresh"
                  ? "bg-primary text-white"
                  : "bg-white text-neutral-700 hover:bg-neutral-100"
              }`}
            >
              Daun Segar
            </button>
            <button
              onClick={() => setFilter("plates")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === "plates"
                  ? "bg-primary text-white"
                  : "bg-white text-neutral-700 hover:bg-neutral-100"
              }`}
            >
              Piring
            </button>
            <button
              onClick={() => setFilter("containers")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === "containers"
                  ? "bg-primary text-white"
                  : "bg-white text-neutral-700 hover:bg-neutral-100"
              }`}
            >
              Wadah
            </button>
            <button
              onClick={() => setFilter("paper")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === "paper"
                  ? "bg-primary text-white"
                  : "bg-white text-neutral-700 hover:bg-neutral-100"
              }`}
            >
              Kertas
            </button>
            <button
              onClick={() => setFilter("crafts")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === "crafts"
                  ? "bg-primary text-white"
                  : "bg-white text-neutral-700 hover:bg-neutral-100"
              }`}
            >
              Kerajinan
            </button>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-primary-900">
                      {product.name}
                    </h3>
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">
                      {product.category === "fresh" && "Daun Segar"}
                      {product.category === "plates" && "Piring"}
                      {product.category === "containers" && "Wadah"}
                      {product.category === "paper" && "Kertas"}
                      {product.category === "crafts" && "Kerajinan"}
                    </span>
                  </div>
                  <p className="text-neutral-600 mb-4">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-primary font-bold">
                      {product.price}
                    </span>
                    <Link
                      to="/contact"
                      className="inline-flex items-center text-sm font-medium text-primary hover:text-primary-700 transition-colors"
                    >
                      Pesan Sekarang
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Butuh Produk Kustom?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Kami menyediakan layanan pembuatan produk daun pisang sesuai
              dengan kebutuhan khusus Anda.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-primary font-medium px-8 py-3 rounded-full hover:bg-neutral-100 transition-colors"
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
