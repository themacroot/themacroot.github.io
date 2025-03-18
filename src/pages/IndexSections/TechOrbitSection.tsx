
import React, { useEffect, useRef } from 'react';
import { useParallax } from '@/hooks/useParallax';
import { Rocket, Satellite, Code, Terminal, Cpu, HardDrive } from 'lucide-react';

const TechOrbitSection = () => {
  const scrollY = useParallax();
  const containerRef = useRef<HTMLDivElement>(null);
  
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
        <div className="absolute w-96 h-96 rounded-full border border-accent/20 animate-spin" style={{ animationDuration: '40s' }}></div>
        <div className="absolute w-64 h-64 rounded-full border border-accent/30 animate-spin" style={{ animationDuration: '30s' }}></div>
        <div className="absolute w-40 h-40 rounded-full border border-accent/40 animate-spin" style={{ animationDuration: '20s' }}></div>
        
        {/* Orbit Elements */}
        <Rocket data-depth="2" className="orbit-element absolute text-accent text-4xl" style={{ top: '10%', right: '30%' }} />
        <Satellite data-depth="1.5" className="orbit-element absolute text-accent text-3xl" style={{ bottom: '20%', left: '25%' }} />
        <Code data-depth="3" className="orbit-element absolute text-accent text-4xl" style={{ top: '40%', left: '15%' }} />
        <Terminal data-depth="2.5" className="orbit-element absolute text-accent text-3xl" style={{ bottom: '30%', right: '20%' }} />
        <Cpu data-depth="1.8" className="orbit-element absolute text-accent text-3xl" style={{ top: '25%', left: '35%' }} />
        <HardDrive data-depth="2.2" className="orbit-element absolute text-accent text-3xl" style={{ top: '60%', right: '15%' }} />
        
        {/* Central Element */}
        <div className="relative z-10 text-center px-6">
          <div className="glitch-container">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-mono mb-6 glitch-text tracking-tight uppercase">
              Tech <span className="text-accent">Explorer</span>
            </h1>
          </div>
          <p className="text-lg md:text-xl terminal-text max-w-3xl mx-auto">
            <span className="terminal-prompt">Initiating neural interface</span>
            <span className="animate-blink">_</span>
          </p>
          <div className="mt-8 inline-block">
            <div className="scanner"></div>
            <p className="text-sm opacity-80 mt-4 terminal-text">Scroll down to explore the tech universe</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechOrbitSection;
