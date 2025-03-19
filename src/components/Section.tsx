
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { useParallax } from '@/hooks/useParallax';

interface SectionProps {
  id?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  patternType?: 'grid' | 'binary' | 'dots' | 'none';
  parallaxSpeed?: number;
}

const Section: React.FC<SectionProps> = ({ 
  id, 
  title, 
  subtitle, 
  children, 
  className,
  patternType = 'none',
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

  const getPattern = () => {
    switch (patternType) {
      case 'grid':
        return 'grid-pattern';
      case 'binary':
        return 'binary-bg';
      case 'dots':
        return 'dot-pattern';
      default:
        return '';
    }
  };

  const parallaxStyle = {
    transform: `translateY(${scrollY * parallaxSpeed}px)`
  };

  return (
    <section 
      id={id} 
      ref={sectionRef}
      className={cn(
        'py-16 md:py-24 transition-all duration-1000 parallax-section',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10',
        getPattern(),
        className
      )}
    >
      <div 
        className="parallax-bg" 
        style={parallaxStyle}
      />
      
      <div className="relative z-10 mb-10">
        <div className="terminal-box inline-block mb-4 px-4 py-2">
          <span className="terminal-prompt typewriter">{title}</span>
        </div>
        
        {subtitle && (
          <p className="text-lg text-muted-foreground font-normal terminal-text">
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
