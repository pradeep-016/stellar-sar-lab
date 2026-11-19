import React, { useState } from 'react';
import { Badge } from '../common/Badge';
import {
  AlertCircle,
  BarChart3,
  Layers,
  Table as TableIcon,
  Image as ImageIcon,
  ExternalLink,
  CheckCircle2,
} from 'lucide-react';

interface SubMetric {
  name: string;
  score: number;
  note?: string;
}

interface ReferenceBaseline {
  model: string;
  type: string;
  overall: number;
  highlight?: boolean;
  keySubScores?: string;
}

interface BenchmarkSuite {
  id: string;
  name: string;
  shortName: string;
  dataset: string;
  datasetUrl: string;
  scope: string;
  score: number;
  scoreLabel: string;
  secondaryScore?: { label: string; score: number };
  tag: string;
  tagVariant: 'blue' | 'cyan' | 'violet' | 'emerald';
  notebookName: string;
  imageAsset: string;
  description: string;
  subMetrics: SubMetric[];
  referenceBaselines: ReferenceBaseline[];
}

export const BenchmarkBarChart: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'submetrics' | 'baselines' | 'figures'>('overview');
  const [selectedSuiteId, setSelectedSuiteId] = useState<string>('rb1');

  const benchmarkSuites: BenchmarkSuite[] = [
    {
      id: 'rb1',
      name: 'RewardBench 1',
      shortName: 'RewardBench 1',
      dataset: 'allenai/reward-bench',
      datasetUrl: 'https://huggingface.co/datasets/allenai/reward-bench',
      scope: '2,985 pairs across 23 evaluation subsets',
      score: 89.08,
      scoreLabel: '89.08% Macro-Avg',
      secondaryScore: { label: '50/50 Math+Code Weighted', score: 85.52 },
      tag: 'General Alignment Suite',
      tagVariant: 'blue',
      notebookName: 'stellar-rewardbench1-evaluation.ipynb',
      imageAsset: './benchmarks/rewardbench1_comparison.png',
      description:
        'Standard primary preference evaluation suite covering conversational chat, hard conversational pairs, safety, and reasoning.',
      subMetrics: [
        { name: 'Chat', score: 92.36 },
        { name: 'Reasoning (Macro)', score: 90.54, note: 'Code hep-* 96.24%, math-prm 56.38%' },
        { name: 'Safety', score: 90.21 },
        { name: 'Chat Hard', score: 83.2 },
        { name: 'Reasoning (50/50 Weighted)', score: 76.31 },
      ],
      referenceBaselines: [
        { model: 'INF-ORM-Llama3.1-70B', type: '70B Classifier', overall: 95.11, keySubScores: 'Chat 96.6 | Hard 91.0 | Safety 93.6 | Reas 99.1' },
        { model: 'Skywork-Reward-Gemma-2-27B-v0.2', type: '27B Classifier', overall: 94.26, keySubScores: 'Chat 96.1 | Hard 89.9 | Safety 93.0 | Reas 98.1' },
        { model: 'Skywork-Reward-Llama-3.1-8B-v0.2', type: '8B Classifier', overall: 93.13, keySubScores: 'Chat 94.7 | Hard 88.4 | Safety 92.7 | Reas 96.7' },
        { model: 'URM-LLaMa-3.1-8B', type: '8B Classifier', overall: 92.94, keySubScores: 'Chat 95.5 | Hard 88.2 | Safety 91.1 | Reas 97.0' },
        { model: 'GRM-Llama3-8B-rewardmodel-ft', type: '8B Classifier', overall: 91.54, keySubScores: 'Chat 95.5 | Hard 86.2 | Safety 90.8 | Reas 93.6' },
        { model: 'ArmoRM-Llama3-8B-v0.1', type: '8B MoE RM', overall: 90.4, keySubScores: 'Chat 96.9 | Hard 76.8 | Safety 90.5 | Reas 97.3' },
        { model: 'Stellar-Qwen3-8B-ARM (Macro Avg)', type: '8B Causal DAG (7.5k pairs)', overall: 89.08, highlight: true, keySubScores: 'Chat 92.4 | Hard 83.2 | Safety 90.2 | Reas 90.5' },
        { model: 'Skywork-Reward-Llama-3.1-8B', type: '8B Classifier', overall: 87.7, keySubScores: 'Chat 96.1 | Hard 80.4 | Safety 87.8 | Reas 86.3' },
        { model: 'GPT-4o (2024-08-06)', type: 'Proprietary Judge', overall: 86.73, keySubScores: 'Chat 96.1 | Hard 76.1 | Safety 88.1 | Reas 86.6' },
        { model: 'Stellar-Qwen3-8B-ARM (50/50 Weighted)', type: '8B Causal DAG (7.5k pairs)', overall: 85.52, highlight: true, keySubScores: 'Chat 92.4 | Hard 83.2 | Safety 90.2 | Reas 76.3' },
      ],
    },
    {
      id: 'rb2',
      name: 'RewardBench 2',
      shortName: 'RewardBench 2',
      dataset: 'allenai/reward-bench-2',
      datasetUrl: 'https://huggingface.co/datasets/allenai/reward-bench-2',
      scope: '1,865 prompts (8,977 completions across 6 domains)',
      score: 74.2,
      scoreLabel: '74.20% Macro-Avg',
      tag: 'Hard Reasoning & Instruction-Following',
      tagVariant: 'cyan',
      notebookName: 'stellar-rewardbench2-evaluation.ipynb',
      imageAsset: './benchmarks/rewardbench2_comparison.png',
      description:
        'Next-generation evaluation focusing on fine-grained factuality, precise instruction constraints, mathematical reasoning, safety, focus, and handling subtle tie pairs.',
      subMetrics: [
        { name: 'Focus', score: 96.97 },
        { name: 'Safety', score: 93.33 },
        { name: 'Ties', score: 77.94 },
        { name: 'Factuality', score: 66.95 },
        { name: 'Math', score: 65.03 },
        { name: 'Precise Instruction Following (IF)', score: 45.0 },
      ],
      referenceBaselines: [
        { model: 'Skywork-Reward-V2-Llama-3.1-8B', type: '8B Classifier (26M pairs)', overall: 84.13, keySubScores: 'Fact 84.6 | IF 66.2 | Math 77.6 | Safety 96.7' },
        { model: 'LMUnit-qwen2.5-72b', type: '72B Generative', overall: 82.08, keySubScores: 'Fact 87.2 | IF 54.4 | Math 72.7 | Safety 91.3' },
        { model: 'Skywork-Reward-V2-Qwen3-8B', type: '8B Classifier (26M pairs)', overall: 78.37, keySubScores: 'Fact 79.9 | IF 50.0 | Math 77.0 | Safety 94.0' },
        { model: 'INF-ORM-Llama3.1-70B', type: '70B Classifier', overall: 76.48, keySubScores: 'Fact 74.1 | IF 41.9 | Math 69.9 | Safety 96.4' },
        { model: 'Llama-3.1-70B-Instruct-RM-RB2', type: '70B Classifier', overall: 76.06, keySubScores: 'Fact 81.3 | IF 41.9 | Math 69.9 | Safety 88.4' },
        { model: 'Stellar-Qwen3-8B-ARM', type: '8B Causal DAG (7.5k pairs)', overall: 74.2, highlight: true, keySubScores: 'Fact 66.9 | IF 45.0 | Math 65.0 | Safety 93.3' },
        { model: 'URM-LLaMa-3.1-8B', type: '8B Classifier', overall: 73.94, keySubScores: 'Fact 68.8 | IF 45.0 | Math 63.9 | Safety 91.8' },
        { model: 'GPT-4.1 (2025-04-14)', type: 'Proprietary Judge', overall: 72.32, keySubScores: 'Fact 82.9 | IF 39.7 | Math 65.2 | Safety 87.3' },
        { model: 'Claude-Sonnet-4 (20250514)', type: 'Proprietary Judge', overall: 71.17, keySubScores: 'Fact 76.1 | IF 35.9 | Math 70.5 | Safety 89.1' },
        { model: 'ArmoRM-Llama3-8B-v0.1', type: '8B MoE RM', overall: 66.46, keySubScores: 'Fact 65.7 | IF 41.9 | Math 66.1 | Safety 82.2' },
        { model: 'GPT-4o (2024-08-06)', type: 'Proprietary Judge', overall: 64.93, keySubScores: 'Fact 56.8 | IF 33.1 | Math 62.3 | Safety 86.2' },
      ],
    },
    {
      id: 'rmbench',
      name: 'THU-KEG RM-Bench',
      shortName: 'RM-Bench',
      dataset: 'THU-KEG/RM-Bench',
      datasetUrl: 'https://huggingface.co/datasets/THU-KEG/RM-Bench',
      scope: '1,327 prompts × 6 responses / 3×3 style matrix',
      score: 74.88,
      scoreLabel: '74.88% Overall Avg',
      secondaryScore: { label: 'Hard Style-Trap Tier', score: 65.51 },
      tag: 'Style-Trap Robustness',
      tagVariant: 'violet',
      notebookName: 'stellar-rm-bench-evaluation.ipynb',
      imageAsset: './benchmarks/rmbench_comparison.png',
      description:
        'Adversarial benchmark explicitly designed to test sensitivity to stylistic shortcuts and superficial length artifacts across Easy, Normal, and Hard tiers.',
      subMetrics: [
        { name: 'Easy Tier', score: 82.69 },
        { name: 'Normal Tier', score: 76.44 },
        { name: 'Hard Tier (Style-Trap)', score: 65.51 },
        { name: 'Overall Matrix Average', score: 74.88 },
      ],
      referenceBaselines: [
        { model: 'Stellar-Qwen3-8B-ARM', type: '8B Causal DAG (7.5k pairs)', overall: 74.88, highlight: true, keySubScores: 'Easy 82.7% | Normal 76.4% | Hard 65.5%' },
        { model: 'Skywork-Reward-Gemma-2-27B', type: '27B Classifier', overall: 73.2, keySubScores: 'Easy 91.6% | Normal 74.1% | Hard 54.0%' },
        { model: 'GPT-4o (Generative Judge)', type: 'Proprietary Judge', overall: 70.1, keySubScores: 'Easy 85.4% | Normal 72.1% | Hard 52.8%' },
        { model: 'Skywork-Reward-Llama-3.1-8B', type: '8B Classifier', overall: 70.1, keySubScores: 'Easy 89.2% | Normal 75.4% | Hard 45.7%' },
        { model: 'ArmoRM-Llama3-8B-v0.1', type: '8B MoE RM', overall: 68.9, keySubScores: 'Easy 88.0% | Normal 72.0% | Hard 46.8%' },
        { model: 'InternLM2-20B-Reward', type: '20B Classifier', overall: 68.2, keySubScores: 'Easy 89.5% | Normal 71.3% | Hard 43.8%' },
      ],
    },
    {
      id: 'judgebench',
      name: 'ScalerLab JudgeBench',
      shortName: 'JudgeBench',
      dataset: 'ScalerLab/JudgeBench',
      datasetUrl: 'https://huggingface.co/datasets/ScalerLab/JudgeBench',
      scope: '620 pairs (350 GPT-4o + 270 Claude-3.5)',
      score: 62.5,
      scoreLabel: '62.50% Micro-Avg',
      tag: 'Judgment Alignment',
      tagVariant: 'emerald',
      notebookName: 'stellar-judgebench-evaluation.ipynb',
      imageAsset: './benchmarks/judgebench_comparison.png',
      description:
        'Evaluates calibration against challenging preference comparisons and multi-turn judgment instances where frontier model judges disagree.',
      subMetrics: [
        { name: 'Math Domain', score: 74.11 },
        { name: 'Coding Domain', score: 65.07 },
        { name: 'GPT-4o Split (350 pairs)', score: 63.71 },
        { name: 'Claude-3.5 Split (270 pairs)', score: 60.93 },
        { name: 'Reasoning Domain', score: 60.4 },
        { name: 'Knowledge Domain', score: 58.39 },
      ],
      referenceBaselines: [
        { model: 'Llama-3.3-Nemotron-70B-Reward', type: '70B Classifier', overall: 73.7, keySubScores: 'GPT-4o 73.7% | Claude 73.7%' },
        { model: 'Qwen-2.5-Nemotron-32B-Reward', type: '32B Classifier', overall: 70.3, keySubScores: 'GPT-4o 70.3% | Claude 70.3%' },
        { model: 'Skywork-Reward-Gemma-2-27B', type: '27B Classifier', overall: 65.0, keySubScores: 'GPT-4o 67.7% | Claude 61.5%' },
        { model: 'Stellar-Qwen3-8B-ARM', type: '8B Causal DAG (7.5k pairs)', overall: 62.5, highlight: true, keySubScores: 'GPT-4o 63.7% | Claude 60.9%' },
        { model: 'Skywork-Reward-Llama-3.1-8B', type: '8B Classifier', overall: 62.1, keySubScores: 'GPT-4o 64.0% | Claude 59.6%' },
        { model: 'ArmoRM-Llama3-8B-v0.1', type: '8B MoE RM', overall: 59.2, keySubScores: 'GPT-4o 61.4% | Claude 56.3%' },
        { model: 'Claude-3.5-Sonnet (Prompted)', type: 'Proprietary Judge', overall: 58.9, keySubScores: 'GPT-4o 61.2% | Claude 56.1%' },
        { model: 'InternLM2-20B-Reward', type: '20B Classifier', overall: 58.1, keySubScores: 'GPT-4o 60.3% | Claude 55.2%' },
        { model: 'GPT-4o (Prompted 2024-05-13)', type: 'Proprietary Judge', overall: 53.9, keySubScores: 'GPT-4o 56.6% | Claude 50.4%' },
      ],
    },
  ];

  const selectedSuite = benchmarkSuites.find((b) => b.id === selectedSuiteId) || benchmarkSuites[0];

  return (
    <div className="bg-background-surface/90 border border-border rounded-2xl p-6 md:p-8 backdrop-blur-md shadow-2xl">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-border">
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-1.5">
            <Badge variant="blue" size="sm">
              EMPIRICAL BENCHMARK EVALUATIONS
            </Badge>
            <span className="text-xs text-scientific-muted font-mono">
              Stellar-Qwen3-8B-ARM • 4 Evaluated Suites
            </span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-white font-display">
            Benchmark Performance & Baseline Context
          </h3>
        </div>

        {/* View Switcher Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 bg-background-deep p-1 rounded-xl border border-border text-xs font-mono">
          <button
            onClick={() => setActiveTab('overview')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors ${
              activeTab === 'overview'
                ? 'bg-accent-blue text-background-deep font-semibold shadow-sm'
                : 'text-scientific-slate hover:text-white hover:bg-background-card'
            }`}
          >
            <BarChart3 className="w-3.5 h-3.5" />
            <span>Overview</span>
          </button>
          <button
            onClick={() => setActiveTab('submetrics')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors ${
              activeTab === 'submetrics'
                ? 'bg-accent-blue text-background-deep font-semibold shadow-sm'
                : 'text-scientific-slate hover:text-white hover:bg-background-card'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Sub-Metrics</span>
          </button>
          <button
            onClick={() => setActiveTab('baselines')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors ${
              activeTab === 'baselines'
                ? 'bg-accent-blue text-background-deep font-semibold shadow-sm'
                : 'text-scientific-slate hover:text-white hover:bg-background-card'
            }`}
          >
            <TableIcon className="w-3.5 h-3.5" />
            <span>Reference Baselines</span>
          </button>
          <button
            onClick={() => setActiveTab('figures')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors ${
              activeTab === 'figures'
                ? 'bg-accent-blue text-background-deep font-semibold shadow-sm'
                : 'text-scientific-slate hover:text-white hover:bg-background-card'
            }`}
          >
            <ImageIcon className="w-3.5 h-3.5" />
            <span>Comparison Figures</span>
          </button>
        </div>
      </div>

      {/* Tab 1: Overview Progress Bars */}
      {activeTab === 'overview' && (
        <div className="py-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {benchmarkSuites.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  setSelectedSuiteId(item.id);
                  setActiveTab('submetrics');
                }}
                className="group cursor-pointer bg-background-deep/80 hover:bg-background-card border border-border/80 hover:border-accent-blue/40 rounded-xl p-5 transition-all"
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-white font-display text-base">
                      {item.name}
                    </span>
                    <Badge variant={item.tagVariant} size="sm">
                      {item.tag}
                    </Badge>
                  </div>
                  <div className="font-mono text-base font-bold text-accent-blue">
                    {item.score.toFixed(2)}%
                  </div>
                </div>

                <div className="w-full bg-background-deep h-2.5 rounded-full overflow-hidden p-0.5 border border-border mb-3">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-accent-blue via-accent-cyan to-accent-violet transition-all duration-700"
                    style={{ width: `${item.score}%` }}
                  />
                </div>

                <p className="text-xs text-scientific-slate leading-relaxed mb-3">
                  {item.description}
                </p>

                <div className="flex items-center justify-between pt-2 border-t border-border/50 text-[11px] font-mono text-scientific-muted">
                  <span>Scope: {item.scope}</span>
                  <span className="text-accent-cyan group-hover:underline">
                    View breakdown →
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-xs font-mono text-scientific-muted bg-background-deep/60 px-4 py-3 rounded-xl border border-border flex items-center justify-between">
            <span>Evaluation Protocol: Deterministic greedy decoding (temperature = 0.0) with official harnesses</span>
            <span className="text-scientific-slate">Base: Qwen3-8B (7,500 curated pairs)</span>
          </div>
        </div>
      )}

      {/* Tab 2: Detailed Sub-Metrics View */}
      {activeTab === 'submetrics' && (
        <div className="py-6 space-y-6">
          {/* Suite Selector Pills */}
          <div className="flex flex-wrap items-center gap-2 pb-4 border-b border-border/60">
            <span className="text-xs font-mono text-scientific-muted uppercase tracking-wider mr-2">
              Select Benchmark:
            </span>
            {benchmarkSuites.map((suite) => (
              <button
                key={suite.id}
                onClick={() => setSelectedSuiteId(suite.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                  selectedSuiteId === suite.id
                    ? 'bg-accent-blue/20 text-accent-cyan border border-accent-blue/40 font-semibold'
                    : 'bg-background-deep text-scientific-slate border border-border hover:text-white'
                }`}
              >
                {suite.shortName} ({suite.score.toFixed(2)}%)
              </button>
            ))}
          </div>

          {/* Selected Suite Sub-Metrics Details */}
          <div className="bg-background-deep/80 border border-border rounded-xl p-5 md:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-4 border-b border-border/60">
              <div>
                <h4 className="text-lg font-bold text-white font-display flex items-center gap-2">
                  <span>{selectedSuite.name} Sub-Category Breakdown</span>
                  <a
                    href={selectedSuite.datasetUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-accent-cyan hover:underline inline-flex items-center gap-1"
                  >
                    <span>{selectedSuite.dataset}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </h4>
                <p className="text-xs text-scientific-slate mt-1">
                  Scope: {selectedSuite.scope}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-background-surface px-3 py-1.5 rounded-lg border border-border text-right">
                  <span className="text-[10px] font-mono text-scientific-muted block">PRIMARY METRIC</span>
                  <span className="text-sm font-mono font-bold text-accent-blue">
                    {selectedSuite.scoreLabel}
                  </span>
                </div>
                {selectedSuite.secondaryScore && (
                  <div className="bg-background-surface px-3 py-1.5 rounded-lg border border-border text-right">
                    <span className="text-[10px] font-mono text-scientific-muted block">
                      {selectedSuite.secondaryScore.label}
                    </span>
                    <span className="text-sm font-mono font-bold text-accent-violet">
                      {selectedSuite.secondaryScore.score.toFixed(2)}%
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Sub-Metrics Progress Bars */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              {selectedSuite.subMetrics.map((sub) => (
                <div key={sub.name} className="bg-background-surface/70 p-3.5 rounded-xl border border-border/70">
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <span className="font-semibold text-white font-display">{sub.name}</span>
                    <span className="font-mono font-bold text-accent-cyan">{sub.score.toFixed(2)}%</span>
                  </div>

                  <div className="w-full bg-background-deep h-2 rounded-full overflow-hidden p-0.5 border border-border mb-1.5">
                    <div
                      className="h-full rounded-full bg-accent-cyan"
                      style={{ width: `${sub.score}%` }}
                    />
                  </div>

                  {sub.note && (
                    <span className="text-[10px] font-mono text-scientific-muted block">
                      {sub.note}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Reference Baselines Table */}
      {activeTab === 'baselines' && (
        <div className="py-6 space-y-6">
          {/* Suite Selector Pills */}
          <div className="flex flex-wrap items-center gap-2 pb-4 border-b border-border/60">
            <span className="text-xs font-mono text-scientific-muted uppercase tracking-wider mr-2">
              Select Benchmark:
            </span>
            {benchmarkSuites.map((suite) => (
              <button
                key={suite.id}
                onClick={() => setSelectedSuiteId(suite.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                  selectedSuiteId === suite.id
                    ? 'bg-accent-blue/20 text-accent-cyan border border-accent-blue/40 font-semibold'
                    : 'bg-background-deep text-scientific-slate border border-border hover:text-white'
                }`}
              >
                {suite.shortName}
              </button>
            ))}
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono border-collapse">
              <thead>
                <tr className="border-b border-border bg-background-deep/80 text-scientific-muted uppercase tracking-wider text-[11px]">
                  <th className="py-3 px-4">Model</th>
                  <th className="py-3 px-4">Architecture / Type</th>
                  <th className="py-3 px-4 text-right">Overall Score</th>
                  <th className="py-3 px-4">Key Breakdown / Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                {selectedSuite.referenceBaselines.map((baseline, idx) => (
                  <tr
                    key={idx}
                    className={`transition-colors ${
                      baseline.highlight
                        ? 'bg-accent-blue/10 border-l-2 border-accent-blue font-semibold'
                        : 'hover:bg-background-deep/40'
                    }`}
                  >
                    <td className="py-3 px-4 text-white flex items-center gap-1.5">
                      {baseline.highlight && <CheckCircle2 className="w-3.5 h-3.5 text-accent-cyan flex-shrink-0" />}
                      <span>{baseline.model}</span>
                    </td>
                    <td className="py-3 px-4 text-scientific-slate">{baseline.type}</td>
                    <td className={`py-3 px-4 text-right font-bold ${baseline.highlight ? 'text-accent-cyan' : 'text-white'}`}>
                      {baseline.overall.toFixed(2)}%
                    </td>
                    <td className="py-3 px-4 text-scientific-muted text-[11px]">
                      {baseline.keySubScores || '—'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-[11px] text-scientific-muted font-mono leading-relaxed">
            * Reference scores are cited directly from published benchmark papers and public leaderboard evaluations under identical test subsets.
          </p>
        </div>
      )}

      {/* Tab 4: Comparison Figures */}
      {activeTab === 'figures' && (
        <div className="py-6 space-y-6">
          <div className="flex flex-wrap items-center gap-2 pb-4 border-b border-border/60">
            <span className="text-xs font-mono text-scientific-muted uppercase tracking-wider mr-2">
              Select Chart:
            </span>
            {benchmarkSuites.map((suite) => (
              <button
                key={suite.id}
                onClick={() => setSelectedSuiteId(suite.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                  selectedSuiteId === suite.id
                    ? 'bg-accent-blue/20 text-accent-cyan border border-accent-blue/40 font-semibold'
                    : 'bg-background-deep text-scientific-slate border border-border hover:text-white'
                }`}
              >
                {suite.shortName}
              </button>
            ))}
          </div>

          <div className="bg-background-deep/90 border border-border rounded-xl p-4 md:p-6 text-center">
            <h4 className="text-sm font-mono text-white mb-3 text-left">
              Evaluation Figure: {selectedSuite.name} (Source: <code className="text-accent-cyan">{selectedSuite.notebookName}</code>)
            </h4>
            <div className="rounded-lg overflow-hidden border border-border bg-black/40 p-2 max-w-4xl mx-auto">
              <img
                src={selectedSuite.imageAsset}
                alt={`${selectedSuite.name} Comparison Chart`}
                className="w-full h-auto object-contain rounded"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      )}

      {/* Integrity & Epistemic Transparency Notice */}
      <div className="mt-8 p-4 rounded-xl bg-background-deep/70 border border-border text-xs text-scientific-slate space-y-1.5">
        <div className="flex items-center gap-1.5 text-scientific-light font-semibold">
          <AlertCircle className="w-4 h-4 text-accent-blue flex-shrink-0" />
          <span>Evaluation Protocol & Epistemic Boundaries</span>
        </div>
        <p>
          • <strong>Evaluation Methodology:</strong> All evaluations executed with official open-source evaluation harnesses using deterministic greedy decoding (temperature = 0.0) on dual NVIDIA T4 GPU hardware.
        </p>
        <p>
          • <strong>Scientific Scope:</strong> Results reflect empirical performance on designated benchmark splits and should be interpreted alongside task-specific constraints. No universal superiority across all open distributions is claimed.
        </p>
      </div>
    </div>
  );
};
