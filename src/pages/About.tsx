import React from 'react';
import { siteConfig } from '../config/site';
import { Badge } from '../components/common/Badge';
import { ResearchPipelineWorkflow } from '../components/visualizations/ResearchPipelineWorkflow';
import {
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  FileCode,
  Search,
  Scale,
  Target,
  Layers,
  Sparkles,
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const About: React.FC = () => {
  const principles = [
    {
      title: 'Independent Task-Level Evaluation',
      desc: 'Ground-truth verification must never rely on circular self-evaluation by the model family being evaluated. We employ verifiable formal benchmarks (e.g., GSM8K mathematical deductions, HumanEval functional tests) to maintain an unassailable baseline.',
      icon: <CheckCircle2 className="w-5 h-5 text-accent-blue" />,
    },
    {
      title: 'Controlled Experimental Design',
      desc: 'Every parameter—from temperature and prompt scaffolding to sampling budgets N ∈ {1..256}—is held under strict control to isolate evaluator variance from stochastic sampling noise.',
      icon: <Target className="w-5 h-5 text-accent-cyan" />,
    },
    {
      title: 'Statistical Rigor & Correction',
      desc: 'Candidate selection across large budgets introduces multiple-testing hazards. We apply formal paired statistical comparisons and multiple-testing corrections before claiming performance shifts.',
      icon: <Scale className="w-5 h-5 text-accent-violet" />,
    },
    {
      title: 'Transparent Reporting & Open Checkpoints',
      desc: 'Scientific progress requires total reproducibility. We publish full evaluation scripts, exact hyperparameters, and standalone merged model weights rather than un-auditable closed APIs or adapter-only snapshots.',
      icon: <FileCode className="w-5 h-5 text-emerald-400" />,
    },
    {
      title: 'Explicit Limitations & Boundary Conditions',
      desc: 'We strictly state what our findings do not prove. Negative results, non-generalizable configurations, and specific generator-evaluator pairings are documented with scientific candor.',
      icon: <AlertCircle className="w-5 h-5 text-amber-400" />,
    },
    {
      title: 'Decoupling Metrics from Marketing',
      desc: 'We distinguish measurable empirical divergence from hyperbolic claims of universal model collapse. We report reported benchmark scores without fabricated rankings or superiority narratives.',
      icon: <ShieldCheck className="w-5 h-5 text-sky-400" />,
    },
  ];

  return (
    <div className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <Badge variant="blue" size="sm">
            ABOUT THE LABORATORY
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mt-3 mb-6 font-display">
            Empirical AI Safety Through Systematic Measurement
          </h1>
          <p className="text-lg text-scientific-slate leading-relaxed">
            StellarLab ({siteConfig.fullName}) is an independent research initiative investigating how learned objectives and automated evaluators behave when subjected to optimization pressure.
          </p>
        </div>

        {/* MISSION & PHILOSOPHY */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-stretch">
          <div className="lg:col-span-7 bg-background-surface/80 border border-border rounded-2xl p-8 md:p-10 backdrop-blur-md">
            <span className="text-xs font-mono text-accent-cyan uppercase tracking-wider block mb-3">
              OUR SCIENTIFIC MISSION
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5 font-display">
              Advancing Empirical AI Safety & Alignment
            </h2>
            <div className="space-y-4 text-scientific-slate text-sm sm:text-base leading-relaxed">
              <p>
                As frontier artificial intelligence systems scale in capability, their post-training alignment, reinforcement learning, and inference-time search increasingly depend on learned evaluators—including outcome reward models, process reward models (PRMs), and automated judges.
              </p>
              <p>
                Our mission is to advance the empirical understanding of these evaluators: charting their failure boundaries, measuring Goodhart divergence under selection pressure, and creating multi-dimensional reward architectures capable of robust generalization.
              </p>
              <p>
                We operate as an independent research initiative, prioritizing rigorous methodology, open-source code and model releases, and reproducible peer-reviewed workshop contributions.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 bg-background-card/90 border border-accent-blue/30 rounded-2xl p-8 md:p-10 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono text-accent-blue uppercase tracking-wider block mb-3">
                CENTRAL RESEARCH HYPOTHESIS
              </span>
              <h3 className="text-xl font-bold text-white mb-4 font-display">
                Optimization Pressure Exposes Evaluator Blind Spots
              </h3>
              <p className="text-sm text-scientific-slate leading-relaxed mb-6">
                Learned evaluators that appear well-calibrated on static validation sets frequently fail under search pressure (e.g. Best-of-N candidate selection). When models generate larger candidate pools (N &gt; 16), the probability of generating a completion that exploits evaluator biases increases, leading to a decoupling of proxy reward and verifiable task correctness.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-background-deep border border-border text-xs font-mono text-scientific-muted">
              <span className="text-white block font-semibold mb-1">
                Institutional Clarification:
              </span>
              StellarLab is an independent research initiative. We do not falsely represent ourselves as a registered university department, corporation, or formally affiliated institute.
            </div>
          </div>
        </div>

        {/* METHODOLOGICAL PRINCIPLES */}
        <div className="mb-20">
          <div className="max-w-3xl mb-12">
            <Badge variant="cyan" size="sm">
              STANDARDS & RIGOR
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mt-3 mb-4 font-display">
              Research Philosophy & Principles
            </h2>
            <p className="text-base text-scientific-slate">
              Every experiment conducted at StellarLab adheres to six foundational methodological commitments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map((p) => (
              <div
                key={p.title}
                className="bg-background-surface/80 border border-border hover:border-slate-700 rounded-xl p-6 transition-all"
              >
                <div className="p-2.5 rounded-lg bg-background-elevated border border-border inline-block mb-4">
                  {p.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-2 font-display">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm text-scientific-slate leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* WORKFLOW PIPELINE INTERACTIVE COMPONENT */}
        <div className="mb-20">
          <ResearchPipelineWorkflow />
        </div>

        {/* LONG-TERM DIRECTION & AMBITION */}
        <div className="bg-gradient-to-br from-background-card via-background-surface to-background-card border border-border rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl">
            <Badge variant="violet" size="sm">
              LOOKING AHEAD
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-3 mb-4 font-display">
              Long-Term Research Direction
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-scientific-slate leading-relaxed">
              <p>
                As AI development transitions towards extensive inference-time reasoning and autonomous agent loops, the evaluator becomes the primary bottleneck for safe intelligence. A flawed evaluator directing thousands of inference-time search steps will systematically amplify erroneous trajectories.
              </p>
              <p>
                StellarLab’s long-term objective is to build the theoretical and empirical foundations for evaluators that remain robust under arbitrary optimization pressure. We aim to replace brittle scalar reward functions with structured, multi-dimensional evaluators that provide transparent, calibrated guarantees.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/research"
                className="px-6 py-3 rounded-xl font-mono text-xs font-bold bg-accent-blue text-background-deep hover:bg-sky-300 transition-colors"
              >
                Explore Active Research Directions →
              </Link>
              <Link
                to="/projects"
                className="px-6 py-3 rounded-xl font-mono text-xs font-semibold bg-background-elevated border border-border text-white hover:border-slate-600 transition-colors"
              >
                View Project Implementations
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
