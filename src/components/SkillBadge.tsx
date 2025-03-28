
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface SkillBadgeProps {
  children: React.ReactNode;
  className?: string;
  index: number;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ children, className, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={cn(
        'px-3 py-1.5 rounded-full text-white font-medium text-sm opacity-0 animate-fadeIn transition-all duration-300 cursor-pointer',
        isHovered ? 'bg-primary text-white scale-110' : 'bg-secondary/80 text-white/90',
        className
      )}
      style={{ animationDelay: `${200 + index * 50}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </div>
  );
};

export default SkillBadge;
