import Link from 'next/link';
import { ArrowRight, Star, Sparkles, TrendingUp, Shield, Clock, Users, Calendar, MapPin, Phone, CheckCircle } from 'lucide-react';
import { eventCategories } from '@/data/events';

export default function HomePage() {
  const stats = [
    { number: '10,000+', label: 'Happy Families', icon: Users, color: 'from-blue-500 to-indigo-500' },
    { number: '500+', label: 'Expert Vendors', icon: Shield, color: 'from-green-500 to-emerald-500' },
    { number: '50+', label: 'Cities Covered', icon: MapPin, color: 'from-purple-500 to-violet-500' },
    { number: '24/7', label: 'Support', icon: Clock, color: 'from-orange-500 to-red-500' }
  ];

  const features = [
    {
      icon: Calendar,
      title: 'Complete Event Planning',
      description: 'From concept to execution, we handle every detail of your special day',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Experienced professionals who understand Indian traditions and modern trends',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Verified vendors and venues with guaranteed satisfaction',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: TrendingUp,
      title: 'Best Value',
      description: 'Competitive pricing with premium quality services',
      color: 'from-purple-500 to-violet-500'
    }
  ];

  const testimonials = [
    {
      name: 'Priya & Rajesh',
      event: 'Wedding Reception',
      location: 'Mumbai, Maharashtra',
      comment: 'EventWala made our wedding planning so easy! The team was professional and everything was perfect on our special day.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Anjali & Vikram',
      event: 'Diwali Celebration',
      location: 'Delhi, Delhi',
      comment: 'Amazing service for our Diwali party! The decorations and catering were exactly what we wanted.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Meera & Arjun',
      event: 'Housewarming Ceremony',
      location: 'Bangalore, Karnataka',
      comment: 'Perfect housewarming ceremony with traditional puja and modern celebrations. Highly recommended!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face'
    }
  ];

  const trendingEvents = [
    {
      name: 'Traditional Wedding',
      description: 'Complete wedding with all ceremonies',
      image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=300&fit=crop',
      price: '₹2,00,000+',
      category: 'Marriage'
    },
    {
      name: 'Diwali Celebration',
      description: 'Festival of lights with family',
      image: 'https://images.unsplash.com/photo-1606220838315-056192d5e927?w=400&h=300&fit=crop',
      price: '₹25,000+',
      category: 'Festival'
    },
    {
      name: 'Ganesh Chaturthi',
      description: 'Traditional puja and celebrations',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop',
      price: '₹15,000+',
      category: 'Religious'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50 overflow-hidden">
        {/* Background Pattern - Lighter */}
        <div className="absolute inset-0 mandala-bg opacity-20"></div>
        
        {/* Floating Elements - Reduced animation */}
        <div className="absolute top-20 left-10 w-16 h-16 lg:w-20 lg:h-20 bg-orange-200 rounded-full opacity-20"></div>
        <div className="absolute top-40 right-20 w-12 h-12 lg:w-16 lg:h-16 bg-red-200 rounded-full opacity-20"></div>
        <div className="absolute bottom-20 left-1/4 w-8 h-8 lg:w-12 lg:h-12 bg-yellow-200 rounded-full opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg mb-6 lg:mb-8">
              <Sparkles className="w-4 h-4 lg:w-5 lg:h-5 text-orange-500" />
              <span className="text-sm font-medium text-gray-700">India&apos;s #1 Event Planning Platform</span>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 lg:mb-6">
              Plan Your Perfect
              <span className="block gradient-text">Indian Celebration</span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-6 lg:mb-8 max-w-3xl mx-auto">
              From traditional weddings to modern celebrations, we bring your vision to life with authentic Indian culture and world-class service
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 lg:mb-12">
              <Link
                href="/events"
                className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-xl font-semibold text-base lg:text-lg hover:from-orange-700 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center justify-center"
              >
                Start Planning Now
                <ArrowRight className="ml-2 w-4 h-4 lg:w-5 lg:h-5" />
              </Link>
              <Link
                href="/contact"
                className="border-2 border-orange-600 text-orange-600 px-6 lg:px-8 py-3 lg:py-4 rounded-xl font-semibold text-base lg:text-lg hover:bg-orange-600 hover:text-white transition-all duration-300 transform hover:scale-105 backdrop-blur-sm inline-flex items-center justify-center"
              >
                Get Free Consultation
              </Link>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className={`w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center mx-auto mb-2 lg:mb-3`}>
                    <stat.icon className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                  </div>
                  <div className="text-lg lg:text-2xl font-bold text-gray-900">{stat.number}</div>
                  <div className="text-xs lg:text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trending Events */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl lg:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trending This Season
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
              Discover the most popular event types and get inspired for your next celebration
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {trendingEvents.map((event, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 card-shadow hover:card-shadow-hover">
                <div className="relative h-40 lg:h-48 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                    <span className="text-xs lg:text-sm font-medium text-gray-700">{event.category}</span>
                  </div>
                  <div className="absolute top-3 right-3 bg-gradient-to-r from-orange-500 to-red-500 text-white px-2 py-1 rounded-full">
                    <span className="text-xs lg:text-sm font-medium">{event.price}</span>
                  </div>
                </div>
                <div className="p-4 lg:p-6">
                  <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2">{event.name}</h3>
                  <p className="text-sm lg:text-base text-gray-600 mb-3 lg:mb-4">{event.description}</p>
                  <Link
                    href="/events"
                    className="inline-flex items-center text-orange-600 font-semibold hover:text-orange-700 transition-colors text-sm lg:text-base"
                  >
                    Explore Packages
                    <ArrowRight className="ml-2 w-3 h-3 lg:w-4 lg:h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Categories */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl lg:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Every Celebration, Every Tradition
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
              We specialize in all types of Indian celebrations and ceremonies, from traditional to modern
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {eventCategories.map((category) => (
              <Link
                key={category.id}
                href={`/events/${category.id}`}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 overflow-hidden card-shadow hover:card-shadow-hover"
              >
                <div className="relative h-40 lg:h-48 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                    <span className="text-xs lg:text-sm font-medium text-gray-700">
                      {category.subEvents.length} Events
                    </span>
                  </div>
                </div>
                <div className="p-4 lg:p-6">
                  <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm lg:text-base text-gray-600 mb-3 lg:mb-4">
                    {category.description}
                  </p>
                  <div className="flex items-center text-orange-600 font-medium text-sm lg:text-base">
                    Explore Packages
                    <ArrowRight className="ml-2 w-3 h-3 lg:w-4 lg:h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl lg:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose EventWala?
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
              We make event planning simple, stress-free, and enjoyable with our comprehensive services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className={`w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center mx-auto mb-3 lg:mb-4 group-hover:scale-105 transition-transform duration-300`}>
                  <feature.icon className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                </div>
                <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm lg:text-base text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl lg:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
              Don&apos;t just take our word for it - hear from the families who&apos;ve planned their perfect events with us
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-4 lg:p-6 hover:shadow-xl transition-shadow duration-300 card-shadow hover:card-shadow-hover">
                <div className="flex items-center mb-3 lg:mb-4">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full overflow-hidden mr-3">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm lg:text-base">{testimonial.name}</h4>
                    <p className="text-xs lg:text-sm text-gray-600">{testimonial.event}</p>
                    <p className="text-xs text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
                <p className="text-sm lg:text-base text-gray-700 italic mb-3 lg:mb-4">&quot;{testimonial.comment}&quot;</p>
                <div className="flex items-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 lg:w-4 lg:h-4 text-yellow-400 fill-current" />
                  ))}
                  {[...Array(5 - testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 lg:w-4 lg:h-4 text-gray-300" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-2xl lg:text-3xl md:text-4xl font-bold text-gray-900 mb-4 lg:mb-6">
                Your Trusted Partner in Event Planning
              </h2>
              <p className="text-base lg:text-lg text-gray-600 mb-6 lg:mb-8">
                With years of experience in Indian celebrations, we understand the cultural significance of every ceremony and ensure that your special moments are perfect in every detail.
              </p>
              
              <div className="space-y-3 lg:space-y-4">
                <div className="flex items-center space-x-2 lg:space-x-3">
                  <CheckCircle className="w-5 h-5 lg:w-6 lg:h-6 text-green-500" />
                  <span className="text-sm lg:text-base text-gray-700">Verified and trusted vendors</span>
                </div>
                <div className="flex items-center space-x-2 lg:space-x-3">
                  <CheckCircle className="w-5 h-5 lg:w-6 lg:h-6 text-green-500" />
                  <span className="text-sm lg:text-base text-gray-700">Traditional expertise with modern approach</span>
                </div>
                <div className="flex items-center space-x-2 lg:space-x-3">
                  <CheckCircle className="w-5 h-5 lg:w-6 lg:h-6 text-green-500" />
                  <span className="text-sm lg:text-base text-gray-700">24/7 customer support</span>
                </div>
                <div className="flex items-center space-x-2 lg:space-x-3">
                  <CheckCircle className="w-5 h-5 lg:w-6 lg:h-6 text-green-500" />
                  <span className="text-sm lg:text-base text-gray-700">Competitive pricing and transparent quotes</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl p-6 lg:p-8">
                <div className="text-center">
                  <div className="w-16 h-16 lg:w-24 lg:h-24 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6">
                    <Phone className="w-8 h-8 lg:w-12 lg:h-12 text-white" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 lg:mb-4">Get Free Consultation</h3>
                  <p className="text-sm lg:text-base text-gray-600 mb-4 lg:mb-6">Speak with our event planning experts today</p>
                  <a
                    href="tel:+9118001234567"
                    className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 lg:px-8 py-3 rounded-xl font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300 inline-flex items-center text-sm lg:text-base"
                  >
                    <Phone className="w-4 h-4 lg:w-5 lg:h-5 mr-2" />
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl md:text-4xl font-bold mb-4 lg:mb-6">
            Ready to Create Your Perfect Celebration?
          </h2>
          <p className="text-lg lg:text-xl mb-6 lg:mb-8 text-orange-100">
            Join thousands of families who trust EventWala for their special moments
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/events"
              className="bg-white text-orange-600 px-6 lg:px-8 py-3 lg:py-4 rounded-xl font-semibold text-base lg:text-lg hover:bg-orange-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center justify-center"
            >
              Start Planning Now
              <ArrowRight className="ml-2 w-4 h-4 lg:w-5 lg:h-5" />
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-6 lg:px-8 py-3 lg:py-4 rounded-xl font-semibold text-base lg:text-lg hover:bg-white hover:text-orange-600 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm inline-flex items-center justify-center"
            >
              Get Expert Advice
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
