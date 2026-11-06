import React from 'react';
import { models } from '../data/models';
import { Badge } from '../components/common/Badge';
import { ArmArchitectureDiagram } from '../components/visualizations/ArmArchitectureDiagram';
import { BenchmarkBarChart } from '../components/visualizations/BenchmarkBarChart';
import {
  Sparkles,
  Github,
  AlertCircle,
  CheckCircle2,
  FileCheck2,
} from 'lucide-react';

export const Models: React.FC = () => {
  const armModel = models[0];

  return (
    <div className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <Badge variant="violet" size="sm">
            OPEN RESEARCH ARTIFACTS
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mt-3 mb-6 font-display">
            Models & Open-Source Research
          </h1>
          <p className="text-lg text-scientific-slate leading-relaxed">
            Public releases of standalone reward model checkpoints, evaluation codebases, and training configurations from Stellar ASION.
          </p>
        </div>

        {/* Featured Model Header Hero */}
        <div className="bg-background-surface/90 border border-border rounded-2xl p-6 sm:p-8 md:p-12 backdrop-blur-md mb-16 relative overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <Badge variant="violet" size="md" icon={<Sparkles className="w-3.5 h-3.5" />}>
                  {armModel.status}
                </Badge>
                <Badge variant="emerald" size="sm">
                  {armModel.access.checkpointType}
                </Badge>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display mb-2">
                {armModel.name}
              </h2>

              <p className="text-sm font-mono text-accent-cyan">
                {armModel.codename} • Foundation: {armModel.backbone}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={armModel.access.huggingFaceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-mono text-xs font-bold bg-gradient-to-r from-accent-blue to-accent-cyan text-background-deep hover:brightness-110 shadow-lg shadow-cyan-500/20 transition-all"
              >
                <span className="text-base">🤗</span>
                <span>View Model on Hugging Face</span>
              </a>
              <a
                href="https://github.com/pradeep-016/stellar-sar-lab"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-mono text-xs font-semibold bg-background-elevated border border-border hover:border-slate-600 text-white transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>Source Code</span>
              </a>
            </div>
          </div>

          <p className="text-base text-scientific-slate leading-relaxed max-w-4xl mb-10">
            {armModel.overview}
          </p>

          {/* Architecture Specifications Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 font-mono text-xs mb-10">
            <div className="bg-background-card p-3 rounded-xl border border-border">
              <span className="text-[10px] text-scientific-muted block uppercase">Backbone</span>
              <span className="text-white font-bold text-sm">{armModel.architectureDetails.backbone}</span>
            </div>
            <div className="bg-background-card p-3 rounded-xl border border-border">
              <span className="text-[10px] text-scientific-muted block uppercase">Quantization</span>
              <span className="text-white font-bold text-sm">4-bit NormalFloat</span>
            </div>
            <div className="bg-background-card p-3 rounded-xl border border-border">
              <span className="text-[10px] text-scientific-muted block uppercase">Fine-Tuning</span>
              <span className="text-white font-bold text-sm">{armModel.architectureDetails.finetuning}</span>
            </div>
            <div className="bg-background-card p-3 rounded-xl border border-border">
              <span className="text-[10px] text-scientific-muted block uppercase">Hardware</span>
              <span className="text-white font-bold text-sm">Dual NVIDIA T4</span>
            </div>
            <div className="bg-background-card p-3 rounded-xl border border-border">
              <span className="text-[10px] text-scientific-muted block uppercase">Pairs Corpus</span>
              <span className="text-white font-bold text-sm">{armModel.architectureDetails.preferencePairs.toLocaleString()}</span>
            </div>
            <div className="bg-background-card p-3 rounded-xl border border-border">
              <span className="text-[10px] text-scientific-muted block uppercase">Checkpoint</span>
              <span className="text-emerald-400 font-bold text-sm">Merged Weights</span>
            </div>
          </div>
        </div>

        {/* INTERACTIVE ARCHITECTURE EXPLORER */}
        <div className="mb-16">
          <ArmArchitectureDiagram />
        </div>

        {/* BENCHMARK EVALUATIONS */}
        <div className="mb-16">
          <BenchmarkBarChart />
        </div>

        {/* SUPERVISION DIMENSIONS DETAILED BREAKDOWN */}
        <div className="bg-background-surface/80 border border-border rounded-2xl p-6 sm:p-8 md:p-12 backdrop-blur-md mb-16">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono text-accent-cyan uppercase tracking-wider block mb-2">
              DECOMPOSED SUPERVISION
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
              Six Explicit Evaluation Dimensions
            </h3>
            <p className="text-sm text-scientific-slate mt-2">
              By explicitly supervising individual dimensions rather than an aggregated scalar, ARM limits opportunistic gaming of stylistic features.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {armModel.supervisionDimensions.map((dim, i) => (
              <div
                key={dim.name}
                className="bg-background-card/90 border border-border rounded-xl p-5 hover:border-slate-700 transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-accent-blue">
                    0{i + 1}. {dim.name}
                  </span>
                </div>
                <p className="text-xs text-scientific-slate leading-relaxed mb-4">
                  {dim.description}
                </p>
                <div className="pt-3 border-t border-border/60 text-[11px] font-mono text-scientific-muted">
                  <span className="text-scientific-light font-semibold block mb-0.5">
                    Mitigation Target:
                  </span>
                  {dim.importance}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* APPLICATIONS & LIMITATIONS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-background-card/80 p-6 sm:p-8 rounded-2xl border border-border">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-400 mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>Intended Research Applications</span>
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-scientific-slate">
              {armModel.intendedApplications.map((app, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0 mt-2" />
                  <span>{app}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-background-card/80 p-6 sm:p-8 rounded-2xl border border-border">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-amber-400 mb-4 flex items-center gap-2">
              <AlertCircle className="w-4 h-4" />
              <span>Explicit Limitations</span>
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-scientific-slate">
              {armModel.limitations.map((lim, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0 mt-2" />
                  <span>{lim}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* EVALUATION PROTOCOL & EPISTEMIC STATUS (STRICTLY NO BIBTEX) */}
        <div className="bg-background-deep/90 border border-accent-blue/30 rounded-2xl p-6 sm:p-8">
          <div className="flex items-center gap-2 mb-3 text-xs font-mono text-accent-cyan uppercase tracking-wider">
            <FileCheck2 className="w-4 h-4 text-accent-cyan" />
            <span>Evaluation Protocol & Epistemic Status</span>
          </div>
          <p className="text-sm text-scientific-slate leading-relaxed">
            Evaluations conducted using official open-source harnesses with deterministic greedy decoding (temperature=0.0). Public PR for inclusion in the official AllenAI leaderboard is currently under review.
          </p>
        </div>
      </div>
    </div>
  );
};
