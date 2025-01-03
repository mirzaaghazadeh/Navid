import React from 'react';
import { Article } from '../../types/article';
import ArticleCard from './ArticleCard';

interface ArticlesListProps {
  articles: Article[];
}

const ArticlesList: React.FC<ArticlesListProps> = ({ articles }) => (
  <div className="space-y-6">
    {articles.map((article, index) => (
      <ArticleCard key={index} article={article} />
    ))}
  </div>
);

export default ArticlesList;