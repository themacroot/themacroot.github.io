
import React from 'react';
import { cn } from '@/lib/utils';

interface EducationCardProps {
  institution: string;
  degree: string;
  period: string;
  achievement?: string;
  index: number;
  className?: string;
}

const EducationCard: React.FC<EducationCardProps> = ({
  institution,
  degree,
  period,
  achievement,
  index,
  className,
}) => {
  return (
    <div 
      className={cn(
        'glass-card p-6 hover-scale opacity-0 animate-fadeIn', 
        className
      )}
      style={{ animationDelay: `${200 + index * 100}ms` }}
    >
      <h3 className="text-lg font-medium mb-1">{institution}</h3>
      <p className="text-muted-foreground mb-1">{degree}</p>
      <p className="text-sm text-muted-foreground mb-2">{period}</p>
      {achievement && (
        <div className="chip bg-primary/10 text-primary">{achievement}</div>
      )}
    </div>
  );
};

export default EducationCard;
