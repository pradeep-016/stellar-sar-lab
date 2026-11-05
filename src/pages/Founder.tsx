import React from 'react';
import { Badge } from '../components/common/Badge';
import { Card } from '../components/common/Card';
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Sparkles,
  ShieldAlert,
  Cpu,
  Layers,
  Award,
  FileText,
  Binary,
  Compass,
} from 'lucide-react';

export const Founder: React.FC = () => {
  const researchInterests = [
    {
      title: 'Reward Hacking & Specification Gaming',
      desc: 'Analyzing how policy optimization exploits loopholes, proxy shortcuts, and unaligned incentives in learned reward models.',
      icon: <ShieldAlert className="w-4 h-4 text-accent-blue" />,
    },
    {
      title: 'Evaluator Reliability & PRM Verification',
      desc: 'Investigating the calibration bounds, consistency, and failure modes of process reward verifiers and automated judges.',
      icon: <Binary className="w-4 h-4 text-accent-cyan" />,
    },
    {
      title: 'Goodhart Divergence Under Test-Time Scaling',
      desc: 'Mapping empirical phase boundaries where proxy reward expansion decouples from ground-truth correctness during Best-of-N search.',
      icon: <Compass className="w-4 h-4 text-accent-violet" />,
    },
    {
      title: 'Multi-Dimensional Preference Supervision',
      desc: 'Developing decomposed reward architectures that supervise explicit qualitative axes to prevent single-axis gaming.',
      icon: <Layers className="w-4 h-4 text-emerald-400" />,
    },
    {
      title: 'Compute-Efficient Alignment',
      desc: 'Formulating 4-bit NormalFloat QLoRA and Distributed Data Parallel routines to democratize frontier alignment on accessible hardware.',
      icon: <Cpu className="w-4 h-4 text-amber-400" />,
    },
  ];

  return (
    <div className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Profile */}
        <div className="max-w-3xl mb-12">
          <Badge variant="blue" size="sm">
            INDEPENDENT AI ALIGNMENT RESEARCHER
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mt-3 mb-4 font-display">
            Pradeep L
          </h1>
          <p className="text-lg sm:text-xl text-scientific-slate leading-relaxed mb-8">
            Independent AI Alignment Researcher investigating learned objectives, reward modeling, and evaluator reliability under inference-time optimization.
          </p>

          {/* Quick Links Row */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://github.com/pradeep-016/"
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

            <a
              href="mailto:pradeep02272002@gmail.com"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-accent-blue/10 border border-accent-blue/30 hover:bg-accent-blue hover:text-background-deep text-sm font-medium text-accent-blue transition-all duration-200"
            >
              <Mail className="w-4 h-4" />
              <span>pradeep02272002@gmail.com</span>
            </a>
          </div>
        </div>

        {/* Research Interests Section */}
        <div className="mb-20">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-xs font-mono uppercase tracking-wider text-accent-cyan">
              RESEARCH DOMAINS
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 font-display">
            Core Research Interests
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {researchInterests.map((interest) => (
              <div
                key={interest.title}
                className="bg-background-surface/70 border border-border hover:border-accent-blue/40 rounded-xl p-6 transition-all duration-200"
              >
                <div className="w-9 h-9 rounded-lg bg-background-deep border border-border flex items-center justify-center mb-4">
                  {interest.icon}
                </div>
                <h3 className="text-base font-semibold text-white mb-2 font-display">
                  {interest.title}
                </h3>
                <p className="text-xs sm:text-sm text-scientific-slate leading-relaxed">
                  {interest.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 1: Research Focus & Philosophy */}
        <div className="mb-20">
          <div className="bg-background-surface/80 border border-border rounded-2xl p-8 md:p-10 backdrop-blur-md">
            <span className="text-xs font-mono text-accent-cyan uppercase tracking-wider block mb-3">
              RESEARCH AGENDA
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 font-display">
              Research Focus & Philosophy
            </h2>
            <div className="space-y-5 text-scientific-slate text-sm sm:text-base leading-relaxed">
              <p>
                My research centers on the failure modes of learned objectives and automated evaluators in frontier language models. As modern post-training and inference-time search (Best-of-N, tree search, process verifiers) intensify, proxy reward models frequently become vulnerable to Goodhart divergence—where higher proxy rewards correlate with declining verifiable correctness. By isolating empirical phase boundaries and characterizing how models exploit reward shortcuts, I develop formal testing methodologies to evaluate the true reliability of reward signals before deployment.
              </p>
              <p>
                A core pillar of my methodology is resource-conscious empirical rigor. Rather than treating safety research as an exclusive privilege of hyper-scale compute clusters, I formulate architectures that leverage parameter-efficient fine-tuning (4-bit NF4 QLoRA, Distributed Data Parallelism) across accessible hardware like dual NVIDIA GPUs. Through multi-dimensional supervision and consistency regularization, my goal is to produce transparent, fully auditable open-weight artifacts that help the global AI safety community isolate genuine reasoning from superficial stylistic mimicry.
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: Core Artifacts */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono uppercase tracking-wider text-accent-blue">
              EMPIRICAL CONTRIBUTIONS
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 font-display">
            Core Artifacts & Publications
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Artifact 1: STELLAR-ARM */}
            <Card className="p-7 sm:p-8 flex flex-col justify-between border-accent-blue/30 hover:border-accent-blue/60 transition-all duration-300">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <Badge variant="blue" size="sm" icon={<Sparkles className="w-3.5 h-3.5" />}>
                    FLAGSHIP REWARD MODEL
                  </Badge>
                  <span className="text-xs font-mono text-accent-cyan bg-accent-cyan/10 px-2 py-0.5 rounded border border-accent-cyan/20">
                    Qwen3-8B Backbone
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2 font-display">
                  STELLAR-ARM (Associative Reward Model)
                </h3>
                <p className="text-xs sm:text-sm font-mono text-accent-cyan mb-4">
                  Multi-Dimensional Preference Supervision & Decomposed Reward Architecture
                </p>

                <p className="text-xs sm:text-sm text-scientific-slate leading-relaxed mb-6">
                  Developed an open-weight 8B reward model that decomposes preference judgments across six explicit supervision dimensions (instruction adherence, relevance, completeness, reasoning validity, task correctness, and communication quality) combined with consistency regularization to resist single-axis style traps.
                </p>

                {/* Benchmark Highlights */}
                <div className="space-y-3 mb-6 bg-background-deep/60 p-4 rounded-xl border border-border">
                  <div className="flex items-baseline justify-between border-b border-border/60 pb-2">
                    <span className="text-xs font-medium text-white">RM-Bench (Hard Style-Trap)</span>
                    <span className="text-base font-bold font-mono text-accent-cyan">67.09%</span>
                  </div>
                  <p className="text-[11px] text-scientific-muted leading-relaxed">
                    Outperformed Skywork-27B (54.00%), GPT-4o (52.80%), and ArmoRM-8B (46.80%) on adversarial stylistic deception.
                  </p>

                  <div className="flex items-baseline justify-between pt-1 border-b border-border/60 pb-2">
                    <span className="text-xs font-medium text-white">AllenAI RewardBench v1 Core</span>
                    <span className="text-base font-bold font-mono text-emerald-400">89.88%</span>
                  </div>
                  <p className="text-[11px] text-scientific-muted leading-relaxed">
                    Overall Macro accuracy across 2,985 test pairs (Chat: 94.40%, Reasoning: 90.43%, Safety: 90.45%, General: 90.56%).
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-border flex items-center justify-between">
                <span className="text-xs font-mono text-scientific-muted">
                  Dual NVIDIA T4 • 4-bit NF4 QLoRA
                </span>
                <a
                  href="https://huggingface.co/Stellar-lab/Stellar-Qwen3-8B-ARM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-accent-blue hover:bg-sky-400 text-background-deep text-xs font-mono font-semibold transition-all duration-200"
                >
                  <span>🤗 View on Hugging Face</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </Card>

            {/* Artifact 2: AIAS 2026 Paper */}
            <Card className="p-7 sm:p-8 flex flex-col justify-between border-border hover:border-accent-blue/50 transition-all duration-300">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <Badge variant="blue" size="sm" icon={<Award className="w-3.5 h-3.5" />}>
                    ACCEPTED WORKSHOP PAPER
                  </Badge>
                  <span className="text-xs font-mono text-scientific-muted">
                    AIAS 2026 (LLA)
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2 font-display">
                  Evaluator Reliability Under Test-Time Scaling
                </h3>
                <p className="text-xs sm:text-sm font-mono text-accent-blue mb-4">
                  AIAS 2026 Workshop on Lifelong Agents: Learning, Aligning, and Evolving (LLA)
                </p>

                <p className="text-xs sm:text-sm text-scientific-slate leading-relaxed mb-6">
                  Controlled empirical evaluation across fixed candidate pools on GSM8K and HumanEval to characterize Goodhart divergence under Best-of-N search. Observed Llama-3.1-8B accuracy under DeepSeek-PRM selection peak at 80.4% at N=8 and decline to 72.2% at N=256 despite strictly increasing evaluator score margins; verified using paired bootstrap hypothesis testing with Holm-Bonferroni corrections.
                </p>

                {/* Key Empirical Observation Box */}
                <div className="space-y-3 mb-6 bg-background-deep/60 p-4 rounded-xl border border-border">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-accent-blue block">
                    EMPIRICAL OBSERVATION (GSM8K)
                  </span>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-scientific-slate">Selection at N = 8:</span>
                    <span className="text-sm font-bold font-mono text-emerald-400">80.4% Observed Accuracy</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-scientific-slate">Selection at N = 256:</span>
                    <span className="text-sm font-bold font-mono text-rose-400">72.2% Observed Accuracy</span>
                  </div>
                  <p className="text-[11px] text-scientific-muted leading-relaxed pt-1">
                    Demonstrates an 8.2% drop under search pressure while proxy reward margins expanded, confirming Goodhart decoupling.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-border flex items-center justify-between">
                <span className="text-xs font-mono text-scientific-muted">
                  Accepted for Poster Presentation
                </span>
                <a
                  href="https://github.com/pradeep-016"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-background-elevated hover:bg-slate-800 border border-border hover:border-slate-600 text-xs font-mono text-white transition-all duration-200"
                >
                  <FileText className="w-3.5 h-3.5 text-accent-blue" />
                  <span>Code & Artifacts</span>
                  <ExternalLink className="w-3.5 h-3.5 text-scientific-muted" />
                </a>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

