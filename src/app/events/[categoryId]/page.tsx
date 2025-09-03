import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, Star, Package, Users } from 'lucide-react';
import { eventCategories } from '@/data/events';

interface PageProps {
  params: Promise<{
    categoryId: string;
  }>;
}

export default async function EventCategoryPage({ params }: PageProps) {
  const resolvedParams = await params;
  const category = eventCategories.find(cat => cat.id === resolvedParams.categoryId);
  
  if (!category) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 mb-6">
            <Link
              href="/events"
              className="flex items-center space-x-2 text-orange-100 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Events</span>
            </Link>
          </div>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {category.name}
            </h1>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto">
              {category.description}
            </p>
          </div>
        </div>
      </section>

      {/* Sub Events */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your {category.name} Event
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Select from our carefully curated packages for each ceremony
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {category.subEvents.map((subEvent) => (
              <div key={subEvent.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={subEvent.image}
                    alt={subEvent.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-sm font-medium text-gray-700">{subEvent.packages.length} Packages</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {subEvent.name}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {subEvent.description}
                  </p>
                  
                  {/* Package Count */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Package className="w-5 h-5" />
                      <span className="text-sm">{subEvent.packages.length} Packages</span>
                    </div>
                    <div className="text-sm text-gray-500">
                      Starting from ₹{Math.min(...subEvent.packages.map(p => p.price)).toLocaleString()}
                    </div>
                  </div>
                  
                  {/* Package Preview */}
                  <div className="space-y-3 mb-6">
                    {subEvent.packages.slice(0, 2).map((pkg) => (
                      <div key={pkg.id} className="bg-gray-50 rounded-lg p-3">
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-gray-700">{pkg.name}</span>
                          <span className="font-bold text-orange-600">₹{pkg.price.toLocaleString()}</span>
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
                  
                  <Link
                    href={`/events/${category.id}/${subEvent.id}`}
                    className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300 inline-flex items-center justify-center"
                  >
                    View All Packages
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our {category.name} Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We understand the cultural significance and ensure every detail is perfect
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Traditional Expertise
              </h3>
              <p className="text-gray-600">
                Deep understanding of cultural traditions and customs
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Customizable Packages
              </h3>
              <p className="text-gray-600">
                Tailor every aspect to match your vision and budget
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Expert Team
              </h3>
              <p className="text-gray-600">
                Experienced professionals dedicated to your satisfaction
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Plan Your {category.name}?
          </h2>
          <p className="text-xl mb-8 text-orange-100">
            Let our experts help you create the perfect celebration
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/planner"
              className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-50 transition-colors inline-flex items-center justify-center"
            >
              Start Planning Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-orange-600 transition-colors inline-flex items-center justify-center"
            >
              Get Expert Advice
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
