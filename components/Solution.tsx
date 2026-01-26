import React from 'react';
import { SectionContainer } from './ui/GridSystem';
import { Check, ShieldCheck, Compass, BarChart3 } from 'lucide-react';

export const Solution: React.FC = () => {
  return (
    <SectionContainer id="solution" className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="font-display text-4xl md:text-5xl text-white mb-6 tracking-tight">
                Clear, Grounded Relief
            </h2>
            <p className="text-xl text-neutral-400 mb-6">
                There is a calmer, more dependable way forward. The <strong className="text-white font-normal">Website-as-an-Asset System</strong> is a business-first approach that turns your website into a dependable, confidence-building business asset — one that supports revenue, conversion, and long-term growth, not just appearance.
            </p>
             <p className="text-lg text-neutral-500">
                Whether your website’s role is to generate qualified enquiries or drive direct sales, the underlying principle is the same: clarity, trust, and commercial intent.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-neutral-900 border border-neutral-900">
            {/* Card 1 */}
            <div className="bg-black p-10 hover:bg-neutral-950 transition-colors group">
                <Compass className="w-10 h-10 text-white mb-6 opacity-80 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-xl text-white font-medium mb-3">Clear Strategic Direction</h3>
                <p className="text-neutral-500">
                     Instead of chasing trends, tools, or opinions, you get a roadmap that aligns digital tactics with real business goals.
                </p>
            </div>

            {/* Card 2 */}
            <div className="bg-black p-10 hover:bg-neutral-950 transition-colors group">
                <ShieldCheck className="w-10 h-10 text-white mb-6 opacity-80 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-xl text-white font-medium mb-3">Expert-Led Decision Making</h3>
                <p className="text-neutral-500">
                    Expert stewardship over constant involvement. We handle the complexity so you don't have to.
                </p>
            </div>

            {/* Card 3 */}
            <div className="bg-black p-10 hover:bg-neutral-950 transition-colors group">
                <BarChart3 className="w-10 h-10 text-white mb-6 opacity-80 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-xl text-white font-medium mb-3">Business Objective Support</h3>
                <p className="text-neutral-500">
                    A website designed to support your business objectives over time, not just look good for a launch day.
                </p>
            </div>
        </div>

        <div className="mt-16 text-center border-t border-neutral-900 pt-16">
            <div className="inline-flex flex-col md:flex-row gap-8 md:gap-16 text-neutral-400 font-mono text-sm uppercase tracking-wider">
                <span className="flex items-center gap-2"><div className="w-1 h-1 bg-white rounded-full"></div> No Hype</span>
                <span className="flex items-center gap-2"><div className="w-1 h-1 bg-white rounded-full"></div> No Jargon</span>
                <span className="flex items-center gap-2"><div className="w-1 h-1 bg-white rounded-full"></div> No Constant Oversight</span>
            </div>
        </div>
    </SectionContainer>
  );
};