
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
  
  // Random rotation for brutalist effect
  const randomRotation = (index % 3 - 1) * 0.5;
  
  return (
    <div 
      className={cn(
        'opacity-0 animate-fadeIn transition-all duration-300 relative border-4 border-accent bg-secondary/50 p-8', 
        isHovered ? 'shadow-brutal -translate-x-2 -translate-y-2' : '',
        className
      )}
      style={{ 
        ...parallaxStyle,
        animationDelay: `${300 + index * 100}ms`,
        transform: `${parallaxStyle.transform} rotate(${randomRotation}deg)`
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project number marker */}
      <div className="absolute -top-4 -left-4 bg-accent text-background py-1 px-3 font-bold text-lg">
        {`${index + 1}`}
      </div>
      
      <h3 className="text-2xl font-bold mb-6 text-accent font-mono uppercase">
        {title}
      </h3>
      
      <div className="text-foreground space-y-2 relative">
        {description}
        
        {/* Decorative element */}
        <div 
          className={cn(
            "absolute -bottom-4 -right-4 w-12 h-12 border-2 border-accent transition-opacity duration-300",
            isHovered ? "opacity-100" : "opacity-0"
          )}
        />
      </div>
      
      {isHovered && (
        <div className="mt-6 text-xs text-accent font-mono">
          {`// EXPAND YOUR MIND`}
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
