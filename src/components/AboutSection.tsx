import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';
import SocialLinks from './SocialLinks';

const AboutSection = () => {
  return (
    <section className="mt-24 text-center max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">About the Developer</h2>
      <div className="bg-white rounded-lg shadow-xl p-8">
        <img
          src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?w=500&h=500&fit=crop"
          alt="Developer Profile"
          className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
        />
        <p className="text-gray-600 mb-6">
          Hi! I'm Navid, a developer who loves learning new skills in my free time. I create games and tools for myself and share them with others here. Join me on my journey to explore and build exciting projects!
        </p>
        <SocialLinks />
      </div>
    </section>
  );
};

export default AboutSection;