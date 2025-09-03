'use client';

import { useState } from 'react';
import { X, Heart, Trash2, ShoppingCart, ArrowRight } from 'lucide-react';

interface WishlistItem {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

interface WishlistDialogProps {
  isOpen: boolean;
  onClose: () => void;
  items: WishlistItem[];
  onRemoveItem: (id: string) => void;
  onAddToCart: (item: WishlistItem) => void;
}

export default function WishlistDialog({ isOpen, onClose, items, onRemoveItem, onAddToCart }: WishlistDialogProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-2 sm:p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm sm:max-w-2xl max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-red-500 fill-current" />
            <h2 className="text-lg sm:text-xl font-bold text-gray-900">My Wishlist</h2>
            <span className="bg-red-100 text-red-800 text-xs sm:text-sm font-medium px-2 py-1 rounded-full">
              {items.length} items
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 sm:p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" />
          </button>
        </div>

        {/* Wishlist Items */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 max-h-96">
          {items.length === 0 ? (
            <div className="text-center py-8 sm:py-12">
              <Heart className="w-12 h-12 sm:w-16 sm:h-16 text-gray-300 mx-auto mb-3 sm:mb-4" />
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Your wishlist is empty</h3>
              <p className="text-sm sm:text-base text-gray-600">Start saving items you love for your perfect event</p>
            </div>
          ) : (
            <div className="space-y-3 sm:space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 border border-gray-200 rounded-lg">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base truncate">{item.name}</h4>
                    <p className="text-xs sm:text-sm text-gray-600 mb-2 line-clamp-2">{item.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs sm:text-sm text-gray-500">{item.category}</span>
                      <div className="text-base sm:text-lg font-bold text-orange-600">
                        ₹{item.price.toLocaleString()}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col space-y-2">
                    <button
                      onClick={() => onAddToCart(item)}
                      className="flex items-center space-x-2 bg-orange-600 text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors text-xs sm:text-sm"
                    >
                      <ShoppingCart className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>Add to Cart</span>
                    </button>
                    
                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="flex items-center space-x-2 text-red-500 hover:bg-red-50 px-3 sm:px-4 py-2 rounded-lg transition-colors text-xs sm:text-sm"
                    >
                      <Trash2 className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>Remove</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-gray-200 p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={onClose}
                className="flex-1 border-2 border-gray-300 text-gray-700 py-2 sm:py-3 px-4 sm:px-6 rounded-lg font-semibold hover:bg-gray-50 transition-colors text-sm sm:text-base"
              >
                Continue Browsing
              </button>
              <button className="flex-1 bg-gradient-to-r from-orange-600 to-red-600 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center text-sm sm:text-base">
                View All Events
                <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
