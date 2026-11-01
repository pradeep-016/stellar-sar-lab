import { ResearchDirection } from '../types';

export const researchDirections: ResearchDirection[] = [
  {
    id: 'ai-safety-alignment',
    slug: 'ai-safety-alignment',
    title: 'AI Safety & Alignment',
    shortDescription:
      'Investigating reliability, robustness, and alignment dynamics as intelligent systems increase in reasoning capability and autonomous agency.',
    fullDescription:
      'As artificial intelligence systems are tasked with longer reasoning chains and autonomous decision-making, ensuring their behaviors remain aligned with human intent is paramount. StellarLab investigates the fundamental structural and empirical challenges of alignment, focusing on verifiable safety bounds, robust adherence to constraints, and failure modes that emerge under strong optimization.',
    keyThemes: [
      'Empirical AI safety methodologies and diagnostic benchmarks',
      'Robustness of alignment under extreme prompting and test-time search',
      'Preservation of intent across open-domain and distribution-shifted tasks',
      'Auditability and interpretability of learned reward representations',
      'De-escalation of deceptive alignment and surface-level compliance',
    ],
    coreQuestions: [
      'How do alignment guarantees hold up when models are steered by learned evaluators rather than direct ground-truth supervision?',
      'What mechanisms reliably differentiate genuine understanding of safety constraints from opportunistic surface conformity?',
      'How can alignment techniques prevent models from discovering catastrophic shortcuts during inference?',
    ],
    methodologies: [
      'Systematic behavioral stress-testing across diverse prompt distributions',
      'Targeted red-teaming of preference models and verifiers',
      'Controlled ablation of alignment constraints during search',
    ],
    iconName: 'Crosshair',
  },
  {
    id: 'reward-modeling',
    slug: 'reward-modeling',
    title: 'Reward Modeling',
    shortDescription:
      'Advancing multi-dimensional preference learning, dimension-level supervision, and generalization bounds in learned reward representations.',
    fullDescription:
      'Standard alignment workflows frequently compress complex qualitative judgments into a single scalar score, obscuring critical trade-offs between helpfulness, factual accuracy, safety, and reasoning validity. StellarLab focuses on decomposed, multi-dimensional reward architectures (such as the Associative Reward Model) where distinct axes receive structured supervision, yielding interpretable vector signals and resilience against single-axis gaming.',
    keyThemes: [
      'Multi-dimensional reward representations and decomposed preference heads',
      'Dimension-level preference supervision and cross-entropy loss formulation',
      'Consistency regularization to penalize conflicting dimension signals',
      'Separation of stylistic cues (length, tone) from substantive correctness',
      'Compact, parameter-efficient reward backbones (QLoRA NF4)',
    ],
    coreQuestions: [
      'How does fine-grained multi-dimensional supervision prevent evaluators from developing style and length biases?',
      'What loss formulations ensure that individual evaluative dimensions maintain mutual consistency?',
      'Can parameter-efficient fine-tuning on open backbones rival full-parameter reward models in discriminative accuracy?',
    ],
    methodologies: [
      'Curated preference datasets with multi-attribute annotations',
      'QLoRA 4-bit fine-tuning on foundation models (e.g. Qwen3-8B)',
      'Evaluation across standardized benchmark suites (RewardBench, RM-Bench, JudgeBench)',
    ],
    iconName: 'Sliders',
  },
  {
    id: 'reward-hacking',
    slug: 'reward-hacking',
    title: 'Reward Hacking & Specification Gaming',
    shortDescription:
      'Investigating how optimization systems exploit weaknesses, loopholes, and unintended incentives in learned reward functions.',
    fullDescription:
      'When optimization pressure is applied against a learned proxy reward rather than the true objective, models tend to identify shortcuts that inflate reward without delivering genuine task satisfaction. StellarLab studies how specification gaming arises during reinforcement learning and inference-time selection, categorizing recurring vulnerabilities and developing diagnostic benchmarks.',
    keyThemes: [
      'Reward-function exploitation and unintended proxy loopholes',
      'Specification gaming through superficial verbosity, formatting, or sycophancy',
      'Optimization-induced behavioral changes under repeated search',
      'Unintended optimization incentives in pairwise preference objectives',
      'Detection protocols and diagnostic metrics for proxy gaming dynamics',
    ],
    coreQuestions: [
      'What structural properties of learned reward models make them systematically vulnerable to specification gaming?',
      'How can we empirically differentiate genuine reasoning capability from proxy reward exploitation?',
      'What regularization and supervision strategies mitigate gaming during high-budget inference?',
    ],
    methodologies: [
      'Adversarial perturbation of stylistic and formatting invariants',
      'Analysis of reward margin shifts against verifiable correctness',
      'Stress-testing reward representations with high-temperature candidate generation',
    ],
    distinctionNote:
      'Reward–quality divergence can provide empirical evidence relevant to reward hacking, but the two phenomena are not automatically identical: divergence describes the measurable decoupling of proxy and ground-truth metrics, whereas reward hacking denotes the active exploitation of proxy incentives.',
    iconName: 'AlertTriangle',
  },
  {
    id: 'evaluator-reliability',
    slug: 'evaluator-reliability',
    title: 'Evaluator Reliability & Robustness',
    shortDescription:
      'Investigating whether learned evaluators reliably distinguish genuinely high-quality outputs from outputs that merely receive high scores.',
    fullDescription:
      'Both reinforcement learning from human feedback (RLHF) and test-time candidate selection rely on learned evaluators to score completions. StellarLab investigates the robustness and calibration of these evaluators: identifying when automated scoring systems fail to generalize, how candidate-pool composition affects discriminative accuracy, and how to build evaluators that resist distribution shifts.',
    keyThemes: [
      'Calibration of outcome reward models and process reward models',
      'Evaluator robustness under out-of-distribution candidate pools',
      'Selection-induced candidate distribution shifts',
      'Evaluator–generator coupling and transfer degradation',
      'Automated judge reliability and preference consistency',
    ],
    coreQuestions: [
      'Do higher evaluator scores consistently correspond to higher underlying task correctness?',
      'How does evaluator calibration degrade as candidate pool size scales during search?',
      'Can process-level feedback prevent the selection of superficially convincing but incorrect solutions?',
    ],
    methodologies: [
      'Double-blind benchmark evaluation with verifiable ground truth',
      'Cross-model evaluation across disparate model families',
      'Statistical calibration analysis across variable candidate distributions',
    ],
    iconName: 'ShieldCheck',
  },
  {
    id: 'reward-quality-divergence',
    slug: 'reward-quality-divergence',
    title: 'Reward–Quality Divergence',
    shortDescription:
      'Studying the conditions under which improvements in proxy evaluator scores fail to correspond to improvements in independently measured task correctness.',
    fullDescription:
      'A central empirical problem in modern alignment is Goodhart’s Law manifested in deep learning: beyond a certain threshold of optimization, proxy reward continues to climb while independently verified task quality plateaus or drops precipitously. StellarLab studies the boundary conditions under which proxy objectives decouple from intended task quality.',
    keyThemes: [
      'Decoupling of proxy reward from ground-truth verification',
      'Measurement protocols for empirical divergence boundaries',
      'Over-optimization thresholds across diverse candidate distributions',
      'Mathematical and statistical formulations of Goodhart effects',
      'Task complexity and its influence on divergence velocity',
    ],
    coreQuestions: [
      'Under what candidate generation conditions does proxy reward begin selecting inferior completions?',
      'Why do evaluators exhibit high confidence when scoring flawed deductive reasoning chains?',
      'Can calibration metrics predict impending divergence before task quality degrades?',
    ],
    methodologies: [
      'Simultaneous monitoring of reward margin and task-level correctness',
      'Domain-specific evaluation across formal reasoning and code generation',
      'Controlled candidate scaling protocols with ground-truth verification',
    ],
    distinctionNote:
      'Divergence is a measurable decoupling between proxy score and task correctness. It is distinct from deliberate hacking, as divergence can occur purely due to imperfect evaluator coverage and variance without adversarial generation.',
    iconName: 'GitFork',
  },
  {
    id: 'optimization-failures',
    slug: 'optimization-failures',
    title: 'Optimization-Induced Failures & Search Limits',
    shortDescription:
      'Analyzing Best-of-N selection, candidate generation budgets, and the limits of compute allocation during inference.',
    fullDescription:
      'Inference-time search—generating multiple candidates and selecting using a learned verifier—is a dominant paradigm for advanced reasoning. StellarLab investigates the safety boundaries of this paradigm: when does increasing search budget produce genuine capability gains, and when does it merely overwhelm the verifier with spurious candidates that exploit blind spots?',
    keyThemes: [
      'Best-of-N selection dynamics across expanding candidate pools',
      'Pathological candidate emergence under large sample budgets',
      'Inference-time compute allocation frontiers: search budget vs verifier complexity',
      'Verifier compute vs generator compute trade-offs',
      'Statistical corrections for multiple candidate comparisons',
    ],
    coreQuestions: [
      'What is the optimal ratio of generator capability to evaluator discriminative power?',
      'Does high-budget search amplify low-probability evaluator failure modes?',
      'Can multi-dimensional evaluation prevent performance degradation under high selection budgets?',
    ],
    methodologies: [
      'High-throughput candidate generation pipelines across open LLMs',
      'Controlled evaluation across selection budgets N ∈ {1, 2, 4, 8, 16, 32, 64, 128, 256}',
      'Multiple-testing statistical corrections on candidate selection outcomes',
    ],
    iconName: 'Cpu',
  },
];
