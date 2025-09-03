'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, Heart, ShoppingCart, User, Menu, X, Phone } from 'lucide-react';
import CartDialog from './CartDialog';
import WishlistDialog from './WishlistDialog';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  // Mock data - in real app this would come from context/state management
  const cartItems = [
    {
      id: '1',
      name: 'Haldi Ceremony Package',
      price: 15000,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=150&h=150&fit=crop',
      category: 'Wedding'
    },
    {
      id: '2',
      name: 'Traditional Catering',
      price: 25000,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=150&h=150&fit=crop',
      category: 'Catering'
    }
  ];

  const wishlistItems = [
    {
      id: '1',
      name: 'Luxury Wedding Venue',
      price: 100000,
      image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=150&h=150&fit=crop',
      category: 'Venue',
      description: 'Beautiful palace venue for grand celebrations'
    }
  ];

  const handleUpdateQuantity = (id: string, quantity: number) => {
    // In real app, update cart state
    console.log('Update quantity:', id, quantity);
  };

  const handleRemoveFromCart = (id: string) => {
    // In real app, remove from cart state
    console.log('Remove from cart:', id);
  };

  const handleRemoveFromWishlist = (id: string) => {
    // In real app, remove from wishlist state
    console.log('Remove from wishlist:', id);
  };

  const handleAddToCart = (item: any) => {
    // In real app, add to cart state
    console.log('Add to cart:', item);
  };

  return (
    <>
      <nav className="bg-white shadow-lg border-b border-orange-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center space-x-2 lg:space-x-3">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg lg:text-xl">EW</span>
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                    EventWala
                  </h1>
                  <p className="text-xs text-gray-500 -mt-1">Celebrate Life</p>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link href="/events" className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-orange-50">
                Events
              </Link>
              <Link href="/venues" className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-orange-50">
                Venues
              </Link>
              <Link href="/vendors" className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-orange-50">
                Vendors
              </Link>
              <Link href="/packages" className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-orange-50">
                Packages
              </Link>
              <Link href="/planner" className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-orange-50">
                Planner
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-orange-50">
                Contact
              </Link>
            </div>

            {/* Search Bar */}
            <div className="hidden md:flex flex-1 max-w-md mx-4 lg:mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 lg:w-5 lg:h-5" />
                <input
                  type="text"
                  placeholder="Search events, venues, vendors..."
                  className="w-full pl-9 lg:pl-10 pr-4 py-2 lg:py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-gray-50 hover:bg-white transition-colors text-sm lg:text-base"
                />
              </div>
            </div>

            {/* User Actions */}
            <div className="flex items-center space-x-2 lg:space-x-4">
              {/* Quick Contact - Hidden on small mobile */}
              <a
                href="tel:+9118001234567"
                className="hidden sm:flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 lg:px-4 py-2 rounded-xl hover:from-orange-600 hover:to-red-600 transition-all duration-200 transform hover:scale-105 text-sm lg:text-base"
              >
                <Phone className="w-3 h-3 lg:w-4 lg:h-4" />
                <span className="font-medium hidden lg:inline">Call Now</span>
                <span className="font-medium lg:hidden">Call</span>
              </a>

              {/* Action Buttons */}
              <button 
                onClick={() => setIsWishlistOpen(true)}
                className="relative p-2 lg:p-3 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-xl transition-all duration-200 group"
              >
                <Heart className="w-5 h-5 lg:w-6 lg:h-6 group-hover:scale-110 transition-transform" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {wishlistItems.length}
                </span>
              </button>
              
              <button 
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 lg:p-3 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-xl transition-all duration-200 group"
              >
                <ShoppingCart className="w-5 h-5 lg:w-6 lg:h-6 group-hover:scale-110 transition-transform" />
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              </button>
              
              <button className="p-2 lg:p-3 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-xl transition-all duration-200 group">
                <User className="w-5 h-5 lg:w-6 lg:h-6 group-hover:scale-110 transition-transform" />
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-xl transition-all duration-200"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Search Bar */}
          <div className="md:hidden pb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search events, venues, vendors..."
                className="w-full pl-9 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-gray-50 text-sm"
              />
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100">
            <div className="px-4 py-6 space-y-3">
              <Link
                href="/events"
                className="block text-gray-700 hover:text-orange-600 font-medium py-3 px-4 rounded-lg hover:bg-orange-50 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Events
              </Link>
              <Link
                href="/venues"
                className="block text-gray-700 hover:text-orange-600 font-medium py-3 px-4 rounded-lg hover:bg-orange-50 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Venues
              </Link>
              <Link
                href="/vendors"
                className="block text-gray-700 hover:text-orange-600 font-medium py-3 px-4 rounded-lg hover:bg-orange-50 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Vendors
              </Link>
              <Link
                href="/packages"
                className="block text-gray-700 hover:text-orange-600 font-medium py-3 px-4 rounded-lg hover:bg-orange-50 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Packages
              </Link>
              <Link
                href="/planner"
                className="block text-gray-700 hover:text-orange-600 font-medium py-3 px-4 rounded-lg hover:bg-orange-50 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Planner
              </Link>
              <Link
                href="/contact"
                className="block text-gray-700 hover:text-orange-600 font-medium py-3 px-4 rounded-lg hover:bg-orange-50 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              
              {/* Mobile Contact Button */}
              <a
                href="tel:+9118001234567"
                className="block bg-gradient-to-r from-orange-500 to-red-500 text-white text-center py-3 px-4 rounded-xl hover:from-orange-600 hover:to-red-600 transition-all duration-200"
              >
                <Phone className="w-4 h-4 inline mr-2" />
                Call Now
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Cart Dialog */}
      <CartDialog
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
      />

      {/* Wishlist Dialog */}
      <WishlistDialog
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        items={wishlistItems}
        onRemoveItem={handleRemoveFromWishlist}
        onAddToCart={handleAddToCart}
      />
    </>
  );
}
