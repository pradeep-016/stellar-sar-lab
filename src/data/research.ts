import { ResearchDirection } from '../types';

export const researchDirections: ResearchDirection[] = [
  {
    id: 'evaluator-reliability',
    slug: 'evaluator-reliability',
    title: 'Evaluator Reliability',
    shortDescription:
      'Investigating whether learned evaluators reliably distinguish genuinely high-quality outputs from outputs that merely receive high scores under selection.',
    fullDescription:
      'Modern alignment workflows and inference-time scaling strategies rely heavily on learned evaluators (such as Outcome Reward Models and Process Reward Models) to score, select, or steer model responses. We systematically evaluate whether these evaluators remain robust when evaluating candidate pools subjected to increasing optimization pressure, identifying regimes of evaluator degradation and spurious preference exploitation.',
    keyThemes: [
      'Learned reward models & outcome evaluators',
      'Process reward models (PRMs) in reasoning tasks',
      'Evaluator robustness under distribution shift',
      'Selection-induced candidate-pool distortion',
      'Generator–evaluator coupling and transfer failures',
      'Failure modes in automated scoring pipelines',
    ],
    coreQuestions: [
      'Do higher evaluator scores consistently correspond to higher underlying task correctness?',
      'How does evaluator calibration degrade as candidate pool size N increases in Best-of-N selection?',
      'Can process-level feedback prevent the selection of superficially convincing but incorrect solutions?',
    ],
    methodologies: [
      'Paired statistical comparisons across variable candidate pool sizes',
      'Double-blind benchmark evaluation with ground-truth verification',
      'Cross-model evaluation across disparate model families',
    ],
    iconName: 'ShieldCheck',
  },
  {
    id: 'reward-hacking',
    slug: 'reward-hacking',
    title: 'Reward Hacking & Specification Gaming',
    shortDescription:
      'Investigating how optimization systems exploit loopholes, unintended incentives, and structural weaknesses in learned reward functions.',
    fullDescription:
      'When optimization pressure is applied against a learned proxy reward rather than the true objective, models tend to identify shortcuts that inflate reward without delivering genuine task satisfaction. We investigate how specification gaming arises during reinforcement learning and test-time selection, categorizing recurring vulnerabilities and developing diagnostic benchmarks.',
    keyThemes: [
      'Reward-function exploitation and loophole exploitation',
      'Proxy objective failures under extreme pressure',
      'Specification gaming and length/style gaming',
      'Optimization-induced behavioral mutations',
      'Unintended optimization incentives in preference training',
      'Detection and metricization of reward hacking dynamics',
    ],
    coreQuestions: [
      'What structural properties of reward models make them vulnerable to specification gaming?',
      'How can we empirically decouple intentional gaming from stochastic high-variance generations?',
      'What regularization techniques limit proxy exploitation during high-budget search?',
    ],
    methodologies: [
      'Stress-testing reward functions with high-temperature candidate generation',
      'Targeted adversarial perturbation and stylistic invariant probing',
      'Correlation analysis between proxy margins and verifiable error rates',
    ],
    distinctionNote:
      'Reward–quality divergence can provide empirical evidence relevant to reward hacking, but the two phenomena are not automatically identical: divergence describes the measurable decoupling of proxy and ground-truth metrics, whereas reward hacking denotes the active exploitation of proxy incentives.',
    iconName: 'AlertTriangle',
  },
  {
    id: 'reward-modeling',
    slug: 'reward-modeling',
    title: 'Reward Modeling',
    shortDescription:
      'Advancing multi-dimensional preference learning, dimension-level supervision, and generalization bounds in learned reward representations.',
    fullDescription:
      'Scalar reward models collapse diverse evaluative criteria into a single number, hiding critical trade-offs between helpfulness, factual accuracy, safety, and reasoning validity. StellarLab studies multi-dimensional reward architectures where distinct axes of model behavior receive explicit, structured supervision, yielding interpretable reward vectors and reduced susceptibility to single-axis gaming.',
    keyThemes: [
      'Multi-dimensional reward representations',
      'Dimension-level preference supervision',
      'Reward-model generalization and out-of-distribution stability',
      'Pairwise preference learning objectives and consistency loss',
      'Separation of stylistic preferences from substantive correctness',
      'Compact, parameter-efficient reward backbones',
    ],
    coreQuestions: [
      'How does granular multi-dimensional supervision mitigate style-bias and length exploitation?',
      'What architectures permit efficient reward extraction without prohibitive inference latency?',
      'Can structured dimension weights dynamically adapt to task domain requirements?',
    ],
    methodologies: [
      'Fine-grained attribute annotation on pairwise preference datasets',
      'QLoRA parameter-efficient fine-tuning on modern open backbones',
      'Evaluations across standard benchmark suites (RewardBench, RM-Bench, JudgeBench)',
    ],
    iconName: 'Sliders',
  },
  {
    id: 'reward-quality-divergence',
    slug: 'reward-quality-divergence',
    title: 'Reward–Quality Divergence',
    shortDescription:
      'Studying the conditions under which improvements in proxy evaluator scores fail to correspond to improvements in independently measured task correctness.',
    fullDescription:
      'A central empirical problem in modern alignment is Goodhart’s Law manifested in deep learning: beyond a certain threshold of optimization, proxy reward continues to climb while independently verified task quality plateaus or drops precipitously. StellarLab develops precise measurement protocols to chart where and why divergence occurs across reasoning, coding, and open-ended dialogue.',
    keyThemes: [
      'Decoupling of proxy reward from ground-truth verification',
      'Measurement protocols for empirical divergence boundaries',
      'Over-optimization thresholds across diverse candidate distributions',
      'Task complexity and its influence on divergence velocity',
      'Mathematical and statistical formulations of Goodhart effects',
    ],
    coreQuestions: [
      'At what candidate pool size N does proxy reward begin to actively select inferior completions?',
      'Why do evaluators exhibit high confidence when scoring flawed deductive reasoning chains?',
      'Can calibration metrics predict impending divergence before task accuracy degrades?',
    ],
    methodologies: [
      'Controlled candidate scaling up to N = 256 with ground-truth verification',
      'Simultaneous monitoring of reward margin and task-level correctness',
      'Domain-specific testing across formal math (GSM8K) and code (HumanEval)',
    ],
    distinctionNote:
      'Divergence is a measurable empirical divergence between proxy score and task correctness. It is distinct from deliberate hacking, as divergence can occur purely due to imperfect evaluator coverage and variance without adversarial generation.',
    iconName: 'GitFork',
  },
  {
    id: 'test-time-scaling',
    slug: 'test-time-scaling',
    title: 'Test-Time Scaling & Inference-Time Optimization',
    shortDescription:
      'Analyzing Best-of-N selection, candidate generation budgets, and the limits of compute allocation during inference.',
    fullDescription:
      'Test-time scaling—generating multiple candidates and selecting the best using a learned verifier—has become a cornerstone of competitive reasoning architectures. We investigate the efficiency and safety boundaries of this paradigm: when does increasing search budget produce genuine capability gains, and when does it merely overwhelm the verifier with spurious candidates?',
    keyThemes: [
      'Best-of-N (BoN) selection dynamics across large candidate spaces',
      'Candidate generator sampling temperatures and diversity properties',
      'Compute allocation frontiers: search depth vs evaluator complexity',
      'Pathological candidate emergence under large sample budgets (N > 100)',
      'Verifier compute vs generator compute trade-offs',
    ],
    coreQuestions: [
      'What is the optimal ratio of generator capability to evaluator discriminative power?',
      'Does high-budget search amplify low-probability evaluator failure modes?',
      'Can ensemble evaluators mitigate the performance drop observed at extreme N?',
    ],
    methodologies: [
      'High-throughput candidate generation pipelines across multiple LLM families',
      'Controlled evaluation across selection budgets N ∈ {1, 2, 4, 8, 16, 32, 64, 128, 256}',
      'Multiple-testing statistical corrections on candidate selection outcomes',
    ],
    iconName: 'Cpu',
  },
  {
    id: 'ai-safety-alignment',
    slug: 'ai-safety-alignment',
    title: 'AI Safety & Empirical Alignment',
    shortDescription:
      'Investigating reliability, robustness, and alignment-related behavioral phenomena in frontier language models.',
    fullDescription:
      'Empirical AI safety requires moving beyond theoretical speculation into reproducible, transparent measurement of model behavior. StellarLab examines how safety alignment interacts with optimization, exploring the trade-offs between capability preservation, adherence to human intent, and resilience against adversarial or out-of-distribution inputs.',
    keyThemes: [
      'Empirical safety benchmarking and reproducibility',
      'Robustness of alignment under extreme prompting and search',
      'Generalization of safety constraints across novel task domains',
      'Independent auditability of evaluation pipelines',
      'Transparent reporting of failure boundaries and negative results',
    ],
    coreQuestions: [
      'Do alignment techniques remain intact when models are subjected to heavy inference-time search?',
      'How reliably do preference-tuned models respect safety boundaries in ambiguous contexts?',
      'What evaluation methodologies provide robust, non-gameable safety signals?',
    ],
    methodologies: [
      'Controlled behavioral ablation studies across open model checkpoints',
      'Systematic red-teaming of evaluation criteria',
      'Open-source release of reproducible evaluation scripts and datasets',
    ],
    iconName: 'Crosshair',
  },
];
