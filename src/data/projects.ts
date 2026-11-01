import { ResearchProject } from '../types';

export const projects: ResearchProject[] = [
  {
    id: 'evaluator-reliability-tts',
    slug: 'evaluator-reliability',
    title: 'Evaluator Reliability in Language Models Under Test-Time Scaling',
    shortTitle: 'Evaluator Reliability Under TTS',
    status: 'Accepted for Poster Presentation at AIAS 2026 Workshop on Lifelong Agents (LLA)',
    statusType: 'accepted',
    presentationVenue: 'AIAS 2026 Workshop on Lifelong Agents: Learning, Aligning, and Evolving (LLA)',
    overview:
      'An empirical investigation into Best-of-N selection dynamics, learned verifiers, and the phenomenon of reward–quality divergence when language models are subjected to increasing inference-time selection pressure.',
    researchQuestion:
      'How reliably do learned evaluators and process reward models select genuinely correct solutions as candidate pool sizes scale up to N = 256?',
    methodology: [
      'Empirical evaluation of Best-of-N selection across discrete budgets N ∈ {1, 2, 4, 8, 16, 32, 64, 128, 256}',
      'Rigorous independent ground-truth evaluation on mathematical reasoning and code synthesis',
      'Systematic comparison across 3 candidate-generating models and multiple learned evaluators',
      'Paired statistical testing to isolate evaluator-induced selection shifts from sampling variance',
      'Multiple-testing statistical correction applied across all candidate selection comparisons',
    ],
    experimentalSetup: {
      benchmarks: [
        'GSM8K (Grade School Math 8K - multi-step mathematical reasoning)',
        'HumanEval (Functional Python program synthesis with test suite verification)',
      ],
      models: [
        'Three candidate-generating language models (including Llama 3.1 8B Instruct)',
      ],
      evaluators: [
        'Multiple learned evaluators (including DeepSeek Process Reward Model / PRM)',
      ],
      selectionBudgets: 'Discrete evaluation up to N = 256 candidate samples per query',
      optimization: 'Inference-time Best-of-N selection scoring',
    },
    empiricalFindings: {
      summary:
        'Under DeepSeek PRM selection, Llama 3.1 8B Instruct achieved 80.4% observed accuracy at N = 8, but declined to 72.2% observed accuracy at N = 256 on GSM8K reasoning. Notably, this decline occurred even as the selected candidates exhibited higher proxy reward margins from the evaluator.',
      highlightMetric: '80.4% (N=8) → 72.2% (N=256)',
      dataPoints: [
        { n: 8, accuracy: 80.4, label: 'Observed Accuracy at N = 8', isObserved: true },
        { n: 256, accuracy: 72.2, label: 'Observed Accuracy at N = 256', isObserved: true },
      ],
      caveats: [
        'This result is specific to the evaluated generator (Llama 3.1 8B Instruct), evaluator (DeepSeek PRM), benchmark (GSM8K), and exact experimental configuration.',
        'This observation does not establish a universal causal mechanism across all models, tasks, or verifiers.',
        'Intermediate budget points are not interpolated; intermediate performance may vary non-monotonically.',
      ],
    },
    limitations: [
      'Scope is focused on mathematical reasoning and program synthesis benchmarks where verifiable ground-truth exists.',
      'Evaluator performance in open-ended or subjective tasks was not evaluated in this specific paper.',
      'Results reflect specific prompt templates, generation temperatures, and candidate pool distributions.',
    ],
    links: {
      paper: '#', // Configurable URL placeholder
      poster: '#', // Configurable URL placeholder
      code: 'https://github.com/pradeep-016/stellar-sar-lab',
    },
  },
  {
    id: 'associative-reward-model-arm',
    slug: 'arm',
    title: 'Associative Reward Model (ARM)',
    shortTitle: 'Associative Reward Model (ARM)',
    status: 'In Progress / Standalone Model Release Upon Publication',
    statusType: 'in-progress',
    presentationVenue: 'Research in progress — Model release planned',
    overview:
      'A multi-dimensional reward-modeling architecture built upon a Qwen3-8B foundation, engineered to supervise six distinct axes of model performance rather than collapsing evaluations into an uninterpretable scalar score.',
    researchQuestion:
      'Can explicit multi-dimensional preference supervision decouple stylistic surface features from substantive task correctness and mitigate single-axis reward gaming?',
    methodology: [
      'Pairwise preference objective with dimension-level cross-entropy supervision',
      'QLoRA 4-bit parameter-efficient fine-tuning on dual NVIDIA T4 GPU hardware',
      'Trained across 7,500 curated preference pairs with multi-attribute annotations',
      'Consistency regularization to penalize conflicting dimension signals',
      'Validation, checkpointing, and robust training resumption infrastructure',
      'Merged standalone checkpoint release (not an adapter-only release)',
    ],
    experimentalSetup: {
      hardware: 'Dual NVIDIA T4 GPUs (2x 16GB VRAM)',
      trainingData: '7,500 curated preference pairs with 6-dimensional supervision',
      optimization: 'QLoRA 4-bit quantization, pairwise preference loss + consistency regularization',
    },
    specifications: {
      'Foundation Backbone': 'Qwen3-8B',
      'Quantization Mode': '4-bit NormalFloat (NF4)',
      'Fine-tuning Framework': 'QLoRA (Quantized Low-Rank Adaptation)',
      'Training Dataset Size': '7,500 annotated preference pairs',
      'Compute Hardware': 'Dual NVIDIA T4 GPUs',
      'Model Architecture': 'Merged standalone checkpoint',
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
        benchmark: 'RewardBench Evaluation 1',
        score: 89.2,
        description:
          'Standard RewardBench suite configuration 1. Note: Does not imply superiority or direct equivalence with evaluation 2.',
      },
      {
        benchmark: 'RewardBench Evaluation 2',
        score: 74.4,
        description:
          'Secondary RewardBench suite evaluation configuration. Reported directly without speculative comparisons.',
      },
      {
        benchmark: 'RM-Bench (Hard Style-Trap)',
        score: 65.6,
        description:
          'Evaluates resistance against length bias, deceptive politeness, and superficial styling traps.',
      },
      {
        benchmark: 'JudgeBench',
        score: 62.5,
        description:
          'Evaluates discriminative calibration against complex human preference judgments and verification tests.',
      },
    ],
    limitations: [
      'Trained with 4-bit QLoRA on a 7,500 pair corpus; scaling to larger datasets remains ongoing research.',
      'Dual T4 hardware constraint informed the parameter budget and sequence context length limits.',
      'Reported benchmark results are individual evaluation runs and should not be directly cross-compared across different benchmarks.',
      'Standalone release is planned upon peer-reviewed publication; currently undergoing validation.',
    ],
    links: {
      huggingFace: 'https://huggingface.co/StellarLab', // Configurable model repository placeholder
      code: 'https://github.com/pradeep-016/stellar-sar-lab',
    },
  },
];
