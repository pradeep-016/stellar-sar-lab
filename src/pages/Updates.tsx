import React from 'react';
import { updates } from '../data/updates';
import { Badge } from '../components/common/Badge';
import { Calendar, Bell, ArrowRight, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Updates: React.FC = () => {
  return (
    <div className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <Badge variant="blue" size="sm">
            LAB DISPATCHES
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mt-3 mb-6 font-display">
            Research Updates & Milestones
          </h1>
          <p className="text-lg text-scientific-slate leading-relaxed">
            Chronological announcements, workshop acceptances, open-source model checkpoints, and research logs.
          </p>
        </div>

        {/* Timeline Stream */}
        <div className="max-w-4xl space-y-8 relative before:absolute before:inset-0 before:left-5 before:w-0.5 before:bg-border/60">
          {updates.map((update) => (
            <div
              key={update.id}
              className="relative pl-12 sm:pl-16 group"
            >
              {/* Timeline Dot */}
              <div className="absolute left-3.5 top-6 -translate-x-1/2 w-4 h-4 rounded-full bg-background-deep border-2 border-accent-blue group-hover:scale-125 transition-transform shadow-[0_0_8px_rgba(56,189,248,0.5)]" />

              <div className="bg-background-surface/85 border border-border rounded-2xl p-6 sm:p-8 backdrop-blur-md group-hover:border-accent-blue/40 transition-colors">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2">
                    <Badge variant="cyan" size="sm">
                      {update.category}
                    </Badge>
                    <span className="text-xs font-mono text-scientific-muted flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{update.date}</span>
                    </span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 font-display">
                  {update.title}
                </h3>

                <p className="text-sm sm:text-base text-scientific-light font-medium mb-3 leading-relaxed">
                  {update.summary}
                </p>

                <p className="text-xs sm:text-sm text-scientific-slate leading-relaxed mb-6">
                  {update.content}
                </p>

                {update.links && update.links.length > 0 && (
                  <div className="pt-4 border-t border-border/60 flex flex-wrap gap-4 text-xs font-mono">
                    {update.links.map((link, i) => (
                      <Link
                        key={i}
                        to={link.url}
                        className="inline-flex items-center gap-1.5 text-accent-blue hover:text-sky-300 font-semibold"
                      >
                        <span>{link.label}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* News Verification Notice */}
        <div className="mt-16 max-w-4xl p-6 rounded-2xl bg-background-deep/70 border border-border text-xs text-scientific-muted">
          <strong>Editorial Integrity Policy:</strong> StellarLab records only verified milestones, workshop acceptances, and empirical completions. Unverified news or speculative roadmap entries are not published.
        </div>
      </div>
    </div>
  );
};
