'use client';

import { useState } from 'react';
import { Search, MapPin, Users, Star, Phone, Mail, Globe, Heart } from 'lucide-react';
import { venues } from '@/data/events';

export default function VenuesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [capacityRange, setCapacityRange] = useState('');

  const cities = [...new Set(venues.map(venue => venue.city))];

  const filteredVenues = venues.filter(venue => {
    const matchesSearch = venue.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         venue.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCity = !selectedCity || venue.city === selectedCity;
    const matchesPrice = !priceRange || 
      (priceRange === 'low' && venue.price <= 30000) ||
      (priceRange === 'medium' && venue.price > 30000 && venue.price <= 70000) ||
      (priceRange === 'high' && venue.price > 70000);
    const matchesCapacity = !capacityRange ||
      (capacityRange === 'small' && venue.capacity <= 300) ||
      (capacityRange === 'medium' && venue.capacity > 300 && venue.capacity <= 500) ||
      (capacityRange === 'large' && venue.capacity > 500);

    return matchesSearch && matchesCity && matchesPrice && matchesCapacity;
  });

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCity('');
    setPriceRange('');
    setCapacityRange('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Find Your Perfect Venue
          </h1>
          <p className="text-xl text-orange-100 max-w-2xl mx-auto">
            Discover beautiful venues across India for your special celebrations. From intimate gatherings to grand events.
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
                    placeholder="Search venues..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
              </div>

              {/* City Filter */}
              <div>
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <option value="">All Cities</option>
                  {cities.map(city => (
                    <option key={city} value={city}>{city}</option>
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
                  <option value="low">Under ₹30,000</option>
                  <option value="medium">₹30,000 - ₹70,000</option>
                  <option value="high">Above ₹70,000</option>
                </select>
              </div>

              {/* Capacity Filter */}
              <div>
                <select
                  value={capacityRange}
                  onChange={(e) => setCapacityRange(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <option value="">All Sizes</option>
                  <option value="small">Up to 300</option>
                  <option value="medium">300 - 500</option>
                  <option value="large">500+</option>
                </select>
              </div>
            </div>

            {/* Clear Filters */}
            {(searchTerm || selectedCity || priceRange || capacityRange) && (
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

      {/* Venues List */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              {filteredVenues.length} Venues Found
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredVenues.map((venue) => (
              <div key={venue.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                {/* Venue Images */}
                <div className="relative h-64 bg-gray-200">
                  <img
                    src={venue.images[0]}
                    alt={venue.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white bg-opacity-90 px-3 py-1 rounded-full">
                    <span className="text-sm font-medium text-gray-700">
                      ₹{venue.price.toLocaleString()}
                    </span>
                  </div>
                  <button className="absolute top-4 left-4 bg-white bg-opacity-90 p-2 rounded-full hover:bg-opacity-100 transition-all duration-300">
                    <Heart className="w-5 h-5 text-red-500" />
                  </button>
                </div>

                {/* Venue Details */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{venue.name}</h3>
                      <div className="flex items-center text-gray-600 mb-2">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span className="text-sm">{venue.address}</span>
                      </div>
                      <div className="flex items-center text-gray-600 mb-3">
                        <Users className="w-4 h-4 mr-1" />
                        <span className="text-sm">Capacity: {venue.capacity} guests</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center mb-2">
                        <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                        <span className="font-semibold text-gray-900">{venue.rating}</span>
                      </div>
                      <div className="text-2xl font-bold text-orange-600">
                        ₹{venue.price.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-500">per event</div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 line-clamp-2">{venue.description}</p>

                  {/* Amenities */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Amenities:</h4>
                    <div className="flex flex-wrap gap-2">
                      {venue.amenities.slice(0, 6).map((amenity, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-orange-100 text-orange-800 text-xs rounded-full"
                        >
                          {amenity}
                        </span>
                      ))}
                      {venue.amenities.length > 6 && (
                        <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                          +{venue.amenities.length - 6} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Reviews Preview */}
                  {venue.reviews.length > 0 && (
                    <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center mb-2">
                        <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                        <span className="text-sm font-medium text-gray-900">
                          {venue.reviews[0].userName}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        "{venue.reviews[0].comment}"
                      </p>
                    </div>
                  )}

                  {/* Contact and Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-3">
                      {venue.contact.phone && (
                        <a
                          href={`tel:${venue.contact.phone}`}
                          className="flex items-center text-gray-600 hover:text-orange-600 transition-colors"
                        >
                          <Phone className="w-4 h-4 mr-1" />
                          <span className="text-sm">Call</span>
                        </a>
                      )}
                      {venue.contact.email && (
                        <a
                          href={`mailto:${venue.contact.email}`}
                          className="flex items-center text-gray-600 hover:text-orange-600 transition-colors"
                        >
                          <Mail className="w-4 h-4 mr-1" />
                          <span className="text-sm">Email</span>
                        </a>
                      )}
                      {venue.contact.website && (
                        <a
                          href={`https://${venue.contact.website}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-gray-600 hover:text-orange-600 transition-colors"
                        >
                          <Globe className="w-4 h-4 mr-1" />
                          <span className="text-sm">Website</span>
                        </a>
                      )}
                    </div>
                    
                    <button className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300 transform hover:scale-105">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredVenues.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Search className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No venues found</h3>
              <p className="text-gray-600">Try adjusting your search criteria or filters</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Can't Find the Perfect Venue?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Our venue experts can help you find the ideal location for your celebration. Get personalized recommendations based on your requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-orange-700 hover:to-red-700 transition-all duration-300 transform hover:scale-105">
              Get Expert Help
            </button>
            <button className="border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-600 hover:text-white transition-all duration-300 transform hover:scale-105">
              Request Custom Quote
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
