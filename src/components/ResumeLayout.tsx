
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Terminal, User, Briefcase, Code, Shield, BookOpen, Award } from 'lucide-react';
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
    <div className={cn('min-h-screen bg-background noise-bg crt-on', className)}>
      {/* Matrix Rain Effect */}
      <MatrixRain />
      
      {/* CRT Scanlines Effect */}
      <div className="crt-lines"></div>
      
      {/* Mobile Menu Toggle */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button 
          className="bg-background p-2 border border-accent"
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

      {/* Desktop Sidebar */}
      <div className="sidebar hidden md:flex bg-background/80 backdrop-blur-md border-r border-accent/20">
        <button onClick={() => scrollToSection('about')} className={`sidebar-icon ${activeSection === 'about' ? 'text-accent border-accent' : ''}`}>
          <User size={20} />
        </button>
        <button onClick={() => scrollToSection('experience')} className={`sidebar-icon ${activeSection === 'experience' ? 'text-accent border-accent' : ''}`}>
          <Briefcase size={20} />
        </button>
        <button onClick={() => scrollToSection('projects')} className={`sidebar-icon ${activeSection === 'projects' ? 'text-accent border-accent' : ''}`}>
          <Code size={20} />
        </button>
        <button onClick={() => scrollToSection('skills')} className={`sidebar-icon ${activeSection === 'skills' ? 'text-accent border-accent' : ''}`}>
          <Shield size={20} />
        </button>
        <button onClick={() => scrollToSection('education')} className={`sidebar-icon ${activeSection === 'education' ? 'text-accent border-accent' : ''}`}>
          <BookOpen size={20} />
        </button>
        <button onClick={() => scrollToSection('awards')} className={`sidebar-icon ${activeSection === 'awards' ? 'text-accent border-accent' : ''}`}>
          <Award size={20} />
        </button>
      </div>
      
      <div className="container mx-auto px-4 py-8 max-w-7xl relative">
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
