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
    id: 'hacker',
    title: 'Hackers Tools',
    description: 'Security and penetration testing tools for ethical hacking'
  },
  {
    id: 'tools',
    title: 'Developers Tools',
    description: 'Utilities and tools I\'ve created to improve development workflows'
  }
];