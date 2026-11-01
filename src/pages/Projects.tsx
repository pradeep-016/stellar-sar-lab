import React from 'react';
import { projects } from '../data/projects';
import { Badge } from '../components/common/Badge';
import { EmpiricalObservationChart } from '../components/visualizations/EmpiricalObservationChart';
import { ArmArchitectureDiagram } from '../components/visualizations/ArmArchitectureDiagram';
import { BenchmarkBarChart } from '../components/visualizations/BenchmarkBarChart';
import {
  FileText,
  Github,
  ExternalLink,
  Award,
  Layers,
  AlertCircle,
  Cpu,
  CheckCircle2,
  Sliders,
  HelpCircle,
  Share2,
} from 'lucide-react';

export const Projects: React.FC = () => {
  const projectA = projects[0]; // Evaluator Reliability Under TTS
  const projectB = projects[1]; // ARM

  return (
    <div className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <Badge variant="emerald" size="sm">
            RESEARCH PORTFOLIO
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mt-3 mb-6 font-display">
            Selected Research Projects
          </h1>
          <p className="text-lg text-scientific-slate leading-relaxed">
            Controlled empirical investigations into test-time verifier reliability and multi-dimensional preference supervision.
          </p>
        </div>

        {/* Quick Nav Anchors */}
        <div className="flex flex-wrap gap-2 pb-8 mb-16 border-b border-border/70 text-xs font-mono">
          <span className="text-scientific-muted self-center mr-2">Projects:</span>
          <a
            href="#evaluator-reliability"
            className="px-3.5 py-1.5 rounded-lg bg-background-surface border border-border hover:border-accent-blue text-scientific-slate hover:text-white transition-colors"
          >
            01. Evaluator Reliability Under TTS (AIAS 2026)
          </a>
          <a
            href="#arm"
            className="px-3.5 py-1.5 rounded-lg bg-background-surface border border-border hover:border-accent-violet text-scientific-slate hover:text-white transition-colors"
          >
            02. Associative Reward Model (ARM)
          </a>
        </div>

        {/* PROJECT A: EVALUATOR RELIABILITY */}
        <section
          id="evaluator-reliability"
          className="scroll-mt-28 mb-24 bg-background-surface/80 border border-border rounded-2xl p-6 sm:p-8 md:p-12 backdrop-blur-md"
        >
          {/* Header & Badges */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <Badge variant="emerald" size="md" icon={<Award className="w-4 h-4" />}>
                {projectA.status}
              </Badge>
            </div>
            <span className="text-xs font-mono text-scientific-muted">
              Project ID: {projectA.slug}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-display">
            {projectA.title}
          </h2>

          <div className="text-sm font-mono text-accent-cyan mb-8">
            Presentation Venue: {projectA.presentationVenue}
          </div>

          {/* Overview & Core Question */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
            <div className="lg:col-span-7 space-y-4 text-sm sm:text-base text-scientific-slate leading-relaxed">
              <p>{projectA.overview}</p>
              <p>
                As inference-time compute allocation becomes a predominant mechanism for capability scaling, understanding whether candidate-selection verifiers scale safely is paramount. In this work, we probe the behavior of Best-of-N selection across discrete budgets up to N = 256.
              </p>
            </div>

            <div className="lg:col-span-5 bg-background-deep/90 border border-border p-6 rounded-xl flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-accent-blue uppercase tracking-wider block mb-2 flex items-center gap-1.5">
                  <HelpCircle className="w-4 h-4" />
                  <span>Research Question</span>
                </span>
                <blockquote className="text-base font-serif italic text-white/95 leading-relaxed">
                  "{projectA.researchQuestion}"
                </blockquote>
              </div>
              <div className="mt-4 pt-4 border-t border-border/60 text-xs font-mono text-scientific-muted">
                Task Domains: GSM8K Reasoning & HumanEval Program Synthesis
              </div>
            </div>
          </div>

          {/* EMPIRICAL OBSERVATION VISUALIZATION */}
          <div className="mb-12">
            <EmpiricalObservationChart />
          </div>

          {/* Methodology & Experimental Setup */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-background-card/80 p-6 rounded-xl border border-border">
              <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-accent-blue mb-4">
                Experimental Setup & Benchmarks
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-scientific-slate">
                {projectA.experimentalSetup.benchmarks?.map((b, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-blue flex-shrink-0 mt-2" />
                    <span><strong>Benchmark:</strong> {b}</span>
                  </li>
                ))}
                {projectA.experimentalSetup.models?.map((m, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-blue flex-shrink-0 mt-2" />
                    <span><strong>Generators:</strong> {m}</span>
                  </li>
                ))}
                {projectA.experimentalSetup.evaluators?.map((e, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-blue flex-shrink-0 mt-2" />
                    <span><strong>Evaluators:</strong> {e}</span>
                  </li>
                ))}
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-blue flex-shrink-0 mt-2" />
                  <span><strong>Selection Budgets:</strong> {projectA.experimentalSetup.selectionBudgets}</span>
                </li>
              </ul>
            </div>

            <div className="bg-background-card/80 p-6 rounded-xl border border-border">
              <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-accent-cyan mb-4">
                Methodological Controls & Statistics
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-scientific-slate">
                {projectA.methodology.map((m, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Limitations */}
          <div className="bg-background-deep/60 p-6 rounded-xl border border-border mb-8">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-amber-400 mb-3 flex items-center gap-2">
              <AlertCircle className="w-4 h-4" />
              <span>Explicit Limitations & Scope Boundaries</span>
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-scientific-slate pl-6 list-disc">
              {projectA.limitations.map((lim, i) => (
                <li key={i}>{lim}</li>
              ))}
            </ul>
          </div>

          {/* External Links */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-border/70 text-xs font-mono">
            <div className="flex items-center gap-3">
              <a
                href={projectA.links.paper}
                className="px-4 py-2 rounded-lg bg-background-elevated border border-border hover:border-accent-blue text-white flex items-center gap-1.5 transition-colors"
              >
                <FileText className="w-4 h-4 text-accent-blue" />
                <span>Paper PDF (AIAS 2026)</span>
              </a>
              <a
                href={projectA.links.poster}
                className="px-4 py-2 rounded-lg bg-background-elevated border border-border hover:border-accent-blue text-white flex items-center gap-1.5 transition-colors"
              >
                <ExternalLink className="w-4 h-4 text-accent-cyan" />
                <span>Poster Material</span>
              </a>
              <a
                href={projectA.links.code}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-background-elevated border border-border hover:border-accent-blue text-white flex items-center gap-1.5 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>Code Repository</span>
              </a>
            </div>

            <span className="text-scientific-muted">
              Peer-Reviewed Workshop Output
            </span>
          </div>
        </section>

        {/* PROJECT B: ASSOCIATIVE REWARD MODEL (ARM) */}
        <section
          id="arm"
          className="scroll-mt-28 bg-background-surface/80 border border-border rounded-2xl p-6 sm:p-8 md:p-12 backdrop-blur-md"
        >
          {/* Header & Badges */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-2">
              <Badge variant="violet" size="md" icon={<Layers className="w-4 h-4" />}>
                {projectB.status}
              </Badge>
              <Badge variant="emerald" size="sm">
                Standalone Release Planned
              </Badge>
            </div>
            <span className="text-xs font-mono text-scientific-muted">
              Project ID: {projectB.slug}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2 font-display">
            {projectB.title}
          </h2>

          <div className="text-sm font-mono text-accent-violet mb-8">
            Backbone: Qwen3-8B • 4-bit NF4 QLoRA • Dual NVIDIA T4 GPUs
          </div>

          {/* Overview & Core Question */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
            <div className="lg:col-span-7 space-y-4 text-sm sm:text-base text-scientific-slate leading-relaxed">
              <p>{projectB.overview}</p>
              <p>
                Scalar reward models frequently suffer from style-traps, sycophancy, and length bias because all behavioral traits are forced into a single scalar value. ARM remedies this by training explicit dimensional heads, penalizing inconsistent preferences through consistency loss regularization.
              </p>
            </div>

            <div className="lg:col-span-5 bg-background-deep/90 border border-border p-6 rounded-xl flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-accent-violet uppercase tracking-wider block mb-2 flex items-center gap-1.5">
                  <HelpCircle className="w-4 h-4" />
                  <span>Research Question</span>
                </span>
                <blockquote className="text-base font-serif italic text-white/95 leading-relaxed">
                  "{projectB.researchQuestion}"
                </blockquote>
              </div>
              <div className="mt-4 pt-4 border-t border-border/60 text-xs font-mono text-scientific-muted">
                Trained over 7,500 annotated preference pairs
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
              {Object.entries(projectB.specifications || {}).map(([key, val]) => (
                <div key={key} className="bg-background-deep/80 p-3 rounded-lg border border-border">
                  <span className="text-scientific-muted block text-[10px] uppercase mb-0.5">
                    {key}
                  </span>
                  <span className="text-white font-medium">{val}</span>
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
              {projectB.limitations.map((lim, i) => (
                <li key={i}>{lim}</li>
              ))}
            </ul>
          </div>

          {/* Action CTAs: Hugging Face & GitHub */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-border/70 text-xs font-mono">
            <div className="flex items-center gap-3">
              <a
                href={projectB.links.huggingFace}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl font-bold bg-gradient-to-r from-accent-blue to-accent-cyan text-background-deep hover:brightness-110 flex items-center gap-2 shadow-md shadow-cyan-500/20 transition-all"
              >
                <span className="text-base">🤗</span>
                <span>View Model on Hugging Face</span>
              </a>
              <a
                href={projectB.links.code}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-background-elevated border border-border hover:border-slate-600 text-white flex items-center gap-1.5 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>Model Codebase</span>
              </a>
            </div>

            <span className="text-emerald-400 font-mono">
              Merged Standalone Checkpoint Release
            </span>
          </div>
        </section>
      </div>
    </div>
  );
};
