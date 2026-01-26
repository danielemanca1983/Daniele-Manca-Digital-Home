import React from 'react';

export const GridLines: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 flex justify-center w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
      {/* Vertical Lines */}
      <div className="w-full h-full border-r border-neutral-900 absolute left-0 top-0 hidden lg:block left-line"></div>
      
      <div className="flex w-full h-full justify-between">
        <div className="h-full border-l border-neutral-900 opacity-50"></div>
        <div className="h-full border-l border-neutral-900 opacity-50 hidden md:block"></div>
        <div className="h-full border-l border-neutral-900 opacity-50 hidden lg:block"></div>
        <div className="h-full border-l border-neutral-900 opacity-50 hidden xl:block"></div>
        <div className="h-full border-r border-neutral-900 opacity-50"></div>
      </div>
    </div>
  );
};

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const SectionContainer: React.FC<SectionContainerProps> = ({ children, className = "", id }) => {
  return (
    <section id={id} className={`relative z-10 w-full border-b border-neutral-900 ${className}`}>
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 h-full">
            {children}
        </div>
    </section>
  );
};