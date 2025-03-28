
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { User, Briefcase, Code, Shield, BookOpen, Award, ChevronUp } from 'lucide-react';

interface ResumeLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const ResumeLayout: React.FC<ResumeLayoutProps> = ({ children, className }) => {
  const [activeSection, setActiveSection] = useState<string>('about');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  
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
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  // Track scroll position and update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'projects', 'skills', 'education', 'awards'];
      
      // Update active section
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
      
      // Update scroll progress
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (scrollTop / scrollHeight) * 100;
      setScrollProgress(progress);
      
      // Show/hide scroll to top button
      setShowScrollTop(scrollTop > 500);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial section
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeSection]);

  return (
    <div className={cn('min-h-screen w-screen overflow-x-hidden bg-background', className)}>
      {/* Progress bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-muted z-50">
        <div 
          className="h-full bg-primary transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
      
      {/* Mobile Menu Toggle */}
      <div className="md:hidden fixed top-4 right-4 z-50">
        <button 
          className="bg-white p-2 rounded-full shadow-md border border-border"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className={`w-5 h-0.5 bg-foreground transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></div>
          <div className={`w-5 h-0.5 bg-foreground my-1 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-5 h-0.5 bg-foreground transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-white/95 z-40 transform transition-all duration-300 ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      } md:hidden flex flex-col items-center justify-center`}>
        <div className="flex flex-col items-center justify-center h-full space-y-6">
          <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary text-xl transition-colors">About</button>
          <button onClick={() => scrollToSection('experience')} className="text-foreground hover:text-primary text-xl transition-colors">Experience</button>
          <button onClick={() => scrollToSection('projects')} className="text-foreground hover:text-primary text-xl transition-colors">Projects</button>
          <button onClick={() => scrollToSection('skills')} className="text-foreground hover:text-primary text-xl transition-colors">Skills</button>
          <button onClick={() => scrollToSection('education')} className="text-foreground hover:text-primary text-xl transition-colors">Education</button>
          <button onClick={() => scrollToSection('awards')} className="text-foreground hover:text-primary text-xl transition-colors">Awards</button>
        </div>
      </div>

      {/* Floating Navigation Bar (Desktop) */}
      <div className="hidden md:flex fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 bg-white/90 backdrop-blur-sm rounded-full shadow-md px-4 py-2 space-x-2">
        <button 
          onClick={() => scrollToSection('about')} 
          className={`flex flex-col items-center justify-center px-4 py-2 rounded-full transition-all duration-300 ${activeSection === 'about' ? 'text-primary bg-secondary' : 'text-muted-foreground hover:text-primary'}`}
          aria-label="About section"
        >
          <User size={18} />
          <span className="text-xs mt-1">About</span>
        </button>
        <button 
          onClick={() => scrollToSection('experience')} 
          className={`flex flex-col items-center justify-center px-4 py-2 rounded-full transition-all duration-300 ${activeSection === 'experience' ? 'text-primary bg-secondary' : 'text-muted-foreground hover:text-primary'}`}
          aria-label="Experience section"
        >
          <Briefcase size={18} />
          <span className="text-xs mt-1">Work</span>
        </button>
        <button 
          onClick={() => scrollToSection('projects')} 
          className={`flex flex-col items-center justify-center px-4 py-2 rounded-full transition-all duration-300 ${activeSection === 'projects' ? 'text-primary bg-secondary' : 'text-muted-foreground hover:text-primary'}`}
          aria-label="Projects section"
        >
          <Code size={18} />
          <span className="text-xs mt-1">Projects</span>
        </button>
        <button 
          onClick={() => scrollToSection('skills')} 
          className={`flex flex-col items-center justify-center px-4 py-2 rounded-full transition-all duration-300 ${activeSection === 'skills' ? 'text-primary bg-secondary' : 'text-muted-foreground hover:text-primary'}`}
          aria-label="Skills section"
        >
          <Shield size={18} />
          <span className="text-xs mt-1">Skills</span>
        </button>
        <button 
          onClick={() => scrollToSection('education')} 
          className={`flex flex-col items-center justify-center px-4 py-2 rounded-full transition-all duration-300 ${activeSection === 'education' ? 'text-primary bg-secondary' : 'text-muted-foreground hover:text-primary'}`}
          aria-label="Education section"
        >
          <BookOpen size={18} />
          <span className="text-xs mt-1">Education</span>
        </button>
        <button 
          onClick={() => scrollToSection('awards')} 
          className={`flex flex-col items-center justify-center px-4 py-2 rounded-full transition-all duration-300 ${activeSection === 'awards' ? 'text-primary bg-secondary' : 'text-muted-foreground hover:text-primary'}`}
          aria-label="Awards section"
        >
          <Award size={18} />
          <span className="text-xs mt-1">Awards</span>
        </button>
      </div>
      
      {/* Scroll to top button */}
      {showScrollTop && (
        <button 
          onClick={scrollToTop} 
          className="fixed bottom-8 right-8 z-50 bg-primary text-primary-foreground rounded-full p-3 shadow-lg transition-all duration-300 opacity-80 hover:opacity-100"
          aria-label="Scroll to top"
        >
          <ChevronUp size={20} />
        </button>
      )}
      
      <div className="w-full px-4 py-8 max-w-7xl mx-auto relative z-10">
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
