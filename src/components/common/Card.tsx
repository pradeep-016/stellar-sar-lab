import React from 'react';
import { clsx } from 'clsx';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  glowOnHover?: boolean;
  bordered?: boolean;
  interactive?: boolean;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  glowOnHover = true,
  bordered = true,
  interactive = false,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={clsx(
        'relative bg-background-surface/80 backdrop-blur-md rounded-xl p-6 transition-all duration-300',
        bordered && 'border border-border/80',
        glowOnHover && 'hover:border-accent-blue/40 hover:shadow-xl hover:shadow-accent-blue/5 hover:-translate-y-0.5',
        interactive && 'cursor-pointer',
        className
      )}
    >
      {children}
    </div>
  );
};

