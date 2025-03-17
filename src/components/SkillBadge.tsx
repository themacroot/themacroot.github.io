
import React from 'react';
import { cn } from '@/lib/utils';

interface SkillBadgeProps {
  children: React.ReactNode;
  className?: string;
  index: number;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ children, className, index }) => {
  return (
    <div 
      className={cn(
        'px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground font-medium text-sm opacity-0 animate-fadeIn',
        className
      )}
      style={{ animationDelay: `${200 + index * 50}ms` }}
    >
      {children}
    </div>
  );
};

export default SkillBadge;
