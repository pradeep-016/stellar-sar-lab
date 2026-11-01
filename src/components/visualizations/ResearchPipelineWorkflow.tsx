import React, { useState } from 'react';
import { Badge } from '../common/Badge';
import {
  HelpCircle,
  FlaskConical,
  Cpu,
  BarChart2,
  Brain,
  Share2,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';

interface Stage {
  id: number;
  title: string;
  shortName: string;
  icon: React.ReactNode;
  summary: string;
  practices: string[];
}

export const ResearchPipelineWorkflow: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(1);

  const stages: Stage[] = [
    {
      id: 1,
      title: 'Formulate Empirical Research Question',
      shortName: '1. Question',
      icon: <HelpCircle className="w-5 h-5 text-accent-blue" />,
      summary:
        'Identify specific, falsifiable questions regarding the reliability of learned objectives, evaluators, and optimization dynamics.',
      practices: [
        'Isolate explicit failure modes (e.g., reward–quality divergence vs reward hacking).',
        'Frame questions with verifiable task-level ground-truth benchmarks.',
        'Avoid speculative abstractions in favor of measurable phenomena.',
      ],
    },
    {
      id: 2,
      title: 'Rigorous Experimental Design',
      shortName: '2. Design',
      icon: <FlaskConical className="w-5 h-5 text-accent-cyan" />,
      summary:
        'Construct controlled experimental setups with isolated independent variables, generator families, and verifier types.',
      practices: [
        'Set selection budgets systematically across powers of two (N ∈ {1..256}).',
        'Standardize prompt templates, temperatures, and sampling hyperparameters.',
        'Establish double-blind evaluation protocols where applicable.',
      ],
    },
    {
      id: 3,
      title: 'Controlled Model Evaluation',
      shortName: '3. Evaluation',
      icon: <Cpu className="w-5 h-5 text-accent-violet" />,
      summary:
        'Execute candidate generation and automated scoring across multiple open-source backbones and process reward verifiers.',
      practices: [
        'Run verifiable ground-truth task scoring (e.g., GSM8K math correctness, HumanEval unit tests).',
        'Log all intermediate candidate scores, tokens, and verification traces.',
        'Preserve complete candidate pool distributions for post-hoc analysis.',
      ],
    },
    {
      id: 4,
      title: 'Statistical & Significance Analysis',
      shortName: '4. Statistics',
      icon: <BarChart2 className="w-5 h-5 text-emerald-400" />,
      summary:
        'Apply paired statistical comparisons and rigorous multiple-testing corrections across selection comparisons.',
      practices: [
        'Apply Holm-Bonferroni or FDR corrections to prevent spurious statistical claims.',
        'Test for significant shifts between low-budget (N=8) and high-budget (N=256) regimes.',
        'Explicitly distinguish statistically meaningful shifts from sampling noise.',
      ],
    },
    {
      id: 5,
      title: 'Interpretation & Boundary Analysis',
      shortName: '5. Interpretation',
      icon: <Brain className="w-5 h-5 text-amber-400" />,
      summary:
        'Derive nuanced scientific conclusions while strictly detailing boundary conditions, limitations, and scope.',
      practices: [
        'Never conflate correlation with universal causal mechanisms.',
        'Document generator-evaluator specific coupling effects.',
        'Explicitly state where the findings do not generalize.',
      ],
    },
    {
      id: 6,
      title: 'Reproducible Research Output',
      shortName: '6. Release',
      icon: <Share2 className="w-5 h-5 text-sky-400" />,
      summary:
        'Publish open-source code repositories, standalone merged model checkpoints, evaluation datasets, and academic papers.',
      practices: [
        'Release reproducible evaluation scripts on GitHub.',
        'Publish full standalone model checkpoints on Hugging Face.',
        'Present findings at peer-reviewed academic workshops and conferences.',
      ],
    },
  ];

  const current = stages.find((s) => s.id === activeStage) || stages[0];

  return (
    <div className="bg-background-surface/90 border border-border rounded-2xl p-6 md:p-8 backdrop-blur-md shadow-2xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-border">
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-1.5">
            <Badge variant="blue" size="sm">
              METHODOLOGICAL FRAMEWORK
            </Badge>
            <span className="text-xs text-scientific-muted font-mono">
              Scientific Pipeline
            </span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-white font-display">
            The StellarLab Empirical Research Approach
          </h3>
          <p className="text-xs sm:text-sm text-scientific-slate mt-1 max-w-xl">
            A visual workflow from hypothesis formulation to reproducible open-source release.
          </p>
        </div>

        <div className="text-xs font-mono text-accent-blue bg-accent-blue/10 px-3 py-1.5 rounded-lg border border-accent-blue/20">
          Stage {current.id} of {stages.length}
        </div>
      </div>

      {/* Stage Stepper Navigation */}
      <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
        {stages.map((stage) => {
          const isActive = stage.id === activeStage;
          return (
            <button
              key={stage.id}
              onClick={() => setActiveStage(stage.id)}
              className={`p-3 rounded-xl border text-left transition-all ${
                isActive
                  ? 'bg-accent-blue/15 border-accent-blue shadow-lg shadow-accent-blue/5'
                  : 'bg-background-card/70 border-border/70 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="p-1 rounded bg-background-deep border border-border/50">
                  {stage.icon}
                </span>
                <span className="font-mono text-xs font-bold text-scientific-muted">
                  0{stage.id}
                </span>
              </div>
              <div className="font-semibold text-xs text-white leading-tight">
                {stage.shortName}
              </div>
            </button>
          );
        })}
      </div>

      {/* Detail panel */}
      <div className="mt-6 p-6 rounded-xl bg-background-card/90 border border-border">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 rounded-lg bg-background-deep border border-border">
            {current.icon}
          </div>
          <div>
            <span className="text-xs font-mono text-accent-cyan uppercase tracking-wider">
              Stage 0{current.id} Focus
            </span>
            <h4 className="text-lg font-bold text-white font-display">
              {current.title}
            </h4>
          </div>
        </div>

        <p className="text-sm text-scientific-slate leading-relaxed mb-6">
          {current.summary}
        </p>

        <div className="space-y-2.5">
          <div className="text-xs font-mono text-scientific-muted uppercase tracking-wider">
            Methodological Standards & Protocols:
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {current.practices.map((practice, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-lg bg-background-deep/80 border border-border text-xs text-scientific-slate flex items-start gap-2.5"
              >
                <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">{practice}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
