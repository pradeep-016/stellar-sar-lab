import { ResearchDirection } from '../types';

export const researchDirections: ResearchDirection[] = [
  {
    id: 'native-alignment-safety',
    slug: 'native-alignment-safety',
    title: 'Native Alignment & Data Curation by Design',
    shortDescription:
      'Replacing superficial post-hoc RLHF patches with intrinsic multi-dimensional supervision and adversarially curated, contamination-free training corpora.',
    fullDescription:
      'Standard frontier models treat safety as an afterthought—pre-training an unconstrained black box on raw web text and patching behavior with post-hoc fine-tuning. This creates fragile models prone to alignment faking, sycophancy, and jailbreaks. We investigate native alignment by design: embedding decomposed, multi-attribute supervision directly into early training and data curation to prevent specification gaming and deceptive shortcuts before they form.',
    keyThemes: [
      'Native alignment objectives vs. post-hoc RLHF/DPO patching',
      'Adversarial mutation engines generating synthetic hard negatives for style-trap inoculation',
      'Cryptographic prompt hashing ensuring zero train-test benchmark contamination',
      'Decomposed qualitative supervision eliminating sycophantic flattery and length bias',
    ],
    coreQuestions: [
      'Why do post-hoc alignment patches systematically fail under adversarial optimization?',
      'How can upstream data curation instill alignment priors that resist reward hacking?',
      'Can multi-dimensional supervision eliminate capability-vs-safety trade-offs?',
    ],
    methodologies: [
      '10-Shard partitioned preference ingestion with calculator cheat-token sanitization',
      'Adversarial negative synthesis (VERBOSE_TEMPLATES) isolating stylistic fluff from logic',
      'Multi-attribute preference decomposition across orthogonal qualitative axes',
    ],
    iconName: 'ShieldCheck',
  },
  {
    id: 'inference-scaling-dynamics',
    slug: 'inference-scaling-dynamics',
    title: 'Inference Scaling & Verification Dynamics',
    shortDescription:
      'Empirically characterizing test-time search compute, process verifier degradation, and error amplification under Best-of-N scaling.',
    fullDescription:
      'Scaling inference compute through candidate search and process verification (PRMs) is a primary frontier capability driver. However, when evaluators are decoupled from generator architectures, deep search amplifies subtle evaluator errors. We empirically characterize this breakdown: mapping the exact thresholds where proxy evaluator scores diverge from ground-truth task correctness.',
    keyThemes: [
      'Inference-time search limits under Best-of-N and tree search',
      'Process Reward Model (PRM) reliability across extended reasoning trajectories',
      'False-positive amplification and error propagation under candidate scaling',
      'Search compute allocation: generator search compute vs. verifier discriminative depth',
    ],
    coreQuestions: [
      'At what candidate pool size (N) does verifier exploitation begin degrading downstream output accuracy?',
      'Why do automated verifiers assign increasing confidence to logically defective reasoning chains during deep search?',
      'What verification architectures prevent inference compute from collapsing into proxy gaming?',
    ],
    methodologies: [
      'Controlled candidate scaling (N=1 to 256) on GSM8K and HumanEval benchmarks',
      'Paired bootstrap hypothesis testing with Holm-Bonferroni statistical corrections',
      'Empirical analysis of process verifier score margins vs. ground-truth execution',
    ],
    iconName: 'Cpu',
  },
  {
    id: 'optimization-boundaries',
    slug: 'optimization-boundaries',
    title: 'Optimization Limits & Goodhart Boundaries',
    shortDescription:
      'Formulating mathematical and empirical phase boundaries where proxy reward maximization decouples from true human intent.',
    fullDescription:
      'Goodhart’s Law demonstrates that when a proxy metric is optimized intensely, it inevitably decouples from true intent. We characterize the mathematical and empirical boundary conditions under which optimization pressure causes policies and verifiers to drift into catastrophic specification gaming, policy degradation, and unaligned regimes.',
    keyThemes: [
      'Phase transitions of Goodhart divergence under reinforcement learning',
      'Detection protocols and early-warning telemetry for proxy over-optimization',
      'Pathological candidate emergence under extreme optimization budgets',
      'Regularization boundaries preventing policy drift beyond evaluator support',
    ],
    coreQuestions: [
      'Can statistical early-warning indicators detect impending proxy divergence before policy quality degrades?',
      'How does task formalization (e.g., verifiable formal logic vs. open-ended synthesis) influence divergence velocity?',
      'What optimization constraints prevent policies from exploiting blind spots in learned objectives?',
    ],
    methodologies: [
      'Simultaneous trajectory tracking of proxy reward scores against ground-truth execution',
      'Stress-testing policies across high-temperature and adversarial sampling spaces',
      'Distributional divergence analysis across policy optimization steps',
    ],
    iconName: 'AlertTriangle',
  },
  {
    id: 'optimized-network-architectures',
    slug: 'optimized-network-architectures',
    title: 'Inference-Optimized Network Architectures',
    shortDescription:
      'Architecting parameter-efficient, low-latency decomposed networks for real-time verification and native safety on accessible compute.',
    fullDescription:
      'Frontier alignment research should not require prohibitive supercomputing infrastructure. We research and build parameter-efficient alignment network architectures (such as 4-bit NormalFloat QLoRA decomposed reward heads on 8B backbones) that deliver competitive discriminative precision with low latency, enabling accessible and democratized safety audits.',
    keyThemes: [
      'Parameter-efficient alignment via 4-bit NormalFloat (NF4) QLoRA',
      'Multi-head vector projection architectures replacing scalar bottleneck heads',
      'Low-latency verifier architectures for real-time inference filtering and reranking',
      'Democratized safety research on accessible dual-GPU (2x NVIDIA T4) hardware budgets',
    ],
    coreQuestions: [
      'Can parameter-efficient 8B reward networks match the discriminative calibration of full-precision 27B+ models?',
      'How do multi-head projection layers impact memory bandwidth and inference latency during search reranking?',
      'What architectural modifications prevent precision degradation in quantized preference heads?',
    ],
    methodologies: [
      'QLoRA parameter-efficient adaptation on Qwen3-8B foundation backbones',
      'Hardware benchmarking and profiling across dual T4 and consumer GPU environments',
      'Ablation of quantization precision vs. fine-grained preference discrimination',
    ],
    iconName: 'Sliders',
  },
];
