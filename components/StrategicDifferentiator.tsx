import React from 'react';
import { SectionContainer } from './ui/GridSystem';

export const StrategicDifferentiator: React.FC = () => {
  return (
    <SectionContainer className="py-24 bg-neutral-950 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Text Content */}
        <div>
            <div className="mb-4 text-xs font-mono uppercase text-neutral-500 tracking-widest">
                Strategic Stewardship
            </div>
            <h2 className="font-display text-4xl text-white mb-8 tracking-tight">
                Most websites are built to <span className="text-neutral-500">look good</span>.<br/>
                The Website-as-an-Asset System is built to <span className="text-white">protect and support</span> the business behind it.
            </h2>
            
            <div className="space-y-6">
                 <div className="border-l border-neutral-800 pl-6">
                    <h4 className="text-white font-medium mb-1">Business Goals First</h4>
                    <p className="text-neutral-400 text-sm">Prioritizing business goals over surface-level aesthetics.</p>
                 </div>
                 <div className="border-l border-neutral-800 pl-6">
                    <h4 className="text-white font-medium mb-1">Decision Confidence</h4>
                    <p className="text-neutral-400 text-sm">Credibility, trust, and decision confidence over trends.</p>
                 </div>
                 <div className="border-l border-white pl-6">
                    <h4 className="text-white font-medium mb-1">Long-term Stability</h4>
                    <p className="text-neutral-400 text-sm">Long-term stability over short-term tactics.</p>
                 </div>
                 <div className="border-l border-neutral-800 pl-6">
                    <h4 className="text-white font-medium mb-1">Expert Stewardship</h4>
                    <p className="text-neutral-400 text-sm">Expert stewardship instead of one-off execution.</p>
                 </div>
            </div>

            <div className="mt-8 text-sm text-neutral-500 leading-relaxed border-t border-neutral-900 pt-6">
                <p>
                    <strong className="text-neutral-400">For e-commerce:</strong> Reducing revenue leaks, improving buyer confidence, and ensuring scalability without fragility.<br/>
                    <strong className="text-neutral-400">For professional services:</strong> Clearer positioning, stronger trust signals, and more consistent enquiries.
                </p>
                <p className="mt-2 italic">Different business models. Same principle: your website should actively support the business.</p>
            </div>
        </div>

        {/* Graphical Illustration */}
        <div className="relative border border-neutral-900 bg-black p-6 md:p-10">
            <div className="flex justify-between items-center mb-12">
                <h3 className="text-white font-mono text-sm uppercase">Long-term Value Compounding</h3>
                <div className="flex gap-4 text-xs font-mono">
                    <span className="flex items-center gap-2 text-white"><span className="w-8 h-px bg-white"></span> Asset System</span>
                    <span className="flex items-center gap-2 text-neutral-500"><span className="w-8 h-px bg-neutral-600 border-t border-dashed border-neutral-600"></span> Short-term Tactics</span>
                </div>
            </div>
            
            <div className="relative w-full aspect-[4/3] md:aspect-[16/9] border-l border-b border-neutral-800">
                {/* SVG Illustration */}
                <svg className="w-full h-full overflow-visible" viewBox="0 0 400 200" preserveAspectRatio="none">
                    <defs>
                        <linearGradient id="glow" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="white" stopOpacity="0.1" />
                            <stop offset="100%" stopColor="white" stopOpacity="0" />
                        </linearGradient>
                    </defs>

                    {/* Grid Lines */}
                    <line x1="0" y1="50" x2="400" y2="50" stroke="#262626" strokeWidth="1" />
                    <line x1="0" y1="100" x2="400" y2="100" stroke="#262626" strokeWidth="1" />
                    <line x1="0" y1="150" x2="400" y2="150" stroke="#262626" strokeWidth="1" />
                    
                    <line x1="100" y1="0" x2="100" y2="200" stroke="#262626" strokeWidth="1" />
                    <line x1="200" y1="0" x2="200" y2="200" stroke="#262626" strokeWidth="1" />
                    <line x1="300" y1="0" x2="300" y2="200" stroke="#262626" strokeWidth="1" />

                    {/* Tactics Line (Volatile/Jagged) */}
                    <path 
                        d="M0,180 L40,140 L70,190 L110,120 L150,160 L190,100 L230,170 L270,130 L310,160 L350,140 L400,180" 
                        fill="none" 
                        stroke="#525252" 
                        strokeWidth="1.5" 
                        strokeDasharray="4 4"
                    />

                    {/* Asset System Line (Smooth/Exponential) */}
                    {/* Fill Area */}
                    <path 
                        d="M0,190 C150,190 200,150 400,20 L400,200 L0,200 Z" 
                        fill="url(#glow)" 
                    />
                    {/* Stroke Line */}
                    <path 
                        d="M0,190 C150,190 200,150 400,20" 
                        fill="none" 
                        stroke="white" 
                        strokeWidth="2" 
                    />
                    
                    {/* End Marker Dot */}
                    <circle cx="400" cy="20" r="3" fill="white" />
                </svg>

                {/* Labels on Graph */}
                <div className="absolute bottom-4 left-4 text-[10px] font-mono text-neutral-600">TIME &rarr;</div>
                <div className="absolute top-4 left-4 text-[10px] font-mono text-neutral-600 rotate-90 origin-left">VALUE &rarr;</div>
            </div>
        </div>
      </div>
    </SectionContainer>
  );
};