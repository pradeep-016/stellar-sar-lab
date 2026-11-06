import React, { useState } from 'react';
import { publications } from '../data/publications';
import { PublicationCard } from '../components/cards/PublicationCard';
import { Badge } from '../components/common/Badge';
import { BookOpen, Search, Info, Award, FileText } from 'lucide-react';

export const Publications: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filtered = publications.filter((pub) => {
    return (
      searchQuery === '' ||
      pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.abstract.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.keywords.some((k) => k.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  });

  const workshopAcceptances = filtered.filter((p) => p.category === 'workshop');
  const workingManuscripts = filtered.filter((p) => p.category !== 'workshop');

  return (
    <div className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <Badge variant="blue" size="sm">
            ACADEMIC PORTFOLIO
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mt-3 mb-6 font-display">
            Publications & Manuscripts
          </h1>
          <p className="text-lg text-scientific-slate leading-relaxed">
            Stellar ASION is an independent empirical research initiative investigating learned objectives, evaluator reliability, and preference architectures. Our academic outputs span peer-reviewed workshop acceptances and active working manuscripts.
          </p>
        </div>

        {/* Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-8 mb-12 border-b border-border/80">
          <div className="text-xs font-mono text-scientific-muted uppercase tracking-wider">
            Verified Research Outputs & Manuscripts:
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-scientific-muted absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search manuscripts, keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-background-surface border border-border rounded-xl pl-9 pr-4 py-2 text-xs font-mono text-white placeholder-scientific-muted focus:outline-none focus:border-accent-blue transition-colors"
            />
          </div>
        </div>

        {/* SUBSECTION 1: Peer-Reviewed Workshop Acceptances */}
        {workshopAcceptances.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="blue" size="sm" icon={<Award className="w-3.5 h-3.5" />}>
                PEER-REVIEWED
              </Badge>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 font-display">
              Peer-Reviewed Workshop Acceptances
            </h2>
            <div className="space-y-8">
              {workshopAcceptances.map((pub) => (
                <PublicationCard key={pub.id} publication={pub} />
              ))}
            </div>
          </div>
        )}

        {/* SUBSECTION 2: Working Manuscripts & Technical Reports */}
        {workingManuscripts.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="violet" size="sm" icon={<FileText className="w-3.5 h-3.5" />}>
                IN PREPARATION
              </Badge>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 font-display">
              Working Manuscripts & Technical Reports
            </h2>
            <div className="space-y-8">
              {workingManuscripts.map((pub) => (
                <PublicationCard key={pub.id} publication={pub} />
              ))}
            </div>
          </div>
        )}

        {filtered.length === 0 && (
          <div className="text-center py-16 bg-background-surface/50 border border-border rounded-2xl mb-16">
            <BookOpen className="w-8 h-8 text-scientific-muted mx-auto mb-3" />
            <div className="text-sm font-semibold text-white">No matching outputs found</div>
            <p className="text-xs text-scientific-slate mt-1">
              Try adjusting your search query.
            </p>
          </div>
        )}

        {/* Epistemic Status & Integrity Callout */}
        <div className="mt-16 p-6 rounded-2xl bg-background-surface/60 border border-border text-xs text-scientific-slate space-y-2">
          <div className="text-white font-mono font-semibold uppercase tracking-wider flex items-center gap-2">
            <Info className="w-4 h-4 text-accent-blue" />
            <span>Epistemic Status & Attribution Notice</span>
          </div>
          <p>
            Stellar ASION reports only verified empirical research and manuscripts. All evaluation scripts, dataset splits, and model checkpoints are released under permissive open-source licenses to facilitate direct community audit and replication.
          </p>
        </div>
      </div>
    </div>
  );
};
