'use client';

import React, { useState } from 'react';
import { Camera, Users, Clock, Euro, DollarSign, Star, Calendar, ArrowRight } from 'lucide-react';

const Photography = () => {
  const [selectedService, setSelectedService] = useState('');
  const [showBookingForm, setShowBookingForm] = useState(false);

  const photographyServices = [
    {
      id: 'freelance',
      title: 'Freelance Photography',
      description: 'Professional surf photography sessions capturing your best moments on the waves',
      icon: Camera,
      features: ['High-resolution photos', 'Professional editing', 'Online gallery', 'Print options']
    },
    {
      id: 'videography',
      title: 'Video Graphy',
      description: 'Dynamic surf videography to showcase your surfing skills and style',
      icon: Users,
      features: ['4K video recording', 'Cinematic editing', 'Slow-motion captures', 'Highlight reels']
    },
    {
      id: 'competitions',
      title: 'Competition Coverage',
      description: 'Complete coverage of surf competitions and contests',
      icon: Star,
      features: ['Event documentation', 'Action shots', 'Award ceremonies', 'Social media content']
    },
    {
      id: 'pro-surfer',
      title: 'Pro-Surfer Sessions',
      description: 'Specialized photography for professional surfers and athletes',
      icon: ArrowRight,
      features: ['Sponsor content', 'Portfolio building', 'Social media packages', 'Commercial usage rights']
    }
  ];

  const pricingOptions = [
    {
      type: 'Private Session',
      duration: '2 hours',
      price: { mad: '300', eur: '100' },
      description: 'One-on-one photography session with personalized attention',
      popular: true
    },
    {
      type: 'Group Session',
      duration: '2 hours',
      minPeople: '5+',
      price: { mad: '150', eur: '50' },
      description: 'Perfect for groups of friends or surf schools',
      popular: false
    }
  ];

  const BookingForm = () => (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-poppins font-bold text-gray-900">Book Photography Session</h3>
          <button
            onClick={() => setShowBookingForm(false)}
            className="text-gray-400 hover:text-gray-600"
          >
            ✕
          </button>
        </div>
        
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
            <input
              type="text"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Your full name"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
            <input
              type="text"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Your country"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Language</label>
            <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option value="">Select language</option>
              <option value="english">English</option>
              <option value="french">French</option>
              <option value="arabic">Arabic</option>
              <option value="spanish">Spanish</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Service Type</label>
            <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option value="">Select service</option>
              <option value="private">Private Session (€100)</option>
              <option value="group">Group Session (€50/person)</option>
              <option value="freelance">Freelance Photography</option>
              <option value="videography">Video Graphy</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date</label>
            <input
              type="date"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Additional Notes</label>
            <textarea
              rows={3}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Any special requirements or questions..."
            ></textarea>
          </div>
          
          <button
            type="submit"
            className="w-full btn-ocean"
          >
            Book Session
          </button>
        </form>
      </div>
    </div>
  );

  return (
    <section id="photography" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 rounded-full px-4 py-2 text-sm font-medium mb-4">
            <Camera className="h-4 w-4" />
            <span>Photography Services</span>
          </div>
          <h2 className="font-poppins font-bold text-4xl lg:text-5xl text-gray-900 mb-6">
            Capture Your Surf Story
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional surf photography and videography services to immortalize your perfect waves and surfing journey in Morocco.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {photographyServices.map((service) => {
            const IconComponent = service.icon;
            return (
              <div key={service.id} className="card-surf p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-xl flex items-center justify-center mb-4">
                  <IconComponent className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-poppins font-semibold text-xl text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Pricing Section */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl">
          <div className="text-center mb-12">
            <h3 className="font-poppins font-bold text-3xl text-gray-900 mb-4">
              Photography Pricing
            </h3>
            <p className="text-gray-600">
              Transparent pricing with no hidden fees. Prices may vary based on conditions and location.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {pricingOptions.map((option, index) => (
              <div
                key={index}
                className={`relative rounded-2xl p-8 border-2 transition-all duration-300 ${
                  option.popular
                    ? 'border-blue-500 bg-blue-50 scale-105'
                    : 'border-gray-200 hover:border-blue-300'
                }`}
              >
                {option.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center">
                  <h4 className="font-poppins font-bold text-2xl text-gray-900 mb-2">
                    {option.type}
                  </h4>
                  <div className="flex items-center justify-center space-x-2 mb-4">
                    <Clock className="h-5 w-5 text-gray-500" />
                    <span className="text-gray-600">{option.duration}</span>
                    {option.minPeople && (
                      <>
                        <span className="text-gray-400">•</span>
                        <Users className="h-5 w-5 text-gray-500" />
                        <span className="text-gray-600">{option.minPeople}</span>
                      </>
                    )}
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex items-center justify-center space-x-4">
                      <div className="text-center">
                        <div className="flex items-center justify-center space-x-1">
                          <span className="text-3xl font-bold text-gray-900">{option.price.mad}</span>
                          <span className="text-lg text-gray-600">DH</span>
                        </div>
                      </div>
                      <span className="text-gray-400">or</span>
                      <div className="text-center">
                        <div className="flex items-center justify-center space-x-1">
                          <Euro className="h-5 w-5 text-gray-600" />
                          <span className="text-3xl font-bold text-gray-900">{option.price.eur}</span>
                        </div>
                      </div>
                    </div>
                    {option.minPeople && (
                      <p className="text-sm text-gray-500 mt-2">Per person (minimum 5 people)</p>
                    )}
                  </div>
                  
                  <p className="text-gray-600 mb-6">{option.description}</p>
                  
                  <button
                    onClick={() => setShowBookingForm(true)}
                    className={`w-full py-3 rounded-full font-medium transition-all duration-300 ${
                      option.popular
                        ? 'btn-ocean'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Book Session
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Note */}
          <div className="text-center text-sm text-gray-500">
            <p>* Pricing may change based on surf conditions, location, and specific requirements</p>
          </div>
        </div>
      </div>

      {showBookingForm && <BookingForm />}
    </section>
  );
};

export default Photography; 