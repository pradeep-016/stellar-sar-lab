import { Publication } from '../types';

export const publications: Publication[] = [
  {
    id: 'evaluator-reliability-aias-2026',
    title: 'Evaluator Reliability in Language Models Under Test-Time Scaling',
    category: 'workshop',
    categoryLabel: 'Workshop Publication (Accepted)',
    status: 'Accepted for poster presentation',
    venue: 'AIAS 2026 Workshop on Lifelong Agents: Learning, Aligning, and Evolving (LLA)',
    workshop: 'AIAS 2026 LLA Workshop',
    year: 2026,
    abstract:
      'We conduct an empirical investigation into the dynamics of Best-of-N selection and learned verifiers under increasing inference-time selection pressure. By evaluating three candidate-generating models against multiple learned evaluators on GSM8K and HumanEval benchmarks across budgets up to N = 256, we examine the emergence of reward–quality divergence. Under DeepSeek PRM selection with Llama 3.1 8B Instruct, observed accuracy on GSM8K declines from 80.4% at N = 8 to 72.2% at N = 256 despite growing proxy reward margins. We discuss the implications for inference-time scaling and evaluator calibration.',
    // Authors and DOI omitted / reserved as placeholders in accordance with research integrity rules
    authors: undefined,
    doi: undefined,
    links: {
      pdf: '#', // Configurable paper URL placeholder
      poster: '#', // Configurable poster URL placeholder
      code: 'https://github.com/pradeep-016/stellar-sar-lab',
    },
    keywords: [
      'Evaluator Reliability',
      'Test-Time Scaling',
      'Best-of-N Selection',
      'Process Reward Models',
      'Reward–Quality Divergence',
      'GSM8K',
      'HumanEval',
    ],
  },
];
