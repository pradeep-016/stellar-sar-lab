import React, { useState } from 'react';
import { publications } from '../data/publications';
import { PublicationCard } from '../components/cards/PublicationCard';
import { Badge } from '../components/common/Badge';
import { BookOpen, Filter, Search } from 'lucide-react';

export const Publications: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filtered = publications.filter((pub) => {
    const matchesCategory =
      selectedCategory === 'all' || pub.category === selectedCategory;
    const matchesSearch =
      searchQuery === '' ||
      pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.abstract.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.keywords.some((k) => k.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <Badge variant="blue" size="sm">
            ACADEMIC OUTPUTS
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mt-3 mb-6 font-display">
            Publications & Preprints
          </h1>
          <p className="text-lg text-scientific-slate leading-relaxed">
            Peer-reviewed workshop articles, preprints, and reproducible academic contributions from StellarLab.
          </p>
        </div>

        {/* Filters and Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-8 mb-12 border-b border-border/80">
          {/* Categories */}
          <div className="flex flex-wrap items-center gap-2 self-start sm:self-auto">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-accent-blue text-background-deep font-bold'
                  : 'bg-background-surface border border-border text-scientific-slate hover:text-white'
              }`}
            >
              All Research
            </button>
            <button
              onClick={() => setSelectedCategory('workshop')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors ${
                selectedCategory === 'workshop'
                  ? 'bg-accent-blue text-background-deep font-bold'
                  : 'bg-background-surface border border-border text-scientific-slate hover:text-white'
              }`}
            >
              Workshop Publications
            </button>
            <button
              onClick={() => setSelectedCategory('preprint')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors ${
                selectedCategory === 'preprint'
                  ? 'bg-accent-blue text-background-deep font-bold'
                  : 'bg-background-surface border border-border text-scientific-slate hover:text-white'
              }`}
            >
              Preprints
            </button>
            <button
              onClick={() => setSelectedCategory('in_progress')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors ${
                selectedCategory === 'in_progress'
                  ? 'bg-accent-blue text-background-deep font-bold'
                  : 'bg-background-surface border border-border text-scientific-slate hover:text-white'
              }`}
            >
              Research in Progress
            </button>
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-scientific-muted absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search title, keywords..."
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
                Try adjusting your search criteria or category filter.
              </p>
            </div>
          )}
        </div>

        {/* Scientific Integrity Callout */}
        <div className="mt-16 p-6 rounded-2xl bg-background-surface/60 border border-border text-xs text-scientific-slate space-y-2">
          <div className="text-white font-mono font-semibold uppercase tracking-wider">
            Bibliographic Integrity Protocol
          </div>
          <p>
            StellarLab strictly reports verified publication milestones. Missing DOI entries, pending author listings, and proceeding dates remain designated as configuration placeholders until formally issued by conference organizers.
          </p>
        </div>
      </div>
    </div>
  );
};
