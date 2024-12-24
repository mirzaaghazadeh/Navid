import React from 'react';
import { ArrowRight } from 'lucide-react';
import GameIcon from './GameIcon';
import TechBadge from './TechBadge';
import { Game } from '../config/games';

const GameCard: React.FC<Game> = ({ title, description, iconType, link, technologies }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2"
    >
      <div className="p-8">
        <div className="mb-4">
          <GameIcon type={iconType} className="w-12 h-12 text-indigo-500" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <TechBadge key={tech} name={tech} />
          ))}
        </div>
        <p className="text-gray-600 mb-6">{description}</p>
        <span className="inline-flex items-center text-indigo-600">
          Play Now <ArrowRight className="ml-2 w-4 h-4" />
        </span>
      </div>
    </a>
  );
};

export default GameCard;