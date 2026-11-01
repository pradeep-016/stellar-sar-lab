import React, { useState } from 'react';
import { siteConfig } from '../config/site';
import { Badge } from '../components/common/Badge';
import { Mail, Github, ExternalLink, Copy, Check, MessageSquare, Shield, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const copyEmail = () => {
    navigator.clipboard.writeText(siteConfig.contactEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleMailto = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${siteConfig.contactEmail}?subject=${encodeURIComponent(
      subject || 'Research Inquiry: StellarLab'
    )}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <div className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <Badge variant="blue" size="sm">
            GET IN TOUCH
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mt-3 mb-6 font-display">
            Contact & Research Collaboration
          </h1>
          <p className="text-lg text-scientific-slate leading-relaxed">
            We welcome academic inquiries, empirical evaluations, joint safety investigations, and discussions regarding reward modeling and test-time verifiers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact & Channels */}
          <div className="lg:col-span-5 space-y-6">
            {/* Primary Email Card */}
            <div className="bg-background-surface/90 border border-border rounded-2xl p-6 sm:p-8 backdrop-blur-md">
              <span className="text-xs font-mono text-accent-blue uppercase tracking-wider block mb-2">
                PRIMARY CORRESPONDENCE
              </span>
              <h3 className="text-xl font-bold text-white mb-2 font-display">
                Email the Laboratory
              </h3>
              <p className="text-xs sm:text-sm text-scientific-slate mb-6 leading-relaxed">
                For research correspondence, paper discussion, workshop feedback, and collaboration inquiries.
              </p>

              <div className="p-3.5 rounded-xl bg-background-deep border border-border flex items-center justify-between gap-2 mb-4">
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <Mail className="w-4 h-4 text-accent-blue flex-shrink-0" />
                  <a
                    href={`mailto:${siteConfig.contactEmail}`}
                    className="font-mono text-xs sm:text-sm text-white hover:text-accent-blue truncate"
                  >
                    {siteConfig.contactEmail}
                  </a>
                </div>
                <button
                  onClick={copyEmail}
                  className="p-1.5 rounded-lg bg-background-elevated hover:bg-slate-800 text-scientific-slate hover:text-white transition-colors flex-shrink-0"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              <div className="text-[11px] font-mono text-scientific-muted">
                Replies typically sent within 2–3 business days.
              </div>
            </div>

            {/* Code & Model Platforms */}
            <div className="bg-background-surface/90 border border-border rounded-2xl p-6 sm:p-8 backdrop-blur-md space-y-4">
              <span className="text-xs font-mono text-scientific-muted uppercase tracking-wider block">
                OFFICIAL PLATFORMS
              </span>

              <a
                href={siteConfig.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl bg-background-card border border-border hover:border-slate-600 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <Github className="w-5 h-5 text-white" />
                  <div>
                    <div className="text-sm font-semibold text-white group-hover:text-accent-blue transition-colors">
                      GitHub Organization
                    </div>
                    <div className="text-xs font-mono text-scientific-muted">
                      pradeep-016/stellar-sar-lab
                    </div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-scientific-muted group-hover:text-white" />
              </a>

              <a
                href={siteConfig.huggingFaceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl bg-background-card border border-border hover:border-slate-600 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">🤗</span>
                  <div>
                    <div className="text-sm font-semibold text-white group-hover:text-accent-blue transition-colors">
                      Hugging Face Organization
                    </div>
                    <div className="text-xs font-mono text-scientific-muted">
                      StellarLab Model Releases
                    </div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-scientific-muted group-hover:text-white" />
              </a>
            </div>

            {/* Integrity Notice */}
            <div className="p-4 rounded-xl bg-background-deep/60 border border-border/80 text-xs text-scientific-slate flex items-start gap-3">
              <Shield className="w-4 h-4 text-accent-blue flex-shrink-0 mt-0.5" />
              <div>
                <strong>Transparency Guarantee:</strong> StellarLab does not maintain automated marketing funnels, fake social bots, or unauthorized institutional affiliations.
              </div>
            </div>
          </div>

          {/* Right Column: Direct Dispatch Composer */}
          <div className="lg:col-span-7 bg-background-surface/90 border border-border rounded-2xl p-6 sm:p-8 md:p-10 backdrop-blur-md">
            <span className="text-xs font-mono text-accent-cyan uppercase tracking-wider block mb-2">
              RESEARCH DISPATCH
            </span>
            <h3 className="text-2xl font-bold text-white mb-2 font-display">
              Initiate Research Discussion
            </h3>
            <p className="text-xs sm:text-sm text-scientific-slate mb-8 leading-relaxed">
              Compose a message below to launch your default email client with your query directly addressed to StellarLab.
            </p>

            <form onSubmit={handleMailto} className="space-y-5">
              <div>
                <label className="block text-xs font-mono text-scientific-muted uppercase tracking-wider mb-2">
                  Inquiry Topic / Subject
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Evaluator Reliability Paper Discussion, BoN Empirical Replication..."
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full bg-background-card border border-border rounded-xl px-4 py-3 text-sm text-white placeholder-scientific-muted focus:outline-none focus:border-accent-blue transition-colors font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-scientific-muted uppercase tracking-wider mb-2">
                  Message / Collaboration Proposal
                </label>
                <textarea
                  required
                  rows={6}
                  placeholder="Share details regarding your research question, proposed experiment, or reproducibility inquiry..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-background-card border border-border rounded-xl px-4 py-3 text-sm text-white placeholder-scientific-muted focus:outline-none focus:border-accent-blue transition-colors font-mono leading-relaxed"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-mono text-sm font-bold bg-accent-blue text-background-deep hover:bg-sky-300 shadow-lg shadow-accent-blue/20 transition-all"
              >
                <Send className="w-4 h-4" />
                <span>Launch Email Client</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

