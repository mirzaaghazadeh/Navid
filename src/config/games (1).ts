import { GameIconType } from '../components/GameIcon';

export interface Game {
  title: string;
  description: string;
  iconType: GameIconType;
  link: string;
  sourceCode: string;
  category: string;
  technologies: string[];
}

export const games: Game[] = [
  {
    title: "Domain Selling",
    description: "A simple landing page showcasing domain availability, contact information, and pricing details for potential buyers.",
    iconType: "domain",
    link: "https://domainselling.navid.tr/",
    sourceCode: "https://github.com/mirzaaghazadeh/DomainSelling",
    category: "tools",
    technologies: ["React", "TypeScript", "Vite", "Tailwind"]
  },
  {
    title: "CVSSv3 Calculator",
    description: "Calculate vulnerability scores and estimate bug bounty rewards using the CVSS v3 scoring system. Essential tool for security researchers and bug hunters.",
    iconType: "xo",
    link: "https://cvss.navid.tr/",
    sourceCode: "https://github.com/mirzaaghazadeh/cvss-calculator",
    category: "hacker",
    technologies: ["React", "TypeScript", "Vite", "Tailwind", "shadcn/ui"]
  },
  {
    title: "XO Game",
    description: "Classic Tic-tac-toe game with a modern twist. Challenge your friends or play against the computer in this timeless battle of X's and O's.",
    iconType: "xo",
    link: "https://xo.navid.tr/",
    sourceCode: "https://github.com/mirzaaghazadeh/xo",
    category: "games",
    technologies: ["React", "TypeScript", "Vite", "Tailwind"]
  },
  {
    title: "Rock Paper Scissors",
    description: "Test your luck and strategy in this beautifully designed version of the classic hand game. Features both single and multiplayer modes.",
    iconType: "rps",
    link: "https://rps.navid.tr/",
    sourceCode: "https://github.com/mirzaaghazadeh/Rock-Paper-Scissors",
    category: "games",
    technologies: ["React", "TypeScript", "Vite", "Tailwind"]
  }
];