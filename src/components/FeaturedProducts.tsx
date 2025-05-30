
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import ProductCard from './ProductCard';

const products = [
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
    id: 4,
    name: 'Samsung Galaxy S24 Ultra',
    price: 1099,
    originalPrice: 1199,
    rating: 4.6,
    reviews: 1567,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop',
    category: 'Mobile Phones',
    discount: 8,
  },
];

const FeaturedProducts = () => {
  const navigate = useNavigate();

  const handleViewAllProducts = () => {
    navigate('/search');
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Products
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Handpicked premium electronics with amazing deals and discounts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg" 
            onClick={handleViewAllProducts}
            className="border-fluxkart-primary text-fluxkart-primary hover:bg-fluxkart-primary hover:text-white"
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
