import React, { useState } from 'react';
import { Badge } from '../common/Badge';
import { CheckCircle2, XCircle, RefreshCw, AlertTriangle, ArrowRight } from 'lucide-react';

interface SimulatedCandidate {
  id: number;
  snippet: string;
  proxyScore: number;
  isCorrect: boolean;
  styleTrait: string;
  errorNote?: string;
}

export const BestOfNSimulator: React.FC = () => {
  const [budgetN, setBudgetN] = useState<4 | 8 | 16>(8);
  const [seed, setSeed] = useState<number>(1);

  // Generate illustrative candidate pool based on N and seed
  const generateCandidates = (n: number, s: number): SimulatedCandidate[] => {
    // Illustrative candidate bank showing realistic failure patterns
    const bank: SimulatedCandidate[] = [
      {
        id: 1,
        snippet: 'Step 1: Calculate total velocity v = 12 m/s. Step 2: Apply kinetic energy formula E = 0.5 * m * v^2 = 720 J.',
        proxyScore: 78.5,
        isCorrect: true,
        styleTrait: 'Concise & verified',
      },
      {
        id: 2,
        snippet: 'Let v_0 = 0. Velocity increases linearly. We integrate dv/dt over t=4s to yield final displacement s = 48m, leading to E = 720 J.',
        proxyScore: 82.1,
        isCorrect: true,
        styleTrait: 'Formal derivation',
      },
      {
        id: 3,
        snippet: 'The physical system satisfies conservation of momentum. Therefore E = 680 J due to frictional deceleration.',
        proxyScore: 71.0,
        isCorrect: false,
        styleTrait: 'Factual misconception',
        errorNote: 'Incorrect assumption regarding friction',
      },
      {
        id: 4,
        snippet: 'By Newton\'s second law F = ma = 120 N. Kinetic energy is 720 Joules exactly.',
        proxyScore: 79.8,
        isCorrect: true,
        styleTrait: 'Direct deduction',
      },
      {
        id: 5,
        snippet: 'Comprehensive analysis: Utilizing Hamiltonian mechanics and phase-space projections, the system evaluates to E = 720 J.',
        proxyScore: 84.6,
        isCorrect: true,
        styleTrait: 'High-vocabulary true',
      },
      {
        id: 6,
        snippet: 'Considering the boundary conditions at t=0 and t=4, the integral of power over time yields 710 J.',
        proxyScore: 73.4,
        isCorrect: false,
        styleTrait: 'Arithmetic flaw',
        errorNote: 'Integration error at boundary',
      },
      {
        id: 7,
        snippet: 'According to theorem 4.2 of classical dynamics, the total kinetic work done equals 720 Joules precisely.',
        proxyScore: 81.2,
        isCorrect: true,
        styleTrait: 'Theorem reference',
      },
      {
        id: 8,
        snippet: 'Exhaustive proof: Let us establish the tensor invariants. Through multi-step symbolic expansion, clearly E = 720 J.',
        proxyScore: 85.2,
        isCorrect: true,
        styleTrait: 'Elaborate formatting',
      },
      // Higher N pool introduces pathological high-scoring hallucinated candidates
      {
        id: 9,
        snippet: 'Lemma 1: Let the manifold be smooth. By applying Euler-Lagrange extremization, the work metric gives E = 740 J.',
        proxyScore: 87.8,
        isCorrect: false,
        styleTrait: 'Plausible pseudo-rigor',
        errorNote: 'Spurious mathematical apparatus obscuring false constant',
      },
      {
        id: 10,
        snippet: 'Step 1: Compute force. Step 2: Multiply by distance 60m. Final energy is 720 J.',
        proxyScore: 77.2,
        isCorrect: true,
        styleTrait: 'Brief answer',
      },
      {
        id: 11,
        snippet: 'Direct computation confirms the kinetic value of 720 J.',
        proxyScore: 76.0,
        isCorrect: true,
        styleTrait: 'Minimalist',
      },
      {
        id: 12,
        snippet: 'Highly thorough, pedagogical derivation with boxed latex formatting. Note however that 12^2 = 148, giving E = 740 J.',
        proxyScore: 89.5,
        isCorrect: false,
        styleTrait: 'Deceptive style trap',
        errorNote: 'Evaluator biased by formatting; missed arithmetic bug',
      },
      {
        id: 13,
        snippet: 'Standard formula evaluation: 0.5 * 10 * 144 = 720 J.',
        proxyScore: 80.0,
        isCorrect: true,
        styleTrait: 'Direct arithmetic',
      },
      {
        id: 14,
        snippet: 'Rigorous derivation of kinetic work in SI units yields 720 Joules.',
        proxyScore: 81.5,
        isCorrect: true,
        styleTrait: 'Clear style',
      },
      {
        id: 15,
        snippet: 'Assuming relativistic corrections apply at 12 m/s, gamma factor expands to give 720.00001 J.',
        proxyScore: 83.2,
        isCorrect: false,
        styleTrait: 'Irrelevant complexity',
        errorNote: 'Relativistic domain error',
      },
      {
        id: 16,
        snippet: 'Definitive academic breakdown with structured sections, citations, and polished layout. Concludes E = 745 J.',
        proxyScore: 91.8,
        isCorrect: false,
        styleTrait: 'Severe over-optimization outlier',
        errorNote: 'Superficially perfect reasoning chain with flawed conclusion',
      },
    ];

    // Sub-sample according to N with small perturbation from seed
    return bank.slice(0, n).map((c) => ({
      ...c,
      proxyScore: +(c.proxyScore + ((s % 3) - 1) * 0.4).toFixed(1),
    }));
  };

  const candidates = generateCandidates(budgetN, seed);

  // Best-of-N selects the candidate with the highest proxy score
  const selectedCandidate = [...candidates].sort((a, b) => b.proxyScore - a.proxyScore)[0];

  return (
    <div className="bg-background-surface/90 border border-border rounded-2xl p-6 md:p-8 backdrop-blur-md shadow-2xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-border">
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-1.5">
            <Badge variant="cyan" size="sm">
              CONCEPTUAL INTERACTIVE SIMULATION
            </Badge>
            <span className="text-xs text-scientific-muted font-mono">
              All Values Illustrative
            </span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-white font-display">
            Best-of-N Candidate Selection Mechanics
          </h3>
          <p className="text-xs sm:text-sm text-scientific-slate mt-1 max-w-xl">
            Simulating how an automated verifier selects candidates. Notice how increasing N raises the likelihood of selecting an outlier that scores high on proxy metrics despite containing subtle errors.
          </p>
        </div>

        <button
          onClick={() => setSeed((prev) => prev + 1)}
          className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-mono font-medium rounded-lg bg-background-elevated border border-border hover:border-slate-600 text-scientific-light transition-colors self-start sm:self-auto"
        >
          <RefreshCw className="w-3.5 h-3.5 text-accent-cyan" />
          Resample Pool
        </button>
      </div>

      {/* Control bar */}
      <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-background-card/80 p-4 rounded-xl border border-border">
        <div className="text-xs font-mono text-scientific-slate">
          SELECT SEARCH BUDGET (N CANDIDATES GENERATED):
        </div>
        <div className="flex items-center gap-2">
          {([4, 8, 16] as const).map((n) => (
            <button
              key={n}
              onClick={() => setBudgetN(n)}
              className={`px-3 py-1.5 text-xs font-mono rounded-lg border transition-all ${
                budgetN === n
                  ? 'bg-accent-blue/20 text-accent-blue border-accent-blue font-bold shadow-sm'
                  : 'bg-background-surface text-scientific-slate border-border hover:border-slate-600'
              }`}
            >
              N = {n}
            </button>
          ))}
        </div>
      </div>

      {/* Selected Winner Banner */}
      <div className="mt-6 p-5 rounded-xl border transition-all duration-300 bg-background-elevated/80 border-border">
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-accent-blue animate-pulse"></div>
            <span className="text-xs font-mono font-semibold text-accent-blue uppercase tracking-wider">
              Selected by Evaluator (argmax_i R(x, y_i))
            </span>
          </div>
          <Badge
            variant={selectedCandidate.isCorrect ? 'emerald' : 'amber'}
            size="sm"
            icon={
              selectedCandidate.isCorrect ? (
                <CheckCircle2 className="w-3.5 h-3.5" />
              ) : (
                <XCircle className="w-3.5 h-3.5" />
              )
            }
          >
            {selectedCandidate.isCorrect
              ? 'Ground Truth: Correct'
              : 'Ground Truth: Incorrect / Flawed'}
          </Badge>
        </div>

        <div className="text-sm font-mono text-scientific-light bg-background-deep/80 p-3.5 rounded-lg border border-border/80">
          "{selectedCandidate.snippet}"
        </div>

        <div className="mt-3 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
          <div className="flex items-center gap-4 text-scientific-slate">
            <span>
              Proxy Score: <strong className="text-accent-blue text-sm">{selectedCandidate.proxyScore}</strong>/100
            </span>
            <span>
              Style Profile: <span className="text-scientific-light">{selectedCandidate.styleTrait}</span>
            </span>
          </div>

          {!selectedCandidate.isCorrect && selectedCandidate.errorNote && (
            <div className="flex items-center gap-1.5 text-amber-300 bg-amber-500/10 px-2.5 py-1 rounded border border-amber-500/20">
              <AlertTriangle className="w-3.5 h-3.5 flex-shrink-0" />
              <span>{selectedCandidate.errorNote}</span>
            </div>
          )}
        </div>
      </div>

      {/* Candidate Pool Grid */}
      <div className="mt-6">
        <div className="text-xs font-mono text-scientific-muted uppercase tracking-wider mb-3 flex items-center justify-between">
          <span>Candidate Pool ({candidates.length} Samples Generated)</span>
          <span>Higher proxy score = higher evaluator confidence</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-80 overflow-y-auto pr-1">
          {candidates.map((c) => {
            const isWinner = c.id === selectedCandidate.id;
            return (
              <div
                key={c.id}
                className={`p-3.5 rounded-xl border text-xs font-mono transition-all ${
                  isWinner
                    ? 'bg-accent-blue/10 border-accent-blue/80 shadow-md shadow-accent-blue/5 ring-1 ring-accent-blue/40'
                    : 'bg-background-card/60 border-border/70 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-scientific-muted">#{c.id}</span>
                    <span className="text-white font-semibold">{c.proxyScore} pts</span>
                    {isWinner && (
                      <span className="text-[10px] bg-accent-blue text-background-deep px-1.5 py-0.5 rounded font-bold">
                        SELECTED
                      </span>
                    )}
                  </div>
                  <span
                    className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] ${
                      c.isCorrect
                        ? 'text-emerald-400 bg-emerald-500/10'
                        : 'text-rose-400 bg-rose-500/10'
                    }`}
                  >
                    {c.isCorrect ? 'Valid' : 'Flawed'}
                  </span>
                </div>

                <div className="text-scientific-slate line-clamp-2 leading-relaxed">
                  {c.snippet}
                </div>

                <div className="mt-2 pt-2 border-t border-border/40 text-[11px] text-scientific-muted flex items-center justify-between">
                  <span>{c.styleTrait}</span>
                  {c.errorNote && <span className="text-amber-400/80">⚠ Flawed</span>}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Takeaway footer */}
      <div className="mt-6 p-4 rounded-xl bg-background-deep/50 border border-border flex items-start gap-3 text-xs text-scientific-slate">
        <ArrowRight className="w-4 h-4 text-accent-cyan flex-shrink-0 mt-0.5" />
        <div>
          <strong className="text-white font-semibold">Key Empirical Observation:</strong> In large candidate pools, proxy evaluators without process-level task verification are susceptible to selecting solutions that mimic high-confidence rhetorical or stylistic features while committing fatal logical flaws.
        </div>
      </div>
    </div>
  );
};
