import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../config/site';
import { researchDirections } from '../data/research';
import { projects } from '../data/projects';
import { publications } from '../data/publications';
import { models } from '../data/models';
import { HeroConstellation } from '../components/visualizations/HeroConstellation';
import { RewardQualityDivergenceChart } from '../components/visualizations/RewardQualityDivergenceChart';
import { ResearchCard } from '../components/cards/ResearchCard';
import { ProjectCard } from '../components/cards/ProjectCard';
import { PublicationCard } from '../components/cards/PublicationCard';
import { Badge } from '../components/common/Badge';
import {
  ArrowRight,
  Sparkles,
  ChevronRight,
  BookOpen,
} from 'lucide-react';

export const Home: React.FC = () => {
  const foundingProject = projects[0]; // ARM
  const foundingPublication = publications[0];
  const featuredModel = models[0];

  return (
    <div className="relative">
      {/* HERO SECTION */}
      <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 overflow-hidden">
        {/* Three.js / Canvas Interactive Constellation Background */}
        <HeroConstellation />

        {/* Content Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Subtle Institutional Label */}
          <div className="inline-flex items-center gap-2 mb-6 animate-in fade-in duration-700">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-blue animate-pulse"></span>
            <Badge variant="blue" size="md">
              {siteConfig.foundingLabel}
            </Badge>
          </div>

          {/* Primary Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-5xl mx-auto leading-[1.1] mb-6 font-display">
            Advancing the Reliability and Safety of{' '}
            <span className="bg-gradient-to-r from-accent-blue via-accent-cyan to-accent-violet bg-clip-text text-transparent">
              Intelligent Systems.
            </span>
          </h1>

          {/* Supporting Statement */}
          <p className="text-base sm:text-xl text-scientific-slate max-w-3xl mx-auto leading-relaxed mb-10">
            {siteConfig.description}
          </p>

          {/* Primary & Secondary CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <Link
              to="/projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-mono text-sm font-bold bg-accent-blue text-background-deep hover:bg-sky-300 shadow-lg shadow-accent-blue/20 hover:shadow-accent-blue/35 transition-all duration-200"
            >
              <span>Founding Project: ARM</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/research"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-mono text-sm font-semibold bg-background-elevated hover:bg-slate-800 text-white border border-border hover:border-slate-600 transition-all duration-200"
            >
              <span>Research Agenda</span>
            </Link>
          </div>

          {/* Micro Telemetry Bar */}
          <div className="mt-16 pt-8 border-t border-border/40 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-left font-mono text-xs">
            <div className="p-3 bg-background-surface/50 rounded-lg border border-border/60">
              <span className="text-scientific-muted block text-[10px]">ORGANIZATIONAL STATUS</span>
              <span className="text-white font-semibold">Independent Research Initiative</span>
            </div>
            <div className="p-3 bg-background-surface/50 rounded-lg border border-border/60">
              <span className="text-scientific-muted block text-[10px]">FOUNDING RESEARCH</span>
              <span className="text-accent-blue font-semibold">Associative Reward Model</span>
            </div>
            <div className="p-3 bg-background-surface/50 rounded-lg border border-border/60">
              <span className="text-scientific-muted block text-[10px]">CORE EMPIRICAL FOCUS</span>
              <span className="text-accent-cyan font-semibold">AI Safety & Alignment</span>
            </div>
            <div className="p-3 bg-background-surface/50 rounded-lg border border-border/60">
              <span className="text-scientific-muted block text-[10px]">FOUNDATION BACKBONE</span>
              <span className="text-accent-violet font-semibold">Qwen3-8B (4-bit QLoRA)</span>
            </div>
          </div>
        </div>
      </section>

      {/* RESEARCH PHILOSOPHY & CENTRAL QUESTION */}
      <section className="py-20 md:py-28 border-t border-border/80 bg-background-deep/40 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <Badge variant="cyan" size="sm">
                RESEARCH PHILOSOPHY
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-display">
                Investigating Evaluators Under Optimization Pressure
              </h2>
              <p className="text-base text-scientific-slate leading-relaxed">
                Stellar ASION is an independent empirical research initiative investigating AI safety and alignment. Increasingly capable language models are guided, steered, and evaluated by learned reward models and automated proxies.
              </p>
              <p className="text-base text-scientific-slate leading-relaxed">
                Our scientific agenda focuses on understanding the failure modes of learned objectives—including specification gaming, reward hacking, Goodhart divergence, and the limits of automated evaluation.
              </p>
              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-sm font-mono font-semibold text-accent-blue hover:text-sky-300"
                >
                  <span>About Stellar ASION's mission & principles</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Central Question Feature Card */}
            <div className="lg:col-span-7 bg-gradient-to-br from-background-surface via-background-card to-background-surface border border-accent-blue/30 rounded-2xl p-8 md:p-10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent-blue/10 rounded-full blur-3xl pointer-events-none" />

              <span className="text-xs font-mono font-semibold text-accent-cyan uppercase tracking-widest block mb-4">
                THE CENTRAL RESEARCH QUESTION
              </span>

              <blockquote className="text-2xl sm:text-3xl font-serif italic text-white leading-snug mb-8 border-l-2 border-accent-blue pl-6">
                "{siteConfig.centralQuestion}"
              </blockquote>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-border/80 text-xs font-mono">
                <div>
                  <span className="text-scientific-muted block">INVESTIGATION AXIS 1</span>
                  <span className="text-white font-medium">Reward Modeling</span>
                </div>
                <div>
                  <span className="text-scientific-muted block">INVESTIGATION AXIS 2</span>
                  <span className="text-white font-medium">Evaluator Reliability</span>
                </div>
                <div>
                  <span className="text-scientific-muted block">INVESTIGATION AXIS 3</span>
                  <span className="text-white font-medium">Reward Hacking Dynamics</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE RESEARCH DEMONSTRATION WIDGET */}
      <section className="py-20 border-t border-border/80 bg-background-surface/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="blue" size="sm">
              CONCEPTUAL VISUALIZATION
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mt-3 mb-4 font-display">
              Visualizing Reward–Quality Divergence
            </h2>
            <p className="text-sm sm:text-base text-scientific-slate">
              A conceptual illustration of Goodhart's Law in AI alignment: how proxy reward scores can continue rising while underlying task quality decouples.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <RewardQualityDivergenceChart />
          </div>
        </div>
      </section>

      {/* RESEARCH DIRECTIONS */}
      <section className="py-20 md:py-28 border-t border-border/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <Badge variant="blue" size="sm">
                RESEARCH INTERESTS
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mt-3 font-display">
                Laboratory Research Directions
              </h2>
              <p className="text-base text-scientific-slate mt-2 max-w-2xl">
                The core questions and technical agendas guiding Stellar ASION's empirical AI safety program.
              </p>
            </div>

            <Link
              to="/research"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-accent-blue hover:text-sky-300"
            >
              <span>Explore All Directions</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchDirections.map((direction) => (
              <ResearchCard key={direction.id} direction={direction} />
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDING PROJECT SPOTLIGHT: ARM */}
      <section className="py-20 md:py-28 border-t border-border/80 bg-background-deep/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <Badge variant="violet" size="sm">
                FOUNDING RESEARCH INITIATIVE
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mt-3 font-display">
                Stellar ASION's Founding Research Project
              </h2>
              <p className="text-base text-scientific-slate mt-2 max-w-2xl">
                Stellar ASION's research journey begins with the Associative Reward Model (ARM), investigating multi-dimensional preference supervision on an open Qwen3-8B backbone.
              </p>
            </div>

            <Link
              to="/projects#arm"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-accent-blue hover:text-sky-300"
            >
              <span>Project Specifications & Benchmarks</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="max-w-4xl mx-auto">
            <ProjectCard project={foundingProject} />
          </div>
        </div>
      </section>

      {/* RESEARCH OUTPUTS: PUBLICATIONS & OPEN MODEL SHOWCASE */}
      <section className="py-20 md:py-28 border-t border-border/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <Badge variant="violet" size="sm">
              RESEARCH OUTPUTS
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mt-3 font-display">
              Publications in Preparation & Open Research
            </h2>
            <p className="text-base text-scientific-slate mt-2 max-w-2xl">
              As an independent research initiative, Stellar ASION's publication portfolio is actively established, starting with the peer-reviewed AIAS 2026 workshop paper and the forthcoming ARM research manuscript.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Founding Manuscript in Preparation */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase tracking-wider text-accent-blue font-semibold">
                  Founding Research Manuscript
                </span>
                <Link
                  to="/publications"
                  className="text-xs font-mono text-scientific-slate hover:text-white flex items-center gap-1"
                >
                  <span>Publications portfolio</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
              <PublicationCard publication={foundingPublication} />
            </div>

            {/* Featured Model */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase tracking-wider text-accent-violet font-semibold">
                  Founding Open-Source Model
                </span>
                <Link
                  to="/models"
                  className="text-xs font-mono text-scientific-slate hover:text-white flex items-center gap-1"
                >
                  <span>Model details</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
              <div className="bg-background-surface/90 border border-border rounded-2xl p-6 md:p-8 backdrop-blur-md">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <Badge variant="violet" size="sm">
                    In Progress / Release Planned
                  </Badge>
                  <span className="text-xs font-mono text-scientific-muted">
                    Backbone: {featuredModel.backbone}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white font-display mb-1">
                  {featuredModel.name}
                </h3>
                <p className="text-xs font-mono text-accent-cyan mb-4">
                  {featuredModel.codename} • 6-Dimensional Preference Supervision
                </p>

                <p className="text-sm text-scientific-slate mb-6 leading-relaxed">
                  {featuredModel.overview}
                </p>

                <div className="grid grid-cols-2 gap-2 text-xs font-mono mb-6">
                  <div className="bg-background-deep p-2.5 rounded border border-border">
                    <span className="text-scientific-muted block text-[10px]">ALLENAI REWARDBENCH V1</span>
                    <span className="text-accent-blue font-bold text-sm">89.88%</span>
                  </div>
                  <div className="bg-background-deep p-2.5 rounded border border-border">
                    <span className="text-scientific-muted block text-[10px]">RM-BENCH HARD STYLE-TRAP</span>
                    <span className="text-accent-violet font-bold text-sm">67.09%</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-border">
                  <Link
                    to="/models"
                    className="text-xs font-mono font-semibold text-accent-blue hover:text-sky-300"
                  >
                    View 6 Supervision Dimensions →
                  </Link>
                  <a
                    href={featuredModel.access.huggingFaceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg text-xs font-mono font-bold bg-accent-blue text-background-deep hover:bg-sky-300 transition-colors"
                  >
                    🤗 View Model on Hugging Face
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL COLLABORATION CTA */}
      <section className="py-20 md:py-28 border-t border-border/80 bg-gradient-to-b from-background-deep to-background relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Badge variant="blue" size="md">
            RESEARCH COLLABORATION
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mt-4 mb-6 font-display">
            Engage with Stellar ASION Research
          </h2>
          <p className="text-base sm:text-lg text-scientific-slate max-w-2xl mx-auto mb-10 leading-relaxed">
            We welcome scientific discussion, independent empirical evaluation, and collaboration with researchers investigating reward modeling, alignment, and evaluator reliability.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-mono text-sm font-bold bg-accent-blue text-background-deep hover:bg-sky-300 transition-colors shadow-lg shadow-accent-blue/20"
            >
              Contact Laboratory
            </Link>
            <a
              href={siteConfig.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-mono text-sm font-semibold bg-background-elevated hover:bg-slate-800 text-white border border-border hover:border-slate-600 transition-colors"
            >
              Explore GitHub Repository
            </a>
          </div>

          <div className="mt-8 text-xs font-mono text-scientific-muted">
            Direct correspondence:{' '}
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="text-accent-blue hover:underline"
            >
              {siteConfig.contactEmail}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
