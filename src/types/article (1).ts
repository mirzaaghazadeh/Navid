export interface Article {
  title: string;
  link: string;
  pubDate: string;
}

export interface PaginationState {
  currentPage: number;
  totalPages: number;
  itemsPerPage: number;
}