import React from 'react';
import { ArrowRight } from 'lucide-react';
import GameIcon from '../GameIcon';
import TechBadge from '../TechBadge';
import { Game } from '../../config/games';

const ProjectCard: React.FC<Game> = ({ title, description, iconType, link, technologies }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
    >
      <div className="p-8">
        <div className="flex justify-between items-start mb-4">
          <GameIcon type={iconType} className="w-12 h-12 text-indigo-500" />
          <div className="flex flex-wrap gap-2 justify-end transition-all duration-300 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0">
            {technologies?.map((tech) => (
              <TechBadge key={tech} name={tech} />
            ))}
          </div>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <span className="inline-flex items-center text-indigo-600 font-medium group-hover:text-indigo-700">
          View Project <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </a>
  );
};

export default ProjectCard;