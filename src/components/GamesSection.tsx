import React from 'react';
import GameCard from './GameCard';
import { games } from '../config/games';
import { categories } from '../config/categories';

const GamesSection = () => {
  return (
    <div className="space-y-16">
      {categories.map((category) => {
        const categoryGames = games.filter(game => game.category === category.id);
        
        return (
          <section key={category.id} className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center">
              {category.title}
            </h2>
            {categoryGames.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {categoryGames.map((game, index) => (
                  <GameCard key={index} {...game} />
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-600 italic">
                Coming soon!
              </p>
            )}
          </section>
        );
      })}
    </div>
  );
};

export default GamesSection;