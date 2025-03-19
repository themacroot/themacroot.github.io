
import React, { useEffect, useState } from 'react';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useParallax } from '@/hooks/useParallax';

interface ResumeHeaderProps {
  className?: string;
}

const ResumeHeader: React.FC<ResumeHeaderProps> = ({ className }) => {
  const scrollY = useParallax();
  const [typedText, setTypedText] = useState('');
  const fullText = 'Dedicated Solution Architect with extensive experience in designing and implementing scalable enterprise-level applications for the banking sector, specializing in secure financial technology solutions and innovative digital transformation initiatives.';
  
  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.substring(0, typedText.length + 1));
      }, 30);
      
      return () => clearTimeout(timeout);
    }
  }, [typedText, fullText]);
  
  return (
    <header id="about" className={cn('pt-20 md:pt-32 pb-16 md:pb-24 relative', className)}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div 
          className="relative" 
          style={{ transform: `translateY(${scrollY * -0.05}px)` }}
        >
          <div className="bg-white p-8 rounded-xl shadow-sm hover-expand">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-foreground">
              Sreekanth<br />Narendran
            </h1>
            <div className="text-primary text-xl mb-6 font-medium">Solution Architect</div>
            
            <div className="flex flex-wrap space-x-4 mb-8">
              <a href="#" className="text-foreground hover:text-primary transition-all duration-300 hover-lift">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-all duration-300 hover-lift">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-all duration-300 hover-lift">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-dribbble"><circle cx="12" cy="12" r="10"/><path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"/><path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"/><path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"/></svg>
              </a>
            </div>
            
            <div className="flex flex-col space-y-3 text-muted-foreground">
              <div className="flex items-center gap-2 hover:text-primary transition-colors">
                <MapPin size={16} />
                <span>Alapuzha, Kerala, India</span>
              </div>
              <div className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone size={16} />
                <span>+91-7012302315</span>
              </div>
              <div className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail size={16} />
                <span>me@srina.dev</span>
              </div>
            </div>
          </div>
        </div>
        
        <div 
          className="relative"
          style={{ transform: `translateY(${scrollY * 0.05}px)` }}
        >
          <div className="bg-white p-8 rounded-xl shadow-sm hover-expand relative">
            <div className="absolute top-4 right-4 text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-float"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/></svg>
            </div>
            
            <h2 className="text-2xl font-medium mb-6 text-foreground">Professional Summary</h2>
            <div className="text-muted-foreground mb-8">
              <p className="mb-4">{typedText}<span className="animate-pulse">|</span></p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-secondary/50 p-4 rounded-lg hover-lift">
                <h3 className="text-lg font-medium mb-2 text-foreground">Enterprise Architecture</h3>
                <p className="text-muted-foreground text-sm">
                  Designing and implementing scalable, secure, and robust solutions for enterprise banking applications.
                </p>
              </div>
              
              <div className="bg-secondary/50 p-4 rounded-lg hover-lift">
                <h3 className="text-lg font-medium mb-2 text-foreground">Security Engineering</h3>
                <p className="text-muted-foreground text-sm">
                  Implementing industry-leading security protocols and conducting comprehensive audits for financial applications.
                </p>
              </div>
            </div>
            
            <div className="mt-8 pt-4 border-t border-border">
              <div className="flex justify-between items-center">
                <div className="flex gap-4 text-sm text-muted-foreground">
                  <div>5+ years</div>
                  <div>Kochi</div>
                  <div>Banking</div>
                </div>
                <a href="#" className="text-primary flex items-center gap-1 text-sm hover:underline">
                  Full Resume <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ResumeHeader;
