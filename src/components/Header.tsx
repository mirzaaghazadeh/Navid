import React from 'react';
import { Gamepad2 } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-center">
          <div className="flex items-center space-x-2">
            <Gamepad2 className="w-8 h-8 text-indigo-600" />
            <span className="text-xl font-bold text-gray-900">Navid Income</span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;