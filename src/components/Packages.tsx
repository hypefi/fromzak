'use client';

import React, { useState } from 'react';
import { Camera, Video, BarChart3, CheckCircle, Star, Users, Clock } from 'lucide-react';

const Packages = () => {
  const [showBookingForm, setShowBookingForm] = useState(false);

  const packages = [
    {
      id: 'pack1',
      name: 'Pack 1 - Photos Only',
      price: 10,
      period: 'person/day',
      description: 'Perfect for capturing your surf memories',
      icon: Camera,
      color: 'from-blue-500 to-cyan-500',
      features: [
        'High-resolution surf photography',
        'Multiple sessions throughout the day',
        'Professional editing',
        'Online gallery access',
        'Download all photos',
        'Social media ready formats'
      ],
      popular: false
    },
    {
      id: 'pack2',
      name: 'Pack 2 - Videos Only',
      price: 20,
      period: 'person/day',
      description: 'Dynamic video content of your surfing',
      icon: Video,
      color: 'from-purple-500 to-pink-500',
      features: [
        '4K video recording',
        'Multiple angles and perspectives',
        'Professional video editing',
        'Highlight reel creation',
        'Slow-motion captures',
        'Music and effects included'
      ],
      popular: false
    },
    {
      id: 'pack3',
      name: 'Pack 3 - Complete Experience',
      price: 30,
      period: 'person/day',
      description: 'The ultimate surf documentation package',
      icon: Star,
      color: 'from-orange-500 to-red-500',
      features: [
        'Everything from Pack 1 & 2',
        'Lifestyle photography',
        'Comprehensive surf video analysis',
        'Performance feedback',
        'Technique improvement tips',
        'Complete surf documentation'
      ],
      popular: true
    }
  ];

  const addOnServices = [
    {
      name: 'Surf Video Analysis',
      price: 10,
      period: 'person/day',
      description: 'Detailed analysis of your surfing technique with professional feedback',
      icon: BarChart3,
      features: [
        'Frame-by-frame analysis',
        'Technique breakdown',
        'Improvement recommendations',
        'Comparison with pro surfers',
        'Written feedback report'
      ]
    }
  ];

  const BookingForm = () => {
    const [formData, setFormData] = useState({
      fullName: '',
      country: '',
      language: '',
      package: '',
      numberOfPeople: '',
      numberOfDays: '',
      startDate: '',
      specialRequests: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    };

    const getPackageName = (packageId: string) => {
      const packageNames = {
        'pack1': 'Pack 1 - Photos Only ($10/day)',
        'pack2': 'Pack 2 - Videos Only ($20/day)', 
        'pack3': 'Pack 3 - Complete Experience ($30/day)',
        'analysis': 'Video Analysis Add-on ($10/day)'
      };
      return packageNames[packageId as keyof typeof packageNames] || packageId;
    };

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      
      // Format the WhatsApp message
      const message = `Hi Zak! I'd like to book a surf package at LaCrique Surf House.

📦 Package Booking Details:
👤 Name: ${formData.fullName}
🌍 Country: ${formData.country}
🗣️ Language: ${formData.language}
📋 Package: ${getPackageName(formData.package)}
👥 Number of People: ${formData.numberOfPeople}
📅 Number of Days: ${formData.numberOfDays}
🗓️ Start Date: ${formData.startDate}
📝 Special Requests: ${formData.specialRequests || 'None'}

Looking forward to an amazing surf experience with you!`;

      // Encode the message for URL
      const encodedMessage = encodeURIComponent(message);
      
      // Open WhatsApp with the message
      window.open(`https://wa.me/212671142448?text=${encodedMessage}`, '_blank');
      
      // Close the form
      setShowBookingForm(false);
    };

    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-righteous font-bold text-gray-900">Book Package</h3>
            <button
              onClick={() => setShowBookingForm(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Your full name"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Your country"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Language</label>
              <select 
                name="language"
                value={formData.language}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              >
                <option value="">Select language</option>
                <option value="english">English</option>
                <option value="french">French</option>
                <option value="arabic">Arabic</option>
                <option value="spanish">Spanish</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Package</label>
              <select 
                name="package"
                value={formData.package}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              >
                <option value="">Select package</option>
                <option value="pack1">Pack 1 - Photos Only ($10/day)</option>
                <option value="pack2">Pack 2 - Videos Only ($20/day)</option>
                <option value="pack3">Pack 3 - Complete Experience ($30/day)</option>
                <option value="analysis">Video Analysis Add-on ($10/day)</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Number of People</label>
              <input
                type="number"
                name="numberOfPeople"
                value={formData.numberOfPeople}
                onChange={handleInputChange}
                min="1"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Number of participants"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Number of Days</label>
              <input
                type="number"
                name="numberOfDays"
                value={formData.numberOfDays}
                onChange={handleInputChange}
                min="1"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="How many days"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Start Date</label>
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Special Requests</label>
              <textarea
                name="specialRequests"
                value={formData.specialRequests}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Any specific requirements or preferences..."
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full btn-ocean"
            >
              Book Package
            </button>
          </form>
        </div>
      </div>
    );
  };

  return (
    <section id="packages" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-800 rounded-full px-4 py-2 text-sm font-medium mb-4">
            <Star className="h-4 w-4" />
            <span>LaCrique Surf House Packages</span>
          </div>
          <h2 className="font-righteous font-bold text-4xl lg:text-5xl text-gray-900 mb-6">
            Complete Surf Packages
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our comprehensive packages designed to capture and enhance your entire surf experience 
            at LaCrique Surf House. From photos to videos and performance analysis.
          </p>
        </div>

        {/* Main Packages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {packages.map((pkg) => {
            const IconComponent = pkg.icon;
            return (
              <div
                key={pkg.id}
                className={`relative card-surf overflow-hidden ${
                  pkg.popular ? 'lg:scale-105 border-2 border-orange-500' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className={`h-2 bg-gradient-to-r ${pkg.color}`}></div>
                
                <div className="p-4 sm:p-6 lg:p-8">
                  <div className="flex items-start space-x-3 mb-4 sm:mb-6">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${pkg.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <IconComponent className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-righteous font-bold text-lg sm:text-xl text-gray-900 mb-1">
                        {pkg.name}
                      </h3>
                      <p className="text-gray-600 text-xs sm:text-sm">{pkg.description}</p>
                    </div>
                  </div>

                  <div className="text-center mb-4 sm:mb-6">
                    <div className="flex items-center justify-center space-x-1 mb-2">
                      <span className="text-3xl sm:text-4xl font-bold text-gray-900">${pkg.price}</span>
                    </div>
                    <p className="text-gray-600 text-sm">{pkg.period}</p>
                  </div>

                  <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                    {pkg.features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-2 sm:space-x-3">
                        <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-teal-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-xs sm:text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => setShowBookingForm(true)}
                    className={`w-full py-3 rounded-full font-medium transition-all duration-300 text-sm sm:text-base ${
                      pkg.popular
                        ? 'btn-coral'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Select Package
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Add-on Services */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl">
          <div className="text-center mb-12">
            <h3 className="font-righteous font-bold text-3xl text-gray-900 mb-4">
              Add-on Services
            </h3>
            <p className="text-gray-600">
              Enhance your package with additional professional services for the complete experience.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            {addOnServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-gray-50 rounded-2xl p-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-righteous font-bold text-xl text-gray-900">
                          {service.name}
                        </h4>
                        <div className="text-right">
                          <span className="text-2xl font-bold text-gray-900">${service.price}</span>
                          <p className="text-gray-600 text-sm">{service.period}</p>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-teal-500" />
                            <span className="text-sm text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <button
                        onClick={() => setShowBookingForm(true)}
                        className="btn-ocean"
                      >
                        Add to Package
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Package Benefits */}
        <div className="mt-16 text-center">
          <h3 className="font-righteous font-bold text-xl sm:text-2xl text-gray-900 mb-6 sm:mb-8">
            Why Choose Our Packages?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Users className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h4 className="font-righteous font-semibold text-base sm:text-lg text-gray-900 mb-2">
                Group Friendly
              </h4>
              <p className="text-gray-600 text-sm sm:text-base">
                Perfect for surf camps, friends, and group adventures
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Clock className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h4 className="font-righteous font-semibold text-base sm:text-lg text-gray-900 mb-2">
                All Day Coverage
              </h4>
              <p className="text-gray-600 text-sm sm:text-base">
                Comprehensive documentation throughout your surf day
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Star className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h4 className="font-righteous font-semibold text-base sm:text-lg text-gray-900 mb-2">
                Professional Quality
              </h4>
              <p className="text-gray-600 text-sm sm:text-base">
                High-end equipment and expert editing for stunning results
              </p>
            </div>
          </div>
        </div>
      </div>

      {showBookingForm && <BookingForm />}
    </section>
  );
};

export default Packages; 