import React from 'react';
import { researchDirections } from '../data/research';
import { Badge } from '../components/common/Badge';
import { BestOfNSimulator } from '../components/visualizations/BestOfNSimulator';
import { RewardQualityDivergenceChart } from '../components/visualizations/RewardQualityDivergenceChart';
import {
  ShieldCheck,
  AlertTriangle,
  Sliders,
  GitFork,
  Cpu,
  Crosshair,
  ArrowRight,
  HelpCircle,
  FileCheck,
  Layers,
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const Research: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-accent-blue" />;
      case 'AlertTriangle':
        return <AlertTriangle className="w-6 h-6 text-amber-400" />;
      case 'Sliders':
        return <Sliders className="w-6 h-6 text-accent-cyan" />;
      case 'GitFork':
        return <GitFork className="w-6 h-6 text-accent-violet" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-sky-400" />;
      case 'Crosshair':
        return <Crosshair className="w-6 h-6 text-emerald-400" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-accent-blue" />;
    }
  };

  return (
    <div className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <Badge variant="blue" size="sm">
            SCIENTIFIC PROGRAM
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mt-3 mb-6 font-display">
            Research Directions & Empirical Agendas
          </h1>
          <p className="text-lg text-scientific-slate leading-relaxed">
            StellarLab investigates the reliability of learned objectives, reward representations, and verifiers as language models face increasing optimization pressure.
          </p>
        </div>

        {/* Quick Nav Anchors */}
        <div className="flex flex-wrap gap-2 pb-12 mb-16 border-b border-border/70 text-xs font-mono">
          <span className="text-scientific-muted self-center mr-2">Jump to:</span>
          {researchDirections.map((dir) => (
            <a
              key={dir.id}
              href={`#${dir.slug}`}
              className="px-3 py-1.5 rounded-lg bg-background-surface border border-border hover:border-accent-blue/50 text-scientific-slate hover:text-white transition-colors"
            >
              {dir.title}
            </a>
          ))}
        </div>

        {/* DETAILED DIRECTIONS BREAKDOWN */}
        <div className="space-y-24">
          {researchDirections.map((direction, index) => (
            <section
              key={direction.id}
              id={direction.slug}
              className="scroll-mt-28 bg-background-surface/80 border border-border rounded-2xl p-6 sm:p-8 md:p-12 backdrop-blur-md relative overflow-hidden"
            >
              {/* Top Accent Pill & Index */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-background-elevated border border-border">
                    {getIcon(direction.iconName)}
                  </div>
                  <div>
                    <span className="text-xs font-mono text-scientific-muted uppercase tracking-wider block">
                      Program 0{index + 1}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
                      {direction.title}
                    </h2>
                  </div>
                </div>

                <Badge variant="slate" size="sm">
                  Active Investigation
                </Badge>
              </div>

              {/* Main Narrative */}
              <div className="text-sm sm:text-base text-scientific-slate leading-relaxed mb-8 max-w-4xl">
                {direction.fullDescription}
              </div>

              {/* Critical Scientific Distinction Note if available */}
              {direction.distinctionNote && (
                <div className="mb-8 p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs sm:text-sm text-amber-200/90 leading-relaxed flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-amber-300 font-semibold block mb-0.5">
                      Crucial Scientific Distinction:
                    </strong>
                    {direction.distinctionNote}
                  </div>
                </div>
              )}

              {/* Two Column Breakdown: Themes & Core Questions */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                {/* Key Research Themes */}
                <div className="bg-background-card/80 p-6 rounded-xl border border-border">
                  <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-accent-blue mb-4 flex items-center gap-2">
                    <Layers className="w-4 h-4" />
                    <span>Key Research Themes</span>
                  </h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-scientific-slate">
                    {direction.keyThemes.map((theme, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-blue flex-shrink-0 mt-2" />
                        <span>{theme}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Core Research Questions */}
                <div className="bg-background-card/80 p-6 rounded-xl border border-border">
                  <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-accent-cyan mb-4 flex items-center gap-2">
                    <HelpCircle className="w-4 h-4" />
                    <span>Target Research Questions</span>
                  </h3>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-scientific-slate">
                    {direction.coreQuestions.map((q, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan flex-shrink-0 mt-2" />
                        <span className="italic font-serif text-white/90">"{q}"</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Methodologies */}
              <div className="pt-6 border-t border-border/60">
                <div className="text-xs font-mono text-scientific-muted uppercase tracking-wider mb-3">
                  Empirical Methodologies & Protocols:
                </div>
                <div className="flex flex-wrap gap-2">
                  {direction.methodologies.map((m, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-background-deep border border-border text-xs text-scientific-slate font-mono"
                    >
                      <FileCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{m}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Contextual Interactive Graphic Embeds */}
              {direction.id === 'test-time-scaling' && (
                <div className="mt-10 pt-8 border-t border-border">
                  <BestOfNSimulator />
                </div>
              )}

              {direction.id === 'reward-quality-divergence' && (
                <div className="mt-10 pt-8 border-t border-border">
                  <RewardQualityDivergenceChart />
                </div>
              )}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

