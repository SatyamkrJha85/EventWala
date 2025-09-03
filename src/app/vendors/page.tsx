'use client';

import { useState } from 'react';
import { Search, MapPin, Star, Phone, Mail, Heart, Filter, Award, Clock, Users } from 'lucide-react';
import { vendors } from '@/data/events';

export default function VendorsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [priceRange, setPriceRange] = useState('');

  const categories = [...new Set(vendors.map(vendor => vendor.category))];
  const locations = [...new Set(vendors.map(vendor => vendor.location))];

  const filteredVendors = vendors.filter(vendor => {
    const matchesSearch = vendor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         vendor.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         vendor.services.some(service => service.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = !selectedCategory || vendor.category === selectedCategory;
    const matchesLocation = !selectedLocation || vendor.location === selectedLocation;
    const matchesPrice = !priceRange || 
      (priceRange === 'low' && vendor.priceRange.includes('₹2000')) ||
      (priceRange === 'medium' && vendor.priceRange.includes('₹5000')) ||
      (priceRange === 'high' && vendor.priceRange.includes('₹10000'));

    return matchesSearch && matchesCategory && matchesLocation && matchesPrice;
  });

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('');
    setSelectedLocation('');
    setPriceRange('');
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Mehendi Artist':
        return '🎨';
      case 'Catering':
        return '🍽️';
      case 'Photography':
        return '📸';
      case 'Decoration':
        return '🌸';
      case 'Entertainment':
        return '🎵';
      default:
        return '✨';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Mehendi Artist':
        return 'from-pink-500 to-rose-500';
      case 'Catering':
        return 'from-orange-500 to-red-500';
      case 'Photography':
        return 'from-blue-500 to-indigo-500';
      case 'Decoration':
        return 'from-green-500 to-emerald-500';
      case 'Entertainment':
        return 'from-purple-500 to-violet-500';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Find Expert Vendors
          </h1>
          <p className="text-xl text-orange-100 max-w-2xl mx-auto">
            Connect with trusted professionals for every aspect of your event. From catering to entertainment, we've got you covered.
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {/* Search */}
              <div className="lg:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search vendors, services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <option value="">All Categories</option>
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              {/* Location Filter */}
              <div>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <option value="">All Locations</option>
                  {locations.map(location => (
                    <option key={location} value={location}>{location}</option>
                  ))}
                </select>
              </div>

              {/* Price Filter */}
              <div>
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <option value="">All Prices</option>
                  <option value="low">Under ₹5,000</option>
                  <option value="medium">₹5,000 - ₹10,000</option>
                  <option value="high">Above ₹10,000</option>
                </select>
              </div>
            </div>

            {/* Clear Filters */}
            {(searchTerm || selectedCategory || selectedLocation || priceRange) && (
              <div className="mt-4 text-center">
                <button
                  onClick={clearFilters}
                  className="text-orange-600 hover:text-orange-700 font-medium"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Vendors List */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              {filteredVendors.length} Vendors Found
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredVendors.map((vendor) => (
              <div key={vendor.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 card-shadow hover:card-shadow-hover">
                {/* Vendor Header */}
                <div className="relative h-48 bg-gradient-to-br from-orange-100 to-red-100">
                  {/* Vendor Image */}
                  <img
                    src={vendor.image}
                    alt={vendor.name}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Overlay with category icon */}
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                    <div className={`w-16 h-16 bg-gradient-to-r ${getCategoryColor(vendor.category)} rounded-full flex items-center justify-center text-2xl`}>
                      {getCategoryIcon(vendor.category)}
                    </div>
                  </div>
                  
                  <div className="absolute top-4 right-4 bg-white bg-opacity-90 px-3 py-1 rounded-full">
                    <span className="text-sm font-medium text-gray-700">
                      {vendor.priceRange}
                    </span>
                  </div>
                  <button className="absolute top-4 left-4 bg-white bg-opacity-90 p-2 rounded-full hover:bg-opacity-100 transition-all duration-300">
                    <Heart className="w-5 h-5 text-red-500" />
                  </button>
                  <div className="absolute bottom-4 left-4 bg-white bg-opacity-90 px-3 py-1 rounded-full">
                    <span className="text-sm font-medium text-gray-700">
                      {vendor.category}
                    </span>
                  </div>
                </div>

                {/* Vendor Details */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{vendor.name}</h3>
                      <div className="flex items-center text-gray-600 mb-2">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span className="text-sm">{vendor.location}</span>
                      </div>
                      <div className="flex items-center text-gray-600 mb-3">
                        <Users className="w-4 h-4 mr-1" />
                        <span className="text-sm">{vendor.services.length} services</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center mb-2">
                        <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                        <span className="font-semibold text-gray-900">{vendor.rating}</span>
                      </div>
                      <div className="text-sm text-gray-500">
                        {vendor.reviews.length} reviews
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 line-clamp-2">{vendor.description}</p>

                  {/* Services */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Services:</h4>
                    <div className="flex flex-wrap gap-2">
                      {vendor.services.slice(0, 4).map((service, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-orange-100 text-orange-800 text-xs rounded-full"
                        >
                          {service}
                        </span>
                      ))}
                      {vendor.services.length > 4 && (
                        <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                          +{vendor.services.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Reviews Preview */}
                  {vendor.reviews.length > 0 && (
                    <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center mb-2">
                        <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                        <span className="text-sm font-medium text-gray-900">
                          {vendor.reviews[0].userName}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        "{vendor.reviews[0].comment}"
                      </p>
                    </div>
                  )}

                  {/* Contact and Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-3">
                      {vendor.contact.phone && (
                        <a
                          href={`tel:${vendor.contact.phone}`}
                          className="flex items-center text-gray-600 hover:text-orange-600 transition-colors"
                        >
                          <Phone className="w-4 h-4 mr-1" />
                          <span className="text-sm">Call</span>
                        </a>
                      )}
                      {vendor.contact.email && (
                        <a
                          href={`mailto:${vendor.contact.email}`}
                          className="flex items-center text-gray-600 hover:text-orange-600 transition-colors"
                        >
                          <Mail className="w-4 h-4 mr-1" />
                          <span className="text-sm">Email</span>
                        </a>
                      )}
                    </div>
                    
                    <button className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300 transform hover:scale-105">
                      Get Quote
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredVendors.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Search className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No vendors found</h3>
              <p className="text-gray-600">Try adjusting your search criteria or filters</p>
            </div>
          )}
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Service Categories</h2>
            <p className="text-xl text-gray-600">Find the perfect vendor for every aspect of your event</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <div key={index} className="text-center group">
                <div className={`w-20 h-20 bg-gradient-to-r ${getCategoryColor(category)} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-3xl">{getCategoryIcon(category)}</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{category}</h3>
                <p className="text-sm text-gray-600">
                  {vendors.filter(v => v.category === category).length} vendors
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need a Custom Quote?
          </h2>
          <p className="text-xl mb-8 text-orange-100">
            Can't find exactly what you're looking for? Our team can help you find the perfect vendor or create a custom package.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Request Custom Quote
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-orange-600 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
              Talk to Expert
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
