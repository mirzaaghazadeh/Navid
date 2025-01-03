import React from 'react';
import { Globe, XSquare, Hand, LucideIcon } from 'lucide-react';

export type GameIconType = 'xo' | 'rps' | 'domain';

interface GameIconProps {
  type: GameIconType;
  className?: string;
}

const iconMap: Record<GameIconType, LucideIcon> = {
  xo: XSquare,
  rps: Hand,
  domain: Globe,
};

const GameIcon: React.FC<GameIconProps> = ({ type, className }) => {
  const Icon = iconMap[type];
  return <Icon className={className} />;
};

export default GameIcon;