import React from 'react';
import { ResearchProject } from '../../types';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';
import { ArrowUpRight, Github, ExternalLink, Calendar, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  project: ResearchProject;
  showFullDetails?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  showFullDetails = false,
}) => {
  const isAccepted = project.statusType === 'accepted';

  return (
    <Card className="flex flex-col justify-between h-full hover:border-accent-blue/50 p-6 md:p-8">
      <div>
        {/* Status Badge */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <Badge
            variant={isAccepted ? 'emerald' : 'violet'}
            size="sm"
            icon={<CheckCircle2 className="w-3.5 h-3.5" />}
          >
            {project.status}
          </Badge>
          <span className="text-xs font-mono text-scientific-muted">
            {project.id === 'evaluator-reliability-tts' ? 'Empirical Study' : 'Model Architecture'}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 font-display">
          {project.title}
        </h3>

        {/* Overview */}
        <p className="text-sm text-scientific-slate leading-relaxed mb-6">
          {project.overview}
        </p>

        {/* Research Question */}
        <div className="bg-background-deep/80 border border-border/80 rounded-xl p-4 mb-6">
          <span className="text-[10px] font-mono uppercase tracking-wider text-accent-blue block mb-1">
            CORE INVESTIGATION QUESTION
          </span>
          <p className="text-xs sm:text-sm italic text-white/90 font-serif leading-relaxed">
            "{project.researchQuestion}"
          </p>
        </div>

        {/* Highlight observation or specifications */}
        {project.empiricalFindings && (
          <div className="mb-6 p-4 rounded-xl bg-accent-blue/5 border border-accent-blue/20">
            <div className="flex items-center justify-between text-xs font-mono text-accent-blue mb-1">
              <span>HIGHLIGHTED OBSERVATION (GSM8K)</span>
              <span>Llama 3.1 8B • DeepSeek PRM</span>
            </div>
            <div className="text-xl font-bold font-mono text-white">
              {project.empiricalFindings.highlightMetric}
            </div>
            <p className="text-xs text-scientific-slate mt-1 leading-relaxed">
              Accuracy declined by 8.2% as selection budget scaled from N=8 to N=256 despite expanding proxy reward margins.
            </p>
          </div>
        )}

        {project.specifications && (
          <div className="mb-6 grid grid-cols-2 gap-2 text-xs font-mono">
            {Object.entries(project.specifications).slice(0, 4).map(([key, value]) => (
              <div key={key} className="bg-background-deep/60 p-2.5 rounded border border-border">
                <span className="text-[10px] text-scientific-muted block uppercase">{key}</span>
                <span className="text-white font-medium truncate block">{value}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Action buttons */}
      <div className="pt-6 border-t border-border/60 flex flex-wrap items-center justify-between gap-3">
        <Link
          to={`/projects#${project.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-accent-blue hover:text-sky-300"
        >
          <span>View Methodology & Limitations</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>

        <div className="flex items-center gap-2">
          {project.links.huggingFace && (
            <a
              href={project.links.huggingFace}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 text-xs font-mono font-medium rounded-lg bg-background-elevated border border-border hover:border-slate-600 text-white flex items-center gap-1"
            >
              <span>🤗 Hugging Face</span>
            </a>
          )}
          {project.links.code && (
            <a
              href={project.links.code}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg bg-background-elevated border border-border hover:border-slate-600 text-scientific-slate hover:text-white"
              title="GitHub Code"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </Card>
  );
};
