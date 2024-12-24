import React from 'react';

interface TechBadgeProps {
  name: string;
}

const TechBadge: React.FC<TechBadgeProps> = ({ name }) => {
  const getBadgeStyles = (tech: string): string => {
    const styles = {
      react: 'bg-blue-500/10 text-blue-600',
      typescript: 'bg-blue-600/10 text-blue-700',
      vite: 'bg-purple-500/10 text-purple-600',
      tailwind: 'bg-teal-500/10 text-teal-600',
      default: 'bg-gray-500/10 text-gray-700'
    };
    
    return styles[tech.toLowerCase()] || styles.default;
  };

  return (
    <div className="relative group/tech">
      <span 
        className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium backdrop-blur-sm ${getBadgeStyles(name)}`}
      >
        {name}
      </span>
      <div className="absolute -top-2 left-1/2 -translate-x-1/2 -translate-y-full opacity-0 group-hover/tech:opacity-100 transition-all duration-200 pointer-events-none">
        <div className="bg-gray-900 text-white text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap">
          {getTechDescription(name)}
        </div>
        <div className="w-2 h-2 bg-gray-900 transform rotate-45 absolute -bottom-1 left-1/2 -translate-x-1/2"></div>
      </div>
    </div>
  );
};

const getTechDescription = (tech: string): string => {
  const descriptions: Record<string, string> = {
    React: 'A JavaScript library for building user interfaces',
    TypeScript: 'JavaScript with syntax for types',
    Vite: 'Next generation frontend tooling',
    Tailwind: 'A utility-first CSS framework'
  };
  
  return descriptions[tech] || tech;
};

export default TechBadge;