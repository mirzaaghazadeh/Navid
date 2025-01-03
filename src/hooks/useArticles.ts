import { useState, useEffect } from 'react';
import { Article, PaginationState } from '../types/article';
import { fetchMediumArticles } from '../components/Articles/utils';

const ITEMS_PER_PAGE = 5;

const useArticles = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [pagination, setPagination] = useState<PaginationState>({
    currentPage: 1,
    totalPages: 1,
    itemsPerPage: ITEMS_PER_PAGE
  });

  useEffect(() => {
    const loadArticles = async () => {
      try {
        const data = await fetchMediumArticles();
        setArticles(data);
        setPagination(prev => ({
          ...prev,
          totalPages: Math.ceil(data.length / ITEMS_PER_PAGE)
        }));
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch articles'));
      } finally {
        setIsLoading(false);
      }
    };

    loadArticles();
  }, []);

  const paginatedArticles = articles.slice(
    (pagination.currentPage - 1) * pagination.itemsPerPage,
    pagination.currentPage * pagination.itemsPerPage
  );

  const handlePageChange = (page: number) => {
    setPagination(prev => ({ ...prev, currentPage: page }));
  };

  return { 
    articles: paginatedArticles, 
    isLoading, 
    error,
    pagination,
    handlePageChange
  };
};

export default useArticles;