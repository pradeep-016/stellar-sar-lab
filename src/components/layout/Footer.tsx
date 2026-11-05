import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../../config/site';
import { Github, Mail, ArrowUpRight, Shield } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background-deep border-t border-border/80 text-scientific-slate pt-16 pb-12 mt-20 relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-48 bg-accent-blue/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-border/60">
          {/* Col 1 & 2: Brand Identity */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 flex-shrink-0">
                <img
                  src="./logo.png"
                  alt="StellarLab Logo"
                  className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(56,189,248,0.3)]"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-white font-display text-lg tracking-tight">
                  Stellar<span className="text-accent-blue">Lab</span>
                </span>
                <span className="text-[10px] font-mono text-scientific-muted uppercase tracking-wider">
                  {siteConfig.fullName}
                </span>
              </div>
            </Link>

            <p className="text-sm text-scientific-slate leading-relaxed max-w-sm">
              StellarLab is an independent research initiative investigating empirical AI safety, reward modeling, evaluator reliability, and alignment under optimization pressure.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={siteConfig.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-background-surface border border-border flex items-center justify-center text-scientific-slate hover:text-white hover:border-slate-600 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.huggingFaceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-background-surface border border-border flex items-center justify-center text-scientific-slate hover:text-white hover:border-slate-600 transition-colors font-mono text-sm"
                aria-label="Hugging Face"
                title="Hugging Face Organization"
              >
                🤗
              </a>
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="w-9 h-9 rounded-lg bg-background-surface border border-border flex items-center justify-center text-scientific-slate hover:text-white hover:border-slate-600 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 3: Research Focus */}
          <div>
            <h4 className="text-xs font-mono font-semibold text-white uppercase tracking-wider mb-4">
              Research Directions
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {siteConfig.footerLinks.research.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-scientific-slate hover:text-accent-blue transition-colors flex items-center gap-1 group"
                  >
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Selected Projects */}
          <div>
            <h4 className="text-xs font-mono font-semibold text-white uppercase tracking-wider mb-4">
              Projects & Models
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {siteConfig.footerLinks.projects.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-scientific-slate hover:text-accent-blue transition-colors flex items-center gap-1"
                  >
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/models"
                  className="text-scientific-slate hover:text-accent-blue transition-colors flex items-center gap-1"
                >
                  <span>Model Releases (ARM)</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/publications"
                  className="text-scientific-slate hover:text-accent-blue transition-colors flex items-center gap-1"
                >
                  <span>Publications (In Prep)</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Lab Navigation & Contact */}
          <div>
            <h4 className="text-xs font-mono font-semibold text-white uppercase tracking-wider mb-4">
              Laboratory
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link to="/about" className="text-scientific-slate hover:text-white transition-colors">
                  About Mission
                </Link>
              </li>
              <li>
                <Link to="/updates" className="text-scientific-slate hover:text-white transition-colors">
                  Research Updates
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-scientific-slate hover:text-white transition-colors">
                  Contact & Inquiries
                </Link>
              </li>
              <li className="pt-2">
                <a
                  href={`mailto:${siteConfig.contactEmail}`}
                  className="text-xs font-mono text-accent-blue hover:underline break-all block"
                >
                  {siteConfig.contactEmail}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-scientific-muted">
          <div>
            © {currentYear} {siteConfig.fullName} (StellarLab). All rights reserved.
          </div>

          <div className="flex items-center gap-2 text-scientific-dim text-center md:text-right">
            <Shield className="w-3.5 h-3.5 text-scientific-muted flex-shrink-0" />
            <span>Independent empirical AI safety initiative. Not a registered corporation or university entity.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

