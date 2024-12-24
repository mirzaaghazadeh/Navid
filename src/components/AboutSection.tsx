import React from 'react';
import SocialLinks from './SocialLinks';
import ProfileImage from './ProfileImage';

const AboutSection = () => {
  return (
    <section className="mt-24 text-center max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">About Me</h2>
      <div className="bg-white rounded-lg shadow-xl p-8">
        <ProfileImage />
        <p className="text-gray-600 mb-6">
          Hi! I'm Navid, a developer who loves learning new skills in my free time. I create games and tools for myself and share them with others here. Join me on my journey to explore and build exciting projects!
        </p>
        <SocialLinks />
      </div>
    </section>
  );
}

export default AboutSection;