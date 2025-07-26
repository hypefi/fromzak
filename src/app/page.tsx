'use client';

import React, { useState } from 'react';
import Hero from '@/components/Hero';
import ImageCarousel from '@/components/ImageCarousel';

export default function Home() {
  const [showCarousel, setShowCarousel] = useState(true);

  const handleStart = () => {
    setShowCarousel(false);
  };

  return (
    <div className="min-h-screen">
      {showCarousel && <ImageCarousel onStart={handleStart} />}
      {!showCarousel && (
        <div className="animate-fade-in">
          <Hero />
        </div>
      )}
    </div>
  );
}
