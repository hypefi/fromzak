import React from 'react';
import { Camera } from 'lucide-react';

const Activities = () => {
  return (
    <section id="activities" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-3xl p-8 lg:p-12">
            <h3 className="font-righteous font-bold text-3xl text-gray-900 mb-4">
              Want to Collaborate?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Whether you're organizing a surf event, need professional photography services, 
              or want to partner with us, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="https://wa.me/212671142448?text=Hi%20Zak!%20I%27d%20like%20to%20discuss%20a%20collaboration%20opportunity.%20Can%20we%20talk%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ocean text-lg px-8 py-4"
              >
                Get in Touch
              </a>
              <a
                href="/"
                className="inline-flex items-center space-x-2 text-gray-700 border-2 border-gray-300 hover:border-gray-400 px-8 py-4 rounded-full font-medium hover:bg-white transition-all duration-300"
              >
                <Camera className="h-5 w-5" />
                <span>View Services</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activities; 