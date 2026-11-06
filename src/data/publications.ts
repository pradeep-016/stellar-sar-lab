import { Publication } from '../types';

export const publications: Publication[] = [
  {
    id: 'evaluator-reliability-aias-2026',
    title: 'Evaluator Reliability Under Test-Time Scaling',
    category: 'workshop',
    categoryLabel: 'Peer-Reviewed Workshop Acceptance',
    status: 'Accepted for Poster Presentation',
    venue: 'AIAS 2026 Workshop on Lifelong Agents (held with LLA 2026)',
    authors: 'Pradeep L.',
    year: 2026,
    abstract:
      'Controlled empirical evaluation across fixed candidate pools on GSM8K and HumanEval to characterize Goodhart divergence under Best-of-N search. Observed Llama-3.1-8B accuracy under DeepSeek-PRM selection peak at 80.4% at N=8 and decline to 72.2% at N=256 despite strictly increasing evaluator score margins; verified using paired bootstrap hypothesis testing with Holm-Bonferroni corrections.',
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
    title: 'Associative Reward Model (ARM): Architectural Disentanglement of Style and Correctness',
    category: 'in_progress',
    categoryLabel: 'Working Manuscript',
    status: 'Manuscript in Preparation (Targeting Academic Submission)',
    venue: 'Working Paper',
    authors: 'Pradeep L.',
    year: 2026,
    abstract:
      'Scalar reward models collapse diverse evaluative criteria into an uninterpretable single value, frequently failing under optimization pressure due to length bias, stylistic deception, and specification gaming. In this inaugural Stellar ASION research project, we introduce the Associative Reward Model (ARM), an architecture built on Qwen3-8B that decomposes evaluation across six explicit supervision dimensions (instruction adherence, relevance, completeness, reasoning validity, task correctness, and communication quality) combined with pairwise preference loss and consistency regularization to disentangle superficial style from substantive correctness.',
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
