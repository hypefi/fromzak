'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface ImageCarouselProps {
  onStart: () => void;
}

const images = [
  '/images/main/IMG_2110.JPG',
  '/images/main/IMG_2115.JPG',
  '/images/main/IMG_2129 copy.JPG',
  '/images/main/IMG_2142.JPG',
  '/images/main/IMG_2149.JPG',
  '/images/main/IMG_2150.JPG',
  '/images/main/IMG_2155.JPG',
  '/images/main/IMG_2158.JPG',
  '/images/main/IMG_2195.JPG',
];

export default function ImageCarousel({ onStart }: ImageCarouselProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const handleStart = () => {
    setIsAnimating(true);
    setTimeout(() => {
      onStart();
    }, 800); // Match animation duration
  };

  return (
    <div className={`fixed inset-0 z-[9999] transition-all duration-800 ${
      isAnimating ? 'opacity-0 scale-110' : 'opacity-100 scale-100'
    }`}>
      {/* Solid background to prevent any bleed-through */}
      <div className="absolute inset-0 bg-black" />
      
      {/* Background Images */}
      <div className="absolute inset-0">
        {images.map((src, index) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={src}
              alt={`Surf photo ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
              quality={90}
            />
          </div>
        ))}
      </div>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center space-y-8">
          {/* Marine-styled Start Button */}
          <button
            onClick={handleStart}
            className="group relative px-12 py-4 bg-transparent border-4 border-white text-white font-bold text-xl tracking-wider uppercase hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            style={{
              fontFamily: 'var(--font-righteous)',
              letterSpacing: '0.15em',
            }}
          >
            <span className="relative z-10">Start</span>
            
            {/* Animated background */}
            <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            
            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-4 border-l-4 border-white -translate-x-1 -translate-y-1" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-4 border-r-4 border-white translate-x-1 -translate-y-1" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-4 border-l-4 border-white -translate-x-1 translate-y-1" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-4 border-r-4 border-white translate-x-1 translate-y-1" />
          </button>

          {/* Progress indicators */}
          <div className="flex justify-center space-x-2">
            {images.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentImageIndex 
                    ? 'bg-white scale-125' 
                    : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 