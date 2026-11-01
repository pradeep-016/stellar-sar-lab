import React from 'react';
import { ResearchDirection } from '../../types';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';
import {
  ShieldCheck,
  AlertTriangle,
  Sliders,
  GitFork,
  Cpu,
  Crosshair,
  ArrowRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface ResearchCardProps {
  direction: ResearchDirection;
}

export const ResearchCard: React.FC<ResearchCardProps> = ({ direction }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-accent-blue" />;
      case 'AlertTriangle':
        return <AlertTriangle className="w-5 h-5 text-amber-400" />;
      case 'Sliders':
        return <Sliders className="w-5 h-5 text-accent-cyan" />;
      case 'GitFork':
        return <GitFork className="w-5 h-5 text-accent-violet" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-sky-400" />;
      case 'Crosshair':
        return <Crosshair className="w-5 h-5 text-emerald-400" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-accent-blue" />;
    }
  };

  return (
    <Card className="flex flex-col justify-between h-full group hover:border-accent-blue/50">
      <div>
        {/* Header icon and slug */}
        <div className="flex items-center justify-between mb-4">
          <div className="p-2.5 rounded-lg bg-background-elevated border border-border group-hover:border-accent-blue/40 group-hover:bg-accent-blue/10 transition-colors">
            {getIcon(direction.iconName)}
          </div>
          <span className="text-xs font-mono text-scientific-muted uppercase tracking-wider">
            Direction
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-accent-blue transition-colors mb-2.5 font-display">
          {direction.title}
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm text-scientific-slate leading-relaxed mb-4">
          {direction.shortDescription}
        </p>

        {/* Themes tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {direction.keyThemes.slice(0, 3).map((theme) => (
            <Badge key={theme} variant="slate" size="sm">
              {theme}
            </Badge>
          ))}
          {direction.keyThemes.length > 3 && (
            <span className="text-[11px] font-mono text-scientific-muted self-center">
              +{direction.keyThemes.length - 3} more
            </span>
          )}
        </div>
      </div>

      {/* Footer link */}
      <div className="pt-4 border-t border-border/60 flex items-center justify-between text-xs font-mono text-accent-blue group-hover:text-sky-300">
        <span>Explore Theme & Questions</span>
        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
      </div>
    </Card>
  );
};
