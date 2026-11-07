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
        name: 'RM-Bench (Hard Style-Trap)',
        score: 67.09,
        evalType: 'Adversarial Stylistic Challenge (Self-Evaluated)',
        context:
          'Achieved 67.09% accuracy vs Skywork-27B (54.00%), GPT-4o (52.80%), and ArmoRM-8B (46.80%). Baselines from public leaderboard.',
      },
      {
        name: 'AllenAI RewardBench v1',
        score: 89.88,
        evalType: 'Primary Evaluation Suite (Self-Evaluated Protocol)',
        context:
          'Evaluated locally with official reward-bench harness (v0.1.4). Leaderboard PR pending. Chat: 94.40%, Reasoning: 90.43%, Safety: 90.45%, Prior Sets: 84.24%.',
      },
      {
        name: 'JudgeBench',
        score: 62.5,
        evalType: 'Complex Judgment Calibration',
        context:
          'Assesses calibration against nuanced human and algorithmic preference judgments.',
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
