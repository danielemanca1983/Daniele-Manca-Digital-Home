import React from 'react';
import { SectionContainer } from './ui/GridSystem';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black pt-10 pb-6 border-t border-neutral-900">
        <SectionContainer className="border-none">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-8">
                <div className="col-span-1 md:col-span-2">
                    <h3 className="text-white font-display font-bold text-lg mb-4">DANIELE MANCA DIGITAL</h3>
                    <p className="text-neutral-500 max-w-sm text-sm">
                        Turns your website into a dependable, confidence-building asset.
                    </p>
                </div>
                <div>
                    <h4 className="text-white font-mono text-xs uppercase mb-4">Navigation</h4>
                    <ul className="space-y-2 text-sm text-neutral-400">
                        <li><a href="#problem" className="hover:text-white transition-colors">Problem</a></li>
                        <li><a href="#solution" className="hover:text-white transition-colors">Solution</a></li>
                        <li><a href="#benefits" className="hover:text-white transition-colors">Benefits</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-white font-mono text-xs uppercase mb-4">Legal</h4>
                    <ul className="space-y-2 text-sm text-neutral-400">
                        <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-neutral-900 text-xs text-neutral-600 font-mono">
                <p>&copy; {new Date().getFullYear()} Daniele Manca Digital. All rights reserved.</p>
                <p>Designed with Intent.</p>
            </div>
        </SectionContainer>
    </footer>
  );
};