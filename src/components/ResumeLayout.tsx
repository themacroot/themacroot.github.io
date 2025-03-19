
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { User, Briefcase, Code, Shield, BookOpen, Award } from 'lucide-react';

interface ResumeLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const ResumeLayout: React.FC<ResumeLayoutProps> = ({ children, className }) => {
  const [activeSection, setActiveSection] = useState<string>('about');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [isScrollingUp, setIsScrollingUp] = useState<boolean>(false);
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  
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
  
  // Track scroll progress and direction
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(scrollPercent);
      
      // Determine scroll direction
      setIsScrollingUp(scrollTop < lastScrollY);
      setLastScrollY(scrollTop);
      
      // Check which section is in view
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
  }, [activeSection, lastScrollY]);

  return (
    <div className={cn('min-h-screen bg-background', className)}>
      {/* Mobile Menu Toggle */}
      <div className="md:hidden fixed top-4 right-4 z-50">
        <button 
          className="bg-white/80 backdrop-blur-md p-2 rounded-full shadow-md"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`block w-full h-0.5 bg-foreground transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-full h-0.5 bg-foreground transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-full h-0.5 bg-foreground transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-white/95 z-40 transform transition-all duration-500 ${
        isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
      } md:hidden`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <button onClick={() => scrollToSection('about')} className={`nav-item text-lg ${activeSection === 'about' ? 'active' : ''}`}>About</button>
          <button onClick={() => scrollToSection('experience')} className={`nav-item text-lg ${activeSection === 'experience' ? 'active' : ''}`}>Experience</button>
          <button onClick={() => scrollToSection('projects')} className={`nav-item text-lg ${activeSection === 'projects' ? 'active' : ''}`}>Projects</button>
          <button onClick={() => scrollToSection('skills')} className={`nav-item text-lg ${activeSection === 'skills' ? 'active' : ''}`}>Skills</button>
          <button onClick={() => scrollToSection('education')} className={`nav-item text-lg ${activeSection === 'education' ? 'active' : ''}`}>Education</button>
          <button onClick={() => scrollToSection('awards')} className={`nav-item text-lg ${activeSection === 'awards' ? 'active' : ''}`}>Awards</button>
        </div>
      </div>

      {/* Floating Navigation Bar (Desktop) */}
      <div 
        className={`hidden md:flex floating-nav left-1/2 transform -translate-x-1/2 px-6 py-2 space-x-1 transition-all duration-500 ${
          isScrollingUp ? 'top-4' : 'top-[-100px]'
        }`}
      >
        <button 
          onClick={() => scrollToSection('about')} 
          className={`nav-item flex flex-col items-center ${activeSection === 'about' ? 'active' : ''}`}
        >
          <User size={18} />
          <span className="text-xs mt-1">About</span>
        </button>
        <button 
          onClick={() => scrollToSection('experience')} 
          className={`nav-item flex flex-col items-center ${activeSection === 'experience' ? 'active' : ''}`}
        >
          <Briefcase size={18} />
          <span className="text-xs mt-1">Work</span>
        </button>
        <button 
          onClick={() => scrollToSection('projects')} 
          className={`nav-item flex flex-col items-center ${activeSection === 'projects' ? 'active' : ''}`}
        >
          <Code size={18} />
          <span className="text-xs mt-1">Projects</span>
        </button>
        <button 
          onClick={() => scrollToSection('skills')} 
          className={`nav-item flex flex-col items-center ${activeSection === 'skills' ? 'active' : ''}`}
        >
          <Shield size={18} />
          <span className="text-xs mt-1">Skills</span>
        </button>
        <button 
          onClick={() => scrollToSection('education')} 
          className={`nav-item flex flex-col items-center ${activeSection === 'education' ? 'active' : ''}`}
        >
          <BookOpen size={18} />
          <span className="text-xs mt-1">Education</span>
        </button>
        <button 
          onClick={() => scrollToSection('awards')} 
          className={`nav-item flex flex-col items-center ${activeSection === 'awards' ? 'active' : ''}`}
        >
          <Award size={18} />
          <span className="text-xs mt-1">Awards</span>
        </button>
      </div>
      
      {/* Scroll Progress Indicator */}
      <div className="fixed bottom-0 left-0 w-full h-1 bg-border z-50">
        <div 
          className="h-full bg-primary transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        ></div>
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
