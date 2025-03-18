
import React from 'react';
import { cn } from '@/lib/utils';
import { useParallax } from '@/hooks/useParallax';

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  location: string;
  description: React.ReactNode;
  index: number;
  className?: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  company,
  period,
  location,
  description,
  index,
  className,
}) => {
  const scrollY = useParallax();
  
  const parallaxStyle = {
    transform: `translateY(${scrollY * 0.05 * (index % 2 + 1)}px)`
  };

  return (
    <div 
      className={cn(
        'terminal-box p-6 md:p-8 hover:brutal-shadow-green opacity-0 animate-fadeIn relative', 
        className
      )}
      style={{ 
        ...parallaxStyle,
        animationDelay: `${200 + index * 100}ms` 
      }}
    >
      <div className="absolute top-0 right-0 p-1 text-xs opacity-50 terminal-text">
        {`// EXP_${index + 1}`}
      </div>
      
      <div className="chip mb-2 font-mono">{period}</div>
      <h3 className="text-xl font-medium mb-1 font-mono uppercase terminal-text">{title}</h3>
      <div className="flex flex-wrap items-center gap-2 mb-4">
        <span className="font-medium text-accent">{company}</span>
        <span className="text-muted-foreground text-sm font-mono">| {location}</span>
      </div>
      <div className="text-muted-foreground space-y-2">
        {description}
      </div>
      
      <div className="mt-4 text-xs text-accent opacity-70">
        {`/* ${Math.floor(Math.random() * 100) + 100}% efficiency */`}
      </div>
    </div>
  );
};

export default ExperienceCard;
