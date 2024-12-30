import React from 'react';
import { Article } from '../../types/article';

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => (
  <a
    href={article.link}
    target="_blank"
    rel="noopener noreferrer"
    className="block group"
  >
    <article className="p-4 rounded-lg transition-colors hover:bg-gray-50">
      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
        {article.title}
      </h3>
      <time className="text-sm text-gray-500">{article.pubDate}</time>
    </article>
  </a>
);

export default ArticleCard;