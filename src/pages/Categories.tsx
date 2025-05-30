
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Smartphone, Headphones, Music, Speaker, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const categoryProducts = {
  'Mobile Phones': [
    {
      id: 1,
      name: 'iPhone 15 Pro Max',
      price: 1199,
      originalPrice: 1299,
      rating: 4.8,
      reviews: 2847,
      image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=300&fit=crop',
      category: 'Mobile Phones',
      discount: 8,
    },
    {
      id: 5,
      name: 'Samsung Galaxy S24 Ultra',
      price: 1099,
      originalPrice: 1199,
      rating: 4.6,
      reviews: 1567,
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop',
      category: 'Mobile Phones',
      discount: 8,
    },
    {
      id: 8,
      name: 'Google Pixel 8 Pro',
      price: 899,
      originalPrice: 999,
      rating: 4.7,
      reviews: 1234,
      image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=300&fit=crop',
      category: 'Mobile Phones',
      discount: 10,
    },
    {
      id: 9,
      name: 'OnePlus 12',
      price: 699,
      originalPrice: 799,
      rating: 4.5,
      reviews: 892,
      image: 'https://images.unsplash.com/photo-1567581935884-3349723552ca?w=400&h=300&fit=crop',
      category: 'Mobile Phones',
      discount: 13,
    },
    {
      id: 10,
      name: 'Xiaomi 14 Ultra',
      price: 799,
      originalPrice: 899,
      rating: 4.4,
      reviews: 567,
      image: 'https://images.unsplash.com/photo-1563203369-26f2e4a5ccf7?w=400&h=300&fit=crop',
      category: 'Mobile Phones',
      discount: 11,
    },
  ],
  'Headphones': [
    {
      id: 2,
      name: 'Sony WH-1000XM5',
      price: 349,
      originalPrice: 399,
      rating: 4.9,
      reviews: 1892,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop',
      category: 'Headphones',
      discount: 13,
    },
    {
      id: 6,
      name: 'Bose QuietComfort 45',
      price: 279,
      originalPrice: 329,
      rating: 4.7,
      reviews: 1234,
      image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400&h=300&fit=crop',
      category: 'Headphones',
      discount: 15,
    },
    {
      id: 11,
      name: 'Audio-Technica ATH-M50x',
      price: 149,
      originalPrice: 199,
      rating: 4.6,
      reviews: 2345,
      image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=300&fit=crop',
      category: 'Headphones',
      discount: 25,
    },
    {
      id: 12,
      name: 'Sennheiser HD 660S',
      price: 399,
      originalPrice: 499,
      rating: 4.8,
      reviews: 876,
      image: 'https://images.unsplash.com/photo-1599669454699-248893623440?w=400&h=300&fit=crop',
      category: 'Headphones',
      discount: 20,
    },
    {
      id: 13,
      name: 'Beats Studio3 Wireless',
      price: 199,
      originalPrice: 349,
      rating: 4.3,
      reviews: 1567,
      image: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=300&fit=crop',
      category: 'Headphones',
      discount: 43,
    },
  ],
  'Earphones': [
    {
      id: 7,
      name: 'Sennheiser IE 300',
      price: 199,
      originalPrice: 249,
      rating: 4.6,
      reviews: 892,
      image: 'https://images.unsplash.com/photo-1558756520-22cfe5d382ca?w=400&h=300&fit=crop',
      category: 'Earphones',
      discount: 20,
    },
    {
      id: 14,
      name: 'Shure SE425',
      price: 299,
      originalPrice: 349,
      rating: 4.7,
      reviews: 634,
      image: 'https://images.unsplash.com/photo-1590658165737-15a047b7cd2c?w=400&h=300&fit=crop',
      category: 'Earphones',
      discount: 14,
    },
    {
      id: 15,
      name: 'Audio-Technica ATH-CKR100IS',
      price: 179,
      originalPrice: 229,
      rating: 4.5,
      reviews: 445,
      image: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=300&fit=crop',
      category: 'Earphones',
      discount: 22,
    },
    {
      id: 16,
      name: 'Sony WI-1000XM2',
      price: 249,
      originalPrice: 299,
      rating: 4.4,
      reviews: 789,
      image: 'https://images.unsplash.com/photo-1545127398-14699f92334b?w=400&h=300&fit=crop',
      category: 'Earphones',
      discount: 17,
    },
    {
      id: 17,
      name: 'Etymotic ER2XR',
      price: 99,
      originalPrice: 149,
      rating: 4.6,
      reviews: 234,
      image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=300&fit=crop',
      category: 'Earphones',
      discount: 34,
    },
  ],
  'TWS Earbuds': [
    {
      id: 3,
      name: 'AirPods Pro 2nd Gen',
      price: 229,
      originalPrice: 249,
      rating: 4.7,
      reviews: 3156,
      image: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=400&h=300&fit=crop',
      category: 'TWS Earbuds',
      discount: 8,
    },
    {
      id: 18,
      name: 'Sony WF-1000XM4',
      price: 199,
      originalPrice: 279,
      rating: 4.6,
      reviews: 2345,
      image: 'https://images.unsplash.com/photo-1590658165737-15a047b7cd2c?w=400&h=300&fit=crop',
      category: 'TWS Earbuds',
      discount: 29,
    },
    {
      id: 19,
      name: 'Samsung Galaxy Buds2 Pro',
      price: 149,
      originalPrice: 229,
      rating: 4.5,
      reviews: 1876,
      image: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=300&fit=crop',
      category: 'TWS Earbuds',
      discount: 35,
    },
    {
      id: 20,
      name: 'Jabra Elite 85t',
      price: 179,
      originalPrice: 229,
      rating: 4.4,
      reviews: 1234,
      image: 'https://images.unsplash.com/photo-1545127398-14699f92334b?w=400&h=300&fit=crop',
      category: 'TWS Earbuds',
      discount: 22,
    },
    {
      id: 21,
      name: 'Sennheiser Momentum True Wireless 3',
      price: 199,
      originalPrice: 249,
      rating: 4.6,
      reviews: 876,
      image: 'https://images.unsplash.com/photo-1558756520-22cfe5d382ca?w=400&h=300&fit=crop',
      category: 'TWS Earbuds',
      discount: 20,
    },
  ],
};

const categoryIcons = {
  'Mobile Phones': Smartphone,
  'Headphones': Headphones,
  'Earphones': Music,
  'TWS Earbuds': Speaker,
};

const Categories = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-white font-sf-pro">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <Button
            onClick={handleBackToHome}
            variant="outline"
            className="flex items-center space-x-2 border-fluxkart-primary text-fluxkart-primary hover:bg-fluxkart-primary hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Button>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">All Categories</h1>
          <p className="text-xl text-gray-600">Browse our complete range of electronics</p>
        </div>

        {Object.entries(categoryProducts).map(([categoryName, products]) => {
          const IconComponent = categoryIcons[categoryName as keyof typeof categoryIcons];
          
          return (
            <div key={categoryName} className="mb-16">
              <div className="flex items-center mb-8">
                <IconComponent className="h-8 w-8 text-fluxkart-primary mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">{categoryName}</h2>
                <span className="ml-4 bg-fluxkart-primary/10 text-fluxkart-primary px-3 py-1 rounded-full text-sm font-medium">
                  {products.length} Products
                </span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
      
      <Footer />
    </div>
  );
};

export default Categories;
