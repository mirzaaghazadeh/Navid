import React from 'react';
import { Briefcase } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="text-center mb-16">
      <Briefcase className="w-16 h-16 text-indigo-600 mx-auto mb-6" />
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        Welcome to My Portfolio
      </h1>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        Explore my showcase of projects, games, and tools built with modern web technologies. Each project represents my passion for creating engaging digital experiences.
      </p>
    </section>
  );
};

export default HeroSection;