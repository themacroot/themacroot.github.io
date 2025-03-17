
import React from 'react';
import { ChevronRight, Mail, Phone, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ResumeHeaderProps {
  className?: string;
}

const ResumeHeader: React.FC<ResumeHeaderProps> = ({ className }) => {
  return (
    <header className={cn('mb-8 opacity-0 animate-fadeIn', className)}>
      <div className="chip mb-2 opacity-0 animate-slideIn animate-delay-200">Full Stack SDE | Solution Architect | Security Enthusiast</div>
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-medium mb-4 opacity-0 animate-slideIn">
        Sreekanth Narendran
      </h1>
      <p className="text-lg text-muted-foreground max-w-2xl opacity-0 animate-slideIn animate-delay-300">
        Assiduous computer engineer with 5+ years of experience in architecting,
        developing and maintaining customer facing applications in banking domain.
      </p>
      
      <div className="flex flex-wrap gap-4 mt-6 text-sm text-muted-foreground opacity-0 animate-slideIn animate-delay-400">
        <div className="flex items-center gap-1">
          <MapPin size={14} className="opacity-70" />
          <span>Alapuzha, Kerala, India</span>
        </div>
        <div className="flex items-center gap-1">
          <Phone size={14} className="opacity-70" />
          <span>+91-7736698003</span>
        </div>
        <div className="flex items-center gap-1">
          <Mail size={14} className="opacity-70" />
          <span>sreekanth.narendran.93@gmail.com</span>
        </div>
      </div>
      
      <div className="mt-8 opacity-0 animate-slideIn animate-delay-500">
        <a href="#experience" className="inline-flex items-center gap-1 px-4 py-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
          <span>View Experience</span>
          <ChevronRight size={16} />
        </a>
      </div>
    </header>
  );
};

export default ResumeHeader;
