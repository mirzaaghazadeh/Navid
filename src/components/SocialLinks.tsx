import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';
import Tooltip from './common/Tooltip';

const SocialLinks = () => {
  return (
    <div className="flex justify-center space-x-4">
      <Tooltip content="LinkedIn">
        <a 
          href="https://www.linkedin.com/in/mirzaaghazadeh/" 
          className="text-gray-600 hover:text-indigo-600 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin className="w-6 h-6" />
        </a>
      </Tooltip>
      
      <Tooltip content="GitHub">
        <a 
          href="https://github.com/mirzaaghazadeh" 
          className="text-gray-600 hover:text-indigo-600 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github className="w-6 h-6" />
        </a>
      </Tooltip>
      
      <Tooltip content="Twitter">
        <a 
          href="https://twitter.com/mirzaaghazadeh" 
          className="text-gray-600 hover:text-indigo-600 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Twitter className="w-6 h-6" />
        </a>
      </Tooltip>
    </div>
  );
};

export default SocialLinks;