
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  id?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, subtitle, children, className }) => {
  return (
    <section id={id} className={cn('py-16 md:py-24 opacity-0 animate-fadeIn', className)}>
      <div className="mb-10">
        <h2 className="text-3xl md:text-4xl font-display mb-2">{title}</h2>
        {subtitle && <p className="text-lg text-muted-foreground">{subtitle}</p>}
      </div>
      {children}
    </section>
  );
};

export default Section;
