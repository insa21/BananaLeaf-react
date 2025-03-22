import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiShoppingCart, FiHeart, FiShare2 } from 'react-icons/fi';

const ProductDetail = () => {
  const { category, id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState('');
  const [activeTab, setActiveTab] = useState('description');
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    if (quantity < product?.stock) {
      setQuantity(quantity + 1);
    }
  };

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 1 && value <= product?.stock) {
      setQuantity(value);
    }
  };

  const productData = {
    kuliner: [
      {
        id: "1",
        title: 'Daun Pisang Premium',
        description: 'Daun pisang segar berkualitas tinggi, sempurna untuk membungkus dan memasak hidangan tradisional.',
        longDescription: `Daun pisang premium kami dipanen dengan hati-hati dari perkebunan organik bersertifikat. 
        Setiap lembar daun dipilih untuk memastikan kualitas terbaik, dengan warna hijau yang 
        konsisten dan tekstur yang sempurna untuk berbagai kebutuhan kuliner.
        
        Daun-daun ini ideal untuk:
        - Membungkus makanan tradisional seperti pepes dan lontong
        - Melapisi piring saji untuk presentasi makanan yang menarik
        - Mengukus makanan untuk aroma yang khas
        - Dekorasi meja untuk acara bertema tropis`,
        price: 'Rp 85.000 per pak',
        priceNumeric: 85000,
        image: 'https://images.unsplash.com/photo-1604909052743-94e838986d24?q=80&w=2080&auto=format&fit=crop',
        gallery: [
          'https://images.unsplash.com/photo-1604909052743-94e838986d24?q=80&w=2080&auto=format&fit=crop',
          'https://images.pexels.com/photos/5835353/pexels-photo-5835353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          'https://images.pexels.com/photos/6646233/pexels-photo-6646233.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        ],
        badge: 'Terlaris',
        stock: 50,
        sku: 'DP-PREM-001',
        specifications: [
          { name: 'Ukuran', value: '50cm x 30cm (rata-rata)' },
          { name: 'Jumlah per pak', value: '20 lembar' },
          { name: 'Ketahanan', value: 'Hingga 30 hari (refrigerated)' },
          { name: 'Sertifikasi', value: 'Organik' },
          { name: 'Asal', value: 'Bali, Indonesia' }
        ]
      }
    ]
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      if (productData[category]) {
        const productIndex = parseInt(id) - 1;
        const productInfo = productData[category][productIndex];
        if (productInfo) {
          setProduct(productInfo);
          setSelectedImage(productInfo.gallery[0]);
        }
      }
      setLoading(false);
    }, 500);
  }, [category, id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-neutral-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-50 px-4 text-center">
        <h2 className="text-2xl font-bold text-primary-900 mb-4">Produk Tidak Ditemukan</h2>
        <p className="text-neutral-600 mb-6">Maaf, produk yang Anda cari tidak tersedia.</p>
        <Link 
          to="/"
          className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-600 transition-colors"
        >
          Kembali ke Beranda
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-neutral-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center mb-8">
          <Link to="/" className="text-neutral-600 hover:text-primary transition-colors">
            Beranda
          </Link>
          <span className="mx-2 text-neutral-400">/</span>
          <Link to={`/product/${category}`} className="text-neutral-600 hover:text-primary transition-colors capitalize">
            {category}
          </Link>
          <span className="mx-2 text-neutral-400">/</span>
          <span className="text-primary">{product.title}</span>
        </div>

        {/* Product Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-w-4 aspect-h-3 bg-white rounded-2xl overflow-hidden">
              <img 
                src={selectedImage} 
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {product.gallery.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(image)}
                  className={`aspect-w-4 aspect-h-3 bg-white rounded-xl overflow-hidden border-2 transition-all
                    ${selectedImage === image ? 'border-primary' : 'border-transparent'}`}
                >
                  <img 
                    src={image} 
                    alt={`${product.title} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-3xl font-bold text-primary-900">{product.title}</h1>
              {product.badge && (
                <span className="bg-primary-100 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  {product.badge}
                </span>
              )}
            </div>
            
            <p className="text-2xl font-bold text-primary-900 mb-6">{product.price}</p>
            
            <div className="prose prose-neutral mb-8">
              <p className="text-neutral-600">{product.description}</p>
            </div>

            <div className="space-y-6 mb-8">
              <div className="flex items-center space-x-4">
                <div className="flex items-center border border-neutral-300 rounded-full">
                  <button 
                    onClick={decreaseQuantity}
                    className="w-10 h-10 flex items-center justify-center text-neutral-600 hover:text-primary transition-colors"
                    disabled={quantity <= 1}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={handleQuantityChange}
                    className="w-16 text-center border-0 focus:ring-0"
                    min="1"
                    max={product.stock}
                  />
                  <button 
                    onClick={increaseQuantity}
                    className="w-10 h-10 flex items-center justify-center text-neutral-600 hover:text-primary transition-colors"
                    disabled={quantity >= product.stock}
                  >
                    +
                  </button>
                </div>
                <span className="text-neutral-600">
                  Tersedia: {product.stock} unit
                </span>
              </div>

              <div className="flex space-x-4">
                <button className="flex-1 bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-primary-600 transition-colors flex items-center justify-center space-x-2">
                  <FiShoppingCart className="w-5 h-5" />
                  <span>Tambah ke Keranjang</span>
                </button>
                <button className="w-12 h-12 flex items-center justify-center border-2 border-neutral-200 rounded-full text-neutral-600 hover:border-primary hover:text-primary transition-all">
                  <FiHeart className="w-5 h-5" />
                </button>
                <button className="w-12 h-12 flex items-center justify-center border-2 border-neutral-200 rounded-full text-neutral-600 hover:border-primary hover:text-primary transition-all">
                  <FiShare2 className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Product Tabs */}
            <div className="border-t border-neutral-200 pt-8">
              <div className="flex space-x-8 mb-8">
                <button
                  onClick={() => setActiveTab('description')}
                  className={`pb-2 border-b-2 transition-colors ${
                    activeTab === 'description' 
                      ? 'border-primary text-primary' 
                      : 'border-transparent text-neutral-600 hover:text-primary'
                  }`}
                >
                  Deskripsi
                </button>
                <button
                  onClick={() => setActiveTab('specifications')}
                  className={`pb-2 border-b-2 transition-colors ${
                    activeTab === 'specifications' 
                      ? 'border-primary text-primary' 
                      : 'border-transparent text-neutral-600 hover:text-primary'
                  }`}
                >
                  Spesifikasi
                </button>
              </div>

              <div className="prose prose-neutral max-w-none">
                {activeTab === 'description' ? (
                  <div className="whitespace-pre-line text-neutral-600">
                    {product.longDescription}
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {product.specifications.map((spec, index) => (
                      <div key={index} className="bg-white p-4 rounded-xl">
                        <h4 className="font-medium text-primary-900">{spec.name}</h4>
                        <p className="text-neutral-600">{spec.value}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;