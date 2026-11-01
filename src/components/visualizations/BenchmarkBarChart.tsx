import React from 'react';
import { Badge } from '../common/Badge';
import { Award, Info, AlertCircle } from 'lucide-react';

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
      name: 'RewardBench Evaluation 1',
      score: 89.2,
      maxScore: 100,
      tag: 'Configuration 1',
      tagVariant: 'blue',
      description: 'Reported evaluation run on RewardBench benchmark suite under configuration 1.',
    },
    {
      name: 'RewardBench Evaluation 2',
      score: 74.4,
      maxScore: 100,
      tag: 'Configuration 2',
      tagVariant: 'cyan',
      description: 'Reported evaluation run on RewardBench benchmark suite under configuration 2.',
    },
    {
      name: 'RM-Bench (Hard Style-Trap)',
      score: 65.6,
      maxScore: 100,
      tag: 'Robustness / Style Resistance',
      tagVariant: 'violet',
      description: 'Evaluates resilience against adversarial length biases and deceptive styling tricks.',
    },
    {
      name: 'JudgeBench',
      score: 62.5,
      maxScore: 100,
      tag: 'Judgment Alignment',
      tagVariant: 'slate',
      description: 'Assesses discriminative calibration against complex preference comparisons.',
    },
  ];

  return (
    <div className="bg-background-surface/90 border border-border rounded-2xl p-6 md:p-8 backdrop-blur-md shadow-2xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-border">
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-1.5">
            <Badge variant="blue" size="sm">
              REPORTED BENCHMARK RESULTS
            </Badge>
            <span className="text-xs text-scientific-muted font-mono">
              Associative Reward Model (ARM)
            </span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-white font-display">
            ARM Benchmark Evaluation Scores
          </h3>
          <p className="text-xs sm:text-sm text-scientific-slate mt-1 max-w-xl">
            Reported evaluation scores across standardized reward-model benchmarks.
          </p>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs text-scientific-muted">
          <Award className="w-4 h-4 text-accent-blue" />
          <span>Qwen3-8B Backbone</span>
        </div>
      </div>

      {/* Benchmark Bars */}
      <div className="mt-8 space-y-6">
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
                <span>{item.score.toFixed(1)}</span>
                <span className="text-xs text-scientific-muted font-normal">/ {item.maxScore}</span>
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
          <span>Scientific Integrity & Reporting Notice</span>
        </div>
        <p>
          • <strong>Cross-benchmark comparability:</strong> Benchmark scores are reported directly from distinct evaluation suites with disparate test distributions and scoring protocols; these numbers are not directly interchangeable or comparable across benchmarks.
        </p>
        <p>
          • <strong>No invented rankings:</strong> Results are reported without ranking claims or superiority assertions over other published architectures.
        </p>
      </div>
    </div>
  );
};

