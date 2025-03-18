
import React, { useEffect, useState } from 'react';
import { Mail, Phone, MapPin, Code, Shield, Terminal, Cpu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useParallax } from '@/hooks/useParallax';

interface ResumeHeaderProps {
  className?: string;
}

const ResumeHeader: React.FC<ResumeHeaderProps> = ({ className }) => {
  const scrollY = useParallax();
  const [typedText, setTypedText] = useState('');
  const fullText = 'Assiduous computer engineer with 5+ years of experience in architecting, developing and maintaining customer facing applications in banking domain.';
  
  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.substring(0, typedText.length + 1));
      }, 30);
      
      return () => clearTimeout(timeout);
    }
  }, [typedText, fullText]);
  
  return (
    <header id="about" className={cn('pt-20 md:pt-24 pb-16 md:pb-24 noise-bg relative', className)}>
      {/* Space Background Elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="stars-container opacity-30">
          {Array.from({ length: 50 }).map((_, i) => (
            <div 
              key={i} 
              className="star"
              style={{ 
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.max(1, Math.random() * 3)}px`,
                height: `${Math.max(1, Math.random() * 3)}px`,
                animationDelay: `${Math.random() * 10}s`,
                opacity: Math.random()
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative overflow-hidden z-10">
        <div 
          className="ascii-art mb-8 opacity-50 hidden md:block"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
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
            <div className="terminal-box mb-8 p-4 brutal-shadow-green relative overflow-hidden">
              {/* Circuit Board Pattern Background */}
              <div className="absolute inset-0 binary-bg opacity-10"></div>
              
              <div className="relative z-10">
                <div className="terminal-text text-sm mb-4">{`sreekanth@system:~$ whoami`}</div>
                <div className="text-accent text-sm mb-4 font-mono uppercase tracking-widest terminal-text">Solution Architect</div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-mono text-accent mb-6 glitch-text uppercase tracking-tighter">
                  Sreekanth<br />Narendran
                </h1>
                
                <div className="terminal-text text-sm mb-4">{`sreekanth@system:~$ social --list`}</div>
                <div className="flex space-x-4 mb-6">
                  <a href="#" className="text-accent hover:text-accent/70 transition-all duration-300 hover:rotate-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                  </a>
                  <a href="#" className="text-accent hover:text-accent/70 transition-all duration-300 hover:rotate-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                  </a>
                  <a href="#" className="text-accent hover:text-accent/70 transition-all duration-300 hover:rotate-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-dribbble"><circle cx="12" cy="12" r="10"/><path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"/><path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"/><path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"/></svg>
                  </a>
                </div>
                
                <div className="terminal-text text-sm mb-4">{`sreekanth@system:~$ contact --info`}</div>
                <div className="flex flex-col space-y-3 text-accent/80">
                  <div className="flex items-center gap-2 hover:text-accent transition-colors">
                    <MapPin size={16} className="opacity-70 text-accent" />
                    <span>Alapuzha, Kerala, India</span>
                  </div>
                  <div className="flex items-center gap-2 hover:text-accent transition-colors">
                    <Phone size={16} className="opacity-70 text-accent" />
                    <span>+91-7012302315</span>
                  </div>
                  <div className="flex items-center gap-2 hover:text-accent transition-colors">
                    <Mail size={16} className="opacity-70 text-accent" />
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
            <div className="terminal-box p-6 brutal-shadow-green relative overflow-hidden">
              {/* Alien Tech Pattern */}
              <div className="absolute inset-0 triangle-pattern opacity-20"></div>
              
              <div className="relative z-10">
                <div className="terminal-text text-sm mb-4">{`sreekanth@system:~$ cat about.txt`}</div>
                
                <div className="terminal-text text-sm mb-4">
                  <span className="text-accent">{typedText}</span>
                  <span className="terminal-cursor">|</span>
                </div>
                
                <div className="terminal-text text-sm mb-4">{`sreekanth@system:~$ ls -la services/`}</div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 relative">
                  {/* Tech particles */}
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {Array.from({ length: 20 }).map((_, i) => (
                      <div 
                        key={i} 
                        className="absolute w-1 h-1 bg-accent rounded-full animate-pulse"
                        style={{ 
                          top: `${Math.random() * 100}%`,
                          left: `${Math.random() * 100}%`,
                          animationDelay: `${Math.random() * 3}s`,
                          animationDuration: `${2 + Math.random() * 3}s`
                        }}
                      />
                    ))}
                  </div>
                  
                  <div className="terminal-box brutal-shadow-green p-4 relative overflow-hidden hover:translate-y-[-2px] transition-transform duration-300">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-accent/5 rounded-bl-full"></div>
                    <div className="text-accent mb-3">
                      <Terminal size={24} />
                    </div>
                    <h3 className="text-accent text-lg font-medium mb-2 font-mono">Development</h3>
                    <p className="text-accent/70 text-sm">
                      Building custom solutions based on technical specifications for banking and fintech applications.
                    </p>
                  </div>
                  
                  <div className="terminal-box brutal-shadow-green p-4 relative overflow-hidden hover:translate-y-[-2px] transition-transform duration-300">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-accent/5 rounded-bl-full"></div>
                    <div className="text-accent mb-3">
                      <Cpu size={24} />
                    </div>
                    <h3 className="text-accent text-lg font-medium mb-2 font-mono">Security</h3>
                    <p className="text-accent/70 text-sm">
                      Conducting security audits and implementing robust security measures for banking applications.
                    </p>
                  </div>
                </div>
                
                <div className="mt-6 text-xs text-muted-foreground">
                  <div className="flex gap-2 text-accent mb-2">
                    <div className="font-mono">5+ years</div>
                    <div className="font-mono">/</div>
                    <div className="font-mono">Kochi</div>
                    <div className="font-mono">/</div>
                    <div className="font-mono">Banking</div>
                  </div>
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
