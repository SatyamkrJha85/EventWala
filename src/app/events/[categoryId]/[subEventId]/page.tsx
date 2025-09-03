'use client';

import { useState, useEffect } from 'react';
import { Heart, Plus, Minus, ShoppingCart, Star } from 'lucide-react';
import { eventCategories } from '@/data/events';
import { notFound } from 'next/navigation';

interface PackageItem {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  maxQuantity: number;
  image: string;
}

interface Package {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  items: PackageItem[];
}

interface SubEvent {
  id: string;
  name: string;
  description: string;
  image: string;
  packages: Package[];
}

interface EventCategory {
  id: string;
  name: string;
  description: string;
  image: string;
  subEvents: SubEvent[];
}

interface SelectedPackage {
  packageId: string;
  packageName: string;
  items: {
    itemId: string;
    name: string;
    price: number;
    quantity: number;
  }[];
  totalPrice: number;
}

export default function SubEventPage({ params }: { params: Promise<{ categoryId: string; subEventId: string }> }) {
  const [selectedPackages, setSelectedPackages] = useState<SelectedPackage[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [resolvedParams, setResolvedParams] = useState<{ categoryId: string; subEventId: string } | null>(null);

  // Resolve params when component mounts
  useEffect(() => {
    params.then(resolved => setResolvedParams(resolved));
  }, [params]);

  if (!resolvedParams) {
    return <div>Loading...</div>;
  }

  const category = eventCategories.find(cat => cat.id === resolvedParams.categoryId);
  if (!category) notFound();

  const subEvent = category.subEvents.find(sub => sub.id === resolvedParams.subEventId);
  if (!subEvent) notFound();

  const handleQuantityChange = (packageId: string, itemId: string, newQuantity: number) => {
    setSelectedPackages(prev => {
      const existingPackage = prev.find(pkg => pkg.packageId === packageId);
      
      if (existingPackage) {
        // Update existing package
        const updatedItems = existingPackage.items.map(item => 
          item.itemId === itemId ? { ...item, quantity: newQuantity } : item
        );
        
        const totalPrice = updatedItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        
        return prev.map(pkg => 
          pkg.packageId === packageId 
            ? { ...pkg, items: updatedItems, totalPrice }
            : pkg
        );
      } else {
        // Add new package
        const packageData = subEvent.packages.find(pkg => pkg.id === packageId);
        if (!packageData) return prev;
        
        const item = packageData.items.find(item => item.id === itemId);
        if (!item) return prev;
        
        const newPackage: SelectedPackage = {
          packageId,
          packageName: packageData.name,
          items: [{ itemId, name: item.name, price: item.price, quantity: newQuantity }],
          totalPrice: item.price * newQuantity
        };
        
        return [...prev, newPackage];
      }
    });
  };

  const addToWishlist = (packageId: string) => {
    setWishlist(prev => 
      prev.includes(packageId) 
        ? prev.filter(id => id !== packageId)
        : [...prev, packageId]
    );
  };

  const getTotalPrice = () => {
    return selectedPackages.reduce((sum, pkg) => sum + pkg.totalPrice, 0);
  };

  const getSelectedItemQuantity = (packageId: string, itemId: string) => {
    const pkg = selectedPackages.find(p => p.packageId === packageId);
    if (!pkg) return 0;
    
    const item = pkg.items.find(i => i.itemId === itemId);
    return item ? item.quantity : 0;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {subEvent.name}
          </h1>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto">
            {subEvent.description}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Available Packages</h2>
            
            <div className="space-y-8">
              {subEvent.packages.map((pkg) => (
                <div key={pkg.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  {/* Package Header */}
                  <div className="p-6 border-b border-gray-100">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                        <p className="text-gray-600 mb-3">{pkg.description}</p>
                        <div className="text-3xl font-bold text-orange-600">₹{pkg.price.toLocaleString()}</div>
                      </div>
                      <button
                        onClick={() => addToWishlist(pkg.id)}
                        className={`p-3 rounded-full transition-colors ${
                          wishlist.includes(pkg.id)
                            ? 'bg-red-100 text-red-600 hover:bg-red-200'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                      >
                        <Heart className={`w-6 h-6 ${wishlist.includes(pkg.id) ? 'fill-current' : ''}`} />
                      </button>
                    </div>
                  </div>

                  {/* Package Items */}
                  <div className="p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Package Includes:</h4>
                    <div className="space-y-4">
                      {pkg.items.map((item) => (
                        <div key={item.id} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg">
                          <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                            <img 
                              src={item.image} 
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          
                          <div className="flex-1">
                            <h5 className="font-medium text-gray-900">{item.name}</h5>
                            <p className="text-sm text-gray-600">{item.description}</p>
                            <div className="text-lg font-semibold text-orange-600 mt-1">
                              ₹{item.price.toLocaleString()}
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => handleQuantityChange(pkg.id, item.id, Math.max(0, getSelectedItemQuantity(pkg.id, item.id) - 1))}
                              className="w-8 h-8 bg-gray-100 text-gray-600 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            
                            <span className="w-12 text-center font-medium text-gray-900">
                              {getSelectedItemQuantity(pkg.id, item.id)}
                            </span>
                            
                            <button
                              onClick={() => handleQuantityChange(pkg.id, item.id, Math.min(item.maxQuantity, getSelectedItemQuantity(pkg.id, item.id) + 1))}
                              className="w-8 h-8 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center hover:bg-orange-200 transition-colors"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Your Selection</h3>
              
              {selectedPackages.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  <ShoppingCart className="w-12 h-12 mx-auto mb-3 text-gray-300" />
                  <p>No items selected yet</p>
                  <p className="text-sm">Choose items from packages above</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {selectedPackages.map((pkg) => (
                    <div key={pkg.packageId} className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">{pkg.packageName}</h4>
                      <div className="space-y-2 mb-3">
                        {pkg.items.map((item) => (
                          <div key={item.itemId} className="flex justify-between text-sm">
                            <span className="text-gray-600">{item.name} (x{item.quantity})</span>
                            <span className="font-medium">₹{(item.price * item.quantity).toLocaleString()}</span>
                          </div>
                        ))}
                      </div>
                      <div className="border-t pt-2">
                        <div className="flex justify-between font-semibold">
                          <span>Package Total:</span>
                          <span className="text-orange-600">₹{pkg.totalPrice.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  <div className="border-t pt-4">
                    <div className="flex justify-between text-xl font-bold text-gray-900 mb-4">
                      <span>Total:</span>
                      <span className="text-orange-600">₹{getTotalPrice().toLocaleString()}</span>
                    </div>
                    
                    <button className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white py-3 rounded-lg font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300 transform hover:scale-105">
                      Proceed to Checkout
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
