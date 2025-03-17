
import React from 'react';
import { cn } from '@/lib/utils';

interface ResumeLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const ResumeLayout: React.FC<ResumeLayoutProps> = ({ children, className }) => {
  return (
    <div className={cn('min-h-screen bg-gradient-to-br from-background to-secondary/50 overflow-hidden', className)}>
      <div className="absolute inset-0 dot-pattern opacity-20 pointer-events-none" />
      <main className="container mx-auto px-6 py-12 md:py-20 max-w-7xl">
        {children}
      </main>
    </div>
  );
};

export default ResumeLayout;
