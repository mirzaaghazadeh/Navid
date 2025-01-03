export interface Category {
  id: string;
  title: string;
  description: string;
}

export const categories: Category[] = [
  {
    id: 'tools',
    title: 'Developers Tools',
    description: 'Utilities and tools I\'ve created to improve development workflows'
  },
  {
    id: 'hacker',
    title: 'Hackers Tools',
    description: 'Security and penetration testing tools for ethical hacking'
  },
  {
    id: 'games',
    title: 'Games',
    description: 'Interactive games showcasing my development skills'
  }
];