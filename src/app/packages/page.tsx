'use client';

import { useState } from 'react';
import { Search, Filter, X, Star, Package, Heart, ShoppingCart, ArrowRight } from 'lucide-react';
import { eventCategories } from '@/data/events';

export default function PackagesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEventType, setSelectedEventType] = useState('');
  const [selectedPriceRange, setSelectedPriceRange] = useState('');
  const [wishlist, setWishlist] = useState<string[]>([]);

  // Extract all packages from all event categories
  const allPackages = eventCategories.flatMap(category =>
    category.subEvents.flatMap(subEvent =>
      subEvent.packages.map(pkg => ({
        ...pkg,
        eventCategory: category.name,
        subEventName: subEvent.name
      }))
    )
  );

  const eventTypes = Array.from(new Set(allPackages.map(pkg => pkg.eventCategory)));

  const filteredPackages = allPackages.filter(pkg => {
    const matchesSearch = pkg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pkg.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pkg.eventCategory.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pkg.subEventName.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesEventType = !selectedEventType || pkg.eventCategory === selectedEventType;
    
    const matchesPrice = !selectedPriceRange || (() => {
      const [min, max] = selectedPriceRange.split('-').map(Number);
      if (max) {
        return pkg.price >= min && pkg.price <= max;
      }
      return pkg.price >= min;
    })();
    
    return matchesSearch && matchesEventType && matchesPrice;
  });

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedEventType('');
    setSelectedPriceRange('');
  };

  const hasActiveFilters = searchTerm || selectedEventType || selectedPriceRange;

  const addToWishlist = (packageId: string) => {
    setWishlist(prev => 
      prev.includes(packageId) 
        ? prev.filter(id => id !== packageId)
        : [...prev, packageId]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Event Packages
          </h1>
          <p className="text-xl text-orange-100 max-w-2xl mx-auto">
            Choose from our carefully curated packages for every celebration
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search packages, events..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>

              {/* Event Type Filter */}
              <select
                value={selectedEventType}
                onChange={(e) => setSelectedEventType(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              >
                <option value="">All Event Types</option>
                {eventTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>

              {/* Price Range */}
              <select
                value={selectedPriceRange}
                onChange={(e) => setSelectedPriceRange(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              >
                <option value="">All Prices</option>
                <option value="0-10000">Under ₹10,000</option>
                <option value="10000-25000">₹10,000 - ₹25,000</option>
                <option value="25000-50000">₹25,000 - ₹50,000</option>
                <option value="50000-100000">₹50,000 - ₹1,00,000</option>
                <option value="100000-">Above ₹1,00,000</option>
              </select>
            </div>

            {hasActiveFilters && (
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Filter className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-600">Active filters:</span>
                  {searchTerm && (
                    <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs">
                      Search: {searchTerm}
                    </span>
                  )}
                  {selectedEventType && (
                    <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs">
                      Event: {selectedEventType}
                    </span>
                  )}
                  {selectedPriceRange && (
                    <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs">
                      Price: {selectedPriceRange}
                    </span>
                  )}
                </div>
                <button
                  onClick={clearFilters}
                  className="text-orange-600 hover:text-orange-700 text-sm font-medium flex items-center space-x-1"
                >
                  <X className="w-4 h-4" />
                  <span>Clear all</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Available Packages
            </h2>
            <div className="text-gray-600">
              {filteredPackages.length} package{filteredPackages.length !== 1 ? 's' : ''} found
            </div>
          </div>

          {filteredPackages.length === 0 ? (
            <div className="text-center py-20">
              <Package className="w-16 h-16 mx-auto mb-4 text-gray-300" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No packages found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search criteria or filters</p>
              <button
                onClick={clearFilters}
                className="bg-orange-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-700 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPackages.map((pkg) => (
                <div key={pkg.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
                  {/* Package Image */}
                  <div className="h-48 bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center relative">
                    <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-2xl">
                        {pkg.name.charAt(0)}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4 flex space-x-2">
                      <button
                        onClick={() => addToWishlist(pkg.id)}
                        className={`p-2 rounded-full transition-colors ${
                          wishlist.includes(pkg.id)
                            ? 'text-red-500 bg-red-50'
                            : 'text-gray-400 hover:text-red-500 hover:bg-red-50'
                        }`}
                      >
                        <Heart className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Package Details */}
                  <div className="p-6">
                    <div className="mb-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs font-medium">
                          {pkg.eventCategory}
                        </span>
                        <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-medium">
                          {pkg.subEventName}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">{pkg.description}</p>
                    </div>

                    {/* Package Info */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center space-x-2">
                        <Package className="w-4 h-4 text-orange-500" />
                        <span className="text-sm text-gray-600">{pkg.items.length} items</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span className="text-sm text-gray-600">4.8 (120 reviews)</span>
                      </div>
                    </div>

                    {/* Package Items Preview */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Includes:</h4>
                      <div className="space-y-2">
                        {pkg.items.slice(0, 3).map((item, index) => (
                          <div key={index} className="flex items-center space-x-2 text-sm">
                            <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                            <span className="text-gray-700">{item.name}</span>
                          </div>
                        ))}
                        {pkg.items.length > 3 && (
                          <div className="text-sm text-gray-500">
                            +{pkg.items.length - 3} more items
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Price and Actions */}
                    <div className="border-t pt-4">
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-3xl font-bold text-orange-600">
                          ₹{pkg.price.toLocaleString()}
                        </div>
                        <div className="text-sm text-gray-500">
                          Starting price
                        </div>
                      </div>
                      
                      <div className="flex space-x-3">
                        <button className="flex-1 bg-gradient-to-r from-orange-600 to-red-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300 flex items-center justify-center">
                          <ShoppingCart className="w-4 h-4 mr-2" />
                          Add to Cart
                        </button>
                        <button className="px-4 py-3 border border-orange-600 text-orange-600 rounded-lg font-semibold hover:bg-orange-600 hover:text-white transition-all duration-300 flex items-center">
                          <span>View</span>
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Can't Find the Perfect Package?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Our team can create a custom package tailored to your specific needs and budget
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-orange-700 hover:to-red-700 transition-all duration-300">
              Request Custom Package
            </button>
            <button className="border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-600 hover:text-white transition-all duration-300">
              Talk to Expert
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
