
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  title: string;
  description: React.ReactNode;
  index: number;
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  index,
  className,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={cn(
        'glass-card p-6 opacity-0 animate-fadeIn transition-all duration-300', 
        isHovered ? 'border-l-accent -translate-x-2 brutal-shadow' : 'border-l-accent/50',
        className
      )}
      style={{ animationDelay: `${300 + index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h3 className="text-xl font-medium mb-4 text-white font-mono uppercase">{title}</h3>
      <div className="text-muted-foreground space-y-2">
        {description}
      </div>
    </div>
  );
};

export default ProjectCard;
