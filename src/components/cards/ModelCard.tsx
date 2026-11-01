import React from 'react';
import { ModelRelease } from '../../types';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';
import { Sparkles, Layers, ExternalLink, Github, Cpu, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ModelCardProps {
  model: ModelRelease;
}

export const ModelCard: React.FC<ModelCardProps> = ({ model }) => {
  return (
    <Card className="hover:border-accent-blue/50 p-6 md:p-8">
      <div>
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-2">
            <Badge variant="violet" size="sm" icon={<Sparkles className="w-3.5 h-3.5" />}>
              {model.status}
            </Badge>
            <Badge variant="emerald" size="sm">
              Merged Standalone Checkpoint
            </Badge>
          </div>
          <span className="text-xs font-mono text-scientific-muted">
            Backbone: {model.backbone}
          </span>
        </div>

        {/* Model Name */}
        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 font-display">
          {model.name}
        </h3>

        {/* Tagline */}
        <p className="text-xs sm:text-sm font-mono text-accent-cyan mb-4">
          {model.tagline}
        </p>

        {/* Overview */}
        <p className="text-sm text-scientific-slate leading-relaxed mb-6">
          {model.overview}
        </p>

        {/* Specifications Matrix */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-6 text-xs font-mono">
          <div className="bg-background-deep/70 p-3 rounded-lg border border-border">
            <span className="text-[10px] text-scientific-muted block uppercase">Backbone</span>
            <span className="text-white font-semibold">{model.architectureDetails.backbone}</span>
          </div>
          <div className="bg-background-deep/70 p-3 rounded-lg border border-border">
            <span className="text-[10px] text-scientific-muted block uppercase">Quantization</span>
            <span className="text-white font-semibold">{model.architectureDetails.quantization}</span>
          </div>
          <div className="bg-background-deep/70 p-3 rounded-lg border border-border">
            <span className="text-[10px] text-scientific-muted block uppercase">Hardware</span>
            <span className="text-white font-semibold">{model.architectureDetails.hardware}</span>
          </div>
          <div className="bg-background-deep/70 p-3 rounded-lg border border-border">
            <span className="text-[10px] text-scientific-muted block uppercase">Fine-Tuning</span>
            <span className="text-white font-semibold">{model.architectureDetails.finetuning}</span>
          </div>
          <div className="bg-background-deep/70 p-3 rounded-lg border border-border">
            <span className="text-[10px] text-scientific-muted block uppercase">Preference Pairs</span>
            <span className="text-white font-semibold">{model.architectureDetails.preferencePairs.toLocaleString()}</span>
          </div>
          <div className="bg-background-deep/70 p-3 rounded-lg border border-border">
            <span className="text-[10px] text-scientific-muted block uppercase">Release Format</span>
            <span className="text-emerald-400 font-semibold">Merged Standalone</span>
          </div>
        </div>

        {/* Supervision Dimensions */}
        <div className="mb-6">
          <div className="text-xs font-mono text-scientific-muted uppercase tracking-wider mb-2">
            Six Explicit Supervision Dimensions:
          </div>
          <div className="flex flex-wrap gap-1.5">
            {model.supervisionDimensions.map((dim) => (
              <Badge key={dim.name} variant="blue" size="sm">
                {dim.name}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="pt-6 border-t border-border/60 flex flex-wrap items-center justify-between gap-4">
        <Link
          to="/models"
          className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-accent-blue hover:text-sky-300"
        >
          <span>Explore Architecture & Benchmarks</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>

        <div className="flex items-center gap-3">
          <a
            href={model.access.huggingFaceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-bold bg-gradient-to-r from-accent-blue to-accent-cyan text-background-deep hover:brightness-110 shadow-md shadow-cyan-500/20 transition-all"
          >
            <span className="text-sm">🤗</span>
            <span>View Model on Hugging Face</span>
          </a>
        </div>
      </div>
    </Card>
  );
};
