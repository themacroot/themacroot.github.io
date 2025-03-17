
import React from 'react';
import { cn } from '@/lib/utils';

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
  return (
    <div 
      className={cn(
        'glass-card p-6 md:p-8 hover-scale opacity-0 animate-fadeIn', 
        className
      )}
      style={{ animationDelay: `${200 + index * 100}ms` }}
    >
      <div className="chip mb-2">{period}</div>
      <h3 className="text-xl font-medium mb-1">{title}</h3>
      <div className="flex flex-wrap items-center gap-2 mb-4">
        <span className="font-medium text-muted-foreground">{company}</span>
        <span className="text-muted-foreground text-sm">| {location}</span>
      </div>
      <div className="text-muted-foreground space-y-2">
        {description}
      </div>
    </div>
  );
};

export default ExperienceCard;
