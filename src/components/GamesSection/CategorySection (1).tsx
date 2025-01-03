import React from 'react';
import ProjectCard from '../ProjectCard';
import { Category } from '../../config/categories';
import { Game } from '../../config/games';

interface CategorySectionProps {
  category: Category;
  projects: Game[];
}

const CategorySection: React.FC<CategorySectionProps> = ({ category, projects }) => {
  return (
    <section className="space-y-8">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900">
          {category.title}
        </h2>
        <p className="mt-2 text-gray-600">{category.description}</p>
      </div>
      {projects.length > 0 ? (
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600 italic">
          Coming Soon...
        </p>
      )}
    </section>
  );
};

export default CategorySection;