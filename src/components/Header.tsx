
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ShoppingCart, Search, User, Menu } from 'lucide-react';
import AuthModal from './AuthModal';

const Header = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');

  const handleAuthClick = (mode: 'login' | 'signup') => {
    setAuthMode(mode);
    setIsAuthModalOpen(true);
  };

  return (
    <>
      <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-fluxkart-primary to-fluxkart-secondary bg-clip-text text-transparent">
                FluxKart
              </h1>
            </div>

            {/* Search Bar */}
            <div className="hidden md:flex items-center flex-1 max-w-2xl mx-8">
              <div className="relative w-full">
                <Input
                  type="text"
                  placeholder="Search for electronics..."
                  className="w-full pl-12 pr-4 py-2 border-2 border-gray-200 rounded-full focus:border-fluxkart-primary transition-colors"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                onClick={() => handleAuthClick('login')}
                className="hidden sm:flex items-center space-x-2 hover:bg-gray-100"
              >
                <User className="h-5 w-5" />
                <span>Login</span>
              </Button>
              
              <Button
                onClick={() => handleAuthClick('signup')}
                className="hidden sm:flex bg-fluxkart-primary hover:bg-fluxkart-primary/90 text-white"
              >
                Sign Up
              </Button>

              <Button variant="ghost" className="relative hover:bg-gray-100">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-2 -right-2 bg-fluxkart-secondary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </Button>

              <Button variant="ghost" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        mode={authMode}
        onModeChange={setAuthMode}
      />
    </>
  );
};

export default Header;
