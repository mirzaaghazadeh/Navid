import React from 'react';
import { ArrowRight } from 'lucide-react';
import GameIcon from './GameIcon';
import { Game } from '../config/games';

const GameCard: React.FC<Game> = ({ title, description, iconType, link }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2">
      <div className="p-8">
        <div className="mb-4">
          <GameIcon type={iconType} className="w-12 h-12 text-indigo-500" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-indigo-600 hover:text-indigo-700 transition-colors"
        >
          Play Now <ArrowRight className="ml-2 w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

export default GameCard;