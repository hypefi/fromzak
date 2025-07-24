import React from 'react';
import Link from 'next/link';
import { 
  Instagram, 
  Phone, 
  Mail, 
  MapPin, 
  Waves, 
  Camera, 
  Users, 
  Heart 
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Photography Services', href: '/photography' },
    { name: 'Surf Coaching', href: '/coaching' },
    { name: 'Packages', href: '/packages' },
    { name: 'About Zak', href: '/about' },
  ];

  const services = [
    { name: 'Photography', href: '/photography' },
    { name: 'Coaching', href: '/coaching' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Store', href: '/store' },
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-teal-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-teal-500">
                <Waves className="h-7 w-7 text-white" />
              </div>
              <div>
                <h3 className="font-righteous font-bold text-xl">Zakaria Radmi</h3>
                <p className="text-blue-200 text-sm">Surf Photographer & Coach</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Capturing the essence of surfing in Morocco through professional photography 
              and personalized coaching experiences. Your perfect wave awaits.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/from_zak"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/212671142448"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-righteous font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-1 h-1 bg-teal-400 rounded-full mr-3 group-hover:w-2 transition-all duration-200"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-righteous font-semibold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-1 h-1 bg-teal-400 rounded-full mr-3 group-hover:w-2 transition-all duration-200"></span>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-righteous font-semibold text-lg mb-6">Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-teal-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300">Morocco, Bouznika Region</span>
              </div>
              <a
                href="https://wa.me/212671142448"
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-200"
              >
                <Phone className="h-5 w-5 text-teal-400" />
                <span>+212 671 142 448</span>
              </a>
              <a
                href="https://instagram.com/from_zak"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-200"
              >
                <Instagram className="h-5 w-5 text-teal-400" />
                <span>@from_zak</span>
              </a>
            </div>

            {/* CTA Button */}
            <div className="mt-6">
              <a
                href="https://wa.me/212671142448"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full font-medium hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                <Phone className="h-4 w-4" />
                <span>Book Your Session</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-300">
              <span>&copy; {currentYear} Zakaria Radmi Photography & Coaching.</span>
              <span className="hidden md:inline">All rights reserved.</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300">
              <a
                href="https://instagram.com/quantum_names"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-white transition-colors duration-200"
              >
                <span>Made with</span>
                <Heart className="h-4 w-4 text-red-400" />
                <span>for surfers by surfers</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 