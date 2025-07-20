'use client';

import React, { useState } from 'react';
import { ShoppingCart, Shirt, Camera, Coffee, Package, Star, Plus, Minus } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  sizes?: string[];
  rating: number;
  reviews: number;
}

const Store = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cart, setCart] = useState<{[key: number]: number}>({});

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'apparel', name: 'T-Shirts & Apparel' },
    { id: 'prints', name: 'Photo Prints' },
    { id: 'accessories', name: 'Accessories' }
  ];

  const products: Product[] = [
    {
      id: 1,
      name: 'Zak Radmi Signature T-Shirt',
      price: 25,
      category: 'apparel',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
      description: 'Premium cotton t-shirt with original surf photography print',
      sizes: ['S', 'M', 'L', 'XL'],
      rating: 4.8,
      reviews: 124
    },
    {
      id: 2,
      name: 'Morocco Waves Print',
      price: 35,
      category: 'prints',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=400&fit=crop',
      description: 'High-quality print of iconic Moroccan surf break',
      rating: 4.9,
      reviews: 89
    },
    {
      id: 3,
      name: 'Taghazout Sunset Hoodie',
      price: 45,
      category: 'apparel',
      image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop',
      description: 'Comfortable hoodie featuring stunning Taghazout sunset',
      sizes: ['S', 'M', 'L', 'XL'],
      rating: 4.7,
      reviews: 67
    },
    {
      id: 4,
      name: 'Surf Photography Book',
      price: 50,
      category: 'accessories',
      image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=400&fit=crop',
      description: 'Coffee table book featuring best of Zak Radmi photography',
      rating: 5.0,
      reviews: 45
    },
    {
      id: 5,
      name: 'Morocco Surf Cap',
      price: 20,
      category: 'accessories',
      image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&h=400&fit=crop',
      description: 'Adjustable cap with embroidered Morocco surf logo',
      rating: 4.6,
      reviews: 93
    },
    {
      id: 6,
      name: 'Wave Art Canvas',
      price: 75,
      category: 'prints',
      image: 'https://images.unsplash.com/photo-1483721310020-03333e577078?w=400&h=400&fit=crop',
      description: 'Large canvas print perfect for home or office decoration',
      rating: 4.8,
      reviews: 56
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const addToCart = (productId: number) => {
    setCart(prev => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1
    }));
  };

  const removeFromCart = (productId: number) => {
    setCart(prev => {
      const newCart = { ...prev };
      if (newCart[productId] && newCart[productId] > 0) {
        newCart[productId] -= 1;
        if (newCart[productId] === 0) {
          delete newCart[productId];
        }
      }
      return newCart;
    });
  };

  const getTotalItems = () => {
    return Object.values(cart).reduce((sum, quantity) => sum + quantity, 0);
  };

  return (
    <section id="store" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-indigo-100 text-indigo-800 rounded-full px-4 py-2 text-sm font-medium mb-4">
            <ShoppingCart className="h-4 w-4" />
            <span>Surf Store</span>
          </div>
          <h2 className="font-righteous font-bold text-4xl lg:text-5xl text-gray-900 mb-6">
            Surf Lifestyle Collection
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take home a piece of Morocco's surf culture with our exclusive collection of apparel, 
            prints, and accessories featuring original photography.
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
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Shopping Cart Summary */}
        {getTotalItems() > 0 && (
          <div className="mb-8 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-2xl p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <ShoppingCart className="h-6 w-6" />
                <span className="font-medium">
                  {getTotalItems()} item{getTotalItems() > 1 ? 's' : ''} in cart
                </span>
              </div>
              <button className="btn-coral">
                Checkout
              </button>
            </div>
          </div>
        )}

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="card-surf overflow-hidden">
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-righteous font-semibold text-lg text-gray-900">
                    {product.name}
                  </h3>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-gray-900">${product.price}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 text-sm">
                  {product.description}
                </p>
                
                {/* Rating */}
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
                
                {/* Sizes */}
                {product.sizes && (
                  <div className="mb-4">
                    <span className="text-sm font-medium text-gray-700 mb-2 block">Sizes:</span>
                    <div className="flex space-x-2">
                      {product.sizes.map((size) => (
                        <span
                          key={size}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm"
                        >
                          {size}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Add to Cart */}
                <div className="flex items-center justify-between">
                  {cart[product.id] ? (
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => removeFromCart(product.id)}
                        className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="font-medium text-lg">{cart[product.id]}</span>
                      <button
                        onClick={() => addToCart(product.id)}
                        className="w-8 h-8 bg-teal-500 hover:bg-teal-600 text-white rounded-full flex items-center justify-center transition-colors"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => addToCart(product.id)}
                      className="btn-ocean"
                    >
                      Add to Cart
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Store Info */}
        <div className="mt-20 bg-white rounded-3xl p-8 lg:p-12 shadow-xl">
          <div className="text-center mb-12">
            <h3 className="font-righteous font-bold text-3xl text-gray-900 mb-4">
              About Our Store
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Every purchase supports local surf culture in Morocco and helps us continue documenting 
              and sharing the incredible beauty of our waves.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-righteous font-semibold text-lg text-gray-900 mb-2">
                Free Shipping
              </h4>
              <p className="text-gray-600">
                Free worldwide shipping on orders over $50
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-righteous font-semibold text-lg text-gray-900 mb-2">
                Original Photography
              </h4>
              <p className="text-gray-600">
                All designs feature authentic surf photography from Morocco
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-righteous font-semibold text-lg text-gray-900 mb-2">
                Premium Quality
              </h4>
              <p className="text-gray-600">
                High-quality materials and printing for lasting memories
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Store; 