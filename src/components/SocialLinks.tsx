import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';

const SocialLinks = () => {
  return (
      <div className="flex justify-center space-x-4">
          <a href="https://www.linkedin.com/in/mirzaaghazadeh/"
             className="text-gray-600 hover:text-indigo-600 transition-colors">
              <Linkedin className="w-6 h-6"/>
          </a>
          <a href="https://github.com/mirzaaghazadeh"
                  className="text-gray-600 hover:text-indigo-600 transition-colors">
          <Github className="w-6 h-6"/>
         </a>
          <a href="https://twitter.com/mirzaaghazadeh"
             className="text-gray-600 hover:text-indigo-600 transition-colors">
              <Twitter className="w-6 h-6"/>
          </a>
      </div>
  );
};

export default SocialLinks;