import React from 'react';
import { Users, Handshake, Trophy, Globe, Calendar, Camera, Waves, Star } from 'lucide-react';

const Activities = () => {
  const collaborations = [
    {
      id: 1,
      title: 'International Surf Schools',
      description: 'Partnering with surf schools worldwide to provide professional photography services for their students',
      icon: Globe,
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=300&fit=crop',
      stats: '25+ Schools'
    },
    {
      id: 2,
      title: 'Local Surf Competitions',
      description: 'Official photographer for major surf competitions across Morocco\'s coast',
      icon: Trophy,
      image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=400&h=300&fit=crop',
      stats: '50+ Events'
    },
    {
      id: 3,
      title: 'Surf Brand Partnerships',
      description: 'Collaborating with leading surf brands for product photography and marketing campaigns',
      icon: Handshake,
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop',
      stats: '15+ Brands'
    },
    {
      id: 4,
      title: 'Surf Documentaries',
      description: 'Contributing photography and expertise to surf documentaries showcasing Morocco',
      icon: Camera,
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop',
      stats: '8+ Films'
    }
  ];

  const upcomingEvents = [
    {
      date: 'March 15-17, 2024',
      title: 'Morocco Surf Championship',
      location: 'Bouznika Beach',
      role: 'Official Photographer',
      status: 'confirmed'
    },
    {
      date: 'April 2-5, 2024',
      title: 'International Surf Camp',
      location: 'Agadir Region',
      role: 'Photography Workshop',
      status: 'open'
    },
    {
      date: 'May 20-22, 2024',
      title: 'Surf Photography Exhibition',
      location: 'Essaouira',
      role: 'Featured Artist',
      status: 'upcoming'
    }
  ];

  const partners = [
    {
      name: 'Morocco Surf Federation',
      logo: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=100&h=100&fit=crop',
      type: 'Official Partner'
    },
    {
      name: 'Bouznika Surf School',
      logo: 'https://images.unsplash.com/photo-1483721310020-03333e577078?w=100&h=100&fit=crop',
      type: 'Education Partner'
    },
    {
      name: 'Atlantic Surf Magazine',
      logo: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=100&h=100&fit=crop',
      type: 'Media Partner'
    },
    {
      name: 'Moroccan Tourism Board',
      logo: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=100&h=100&fit=crop',
      type: 'Tourism Partner'
    }
  ];

  return (
    <section id="activities" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-800 rounded-full px-4 py-2 text-sm font-medium mb-4">
            <Users className="h-4 w-4" />
            <span>Collaborations & Activities</span>
          </div>
          <h2 className="font-righteous font-bold text-4xl lg:text-5xl text-gray-900 mb-6">
            Building Surf Community
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Through partnerships, events, and collaborations, we're working to grow and showcase 
            Morocco's incredible surf culture to the world.
          </p>
        </div>

        {/* Collaborations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {collaborations.map((collab) => {
            const IconComponent = collab.icon;
            return (
              <div key={collab.id} className="card-surf overflow-hidden">
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={collab.image}
                    alt={collab.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-righteous font-semibold text-xl text-gray-900">
                        {collab.title}
                      </h3>
                      <span className="text-emerald-600 font-medium">{collab.stats}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {collab.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Upcoming Events */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="font-righteous font-bold text-3xl text-gray-900 mb-4">
              Upcoming Events
            </h3>
            <p className="text-gray-600">
              Join us at upcoming surf events and photography workshops across Morocco.
            </p>
          </div>
          
          <div className="space-y-6">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-6 lg:p-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Calendar className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-righteous font-semibold text-xl text-gray-900 mb-1">
                        {event.title}
                      </h4>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-1 sm:space-y-0 text-gray-600">
                        <span className="font-medium">{event.date}</span>
                        <span className="hidden sm:block">•</span>
                        <span>{event.location}</span>
                        <span className="hidden sm:block">•</span>
                        <span className="text-teal-600 font-medium">{event.role}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      event.status === 'confirmed' 
                        ? 'bg-green-100 text-green-800' 
                        : event.status === 'open'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                    </span>
                    <a
                      href="#contact"
                      className="btn-ocean text-sm px-4 py-2"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partners */}
        <div className="bg-gray-50 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="font-righteous font-bold text-3xl text-gray-900 mb-4">
              Trusted Partners
            </h3>
            <p className="text-gray-600">
              Working together to promote and develop Morocco's surf scene.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden bg-white shadow-lg">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-righteous font-semibold text-gray-900 mb-1">
                  {partner.name}
                </h4>
                <span className="text-sm text-gray-600">{partner.type}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
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
                href="#contact"
                className="btn-ocean text-lg px-8 py-4"
              >
                Get in Touch
              </a>
              <a
                href="#photography"
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