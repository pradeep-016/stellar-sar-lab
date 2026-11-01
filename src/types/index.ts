export interface ResearchDirection {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  keyThemes: string[];
  coreQuestions: string[];
  methodologies: string[];
  distinctionNote?: string;
  iconName: string;
}

export interface EmpiricalDataPoint {
  n: number;
  accuracy: number;
  label: string;
  isObserved: boolean;
}

export interface ResearchProject {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  status: string;
  statusType: 'accepted' | 'in-progress' | 'completed' | 'preprint';
  presentationVenue?: string;
  overview: string;
  researchQuestion: string;
  methodology: string[];
  experimentalSetup: {
    benchmarks?: string[];
    models?: string[];
    evaluators?: string[];
    selectionBudgets?: string;
    hardware?: string;
    trainingData?: string;
    optimization?: string;
  };
  empiricalFindings?: {
    summary: string;
    highlightMetric?: string;
    dataPoints?: EmpiricalDataPoint[];
    caveats: string[];
  };
  specifications?: Record<string, string>;
  benchmarkScores?: {
    benchmark: string;
    score: number;
    description: string;
  }[];
  dimensions?: {
    name: string;
    description: string;
    focus: string;
  }[];
  limitations: string[];
  links: {
    paper?: string;
    poster?: string;
    code?: string;
    huggingFace?: string;
    demo?: string;
  };
}

export interface Publication {
  id: string;
  title: string;
  category: 'workshop' | 'preprint' | 'in_progress';
  categoryLabel: string;
  status: string;
  venue?: string;
  workshop?: string;
  year: number;
  abstract: string;
  authors?: string[];
  doi?: string;
  links: {
    pdf?: string;
    poster?: string;
    code?: string;
    bibtex?: string;
  };
  keywords: string[];
}

export interface ModelRelease {
  id: string;
  name: string;
  codename: string;
  tagline: string;
  backbone: string;
  status: string;
  isStandalone: boolean;
  overview: string;
  architectureDetails: {
    backbone: string;
    quantization: string;
    finetuning: string;
    hardware: string;
    preferencePairs: number;
    trainingObjective: string;
  };
  supervisionDimensions: {
    name: string;
    description: string;
    importance: string;
  }[];
  benchmarkResults: {
    name: string;
    score: number;
    evalType: string;
    context: string;
  }[];
  intendedApplications: string[];
  limitations: string[];
  access: {
    huggingFaceUrl?: string;
    modelType: string;
    checkpointType: string;
    license: string;
  };
  citationSnippet?: string;
}

export interface ResearchUpdate {
  id: string;
  date: string;
  category: 'Acceptance' | 'Model Development' | 'Research Note' | 'Announcement';
  title: string;
  summary: string;
  content: string;
  relatedProjectId?: string;
  links?: {
    label: string;
    url: string;
  }[];
}
