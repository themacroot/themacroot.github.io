
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  id?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, subtitle, children, className }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entries[0].target);
      }
    }, { threshold: 0.1 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id={id} 
      ref={sectionRef}
      className={cn(
        'py-16 md:py-24 transition-all duration-1000',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10',
        className
      )}
    >
      <div className="mb-10">
        <h2 className="text-3xl md:text-4xl font-mono uppercase mb-2 relative inline-block text-white">
          {title}
          <span className="absolute -bottom-1 left-0 w-full h-1 bg-accent rounded-none transform origin-left transition-transform duration-500" 
            style={{ transform: isVisible ? 'scaleX(1)' : 'scaleX(0)' }}
          ></span>
        </h2>
        {subtitle && <p className="text-lg text-muted-foreground font-normal">{subtitle}</p>}
      </div>
      {children}
    </section>
  );
};

export default Section;
