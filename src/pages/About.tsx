import React from 'react';
import { siteConfig } from '../config/site';
import { Badge } from '../components/common/Badge';
import { ResearchPipelineWorkflow } from '../components/visualizations/ResearchPipelineWorkflow';
import {
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  FileCode,
  Scale,
  Target,
  Sparkles,
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const About: React.FC = () => {
  const principles = [
    {
      title: 'Independent Task-Level Evaluation',
      desc: 'Ground-truth verification must never rely on circular self-evaluation by the model family being evaluated. We employ verifiable formal benchmarks to maintain an unassailable empirical baseline.',
      icon: <CheckCircle2 className="w-5 h-5 text-accent-blue" />,
    },
    {
      title: 'Controlled Experimental Design',
      desc: 'Every parameter—from temperature and prompt scaffolding to sampling budgets—is held under strict control to isolate evaluator variance from stochastic sampling noise.',
      icon: <Target className="w-5 h-5 text-accent-cyan" />,
    },
    {
      title: 'Statistical Rigor & Significance',
      desc: 'Candidate selection across large budgets introduces multiple-testing hazards. We apply formal statistical comparisons and corrections before claiming performance shifts.',
      icon: <Scale className="w-5 h-5 text-accent-violet" />,
    },
    {
      title: 'Transparent Reporting & Open Checkpoints',
      desc: 'Scientific progress requires total reproducibility. We publish full evaluation scripts, exact hyperparameters, and standalone merged model weights rather than un-auditable closed snapshots.',
      icon: <FileCode className="w-5 h-5 text-emerald-400" />,
    },
    {
      title: 'Explicit Limitations & Boundary Conditions',
      desc: 'We strictly state what our findings do not prove. Negative results, non-generalizable configurations, and specific generator-evaluator pairings are documented with scientific candor.',
      icon: <AlertCircle className="w-5 h-5 text-amber-400" />,
    },
    {
      title: 'Decoupling Metrics from Marketing',
      desc: 'We distinguish measurable empirical divergence from hyperbolic claims of universal model collapse. We report benchmark scores without fabricated rankings or superiority narratives.',
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
            A New Independent Initiative for Empirical AI Safety
          </h1>
          <p className="text-lg text-scientific-slate leading-relaxed">
            StellarLab ({siteConfig.fullName}) is a newly established independent research initiative investigating how learned objectives, reward models, and automated evaluators behave when subjected to optimization pressure.
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
                As frontier artificial intelligence systems scale in capability, their post-training alignment, reinforcement learning, and inference-time search increasingly depend on learned evaluators—including outcome reward models, process verifiers, and automated judges.
              </p>
              <p>
                Our mission is to advance the empirical understanding of these evaluators: charting their failure boundaries, measuring Goodhart divergence under selection pressure, and developing multi-dimensional reward architectures capable of robust generalization.
              </p>
              <p>
                StellarLab’s research journey begins with our founding project: the <strong>Associative Reward Model (ARM)</strong>. We operate as an independent research initiative, prioritizing empirical rigor, open-source models, and transparent evaluation protocols.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 bg-background-card/90 border border-accent-blue/30 rounded-2xl p-8 md:p-10 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono text-accent-blue uppercase tracking-wider block mb-3">
                CENTRAL RESEARCH QUESTION
              </span>
              <h3 className="text-xl font-bold text-white mb-4 font-display">
                How Reliable Are Learned Objectives Under Optimization?
              </h3>
              <p className="text-sm text-scientific-slate leading-relaxed mb-6">
                Learned evaluators that appear well-calibrated on static test sets frequently degrade when models face optimization pressure. Understanding where and why objectives decouple from genuine task intent is the central empirical question guiding our laboratory.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-background-deep border border-border text-xs font-mono text-scientific-muted space-y-1.5">
              <span className="text-white block font-semibold">
                Institutional Clarification & Scope:
              </span>
              <p>
                StellarLab is a newly founded independent research initiative. Its research portfolio begins with the ARM project. Prior independent research projects by the founder were conducted as personal research activities and are strictly separate from StellarLab’s institutional outputs.
              </p>
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
              Every empirical inquiry conducted at StellarLab adheres to six foundational methodological commitments.
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

        {/* LONG-TERM DIRECTION & INITIATION */}
        <div className="bg-gradient-to-br from-background-card via-background-surface to-background-card border border-border rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl">
            <Badge variant="violet" size="sm">
              RESEARCH ROADMAP
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-3 mb-4 font-display">
              Founding Journey & Future Directions
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-scientific-slate leading-relaxed">
              <p>
                As AI models transition toward autonomous agent loops and deep inference-time search, the evaluator becomes the primary bottleneck for safe intelligence. Flawed evaluators steering multi-step search will systematically amplify deceptive or incorrect trajectories.
              </p>
              <p>
                StellarLab’s long-term objective is to build the theoretical and empirical foundations for evaluators that remain robust under arbitrary optimization pressure, beginning with decomposed multi-dimensional supervision in ARM.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/projects#arm"
                className="px-6 py-3 rounded-xl font-mono text-xs font-bold bg-accent-blue text-background-deep hover:bg-sky-300 transition-colors"
              >
                Explore Founding Project: ARM →
              </Link>
              <Link
                to="/research"
                className="px-6 py-3 rounded-xl font-mono text-xs font-semibold bg-background-elevated border border-border text-white hover:border-slate-600 transition-colors"
              >
                View Research Directions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
