import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { PaginationState } from '../../types/article';

interface PaginationProps extends PaginationState {
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  if (totalPages <= 1) return null;
  if (currentPage === 1) return null;

  return (
    <div className="flex items-center justify-center gap-2 mt-8">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="w-8 h-8 flex items-center justify-center rounded-full text-gray-600 
                 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed
                 transition-all duration-200"
        aria-label="Previous page"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`
            w-2 h-2 rounded-full transition-all duration-200 
            ${currentPage === page 
              ? 'bg-indigo-600' 
              : 'bg-gray-300 hover:bg-gray-400'
            }
          `}
          aria-label={`Page ${page}`}
        />
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="w-8 h-8 flex items-center justify-center rounded-full text-gray-600 
                 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed
                 transition-all duration-200"
        aria-label="Next page"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
};

export default Pagination;