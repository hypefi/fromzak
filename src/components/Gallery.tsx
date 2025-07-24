'use client';

import React, { useState } from 'react';
import { Camera, Play, Eye, X, ChevronLeft, ChevronRight, Instagram } from 'lucide-react';

interface GalleryItem {
  id: number;
  type: string;
  category: string;
  title: string;
  description: string;
  thumbnail: string;
  fullImage: string;
}

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'all', name: 'All Work' },
    { id: 'action', name: 'Action Shots' },
    { id: 'lifestyle', name: 'Lifestyle' },
    { id: 'competitions', name: 'Competitions' },
    { id: 'portraits', name: 'Portraits' }
  ];

  // Real gallery items using actual images from /images/gallery/
  const galleryItems = [
    // Action shots
    {
      id: 1,
      type: 'image',
      category: 'action',
      title: 'Perfect Barrel',
      description: 'Captured at Anchor Point, Bouznika',
      thumbnail: '/images/gallery/IMG_2104.JPG',
      fullImage: '/images/gallery/IMG_2104.JPG'
    },
    {
      id: 2,
      type: 'image',
      category: 'action',
      title: 'Air Time',
      description: 'Aerial maneuver at Killer Point',
      thumbnail: '/images/gallery/IMG_2105.JPG',
      fullImage: '/images/gallery/IMG_2105.JPG'
    },
    {
      id: 3,
      type: 'image',
      category: 'action',
      title: 'Powerful Wave',
      description: 'Raw power of Moroccan waves',
      thumbnail: '/images/gallery/IMG_2106.JPG',
      fullImage: '/images/gallery/IMG_2106.JPG'
    },
    {
      id: 4,
      type: 'image',
      category: 'action',
      title: 'Wave Riding',
      description: 'Perfect form on the wave face',
      thumbnail: '/images/gallery/IMG_2107.JPG',
      fullImage: '/images/gallery/IMG_2107.JPG'
    },
    {
      id: 5,
      type: 'image',
      category: 'action',
      title: 'Surf Action',
      description: 'Dynamic surf photography',
      thumbnail: '/images/gallery/IMG_2110.JPG',
      fullImage: '/images/gallery/IMG_2110.JPG'
    },
    {
      id: 6,
      type: 'image',
      category: 'action',
      title: 'Ocean Power',
      description: 'Capturing the ocean\'s energy',
      thumbnail: '/images/gallery/IMG_2111.JPG',
      fullImage: '/images/gallery/IMG_2111.JPG'
    },
    // Lifestyle shots
    {
      id: 7,
      type: 'image',
      category: 'lifestyle',
      title: 'Sunset Session',
      description: 'Golden hour at Bouznika Beach',
      thumbnail: '/images/gallery/IMG_2112.JPG',
      fullImage: '/images/gallery/IMG_2112.JPG'
    },
    {
      id: 8,
      type: 'image',
      category: 'lifestyle',
      title: 'Beach Life',
      description: 'Capturing the essence of surf culture',
      thumbnail: '/images/gallery/IMG_2113.JPG',
      fullImage: '/images/gallery/IMG_2113.JPG'
    },
    {
      id: 9,
      type: 'image',
      category: 'lifestyle',
      title: 'Morning Patrol',
      description: 'Dawn patrol session preparation',
      thumbnail: '/images/gallery/IMG_2115.JPG',
      fullImage: '/images/gallery/IMG_2115.JPG'
    },
    {
      id: 10,
      type: 'image',
      category: 'lifestyle',
      title: 'Surf Culture',
      description: 'Life by the ocean',
      thumbnail: '/images/gallery/IMG_2116.JPG',
      fullImage: '/images/gallery/IMG_2116.JPG'
    },
    {
      id: 11,
      type: 'image',
      category: 'lifestyle',
      title: 'Ocean Vibes',
      description: 'Living the surf lifestyle',
      thumbnail: '/images/gallery/IMG_2126.JPG',
      fullImage: '/images/gallery/IMG_2126.JPG'
    },
    {
      id: 12,
      type: 'image',
      category: 'lifestyle',
      title: 'Surf Spirit',
      description: 'The essence of surfing',
      thumbnail: '/images/gallery/IMG_2129.JPG',
      fullImage: '/images/gallery/IMG_2129.JPG'
    },
    // Competition shots
    {
      id: 13,
      type: 'image',
      category: 'competitions',
      title: 'Competition Heat',
      description: 'Local surf competition in Agadir',
      thumbnail: '/images/gallery/IMG_2134.JPG',
      fullImage: '/images/gallery/IMG_2134.JPG'
    },
    {
      id: 14,
      type: 'image',
      category: 'competitions',
      title: 'Competitive Spirit',
      description: 'High-performance surfing',
      thumbnail: '/images/gallery/IMG_2137.JPG',
      fullImage: '/images/gallery/IMG_2137.JPG'
    },
    {
      id: 15,
      type: 'image',
      category: 'competitions',
      title: 'Championship Moment',
      description: 'Capturing the winning wave',
      thumbnail: '/images/gallery/IMG_2139.JPG',
      fullImage: '/images/gallery/IMG_2139.JPG'
    },
    {
      id: 16,
      type: 'image',
      category: 'competitions',
      title: 'Contest Action',
      description: 'Professional surf competition',
      thumbnail: '/images/gallery/IMG_2140.JPG',
      fullImage: '/images/gallery/IMG_2140.JPG'
    },
    // Portrait shots
    {
      id: 17,
      type: 'image',
      category: 'portraits',
      title: 'Local Surfer',
      description: 'Portrait of a Moroccan surfer',
      thumbnail: '/images/gallery/IMG_2142.JPG',
      fullImage: '/images/gallery/IMG_2142.JPG'
    },
    {
      id: 18,
      type: 'image',
      category: 'portraits',
      title: 'Surf Personality',
      description: 'Character behind the surfer',
      thumbnail: '/images/gallery/IMG_2143.JPG',
      fullImage: '/images/gallery/IMG_2143.JPG'
    },
    {
      id: 19,
      type: 'image',
      category: 'portraits',
      title: 'Ocean Soul',
      description: 'Connected to the sea',
      thumbnail: '/images/gallery/IMG_2146.JPG',
      fullImage: '/images/gallery/IMG_2146.JPG'
    },
    {
      id: 20,
      type: 'image',
      category: 'portraits',
      title: 'Surfer Portrait',
      description: 'Capturing the surfer\'s essence',
      thumbnail: '/images/gallery/IMG_2147.JPG',
      fullImage: '/images/gallery/IMG_2147.JPG'
    },
    // Additional mixed category images
    {
      id: 21,
      type: 'image',
      category: 'action',
      title: 'Wave Power',
      description: 'Nature\'s raw energy',
      thumbnail: '/images/gallery/IMG_2148.JPG',
      fullImage: '/images/gallery/IMG_2148.JPG'
    },
    {
      id: 22,
      type: 'image',
      category: 'lifestyle',
      title: 'Surf Session',
      description: 'Perfect day on the water',
      thumbnail: '/images/gallery/IMG_2150.JPG',
      fullImage: '/images/gallery/IMG_2150.JPG'
    },
    {
      id: 23,
      type: 'image',
      category: 'action',
      title: 'Dynamic Motion',
      description: 'Surfing in perfect harmony',
      thumbnail: '/images/gallery/IMG_2152.JPG',
      fullImage: '/images/gallery/IMG_2152.JPG'
    },
    {
      id: 24,
      type: 'image',
      category: 'lifestyle',
      title: 'Ocean Connection',
      description: 'One with the waves',
      thumbnail: '/images/gallery/IMG_2153.JPG',
      fullImage: '/images/gallery/IMG_2153.JPG'
    },
    {
      id: 25,
      type: 'image',
      category: 'portraits',
      title: 'Surf Character',
      description: 'Individual style and passion',
      thumbnail: '/images/gallery/IMG_2154.JPG',
      fullImage: '/images/gallery/IMG_2154.JPG'
    },
    {
      id: 26,
      type: 'image',
      category: 'action',
      title: 'Wave Mastery',
      description: 'Technical surfing skills',
      thumbnail: '/images/gallery/IMG_2158.JPG',
      fullImage: '/images/gallery/IMG_2158.JPG'
    },
    {
      id: 27,
      type: 'image',
      category: 'action',
      title: 'Ocean Athletics',
      description: 'Peak performance surfing',
      thumbnail: '/images/gallery/IMG_2161.JPG',
      fullImage: '/images/gallery/IMG_2161.JPG'
    },
    {
      id: 28,
      type: 'image',
      category: 'lifestyle',
      title: 'Surf Adventure',
      description: 'Exploring Morocco\'s coast',
      thumbnail: '/images/gallery/IMG_2162.JPG',
      fullImage: '/images/gallery/IMG_2162.JPG'
    },
    {
      id: 29,
      type: 'image',
      category: 'action',
      title: 'Perfect Form',
      description: 'Technique and style combined',
      thumbnail: '/images/gallery/IMG_2163.JPG',
      fullImage: '/images/gallery/IMG_2163.JPG'
    },
    {
      id: 30,
      type: 'image',
      category: 'lifestyle',
      title: 'Coastal Living',
      description: 'Life by the Atlantic',
      thumbnail: '/images/gallery/IMG_2171.JPG',
      fullImage: '/images/gallery/IMG_2171.JPG'
    },
    {
      id: 31,
      type: 'image',
      category: 'competitions',
      title: 'Championship Wave',
      description: 'Competition excellence',
      thumbnail: '/images/gallery/IMG_2172.JPG',
      fullImage: '/images/gallery/IMG_2172.JPG'
    },
    {
      id: 32,
      type: 'image',
      category: 'action',
      title: 'Surf Artistry',
      description: 'Surfing as art form',
      thumbnail: '/images/gallery/IMG_2173.JPG',
      fullImage: '/images/gallery/IMG_2173.JPG'
    },
    {
      id: 33,
      type: 'image',
      category: 'lifestyle',
      title: 'Ocean Rhythm',
      description: 'In tune with the waves',
      thumbnail: '/images/gallery/IMG_2174.JPG',
      fullImage: '/images/gallery/IMG_2174.JPG'
    },
    {
      id: 34,
      type: 'image',
      category: 'action',
      title: 'Wave Dance',
      description: 'Grace and power united',
      thumbnail: '/images/gallery/IMG_2175.JPG',
      fullImage: '/images/gallery/IMG_2175.JPG'
    },
    {
      id: 35,
      type: 'image',
      category: 'portraits',
      title: 'Surf Identity',
      description: 'Personal surf story',
      thumbnail: '/images/gallery/IMG_2177.JPG',
      fullImage: '/images/gallery/IMG_2177.JPG'
    },
    {
      id: 36,
      type: 'image',
      category: 'action',
      title: 'Pure Energy',
      description: 'Unleashing surf potential',
      thumbnail: '/images/gallery/IMG_2178.JPG',
      fullImage: '/images/gallery/IMG_2178.JPG'
    },
    {
      id: 37,
      type: 'image',
      category: 'lifestyle',
      title: 'Surf Journey',
      description: 'Adventure on the waves',
      thumbnail: '/images/gallery/IMG_2179.JPG',
      fullImage: '/images/gallery/IMG_2179.JPG'
    },
    {
      id: 38,
      type: 'image',
      category: 'action',
      title: 'Wave Warrior',
      description: 'Conquering challenging waves',
      thumbnail: '/images/gallery/IMG_2180.JPG',
      fullImage: '/images/gallery/IMG_2180.JPG'
    },
    {
      id: 39,
      type: 'image',
      category: 'competitions',
      title: 'Contest Victory',
      description: 'Winning moment captured',
      thumbnail: '/images/gallery/IMG_2182.JPG',
      fullImage: '/images/gallery/IMG_2182.JPG'
    },
    {
      id: 40,
      type: 'image',
      category: 'lifestyle',
      title: 'Surf Freedom',
      description: 'Liberation through surfing',
      thumbnail: '/images/gallery/IMG_2183.JPG',
      fullImage: '/images/gallery/IMG_2183.JPG'
    },
    {
      id: 41,
      type: 'image',
      category: 'portraits',
      title: 'Ocean Guardian',
      description: 'Protecting our waves',
      thumbnail: '/images/gallery/IMG_2190.JPG',
      fullImage: '/images/gallery/IMG_2190.JPG'
    },
    {
      id: 42,
      type: 'image',
      category: 'lifestyle',
      title: 'Surf Paradise',
      description: 'Morocco\'s hidden gems',
      thumbnail: '/images/gallery/IMG_2191.JPG',
      fullImage: '/images/gallery/IMG_2191.JPG'
    },
    {
      id: 43,
      type: 'image',
      category: 'action',
      title: 'Perfect Moment',
      description: 'Timing and technique',
      thumbnail: '/images/gallery/IMG_2194.JPG',
      fullImage: '/images/gallery/IMG_2194.JPG'
    },
    {
      id: 44,
      type: 'image',
      category: 'lifestyle',
      title: 'Endless Summer',
      description: 'Living the dream in Morocco',
      thumbnail: '/images/gallery/IMG_2195.JPG',
      fullImage: '/images/gallery/IMG_2195.JPG'
    }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const openLightbox = (item: GalleryItem) => {
    setSelectedImage(item);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'next' | 'prev') => {
    if (!selectedImage) return;
    
    const currentIndex = filteredItems.findIndex(item => item.id === selectedImage.id);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % filteredItems.length;
    } else {
      newIndex = currentIndex === 0 ? filteredItems.length - 1 : currentIndex - 1;
    }
    
    setSelectedImage(filteredItems[newIndex]);
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-800 rounded-full px-4 py-2 text-sm font-medium mb-4">
            <Camera className="h-4 w-4" />
            <span>Photo Gallery</span>
          </div>
          <h2 className="font-righteous font-bold text-4xl lg:text-5xl text-gray-900 mb-6">
            Capturing Surf Moments
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore a collection of stunning surf photography showcasing the beauty, power, and culture 
            of Morocco's incredible surf scene.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-teal-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl aspect-[3/4] cursor-pointer"
              onClick={() => openLightbox(item)}
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="font-righteous font-semibold text-lg mb-1">{item.title}</h3>
                  <p className="text-sm opacity-90">{item.description}</p>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Eye className="h-5 w-5 text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-3xl p-8 lg:p-12">
            <h3 className="font-righteous font-bold text-3xl text-gray-900 mb-4">
              Want to See More?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Follow @from_zak on Instagram for daily updates, behind-the-scenes content, and the latest surf photography from Morocco.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="https://instagram.com/from_zak"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-medium hover:from-pink-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                <Instagram className="h-5 w-5" />
                <span>Follow on Instagram</span>
              </a>
              <a
                href="https://wa.me/212671142448?text=Hi%20Zak!%20I%20saw%20your%20amazing%20surf%20photography%20gallery%20and%20would%20love%20to%20book%20a%20photography%20session.%20Can%20we%20discuss%20the%20details?"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-gray-700 border-2 border-gray-300 hover:border-gray-400 px-8 py-4 rounded-full font-medium hover:bg-gray-50 transition-all duration-300"
              >
                <Camera className="h-5 w-5" />
                <span>Book a Session</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-6xl max-h-[90vh] w-full">
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X className="h-8 w-8" />
            </button>

            {/* Navigation buttons */}
            <button
              onClick={() => navigateImage('prev')}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>
            <button
              onClick={() => navigateImage('next')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10"
            >
              <ChevronRight className="h-8 w-8" />
            </button>

            {/* Image */}
            <div className="relative">
              <img
                src={selectedImage.fullImage}
                alt={selectedImage.title}
                className="max-w-full max-h-[80vh] object-contain mx-auto rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white rounded-b-lg">
                <h3 className="font-righteous font-bold text-2xl mb-2">{selectedImage.title}</h3>
                <p className="text-gray-200">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery; 