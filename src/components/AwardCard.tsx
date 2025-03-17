
import React from 'react';
import { Award } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AwardCardProps {
  title: string;
  description: string;
  index: number;
  className?: string;
}

const AwardCard: React.FC<AwardCardProps> = ({
  title,
  description,
  index,
  className,
}) => {
  return (
    <div 
      className={cn(
        'glass-card p-6 hover-scale opacity-0 animate-fadeIn flex', 
        className
      )}
      style={{ animationDelay: `${200 + index * 100}ms` }}
    >
      <div className="mr-4 mt-1">
        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
          <Award size={16} className="text-primary" />
        </div>
      </div>
      <div>
        <h3 className="text-lg font-medium mb-1">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default AwardCard;
