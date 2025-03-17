
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface ResumeLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const ResumeLayout: React.FC<ResumeLayoutProps> = ({ children, className }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={cn('min-h-screen overflow-hidden', className)}>
      <div 
        className="fixed inset-0 bg-gradient-to-br from-blue-50 via-blue-100 to-indigo-100 -z-10"
        style={{ 
          backgroundPosition: `0px ${scrollY * 0.1}px` 
        }}
      />
      <div className="absolute inset-0 dot-pattern opacity-20 pointer-events-none -z-10" />
      
      {/* Floating shapes for visual interest */}
      <div className="fixed top-1/4 left-10 w-64 h-64 rounded-full bg-blue-500/5 blur-3xl animate-float -z-10"></div>
      <div className="fixed bottom-1/4 right-10 w-96 h-96 rounded-full bg-indigo-500/10 blur-3xl animate-float animation-delay-1000 -z-10"></div>
      <div className="fixed top-2/3 left-1/3 w-80 h-80 rounded-full bg-sky-300/5 blur-2xl animate-float animation-delay-500 -z-10"></div>
      
      <main className="container mx-auto px-6 py-12 md:py-20 max-w-7xl relative">
        {children}
      </main>
    </div>
  );
};

export default ResumeLayout;
