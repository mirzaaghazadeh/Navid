import React from 'react';

interface TechCategoryProps {
  title: string;
  items: Array<{
    name: string;
    version?: string;
    description: string;
  }>;
}

const TechCategory: React.FC<TechCategoryProps> = ({ title, items }) => {
  return (
    <div className="mb-4">
      <h3 className="text-sm font-semibold text-gray-400 mb-2">{title}</h3>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.name} className="text-gray-200">
            <span className="font-medium">{item.name}</span>
            {item.version && <span className="text-gray-400"> ({item.version})</span>}
            <p className="text-sm text-gray-400">{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TechCategory;