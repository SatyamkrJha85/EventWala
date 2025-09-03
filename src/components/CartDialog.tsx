'use client';

import { useState } from 'react';
import { X, ShoppingCart, Trash2, Plus, Minus, ArrowRight } from 'lucide-react';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  category: string;
}

interface CartDialogProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemoveItem: (id: string) => void;
}

export default function CartDialog({ isOpen, onClose, items, onUpdateQuantity, onRemoveItem }: CartDialogProps) {
  const totalPrice = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-2 sm:p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm sm:max-w-2xl max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
            <h2 className="text-lg sm:text-xl font-bold text-gray-900">Shopping Cart</h2>
            <span className="bg-orange-100 text-orange-800 text-xs sm:text-sm font-medium px-2 py-1 rounded-full">
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

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 max-h-96">
          {items.length === 0 ? (
            <div className="text-center py-8 sm:py-12">
              <ShoppingCart className="w-12 h-12 sm:w-16 sm:h-16 text-gray-300 mx-auto mb-3 sm:mb-4" />
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Your cart is empty</h3>
              <p className="text-sm sm:text-base text-gray-600">Start adding items to plan your perfect event</p>
            </div>
          ) : (
            <div className="space-y-3 sm:space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 border border-gray-200 rounded-lg">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base truncate">{item.name}</h4>
                    <p className="text-xs sm:text-sm text-gray-600">{item.category}</p>
                    <div className="text-base sm:text-lg font-bold text-orange-600 mt-1">
                      ₹{item.price.toLocaleString()}
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => onUpdateQuantity(item.id, Math.max(0, item.quantity - 1))}
                      className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-100 text-gray-600 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                    >
                      <Minus className="w-3 h-3 sm:w-4 sm:h-4" />
                    </button>
                    
                    <span className="w-8 sm:w-12 text-center font-medium text-gray-900 text-sm sm:text-base">
                      {item.quantity}
                    </span>
                    
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                      className="w-6 h-6 sm:w-8 sm:h-8 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center hover:bg-orange-200 transition-colors"
                    >
                      <Plus className="w-3 h-3 sm:w-4 sm:h-4" />
                    </button>
                  </div>
                  
                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="p-1 sm:p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <Trash2 className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-gray-200 p-4 sm:p-6">
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <span className="text-base sm:text-lg font-semibold text-gray-900">Total:</span>
              <span className="text-xl sm:text-2xl font-bold text-orange-600">₹{totalPrice.toLocaleString()}</span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={onClose}
                className="flex-1 border-2 border-gray-300 text-gray-700 py-2 sm:py-3 px-4 sm:px-6 rounded-lg font-semibold hover:bg-gray-50 transition-colors text-sm sm:text-base"
              >
                Continue Shopping
              </button>
              <button className="flex-1 bg-gradient-to-r from-orange-600 to-red-600 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center text-sm sm:text-base">
                Proceed to Checkout
                <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
