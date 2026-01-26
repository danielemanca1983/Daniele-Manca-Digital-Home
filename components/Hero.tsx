import React from 'react';
import { SectionContainer } from './ui/GridSystem';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <SectionContainer className="pt-32 pb-24 md:pt-48 md:pb-32 min-h-[90vh] flex flex-col justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0">
        
        {/* Main Headline Area */}
        <div className="col-span-1 lg:col-span-8 lg:pr-12">
            <div className="mb-6 flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-500">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span>Calm Authority, Broader Reach</span>
            </div>
            
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-white leading-[1.1] mb-8">
                Turn Your Website Into a Real <span className="text-neutral-500">Business Asset</span> — Not a Source of Stress
            </h1>
        </div>

        {/* Subhead & CTA Area */}
        <div className="col-span-1 lg:col-span-4 flex flex-col justify-end border-l border-neutral-900/0 lg:border-neutral-900 lg:pl-12">
            <p className="text-neutral-400 mb-10 text-lg leading-relaxed">
                A business-first website strategy for professional service firms and growing e-commerce brands who want credibility, clarity, and dependable commercial performance — without hype, jargon, or constant oversight.
            </p>
            
            <div className="flex flex-col gap-4">
                <a href="#cta" className="group flex items-center justify-between w-full max-w-sm bg-white text-black px-6 py-4 rounded-none hover:bg-neutral-200 transition-all duration-300">
                    <span className="font-semibold text-lg">Book a Strategy Consultation</span>
                    <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                </a>
                <span className="text-xs text-neutral-600 uppercase tracking-wider font-mono">
                   No Pitch. Strategic Conversation Only.
                </span>
            </div>
        </div>

      </div>
      
      {/* Decorative Bottom Element */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent"></div>
    </SectionContainer>
  );
};