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

  // Placeholder gallery items with actual dimensions
  const galleryItems = [
    {
      id: 1,
      type: 'image',
      category: 'action',
      title: 'Perfect Barrel',
      description: 'Captured at Anchor Point, Taghazout',
      thumbnail: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=600&fit=crop',
      fullImage: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&h=800&fit=crop'
    },
    {
      id: 2,
      type: 'image',
      category: 'lifestyle',
      title: 'Sunset Session',
      description: 'Golden hour at Taghazout Beach',
      thumbnail: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=400&h=600&fit=crop',
      fullImage: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=1200&h=800&fit=crop'
    },
    {
      id: 3,
      type: 'image',
      category: 'action',
      title: 'Air Time',
      description: 'Aerial maneuver at Killer Point',
      thumbnail: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=600&fit=crop',
      fullImage: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=1200&h=800&fit=crop'
    },
    {
      id: 4,
      type: 'image',
      category: 'portraits',
      title: 'Local Surfer',
      description: 'Portrait of a Moroccan surfer',
      thumbnail: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?w=400&h=600&fit=crop',
      fullImage: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?w=1200&h=800&fit=crop'
    },
    {
      id: 5,
      type: 'image',
      category: 'competitions',
      title: 'Competition Heat',
      description: 'Local surf competition in Agadir',
      thumbnail: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=600&fit=crop',
      fullImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1200&h=800&fit=crop'
    },
    {
      id: 6,
      type: 'image',
      category: 'lifestyle',
      title: 'Beach Life',
      description: 'Capturing the essence of surf culture',
      thumbnail: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=600&fit=crop',
      fullImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=800&fit=crop'
    },
    {
      id: 7,
      type: 'image',
      category: 'action',
      title: 'Powerful Wave',
      description: 'Raw power of Moroccan waves',
      thumbnail: 'https://images.unsplash.com/photo-1483721310020-03333e577078?w=400&h=600&fit=crop',
      fullImage: 'https://images.unsplash.com/photo-1483721310020-03333e577078?w=1200&h=800&fit=crop'
    },
    {
      id: 8,
      type: 'image',
      category: 'lifestyle',
      title: 'Morning Patrol',
      description: 'Dawn patrol session preparation',
      thumbnail: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=600&fit=crop',
      fullImage: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&h=800&fit=crop'
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
                href="#photography"
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