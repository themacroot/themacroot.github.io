
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
        'glass-card p-6 md:p-8 opacity-0 animate-fadeIn transition-all duration-300 border-l-4', 
        isHovered ? 'border-l-blue-500 -translate-y-1' : 'border-l-transparent',
        className
      )}
      style={{ animationDelay: `${300 + index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h3 className="text-xl font-medium mb-4 text-blue-900">{title}</h3>
      <div className="text-muted-foreground space-y-2">
        {description}
      </div>
    </div>
  );
};

export default ProjectCard;
