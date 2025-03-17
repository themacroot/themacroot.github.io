
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ResumeHeaderProps {
  className?: string;
}

const ResumeHeader: React.FC<ResumeHeaderProps> = ({ className }) => {
  return (
    <header id="about" className={cn('mb-12 pt-20 md:pt-0', className)}>
      <div className="split-layout">
        <div className="left-panel animated-gradient">
          <div className="absolute inset-0 dot-pattern opacity-20 pointer-events-none" />
          
          <div className="relative z-10 flex flex-col items-center md:items-start">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display text-white mb-4 text-center md:text-left purple-glow">
              Sreekanth<br />Narendran
            </h1>
            
            <div className="text-white/80 text-lg mb-6 text-center md:text-left">
              Solution Architect
            </div>
            
            <div className="flex space-x-4 mb-8">
              <a href="#" className="text-white/70 hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="#" className="text-white/70 hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              </a>
              <a href="#" className="text-white/70 hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-dribbble"><circle cx="12" cy="12" r="10"/><path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"/><path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"/><path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"/></svg>
              </a>
            </div>
            
            <div className="mt-4 flex flex-col space-y-2 text-white/80">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="opacity-70 text-primary" />
                <span>Alapuzha, Kerala, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="opacity-70 text-primary" />
                <span>+91-7736698003</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="opacity-70 text-primary" />
                <span>sreekanth.narendran.93@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="right-panel">
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-white mb-4">about me</h2>
            <div className="flex gap-2 text-primary mb-6">
              <div>5+ years</div>
              <div>/</div>
              <div>Kochi</div>
              <div>/</div>
              <div>Banking</div>
            </div>
            
            <p className="text-white/80 mb-6">
              Assiduous computer engineer with 5+ years of experience in architecting, 
              developing and maintaining customer facing applications in banking domain.
              Passionate about building secure and reliable applications, with a focus on
              user experience and performance.
            </p>
          </div>
          
          <div>
            <h2 className="text-3xl font-semibold text-white mb-6">my services</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="service-box">
                <div className="text-primary mb-3">
                  <Code size={24} />
                </div>
                <h3 className="text-white text-lg font-medium mb-2">Development</h3>
                <p className="text-white/70 text-sm">
                  Building custom solutions based on technical specifications for banking and fintech applications.
                </p>
              </div>
              
              <div className="service-box">
                <div className="text-primary mb-3">
                  <Shield size={24} />
                </div>
                <h3 className="text-white text-lg font-medium mb-2">Security</h3>
                <p className="text-white/70 text-sm">
                  Conducting security audits and implementing robust security measures for banking applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ResumeHeader;
