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
      ctaLink: "#photography",
      backgroundImage: "/images/main/IMG_2110.JPG"
    },
    {
      title: "Master the Art of Surfing",
      subtitle: "Expert coaching with years of experience",
      description: "Improve your surfing skills with personalized coaching sessions tailored to your level and goals.",
      cta: "Start Coaching",
      ctaLink: "#coaching",
      backgroundImage: "/images/main/IMG_2115.JPG"
    },
    {
      title: "Morocco Surf Adventures",
      subtitle: "Your complete surf trip guide",
      description: "Discover the best surf spots, local culture, and hidden gems of Morocco's incredible coastline.",
      cta: "Plan Your Trip",
      ctaLink: "#contact",
      backgroundImage: "/images/main/IMG_2129 copy.JPG"
    },
    {
      title: "Professional Photography",
      subtitle: "Stunning surf imagery that captures the moment",
      description: "From action shots to lifestyle portraits, we capture the essence of Morocco's surf culture.",
      cta: "View Gallery",
      ctaLink: "#gallery",
      backgroundImage: "/images/main/IMG_2142.JPG"
    },
    {
      title: "Surf Coaching Excellence",
      subtitle: "Take your surfing to the next level",
      description: "Personalized instruction for all skill levels in the perfect waves of Morocco.",
      cta: "Book Lesson",
      ctaLink: "#coaching",
      backgroundImage: "/images/main/IMG_2149.JPG"
    },
    {
      title: "Atlantic Ocean Adventures",
      subtitle: "Explore Morocco's stunning coastline",
      description: "Join us for unforgettable surf sessions along Morocco's world-class surf breaks.",
      cta: "Start Adventure",
      ctaLink: "#contact",
      backgroundImage: "/images/main/IMG_2150.JPG"
    },
    {
      title: "Surf Culture Morocco",
      subtitle: "Immerse yourself in local surf culture",
      description: "Experience authentic Moroccan hospitality combined with world-class surfing conditions.",
      cta: "Learn More",
      ctaLink: "#about",
      backgroundImage: "/images/main/IMG_2155.JPG"
    },
    {
      title: "Perfect Wave Moments",
      subtitle: "Every wave tells a story",
      description: "Capture your surfing journey with professional photography in Morocco's most beautiful locations.",
      cta: "Book Session",
      ctaLink: "#photography",
      backgroundImage: "/images/main/IMG_2158.JPG"
    },
    {
      title: "Endless Summer Vibes",
      subtitle: "Year-round surfing paradise",
      description: "Morocco offers consistent waves and perfect weather for your ultimate surf experience.",
      cta: "Plan Visit",
      ctaLink: "#packages",
      backgroundImage: "/images/main/IMG_2195.JPG"
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
      {/* Background Image Carousel */}
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url(${slide.backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            {/* Gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-teal-800/70 to-blue-800/80"></div>
            
            {/* Additional dark overlay to ensure text readability */}
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
        ))}

      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Hero Content - Slides */}
          <div className="min-h-[400px] flex items-center justify-center">
            <div key={currentSlide} className="slide-up">
              {/* Stats Row */}
              <div className="flex justify-center items-center space-x-8 mb-8">
                <div className="flex items-center space-x-2 glass-effect px-4 py-2 rounded-full backdrop-blur-md bg-white/20">
                  <Camera className="h-5 w-5 text-yellow-400" />
                  <span className="text-white font-medium">10K+ Photos</span>
                </div>
                <div className="flex items-center space-x-2 glass-effect px-4 py-2 rounded-full backdrop-blur-md bg-white/20">
                  <Waves className="h-5 w-5 text-blue-400" />
                  <span className="text-white font-medium">500+ Sessions</span>
                </div>
                <div className="flex items-center space-x-2 glass-effect px-4 py-2 rounded-full backdrop-blur-md bg-white/20">
                  <MapPin className="h-5 w-5 text-green-400" />
                  <span className="text-white font-medium">Morocco</span>
                </div>
              </div>

              {/* Main Content */}
              <h1 className="font-righteous font-bold text-4xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight drop-shadow-lg">
                {heroSlides[currentSlide].title}
              </h1>
              
              <p className="text-xl md:text-2xl text-blue-100 mb-4 font-medium drop-shadow-md">
                {heroSlides[currentSlide].subtitle}
              </p>
              
              <p className="text-lg text-blue-200 mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
                {heroSlides[currentSlide].description}
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href={heroSlides[currentSlide].ctaLink}
                  className="btn-ocean inline-flex items-center group shadow-xl"
                >
                  <span>{heroSlides[currentSlide].cta}</span>
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
                
                <button className="flex items-center space-x-2 glass-effect backdrop-blur-md bg-white/20 text-white px-6 py-3 rounded-full hover:bg-white/30 transition-all duration-300 shadow-lg">
                  <Play className="h-5 w-5" />
                  <span className="font-medium">Watch Video</span>
                </button>
              </div>

              {/* Social Proof */}
              <div className="mt-12 flex justify-center">
                <div className="flex items-center space-x-1 glass-effect backdrop-blur-md bg-white/20 px-6 py-3 rounded-full shadow-lg">
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
                className={`w-3 h-3 rounded-full transition-all duration-300 shadow-lg ${
                  index === currentSlide 
                    ? 'bg-white shadow-white/50' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center space-y-2 text-white/80">
            <span className="text-sm font-medium drop-shadow-md">Scroll to explore</span>
            <div className="w-px h-16 bg-gradient-to-b from-white/80 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 