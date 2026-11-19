import { ModelRelease } from '../types';

export const models: ModelRelease[] = [
  {
    id: 'arm-qwen3-8b',
    name: 'Associative Reward Model (ARM)',
    codename: 'ARM-Qwen3-8B',
    tagline: 'Multi-Dimensional Preference Supervision & Decomposed Reward Evaluation',
    backbone: 'Qwen3-8B',
    status: 'In Progress / Release Planned Upon Publication',
    isStandalone: true,
    overview:
      "Associative Reward Model (ARM) is the founding research model developed under Stellar ASION on an open Qwen3-8B backbone. Unlike scalar reward models that collapse multi-faceted qualitative judgments into an uninterpretable single score, ARM decomposes evaluation across six structured dimensions: instruction adherence, relevance, completeness, reasoning validity, task correctness, and communication quality.",
    architectureDetails: {
      backbone: 'Qwen3-8B',
      quantization: '4-bit NormalFloat (NF4) base weights',
      finetuning: 'QLoRA parameter-efficient adaptation',
      hardware: 'Dual NVIDIA T4 GPUs (2x 16GB)',
      preferencePairs: 7500,
      trainingObjective:
        'Pairwise preference loss with dimension-level cross-entropy and consistency regularization',
      dataPipeline:
        '10-shard partitioned preference reservoir featuring cryptographic prompt-hash deduplication (True Train-Test Overlap: 0), calculator cheat-token sanitization (clean_math_text), adversarial mutation engines (VERBOSE_TEMPLATES) for style-trap inoculation, and 7-regime length-ratio balancing.',
    },
    supervisionDimensions: [
      {
        name: 'Instruction Adherence',
        description:
          'Evaluates whether the candidate faithfully satisfies explicit formatting requirements, negative instructions, and contextual guidelines.',
        importance: 'Prevents omission of critical constraints during high-temperature generation.',
      },
      {
        name: 'Relevance',
        description:
          'Measures information density and contextual relevance to the user prompt, penalizing off-topic tangents.',
        importance: 'Restrains unnecessary conversational drift and fluff.',
      },
      {
        name: 'Completeness',
        description:
          'Assesses coverage across all clauses and multi-part requirements of complex instructions.',
        importance: 'Ensures thorough answers to compound analytical questions.',
      },
      {
        name: 'Reasoning Validity',
        description:
          'Analyzes step-by-step logic, mathematical derivation, and deductive coherence across the response.',
        importance: 'Filters out superficially plausible but mathematically defective deductions.',
      },
      {
        name: 'Task Correctness',
        description:
          'Validates verifiable empirical facts, programmatic output correctness, and domain-specific precision.',
        importance: 'Direct measure of factual and algorithmic ground truth.',
      },
      {
        name: 'Communication Quality',
        description:
          'Measures structural formatting, clarity, linguistic precision, and pedagogical effectiveness.',
        importance: 'Distinguishes genuinely clear explanations from verbose pseudo-sophistication.',
      },
    ],
    benchmarkResults: [
      {
        name: 'AllenAI RewardBench 1',
        score: 89.08,
        evalType: 'Primary Evaluation Suite (Macro-Average)',
        context:
          'Evaluated locally with official reward-bench harness across 2,985 test pairs (23 subsets). Reached 89.08% Subset Macro-Avg (85.52% with 50/50 Math+Code weighting). Chat: 92.36%, Chat Hard: 83.20%, Safety: 90.21%, Reasoning: 90.54%.',
      },
      {
        name: 'AllenAI RewardBench 2',
        score: 74.2,
        evalType: 'Hard Reasoning & Instruction-Following Suite',
        context:
          'Evaluated across 1,865 prompts (8,977 completions across 6 domains). Reached 74.20% Overall Macro-Avg (random baseline: 25.00%). Factuality: 66.95%, Precise IF: 45.00%, Math: 65.03%, Safety: 93.33%, Focus: 96.97%, Ties: 77.94%.',
      },
      {
        name: 'RM-Bench (Overall Matrix)',
        score: 74.88,
        evalType: 'Multi-Style Matrix Evaluation',
        context:
          'Evaluated across 1,327 prompts using a 3x3 style matrix. Overall Average: 74.88% (Easy: 82.69%, Normal: 76.44%, Hard Style-Trap: 65.51%).',
      },
      {
        name: 'JudgeBench',
        score: 62.5,
        evalType: 'Complex Judgment Calibration',
        context:
          'Evaluated across 620 pairs (350 GPT-4o + 270 Claude-3.5). Reached 62.50% Micro-Avg. Math: 74.11%, Coding: 65.07%, Reasoning: 60.40%, Knowledge: 58.39%.',
      },
    ],
    intendedApplications: [
      'Empirical research on multi-dimensional reward modeling and preference decomposition.',
      'Diagnostic evaluation of candidate outputs in inference-time scaling workflows.',
      'Ablation studies contrasting scalar vs vector reward representations.',
      'Detection of single-axis specification gaming (e.g., style bias vs correctness trade-offs).',
    ],
    limitations: [
      'Trained on a curated set of 7,500 pairs; broader open-domain coverage is an ongoing research effort.',
      'Quantized 4-bit base weights introduce slight precision trade-offs compared to full-precision 16-bit representations.',
      'Dual T4 hardware constraint shaped context window optimization choices.',
      'Results are reported without ranking claims or superiority assertions over other architectures.',
    ],
    access: {
      huggingFaceUrl: 'https://huggingface.co/Stellar-lab/Stellar-Qwen3-8B-ARM',
      modelType: 'Reward Model (Causal LM Head with Decomposed Projection)',
      checkpointType: 'Model Available (Weights fully integrated)',
      license: 'Research Open-Source (Apache 2.0)',
    },
  },
];
