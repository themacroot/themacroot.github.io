
import React, { useState } from 'react';
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
  const [isHovered, setIsHovered] = useState(false);
  const scrollY = useParallax();
  
  const parallaxStyle = {
    transform: `translateY(${scrollY * 0.05 * (index % 2 + 1)}px)`
  };
  
  // Random skew for brutalist effect
  const randomSkew = (index % 2) * 0.5;

  return (
    <div 
      className={cn(
        'p-8 opacity-0 animate-fadeIn relative border-4 border-accent bg-secondary/50', 
        isHovered ? 'shadow-brutal -translate-x-2 -translate-y-2' : '',
        className
      )}
      style={{ 
        ...parallaxStyle,
        animationDelay: `${200 + index * 100}ms`,
        transform: `${parallaxStyle.transform} skew(${randomSkew}deg)`
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute top-0 right-0 bg-accent text-background py-1 px-4 font-bold">
        {period}
      </div>
      
      <h3 className="text-2xl font-bold mb-4 font-mono uppercase text-accent">{title}</h3>
      
      <div className="flex flex-wrap items-center gap-4 mb-6">
        <span className="font-bold text-foreground text-xl">{company}</span>
        <span className="text-muted-foreground font-mono text-sm border-l-4 border-accent pl-4">{location}</span>
      </div>
      
      <div className="text-foreground space-y-4">
        {description}
      </div>
      
      {/* Decorative elements */}
      <div 
        className={cn(
          "absolute -bottom-2 -left-2 w-6 h-6 bg-accent transition-opacity duration-300",
          isHovered ? "opacity-100" : "opacity-0"
        )}
      />
      
      <div 
        className={cn(
          "absolute -top-2 -right-2 w-6 h-6 bg-accent transition-opacity duration-300",
          isHovered ? "opacity-100" : "opacity-0"
        )}
      />
    </div>
  );
};

export default ExperienceCard;
