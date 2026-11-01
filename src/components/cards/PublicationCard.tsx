import React, { useState } from 'react';
import { Publication } from '../../types';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';
import { FileText, Copy, Check, ExternalLink, Github, Award } from 'lucide-react';

interface PublicationCardProps {
  publication: Publication;
}

export const PublicationCard: React.FC<PublicationCardProps> = ({ publication }) => {
  const [copied, setCopied] = useState(false);

  const bibtex = publication.bibtex || `@misc{stellarlab2026,
  title={${publication.title}},
  author={StellarLab},
  year={${publication.year}},
  note={Manuscript in preparation}
}`;

  const copyBibtex = () => {
    navigator.clipboard.writeText(bibtex);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card className="hover:border-accent-blue/50 p-6 md:p-8">
      {/* Category & Status */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
        <Badge variant="blue" size="sm" icon={<Award className="w-3.5 h-3.5" />}>
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

      {/* Venue */}
      <div className="text-xs sm:text-sm font-mono text-accent-cyan mb-4">
        {publication.venue}
      </div>

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

      {/* Links & Citation Copy */}
      <div className="pt-4 border-t border-border/60 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
        <div className="flex items-center gap-3">
          {publication.links.pdf && (
            <a
              href={publication.links.pdf}
              className="inline-flex items-center gap-1.5 text-accent-blue hover:text-sky-300 font-semibold"
            >
              <FileText className="w-4 h-4" />
              <span>Paper PDF</span>
            </a>
          )}
          {publication.links.poster && (
            <a
              href={publication.links.poster}
              className="inline-flex items-center gap-1.5 text-scientific-slate hover:text-white"
            >
              <span>Presentation / Poster</span>
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
              <span>Code</span>
            </a>
          )}
        </div>

        <button
          onClick={copyBibtex}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-background-elevated border border-border hover:border-slate-600 text-scientific-slate hover:text-white transition-colors"
          title="Copy BibTeX Citation"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400">Copied</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>BibTeX</span>
            </>
          )}
        </button>
      </div>
    </Card>
  );
};

