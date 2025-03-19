
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { useParallax } from '@/hooks/useParallax';
import { ExternalLink } from 'lucide-react';

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
  const scrollY = useParallax();
  
  const parallaxStyle = {
    transform: `translateY(${scrollY * 0.03 * (index % 3 + 1)}px)`
  };
  
  return (
    <div 
      className={cn(
        'project-card p-6 opacity-0 animate-fadeIn hover-lift', 
        className
      )}
      style={{ 
        ...parallaxStyle,
        animationDelay: `${300 + index * 100}ms` 
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-medium text-foreground">
          {title}
        </h3>
        
        <div className={cn(
          "transition-opacity duration-300",
          isHovered ? "opacity-100" : "opacity-0"
        )}>
          <ExternalLink size={18} className="text-primary" />
        </div>
      </div>
      
      <div className="text-muted-foreground space-y-2">
        {description}
      </div>
      
      {isHovered && (
        <div className="mt-4 h-1 w-16 bg-primary/40 rounded-full"></div>
      )}
    </div>
  );
};

export default ProjectCard;
