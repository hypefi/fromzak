'use client';

import React, { useState } from 'react';
import { Waves, User, Clock, Euro, Star, Trophy, Target, CheckCircle } from 'lucide-react';

const Coaching = () => {
  const [showBookingForm, setShowBookingForm] = useState(false);

  const coachingFeatures = [
    {
      icon: User,
      title: 'Personalized Training',
      description: 'Customized surf coaching based on your skill level and goals'
    },
    {
      icon: Waves,
      title: 'Wave Reading',
      description: 'Learn to read waves, understand surf conditions and ocean safety'
    },
    {
      icon: Target,
      title: 'Technique Improvement',
      description: 'Perfect your pop-up, stance, and surfing maneuvers with expert guidance'
    },
    {
      icon: Trophy,
      title: 'Competition Prep',
      description: 'Prepare for surf competitions with strategic coaching and mindset training'
    }
  ];

  const skillLevels = [
    {
      level: 'Beginner',
      description: 'Never surfed before or just getting started',
      focus: ['Ocean safety basics', 'Paddle technique', 'Pop-up fundamentals', 'Wave positioning'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      level: 'Intermediate',
      description: 'Can catch waves but want to improve technique',
      focus: ['Bottom turns', 'Cutbacks', 'Wave selection', 'Speed generation'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      level: 'Advanced',
      description: 'Experienced surfer looking to perfect skills',
      focus: ['Advanced maneuvers', 'Competition strategy', 'Performance analysis', 'Mental coaching'],
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const BookingForm = () => {
    const [formData, setFormData] = useState({
      fullName: '',
      country: '',
      language: '',
      skillLevel: '',
      preferredDate: '',
      goals: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    };

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      
      // Format the WhatsApp message
      const message = `Hi Zak! I'd like to book a surf coaching session.

📋 Booking Details:
👤 Name: ${formData.fullName}
🌍 Country: ${formData.country}
🗣️ Language: ${formData.language}
🏄‍♂️ Skill Level: ${formData.skillLevel}
📅 Preferred Date: ${formData.preferredDate}
🎯 Goals & Expectations: ${formData.goals}

Looking forward to hearing from you!`;

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
            <h3 className="text-2xl font-righteous font-bold text-gray-900">Book Coaching Session</h3>
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
              <label className="block text-sm font-medium text-gray-700 mb-2">Skill Level</label>
              <select 
                name="skillLevel"
                value={formData.skillLevel}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              >
                <option value="">Select your level</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date</label>
              <input
                type="date"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Goals & Expectations</label>
              <textarea
                name="goals"
                value={formData.goals}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="What would you like to achieve in this session?"
                required
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full btn-ocean"
            >
              Book Coaching Session
            </button>
          </form>
        </div>
      </div>
    );
  };

  return (
    <section id="coaching" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-teal-100 text-teal-800 rounded-full px-4 py-2 text-sm font-medium mb-4">
            <Waves className="h-4 w-4" />
            <span>Surf Coaching</span>
          </div>
          <h2 className="font-righteous font-bold text-4xl lg:text-5xl text-gray-900 mb-6">
            Master Your Surfing Skills
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional surf coaching with years of experience. From beginners to advanced surfers, 
            I'll help you improve your technique and confidence in the water.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {coachingFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-righteous font-semibold text-xl text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Skill Levels */}
        <div className="mb-16">
          <h3 className="font-righteous font-bold text-3xl text-center text-gray-900 mb-12">
            Coaching for All Levels
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skillLevels.map((skill, index) => (
              <div key={index} className="card-surf overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${skill.color}`}></div>
                <div className="p-6">
                  <h4 className="font-righteous font-bold text-xl text-gray-900 mb-2">
                    {skill.level}
                  </h4>
                  <p className="text-gray-600 mb-4">
                    {skill.description}
                  </p>
                  <div className="space-y-2">
                    <h5 className="font-medium text-gray-900">Focus Areas:</h5>
                    {skill.focus.map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-teal-500" />
                        <span className="text-sm text-gray-600">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing */}
        <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-3xl p-8 lg:p-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="font-righteous font-bold text-3xl text-gray-900 mb-4">
                Private Surf Coaching
              </h3>
              <p className="text-gray-600">
                One-on-one personalized coaching sessions tailored to your individual needs and goals.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-500 rounded-xl flex items-center justify-center">
                      <Waves className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-righteous font-bold text-2xl text-gray-900">
                        Private Session
                      </h4>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Clock className="h-4 w-4" />
                        <span>Per Session</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-teal-500" />
                      <span className="text-gray-700">Personalized coaching approach</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-teal-500" />
                      <span className="text-gray-700">Video analysis and feedback</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-teal-500" />
                      <span className="text-gray-700">Ocean safety instruction</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-teal-500" />
                      <span className="text-gray-700">Equipment guidance</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-teal-500" />
                      <span className="text-gray-700">Progress tracking</span>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <div className="mb-8">
                    <div className="flex items-center justify-center space-x-4 mb-4">
                      <div className="text-center">
                        <div className="flex items-center justify-center space-x-1">
                          <span className="text-4xl font-bold text-gray-900">500</span>
                          <span className="text-xl text-gray-600">DH</span>
                        </div>
                      </div>
                      <span className="text-gray-400">or</span>
                      <div className="text-center">
                        <div className="flex items-center justify-center space-x-1">
                          <Euro className="h-6 w-6 text-gray-600" />
                          <span className="text-4xl font-bold text-gray-900">50</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600">Per coaching session</p>
                  </div>

                  <button
                    onClick={() => setShowBookingForm(true)}
                    className="btn-coral text-lg px-8 py-4"
                  >
                    Book Coaching Session
                  </button>

                  <p className="text-sm text-gray-500 mt-4">
                    * Price includes all instruction and basic equipment
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showBookingForm && <BookingForm />}
    </section>
  );
};

export default Coaching; 