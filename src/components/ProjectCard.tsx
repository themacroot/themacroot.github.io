
import React from 'react';
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
  return (
    <div 
      className={cn(
        'glass-card p-6 md:p-8 hover-scale opacity-0 animate-fadeIn', 
        className
      )}
      style={{ animationDelay: `${300 + index * 100}ms` }}
    >
      <h3 className="text-xl font-medium mb-4">{title}</h3>
      <div className="text-muted-foreground space-y-2">
        {description}
      </div>
    </div>
  );
};

export default ProjectCard;
