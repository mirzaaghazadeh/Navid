import React from 'react';
import ProjectCard from '../ProjectCard';
import { games } from '../../config/games';
import { categories } from '../../config/categories';
import CategorySection from './CategorySection';

const ProjectsShowcase = () => {
  return (
    <div className="space-y-16">
      {categories.map((category) => {
        const categoryProjects = games.filter(game => game.category === category.id);
        return (
          <CategorySection
            key={category.id}
            category={category}
            projects={categoryProjects}
          />
        );
      })}
    </div>
  );
};

export default ProjectsShowcase;