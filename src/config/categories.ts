export interface Category {
  id: string;
  title: string;
  description: string;
}

export const categories: Category[] = [
  {
    id: 'games',
    title: 'Featured Projects',
    description: 'Interactive games and applications showcasing my development skills'
  },
  {
    id: 'tools',
    title: 'Developer Tools',
    description: 'Utilities and tools I\'ve created to improve development workflows'
  }
];