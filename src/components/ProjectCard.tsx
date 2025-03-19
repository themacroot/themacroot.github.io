
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { useParallax } from '@/hooks/useParallax';

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
        'terminal-box opacity-0 animate-fadeIn transition-all duration-300 relative', 
        isHovered ? 'border-accent -translate-x-2 brutal-shadow-green' : 'border-accent/50',
        className
      )}
      style={{ 
        ...parallaxStyle,
        animationDelay: `${300 + index * 100}ms` 
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute top-0 right-0 p-1 text-xs opacity-50 terminal-text">
        {`// PROJECT_${index + 1}`}
      </div>
      
      <h3 className="text-xl font-medium mb-4 text-accent font-mono uppercase">
        <span className="terminal-prompt">{title}</span>
      </h3>
      
      <div className="text-muted-foreground space-y-2">
        {description}
      </div>
      
      {isHovered && (
        <div className="mt-4 text-xs text-accent opacity-70">
          {`/* Project Completion: ${Math.floor(Math.random() * 5) + 95}% */`}
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
