import React from 'react';
import { ResearchDirection } from '../../types';
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
  index?: number;
}

export const ResearchCard: React.FC<ResearchCardProps> = ({ direction, index = 0 }) => {
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

  // Empirical anchor based on technical direction
  const getAnchor = (id: string) => {
    if (id.includes('inference')) {
      return {
        label: 'ANCHOR: AIAS 2026 PAPER',
        color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
      };
    }
    if (id.includes('native-alignment')) {
      return {
        label: 'ANCHOR: 10-SHARD CURATION PIPELINE',
        color: 'text-accent-blue bg-accent-blue/10 border-accent-blue/30',
      };
    }
    if (id.includes('optimized-network')) {
      return {
        label: 'ANCHOR: STELLAR-ARM (8B NF4)',
        color: 'text-accent-violet bg-accent-violet/10 border-accent-violet/30',
      };
    }
    return {
      label: 'FOCUS: GOODHART BOUNDARIES',
      color: 'text-amber-400 bg-amber-500/10 border-amber-500/30',
    };
  };

  const anchor = getAnchor(direction.id);
  const axisIndex = `AXIS // 0${index + 1}`;

  return (
    <div className="relative flex flex-col justify-between h-full rounded-xl bg-gradient-to-b from-slate-900/90 via-background-surface/90 to-background-deep/95 border border-border/80 hover:border-accent-blue/50 p-6 sm:p-7 transition-all duration-300 hover:shadow-xl hover:shadow-accent-blue/5 group">
      {/* Top subtle highlight accent line */}
      <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-accent-blue/30 to-transparent group-hover:via-accent-blue/60 transition-all" />

      <div>
        {/* Header: Icon + Axis Index */}
        <div className="flex items-center justify-between mb-5">
          <div className="p-2.5 rounded-lg bg-background-elevated border border-border/80 group-hover:border-accent-blue/40 group-hover:bg-accent-blue/10 transition-colors">
            {getIcon(direction.iconName)}
          </div>
          <span className="text-[11px] font-mono font-semibold text-scientific-muted tracking-widest uppercase">
            {axisIndex}
          </span>
        </div>

        {/* Empirical Anchor Tag */}
        <div className="mb-3">
          <span
            className={`inline-block px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider rounded border ${anchor.color}`}
          >
            {anchor.label}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white group-hover:text-accent-blue transition-colors mb-3 font-display tracking-tight">
          {direction.title}
        </h3>

        {/* Abstract Description */}
        <p className="text-xs sm:text-sm text-scientific-slate leading-relaxed mb-6">
          {direction.shortDescription}
        </p>

        {/* Primary Investigation Targets (Replacing bloated pill bubbles) */}
        <div className="border-t border-border/60 pt-4 mb-6">
          <span className="text-[10px] font-mono font-semibold text-scientific-muted uppercase tracking-widest block mb-3">
            Primary Investigation Targets
          </span>
          <ul className="space-y-2.5">
            {direction.keyThemes.slice(0, 3).map((theme) => (
              <li key={theme} className="flex items-start gap-2.5 text-xs">
                <span className="text-accent-blue font-mono font-bold mt-0.5 select-none text-[11px]">
                  ▹
                </span>
                <span className="text-slate-300 font-sans leading-snug">
                  {theme}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Link */}
      <div className="pt-4 border-t border-border/60">
        <Link
          to={`/research#${direction.slug || direction.id}`}
          className="inline-flex items-center justify-between w-full text-xs font-mono font-medium text-accent-blue hover:text-sky-300 transition-colors group/link"
        >
          <span>Explore Agenda & Questions</span>
          <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};
