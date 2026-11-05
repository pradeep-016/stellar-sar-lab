import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { siteConfig } from '../../config/site';
import { Menu, X, ExternalLink, Github, Sparkles } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when changing route
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-background-deep/90 backdrop-blur-md border-b border-border/80 shadow-lg shadow-black/30 py-3'
        : 'bg-transparent border-b border-border/30 py-4 md:py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue/50 rounded-lg p-1"
          >
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 flex-shrink-0">
              <img
                src="./logo.png"
                alt="StellarLab Logo"
                className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(56,189,248,0.4)] group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-bold tracking-tight text-white font-display text-lg sm:text-xl">
                  Stellar<span className="text-accent-blue">Lab</span>
                </span>
                <span className="hidden sm:inline-block text-[10px] font-mono uppercase tracking-widest text-accent-cyan bg-accent-cyan/10 px-1.5 py-0.5 rounded border border-accent-cyan/20">
                  ASION
                </span>
              </div>
              <span className="text-[10px] sm:text-[11px] font-mono text-scientific-muted tracking-wider uppercase -mt-0.5">
                Alignment & Inference Safety
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {siteConfig.navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`relative px-3 py-1.5 text-sm font-medium transition-colors rounded-md ${active
                    ? 'text-white font-semibold'
                    : 'text-scientific-slate hover:text-white hover:bg-slate-800/40'
                    }`}
                >
                  {item.label}
                  {active && (
                    <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-accent-blue to-accent-cyan rounded-full shadow-[0_0_8px_#38bdf8]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Header CTAs & External Links */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={siteConfig.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-scientific-slate hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors"
              aria-label="GitHub Repository"
              title="GitHub Repository"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={siteConfig.huggingFaceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-scientific-slate hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors flex items-center gap-1.5 font-mono text-xs"
              aria-label="Hugging Face Models"
              title="Hugging Face Models"
            >
              <span className="text-base leading-none">🤗</span>
              <span className="hidden xl:inline">HF</span>
            </a>

            <Link
              to="/projects"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold font-mono bg-accent-blue/10 text-accent-blue border border-accent-blue/30 hover:bg-accent-blue hover:text-background-deep transition-all duration-200"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Research</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-scientific-slate hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-accent-blue"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-background-deep/98 backdrop-blur-xl border-b border-border shadow-2xl px-6 py-6 space-y-4 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-2">
            {siteConfig.navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`flex items-center justify-between px-4 py-2.5 rounded-lg text-base font-medium transition-colors ${active
                    ? 'bg-accent-blue/15 text-accent-blue font-semibold border border-accent-blue/30'
                    : 'text-scientific-slate hover:text-white hover:bg-slate-800/40'
                    }`}
                >
                  <span>{item.label}</span>
                  {active && <span className="w-1.5 h-1.5 rounded-full bg-accent-blue" />}
                </Link>
              );
            })}
          </nav>

          <div className="pt-4 border-t border-border flex items-center justify-between text-xs font-mono text-scientific-slate">
            <a
              href={siteConfig.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white py-1"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href={siteConfig.huggingFaceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white py-1"
            >
              <span>🤗 Hugging Face</span>
            </a>
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="text-accent-blue hover:underline py-1"
            >
              Contact Lab
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

