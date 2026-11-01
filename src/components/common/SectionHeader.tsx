import React from 'react';
import { clsx } from 'clsx';
import { Badge } from './Badge';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
  badgeVariant?: 'blue' | 'cyan' | 'violet' | 'slate';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
  badgeVariant = 'blue',
}) => {
  return (
    <div
      className={clsx(
        'mb-12 md:mb-16',
        align === 'center' ? 'text-center max-w-3xl mx-auto' : 'max-w-3xl',
        className
      )}
    >
      {eyebrow && (
        <div className={clsx('mb-3', align === 'center' && 'flex justify-center')}>
          <Badge variant={badgeVariant} size="sm">
            {eyebrow}
          </Badge>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 font-display">
        {title}
      </h2>
      {description && (
        <p className="text-base sm:text-lg text-scientific-slate leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};
