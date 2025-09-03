import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { eventCategories } from '@/data/events';

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Event Categories
          </h1>
          <p className="text-xl text-orange-100 max-w-2xl mx-auto">
            Discover our comprehensive range of event planning services for every celebration
          </p>
        </div>
      </section>

      {/* Event Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {eventCategories.map((category) => (
              <div key={category.id} className="bg-white rounded-2xl shadow-xl overflow-hidden">
                {/* Category Header */}
                <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-8">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-3xl">
                        {category.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold mb-2">{category.name}</h2>
                      <p className="text-orange-100 text-lg">{category.description}</p>
                    </div>
                  </div>
                </div>

                {/* Sub Events Grid */}
                <div className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.subEvents.map((subEvent) => (
                      <Link
                        key={subEvent.id}
                        href={`/events/${category.id}/${subEvent.id}`}
                        className="group bg-gray-50 rounded-xl p-6 hover:bg-orange-50 transition-all duration-300 border border-gray-200 hover:border-orange-200 hover:shadow-lg"
                      >
                        <div className="text-center">
                          <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                            <span className="text-white font-bold text-xl">
                              {subEvent.name.charAt(0)}
                            </span>
                          </div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                            {subEvent.name}
                          </h3>
                          <p className="text-gray-600 mb-4 text-sm">
                            {subEvent.description}
                          </p>
                          
                          {/* Package Preview */}
                          <div className="space-y-2">
                            {subEvent.packages.slice(0, 2).map((pkg) => (
                              <div key={pkg.id} className="bg-white rounded-lg p-3 border border-gray-200">
                                <div className="flex justify-between items-center">
                                  <span className="text-sm font-medium text-gray-700">{pkg.name}</span>
                                  <span className="text-sm font-bold text-orange-600">₹{pkg.price.toLocaleString()}</span>
                                </div>
                              </div>
                            ))}
                            {subEvent.packages.length > 2 && (
                              <div className="text-center">
                                <span className="text-sm text-gray-500">
                                  +{subEvent.packages.length - 2} more packages
                                </span>
                              </div>
                            )}
                          </div>
                          
                          <div className="mt-4 flex items-center justify-center text-orange-600 font-medium text-sm">
                            View Details
                            <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Can&apos;t Find What You&apos;re Looking For?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Our team of event planning experts can help you create a custom package for any celebration
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-orange-700 hover:to-red-700 transition-all duration-300 inline-flex items-center justify-center"
            >
              Contact Our Experts
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/planner"
              className="border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-600 hover:text-white transition-all duration-300 inline-flex items-center justify-center"
            >
              Start Custom Planning
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
