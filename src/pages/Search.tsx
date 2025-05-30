
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
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
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=300&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=400&h=300&fit=crop',
    category: 'TWS Earbuds',
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
    id: 6,
    name: 'iPad Pro 12.9"',
    price: 1099,
    originalPrice: 1199,
    rating: 4.8,
    reviews: 2134,
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=300&fit=crop',
    category: 'Tablets',
    discount: 8,
  },
  {
    id: 7,
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
    id: 8,
    name: 'Sony WF-1000XM4',
    price: 199,
    originalPrice: 279,
    rating: 4.6,
    reviews: 2345,
    image: 'https://images.unsplash.com/photo-1590658165737-15a047b7cd2c?w=400&h=300&fit=crop',
    category: 'TWS Earbuds',
    discount: 29,
  },
];

const Search = () => {
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(searchProducts);

  useEffect(() => {
    const queryParam = searchParams.get('q');
    if (queryParam) {
      setSearchQuery(queryParam);
      handleSearch(queryParam);
    }
  }, [searchParams]);

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    handleSearch(value);
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
              onChange={handleInputChange}
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
