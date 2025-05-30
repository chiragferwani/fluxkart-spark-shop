
import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-fluxkart-primary to-fluxkart-secondary bg-clip-text text-transparent mb-4">
              FluxKart
            </h3>
            <p className="text-gray-400 mb-6">
              Your trusted destination for premium electronics. Quality products, 
              unbeatable prices, and exceptional service.
            </p>
            <div className="flex space-x-4">
              <button className="bg-gray-800 p-2 rounded-full hover:bg-fluxkart-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </button>
              <button className="bg-gray-800 p-2 rounded-full hover:bg-fluxkart-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </button>
              <button className="bg-gray-800 p-2 rounded-full hover:bg-fluxkart-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Returns</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Categories</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Mobile Phones</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Headphones</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Earphones</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">TWS Earbuds</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Accessories</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-fluxkart-primary" />
                <span className="text-gray-400">123 Tech Street, Digital City</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-fluxkart-primary" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-fluxkart-primary" />
                <span className="text-gray-400">support@fluxkart.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 FluxKart. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
