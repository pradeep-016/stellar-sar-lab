import { ResearchProject } from '../types';

export const projects: ResearchProject[] = [
  {
    id: 'associative-reward-model-arm',
    slug: 'arm',
    title: "Stellar ASION's Founding Research Project — Associative Reward Model (ARM)",
    shortTitle: 'Associative Reward Model (ARM)',
    status: 'In Progress / Founding Research Project',
    statusType: 'in-progress',
    presentationVenue: 'Inaugural Laboratory Research Project — Standalone Model Release Planned',
    overview:
      "The Associative Reward Model (ARM) is the founding research project undertaken under Stellar ASION. It investigates multi-dimensional preference supervision built upon an open Qwen3-8B foundation, engineered to supervise six distinct axes of model performance rather than collapsing complex evaluations into an uninterpretable scalar score.",
    researchQuestion:
      'Can explicit multi-dimensional preference supervision decouple stylistic surface features from substantive task correctness and mitigate single-axis reward gaming?',
    methodology: [
      'Pairwise preference objective with dimension-level cross-entropy supervision',
      'QLoRA 4-bit parameter-efficient fine-tuning on dual NVIDIA T4 GPU hardware',
      'Trained across 7,500 curated preference pairs with multi-attribute annotations',
      'Consistency regularization to penalize conflicting dimension signals',
      'Validation, checkpointing, and robust training resumption infrastructure',
      'Merged standalone checkpoint release (not an adapter-only release)',
    ],
    experimentalSetup: {
      hardware: 'Dual NVIDIA T4 GPUs (2x 16GB VRAM)',
      trainingData: '7,500 curated preference pairs with 6-dimensional supervision',
      optimization: 'QLoRA 4-bit quantization, pairwise preference loss + consistency regularization',
    },
    specifications: {
      'Project Designation': "Stellar ASION's Founding Research Project",
      'Foundation Backbone': 'Qwen3-8B',
      'Quantization Mode': '4-bit NormalFloat (NF4)',
      'Fine-tuning Framework': 'QLoRA (Quantized Low-Rank Adaptation)',
      'Training Dataset Size': '7,500 annotated preference pairs',
      'Compute Hardware': 'Dual NVIDIA T4 GPUs',
      'Model Architecture': 'Merged standalone checkpoint',
      'Supervision Scheme': '6-dimensional preference supervision + consistency loss',
    },
    dimensions: [
      {
        name: 'Instruction Adherence',
        description: 'Precise conformance to prompt constraints, format directives, and negative guidelines.',
        focus: 'Constraint satisfaction without omission',
      },
      {
        name: 'Relevance',
        description: 'Direct pertinence to the user query without extraneous divergence or off-topic verbosity.',
        focus: 'Information efficiency & alignment with query intent',
      },
      {
        name: 'Completeness',
        description: 'Comprehensive coverage of all requested components and required sub-tasks.',
        focus: 'Exhaustive resolution of multi-part prompts',
      },
      {
        name: 'Reasoning Validity',
        description: 'Soundness of deductive, inductive, and computational steps across the chain of thought.',
        focus: 'Absence of logical fallacies, arithmetic errors, and non-sequiturs',
      },
      {
        name: 'Task Correctness',
        description: 'Factual accuracy, algorithmic correctness, and verifiable truth of generated claims.',
        focus: 'Empirical correctness & domain precision',
      },
      {
        name: 'Communication Quality',
        description: 'Clarity, conciseness, structural organization, and accessibility of presentation.',
        focus: 'Editorial coherence without unwarranted fluff or deceptive eloquence',
      },
    ],
    benchmarkScores: [
      {
        benchmark: 'RM-Bench (Hard Style-Trap)',
        score: 67.09,
        description:
          'Achieved 67.09% accuracy vs Skywork-27B (54.00%), GPT-4o (52.80%), and ArmoRM-8B (46.80%).',
      },
      {
        benchmark: 'AllenAI RewardBench v1 Core',
        score: 89.88,
        description:
          'Overall Macro accuracy across 2,985 test pairs (Chat: 94.40%, Reasoning: 90.43%, Safety: 90.45%, General: 90.56%).',
      },
      {
        benchmark: 'JudgeBench',
        score: 62.5,
        description:
          'Evaluates discriminative calibration against complex preference comparisons and verification tests.',
      },
    ],
    limitations: [
      'Trained with 4-bit QLoRA on a 7,500 pair corpus; scaling to larger datasets remains ongoing research.',
      'Dual T4 hardware constraint informed the parameter budget and sequence context length limits.',
      'Reported benchmark results are individual evaluation runs and should not be directly cross-compared across different benchmarks.',
      'Standalone release is planned upon publication; currently undergoing validation and checkpoint preparation.',
    ],
    links: {
      huggingFace: 'https://huggingface.co/Stellar-lab/Stellar-Qwen3-8B-ARM',
      code: 'https://github.com/pradeep-016/stellar-sar-lab',
    },
  },
];
