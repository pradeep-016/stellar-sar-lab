import { ResearchUpdate } from '../types';

export const updates: ResearchUpdate[] = [
  {
    id: 'aias-2026-workshop-acceptance',
    date: '2026-03-15',
    category: 'Acceptance',
    title: 'Paper Accepted at AIAS 2026 Workshop on Lifelong Agents (held with LLA 2026)',
    summary:
      'Research paper "Evaluator Reliability Under Test-Time Scaling" accepted for poster presentation at AIAS 2026.',
    content:
      'Controlled empirical evaluation investigating Goodhart divergence across candidate pools on GSM8K and HumanEval has been accepted for poster presentation at the AIAS 2026 Workshop on Lifelong Agents (in conjunction with LLA 2026). The work characterizes where proxy reward models decouple from verifiable task correctness under Best-of-N search.',
    links: [
      { label: 'View Publications Portfolio', url: '/publications' },
      { label: 'Replication Code on GitHub', url: 'https://github.com/pradeep-016' },
    ],
  },
  {
    id: 'stellar-asion-establishment',
    date: '2026-03-01',
    category: 'Announcement',
    title: 'Initiative Establishment: Stellar ASION',
    summary:
      'Stellar ASION establishes its independent research initiative investigating empirical AI safety, reward modeling, and evaluator reliability.',
    content:
      'Stellar ASION (Stellar Alignment, Safety, & Inference Optimized Networks) is established to investigate the reliability of learned objectives and evaluators used to guide increasingly capable AI systems. Operating as an independent empirical initiative, the research focuses on empirical rigor, open-source models, and transparent evaluation protocols.',
    links: [
      { label: 'About Stellar ASION', url: '/about' },
      { label: 'Explore Research Agenda', url: '/research' },
    ],
  },
  {
    id: 'arm-model-development-milestone',
    date: '2026-02-10',
    category: 'Model Development',
    title: 'Associative Reward Model (ARM) Training & Benchmark Evaluations',
    summary:
      'Benchmark evaluations completed for the Associative Reward Model (ARM), achieving 67.09% on RM-Bench and 89.88% on RewardBench v1.',
    content:
      'Training runs on dual NVIDIA T4 GPUs utilizing QLoRA 4-bit NormalFloat quantization across 7,500 curated preference pairs have concluded on an open Qwen3-8B foundation. Verified benchmark evaluations demonstrate 67.09% on RM-Bench (hard style-trap), outperforming Skywork-27B and GPT-4o, and 89.88% Macro accuracy on AllenAI RewardBench v1 Core (official harness v0.1.4, leaderboard PR pending). Standalone weights will be distributed openly.',
    relatedProjectId: 'associative-reward-model-arm',
    links: [
      { label: 'View ARM Project Specifications', url: '/projects' },
      { label: 'View Model Showcase', url: '/models' },
    ],
  },
];
