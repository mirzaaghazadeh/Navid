import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Navid Games</h3>
            <p className="text-gray-400">
              Creating fun and engaging browser games for everyone to enjoy.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Games</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <p className="text-gray-400">
              Have questions or feedback? Reach out to us!
            </p>
            <a href="mailto:contact@navidgames.com" className="text-indigo-400 hover:text-indigo-300 transition-colors">
              contact@navidgames.com
            </a>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Navid Games. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;