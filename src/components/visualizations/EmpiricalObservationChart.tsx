import React from 'react';
import { Badge } from '../common/Badge';
import { AlertCircle, BarChart3, Info } from 'lucide-react';

export const EmpiricalObservationChart: React.FC = () => {
  // Verified empirical data points ONLY (GSM8K, Llama 3.1 8B Instruct, DeepSeek PRM selection)
  const data = [
    {
      n: 8,
      label: 'Budget N = 8',
      accuracy: 80.4,
      desc: 'Peak observed accuracy under DeepSeek PRM verifier selection',
      isHighlight: true,
      color: '#38bdf8', // Cyan/blue
    },
    {
      n: 256,
      label: 'Budget N = 256',
      accuracy: 72.2,
      desc: 'Observed accuracy under high selection pressure despite increased proxy reward margins',
      isHighlight: false,
      color: '#f43f5e', // Rose/red
    },
  ];

  const delta = (72.2 - 80.4).toFixed(1); // -8.2%

  return (
    <div className="bg-background-surface/90 border border-border rounded-2xl p-6 md:p-8 backdrop-blur-md shadow-2xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-border">
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-1.5">
            <Badge variant="emerald" size="sm">
              VERIFIED EMPIRICAL OBSERVATION
            </Badge>
            <span className="text-xs text-scientific-muted font-mono">
              GSM8K Benchmark
            </span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-white font-display">
            Observed Accuracy Under Selection Pressure
          </h3>
          <p className="text-xs sm:text-sm text-scientific-slate mt-1 max-w-xl">
            Llama 3.1 8B Instruct with DeepSeek PRM candidate selection on GSM8K mathematical reasoning.
          </p>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs text-rose-400 bg-rose-500/10 px-3 py-1.5 rounded-lg border border-rose-500/30">
          <span>Observed Δ: {delta}% (N=8 → N=256)</span>
        </div>
      </div>

      {/* Primary Visual Comparison */}
      <div className="mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.map((item) => (
            <div
              key={item.n}
              className="bg-background-card/90 border border-border rounded-xl p-6 relative overflow-hidden"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-semibold text-scientific-muted uppercase tracking-wider">
                  {item.label}
                </span>
                <Badge variant={item.n === 8 ? 'blue' : 'slate'} size="sm">
                  Candidate Pool N = {item.n}
                </Badge>
              </div>

              {/* Accuracy Display */}
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-4xl md:text-5xl font-bold font-mono tracking-tight text-white">
                  {item.accuracy}%
                </span>
                <span className="text-xs font-mono text-scientific-slate">
                  Observed Accuracy
                </span>
              </div>

              {/* Progress Bar Representation */}
              <div className="w-full bg-background-deep h-3.5 rounded-full overflow-hidden p-0.5 border border-border mb-3">
                <div
                  className="h-full rounded-full transition-all duration-700"
                  style={{
                    width: `${item.accuracy}%`,
                    backgroundColor: item.color,
                  }}
                />
              </div>

              <p className="text-xs text-scientific-slate leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Rigorous Scientific Integrity Notice */}
        <div className="mt-6 p-4 rounded-xl bg-background-deep/80 border border-border/80 space-y-2">
          <div className="flex items-center gap-2 text-xs font-semibold text-scientific-light">
            <Info className="w-4 h-4 text-accent-blue" />
            <span>Methodological Boundary & Strict Interpretation Rules</span>
          </div>
          <ul className="text-xs text-scientific-slate space-y-1.5 pl-6 list-disc">
            <li>
              <strong>No Interpolated Curves:</strong> Only the two experimentally verified data points (N = 8 and N = 256) are presented. Intermediate points are not interpolated, as empirical performance under selection may exhibit complex non-monotonic behavior.
            </li>
            <li>
              <strong>Context Specificity:</strong> This observation is specific to the evaluated generator (Llama 3.1 8B Instruct), evaluator (DeepSeek PRM), benchmark (GSM8K), and the exact experimental configuration.
            </li>
            <li>
              <strong>Non-Causal Representation:</strong> This empirical result does not claim or establish a universal causal mechanism across all language models, evaluators, or domain settings.
            </li>
            <li>
              <strong>Reward Margin Paradox:</strong> Notably, the 8.2% observed decline in ground-truth accuracy at N = 256 occurred even while the selected candidates received strictly higher proxy evaluator margins.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
