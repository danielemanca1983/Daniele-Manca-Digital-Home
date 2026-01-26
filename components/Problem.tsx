import React from 'react';
import { SectionContainer } from './ui/GridSystem';
import { AlertTriangle } from 'lucide-react';

export const Problem: React.FC = () => {
  return (
    <SectionContainer id="problem" className="bg-neutral-950 py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
        
        {/* Left Column: The Hook */}
        <div>
            <h2 className="font-display text-3xl md:text-4xl text-white mb-8 tracking-tight">
                Business Risk, <br/>
                <span className="text-neutral-500">Not “Web Design”</span>
            </h2>
            <div className="space-y-6 text-lg text-neutral-400 leading-relaxed">
                <p>
                    Your website should be working quietly in the background — building trust, supporting buying decisions, and reinforcing your credibility at every stage of the customer journey.
                </p>
                <p className="text-white border-l-2 border-white pl-4 italic">
                    Instead, it often feels like a liability.
                </p>
                <p>
                    You’ve invested time and money, yet results are inconsistent. Advice is contradictory. Every vendor speaks a different language. And each new “solution” seems to introduce more complexity, more risk, and more decisions you never wanted to manage in the first place.
                </p>
                <p>
                    For some businesses, this shows up as inconsistent enquiries. For others, it shows up as traffic that doesn’t convert, stalled sales, or revenue that feels fragile.
                </p>
            </div>
        </div>

        {/* Right Column: The Symptoms */}
        <div className="space-y-8">
            <div className="p-6 border border-neutral-800 bg-black/50 hover:border-neutral-700 transition-colors">
                <div className="flex items-start gap-4">
                    <AlertTriangle className="w-6 h-6 text-neutral-500 mt-1" />
                    <div>
                        <h3 className="text-white font-medium mb-2">The Underlying Concern</h3>
                        <ul className="space-y-3 text-neutral-400">
                            <li className="flex gap-2">
                                <span className="text-neutral-600">—</span>
                                Is this actually helping my business — or quietly undermining it?
                            </li>
                            <li className="flex gap-2">
                                <span className="text-neutral-600">—</span>
                                Does this website reflect the credibility we’ve worked hard to build?
                            </li>
                            <li className="flex gap-2">
                                <span className="text-neutral-600">—</span>
                                What am I risking by leaving this unresolved?
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-4 text-neutral-300">
                <div className="h-px bg-neutral-800 flex-grow"></div>
                <span className="text-sm font-mono uppercase tracking-widest text-neutral-600">Diagnosis</span>
                <div className="h-px bg-neutral-800 flex-grow"></div>
            </div>

            <div className="text-center">
                 <h3 className="text-2xl md:text-3xl text-white font-display mb-2">
                    This isn’t a design issue.
                 </h3>
                 <p className="text-neutral-500">
                    It’s a business clarity and stewardship issue — and most websites are built without addressing it.
                 </p>
            </div>
        </div>

      </div>
    </SectionContainer>
  );
};