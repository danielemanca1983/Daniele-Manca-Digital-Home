import React from 'react';
import { SectionContainer } from './ui/GridSystem';
import { UserCheck, X } from 'lucide-react';

export const Audience: React.FC = () => {
  return (
    <SectionContainer className="py-24 bg-neutral-950">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="font-display text-3xl md:text-4xl text-white mb-4">Qualification with Confidence</h2>
        <p className="text-neutral-500">This approach is designed for...</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        
        {/* Good Fit */}
        <div className="bg-black border border-neutral-800 p-8 md:p-12 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-white"></div>
            <h3 className="text-white text-xl font-bold mb-8 flex items-center gap-3">
                <UserCheck className="w-5 h-5" />
                The Right Fit
            </h3>
            <ul className="space-y-4">
                {[
                    "Business owners who take their website seriously as a revenue-supporting asset",
                    "Professional service firms who rely on trust, credibility, and clear positioning",
                    "Established e-commerce companies who want performance without fragility",
                    "Leaders who value expert stewardship over constant involvement"
                ].map((item, i) => (
                    <li key={i} className="flex gap-3 text-neutral-300">
                        <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 shrink-0"></div>
                        <span className="text-sm md:text-base">{item}</span>
                    </li>
                ))}
            </ul>
        </div>

        {/* Not Fit */}
        <div className="bg-neutral-950 border border-neutral-900 p-8 md:p-12 opacity-70 hover:opacity-100 transition-opacity">
            <h3 className="text-neutral-400 text-xl font-bold mb-8 flex items-center gap-3">
                <X className="w-5 h-5" />
                Not The Right Fit
            </h3>
            <ul className="space-y-4">
                <li className="flex gap-3 text-neutral-500">
                    <span className="text-neutral-700">—</span>
                    Early-stage experiments or quick-launch stores
                </li>
                <li className="flex gap-3 text-neutral-500">
                    <span className="text-neutral-700">—</span>
                    Businesses looking for surface-level design fixes
                </li>
                <li className="flex gap-3 text-neutral-500">
                    <span className="text-neutral-700">—</span>
                    Anyone chasing trends, hacks, or the cheapest option
                </li>
            </ul>
            <p className="mt-8 text-white font-medium border-t border-neutral-800 pt-6">
                If you want calm confidence, strategic clarity, and a website you can rely on — this is built for you.
            </p>
        </div>

      </div>
    </SectionContainer>
  );
};