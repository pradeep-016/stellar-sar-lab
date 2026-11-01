import React from 'react';
import { clsx } from 'clsx';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'blue' | 'cyan' | 'violet' | 'emerald' | 'amber' | 'slate' | 'outline';
  size?: 'sm' | 'md';
  className?: string;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'blue',
  size = 'md',
  className,
  icon,
}) => {
  const variantStyles = {
    blue: 'bg-accent-blue/10 text-accent-blue border-accent-blue/30',
    cyan: 'bg-accent-cyan/10 text-accent-cyan border-accent-cyan/30',
    violet: 'bg-accent-violet/10 text-accent-violet border-accent-violet/30',
    emerald: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    amber: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
    slate: 'bg-slate-800/60 text-scientific-slate border-slate-700/60',
    outline: 'bg-transparent text-scientific-slate border-slate-700 hover:border-slate-600',
  };

  const sizeStyles = {
    sm: 'text-xs px-2.5 py-0.5 tracking-wider',
    md: 'text-xs sm:text-sm px-3 py-1 tracking-wide',
  };

  return (
    <span
      className={clsx(
        'inline-flex items-center gap-1.5 font-medium rounded-full border transition-colors font-mono',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
