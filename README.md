<div align="center">

<img src="./public/logo.png" alt="StellarLab Logo" width="120" height="120" />

# StellarLab
### Stellar Safety & Alignment Research Lab (Stellar SAR Lab)

[![Live Site](https://img.shields.io/badge/Live_Site-GitHub_Pages-38bdf8?style=for-the-badge&logo=github)](https://pradeep-016.github.io/stellar-sar-lab/)
[![Founding Project](https://img.shields.io/badge/Founding_Project-ARM_(Qwen3--8B)-0284c7?style=for-the-badge)](https://pradeep-016.github.io/stellar-sar-lab/#/projects)
[![Hugging Face](https://img.shields.io/badge/Models-Hugging_Face-f59e0b?style=for-the-badge&logo=huggingface)](https://huggingface.co/StellarLab)
[![License](https://img.shields.io/badge/License-Apache_2.0-818cf8?style=for-the-badge)](LICENSE)

*A newly established independent empirical research initiative investigating learned objectives, reward modeling, and evaluator reliability under optimization pressure.*

</div>

---

## 🔬 Scientific Mission & Institutional Identity

**StellarLab** (Stellar Safety & Alignment Research Lab) is a newly established independent research initiative focused on empirical AI safety and alignment research.

Our core scientific investigation examines how reliable objectives, reward models, and evaluators remain when subjected to optimization pressure:

> **"How reliable are the objectives and evaluators used to guide increasingly capable AI systems, particularly under optimization pressure?"**

*Note on Institutional Scope:* StellarLab is newly established. Its official research journey begins with the Associative Reward Model (ARM). Previous independent research projects and publications by the founder were conducted under personal research activities and are strictly separated from StellarLab's research portfolio.

---

## 🧭 Laboratory Research Interests

StellarLab will focus on AI Safety and Alignment-related challenges across nine core agendas:

1. **AI Safety & Alignment:** Developing empirical techniques to ensure increasingly capable systems behave reliably in accordance with intended objectives.
2. **Reward Modeling:** Advancing multi-dimensional preference learning, dimension-level supervision, and representation learning for reward architectures.
3. **Reward Hacking & Specification Gaming:** Analyzing how optimization systems exploit weaknesses, loopholes, and unintended incentives in learned reward functions.
4. **Evaluator Reliability:** Investigating the calibration boundaries, consistency, and failure modes of automated judges and reward verifiers.
5. **Reliability of Learned Objectives:** Probing whether proxy rewards maintain fidelity as generation models are steered and scaled.
6. **Reward–Quality Divergence:** Measuring the empirical decoupling of proxy evaluator scores from verifiable task correctness (Goodhart's Law in alignment).
7. **Robustness of AI Evaluation:** Designing evaluation protocols resistant to stylistic perturbations, length biases, and adversarial exploits.
8. **Optimization-Induced Failures:** Characterizing pathologies that emerge specifically when models undergo intense test-time search or policy optimization.
9. **Alignment of Increasingly Capable AI Systems:** Preparing alignment and evaluation methodologies for next-generation foundation models.

---

## 📂 Founding Research Project: Associative Reward Model (ARM)

The **Associative Reward Model (ARM)** is the first research project undertaken under StellarLab.

* **Designation:** StellarLab Founding Research Project
* **Status:** In Progress / Standalone merged model checkpoint release upon publication.
* **Architecture:** Foundation backbone on **Qwen3-8B**, trained with 4-bit NormalFloat (NF4) quantization using **QLoRA** on dual NVIDIA T4 GPUs over 7,500 curated preference pairs.
* **Core Hypothesis:** Collapsing complex preference signals into an uninterpretable scalar score creates susceptibility to style traps and single-axis gaming. By decomposing evaluation across six explicit dimensions with consistency regularization, ARM isolates genuine task execution from superficial artifacts.
* **Supervision Dimensions:**
  1. *Instruction Adherence:* Strict conformance to prompt constraints and formatting directives.
  2. *Relevance:* Direct pertinence to user intent without extraneous digressions.
  3. *Completeness:* Exhaustive coverage of all specified query requirements.
  4. *Reasoning Validity:* Logical, mathematical, and deductive soundness across the chain of thought.
  5. *Task Correctness:* Domain-grounded accuracy and factual correctness of solutions.
  6. *Communication Quality:* Coherence, clarity, and structural readability.
* **Loss Formulation:** Pairwise preference objective coupled with dimension-level cross-entropy supervision and consistency regularization penalties.
* **Reported Benchmark Evaluations:**
  * RewardBench Evaluation 1: **89.2**
  * RewardBench Evaluation 2: **74.4**
  * RM-Bench (Hard Style-Trap): **65.6**
  * JudgeBench: **62.5**
* **Artifact Release:** Merged standalone model weights (not an adapter-only release).

---

## 📄 Publications & Research Portfolio

StellarLab is newly established, and its formal publication portfolio is actively being established.

* **Technical Manuscript in Preparation:**
  * *Associative Reward Model (ARM): Multi-Dimensional Preference Supervision in Language Models*
  * Details the architectural formulation, 6-dimensional supervision scheme, consistency regularization, and empirical benchmark results on Qwen3-8B.
  * Research preprint and open-source model weights will be released upon completion.

---

## 💻 Tech Stack & Web Architecture

* **Core Framework:** React 18 / Vite / TypeScript
* **Styling & Design Tokens:** Tailwind CSS / CSS Custom Properties
* **Interactive Research Tools:**
  * Interactive Three.js / Canvas 2D/3D Constellation Hero Network
  * Interactive Goodhart Reward–Quality Divergence Explanatory Curve
  * Interactive Best-of-N Candidate Selection Simulator
  * Interactive ARM 6-Dimension Architecture & Loss Inspector
* **Routing:** HashRouter (100% SPA routing reliability on GitHub Pages static hosting)
* **Icons:** Lucide React

---

## 🚀 Local Development

```bash
# Clone repository
git clone https://github.com/pradeep-016/stellar-sar-lab.git
cd stellar-sar-lab

# Install dependencies
npm install

# Start local development server
npm run dev

# Build production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 🌐 GitHub Pages Deployment

This repository includes continuous deployment configured in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

On push to `main`:
1. Installs dependencies and builds the production bundle into `dist/`.
2. Automatically deploys to GitHub Pages at:
   **`https://pradeep-016.github.io/stellar-sar-lab/`**

---

## 🤝 Contact & Institutional Channels

For research collaboration, technical inquiries, and correspondence:

* **Contact Email:** [pradeep02272002@gmail.com](mailto:pradeep02272002@gmail.com)
* **GitHub Repository:** [https://github.com/pradeep-016/stellar-sar-lab](https://github.com/pradeep-016/stellar-sar-lab)
* **Hugging Face Organization:** [https://huggingface.co/StellarLab](https://huggingface.co/StellarLab)

---

<div align="center">
<sub>© 2026 Stellar Safety & Alignment Research Lab (Stellar SAR Lab). Independent empirical research initiative.</sub>
</div>
