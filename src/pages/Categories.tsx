
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { Smartphone, Headphones, Music, Speaker } from 'lucide-react';

const categoryProducts = {
  'Mobile Phones': [
    {
      id: 1,
      name: 'iPhone 15 Pro Max',
      price: 1199,
      originalPrice: 1299,
      rating: 4.8,
      reviews: 2847,
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=300&fit=crop',
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
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
      category: 'Mobile Phones',
      discount: 8,
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
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop',
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
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop',
      category: 'Headphones',
      discount: 15,
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
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop',
      category: 'Earphones',
      discount: 20,
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
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop',
      category: 'TWS Earbuds',
      discount: 8,
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
  return (
    <div className="min-h-screen bg-white font-sf-pro">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
