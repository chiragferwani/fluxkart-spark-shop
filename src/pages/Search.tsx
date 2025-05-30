
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search as SearchIcon } from 'lucide-react';

const searchProducts = [
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
    id: 2,
    name: 'MacBook Pro 16"',
    price: 2399,
    originalPrice: 2599,
    rating: 4.9,
    reviews: 1567,
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop',
    category: 'Laptops',
    discount: 8,
  },
  {
    id: 3,
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
    id: 4,
    name: 'AirPods Pro 2nd Gen',
    price: 229,
    originalPrice: 249,
    rating: 4.7,
    reviews: 3156,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop',
    category: 'TWS Earbuds',
    discount: 8,
  },
];

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(searchProducts);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim() === '') {
      setFilteredProducts(searchProducts);
    } else {
      const filtered = searchProducts.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <div className="min-h-screen bg-white font-sf-pro">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Search Electronics</h1>
          <div className="relative max-w-2xl">
            <Input
              type="text"
              placeholder="Search for electronics..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-full focus:border-fluxkart-primary transition-colors text-lg"
            />
            <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-6 w-6" />
          </div>
        </div>

        <div className="mb-6">
          <p className="text-gray-600">
            {filteredProducts.length} results {searchQuery && `for "${searchQuery}"`}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No products found matching your search.</p>
            <Button 
              onClick={() => handleSearch('')}
              className="mt-4 bg-fluxkart-primary hover:bg-fluxkart-primary/90"
            >
              Show All Products
            </Button>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default Search;
