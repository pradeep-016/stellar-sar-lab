import React from 'react';
import { projects } from '../data/projects';
import { Badge } from '../components/common/Badge';
import { ArmArchitectureDiagram } from '../components/visualizations/ArmArchitectureDiagram';
import { BenchmarkBarChart } from '../components/visualizations/BenchmarkBarChart';
import {
  Github,
  Layers,
  AlertCircle,
  HelpCircle,
  Sparkles,
} from 'lucide-react';

export const Projects: React.FC = () => {
  const armProject = projects[0]; // ARM Founding Project

  return (
    <div className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <Badge variant="violet" size="sm">
            LABORATORY RESEARCH PORTFOLIO
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mt-3 mb-6 font-display">
            Research Projects
          </h1>
          <p className="text-lg text-scientific-slate leading-relaxed">
            StellarLab's empirical research program begins with our founding project investigating multi-dimensional preference supervision and decomposed reward representations.
          </p>
        </div>

        {/* FOUNDING PROJECT: ASSOCIATIVE REWARD MODEL (ARM) */}
        <section
          id="arm"
          className="scroll-mt-28 bg-background-surface/80 border border-border rounded-2xl p-6 sm:p-8 md:p-12 backdrop-blur-md"
        >
          {/* Header & Badges */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-2">
              <Badge variant="violet" size="md" icon={<Sparkles className="w-4 h-4" />}>
                Founding Research Project
              </Badge>
              <Badge variant="emerald" size="sm">
                Merged Standalone Checkpoint Release
              </Badge>
            </div>
            <span className="text-xs font-mono text-scientific-muted">
              Project Codename: {armProject.slug.toUpperCase()}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 font-display">
            {armProject.title}
          </h2>

          <div className="text-sm font-mono text-accent-violet mb-8">
            Foundation: Qwen3-8B • 4-bit NF4 QLoRA • Dual NVIDIA T4 GPUs • 7,500 Preference Pairs
          </div>

          {/* Overview & Core Question */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
            <div className="lg:col-span-7 space-y-4 text-sm sm:text-base text-scientific-slate leading-relaxed">
              <p>{armProject.overview}</p>
              <p>
                Scalar reward models frequently suffer from style-traps, sycophancy, and length bias because all behavioral criteria are collapsed into a single scalar value. ARM remedies this vulnerability by supervising six explicit dimensional heads and penalizing inconsistent preferences through consistency loss regularization.
              </p>
              <p>
                As StellarLab's inaugural research initiative, ARM establishes our empirical pipeline for training, checkpointing, and evaluating decomposed evaluators that resist single-axis gaming.
              </p>
            </div>

            <div className="lg:col-span-5 bg-background-deep/90 border border-border p-6 rounded-xl flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-accent-violet uppercase tracking-wider block mb-2 flex items-center gap-1.5">
                  <HelpCircle className="w-4 h-4" />
                  <span>Core Research Question</span>
                </span>
                <blockquote className="text-base font-serif italic text-white/95 leading-relaxed">
                  "{armProject.researchQuestion}"
                </blockquote>
              </div>
              <div className="mt-4 pt-4 border-t border-border/60 text-xs font-mono text-scientific-muted">
                Supervision: 6 Explicit Evaluation Axes + Consistency Loss
              </div>
            </div>
          </div>

          {/* ARM ARCHITECTURE DIAGRAM */}
          <div className="mb-12">
            <ArmArchitectureDiagram />
          </div>

          {/* BENCHMARK RESULTS COMPONENT */}
          <div className="mb-12">
            <BenchmarkBarChart />
          </div>

          {/* Technical Specifications Matrix */}
          <div className="bg-background-card/80 p-6 sm:p-8 rounded-xl border border-border mb-12">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-accent-blue mb-4">
              Detailed Architecture & Training Specifications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs font-mono">
              {Object.entries(armProject.specifications || {}).map(([key, val]) => (
                <div key={key} className="bg-background-deep/80 p-3 rounded-lg border border-border">
                  <span className="text-scientific-muted block text-[10px] uppercase mb-0.5">
                    {key}
                  </span>
                  <span className="text-white font-medium">{val}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Methodology Details */}
          <div className="bg-background-card/80 p-6 sm:p-8 rounded-xl border border-border mb-12">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-accent-cyan mb-4">
              Training Methodology & Infrastructure
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono text-scientific-slate">
              {armProject.methodology.map((m, i) => (
                <div key={i} className="flex items-start gap-2 bg-background-deep p-3 rounded-lg border border-border">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan flex-shrink-0 mt-1.5" />
                  <span>{m}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Limitations */}
          <div className="bg-background-deep/60 p-6 rounded-xl border border-border mb-8">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-amber-400 mb-3 flex items-center gap-2">
              <AlertCircle className="w-4 h-4" />
              <span>Model Scope & Limitations</span>
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-scientific-slate pl-6 list-disc">
              {armProject.limitations.map((lim, i) => (
                <li key={i}>{lim}</li>
              ))}
            </ul>
          </div>

          {/* Action CTAs: Hugging Face & GitHub */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-border/70 text-xs font-mono">
            <div className="flex items-center gap-3">
              <a
                href={armProject.links.huggingFace}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl font-bold bg-gradient-to-r from-accent-blue to-accent-cyan text-background-deep hover:brightness-110 flex items-center gap-2 shadow-md shadow-cyan-500/20 transition-all"
              >
                <span className="text-base">🤗</span>
                <span>View Model on Hugging Face</span>
              </a>
              <a
                href={armProject.links.code}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-background-elevated border border-border hover:border-slate-600 text-white flex items-center gap-1.5 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>Model Codebase</span>
              </a>
            </div>

            <span className="text-emerald-400 font-mono">
              Inaugural Research Checkpoint
            </span>
          </div>
        </section>
      </div>
    </div>
  );
};
