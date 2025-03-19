
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
  const [isHovered, setIsHovered] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
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
  
  // Random skew angle for brutalist effect
  const randomSkew = Math.random() * 2 - 1;

  return (
    <section 
      id={id} 
      ref={sectionRef}
      className={cn(
        'py-16 md:py-24 transition-all duration-1000 parallax-section relative',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10',
        getPattern(),
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className="parallax-bg" 
        style={parallaxStyle}
      />
      
      <div className="relative z-10 mb-10">
        <div 
          ref={titleRef}
          className={cn(
            "inline-block mb-8 px-8 py-4 bg-background border-4 border-accent shadow-brutal overflow-hidden",
            isHovered ? "animate-skew" : ""
          )}
          style={{ transform: `skew(${randomSkew}deg)` }}
        >
          <span className="terminal-text text-2xl uppercase font-bold text-accent">{title}</span>
        </div>
        
        {subtitle && (
          <p className="text-lg text-muted-foreground font-bold terminal-text ml-4 border-l-4 border-accent pl-4">
            {subtitle}
          </p>
        )}
      </div>
      
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Decorative elements for brutalist design */}
      <div className="absolute -bottom-4 right-4 w-16 h-16 border-4 border-accent hidden md:block" 
        style={{ transform: `rotate(${Math.random() * 10}deg)` }}
      />
      
      <div className="absolute top-8 -right-4 w-8 h-36 bg-accent/10 hidden md:block" 
        style={{ transform: `skew(${Math.random() * 10}deg)` }}
      />
    </section>
  );
};

export default Section;
