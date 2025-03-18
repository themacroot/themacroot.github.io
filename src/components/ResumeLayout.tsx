
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Menu, User, Phone, Briefcase, Code, Shield, BookOpen, Award, ChevronRight } from 'lucide-react';

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
  };

  return (
    <div className={cn('min-h-screen bg-background noise-bg', className)}>
      {/* Mobile Menu Toggle */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button 
          className="bg-accent/80 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Menu className="text-background" />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-black/90 z-40 transform transition-all duration-300 ${
        isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
      } md:hidden`}>
        <div className="flex flex-col items-center justify-center h-full space-y-6 font-mono">
          <button onClick={() => scrollToSection('about')} className="text-white hover:text-accent text-xl uppercase">About</button>
          <button onClick={() => scrollToSection('experience')} className="text-white hover:text-accent text-xl uppercase">Experience</button>
          <button onClick={() => scrollToSection('projects')} className="text-white hover:text-accent text-xl uppercase">Projects</button>
          <button onClick={() => scrollToSection('skills')} className="text-white hover:text-accent text-xl uppercase">Skills</button>
          <button onClick={() => scrollToSection('education')} className="text-white hover:text-accent text-xl uppercase">Education</button>
          <button onClick={() => scrollToSection('awards')} className="text-white hover:text-accent text-xl uppercase">Awards</button>
        </div>
      </div>

      {/* Desktop Sidebar */}
      <div className="sidebar hidden md:flex">
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
      
      <div className="container mx-auto px-4 py-8 max-w-7xl relative diagonal-sections">
        {children}
      </div>
    </div>
  );
};

export default ResumeLayout;
