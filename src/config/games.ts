import { GameIconType } from '../components/GameIcon';

export interface Game {
  title: string;
  description: string;
  iconType: GameIconType;
  link: string;
  category: string;
}

export const games: Game[] = [
  {
    title: "XO Game",
    description: "Classic Tic-tac-toe game with a modern twist. Challenge your friends or play against the computer in this timeless battle of X's and O's.",
    iconType: "xo",
    link: "https://xo.navidincome.com/",
    category: "games"
  },
  {
    title: "Rock Paper Scissors",
    description: "Test your luck and strategy in this beautifully designed version of the classic hand game. Features both single and multiplayer modes.",
    iconType: "rps",
    link: "https://rps.navidincome.com/",
    category: "games"
  }
];