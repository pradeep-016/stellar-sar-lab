import React, { useState } from 'react';
import { Badge } from '../common/Badge';
import { Layers, ShieldCheck, CheckSquare, Sparkles, AlertCircle, ArrowDown } from 'lucide-react';

interface DimensionDetail {
  id: string;
  name: string;
  shortName: string;
  focus: string;
  formula: string;
  mitigates: string;
  description: string;
}

export const ArmArchitectureDiagram: React.FC = () => {
  const [selectedDim, setSelectedDim] = useState<string>('reasoning');

  const dimensions: DimensionDetail[] = [
    {
      id: 'instruction',
      name: 'Instruction Adherence',
      shortName: 'Adherence',
      focus: 'Constraint satisfaction and explicit formatting conformance',
      formula: 'L_{inst} = -\\mathbb{E}[\\log \\sigma(w_{inst} \\cdot (r_{inst}^w - r_{inst}^l))]',
      mitigates: 'Prevents omission of negative constraints or formatting directives under generation pressure.',
      description: 'Supervises whether the model follows complex, negative, and strict formatting instructions without shortcuts.',
    },
    {
      id: 'relevance',
      name: 'Relevance',
      shortName: 'Relevance',
      focus: 'Topical pertinence and conciseness to user intent',
      formula: 'L_{rel} = -\\mathbb{E}[\\log \\sigma(w_{rel} \\cdot (r_{rel}^w - r_{rel}^l))]',
      mitigates: 'Penalizes off-topic verbosity, tangential rambling, and conversational drifting.',
      description: 'Ensures the candidate directly addresses the exact user request rather than answering an easier adjacent query.',
    },
    {
      id: 'completeness',
      name: 'Completeness',
      shortName: 'Completeness',
      focus: 'Exhaustive resolution of compound multi-part tasks',
      formula: 'L_{comp} = -\\mathbb{E}[\\log \\sigma(w_{comp} \\cdot (r_{comp}^w - r_{comp}^l))]',
      mitigates: 'Filters out superficially fluent answers that omit second- or third-order requirements.',
      description: 'Supervises whether all sub-questions and edge cases are systematically addressed.',
    },
    {
      id: 'reasoning',
      name: 'Reasoning Validity',
      shortName: 'Reasoning',
      focus: 'Deductive soundness and step-by-step logic verification',
      formula: 'L_{reas} = -\\mathbb{E}[\\log \\sigma(w_{reas} \\cdot (r_{reas}^w - r_{reas}^l))]',
      mitigates: 'Detects mathematically or logically fallacious steps masked by confident presentation.',
      description: 'Evaluates each intermediate chain-of-thought step to verify that premises logically entail conclusions.',
    },
    {
      id: 'correctness',
      name: 'Task Correctness',
      shortName: 'Correctness',
      focus: 'Verifiable factual truth, algorithmic code execution, and empirical precision',
      formula: 'L_{corr} = -\\mathbb{E}[\\log \\sigma(w_{corr} \\cdot (r_{corr}^w - r_{corr}^l))]',
      mitigates: 'Prevents plausible hallucination from receiving high reward over factually correct outputs.',
      description: 'Validates programmatic output against ground-truth unit tests and factual knowledge.',
    },
    {
      id: 'communication',
      name: 'Communication Quality',
      shortName: 'Quality',
      focus: 'Clarity, conciseness, structural formatting, and pedagogical coherence',
      formula: 'L_{comm} = -\\mathbb{E}[\\log \\sigma(w_{comm} \\cdot (r_{comm}^w - r_{comm}^l))]',
      mitigates: 'Separates genuine clarity from flowery pseudo-intellectual filler.',
      description: 'Ensures explanations are organized, accessible, and free of gratuitous ornamentation.',
    },
  ];

  const currentDetail = dimensions.find((d) => d.id === selectedDim) || dimensions[3];

  return (
    <div className="bg-background-surface/90 border border-border rounded-2xl p-6 md:p-8 backdrop-blur-md shadow-2xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-border">
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-1.5">
            <Badge variant="violet" size="sm">
              CONCEPTUAL ARCHITECTURE
            </Badge>
            <span className="text-xs text-scientific-muted font-mono">
              ARM Decomposed Reward Pipeline
            </span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-white font-display">
            Associative Reward Model (ARM) Architecture
          </h3>
          <p className="text-xs sm:text-sm text-scientific-slate mt-1 max-w-xl">
            ARM decouples preference learning into six structured evaluative dimensions over a Qwen3-8B foundation, training via pairwise preference loss and consistency regularization.
          </p>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs text-scientific-muted">
          <Layers className="w-4 h-4 text-accent-violet" />
          <span>QLoRA 4-bit NormalFloat</span>
        </div>
      </div>

      {/* Interactive Visual Flow */}
      <div className="mt-8 space-y-4">
        {/* Step 1: Input Level */}
        <div className="bg-background-card/90 border border-border rounded-xl p-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-accent-blue/10 border border-accent-blue/30 flex items-center justify-center text-accent-blue font-mono font-bold text-xs">
              IN
            </div>
            <div>
              <div className="text-xs font-mono text-scientific-muted uppercase">Input Layer</div>
              <div className="text-sm font-semibold text-white">
                Pairwise Context: Prompt x, Completion Pair (yw, yl)
              </div>
            </div>
          </div>
          <div className="text-xs font-mono text-scientific-slate bg-background-deep px-3 py-1.5 rounded border border-border">
            7,500 Preference Pairs Corpus
          </div>
        </div>

        <div className="flex justify-center">
          <ArrowDown className="w-5 h-5 text-scientific-dim" />
        </div>

        {/* Step 2: Backbone Model */}
        <div className="bg-gradient-to-r from-background-card via-background-elevated to-background-card border border-accent-violet/40 rounded-xl p-5 shadow-lg shadow-violet-500/5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-accent-violet/20 border border-accent-violet/50 flex items-center justify-center text-accent-violet font-bold">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-base font-bold text-white font-display">
                    Qwen3-8B Foundation Backbone
                  </span>
                  <Badge variant="violet" size="sm">
                    4-bit QLoRA
                  </Badge>
                </div>
                <div className="text-xs text-scientific-slate mt-0.5 font-mono">
                  Dual NVIDIA T4 GPUs • Parameter-Efficient Adaptation • NF4 Quantization
                </div>
              </div>
            </div>
            <div className="text-xs font-mono text-accent-cyan bg-cyan-500/10 px-3 py-1.5 rounded-lg border border-cyan-500/20">
              Shared Latent Representation h(x, y)
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <ArrowDown className="w-5 h-5 text-scientific-dim" />
        </div>

        {/* Step 3: Six Decomposed Heads */}
        <div className="bg-background-deep/80 border border-border rounded-xl p-5">
          <div className="flex items-center justify-between mb-4">
            <div className="text-xs font-mono text-scientific-muted uppercase tracking-wider flex items-center gap-2">
              <CheckSquare className="w-3.5 h-3.5 text-accent-cyan" />
              <span>Six Supervision Dimensions (Click to inspect)</span>
            </div>
            <span className="text-xs font-mono text-accent-blue">
              Selected: {currentDetail.name}
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
            {dimensions.map((dim) => {
              const isSelected = dim.id === selectedDim;
              return (
                <button
                  key={dim.id}
                  onClick={() => setSelectedDim(dim.id)}
                  className={`p-3 rounded-lg border text-left transition-all font-mono text-xs ${
                    isSelected
                      ? 'bg-accent-blue/15 border-accent-blue text-white shadow-md shadow-accent-blue/10 ring-1 ring-accent-blue/50'
                      : 'bg-background-card border-border/80 text-scientific-slate hover:border-slate-600 hover:text-white'
                  }`}
                >
                  <div className="text-[10px] text-scientific-muted mb-1">DIMENSION</div>
                  <div className="font-semibold text-xs leading-snug">{dim.shortName}</div>
                </button>
              );
            })}
          </div>

          {/* Active Dimension Details Box */}
          <div className="mt-4 p-4 rounded-xl bg-background-elevated/80 border border-accent-blue/30 transition-all">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
              <h4 className="text-sm font-bold text-white flex items-center gap-2 font-display">
                <ShieldCheck className="w-4 h-4 text-accent-cyan" />
                <span>{currentDetail.name}</span>
              </h4>
              <span className="text-xs font-mono text-scientific-muted">
                Focus: {currentDetail.focus}
              </span>
            </div>

            <p className="text-xs text-scientific-slate leading-relaxed mb-3">
              {currentDetail.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono pt-2 border-t border-border/60">
              <div className="bg-background-deep p-2.5 rounded border border-border">
                <span className="text-scientific-muted block text-[10px]">PREVENTS VULNERABILITY:</span>
                <span className="text-amber-300/90">{currentDetail.mitigates}</span>
              </div>
              <div className="bg-background-deep p-2.5 rounded border border-border">
                <span className="text-scientific-muted block text-[10px]">PREFERENCE OBJECTIVE:</span>
                <code className="text-accent-cyan text-[11px]">{currentDetail.formula}</code>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <ArrowDown className="w-5 h-5 text-scientific-dim" />
        </div>

        {/* Step 4: Consistency & Output */}
        <div className="bg-background-card/90 border border-border rounded-xl p-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-mono font-bold text-xs">
              OUT
            </div>
            <div>
              <div className="text-xs font-mono text-scientific-muted uppercase">Output Layer</div>
              <div className="text-sm font-semibold text-white">
                Multi-Dimensional Vector r(x, y) ∈ ℝ⁶ + Consistency Loss Regularization
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Badge variant="emerald" size="sm">
              Merged Standalone Checkpoint
            </Badge>
          </div>
        </div>
      </div>

      {/* Disclaimers & Integrity */}
      <div className="mt-6 flex items-start gap-2.5 text-xs text-scientific-muted border-t border-border pt-4">
        <AlertCircle className="w-4 h-4 text-scientific-dim flex-shrink-0 mt-0.5" />
        <p>
          <strong>Methodological note:</strong> Architectural breakdown distinguishes the conceptual multi-dimensional formulation from verified implementation hyperparameters. Weights are released as merged standalone checkpoints upon publication.
        </p>
      </div>
    </div>
  );
};
