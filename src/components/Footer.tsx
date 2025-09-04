import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">E</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                EventWala
              </span>
            </div>
            <p className="text-gray-300 text-sm">
              Your one-stop destination for all event planning needs. From traditional ceremonies to modern celebrations.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/events" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/venues" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Venues
                </Link>
              </li>
              <li>
                <Link href="/vendors" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Vendors
                </Link>
              </li>
              <li>
                <Link href="/packages" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Packages
                </Link>
              </li>
              <li>
                <Link href="/planner" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Event Planner
                </Link>
              </li>
            </ul>
          </div>

          {/* Event Categories */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Event Categories</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/events/marriage" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Marriage
                </Link>
              </li>
              <li>
                <Link href="/events/diwali" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Diwali
                </Link>
              </li>
              <li>
                <Link href="/events/ganesh-puja" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Ganesh Puja
                </Link>
              </li>
              <li>
                <Link href="/events/birthday" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Birthday
                </Link>
              </li>
              <li>
                <Link href="/events/housewarming" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Housewarming
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-orange-400" />
                <span className="text-gray-300">Mumbai, Maharashtra, India</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-orange-400" />
                <span className="text-gray-300">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-orange-400" />
                <span className="text-gray-300">info@eventwala.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 EventWala. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

