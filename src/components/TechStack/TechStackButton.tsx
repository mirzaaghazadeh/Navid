import React from 'react';
import { Code2 } from 'lucide-react';
import { techStackData } from '../../config/techStack';

const TechStackButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      <button
        className="bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform group-hover:scale-110"
        title="View Tech Stack"
      >
        <Code2 className="w-6 h-6" />
      </button>
      
      <div className="absolute bottom-16 right-0 w-72 bg-gray-900/95 backdrop-blur-sm rounded-lg shadow-xl p-4 transition-all duration-300 transform scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 origin-bottom-right">
        {Object.entries(techStackData).map(([category, items]) => (
          <div key={category} className="mb-3 last:mb-0">
            <h3 className="text-gray-400 text-xs font-medium mb-1.5">{category}</h3>
            <div className="flex flex-wrap gap-1.5">
              {items.map((item) => (
                <span
                  key={item.name}
                  className="px-2 py-1 bg-gray-800 rounded text-gray-200 text-xs hover:bg-gray-700 transition-colors"
                  title={item.description}
                >
                  {item.name}
                  {item.version && <span className="text-gray-400 ml-1">{item.version}</span>}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStackButton;