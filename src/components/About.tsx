import React from 'react';
import { Award, Camera, Waves, MapPin, Star, Users, Clock, Target } from 'lucide-react';

const About = () => {
  const achievements = [
    {
      icon: Camera,
      number: '1000+',
      label: 'Photos Captured',
      description: 'Professional surf sessions documented'
    },
    {
      icon: Users,
      number: '500+',
      label: 'Happy Clients',
      description: 'Surfers from around the world'
    },
    {
      icon: Waves,
      number: '10+',
      label: 'Years Experience',
      description: 'In surf photography and coaching'
    },
    {
      icon: Award,
      number: '50+',
      label: 'Competitions',
      description: 'Documented and coached'
    }
  ];

  const skills = [
    {
      icon: Camera,
      title: 'Professional Photography',
      description: 'Expert in surf action photography with state-of-the-art equipment',
      level: 95
    },
    {
      icon: Waves,
      title: 'Surf Coaching',
      description: 'Comprehensive surf instruction for all skill levels',
      level: 90
    },
    {
      icon: MapPin,
      title: 'Local Knowledge',
      description: 'Deep understanding of Morocco\'s best surf spots and conditions',
      level: 100
    },
    {
      icon: Target,
      title: 'Video Analysis',
      description: 'Technical surf performance analysis and improvement strategies',
      level: 85
    }
  ];

  const certifications = [
    'ISA Level 2 Surf Instructor',
    'Water Safety & Rescue Certified',
    'Professional Photography Certification',
    'First Aid & CPR Certified'
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 rounded-full px-4 py-2 text-sm font-medium mb-4">
            <Star className="h-4 w-4" />
            <span>About Zak</span>
          </div>
          <h2 className="font-righteous font-bold text-4xl lg:text-5xl text-gray-900 mb-6">
            Meet Your Photographer & Coach
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate about surfing and photography, dedicated to capturing and improving your surf journey in Morocco.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-blue-400 to-teal-500 p-1">
              <div className="w-full h-full rounded-3xl overflow-hidden">
                <img
                  src="/images/profile/profile_zak.jpeg"
                  alt="Zak Radmi - Professional Surf Photographer and Coach"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center floating-animation">
              <Camera className="h-10 w-10 text-white" />
            </div>
            <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full flex items-center justify-center floating-animation" style={{ animationDelay: '2s' }}>
              <Waves className="h-8 w-8 text-white" />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h3 className="font-righteous font-bold text-3xl text-gray-900">
              Zak Radmi
            </h3>
            <div className="flex items-center space-x-2 text-teal-600">
              <MapPin className="h-5 w-5" />
              <span className="font-medium">Based in Taghazout & Agadir, Morocco</span>
            </div>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                With over 10 years of experience in the surf industry, I've dedicated my life to capturing 
                the raw beauty and power of surfing while helping others improve their skills in the water. 
                Born and raised in Morocco, I have an intimate knowledge of our coastline's hidden gems and 
                perfect surf conditions.
              </p>
              
              <p>
                My journey began as a passionate surfer who wanted to document the incredible surf culture 
                in Morocco. Over the years, I've evolved into a professional photographer and certified 
                surf instructor, combining my two greatest passions to offer unique experiences for surfers 
                from around the world.
              </p>
              
              <p>
                Whether you're looking to capture your perfect wave or improve your surfing technique, 
                I bring a combination of technical expertise, local knowledge, and genuine passion for 
                the sport to every session.
              </p>
            </div>

            {/* Certifications */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h4 className="font-righteous font-semibold text-lg text-gray-900 mb-4">
                Certifications & Qualifications
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <div className="font-righteous font-bold text-3xl text-gray-900 mb-2">
                  {achievement.number}
                </div>
                <div className="font-semibold text-gray-900 mb-1">
                  {achievement.label}
                </div>
                <div className="text-sm text-gray-600">
                  {achievement.description}
                </div>
              </div>
            );
          })}
        </div>

        {/* Skills */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl">
          <div className="text-center mb-12">
            <h3 className="font-righteous font-bold text-3xl text-gray-900 mb-4">
              Expertise & Skills
            </h3>
            <p className="text-gray-600">
              Years of experience have shaped my expertise in photography, coaching, and local knowledge.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div key={index} className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-500 rounded-xl flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-righteous font-semibold text-lg text-gray-900">
                        {skill.title}
                      </h4>
                      <p className="text-gray-600">{skill.description}</p>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-teal-500 to-blue-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-medium text-gray-600">{skill.level}%</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Philosophy */}
        <div className="mt-20 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="font-righteous font-bold text-3xl text-gray-900 mb-8">
              My Philosophy
            </h3>
            <blockquote className="text-2xl italic text-gray-700 leading-relaxed mb-8">
              "Every wave tells a story, every surfer has a unique style. My job is to capture that 
              story and help you write new chapters in your surfing journey."
            </blockquote>
            <div className="flex justify-center">
              <div className="flex items-center space-x-4">
                <div className="w-1 h-16 bg-gradient-to-b from-teal-500 to-blue-500 rounded-full"></div>
                <div className="text-left">
                  <div className="font-righteous font-bold text-xl text-gray-900">Zak Radmi</div>
                  <div className="text-gray-600">Professional Surf Photographer & Coach</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 