
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Terminal, User, Briefcase, Code, Shield, BookOpen, Award, Rocket } from 'lucide-react';
import MatrixRain from './MatrixRain';

interface ResumeLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const ResumeLayout: React.FC<ResumeLayoutProps> = ({ children, className }) => {
  const [activeSection, setActiveSection] = useState<string>('about');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  
  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
    
    // Track section view with Google Analytics
    if (window.gtag) {
      window.gtag('event', 'section_view', {
        'event_category': 'user_interaction',
        'event_label': id,
        'value': 1
      });
    }
  };
  
  // Track initial section view and section changes via scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'projects', 'skills', 'education', 'awards'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const isVisible = rect.top >= 0 && rect.top <= window.innerHeight * 0.5;
          
          if (isVisible && activeSection !== section) {
            setActiveSection(section);
            
            // Track section view with Google Analytics
            if (window.gtag) {
              window.gtag('event', 'section_view', {
                'event_category': 'user_interaction',
                'event_label': section,
                'value': 1
              });
            }
            
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial section
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeSection]);

  return (
    <div className={cn('min-h-screen bg-background noise-bg space-bg', className)}>
      {/* Starfield Background instead of Matrix */}
      <div className="stars-container fixed inset-0 z-0 opacity-40 pointer-events-none">
        {Array.from({ length: 200 }).map((_, i) => (
          <div 
            key={i} 
            className="star"
            style={{ 
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.max(1, Math.random() * 3)}px`,
              height: `${Math.max(1, Math.random() * 3)}px`,
              animationDelay: `${Math.random() * 10}s`,
              opacity: Math.random() * 0.8 + 0.2
            }}
          />
        ))}
      </div>
      
      {/* Mobile Menu Toggle */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button 
          className="bg-black/60 backdrop-blur-md p-2 rounded-full border border-accent shadow-glow"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Terminal className="text-accent" />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-black/90 z-40 transform transition-all duration-300 ${
        isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
      } md:hidden`}>
        <div className="flex flex-col items-center justify-center h-full space-y-6 font-mono">
          <button onClick={() => scrollToSection('about')} className="text-accent hover:text-accent/80 text-xl uppercase terminal-text">About</button>
          <button onClick={() => scrollToSection('experience')} className="text-accent hover:text-accent/80 text-xl uppercase terminal-text">Experience</button>
          <button onClick={() => scrollToSection('projects')} className="text-accent hover:text-accent/80 text-xl uppercase terminal-text">Projects</button>
          <button onClick={() => scrollToSection('skills')} className="text-accent hover:text-accent/80 text-xl uppercase terminal-text">Skills</button>
          <button onClick={() => scrollToSection('education')} className="text-accent hover:text-accent/80 text-xl uppercase terminal-text">Education</button>
          <button onClick={() => scrollToSection('awards')} className="text-accent hover:text-accent/80 text-xl uppercase terminal-text">Awards</button>
        </div>
      </div>

      {/* Floating Navigation Bar (Desktop) */}
      <div className="hidden md:flex fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 bg-black/60 backdrop-blur-md rounded-full shadow-glow px-4 py-2 space-x-2">
        <button 
          onClick={() => scrollToSection('about')} 
          className={`nav-button flex flex-col items-center justify-center px-4 py-2 rounded-full transition-all duration-300 ${activeSection === 'about' ? 'text-accent bg-black/30' : 'text-white/70 hover:text-accent'}`}
        >
          <User size={18} />
          <span className="text-xs mt-1">About</span>
        </button>
        <button 
          onClick={() => scrollToSection('experience')} 
          className={`nav-button flex flex-col items-center justify-center px-4 py-2 rounded-full transition-all duration-300 ${activeSection === 'experience' ? 'text-accent bg-black/30' : 'text-white/70 hover:text-accent'}`}
        >
          <Briefcase size={18} />
          <span className="text-xs mt-1">Work</span>
        </button>
        <button 
          onClick={() => scrollToSection('projects')} 
          className={`nav-button flex flex-col items-center justify-center px-4 py-2 rounded-full transition-all duration-300 ${activeSection === 'projects' ? 'text-accent bg-black/30' : 'text-white/70 hover:text-accent'}`}
        >
          <Code size={18} />
          <span className="text-xs mt-1">Projects</span>
        </button>
        <button 
          onClick={() => scrollToSection('skills')} 
          className={`nav-button flex flex-col items-center justify-center px-4 py-2 rounded-full transition-all duration-300 ${activeSection === 'skills' ? 'text-accent bg-black/30' : 'text-white/70 hover:text-accent'}`}
        >
          <Shield size={18} />
          <span className="text-xs mt-1">Skills</span>
        </button>
        <button 
          onClick={() => scrollToSection('education')} 
          className={`nav-button flex flex-col items-center justify-center px-4 py-2 rounded-full transition-all duration-300 ${activeSection === 'education' ? 'text-accent bg-black/30' : 'text-white/70 hover:text-accent'}`}
        >
          <BookOpen size={18} />
          <span className="text-xs mt-1">Education</span>
        </button>
        <button 
          onClick={() => scrollToSection('awards')} 
          className={`nav-button flex flex-col items-center justify-center px-4 py-2 rounded-full transition-all duration-300 ${activeSection === 'awards' ? 'text-accent bg-black/30' : 'text-white/70 hover:text-accent'}`}
        >
          <Award size={18} />
          <span className="text-xs mt-1">Awards</span>
        </button>
      </div>
      
      <div className="container mx-auto px-4 py-8 max-w-7xl relative z-10">
        {children}
      </div>
    </div>
  );
};

// Add TypeScript interface for window object to include gtag
declare global {
  interface Window {
    gtag: (command: string, action: string, params: any) => void;
    dataLayer: any[];
  }
}

export default ResumeLayout;
