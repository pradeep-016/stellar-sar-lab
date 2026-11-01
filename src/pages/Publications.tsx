import React, { useState } from 'react';
import { publications } from '../data/publications';
import { PublicationCard } from '../components/cards/PublicationCard';
import { Badge } from '../components/common/Badge';
import { BookOpen, Search, Info, Clock } from 'lucide-react';

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
            StellarLab is a newly established research initiative. Our publication portfolio is currently being established, starting with our inaugural research manuscript on the Associative Reward Model (ARM).
          </p>
        </div>

        {/* Portfolio Status Banner */}
        <div className="mb-12 p-6 rounded-2xl bg-background-surface/90 border border-accent-blue/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 backdrop-blur-md">
          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 text-accent-blue flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-base font-bold text-white font-display">
                Laboratory Publication Portfolio Being Established
              </h3>
              <p className="text-xs sm:text-sm text-scientific-slate mt-1 max-w-2xl leading-relaxed">
                As an empirical research initiative founded in 2026, our inaugural papers and benchmark findings are currently being prepared for peer-reviewed submission and open-access distribution.
              </p>
            </div>
          </div>
          <Badge variant="cyan" size="sm">
            Portfolio in Progress
          </Badge>
        </div>

        {/* Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-8 mb-12 border-b border-border/80">
          <div className="text-xs font-mono text-scientific-muted uppercase tracking-wider">
            Active Manuscripts & Upcoming Releases:
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

        {/* Publications List */}
        <div className="space-y-8">
          {filtered.length > 0 ? (
            filtered.map((pub) => (
              <PublicationCard key={pub.id} publication={pub} />
            ))
          ) : (
            <div className="text-center py-16 bg-background-surface/50 border border-border rounded-2xl">
              <BookOpen className="w-8 h-8 text-scientific-muted mx-auto mb-3" />
              <div className="text-sm font-semibold text-white">No matching outputs found</div>
              <p className="text-xs text-scientific-slate mt-1">
                Try adjusting your search query.
              </p>
            </div>
          )}
        </div>

        {/* Scientific Integrity Callout */}
        <div className="mt-16 p-6 rounded-2xl bg-background-surface/60 border border-border text-xs text-scientific-slate space-y-2">
          <div className="text-white font-mono font-semibold uppercase tracking-wider flex items-center gap-2">
            <Info className="w-4 h-4 text-accent-blue" />
            <span>Research Separation & Integrity Policy</span>
          </div>
          <p>
            StellarLab reports only verified research conducted under the laboratory's auspices. Previous research projects conducted independently by the founder remain classified under their personal portfolio and are strictly separated from StellarLab’s institutional publication records.
          </p>
        </div>
      </div>
    </div>
  );
};
