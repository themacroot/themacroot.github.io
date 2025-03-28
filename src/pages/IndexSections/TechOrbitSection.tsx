
import React, { useEffect, useRef } from 'react';
import { useParallax } from '@/hooks/useParallax';
import { Code, Database, Globe, Server, Shield, SmartphoneCharging } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const TechOrbitSection = () => {
  const scrollY = useParallax();
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      const orbitElements = container.querySelectorAll('.orbit-element');
      const rect = container.getBoundingClientRect();
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      
      const angleX = (mouseX - centerX) / 50;
      const angleY = (mouseY - centerY) / 50;
      
      orbitElements.forEach((element) => {
        const el = element as HTMLElement;
        const depth = parseFloat(el.dataset.depth || '1');
        const translateX = -angleX * depth;
        const translateY = -angleY * depth;
        
        el.style.transform = `translate(${translateX}px, ${translateY}px)`;
      });
    };
    
    container.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <div 
      className="w-full h-screen flex items-center justify-center text-primary overflow-hidden relative bg-gradient-to-b from-background to-secondary"
      style={{ 
        perspective: '1000px',
        transform: `translateY(${scrollY * 0.1}px)`
      }}
      ref={containerRef}
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-[url('data:image/svg+xml,%3Csvg width=\"20\" height=\"20\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"M0 0h20v20H0z\" fill=\"%23000\" fill-opacity=\".05\"/%3E%3C/svg%3E')] bg-[length:20px_20px]"></div>
      </div>
      
      {/* Floating Tech Elements */}
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Responsive orbits - hidden on mobile */}
        {!isMobile && (
          <>
            <div className="absolute w-96 h-96 rounded-full border border-primary/10 animate-spin-slow"></div>
            <div className="absolute w-64 h-64 rounded-full border border-primary/15 animate-spin-slow" style={{ animationDuration: '30s', animationDirection: 'reverse' }}></div>
            <div className="absolute w-40 h-40 rounded-full border border-primary/20 animate-spin-slow" style={{ animationDuration: '20s' }}></div>
          </>
        )}
        
        {/* Orbit Elements */}
        <Code 
          data-depth="2" 
          className="orbit-element absolute text-primary" 
          size={isMobile ? 24 : 32} 
          style={{ 
            top: isMobile ? '15%' : '20%', 
            right: isMobile ? '20%' : '30%' 
          }} 
        />
        <Database 
          data-depth="1.5" 
          className="orbit-element absolute text-primary" 
          size={isMobile ? 20 : 28} 
          style={{ 
            bottom: isMobile ? '15%' : '25%', 
            left: isMobile ? '15%' : '20%' 
          }} 
        />
        <Globe 
          data-depth="3" 
          className="orbit-element absolute text-primary" 
          size={isMobile ? 24 : 32} 
          style={{ 
            top: isMobile ? '35%' : '40%', 
            left: isMobile ? '10%' : '15%' 
          }} 
        />
        <Server 
          data-depth="2.5" 
          className="orbit-element absolute text-primary" 
          size={isMobile ? 20 : 28} 
          style={{ 
            bottom: isMobile ? '25%' : '30%', 
            right: isMobile ? '15%' : '20%' 
          }} 
        />
        <Shield 
          data-depth="1.8" 
          className="orbit-element absolute text-primary" 
          size={isMobile ? 20 : 28} 
          style={{ 
            top: isMobile ? '20%' : '30%', 
            left: isMobile ? '30%' : '40%' 
          }} 
        />
        <SmartphoneCharging 
          data-depth="2.2" 
          className="orbit-element absolute text-primary" 
          size={isMobile ? 20 : 28} 
          style={{ 
            top: isMobile ? '55%' : '60%', 
            right: isMobile ? '10%' : '25%' 
          }} 
        />
        
        {/* Central Element */}
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sans font-bold mb-4 sm:mb-6 tracking-tight">
            Bridging <span className="text-primary">Code, Data, and Strategy</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xs sm:max-w-md md:max-w-2xl mx-auto">
            Full Stack SDE | Solution Architect | Security Enthusiast
            <span className="animate-blink ml-1">_</span>
          </p>
          <div className="mt-8 inline-block">
            <div className="h-1 w-24 bg-primary/30 mx-auto rounded-full overflow-hidden">
              <div className="h-full w-1/2 bg-primary rounded-full animate-pulse"></div>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground mt-4">
              Scroll to explore
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechOrbitSection;
