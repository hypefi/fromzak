import React from 'react';
import Hero from '@/components/Hero';
import Photography from '@/components/Photography';
import Coaching from '@/components/Coaching';
import Packages from '@/components/Packages';
import About from '@/components/About';
import Store from '@/components/Store';
import Activities from '@/components/Activities';
import Gallery from '@/components/Gallery';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Photography />
      <Coaching />
      <Packages />
      <Gallery />
      <About />
      <Store />
      <Activities />
    </div>
  );
}
