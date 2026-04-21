export interface Project {
  slug: string;
  name: string;
  tagline: string;
  overview: string;
  problem: string;
  contribution: string;
  methods: string[];
  outcomes: string[];
  links?: { label: string; href: string }[];
  tags: string[];
}

export const projects: Project[] = [
  {
    slug: "vast",
    name: "VAST — Values Alignment & Stability Tracker",
    tagline: "Monitoring moral drift in autonomous agents over time.",
    overview:
      "VAST is a framework for continuously measuring whether an autonomous agent's behavior remains consistent with a declared value specification as it is deployed, updated, and exposed to adversarial conditions.",
    problem:
      "Alignment is typically evaluated at training time. In production, agents drift: distribution shift, tool use, fine-tuning, and prompt injection silently erode value-consistency.",
    contribution:
      "A measurable, reproducible definition of alignment stability, together with telemetry, probes, and a scoring protocol that allows drift to be detected before user harm.",
    methods: [
      "Behavioral probe suites grounded in a declared value specification",
      "Longitudinal stability metrics and drift-detection tests",
      "Adversarial stress scenarios and regression harnesses",
    ],
    outcomes: [
      "Accepted at ICAD 2026",
      "Open benchmark protocol for alignment-stability evaluation",
    ],
    links: [
      { label: "Paper", href: "#" },
      { label: "Code", href: "#" },
    ],
    tags: ["AI Alignment", "Evaluation", "Autonomous Agents"],
  },
  {
    slug: "vast-blockchain",
    name: "VAST-Blockchain — Auditable Governance for AI Agents",
    tagline: "On-chain, tamper-evident audit trails for autonomous decisions.",
    overview:
      "Extends VAST with a blockchain-backed audit layer so that an agent's decisions, value updates, and policy changes can be independently verified by third parties.",
    problem:
      "Autonomous systems acting on behalf of users need governance that is transparent, non-repudiable, and resilient to post-hoc modification.",
    contribution:
      "A governance pattern that binds alignment evaluations and policy state to cryptographic commitments, enabling external auditors and regulators to verify behavior without trusting the operator.",
    methods: [
      "Commitment schemes over policy and evaluation artifacts",
      "Smart-contract-mediated policy updates",
      "Verifiable logging of high-stakes agent actions",
    ],
    outcomes: [
      "Accepted at an IEEE 2026 venue",
      "Reference architecture for auditable AI governance",
    ],
    links: [{ label: "Paper", href: "#" }],
    tags: ["Auditable AI", "Blockchain", "Governance"],
  },
  {
    slug: "grader-reliability",
    name: "Who Grades the Graders?",
    tagline: "Validating automated evaluators in adversarial AI safety benchmarks.",
    overview:
      "A benchmark and validation protocol for probing the reliability of automated graders used in AI safety evaluations, demonstrating that grader choice can reverse model rankings even on identical outputs.",
    problem:
      "If the grader is unreliable or gameable, alignment signals are unreliable. Yet graders are rarely subjected to the same adversarial scrutiny as the policies they shape.",
    contribution:
      "A structured set of adversarial evaluation tasks, manipulation detectors, and reproducible metrics for grader reliability.",
    methods: [
      "Adversarial prompt suites designed to elicit grader failure modes",
      "Agreement and calibration metrics across graders",
      "Manipulation detectors inspired by auditing and causal analysis",
    ],
    outcomes: [
      "Paper in preparation (NeurIPS 2026 target)",
      "Public evaluation harness planned",
    ],
    links: [{ label: "Draft", href: "#" }],
    tags: ["Reward Modeling", "Evaluation", "AI Safety"],
  },
  {
    slug: "iot-bgt",
    name: "Behavioral Game Theory for IoT Security",
    tagline: "Defenders and attackers with bounded rationality.",
    overview:
      "Models IoT defense as a behavioral game where both attackers and defenders deviate from classical best-response assumptions, and derives defense strategies that remain robust under those deviations.",
    problem:
      "Classical game-theoretic security assumes rational adversaries. Empirically, attackers, operators, and users all exhibit bounded rationality, which undermines theoretical guarantees.",
    contribution:
      "A behavioral game-theoretic model of IoT defense and an analysis of equilibrium strategies and their empirical robustness.",
    methods: [
      "Behavioral equilibrium concepts (e.g., quantal response)",
      "Simulation of defender–attacker dynamics",
      "Sensitivity analysis over rationality parameters",
    ],
    outcomes: [
      "Accepted at IEEE ICC 2026",
      "Defense strategies robust to bounded-rationality deviations",
    ],
    tags: ["Game Theory", "Security", "Multi-Agent"],
  },
  {
    slug: "trojan-defense",
    name: "Hardware Trojan Defense with Multi-Level Strategies",
    tagline: "Layered, strategic defense across the hardware stack.",
    overview:
      "Develops multi-level defensive strategies against hardware Trojans, framed game-theoretically across design, fabrication, and deployment stages.",
    problem:
      "Single-layer defenses are insufficient against adversaries who can act at multiple points in the hardware supply chain.",
    contribution:
      "A strategic framework that coordinates detection and mitigation across layers, and analyzes the trade-offs between cost and coverage.",
    methods: [
      "Multi-stage game formulation",
      "Layer-wise detection and mitigation models",
      "Cost-coverage Pareto analysis",
    ],
    outcomes: [
      "Manuscript under review at IEEE IMNS 2026",
      "Design guidance for layered hardware-security programs",
    ],
    tags: ["Hardware Security", "Game Theory", "Systems"],
  },
  {
    slug: "coalition-vast",
    name: "COALITION-VAST",
    tagline: "Auditable multi-agent alignment under Byzantine governance.",
    overview:
      "Extends VAST from single-agent compliance to auditable multi-agent coordination through machine-checkable commitments, adaptive targeted auditing, governance thresholds, and a high-stakes review gate.",
    problem:
      "Scaling aligned AI from single-agent systems to multi-agent ecosystems introduces collective failures — coalition deviation, governance capture, and rushed rule changes — that do not arise in isolation.",
    contribution:
      "A framework that models coordination as a coalition game with on-chain rule evolution, keeps agents bound to locked constraints, and adds trust-driven targeted auditing so detection becomes adaptive rather than fixed.",
    methods: [
      "Coalition game formulation with on-chain rule evolution",
      "BFT consensus and supermajority governance thresholds",
      "Trust-driven targeted auditing with adaptive detection",
      "Prototype simulation across healthcare, autonomous swarms, and multi-stakeholder finance",
    ],
    outcomes: [
      "Manuscript under review at IEEE IMNS 2026",
      "+30% relative alignment improvement, 98% reduction in undetected coalition deviation",
    ],
    links: [{ label: "Draft", href: "#" }],
    tags: ["Multi-Agent Systems", "AI Alignment", "Byzantine Governance", "Blockchain"],
  },
  {
    slug: "vast-nlg",
    name: "When Safe-Looking Models Fail",
    tagline: "Exposing a hidden decision gap in multi-turn conversational safety.",
    overview:
      "Introduces VAST-NLG, a multi-turn benchmark that operationalizes conversational safety as dialogue-act selection, revealing that models which appear safe when the correct action is supplied degrade when they must infer it autonomously.",
    problem:
      "Most LLM safety evaluations test policy execution — whether a model can follow a known safety instruction. Deployed conversational agents face a harder problem: they must first infer the correct policy action from dialogue context alone.",
    contribution:
      "A 500-episode benchmark across 10 safety categories that separates oracle-conditioned execution from autonomous action selection, exposing a systematic decision gap masked by standard evaluations.",
    methods: [
      "Multi-turn dialogue-act selection benchmark (500 episodes, 10 safety categories)",
      "Oracle-conditioned vs. autonomous evaluation regimes",
      "46-check validation harness for the VAST policy backbone",
      "Component, integration, scenario, and ablation checks",
    ],
    outcomes: [
      "Manuscript under review at IEEE IMNS 2026",
      "Decision gap demonstrated: models degrade when action must be inferred, not supplied",
    ],
    links: [{ label: "Draft", href: "#" }],
    tags: ["Conversational Safety", "LLM Evaluation", "Trustworthy AI"],
  },
];
