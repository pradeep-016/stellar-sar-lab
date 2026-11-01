import React, { useState } from 'react';
import { Badge } from '../common/Badge';
import { AlertCircle, Sliders, Info } from 'lucide-react';

export const RewardQualityDivergenceChart: React.FC = () => {
  const [budgetN, setBudgetN] = useState<number>(64);
  const [activeTab, setActiveTab] = useState<'chart' | 'theory'>('chart');

  // Generate conceptual curve points from 1 to 256
  // Proxy reward steadily climbs with log(N)
  // True quality rises initially, peaks around N=8~16, then declines due to Goodhart over-optimization
  const steps = [1, 2, 4, 8, 16, 32, 64, 128, 256];

  const getProxyScore = (n: number) => {
    // Monotonic logarithmic increase normalized to 0-100
    return Math.min(45 + Math.log2(n) * 6.5, 96);
  };

  const getTrueQuality = (n: number) => {
    // Conceptual Goodhart effect: rises then declines
    if (n <= 8) {
      return 50 + Math.log2(n) * 3.8; // Peak around ~61.4 at N=8
    } else {
      const drop = Math.pow(Math.log2(n) - 3, 1.4) * 4.2;
      return Math.max(61.4 - drop, 38);
    }
  };

  const currentProxy = getProxyScore(budgetN);
  const currentQuality = getTrueQuality(budgetN);
  const divergenceGap = Math.max(0, currentProxy - currentQuality);

  // SVG coordinate calculations
  const svgWidth = 650;
  const svgHeight = 320;
  const padding = { top: 40, right: 40, bottom: 50, left: 60 };
  const graphWidth = svgWidth - padding.left - padding.right;
  const graphHeight = svgHeight - padding.top - padding.bottom;

  const getX = (n: number) => {
    const minLog = Math.log2(1);
    const maxLog = Math.log2(256);
    const pos = (Math.log2(n) - minLog) / (maxLog - minLog);
    return padding.left + pos * graphWidth;
  };

  const getY = (val: number) => {
    const minVal = 30;
    const maxVal = 100;
    const pos = (val - minVal) / (maxVal - minVal);
    return padding.top + (1 - pos) * graphHeight;
  };

  const proxyPath = steps
    .map((n, i) => `${i === 0 ? 'M' : 'L'} ${getX(n)} ${getY(getProxyScore(n))}`)
    .join(' ');

  const qualityPath = steps
    .map((n, i) => `${i === 0 ? 'M' : 'L'} ${getX(n)} ${getY(getTrueQuality(n))}`)
    .join(' ');

  return (
    <div className="bg-background-surface/90 border border-border rounded-2xl p-6 md:p-8 backdrop-blur-md shadow-2xl">
      {/* Header & Disclaimer */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-border">
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-1.5">
            <Badge variant="cyan" size="sm">
              CONCEPTUAL EXPLANATORY DIAGRAM
            </Badge>
            <span className="text-xs text-scientific-muted font-mono">
              Not Experimental Data
            </span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-white font-display">
            Reward–Quality Divergence Under Optimization
          </h3>
          <p className="text-xs sm:text-sm text-scientific-slate mt-1 max-w-xl">
            Illustrating Goodhart’s Law in alignment: proxy evaluator scores continue climbing while independently measured task correctness decouples and falls.
          </p>
        </div>

        <div className="flex items-center gap-2 bg-background-elevated/70 p-1 rounded-lg border border-border">
          <button
            onClick={() => setActiveTab('chart')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
              activeTab === 'chart'
                ? 'bg-accent-blue text-background-deep font-semibold shadow-sm'
                : 'text-scientific-slate hover:text-white'
            }`}
          >
            Interactive Curve
          </button>
          <button
            onClick={() => setActiveTab('theory')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
              activeTab === 'theory'
                ? 'bg-accent-blue text-background-deep font-semibold shadow-sm'
                : 'text-scientific-slate hover:text-white'
            }`}
          >
            Theoretical Basis
          </button>
        </div>
      </div>

      {activeTab === 'chart' ? (
        <div className="mt-6 space-y-6">
          {/* Controls Bar */}
          <div className="bg-background-card/80 border border-border/80 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Sliders className="w-4 h-4 text-accent-blue flex-shrink-0" />
              <div>
                <div className="text-xs font-mono text-scientific-muted uppercase tracking-wider">
                  Candidate Selection Budget (N)
                </div>
                <div className="text-lg font-bold text-white font-mono flex items-center gap-2">
                  <span>N = {budgetN} candidates</span>
                  {budgetN > 16 && (
                    <Badge variant="amber" size="sm">
                      Over-optimization Regime
                    </Badge>
                  )}
                  {budgetN <= 16 && (
                    <Badge variant="emerald" size="sm">
                      Calibration Regime
                    </Badge>
                  )}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
              {steps.map((n) => (
                <button
                  key={n}
                  onClick={() => setBudgetN(n)}
                  className={`px-2.5 py-1 text-xs font-mono rounded border transition-all ${
                    budgetN === n
                      ? 'bg-accent-blue/20 text-accent-blue border-accent-blue font-bold shadow-sm'
                      : 'bg-background-surface text-scientific-slate border-border hover:border-slate-600'
                  }`}
                >
                  {n}
                </button>
              ))}
            </div>
          </div>

          {/* SVG Graph */}
          <div className="relative bg-background-deep/60 rounded-xl border border-border p-2 sm:p-4 overflow-x-auto">
            <svg
              viewBox={`0 0 ${svgWidth} ${svgHeight}`}
              className="w-full h-auto min-w-[540px] font-mono text-xs select-none"
            >
              {/* Background grid */}
              {[40, 60, 80, 100].map((v) => (
                <g key={v}>
                  <line
                    x1={padding.left}
                    y1={getY(v)}
                    x2={svgWidth - padding.right}
                    y2={getY(v)}
                    stroke="#1e293b"
                    strokeDasharray="4 4"
                    strokeWidth="1"
                  />
                  <text
                    x={padding.left - 10}
                    y={getY(v) + 4}
                    fill="#64748b"
                    textAnchor="end"
                    fontSize="10"
                  >
                    {v}%
                  </text>
                </g>
              ))}

              {/* Vertical budget ticks */}
              {steps.map((n) => (
                <g key={n}>
                  <line
                    x1={getX(n)}
                    y1={padding.top}
                    x2={getX(n)}
                    y2={svgHeight - padding.bottom}
                    stroke="#182338"
                    strokeWidth="1"
                  />
                  <text
                    x={getX(n)}
                    y={svgHeight - padding.bottom + 18}
                    fill="#94a3b8"
                    textAnchor="middle"
                    fontSize="10"
                  >
                    {n}
                  </text>
                </g>
              ))}

              {/* Axis labels */}
              <text
                x={svgWidth / 2}
                y={svgHeight - 12}
                fill="#cbd5e1"
                textAnchor="middle"
                fontSize="11"
                fontWeight="500"
              >
                Inference-Time Selection Budget (N candidates) →
              </text>
              <text
                x={-svgHeight / 2}
                y={18}
                fill="#cbd5e1"
                textAnchor="middle"
                fontSize="11"
                fontWeight="500"
                transform="rotate(-90)"
              >
                Relative Score / Correctness (%) →
              </text>

              {/* Goodhart divergence threshold zone */}
              <rect
                x={getX(16)}
                y={padding.top}
                width={svgWidth - padding.right - getX(16)}
                height={graphHeight}
                fill="rgba(239, 68, 68, 0.03)"
              />
              <line
                x1={getX(16)}
                y1={padding.top}
                x2={getX(16)}
                y2={svgHeight - padding.bottom}
                stroke="#f43f5e"
                strokeWidth="1.5"
                strokeDasharray="5 3"
              />
              <text
                x={getX(16) + 8}
                y={padding.top + 16}
                fill="#fb7185"
                fontSize="10"
                fontWeight="600"
              >
                Divergence Threshold
              </text>

              {/* Curve 1: Proxy Evaluator Score */}
              <path
                d={proxyPath}
                fill="none"
                stroke="#38bdf8"
                strokeWidth="2.5"
                strokeLinecap="round"
              />

              {/* Curve 2: Ground-Truth Task Correctness */}
              <path
                d={qualityPath}
                fill="none"
                stroke="#a78bfa"
                strokeWidth="2.5"
                strokeLinecap="round"
              />

              {/* Points for Proxy Score */}
              {steps.map((n) => (
                <circle
                  key={`p-${n}`}
                  cx={getX(n)}
                  cy={getY(getProxyScore(n))}
                  r={n === budgetN ? 5.5 : 3.5}
                  fill={n === budgetN ? '#38bdf8' : '#0e7490'}
                  stroke="#080d1a"
                  strokeWidth="2"
                />
              ))}

              {/* Points for True Quality */}
              {steps.map((n) => (
                <circle
                  key={`q-${n}`}
                  cx={getX(n)}
                  cy={getY(getTrueQuality(n))}
                  r={n === budgetN ? 5.5 : 3.5}
                  fill={n === budgetN ? '#a78bfa' : '#6d28d9'}
                  stroke="#080d1a"
                  strokeWidth="2"
                />
              ))}

              {/* Current Selection Marker Line */}
              <line
                x1={getX(budgetN)}
                y1={padding.top}
                x2={getX(budgetN)}
                y2={svgHeight - padding.bottom}
                stroke="#e2e8f0"
                strokeWidth="1.5"
                strokeDasharray="2 2"
                opacity="0.8"
              />

              {/* Gap annotation line at active N */}
              {divergenceGap > 2 && (
                <line
                  x1={getX(budgetN) + 6}
                  y1={getY(currentProxy)}
                  x2={getX(budgetN) + 6}
                  y2={getY(currentQuality)}
                  stroke="#f43f5e"
                  strokeWidth="2"
                />
              )}
            </svg>
          </div>

          {/* Metric telemetry cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-background-card p-4 rounded-xl border border-accent-blue/30">
              <div className="flex items-center justify-between text-xs text-scientific-muted font-mono mb-1">
                <span>PROXY REWARD SCORE</span>
                <span className="w-2 h-2 rounded-full bg-accent-blue"></span>
              </div>
              <div className="text-2xl font-bold text-accent-blue font-mono">
                {currentProxy.toFixed(1)}%
              </div>
              <div className="text-xs text-scientific-slate mt-1">
                Monotonically increases with search budget
              </div>
            </div>

            <div className="bg-background-card p-4 rounded-xl border border-accent-violet/30">
              <div className="flex items-center justify-between text-xs text-scientific-muted font-mono mb-1">
                <span>TASK CORRECTNESS</span>
                <span className="w-2 h-2 rounded-full bg-accent-violet"></span>
              </div>
              <div className="text-2xl font-bold text-accent-violet font-mono">
                {currentQuality.toFixed(1)}%
              </div>
              <div className="text-xs text-scientific-slate mt-1">
                {budgetN <= 16
                  ? 'Gains aligned with reward'
                  : 'Decoupling due to Goodhart boundary'}
              </div>
            </div>

            <div className="bg-background-card p-4 rounded-xl border border-rose-500/30">
              <div className="flex items-center justify-between text-xs text-rose-400 font-mono mb-1">
                <span>DIVERGENCE SPREAD</span>
                <span className="w-2 h-2 rounded-full bg-rose-500"></span>
              </div>
              <div className="text-2xl font-bold text-rose-400 font-mono">
                +{divergenceGap.toFixed(1)}%
              </div>
              <div className="text-xs text-scientific-slate mt-1">
                Disparity between proxy score and reality
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-6 p-6 bg-background-deep/60 rounded-xl border border-border text-scientific-slate space-y-4 text-sm leading-relaxed">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-accent-blue flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-white text-base mb-1">
                Goodhart's Law & Optimization Decoupling
              </h4>
              <p>
                When a measure becomes a target, it ceases to be a good measure. In learned reward modeling and test-time verifiers, the proxy reward function R̂(x, y) is an imperfect statistical estimator of the true intended task value R*(x, y).
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="bg-background-card p-4 rounded-lg border border-border">
              <h5 className="font-semibold text-accent-blue mb-1">Alignment Regime (Low N)</h5>
              <p className="text-xs text-scientific-slate">
                At small candidate sizes (e.g. N ≤ 8), candidates with higher proxy reward typically have genuinely superior reasoning and correctness. Sampling variance is bounded.
              </p>
            </div>
            <div className="bg-background-card p-4 rounded-lg border border-border">
              <h5 className="font-semibold text-rose-400 mb-1">Over-Optimization Regime (High N)</h5>
              <p className="text-xs text-scientific-slate">
                As N scales to 64 or 256, the search budget probes low-probability tails where spurious artifacts (length, pseudo-formalism, specific keywords) receive inflated scores despite false deductions.
              </p>
            </div>
          </div>

          <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-lg text-amber-200/90 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
            <span>
              <strong>Crucial Distinction:</strong> Reward–quality divergence denotes the measurable statistical separation of proxy and ground truth. It is not synonymous with deliberate adversarial hacking, though it often facilitates it.
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
