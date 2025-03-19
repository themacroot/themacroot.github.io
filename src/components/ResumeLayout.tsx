
import React, { useState, useEffect, useRef } from 'react';
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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cursorRef = useRef<HTMLDivElement>(null);
  
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
  
  // Handle mouse movement for custom cursor
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      if (cursorRef.current) {
        // Add a slight delay for aesthetic effect
        setTimeout(() => {
          if (cursorRef.current) {
            cursorRef.current.style.left = `${e.clientX}px`;
            cursorRef.current.style.top = `${e.clientY}px`;
          }
        }, 50);
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
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
      {/* Custom Cursor */}
      <div ref={cursorRef} className="cursor-effect hidden md:block"></div>
      
      {/* Noise Overlay */}
      <div className="noise-overlay"></div>
      
      {/* Background Animation */}
      <MatrixRain />
      
      {/* Mobile Menu Toggle */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button 
          className="bg-background p-4 rounded-none border-4 border-accent shadow-brutal micro-bounce"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Terminal className="text-accent" />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-background/95 z-40 transform transition-all duration-300 ${
        isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
      } md:hidden`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8 font-mono">
          <button 
            onClick={() => scrollToSection('about')} 
            className={`text-accent text-2xl uppercase terminal-text border-4 border-accent p-4 micro-bounce ${activeSection === 'about' ? 'bg-accent text-background' : ''}`}
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('experience')} 
            className={`text-accent text-2xl uppercase terminal-text border-4 border-accent p-4 micro-bounce ${activeSection === 'experience' ? 'bg-accent text-background' : ''}`}
          >
            Experience
          </button>
          <button 
            onClick={() => scrollToSection('projects')} 
            className={`text-accent text-2xl uppercase terminal-text border-4 border-accent p-4 micro-bounce ${activeSection === 'projects' ? 'bg-accent text-background' : ''}`}
          >
            Projects
          </button>
          <button 
            onClick={() => scrollToSection('skills')} 
            className={`text-accent text-2xl uppercase terminal-text border-4 border-accent p-4 micro-bounce ${activeSection === 'skills' ? 'bg-accent text-background' : ''}`}
          >
            Skills
          </button>
          <button 
            onClick={() => scrollToSection('education')} 
            className={`text-accent text-2xl uppercase terminal-text border-4 border-accent p-4 micro-bounce ${activeSection === 'education' ? 'bg-accent text-background' : ''}`}
          >
            Education
          </button>
          <button 
            onClick={() => scrollToSection('awards')} 
            className={`text-accent text-2xl uppercase terminal-text border-4 border-accent p-4 micro-bounce ${activeSection === 'awards' ? 'bg-accent text-background' : ''}`}
          >
            Awards
          </button>
        </div>
      </div>

      {/* Floating Navigation Bar (Desktop) */}
      <div className="hidden md:flex brutalist-nav px-0">
        <button 
          onClick={() => scrollToSection('about')} 
          className={`brutalist-button ${activeSection === 'about' ? 'active' : ''}`}
        >
          <User size={20} className="mb-1" />
          <span className="text-xs font-bold">About</span>
        </button>
        <button 
          onClick={() => scrollToSection('experience')} 
          className={`brutalist-button ${activeSection === 'experience' ? 'active' : ''}`}
        >
          <Briefcase size={20} className="mb-1" />
          <span className="text-xs font-bold">Work</span>
        </button>
        <button 
          onClick={() => scrollToSection('projects')} 
          className={`brutalist-button ${activeSection === 'projects' ? 'active' : ''}`}
        >
          <Code size={20} className="mb-1" />
          <span className="text-xs font-bold">Projects</span>
        </button>
        <button 
          onClick={() => scrollToSection('skills')} 
          className={`brutalist-button ${activeSection === 'skills' ? 'active' : ''}`}
        >
          <Shield size={20} className="mb-1" />
          <span className="text-xs font-bold">Skills</span>
        </button>
        <button 
          onClick={() => scrollToSection('education')} 
          className={`brutalist-button ${activeSection === 'education' ? 'active' : ''}`}
        >
          <BookOpen size={20} className="mb-1" />
          <span className="text-xs font-bold">Education</span>
        </button>
        <button 
          onClick={() => scrollToSection('awards')} 
          className={`brutalist-button ${activeSection === 'awards' ? 'active' : ''}`}
        >
          <Award size={20} className="mb-1" />
          <span className="text-xs font-bold">Awards</span>
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
