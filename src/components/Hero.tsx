'use client';

import React, { useEffect, useState } from 'react';
import { Camera, Waves, MapPin, Star, ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: "Capture Your Perfect Wave",
      subtitle: "Professional surf photography in the heart of Morocco",
      description: "Experience the magic of surfing through stunning visuals that tell your unique story on the waves.",
      cta: "Book Photo Session",
      ctaLink: "#photography"
    },
    {
      title: "Master the Art of Surfing",
      subtitle: "Expert coaching with years of experience",
      description: "Improve your surfing skills with personalized coaching sessions tailored to your level and goals.",
      cta: "Start Coaching",
      ctaLink: "#coaching"
    },
    {
      title: "Morocco Surf Adventures",
      subtitle: "Your complete surf trip guide",
      description: "Discover the best surf spots, local culture, and hidden gems of Morocco's incredible coastline.",
      cta: "Plan Your Trip",
      ctaLink: "#contact"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-teal-800 to-blue-800">
        {/* Background overlay with animated waves */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-0 w-full h-64 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-y-1 wave-animation"></div>
          <div className="absolute top-1/2 right-0 w-full h-48 bg-gradient-to-l from-transparent via-blue-200 to-transparent transform skew-y-1 wave-animation" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/4 left-0 w-full h-56 bg-gradient-to-r from-transparent via-teal-200 to-transparent transform -skew-y-1 wave-animation" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Hero Content - Slides */}
          <div className="min-h-[400px] flex items-center justify-center">
            <div key={currentSlide} className="slide-up">
              {/* Stats Row */}
              <div className="flex justify-center items-center space-x-8 mb-8">
                <div className="flex items-center space-x-2 glass-effect px-4 py-2 rounded-full">
                  <Camera className="h-5 w-5 text-yellow-400" />
                  <span className="text-white font-medium">10K+ Photos</span>
                </div>
                <div className="flex items-center space-x-2 glass-effect px-4 py-2 rounded-full">
                  <Waves className="h-5 w-5 text-blue-400" />
                  <span className="text-white font-medium">500+ Sessions</span>
                </div>
                <div className="flex items-center space-x-2 glass-effect px-4 py-2 rounded-full">
                  <MapPin className="h-5 w-5 text-green-400" />
                  <span className="text-white font-medium">Morocco</span>
                </div>
              </div>

              {/* Main Content */}
              <h1 className="font-poppins font-bold text-4xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
                {heroSlides[currentSlide].title}
              </h1>
              
              <p className="text-xl md:text-2xl text-blue-100 mb-4 font-medium">
                {heroSlides[currentSlide].subtitle}
              </p>
              
              <p className="text-lg text-blue-200 mb-8 max-w-2xl mx-auto leading-relaxed">
                {heroSlides[currentSlide].description}
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href={heroSlides[currentSlide].ctaLink}
                  className="btn-ocean inline-flex items-center group"
                >
                  <span>{heroSlides[currentSlide].cta}</span>
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
                
                <button className="flex items-center space-x-2 glass-effect text-white px-6 py-3 rounded-full hover:bg-white/20 transition-all duration-300">
                  <Play className="h-5 w-5" />
                  <span className="font-medium">Watch Video</span>
                </button>
              </div>

              {/* Social Proof */}
              <div className="mt-12 flex justify-center">
                <div className="flex items-center space-x-1 glass-effect px-6 py-3 rounded-full">
                  <div className="flex -space-x-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-white font-medium ml-3">4.9/5 from 200+ clients</span>
                </div>
              </div>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center space-x-3 mt-8">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-white' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center space-y-2 text-white/80">
            <span className="text-sm font-medium">Scroll to explore</span>
            <div className="w-px h-16 bg-gradient-to-b from-white/80 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 