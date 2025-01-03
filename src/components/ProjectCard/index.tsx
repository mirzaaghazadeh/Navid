import React from 'react';
import { ArrowRight, Github } from 'lucide-react';
import GameIcon from '../GameIcon';
import TechBadge from '../TechBadge';
import Tooltip from '../common/Tooltip';
import { Game } from '../../config/games';

const ProjectCard: React.FC<Game> = ({ title, description, iconType, link, sourceCode, technologies }) => {
  return (
    <div className="group relative bg-white rounded-xl shadow-lg overflow-visible transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="p-8">
        <div className="flex justify-between items-start mb-4">
          <GameIcon type={iconType} className="w-12 h-12 text-indigo-500" />
          <div className="flex flex-wrap gap-2 justify-end transition-all duration-300 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0">
            {technologies?.map((tech) => (
              <TechBadge key={tech} name={tech} />
            ))}
          </div>
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="block group/link"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover/link:text-indigo-600 transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 mb-6 group-hover/link:text-gray-800 transition-colors">
            {description}
          </p>
        </a>
        <div className="flex justify-between items-center">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-700"
          >
            View Project <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
          <div className="relative">
            <Tooltip content="View Source on GitHub">
              <a
                href={sourceCode}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-gray-600 hover:text-gray-800"
              >
                <Github className="w-5 h-5" />
              </a>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;