import React from 'react';
import { Publication } from '../../types';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';
import { FileText, Github, Award, Sparkles } from 'lucide-react';

interface PublicationCardProps {
  publication: Publication;
}

export const PublicationCard: React.FC<PublicationCardProps> = ({ publication }) => {
  return (
    <Card className="hover:border-accent-blue/50 p-6 md:p-8">
      {/* Category & Status */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
        <Badge
          variant={publication.category === 'workshop' ? 'blue' : 'violet'}
          size="sm"
          icon={<Award className="w-3.5 h-3.5" />}
        >
          {publication.categoryLabel}
        </Badge>
        <span className="text-xs font-mono text-scientific-muted">
          Year {publication.year}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 font-display">
        {publication.title}
      </h3>

      {/* Venue & Authors */}
      <div className="text-xs sm:text-sm font-mono text-accent-cyan mb-1">
        {publication.venue}
      </div>
      {publication.authors && (
        <div className="text-xs font-mono text-scientific-muted mb-4">
          Author: {Array.isArray(publication.authors) ? publication.authors.join(', ') : publication.authors}
        </div>
      )}

      {/* Abstract */}
      <div className="text-xs sm:text-sm text-scientific-slate leading-relaxed mb-6 bg-background-deep/50 p-4 rounded-xl border border-border/80">
        <span className="text-[10px] font-mono uppercase tracking-wider text-scientific-muted block mb-1">
          ABSTRACT
        </span>
        <p>{publication.abstract}</p>
      </div>

      {/* Keywords */}
      <div className="flex flex-wrap gap-1.5 mb-6">
        {publication.keywords.map((kw) => (
          <Badge key={kw} variant="slate" size="sm">
            {kw}
          </Badge>
        ))}
      </div>

      {/* Links (strictly NO BibTeX) */}
      <div className="pt-4 border-t border-border/60 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
        <div className="flex flex-wrap items-center gap-3">
          {publication.links.pdf && publication.links.pdf !== '#' && (
            <a
              href={publication.links.pdf}
              className="inline-flex items-center gap-1.5 text-accent-blue hover:text-sky-300 font-semibold"
            >
              <FileText className="w-4 h-4" />
              <span>Paper PDF</span>
            </a>
          )}
          {publication.links.code && (
            <a
              href={publication.links.code}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-scientific-slate hover:text-white"
            >
              <Github className="w-4 h-4" />
              <span>Replication Code</span>
            </a>
          )}
          {publication.links.model && (
            <a
              href={publication.links.model}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-accent-cyan hover:text-white"
            >
              <Sparkles className="w-4 h-4" />
              <span>Model Weights</span>
            </a>
          )}
        </div>
        <span className="text-[11px] text-scientific-muted font-mono">
          {publication.status}
        </span>
      </div>
    </Card>
  );
};
