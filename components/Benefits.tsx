import React from 'react';
import { SectionContainer } from './ui/GridSystem';

const benefits = [
    {
        title: "Clarity",
        desc: "Absolute confidence in what your website is responsible for — and what it isn’t."
    },
    {
        title: "Credibility",
        desc: "A professional online presence that builds trust before a conversation or purchase ever begins."
    },
    {
        title: "Reliable Commercial Performance",
        desc: "A foundation designed to support qualified enquiries, stronger conversion rates, or more predictable revenue — depending on your business model."
    },
    {
        title: "Reduced Risk",
        desc: "Fewer reactive decisions, less wasted spend, and far less digital anxiety."
    },
    {
        title: "Peace of Mind",
        desc: "The relief of knowing your website is being handled properly — without hovering, micromanaging, or second-guessing."
    }
];

export const Benefits: React.FC = () => {
  return (
    <SectionContainer id="benefits" className="py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
                 <h2 className="font-display text-4xl text-white mb-6 sticky top-24">
                    Tangible, Emotional, <br/><span className="text-neutral-500">Strategic</span>
                </h2>
                <div className="hidden lg:block mt-8 text-neutral-600 text-sm font-mono">
                    <p>SYSTEM OUTPUT:</p>
                    <p>— CONTROL</p>
                    <p>— GROWTH</p>
                    <p>— STABILITY</p>
                </div>
            </div>

            <div className="lg:col-span-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {benefits.map((item, idx) => (
                        <div key={idx} className="border-t border-neutral-800 pt-6">
                            <h3 className="text-white text-lg font-medium mb-2">{item.title}</h3>
                            <p className="text-neutral-400 leading-relaxed text-sm">{item.desc}</p>
                        </div>
                    ))}
                    
                    {/* The "Hidden Shift" Box */}
                    <div className="md:col-span-2 mt-8 p-8 border border-white/20 bg-neutral-900/30">
                        <span className="text-xs font-mono text-white uppercase mb-2 block">The Quiet Shift</span>
                        <p className="text-xl md:text-2xl text-white font-display">
                            You stop feeling behind — and start feeling secure, confident, and in control again.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </SectionContainer>
  );
};