import React from 'react';
import { clsx } from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glow';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  asLink?: boolean;
  href?: string;
  target?: string;
  rel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  className,
  asLink = false,
  href,
  target,
  rel,
  disabled,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue/50 disabled:opacity-50 disabled:cursor-not-allowed select-none group';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5',
    md: 'text-sm px-4 py-2.5 gap-2',
    lg: 'text-base px-6 py-3.5 gap-2.5 font-semibold',
  };

  const variantStyles = {
    primary:
      'bg-accent-blue text-background-deep hover:bg-sky-400 font-semibold shadow-lg shadow-accent-blue/20 hover:shadow-accent-blue/35 active:scale-[0.98]',
    secondary:
      'bg-background-elevated hover:bg-slate-800 text-scientific-light border border-border hover:border-slate-600',
    outline:
      'bg-transparent text-scientific-light border border-border hover:border-accent-blue/60 hover:text-accent-blue hover:bg-accent-blue/5',
    ghost:
      'bg-transparent text-scientific-slate hover:text-scientific-light hover:bg-slate-800/50',
    glow:
      'bg-gradient-to-r from-accent-blue to-accent-cyan text-background-deep font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:brightness-110 active:scale-[0.98]',
  };

  const combinedClasses = clsx(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    className
  );

  if (asLink && href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}
        className={combinedClasses}
      >
        {icon && iconPosition === 'left' && <span className="flex-shrink-0 transition-transform group-hover:-translate-x-0.5">{icon}</span>}
        <span>{children}</span>
        {icon && iconPosition === 'right' && <span className="flex-shrink-0 transition-transform group-hover:translate-x-0.5">{icon}</span>}
      </a>
    );
  }

  return (
    <button
      className={combinedClasses}
      disabled={disabled}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="flex-shrink-0 transition-transform group-hover:-translate-x-0.5">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="flex-shrink-0 transition-transform group-hover:translate-x-0.5">{icon}</span>}
    </button>
  );
};

