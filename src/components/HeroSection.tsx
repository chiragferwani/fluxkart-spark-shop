
import React from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingBag, Zap, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleShopNow = () => {
    navigate('/search');
  };

  const handleExploreCategories = () => {
    navigate('/categories');
  };

  return (
    <section className="bg-gradient-to-br from-fluxkart-primary via-fluxkart-purple to-fluxkart-secondary py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Premium Electronics
              <span className="block bg-gradient-to-r from-fluxkart-accent to-white bg-clip-text text-transparent">
                at Your Fingertips
              </span>
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Discover the latest mobile phones, earphones, headphones, and TWS from top brands. 
              Quality guaranteed, prices unmatched.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                size="lg" 
                onClick={handleShopNow}
                className="bg-white text-fluxkart-primary hover:bg-gray-100 font-semibold"
              >
                <ShoppingBag className="mr-2 h-5 w-5" />
                Shop Now
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={handleExploreCategories}
                className="border-2 border-white text-white hover:bg-white hover:text-fluxkart-primary font-semibold"
              >
                Explore Categories
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <Zap className="h-8 w-8 mx-auto mb-2 text-fluxkart-accent" />
                <p className="text-sm font-medium">Fast Delivery</p>
              </div>
              <div className="text-center">
                <Shield className="h-8 w-8 mx-auto mb-2 text-fluxkart-accent" />
                <p className="text-sm font-medium">Warranty</p>
              </div>
              <div className="text-center">
                <ShoppingBag className="h-8 w-8 mx-auto mb-2 text-fluxkart-accent" />
                <p className="text-sm font-medium">Secure Payment</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center text-white">
                  <div className="text-3xl font-bold mb-2">50K+</div>
                  <div className="text-sm">Happy Customers</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center text-white">
                  <div className="text-3xl font-bold mb-2">1000+</div>
                  <div className="text-sm">Products</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center text-white">
                  <div className="text-3xl font-bold mb-2">24/7</div>
                  <div className="text-sm">Support</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center text-white">
                  <div className="text-3xl font-bold mb-2">99%</div>
                  <div className="text-sm">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
