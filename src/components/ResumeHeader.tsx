
import React, { useEffect, useState, useRef } from 'react';
import { Mail, Phone, MapPin, Code, Shield, Terminal, Cpu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useParallax } from '@/hooks/useParallax';

interface ResumeHeaderProps {
  className?: string;
}

const ResumeHeader: React.FC<ResumeHeaderProps> = ({ className }) => {
  const scrollY = useParallax();
  const [typedText, setTypedText] = useState('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const headerRef = useRef<HTMLElement>(null);
  const fullText = 'Assiduous computer engineer with 5+ years of experience in architecting, developing and maintaining customer facing applications in banking domain.';
  
  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.substring(0, typedText.length + 1));
      }, 30);
      
      return () => clearTimeout(timeout);
    }
  }, [typedText, fullText]);
  
  // Handle mouse movement for interactive elements
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!headerRef.current) return;
      
      const rect = headerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      setMousePosition({ x, y });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <header 
      id="about" 
      ref={headerRef}
      className={cn('pt-28 md:pt-32 pb-16 md:pb-24 noise-bg relative', className)}
    >
      {/* Decorative elements */}
      <div 
        className="absolute top-16 left-8 w-24 h-24 border-4 border-accent opacity-50 hidden md:block"
        style={{ transform: `rotate(${Math.random() * 20 - 10}deg)` }}
      />
      
      <div 
        className="absolute bottom-16 right-8 w-16 h-16 border-4 border-accent opacity-30 hidden md:block"
        style={{ transform: `rotate(${Math.random() * 20 - 10}deg)` }}
      />

      <div className="relative overflow-hidden z-10 container mx-auto">
        <div 
          className="ascii-art mb-16 opacity-50 hidden md:block transform skew-x-3 font-bold"
          style={{ transform: `translateY(${scrollY * 0.1}px) rotate(-1deg)` }}
        >
{`
   _____                 _                 _   _       _   _                           _                 
  / ____|               | |               | \\ | |     | | | |                         | |                
 | (___  _ __ ___  ___  | | ____ _ _ __   |  \\| | __ _| |_| |__  _   _   _ __ __ _ _ __| |_ _ __         
  \\___ \\| '__/ _ \\/ _ \\ | |/ / _\` | '_ \\  | . \` |/ _\` | __| '_ \\| | | | | '__/ _\` | '__| __| '_ \\        
  ____) | | |  __/  __/ |   < (_| | | | | | |\\  | (_| | |_| | | | |_| | | | | (_| | |  | |_| | | |       
 |_____/|_|  \\___|\\___| |_|\\_\\__,_|_| |_| |_| \\_|\\__,_|\\__|_| |_|\\__,_| |_|  \\__,_|_|   \\__|_| |_|       
`}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div 
            className="relative" 
            style={{ transform: `translateY(${scrollY * -0.05}px)` }}
          >
            <div className="p-8 border-4 border-accent bg-secondary/50 shadow-brutal relative overflow-hidden">
              <div className="relative z-10">
                <div className="text-sm mb-4 font-mono">{`sreekanth@system:~$ whoami`}</div>
                <div className="text-accent text-xl mb-4 font-mono uppercase tracking-widest font-bold">Solution Architect</div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-mono text-foreground mb-6 uppercase tracking-tighter font-bold">
                  <span className="text-outlined animate-skew inline-block">Sreekanth</span>
                  <br />
                  <span className="text-accent animate-float-brutal inline-block">Narendran</span>
                </h1>
                
                <div className="text-sm mb-6 font-mono">{`sreekanth@system:~$ social --list`}</div>
                <div className="flex space-x-6 mb-8">
                  <a href="#" className="text-accent hover:text-accent/70 transition-all duration-300 border-2 border-accent p-2 micro-bounce">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                  </a>
                  <a href="#" className="text-accent hover:text-accent/70 transition-all duration-300 border-2 border-accent p-2 micro-bounce">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                  </a>
                  <a href="#" className="text-accent hover:text-accent/70 transition-all duration-300 border-2 border-accent p-2 micro-bounce">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-dribbble"><circle cx="12" cy="12" r="10"/><path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"/><path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"/><path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"/></svg>
                  </a>
                </div>
                
                <div className="text-sm mb-4 font-mono">{`sreekanth@system:~$ contact --info`}</div>
                <div className="flex flex-col space-y-4 font-bold">
                  <div className="flex items-center gap-3 hover:text-accent transition-colors micro-slide">
                    <div className="border-2 border-accent p-2">
                      <MapPin size={20} className="text-accent" />
                    </div>
                    <span>Alapuzha, Kerala, India</span>
                  </div>
                  <div className="flex items-center gap-3 hover:text-accent transition-colors micro-slide">
                    <div className="border-2 border-accent p-2">
                      <Phone size={20} className="text-accent" />
                    </div>
                    <span>+91-7012302315</span>
                  </div>
                  <div className="flex items-center gap-3 hover:text-accent transition-colors micro-slide">
                    <div className="border-2 border-accent p-2">
                      <Mail size={20} className="text-accent" />
                    </div>
                    <span>me@srina.dev</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div 
            className="relative"
            style={{ transform: `translateY(${scrollY * 0.05}px)` }}
          >
            <div className="p-8 border-4 border-accent bg-secondary/50 shadow-brutal relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 border-4 border-accent/20" 
                style={{ transform: `rotate(${Math.random() * 10}deg)` }}
              />
              
              <div className="relative z-10">
                <div className="text-sm mb-4 font-mono">{`sreekanth@system:~$ cat about.txt`}</div>
                
                <div className="text-foreground font-bold mb-8 border-l-4 border-accent pl-4 text-lg">
                  <span>{typedText}</span>
                  <span className="terminal-cursor">|</span>
                </div>
                
                <div className="text-sm mb-6 font-mono">{`sreekanth@system:~$ ls -la services/`}</div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
                  <div className="p-6 border-4 border-accent shadow-brutal bg-secondary/80 relative overflow-hidden micro-bounce">
                    <div className="text-accent mb-4">
                      <Terminal size={32} />
                    </div>
                    <h3 className="text-accent text-xl font-bold mb-3 font-mono uppercase">Development</h3>
                    <p className="font-medium">
                      Building custom solutions based on technical specifications for banking and fintech applications.
                    </p>
                    
                    {/* Decorative line */}
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-accent"></div>
                  </div>
                  
                  <div className="p-6 border-4 border-accent shadow-brutal bg-secondary/80 relative overflow-hidden micro-bounce">
                    <div className="text-accent mb-4">
                      <Cpu size={32} />
                    </div>
                    <h3 className="text-accent text-xl font-bold mb-3 font-mono uppercase">Security</h3>
                    <p className="font-medium">
                      Conducting security audits and implementing robust security measures for banking applications.
                    </p>
                    
                    {/* Decorative line */}
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-accent"></div>
                  </div>
                </div>
                
                <div className="mt-8 font-mono flex gap-4 font-bold">
                  <div className="text-accent border-2 border-accent p-2">5+ years</div>
                  <div className="text-accent border-2 border-accent p-2">Kochi</div>
                  <div className="text-accent border-2 border-accent p-2">Banking</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ResumeHeader;
