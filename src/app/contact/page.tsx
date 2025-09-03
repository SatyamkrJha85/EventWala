'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', eventType: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const officeLocations = [
    {
      city: 'Mumbai',
      address: '123 MG Road, Nariman Point, Mumbai, Maharashtra 400021',
      phone: '+91 22 1234 5678',
      email: 'mumbai@eventwala.com',
      hours: 'Mon-Sat: 9:00 AM - 7:00 PM'
    },
    {
      city: 'Delhi',
      address: '456 Connaught Place, New Delhi, Delhi 110001',
      phone: '+91 11 1234 5678',
      email: 'delhi@eventwala.com',
      hours: 'Mon-Sat: 9:00 AM - 7:00 PM'
    },
    {
      city: 'Bangalore',
      address: '789 Brigade Road, MG Road, Bangalore, Karnataka 560001',
      phone: '+91 80 1234 5678',
      email: 'bangalore@eventwala.com',
      hours: 'Mon-Sat: 9:00 AM - 7:00 PM'
    }
  ];

  const supportChannels = [
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Speak directly with our event planning experts',
      contact: '+91 1800 123 4567',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us your queries and get detailed responses',
      contact: 'support@eventwala.com',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Get instant help from our customer support team',
      contact: 'Available 24/7',
      color: 'from-purple-500 to-violet-500'
    }
  ];

  const faqs = [
    {
      question: 'How far in advance should I book my event?',
      answer: 'We recommend booking at least 6 months in advance for weddings and 3 months for other events to ensure availability of your preferred vendors and venues.'
    },
    {
      question: 'Do you provide services outside major cities?',
      answer: 'Yes! We have a network of vendors and venues across 50+ cities in India. Contact us for specific locations and we\'ll connect you with local experts.'
    },
    {
      question: 'What if I need to make changes to my booking?',
      answer: 'We understand that plans can change. Most of our vendors offer flexible modification policies. Contact our support team for assistance with any changes.'
    },
    {
      question: 'How do you ensure quality of vendors?',
      answer: 'All our vendors are verified, background-checked, and rated by previous customers. We maintain strict quality standards and regularly review vendor performance.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-orange-100 max-w-2xl mx-auto">
            Have questions about event planning? Need a custom quote? Our team is here to help you create the perfect celebration.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Message Sent Successfully!</h3>
                  <p className="text-gray-600">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="eventType" className="block text-sm font-medium text-gray-700 mb-2">
                        Event Type
                      </label>
                      <select
                        id="eventType"
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      >
                        <option value="">Select event type</option>
                        <option value="wedding">Wedding</option>
                        <option value="birthday">Birthday</option>
                        <option value="corporate">Corporate Event</option>
                        <option value="cultural">Cultural Celebration</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="Tell us about your event and requirements..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Support Channels */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">Get Support</h3>
                <div className="space-y-4">
                  {supportChannels.map((channel, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-md">
                      <div className={`w-12 h-12 bg-gradient-to-r ${channel.color} rounded-full flex items-center justify-center`}>
                        <channel.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">{channel.title}</h4>
                        <p className="text-sm text-gray-600">{channel.description}</p>
                        <p className="text-orange-600 font-medium">{channel.contact}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="w-6 h-6 text-orange-600" />
                  <h3 className="text-xl font-bold text-gray-900">Office Hours</h3>
                </div>
                <div className="space-y-2 text-gray-600">
                  <p><span className="font-medium">Monday - Friday:</span> 9:00 AM - 7:00 PM</p>
                  <p><span className="font-medium">Saturday:</span> 9:00 AM - 6:00 PM</p>
                  <p><span className="font-medium">Sunday:</span> 10:00 AM - 4:00 PM</p>
                  <p className="text-sm text-gray-500 mt-2">* Emergency support available 24/7</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Visit Our Offices</h2>
            <p className="text-xl text-gray-600">Meet our team in person at any of our locations</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {officeLocations.map((office, index) => (
              <div key={index} className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{office.city}</h3>
                
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-center justify-center space-x-2">
                    <MapPin className="w-4 h-4 text-orange-600" />
                    <span>{office.address}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Phone className="w-4 h-4 text-orange-600" />
                    <span>{office.phone}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Mail className="w-4 h-4 text-orange-600" />
                    <span>{office.email}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Clock className="w-4 h-4 text-orange-600" />
                    <span>{office.hours}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Find answers to common questions about our services</p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Planning?
          </h2>
          <p className="text-xl mb-8 text-orange-100">
            Don't wait! Contact us today and let our experts help you create the perfect event.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+9118001234567"
              className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-50 transition-all duration-300 inline-flex items-center justify-center transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Phone className="mr-2 w-5 h-5" />
              Call Now
            </a>
            <a
              href="mailto:support@eventwala.com"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-orange-600 transition-all duration-300 inline-flex items-center justify-center transform hover:scale-105 backdrop-blur-sm"
            >
              <Mail className="mr-2 w-5 h-5" />
              Send Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
