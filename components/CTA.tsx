import React from 'react';
import { SectionContainer } from './ui/GridSystem';
import { ArrowRight, Calendar } from 'lucide-react';

export const CTA: React.FC = () => {
  return (
    <SectionContainer id="cta" className="py-32 bg-white text-black">
      <div className="max-w-4xl mx-auto text-center">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-200 bg-neutral-50 text-xs font-mono uppercase tracking-widest text-neutral-500 mb-8">
            <Calendar className="w-3 h-3" />
            Calm, Clear, Reassuring
        </div>

        <h2 className="font-display text-4xl md:text-6xl font-medium tracking-tighter mb-8 leading-tight">
            Ready to Stop Guessing and <br/> Start Feeling Confident?
        </h2>
        
        <p className="text-xl text-neutral-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Book a strategy consultation to review your current website, identify risks and missed opportunities, and determine whether The Website-as-an-Asset System is the right fit for your business.
        </p>

        <div className="flex flex-col items-center gap-6">
             <button className="group relative inline-flex items-center justify-center px-8 py-5 text-lg font-bold text-white bg-black hover:bg-neutral-800 transition-all duration-300 w-full sm:w-auto">
                <span>Book Your Strategy Consultation</span>
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
             </button>
             
             <p className="text-sm text-neutral-500">
                This is a calm, strategic conversation — not a pitch.
             </p>
        </div>

      </div>
    </SectionContainer>
  );
};