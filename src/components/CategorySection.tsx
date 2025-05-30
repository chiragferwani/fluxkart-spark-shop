
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Smartphone, Headphones, Music, Speaker } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const categories = [
  {
    id: 1,
    name: 'Mobile Phones',
    icon: Smartphone,
    color: 'from-fluxkart-blue to-fluxkart-primary',
    description: 'Latest smartphones from top brands',
    productCount: '500+',
  },
  {
    id: 2,
    name: 'Headphones',
    icon: Headphones,
    color: 'from-fluxkart-secondary to-fluxkart-purple',
    description: 'Premium over-ear headphones',
    productCount: '200+',
  },
  {
    id: 3,
    name: 'Earphones',
    icon: Music,
    color: 'from-fluxkart-accent to-fluxkart-orange',
    description: 'Wired and wireless earphones',
    productCount: '300+',
  },
  {
    id: 4,
    name: 'TWS Earbuds',
    icon: Speaker,
    color: 'from-fluxkart-success to-fluxkart-primary',
    description: 'True wireless stereo earbuds',
    productCount: '150+',
  },
];

const CategorySection = () => {
  const navigate = useNavigate();

  const handleCategoryClick = () => {
    navigate('/categories');
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Shop by Category
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our wide range of premium electronics across different categories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Card
                key={category.id}
                onClick={handleCategoryClick}
                className="group cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 overflow-hidden"
              >
                <CardContent className="p-0">
                  <div className={`bg-gradient-to-br ${category.color} p-8 text-white relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                    <div className="relative z-10">
                      <IconComponent className="h-12 w-12 mb-4" />
                      <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                      <p className="text-white/90 text-sm mb-3">{category.description}</p>
                      <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium inline-block">
                        {category.productCount} Products
                      </div>
                    </div>
                  </div>
                  <div className="p-6 bg-white">
                    <p className="text-gray-600 text-sm mb-4">
                      Discover the latest and most popular products in this category
                    </p>
                    <Button 
                      onClick={handleCategoryClick}
                      className="bg-fluxkart-primary hover:bg-fluxkart-primary/90 text-white text-sm font-semibold"
                    >
                      Browse All →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
