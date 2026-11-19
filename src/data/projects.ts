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
      'Model is available as an open checkpoint release (not an adapter-only release)',
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
      'Model Status': 'Model is available',
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
        benchmark: 'AllenAI RewardBench 1',
        score: 89.08,
        description:
          '89.08% Macro-Avg across 2,985 test pairs (85.52% 50/50 Math+Code). Chat: 92.36%, Chat Hard: 83.20%, Safety: 90.21%, Reasoning: 90.54%.',
      },
      {
        benchmark: 'AllenAI RewardBench 2',
        score: 74.2,
        description:
          '74.20% Macro-Avg across 1,865 prompts and 8,977 completions (Factuality: 66.95%, Math: 65.03%, Safety: 93.33%, Focus: 96.97%).',
      },
      {
        benchmark: 'RM-Bench',
        score: 74.88,
        description:
          '74.88% Overall Average across 1,327 prompts in a 3x3 style matrix (Easy: 82.69%, Normal: 76.44%, Hard Style-Trap: 65.51%).',
      },
      {
        benchmark: 'JudgeBench',
        score: 62.5,
        description:
          '62.50% Micro-Avg across 620 pairs (GPT-4o split: 63.71%, Claude-3.5 split: 60.93%; Math: 74.11%, Coding: 65.07%).',
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
