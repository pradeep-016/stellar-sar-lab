import { Publication } from '../types';

export const publications: Publication[] = [
  {
    id: 'arm-manuscript-in-progress',
    title: 'Associative Reward Model (ARM): Multi-Dimensional Preference Supervision in Language Models',
    category: 'in_progress',
    categoryLabel: 'Manuscript in Preparation (Founding Project)',
    status: 'In preparation for academic submission',
    venue: 'StellarLab Inaugural Research Paper',
    workshop: 'Research Manuscript',
    year: 2026,
    abstract:
      'Scalar reward models collapse diverse evaluative criteria into an uninterpretable single value, frequently failing under optimization pressure due to length bias, stylistic deception, and specification gaming. In this inaugural StellarLab research project, we introduce the Associative Reward Model (ARM), an architecture built on Qwen3-8B that decomposes evaluation across six explicit supervision dimensions (instruction adherence, relevance, completeness, reasoning validity, task correctness, and communication quality) combined with pairwise preference loss and consistency regularization.',
    authors: undefined,
    doi: undefined,
    links: {
      pdf: '#',
      poster: undefined,
      code: 'https://github.com/pradeep-016/stellar-sar-lab',
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
