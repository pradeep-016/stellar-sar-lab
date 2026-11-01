import { ResearchUpdate } from '../types';

export const updates: ResearchUpdate[] = [
  {
    id: 'stellarlab-founding-announcement',
    date: '2026-03-01',
    category: 'Announcement',
    title: 'Establishment of Stellar Safety & Alignment Research Lab',
    summary:
      'StellarLab announces its establishment as an independent research initiative focused on empirical AI safety, reward modeling, and evaluator reliability.',
    content:
      'StellarLab is founded to investigate the reliability of learned objectives and evaluators used to guide increasingly capable AI systems. Operating as an independent scientific initiative, the laboratory will focus on empirical rigor, open-source models, and transparent evaluation protocols, beginning with its inaugural project: the Associative Reward Model (ARM).',
    links: [
      { label: 'About StellarLab', url: '/about' },
      { label: 'Explore Research Agenda', url: '/research' },
    ],
  },
  {
    id: 'arm-model-development-milestone',
    date: '2026-02-10',
    category: 'Model Development',
    title: 'Associative Reward Model (ARM) Training & Benchmark Runs',
    summary:
      'Initial benchmark evaluations completed for the Associative Reward Model (ARM), the founding research project of StellarLab.',
    content:
      'Initial training runs on dual NVIDIA T4 GPUs utilizing QLoRA 4-bit NormalFloat quantization across 7,500 curated preference pairs have concluded. Reported benchmark results include 89.2 on RewardBench Evaluation 1, 74.4 on RewardBench Evaluation 2, 65.6 on RM-Bench (hard style-trap), and 62.5 on JudgeBench. Model checkpoints will be released as merged standalone weights upon formal publication.',
    relatedProjectId: 'associative-reward-model-arm',
    links: [
      { label: 'View ARM Project Specifications', url: '/projects#arm' },
      { label: 'View Model Showcase', url: '/models' },
    ],
  },
];
