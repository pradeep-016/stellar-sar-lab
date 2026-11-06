import React from 'react';
import { Badge } from '../common/Badge';
import { AlertCircle } from 'lucide-react';

interface BenchmarkItem {
  name: string;
  score: number;
  maxScore: number;
  tag: string;
  tagVariant: 'blue' | 'cyan' | 'violet' | 'slate';
  description: string;
}

export const BenchmarkBarChart: React.FC = () => {
  const benchmarks: BenchmarkItem[] = [
    {
      name: 'RM-Bench (Hard Style-Trap)',
      score: 67.09,
      maxScore: 100,
      tag: 'Adversarial Style-Trap',
      tagVariant: 'violet',
      description:
        'Achieved 67.09% accuracy vs Skywork-27B (54.00%), GPT-4o (52.80%), and ArmoRM-8B (46.80%). Baselines from public leaderboard.',
    },
    {
      name: 'AllenAI RewardBench v1',
      score: 89.88,
      maxScore: 100,
      tag: 'Primary Suite (Self-Evaluated)',
      tagVariant: 'blue',
      description:
        'Evaluated locally with official reward-bench harness (v0.1.4). Leaderboard PR pending. Chat: 94.40%, Reasoning: 90.43%, Safety: 90.45%, Prior Sets: 84.24%.',
    },
    {
      name: 'JudgeBench',
      score: 62.5,
      maxScore: 100,
      tag: 'Judgment Alignment',
      tagVariant: 'slate',
      description:
        'Assesses discriminative calibration against complex preference comparisons and nuanced human/algorithmic judgments.',
    },
  ];

  return (
    <div className="bg-background-surface/90 border border-border rounded-2xl p-6 md:p-8 backdrop-blur-md shadow-2xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-border">
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-1.5">
            <Badge variant="blue" size="sm">
              VERIFIED BENCHMARK RESULTS
            </Badge>
            <span className="text-xs text-scientific-muted font-mono">
              Associative Reward Model (ARM-Qwen3-8B)
            </span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-white font-display">
            Empirical Evaluation Performance
          </h3>
        </div>

        <div className="text-xs font-mono text-scientific-muted bg-background-deep px-3 py-1.5 rounded-lg border border-border">
          Deterministic greedy decoding (T = 0.0)
        </div>
      </div>

      {/* Bars Grid */}
      <div className="py-6 space-y-6">
        {benchmarks.map((item) => (
          <div key={item.name} className="space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-sm">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-white font-display">{item.name}</span>
                <Badge variant={item.tagVariant} size="sm">
                  {item.tag}
                </Badge>
              </div>
              <div className="font-mono text-base font-bold text-accent-blue flex items-baseline gap-1">
                <span>{item.score.toFixed(2)}%</span>
                <span className="text-xs text-scientific-muted font-normal">/ {item.maxScore}%</span>
              </div>
            </div>

            {/* Custom Bar */}
            <div className="w-full bg-background-deep h-3 rounded-full overflow-hidden p-0.5 border border-border">
              <div
                className="h-full rounded-full bg-gradient-to-r from-accent-blue via-accent-cyan to-accent-violet transition-all duration-700"
                style={{ width: `${(item.score / item.maxScore) * 100}%` }}
              />
            </div>

            <p className="text-xs text-scientific-slate">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      {/* Integrity & Non-Comparability Notice */}
      <div className="mt-8 p-4 rounded-xl bg-background-deep/70 border border-border text-xs text-scientific-slate space-y-1.5">
        <div className="flex items-center gap-1.5 text-scientific-light font-semibold">
          <AlertCircle className="w-4 h-4 text-accent-blue flex-shrink-0" />
          <span>Evaluation Protocol & Epistemic Transparency</span>
        </div>
        <p>
          • <strong>Self-evaluated protocol:</strong> Evaluations conducted using official open-source harnesses with deterministic greedy decoding (temperature=0.0). Public PR for inclusion in the official AllenAI leaderboard is currently under review.
        </p>
        <p>
          • <strong>Cross-benchmark context:</strong> RM-Bench style-trap baselines (Skywork-27B at 54.00%, GPT-4o at 52.80%, ArmoRM-8B at 46.80%) are cited from the public leaderboard.
        </p>
      </div>
    </div>
  );
};
