import { Publication } from '../types';

export const publications: Publication[] = [
  {
    id: 'evaluator-reliability-aias-2026',
    title: 'Evaluator Reliability Under Test-Time Scaling',
    category: 'workshop',
    categoryLabel: 'Peer-Reviewed Workshop Acceptance',
    status: 'Accepted Workshop Paper',
    venue: 'AIAS 2026 Workshop on Lifelong Agents (held in conjunction with LLA 2026)',
    year: 2026,
    abstract:
      'Scaling inference compute via search and verification enhances downstream task performance but places unprecedented stress on reward models and automated verifiers. We empirically analyze evaluator error propagation across extended test-time search trajectories (N=1 to 256), identifying systematic failure modes where proxy evaluator scores diverge non-linearly from ground-truth task fidelity. We provide formal characterizations of evaluator drift and evaluate mitigation strategies across standard reasoning benchmarks using paired bootstrap hypothesis testing with Holm-Bonferroni corrections.',
    authors: 'Pradeep L.',
    links: {
      pdf: '#',
      code: 'https://github.com/pradeep-016',
    },
    keywords: [
      'Evaluator Reliability',
      'Test-Time Scaling',
      'Goodhart Divergence',
      'Process Reward Models',
      'Best-of-N',
    ],
  },
  {
    id: 'arm-manuscript-in-progress',
    title: 'Associative Reward Model (ARM): Multi-Dimensional Preference Supervision in Language Models',
    category: 'in_progress',
    categoryLabel: 'Working Manuscript',
    status: 'Manuscript in Preparation (Targeting Academic Submission)',
    venue: 'Stellar ASION Technical Report',
    year: 2026,
    abstract:
      'Scalar reward models collapse diverse evaluative criteria into an uninterpretable single value, frequently failing under optimization pressure due to length bias, stylistic deception, and specification gaming. We introduce the Associative Reward Model (ARM), an architecture built on Qwen3-8B that decomposes evaluation across six explicit supervision dimensions (instruction adherence, relevance, completeness, reasoning validity, task correctness, and communication quality) combined with pairwise preference loss and consistency regularization.',
    authors: 'Pradeep L.',
    links: {
      pdf: '#',
      code: 'https://github.com/pradeep-016/stellar-sar-lab',
      model: 'https://huggingface.co/Stellar-lab/Stellar-Qwen3-8B-ARM',
    },
    keywords: [
      'Associative Reward Model (ARM)',
      'Multi-Dimensional Supervision',
      'Reward Modeling',
      'Preference Learning',
      'Specification Gaming',
      'Qwen3-8B',
    ],
  },
];
