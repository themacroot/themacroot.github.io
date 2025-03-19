
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { useParallax } from '@/hooks/useParallax';

interface SectionProps {
  id?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  parallaxSpeed?: number;
}

const Section: React.FC<SectionProps> = ({ 
  id, 
  title, 
  subtitle, 
  children, 
  className,
  parallaxSpeed = 0.1
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const scrollY = useParallax();

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

  const parallaxStyle = {
    transform: `translateY(${scrollY * parallaxSpeed}px)`
  };

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
      <div 
        className="relative z-10 mb-10"
        style={parallaxStyle}
      >
        <h2 className="text-3xl font-display font-medium mb-4 inline-block relative">
          {title}
          <div className="absolute -bottom-1 left-0 w-16 h-1 bg-primary/30"></div>
        </h2>
        
        {subtitle && (
          <p className="text-lg text-muted-foreground">
            {subtitle}
          </p>
        )}
      </div>
      
      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
};

export default Section;
