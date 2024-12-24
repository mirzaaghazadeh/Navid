import React from 'react';
import { Gamepad2 } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="text-center mb-16">
      <Gamepad2 className="w-16 h-16 text-indigo-600 mx-auto mb-6" />
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        Welcome to Navid Income
      </h1>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        Discover our collection of engaging browser games and tools crafted with passion and modern web technologies.
      </p>
    </section>
  );
};

export default HeroSection;