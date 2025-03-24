import React from "react";
import { useParams, Link } from "react-router-dom";

const ProductDetail = () => {
  const { category, productId } = useParams();
  const productData = {
    kuliner: [
      {
        title: "Daun Pisang Premium",
        description: "Daun pisang segar kualitas premium untuk membungkus dan memasak hidangan tradisional. Dipilih khusus untuk memastikan ketahanan dan aroma terbaik.",
        fullDescription: "Daun pisang premium kami dipilih secara selektif dari varietas pisang terbaik. Setiap lembar daun melalui proses quality control ketat untuk memastikan ketebalan yang ideal, kebersihan, dan kesegaran maksimal. Cocok untuk berbagai keperluan memasak dan membungkus makanan tradisional.",
        price: "Rp 85.000 / pak",
        image: "https://down-id.img.susercontent.com/file/aaf59fd491a7839b5ab44c38c84566d0",
        badge: "Best Seller",
        specifications: [
          { label: "Ukuran", value: "50cm x 30cm" },
          { label: "Isi per Pak", value: "25 lembar" },
          { label: "Ketahanan", value: "3-5 hari (suhu ruang)" },
          { label: "Sertifikasi", value: "Food Grade" }
        ],
        features: [
          "Bebas pestisida",
          "Dipetik saat optimal",
          "Proses vakum hygiene",
          "Quality control ketat"
        ]
      },
      {
        title: "Lembaran Saji Premium",
        description: "Daun pisang pre-cut premium dengan ukuran standar untuk penyajian. Ideal untuk restoran dan katering yang mengedepankan kualitas.",
        fullDescription: "Lembaran saji premium kami telah dipotong dan dibersihkan dengan presisi untuk penggunaan langsung. Setiap lembar telah melalui proses sanitasi khusus untuk menjamin kebersihan dan keamanan pangan.",
        price: "Rp 75.000 / pak",
        image: "https://images.tokopedia.net/img/cache/700/VqbcmM/2023/3/9/c0360489-2d05-4e97-b031-0f175ba8a9d2.jpg",
        badge: "Premium",
        specifications: [
          { label: "Ukuran", value: "40cm x 25cm" },
          { label: "Isi per Pak", value: "30 lembar" },
          { label: "Ketahanan", value: "5-7 hari (kulkas)" },
          { label: "Sertifikasi", value: "HACCP" }
        ],
        features: [
          "Pre-cut presisi",
          "Sanitasi standar HACCP",
          "Siap pakai",
          "Packaging premium"
        ]
      },
      {
        title: "Daun Pisang Kukus",
        description: "Daun pisang khusus untuk mengukus, dipotong sesuai standar ukuran kukusan. Memberikan aroma alami pada masakan.",
        fullDescription: "Daun pisang kukus kami dipotong khusus sesuai ukuran standar kukusan. Setiap lembar telah melalui proses pembersihan dan sanitasi untuk menjamin keamanan pangan. Daun ini memberikan aroma khas yang memperkaya cita rasa masakan kukus Anda, cocok untuk berbagai hidangan tradisional seperti pepes, botok, dan kue kukus.",
        price: "Rp 65.000 / pak",
        image: "https://i.ytimg.com/vi/oLw69PH-b3E/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB2UmxHAUW8ZQXhvgMG8VI_s5okXw",
        badge: "Food Grade",
        specifications: [
          { label: "Ukuran", value: "30cm x 20cm" },
          { label: "Isi per Pak", value: "50 lembar" },
          { label: "Ketahanan", value: "2-3 hari (suhu ruang)" },
          { label: "Sertifikasi", value: "Food Grade" }
        ],
        features: [
          "Ukuran presisi untuk kukusan",
          "Proses sanitasi khusus",
          "Aroma alami terjaga",
          "Tahan panas optimal"
        ]
      },
      // Add other products...
    ],
    kemasan: [
      {
        title: "Piring Daun Premium",
        description: "Piring alami dari daun pisang, dipotong dan dibentuk sempurna. Ideal untuk restoran dan katering yang mengutamakan presentasi tradisional.",
        fullDescription: "Piring daun premium kami dibuat dengan teknik khusus untuk menghasilkan bentuk yang sempurna dan tahan lama. Setiap piring melalui proses sterilisasi untuk menjamin keamanan penggunaan dan kualitas presentasi makanan.",
        price: "Rp 95.000 / pak (50 pcs)",
        image: "https://down-id.img.susercontent.com/file/4c0090427025c270d6e56b9fda8ce536",
        badge: "Best Seller",
        specifications: [
          { label: "Diameter", value: "20cm" },
          { label: "Ketebalan", value: "2-3mm" },
          { label: "Isi per Pak", value: "50 pcs" },
          { label: "Ketahanan", value: "4-6 jam" }
        ],
        features: [
          "100% biodegradable",
          "Tahan panas hingga 85°C",
          "Bentuk presisi",
          "Steril dan higienis"
        ]
      },
      {
        title: "Kotak Nasi Tradisional",
        description: "Kemasan nasi dan lauk dari daun pisang. Tahan panas, praktis, dan ramah lingkungan. Cocok untuk katering dan restoran.",
        fullDescription: "Kotak nasi tradisional kami dirancang khusus untuk menjaga kehangatan dan kesegaran makanan. Dibuat dengan teknik lipat khusus yang mencegah kebocoran dan mempertahankan aroma alami makanan.",
        price: "Rp 120.000 / pak (25 set)",
        image: "https://cdn0-production-images-kly.akamaized.net/wwaSUud7Ocprk1QfQpMIQVzdtew=/217x0:884x667/1200x900/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3508197/original/056748500_1626077326-shutterstock_1842662752.jpg",
        badge: "Food Grade",
        specifications: [
          { label: "Ukuran", value: "15x15x7 cm" },
          { label: "Kapasitas", value: "500-600ml" },
          { label: "Isi per Pak", value: "25 set" },
          { label: "Ketahanan", value: "3-4 jam" }
        ],
        features: [
          "Anti bocor",
          "Tahan panas optimal",
          "Desain ergonomis",
          "Ramah lingkungan"
        ]
      },
      {
        title: "Pembungkus Jajanan Pasar",
        description: "Daun pisang siap pakai untuk membungkus kue tradisional. Dipotong sesuai ukuran standar dan dibersihkan sempurna.",
        fullDescription: "Pembungkus jajanan pasar kami telah dipotong dan dibersihkan dengan teliti untuk memudahkan penggunaan. Setiap lembar telah melalui proses sanitasi untuk menjamin keamanan pangan dan memberikan aroma alami pada kue tradisional.",
        price: "Rp 75.000 / pak (100 pcs)",
        image: "https://i.ytimg.com/vi/oLw69PH-b3E/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB2UmxHAUW8ZQXhvgMG8VI_s5okXw",
        badge: "Traditional",
        specifications: [
          { label: "Ukuran", value: "20x15 cm" },
          { label: "Ketebalan", value: "1-1.5mm" },
          { label: "Isi per Pak", value: "100 pcs" },
          { label: "Ketahanan", value: "12 jam" }
        ],
        features: [
          "Pre-cut presisi",
          "Sanitasi standar food-grade",
          "Aroma alami",
          "Mudah dilipat"
        ]
      }
    ],
    dekorasi: [
      {
        title: "Hiasan Dinding Daun Natural",
        description: "Hiasan dinding dari daun pisang yang diawetkan secara alami. Menciptakan nuansa tropis yang elegan untuk interior rumah atau kantor.",
        fullDescription: "Hiasan dinding daun natural kami dibuat dari daun pisang pilihan yang diawetkan menggunakan teknik preservasi alami. Setiap piece adalah karya seni unik yang dibuat dengan teliti oleh pengrajin terampil kami. Desain yang timeless dan elegan menjadikannya focal point yang sempurna untuk ruangan Anda.",
        price: "Rp 145.000 / set",
        image: "https://down-id.img.susercontent.com/file/id-11134207-7r98w-ls0whaupbi1z37",
        badge: "Handmade",
        specifications: [
          { label: "Ukuran", value: "40cm x 60cm" },
          { label: "Bahan", value: "Daun Pisang Awet" },
          { label: "Daya Tahan", value: "3-5 tahun" },
          { label: "Perawatan", value: "Low Maintenance" }
        ],
        features: [
          "100% handmade",
          "Tahan lama",
          "Anti rayap",
          "Mudah dibersihkan"
        ]
      },
      {
        title: "Hiasan Gantung Daun Natural",
        description: "Hiasan gantung artistik dari daun pisang yang diawetkan. Menciptakan focal point yang menarik untuk dekorasi interior rumah atau acara.",
        fullDescription: "Hiasan gantung natural kami mengkombinasikan keindahan daun pisang yang diawetkan dengan desain modern yang memukau. Setiap piece dirancang untuk menciptakan dimensi vertikal yang menarik dalam ruangan Anda. Proses pengawetan khusus menjamin ketahanan dan keindahan jangka panjang.",
        price: "Rp 165.000 / set",
        image: "https://down-id.img.susercontent.com/file/f394e2cd602245236e32217167f808b9",
        badge: "Best Seller",
        specifications: [
          { label: "Panjang", value: "80-120cm" },
          { label: "Diameter", value: "30-40cm" },
          { label: "Berat", value: "0.8-1.2kg" },
          { label: "Material", value: "Daun & Tali Natural" }
        ],
        features: [
          "Desain customizable",
          "Pemasangan mudah",
          "Tahan debu",
          "Tidak perlu disiram"
        ]
      },
      {
        title: "Rangkaian Dekorasi Acara",
        description: "Set dekorasi lengkap dari daun pisang untuk acara tradisional. Termasuk hiasan meja, backdrop, dan aksesori pelengkap.",
        fullDescription: "Rangkaian dekorasi acara kami menawarkan solusi lengkap untuk memberikan sentuhan alami dan elegan pada acara Anda. Set ini mencakup berbagai elemen dekoratif yang dirancang khusus untuk menciptakan suasana tradisional modern yang memukau. Setiap set dapat disesuaikan dengan tema dan kebutuhan acara Anda.",
        price: "Rp 750.000 / paket",
        image: "https://ae01.alicdn.com/kf/S111d699e5c39444c9e1c9d92f740ddd50.jpeg_640x640q90.jpeg",
        badge: "Premium",
        specifications: [
          { label: "Cakupan", value: "50-100m²" },
          { label: "Komponen", value: "15+ items" },
          { label: "Durasi", value: "1-3 hari" },
          { label: "Setup", value: "Professional" }
        ],
        features: [
          "Setup & removal service",
          "Desain kustom",
          "Konsultasi gratis",
          "Garansi fresh look"
        ]
      }
    ]
  };

  const product = productData[category]?.find(
    (p) => p.title.toLowerCase().replace(/\s+/g, "-") === productId
  );

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-primary-900 mb-4">
            Produk tidak ditemukan
          </h2>
          <Link
            to="/"
            className="text-primary hover:text-primary-dark underline"
          >
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-neutral-50 to-neutral-100 min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Enhanced Breadcrumb */}
        <div className="mb-8 bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-sm">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link to="/" className="text-neutral-600 hover:text-primary">
                  Beranda
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <span className="mx-2 text-neutral-400">/</span>
                  <Link to="/#products" className="text-neutral-600 hover:text-primary">
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </Link>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <span className="mx-2 text-neutral-400">/</span>
                  <span className="text-neutral-500">{product.title}</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>

        {/* Product Details with Enhanced Design */}
        <div className="bg-white rounded-2xl shadow-xl p-8 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Enhanced Product Image Section */}
          <div className="relative group">
            <div className="aspect-square rounded-xl overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-[1.02]">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            {product.badge && (
              <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg">
                {product.badge}
              </div>
            )}
          </div>

          {/* Enhanced Product Info */}
          <div className="space-y-8">
            <div className="border-b border-neutral-200 pb-6">
              <h1 className="text-4xl font-bold text-primary-900 mb-4 font-display">
                {product.title}
              </h1>
              <p className="text-3xl font-bold text-primary">{product.price}</p>
            </div>

            <div className="prose prose-lg">
              <p className="text-neutral-600 leading-relaxed">{product.fullDescription}</p>
            </div>

            {/* Enhanced Specifications */}
            <div>
              <h2 className="text-xl font-bold text-primary-900 mb-4 flex items-center">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                Spesifikasi Produk
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {product.specifications.map((spec, index) => (
                  <div key={index} className="bg-neutral-50 p-4 rounded-lg hover:shadow-md transition-shadow duration-300">
                    <span className="text-sm text-neutral-500 block mb-1">{spec.label}</span>
                    <p className="font-medium text-primary-900">{spec.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced Features */}
            <div>
              <h2 className="text-xl font-bold text-primary-900 mb-4 flex items-center">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Keunggulan Produk
              </h2>
              <ul className="grid grid-cols-1 gap-3">
                {product.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center bg-neutral-50 p-3 rounded-lg hover:shadow-md transition-all duration-300"
                  >
                    <svg
                      className="w-5 h-5 text-primary mr-3 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-neutral-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Enhanced CTA */}
            <div className="flex gap-4 pt-6 border-t border-neutral-200">
              <Link
                to="/contact"
                className="flex-1 bg-primary text-white text-center px-8 py-4 rounded-xl font-bold hover:bg-primary-dark transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                Pesan Sekarang
              </Link>
              <button
                className="bg-white border-2 border-primary text-primary px-8 py-4 rounded-xl font-bold hover:bg-primary hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Tanya Produk
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;