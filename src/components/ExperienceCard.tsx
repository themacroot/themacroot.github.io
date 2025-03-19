
import React from 'react';
import { cn } from '@/lib/utils';
import { useParallax } from '@/hooks/useParallax';
import { Calendar, MapPin } from 'lucide-react';

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
        'experience-card opacity-0 animate-fadeIn hover-lift', 
        className
      )}
      style={{ 
        ...parallaxStyle,
        animationDelay: `${200 + index * 100}ms` 
      }}
    >
      <h3 className="text-xl font-medium mb-1">{title}</h3>
      <div className="text-lg font-medium text-primary mb-2">{company}</div>
      
      <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-sm mb-4">
        <div className="flex items-center">
          <Calendar size={14} className="mr-1" />
          <span>{period}</span>
        </div>
        <div className="flex items-center">
          <MapPin size={14} className="mr-1" />
          <span>{location}</span>
        </div>
      </div>
      
      <div className="text-muted-foreground space-y-2">
        {description}
      </div>
    </div>
  );
};

export default ExperienceCard;
