import React, { useState } from 'react';
import { siteConfig } from '../config/site';
import { Badge } from '../components/common/Badge';
import { Card } from '../components/common/Card';
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Sparkles,
  Award,
  Layers,
  Terminal,
  LineChart,
  Copy,
  Check,
  GraduationCap,
  Cpu,
  Compass,
  FileText,
  Search,
  ShieldCheck,
  AlertTriangle,
} from 'lucide-react';

export const Researcher: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(siteConfig.contactEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const technicalSkills = [
    {
      category: 'Reward Modeling & Alignment',
      icon: <Layers className="w-4 h-4 text-accent-blue" />,
      skills: [
        'Multi-Objective Reward Modeling',
        'Pairwise Preference Optimization (Bradley-Terry)',
        'Process & Outcome RMs (PRMs/ORMs)',
        'Best-of-N Sampling & Search Auditing',
        'Causal Attention Masking',
        'Inductive Bias Design',
      ],
    },
    {
      category: 'Evaluation & Statistical Rigor',
      icon: <LineChart className="w-4 h-4 text-accent-cyan" />,
      skills: [
        'Benchmark Auditing (RewardBench, RM-Bench)',
        'Paired Bootstrap Hypothesis Testing',
        'Multiple-Testing Correction (Holm-Bonferroni)',
        'Error Extraction & Failure Mode Analysis',
        'Goodhart Divergence & Metric Saturation',
      ],
    },
    {
      category: 'Systems & Compute',
      icon: <Terminal className="w-4 h-4 text-emerald-400" />,
      skills: [
        'Python, PyTorch',
        'Hugging Face (transformers, peft)',
        'vLLM High-Throughput Inference',
        'llama.cpp Quantization (GGUF)',
        'Linux Environment & Git',
        'GPU-Constrained Experimentation (dual NVIDIA T4)',
      ],
    },
  ];

  return (
    <div className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Profile */}
        <div className="max-w-4xl mb-12">
          <Badge variant="blue" size="sm">
            INDEPENDENT AI RESEARCHER
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mt-3 mb-3 font-display">
            Pradeep L
          </h1>
          <p className="text-base sm:text-lg font-mono text-accent-cyan mb-3">
            Independent AI Alignment Researcher
          </p>
          <p className="text-base sm:text-lg text-scientific-slate leading-relaxed mb-8">
            Investigating reward hacking, evaluator reliability, and Goodhart divergence under optimization pressure in frontier language models.
          </p>

          {/* Quick Links Row */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://github.com/pradeep-016"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-background-surface/80 border border-border hover:border-accent-blue text-sm font-medium text-white transition-all duration-200 hover:shadow-lg hover:shadow-accent-blue/10"
            >
              <Github className="w-4 h-4 text-accent-blue" />
              <span>GitHub</span>
              <ExternalLink className="w-3 h-3 text-scientific-muted" />
            </a>

            <a
              href="https://huggingface.co/Pradeep016"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-background-surface/80 border border-border hover:border-amber-400 text-sm font-medium text-white transition-all duration-200 hover:shadow-lg hover:shadow-amber-400/10"
            >
              <span className="text-base leading-none">🤗</span>
              <span>Hugging Face</span>
              <ExternalLink className="w-3 h-3 text-scientific-muted" />
            </a>

            <a
              href="https://linkedin.com/in/pradeep016/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-background-surface/80 border border-border hover:border-sky-400 text-sm font-medium text-white transition-all duration-200 hover:shadow-lg hover:shadow-sky-400/10"
            >
              <Linkedin className="w-4 h-4 text-sky-400" />
              <span>LinkedIn</span>
              <ExternalLink className="w-3 h-3 text-scientific-muted" />
            </a>

            {/* Email link with anti-scraping display and quick copy */}
            <div className="inline-flex items-center rounded-xl bg-accent-blue/10 border border-accent-blue/30 overflow-hidden">
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-mono text-accent-blue hover:text-white transition-colors"
                title={`Send email to ${siteConfig.contactEmail}`}
              >
                <Mail className="w-4 h-4" />
                <span>{siteConfig.contactEmailDisplay}</span>
              </a>
              <button
                onClick={copyEmail}
                className="px-3 py-2 border-l border-accent-blue/20 hover:bg-accent-blue/20 text-accent-blue hover:text-white transition-colors"
                title="Copy email to clipboard"
              >
                {copiedEmail ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Section 1: About Me & Bio */}
        <div className="mb-16">
          <div className="bg-background-surface/80 border border-border rounded-2xl p-8 md:p-10 backdrop-blur-md">
            <span className="text-xs font-mono text-accent-cyan uppercase tracking-wider block mb-3">
              ABOUT ME
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 font-display">
              Background & Overview
            </h2>
            <div className="space-y-4 text-scientific-slate text-sm sm:text-base leading-relaxed">
              <p>
                I am an independent AI researcher working on empirical AI safety, alignment, and evaluator reliability. My work focuses on investigating how learned reward models, verifiers, and automated objectives fail when subjected to optimization pressure and test-time search.
              </p>
              <p>
                To address vulnerability to stylistic heuristics and length bias in scalar reward models, I developed <strong className="text-white">STELLAR-ARM</strong>—a multi-dimensional associative reward architecture that supervises six decomposed rubric dimensions using directional causal attention masking and Softmin-based monotonicity constraints.
              </p>
              <p>
                My methodology emphasizes controlled empirical evaluation, paired bootstrap hypothesis testing with multiple-testing corrections, and reproducible evaluation pipelines designed to run efficiently on compute-constrained hardware (dual NVIDIA T4 GPUs).
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: Research Interests */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-mono uppercase tracking-wider text-accent-cyan">
              CORE INVESTIGATIONS
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 font-display">
            Research Interests
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Interest 1 */}
            <div className="bg-background-surface/80 border border-border/80 hover:border-accent-blue/50 rounded-2xl p-6 sm:p-7 backdrop-blur-md transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-background-elevated border border-border text-accent-blue group-hover:border-accent-blue/40 transition-colors">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-display group-hover:text-accent-blue transition-colors">
                    Reward Modeling & Preference Learning
                  </h3>
                  <span className="text-xs font-mono text-scientific-muted">
                    Multi-Dimensional Representation & Inductive Biases
                  </span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-scientific-slate leading-relaxed mb-4">
                Designing evaluator architectures that prevent policies from exploiting scalar reward bottlenecks. Developing multi-attribute vector supervision, causal attention masking between rubric criteria, and Softmin monotonicity constraints to inoculate models against verbosity, sycophancy, and style shortcuts.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border/60">
                {['Multi-Objective Preference Loss', 'Causal Attention Masking', 'Softmin Readouts', 'Anti-Verbosity Curation'].map((tag) => (
                  <span key={tag} className="px-2.5 py-1 rounded-md bg-background-deep border border-border/80 text-[11px] font-mono text-scientific-slate">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Interest 2 */}
            <div className="bg-background-surface/80 border border-border/80 hover:border-accent-cyan/50 rounded-2xl p-6 sm:p-7 backdrop-blur-md transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-background-elevated border border-border text-accent-cyan group-hover:border-accent-cyan/40 transition-colors">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-display group-hover:text-accent-cyan transition-colors">
                    Evaluator Reliability & Search Dynamics
                  </h3>
                  <span className="text-xs font-mono text-scientific-muted">
                    Inference-Time Scaling & Verifier Degradation
                  </span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-scientific-slate leading-relaxed mb-4">
                Characterizing the breakdown points of automated verifiers and process reward models (PRMs) under deep test-time search (Best-of-N and tree search). Analyzing how subtle evaluator scoring errors are exponentially amplified as search candidate budgets scale.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border/60">
                {['Best-of-N Search Audits', 'Process Reward Models (PRMs)', 'Error Propagation', 'Candidate Scaling (N=1..256)'].map((tag) => (
                  <span key={tag} className="px-2.5 py-1 rounded-md bg-background-deep border border-border/80 text-[11px] font-mono text-scientific-slate">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Interest 3 */}
            <div className="bg-background-surface/80 border border-border/80 hover:border-amber-400/50 rounded-2xl p-6 sm:p-7 backdrop-blur-md transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-background-elevated border border-border text-amber-400 group-hover:border-amber-400/40 transition-colors">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-display group-hover:text-amber-400 transition-colors">
                    Goodhart Divergence & Objective Gaming
                  </h3>
                  <span className="text-xs font-mono text-scientific-muted">
                    Specification Gaming & Phase Transitions
                  </span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-scientific-slate leading-relaxed mb-4">
                Measuring and formulating empirical phase transitions where proxy reward maximization decouples from true intent and ground-truth task correctness. Establishing early-warning statistical telemetry to detect proxy overoptimization before policy degradation occurs.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border/60">
                {['Goodhart Phase Transitions', 'Metric Saturation', 'Verifiable Ground-Truth Audits', 'Specification Gaming'].map((tag) => (
                  <span key={tag} className="px-2.5 py-1 rounded-md bg-background-deep border border-border/80 text-[11px] font-mono text-scientific-slate">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Interest 4 */}
            <div className="bg-background-surface/80 border border-border/80 hover:border-accent-violet/50 rounded-2xl p-6 sm:p-7 backdrop-blur-md transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-background-elevated border border-border text-accent-violet group-hover:border-accent-violet/40 transition-colors">
                  <LineChart className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-display group-hover:text-accent-violet transition-colors">
                    Empirical Rigor & Constrained-Compute Evaluation
                  </h3>
                  <span className="text-xs font-mono text-scientific-muted">
                    Statistical Testing & Clean-Room Verification
                  </span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-scientific-slate leading-relaxed mb-4">
                Enforcing rigorous statistical protocols for preference evaluations, including paired bootstrap hypothesis testing with Holm-Bonferroni corrections and cryptographic train-test benchmark leakage audits. Democratizing safety research on accessible dual-GPU hardware.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border/60">
                {['Paired Bootstrap Testing', 'Holm-Bonferroni Correction', 'Zero Benchmark Contamination', '4-Bit NF4 QLoRA Efficiency'].map((tag) => (
                  <span key={tag} className="px-2.5 py-1 rounded-md bg-background-deep border border-border/80 text-[11px] font-mono text-scientific-slate">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Research Projects */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-mono uppercase tracking-wider text-accent-blue">
              EMPIRICAL RESEARCH PROJECTS
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 font-display">
            Research Projects & Artifacts
          </h2>

          <div className="space-y-8">
            {/* Project 1: Associative Reward Model (ARM) – STELLAR */}
            <Card className="p-7 sm:p-9 border-accent-blue/30 hover:border-accent-blue/60 transition-all duration-300">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <div className="flex items-center gap-2">
                  <Badge variant="blue" size="sm" icon={<Sparkles className="w-3.5 h-3.5" />}>
                    FLAGSHIP REWARD MODEL
                  </Badge>
                  <span className="text-xs font-mono text-accent-cyan bg-accent-cyan/10 px-2.5 py-0.5 rounded border border-accent-cyan/20">
                    STELLAR-ARM
                  </span>
                </div>
                <a
                  href="https://huggingface.co/Stellar-lab/Stellar-Qwen3-8B-ARM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-accent-blue hover:bg-sky-400 text-background-deep text-xs font-mono font-semibold transition-all duration-200"
                >
                  <span>🤗 Hugging Face</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 font-display">
                Associative Reward Model (ARM) – STELLAR
              </h3>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-2 mb-5">
                {[
                  'Qwen3-8B',
                  'LLaMA-3-8B',
                  'PyTorch',
                  'Transformers',
                  'Causal Attention Masking',
                  'Softmin Readout',
                  'QLoRA',
                  'Dual NVIDIA T4',
                ].map((item) => (
                  <span
                    key={item}
                    className="text-xs font-mono px-2.5 py-1 rounded bg-background-deep border border-border text-scientific-slate"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Resume Bullets */}
              <ul className="space-y-3 text-sm text-scientific-slate leading-relaxed mb-6 list-disc list-inside">
                <li>
                  <strong className="text-white">Multi-Dimensional Reward Architecture:</strong> Designed an associative reward framework supervising six rubric dimensions (Instruction Adherence, Relevance, Completeness, Reasoning Validity, Task Correctness, and Communication Quality), using directional causal DAG query routing, softmin monotonicity gating, and softplus-activated gatekeeper veto penalties.
                </li>
                <li>
                  <strong className="text-white">Parameter-Efficient Adaptation & Model Release:</strong> Adapted an open Qwen3-8B foundation with 4-bit NF4 QLoRA and standalone FP16 weights on dual NVIDIA T4 GPUs over 7,500 curated preference pairs across 7 alignment regimes, with zero train-test benchmark overlap verified by cryptographic hash auditing.
                </li>
                <li>
                  <strong className="text-white">Comprehensive Benchmark Evaluations:</strong> Evaluated using official open-source harnesses under deterministic greedy decoding across four standard alignment and reasoning benchmarks:
                  <ul className="mt-2 ml-5 space-y-1.5 list-none text-xs text-scientific-slate">
                    <li>• <span className="text-white font-medium">RewardBench 1:</span> <span className="text-accent-blue font-mono font-bold">89.08%</span> Subset Macro-Average (<span className="font-mono">85.52%</span> 50/50 Math+Code weighted; Chat: 92.36%, Chat Hard: 83.20%, Safety: 90.21%, Reasoning: 90.54%).</li>
                    <li>• <span className="text-white font-medium">RewardBench 2:</span> <span className="text-accent-cyan font-mono font-bold">74.20%</span> Overall Macro-Average across 1,865 prompts and 8,977 completions across 6 domains (Factuality: 66.95%, Math: 65.03%, Safety: 93.33%, Focus: 96.97%).</li>
                    <li>• <span className="text-white font-medium">RM-Bench:</span> <span className="text-accent-violet font-mono font-bold">74.88%</span> Overall Average across 1,327 prompts in a 3×3 style matrix (Easy: 82.69%, Normal: 76.44%, Hard Style-Trap: 65.51%).</li>
                    <li>• <span className="text-white font-medium">JudgeBench:</span> <span className="text-emerald-400 font-mono font-bold">62.50%</span> Overall Micro-Average across 620 pairs (GPT-4o split: 63.71%, Claude-3.5 split: 60.93%; Math: 74.11%, Coding: 65.07%).</li>
                  </ul>
                </li>
              </ul>

              {/* Benchmark Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 bg-background-deep/60 p-4 rounded-xl border border-border">
                <div className="p-2.5 rounded-lg bg-background-card/50 border border-border/50">
                  <div className="flex items-baseline justify-between mb-1">
                    <span className="text-xs font-medium text-white">RewardBench 1</span>
                    <span className="text-base font-bold font-mono text-accent-blue">89.08%</span>
                  </div>
                  <p className="text-[10px] text-scientific-muted leading-relaxed">
                    Macro-Avg across 2,985 pairs (Chat 92.4%, Safety 90.2%, Reasoning 90.5%).
                  </p>
                </div>
                <div className="p-2.5 rounded-lg bg-background-card/50 border border-border/50">
                  <div className="flex items-baseline justify-between mb-1">
                    <span className="text-xs font-medium text-white">RewardBench 2</span>
                    <span className="text-base font-bold font-mono text-accent-cyan">74.20%</span>
                  </div>
                  <p className="text-[10px] text-scientific-muted leading-relaxed">
                    Macro-Avg across 6 domains (Safety 93.3%, Focus 97.0%, Ties 77.9%).
                  </p>
                </div>
                <div className="p-2.5 rounded-lg bg-background-card/50 border border-border/50">
                  <div className="flex items-baseline justify-between mb-1">
                    <span className="text-xs font-medium text-white">RM-Bench</span>
                    <span className="text-base font-bold font-mono text-accent-violet">74.88%</span>
                  </div>
                  <p className="text-[10px] text-scientific-muted leading-relaxed">
                    Overall Avg across 1,327 prompts (Easy 82.7%, Normal 76.4%, Hard 65.5%).
                  </p>
                </div>
                <div className="p-2.5 rounded-lg bg-background-card/50 border border-border/50">
                  <div className="flex items-baseline justify-between mb-1">
                    <span className="text-xs font-medium text-white">JudgeBench</span>
                    <span className="text-base font-bold font-mono text-emerald-400">62.50%</span>
                  </div>
                  <p className="text-[10px] text-scientific-muted leading-relaxed">
                    Micro-Avg across 620 pairs (Math 74.1%, Coding 65.1%, Reasoning 60.4%).
                  </p>
                </div>
              </div>
            </Card>

            {/* Project 2: Evaluator Reliability Under Test-Time Scaling */}
            <Card className="p-7 sm:p-9 border-border hover:border-accent-blue/50 transition-all duration-300">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <div className="flex items-center gap-2">
                  <Badge variant="blue" size="sm" icon={<Award className="w-3.5 h-3.5" />}>
                    ACCEPTED WORKSHOP PAPER
                  </Badge>
                  <span className="text-xs font-mono text-scientific-muted">
                    AIAS 2026 (held with LLA 2026)
                  </span>
                </div>
                <a
                  href="https://github.com/pradeep-016"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-background-elevated hover:bg-slate-800 border border-border text-xs font-mono text-white transition-all duration-200"
                >
                  <FileText className="w-3.5 h-3.5 text-accent-blue" />
                  <span>Replication Pipeline</span>
                  <ExternalLink className="w-3 h-3 text-scientific-muted" />
                </a>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 font-display">
                Evaluator Reliability Under Test-Time Scaling
              </h3>
              <p className="text-xs sm:text-sm font-mono text-accent-blue mb-4">
                AIAS 2026 Workshop on Lifelong Agents: Learning, Aligning, and Evolving (LLA)
              </p>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-2 mb-5">
                {[
                  'Python',
                  'PyTorch',
                  'vLLM',
                  'GSM8K',
                  'HumanEval',
                  'Paired Hypothesis Testing',
                  'Bootstrap Analysis',
                  'Holm-Bonferroni',
                ].map((item) => (
                  <span
                    key={item}
                    className="text-xs font-mono px-2.5 py-1 rounded bg-background-deep border border-border text-scientific-slate"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Resume Bullets */}
              <ul className="space-y-3 text-sm text-scientific-slate leading-relaxed mb-6 list-disc list-inside">
                <li>
                  <strong className="text-white">Controlled Candidate Pools:</strong> Constructed controlled evaluation pipelines on fixed candidate pools across 3 generator models to control for candidate-generation variation when analyzing evaluator selection behavior on GSM8K (exact-match) and HumanEval (functional execution).
                </li>
                <li>
                  <strong className="text-white">Observed Goodhart Divergence:</strong> Observed generator-dependent Goodhart divergence: on GSM8K, Llama-3.1-8B-Instruct accuracy under DeepSeek-PRM selection peaked at <span className="text-emerald-400 font-bold font-mono">80.4% at N = 8</span> and declined to <span className="text-rose-400 font-bold font-mono">72.2% at N = 256</span>, despite strictly increasing evaluator score margins.
                </li>
                <li>
                  <strong className="text-white">Statistical Verification:</strong> Applied paired bootstrap hypothesis tests and multiple-testing corrections (Holm-Bonferroni) to verify the statistical significance of evaluator score differences across selection budgets.
                </li>
                <li>
                  <strong className="text-white">Peer Recognition:</strong> Accepted as a workshop paper at the AIAS 2026 Workshop on Lifelong Agents: Learning, Aligning, and Evolving (LLA).
                </li>
              </ul>

              {/* Empirical Metric Box */}
              <div className="bg-background-deep/60 p-4 rounded-xl border border-border">
                <span className="text-[10px] font-mono uppercase tracking-wider text-accent-blue block mb-2">
                  EMPIRICAL SELECTION DIVERGENCE (GSM8K)
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center justify-between border-b sm:border-b-0 sm:border-r border-border/60 pb-2 sm:pb-0 sm:pr-4">
                    <span className="text-xs text-scientific-slate">Selection @ N = 8:</span>
                    <span className="text-base font-bold font-mono text-emerald-400">80.4% Accuracy</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-scientific-slate">Selection @ N = 256:</span>
                    <span className="text-base font-bold font-mono text-rose-400">72.2% Accuracy</span>
                  </div>
                </div>
                <p className="text-[11px] text-scientific-muted leading-relaxed mt-2 pt-2 border-t border-border/40">
                  Observed an 8.2% drop in verifiable accuracy while evaluator confidence expanded, demonstrating Goodhart decoupling.
                </p>
              </div>
            </Card>

            {/* Project 3: Proxy Overoptimization Under Selection Pressure */}
            <Card className="p-7 sm:p-9 border-border hover:border-accent-blue/50 transition-all duration-300">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <div className="flex items-center gap-2">
                  <Badge variant="cyan" size="sm" icon={<Search className="w-3.5 h-3.5" />}>
                    INDEPENDENT EMPIRICAL STUDY
                  </Badge>
                  <span className="text-xs font-mono text-scientific-muted">
                    Selection Pressure Dynamics
                  </span>
                </div>
                <a
                  href="https://github.com/pradeep-016"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-background-elevated hover:bg-slate-800 border border-border text-xs font-mono text-white transition-all duration-200"
                >
                  <Github className="w-3.5 h-3.5 text-accent-cyan" />
                  <span>Research Code</span>
                  <ExternalLink className="w-3 h-3 text-scientific-muted" />
                </a>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 font-display">
                Proxy Overoptimization Under Selection Pressure
              </h3>
              <p className="text-xs sm:text-sm font-mono text-accent-cyan mb-4">
                Empirical Analysis of Search Scaling and Metric Saturation
              </p>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-2 mb-5">
                {[
                  'Reward Modeling',
                  'Best-of-N',
                  'LLM-as-a-Judge',
                  'vLLM',
                  'HelpSteer',
                  'Search Scaling',
                  'Metric Saturation',
                ].map((item) => (
                  <span
                    key={item}
                    className="text-xs font-mono px-2.5 py-1 rounded bg-background-deep border border-border text-scientific-slate"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Resume Bullets */}
              <ul className="space-y-3 text-sm text-scientific-slate leading-relaxed mb-6 list-disc list-inside">
                <li>
                  <strong className="text-white">Proxy-Score Behavior Auditing:</strong> Analyzed proxy-score behavior under Best-of-N selection across 500 HelpSteer prompts, observing mean independent LLM-judge scores increase from <span className="font-mono text-white font-semibold">4.05 at N = 1</span> to <span className="font-mono text-emerald-400 font-semibold">4.49 at N = 256</span> across 495 valid evaluations.
                </li>
                <li>
                  <strong className="text-white">Decoupling Dynamics:</strong> Investigated proxy gaming dynamics and metric saturation under search scaling using open-weight models and API-based evaluators to examine where proxy scores decouple from intended objectives.
                </li>
                <li>
                  <strong className="text-white">Empirical Insights:</strong> Mapped trajectory boundaries where length biases and superficial style cues masquerade as genuine alignment progress under aggressive selection budgets.
                </li>
              </ul>

              {/* Empirical Metric Box */}
              <div className="bg-background-deep/60 p-4 rounded-xl border border-border flex items-center justify-between">
                <div>
                  <span className="text-xs font-medium text-white">Mean Independent LLM-Judge Score:</span>
                  <div className="text-xs text-scientific-muted mt-0.5">Across 495 valid HelpSteer evaluations</div>
                </div>
                <div className="text-right">
                  <span className="text-sm font-mono text-scientific-slate">4.05 (N=1)</span>
                  <span className="text-scientific-muted mx-2">→</span>
                  <span className="text-base font-bold font-mono text-accent-cyan">4.49 (N=256)</span>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Section 3: Technical Skills */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-mono uppercase tracking-wider text-accent-cyan">
              TECHNICAL COMPETENCIES
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 font-display">
            Technical Skills & Methodologies
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {technicalSkills.map((section) => (
              <div
                key={section.category}
                className="bg-background-surface/80 border border-border rounded-xl p-6 backdrop-blur-md flex flex-col justify-between hover:border-slate-600 transition-colors"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-background-deep border border-border flex items-center justify-center">
                      {section.icon}
                    </div>
                    <h3 className="text-sm font-semibold text-white font-display">
                      {section.category}
                    </h3>
                  </div>

                  <ul className="space-y-2 text-xs sm:text-sm text-scientific-slate">
                    {section.skills.map((skill) => (
                      <li key={skill} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-blue flex-shrink-0 mt-1.5" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 4: Education */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-mono uppercase tracking-wider text-scientific-muted">
              ACADEMIC BACKGROUND
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 font-display">
            Education
          </h2>

          <div className="bg-background-surface/80 border border-border rounded-2xl p-6 sm:p-8 backdrop-blur-md">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-background-deep border border-border flex items-center justify-center flex-shrink-0 mt-1 sm:mt-0">
                  <GraduationCap className="w-6 h-6 text-accent-blue" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white font-display">
                    Erode Sengunthar Engineering College
                  </h3>
                  <p className="text-sm text-scientific-slate mt-1">
                    Bachelor of Technology in Artificial Intelligence and Data Science
                  </p>
                  <p className="text-xs font-mono text-accent-cyan mt-1">
                    CGPA: 8.59 / 10
                  </p>
                </div>
              </div>

              <div className="sm:text-right flex-shrink-0">
                <span className="inline-block px-3 py-1 rounded-lg bg-background-deep border border-border text-xs font-mono text-scientific-muted">
                  Graduated May 2024
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 5: Research Collaboration Callout */}
        <div className="bg-gradient-to-br from-background-card via-background-surface to-background-card border border-accent-blue/30 rounded-2xl p-8 md:p-10 text-center max-w-3xl mx-auto">
          <span className="text-xs font-mono text-accent-blue uppercase tracking-wider block mb-2">
            ACADEMIC & RESEARCH CORRESPONDENCE
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-display">
            Research Collaborations
          </h2>
          <p className="text-sm text-scientific-slate leading-relaxed mb-6 max-w-xl mx-auto">
            Open to joint investigations, empirical reproducibility studies, and discussions regarding reward modeling, process supervision, and Goodhart divergence.
          </p>

          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
            <a
              href={`mailto:${siteConfig.contactEmail}?subject=${encodeURIComponent(
                'Research Collaboration Inquiry'
              )}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-accent-blue text-background-deep font-mono text-xs font-bold hover:bg-sky-300 transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>Initiate Collaboration Email</span>
            </a>

            <button
              onClick={copyEmail}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-background-deep hover:bg-slate-800 border border-border text-xs font-mono text-scientific-slate hover:text-white transition-colors"
              title="Copy direct email address"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400 font-semibold">Copied to Clipboard</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>{siteConfig.contactEmailDisplay}</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
