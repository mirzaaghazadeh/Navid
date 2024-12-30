import React from 'react';
import { BookOpen } from 'lucide-react';
import useArticles from '../../hooks/useArticles';
import ArticlesList from './ArticlesList';
import Pagination from './Pagination';

const ArticlesSection = () => {
  const { articles, isLoading, error, pagination, handlePageChange } = useArticles();

  if (isLoading) {
    return (
      <section className="mt-24 text-center max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-xl p-8">
          <p className="text-gray-600">Loading articles...</p>
        </div>
      </section>
    );
  }

  if (error || articles.length === 0) {
    return null;
  }

  return (
    <section className="mt-24 text-center max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Latest Articles</h2>
      <div className="bg-white rounded-lg shadow-xl p-8">
        <BookOpen className="w-12 h-12 text-indigo-600 mx-auto mb-6" />
        <ArticlesList articles={articles} />
        <Pagination 
          currentPage={pagination.currentPage}
          totalPages={pagination.totalPages}
          itemsPerPage={pagination.itemsPerPage}
          onPageChange={handlePageChange}
        />
      </div>
    </section>
  );
};

export default ArticlesSection;