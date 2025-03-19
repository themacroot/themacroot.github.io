
import React, { useEffect, useRef } from 'react';
import { useParallax } from '@/hooks/useParallax';
import { Rocket, Satellite, Code, Terminal, Cpu, HardDrive } from 'lucide-react';
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
      className="w-full h-screen flex items-center justify-center text-accent overflow-hidden relative"
      style={{ 
        perspective: '1000px',
        transform: `translateY(${scrollY * 0.1}px)`
      }}
      ref={containerRef}
    >
      {/* Starfield Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="stars-container">
          {Array.from({ length: 100 }).map((_, i) => (
            <div 
              key={i} 
              className="star"
              style={{ 
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.max(1, Math.random() * 3)}px`,
                height: `${Math.max(1, Math.random() * 3)}px`,
                animationDelay: `${Math.random() * 10}s`,
                opacity: Math.random()
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Floating Tech Elements */}
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Responsive orbits - hidden on mobile */}
        {!isMobile && (
          <>
            <div className="absolute w-96 h-96 rounded-full border border-accent/20 animate-spin" style={{ animationDuration: '40s' }}></div>
            <div className="absolute w-64 h-64 rounded-full border border-accent/30 animate-spin" style={{ animationDuration: '30s' }}></div>
            <div className="absolute w-40 h-40 rounded-full border border-accent/40 animate-spin" style={{ animationDuration: '20s' }}></div>
          </>
        )}
        
        {/* Orbit Elements - positioned differently on mobile */}
        <Rocket 
          data-depth="2" 
          className="orbit-element absolute text-accent" 
          size={isMobile ? 24 : 32} 
          style={{ 
            top: isMobile ? '5%' : '10%', 
            right: isMobile ? '20%' : '30%' 
          }} 
        />
        <Satellite 
          data-depth="1.5" 
          className="orbit-element absolute text-accent" 
          size={isMobile ? 20 : 28} 
          style={{ 
            bottom: isMobile ? '15%' : '20%', 
            left: isMobile ? '15%' : '25%' 
          }} 
        />
        <Code 
          data-depth="3" 
          className="orbit-element absolute text-accent" 
          size={isMobile ? 24 : 32} 
          style={{ 
            top: isMobile ? '35%' : '40%', 
            left: isMobile ? '10%' : '15%' 
          }} 
        />
        <Terminal 
          data-depth="2.5" 
          className="orbit-element absolute text-accent" 
          size={isMobile ? 20 : 28} 
          style={{ 
            bottom: isMobile ? '25%' : '30%', 
            right: isMobile ? '15%' : '20%' 
          }} 
        />
        <Cpu 
          data-depth="1.8" 
          className="orbit-element absolute text-accent" 
          size={isMobile ? 20 : 28} 
          style={{ 
            top: isMobile ? '20%' : '25%', 
            left: isMobile ? '30%' : '35%' 
          }} 
        />
        <HardDrive 
          data-depth="2.2" 
          className="orbit-element absolute text-accent" 
          size={isMobile ? 20 : 28} 
          style={{ 
            top: isMobile ? '55%' : '60%', 
            right: isMobile ? '10%' : '15%' 
          }} 
        />
        
        {/* Central Element - responsive text sizing */}
        <div className="relative z-10 text-center px-4 sm:px-6">
          <div className="glitch-container">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-mono mb-4 sm:mb-6 glitch-text tracking-tight uppercase">
              Bridging Code, <span className="text-accent">Data, and Strategy</span>
            </h1>
          </div>
          <p className="text-base sm:text-lg md:text-xl terminal-text max-w-xs sm:max-w-md md:max-w-3xl mx-auto">
            <span className="terminal-prompt">Where logic meets creativity...</span>
            <span className="animate-blink">_</span>
          </p>
          <div className="mt-6 sm:mt-8 inline-block">
            <div className="scanner"></div>
            <p className="text-xs sm:text-sm opacity-80 mt-4 terminal-text">⚡ Decrypting expertise. Scroll to unlock...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechOrbitSection;
