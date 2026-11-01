import { ResearchUpdate } from '../types';

export const updates: ResearchUpdate[] = [
  {
    id: 'aias-2026-workshop-acceptance',
    date: '2026-03-15',
    category: 'Acceptance',
    title: 'Paper Accepted at AIAS 2026 Workshop on Lifelong Agents (LLA)',
    summary:
      'Our paper "Evaluator Reliability in Language Models Under Test-Time Scaling" has been accepted for poster presentation at the AIAS 2026 Workshop on Lifelong Agents: Learning, Aligning, and Evolving (LLA).',
    content:
      'The paper presents empirical observations on Best-of-N selection and reward–quality divergence across GSM8K and HumanEval benchmarks, evaluating three candidate generators and multiple learned verifiers. Under DeepSeek PRM selection, Llama 3.1 8B Instruct demonstrated a decline in observed accuracy from 80.4% at N = 8 to 72.2% at N = 256 despite expanding proxy reward margins. We look forward to presenting these findings and engaging with the community at AIAS 2026.',
    relatedProjectId: 'evaluator-reliability-tts',
    links: [
      { label: 'View Project Details', url: '/projects#evaluator-reliability' },
    ],
  },
  {
    id: 'arm-model-development-milestone',
    date: '2026-02-10',
    category: 'Model Development',
    title: 'Associative Reward Model (ARM) Training & Initial Evaluation',
    summary:
      'Initial benchmark evaluations completed for the Associative Reward Model (ARM) based on the Qwen3-8B foundation with six-dimensional preference supervision.',
    content:
      'Training runs on dual NVIDIA T4 GPUs utilizing QLoRA 4-bit quantization across 7,500 curated preference pairs have concluded. Reported benchmark results include 89.2 on RewardBench Evaluation 1, 74.4 on RewardBench Evaluation 2, 65.6 on RM-Bench (hard style-trap), and 62.5 on JudgeBench. Model checkpoints will be released as merged standalone weights upon peer-reviewed publication.',
    relatedProjectId: 'associative-reward-model-arm',
    links: [
      { label: 'View Model Specifications', url: '/models' },
    ],
  },
];
