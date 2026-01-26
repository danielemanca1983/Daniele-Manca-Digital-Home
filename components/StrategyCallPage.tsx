import React from 'react';
import { SectionContainer } from './ui/GridSystem';
import { Check, X, Calendar, Clock, Video, CreditCard, ArrowRight, MessageSquare } from 'lucide-react';

export const StrategyCallPage: React.FC = () => {
  return (
    <div className="pt-20">
      
      {/* SECTION 1: HERO */}
      <SectionContainer className="pt-20 pb-24 md:pt-32 md:pb-32">
        <div className="max-w-4xl">
            <div className="mb-6 flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-500">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                <span>Calm & Strategic</span>
            </div>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-white mb-8 leading-tight tracking-tight">
                Let’s Talk About Your Website — <span className="text-neutral-500">Calmly and Strategically</span>
            </h1>
            <p className="text-xl text-neutral-400 mb-10 max-w-2xl leading-relaxed">
                Book a strategy consultation to review your website, identify what’s holding it back, and clarify the smartest path forward.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-neutral-800 bg-neutral-900/50 text-sm text-neutral-400 rounded-full">
                <MessageSquare className="w-4 h-4" />
                <span>Grounded, business-first conversation</span>
            </div>
        </div>
      </SectionContainer>

      {/* SECTION 2: WHAT THIS IS */}
      <SectionContainer className="py-24 bg-neutral-950 border-b border-neutral-900">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
                <h2 className="font-display text-3xl text-white mb-6">
                    This consultation exists to give you clarity.
                </h2>
                <p className="text-neutral-400 text-lg leading-relaxed mb-8">
                    Whether your website supports professional services or e-commerce, we’ll look at:
                </p>
                <ul className="space-y-4">
                    {[
                        "How your website currently supports (or undermines) credibility",
                        "Where performance, conversion, or trust may be leaking",
                        "What actually needs attention — and what doesn’t",
                        "Whether the Website-as-an-Asset System is the right fit"
                    ].map((item, i) => (
                        <li key={i} className="flex gap-3 text-neutral-300 text-sm">
                            <Check className="w-5 h-5 text-white shrink-0" />
                            {item}
                        </li>
                    ))}
                </ul>
                <p className="mt-8 text-white font-medium italic border-l-2 border-white pl-4">
                    You’ll leave with a clearer understanding of your situation — even if we don’t work together.
                </p>
            </div>

            <div className="bg-black border border-neutral-900 p-8 lg:p-12">
                <h3 className="text-neutral-500 font-mono text-sm uppercase mb-6">What this is not</h3>
                <ul className="space-y-6">
                    <li className="flex gap-4 items-start">
                        <X className="w-5 h-5 text-neutral-600 mt-1" />
                        <div>
                            <strong className="text-white block mb-1">A pressure-filled sales call</strong>
                            <span className="text-neutral-500 text-sm">No aggressive tactics or forced urgency.</span>
                        </div>
                    </li>
                    <li className="flex gap-4 items-start">
                        <X className="w-5 h-5 text-neutral-600 mt-1" />
                        <div>
                            <strong className="text-white block mb-1">A generic audit or checklist</strong>
                            <span className="text-neutral-500 text-sm">We look at your specific business context.</span>
                        </div>
                    </li>
                    <li className="flex gap-4 items-start">
                        <X className="w-5 h-5 text-neutral-600 mt-1" />
                        <div>
                            <strong className="text-white block mb-1">Filled with jargon</strong>
                            <span className="text-neutral-500 text-sm">Just clear, plain English assessment.</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
      </SectionContainer>

      {/* SECTION 3: WHAT TO EXPECT */}
      <SectionContainer className="py-24">
        <div className="mb-16 max-w-3xl">
            <h2 className="font-display text-3xl text-white mb-4">Here’s What Happens on the Call</h2>
            <p className="text-neutral-500">Transparency builds trust.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-neutral-900 border border-neutral-900">
            <div className="bg-black p-10 hover:bg-neutral-950 transition-colors">
                <span className="text-4xl font-display text-neutral-800 mb-6 block">01</span>
                <h3 className="text-xl text-white font-bold mb-4">Review</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                    We discuss your business, your goals, and how your website is expected to support them.
                </p>
            </div>
            <div className="bg-black p-10 hover:bg-neutral-950 transition-colors">
                <span className="text-4xl font-display text-neutral-800 mb-6 block">02</span>
                <h3 className="text-xl text-white font-bold mb-4">Identify</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                    We identify gaps, risks, or misalignment — whether that’s design, development, SEO, ads, or overall strategy.
                </p>
            </div>
            <div className="bg-black p-10 hover:bg-neutral-950 transition-colors">
                <span className="text-4xl font-display text-neutral-800 mb-6 block">03</span>
                <h3 className="text-xl text-white font-bold mb-4">Next Steps</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                    We talk through realistic options: one focused service, a combination, or the full system.
                </p>
            </div>
        </div>
        
        <div className="mt-8 text-center">
            <p className="text-neutral-500 text-sm">
                If there’s a fit, we’ll discuss it. If not, you’ll still leave with clarity and direction.
            </p>
        </div>
      </SectionContainer>

      {/* SECTION 4: QUALIFICATION */}
      <SectionContainer className="py-24 bg-neutral-950">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
                <h3 className="text-white font-display text-xl mb-6 flex items-center gap-2">
                    <Check className="w-5 h-5 text-white" /> Best Suited For:
                </h3>
                <ul className="space-y-4 text-sm text-neutral-300">
                    <li className="flex gap-3 border-l border-neutral-800 pl-4">
                        Business owners who take their website seriously as a business asset
                    </li>
                    <li className="flex gap-3 border-l border-neutral-800 pl-4">
                        Professional service firms where trust and credibility drive revenue
                    </li>
                    <li className="flex gap-3 border-l border-neutral-800 pl-4">
                        Established e-commerce businesses focused on conversion and stability
                    </li>
                    <li className="flex gap-3 border-l border-neutral-800 pl-4">
                        Decision-makers who want expert guidance, not more tools
                    </li>
                </ul>
            </div>

            <div className="opacity-60">
                <h3 className="text-neutral-500 font-display text-xl mb-6 flex items-center gap-2">
                    <X className="w-5 h-5" /> Not A Good Fit If:
                </h3>
                <ul className="space-y-4 text-sm text-neutral-500">
                    <li className="flex gap-3 border-l border-neutral-900 pl-4">
                        You’re looking for quick fixes or the cheapest option
                    </li>
                    <li className="flex gap-3 border-l border-neutral-900 pl-4">
                        You’re not ready to invest in your website strategically
                    </li>
                    <li className="flex gap-3 border-l border-neutral-900 pl-4">
                        You want tactics without context or accountability
                    </li>
                </ul>
            </div>
         </div>
      </SectionContainer>

      {/* SECTION 5: PRACTICAL DETAILS */}
      <SectionContainer className="py-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center p-6 border border-neutral-900 bg-neutral-950">
                <Clock className="w-6 h-6 text-white mb-3" />
                <span className="text-xs font-mono uppercase text-neutral-500 mb-1">Duration</span>
                <span className="text-white font-medium">30 Minutes</span>
            </div>
            <div className="flex flex-col items-center text-center p-6 border border-neutral-900 bg-neutral-950">
                <Video className="w-6 h-6 text-white mb-3" />
                <span className="text-xs font-mono uppercase text-neutral-500 mb-1">Format</span>
                <span className="text-white font-medium">Video Call</span>
            </div>
            <div className="flex flex-col items-center text-center p-6 border border-neutral-900 bg-neutral-950">
                <CreditCard className="w-6 h-6 text-white mb-3" />
                <span className="text-xs font-mono uppercase text-neutral-500 mb-1">Cost</span>
                <span className="text-white font-medium">Free</span>
            </div>
            <div className="flex flex-col items-center text-center p-6 border border-neutral-900 bg-neutral-950">
                <Calendar className="w-6 h-6 text-white mb-3" />
                <span className="text-xs font-mono uppercase text-neutral-500 mb-1">Prep</span>
                <span className="text-white font-medium">None Required</span>
            </div>
        </div>
      </SectionContainer>

      {/* SECTION 6: BOOKING CTA */}
      <SectionContainer id="calendar" className="py-32 bg-white text-black">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tighter mb-8 leading-tight">
                Book Your Strategy Consultation
            </h2>
            
            <p className="text-xl text-neutral-600 mb-12 max-w-2xl mx-auto leading-relaxed">
                Choose a time that works for you using the calendar below.<br/>
                If your website feels unclear, underperforming, or harder to trust than it should — this is the right place to start.
            </p>

            {/* Calendar Placeholder */}
            <div className="w-full max-w-3xl mx-auto h-[600px] bg-neutral-50 border border-neutral-200 rounded-lg flex flex-col items-center justify-center relative overflow-hidden mb-12 shadow-inner">
                <div className="absolute inset-0 grid grid-cols-7 gap-px bg-neutral-200 opacity-20 pointer-events-none">
                    {Array.from({ length: 35 }).map((_, i) => (
                        <div key={i} className="bg-white"></div>
                    ))}
                </div>
                <div className="relative z-10 text-center">
                    <Calendar className="w-12 h-12 text-neutral-300 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-neutral-400">Calendar Loading...</h3>
                    <p className="text-sm text-neutral-400 mt-2">Connecting to scheduling provider</p>
                </div>
            </div>

            <p className="text-sm text-neutral-500">
                Trouble finding a time? <a href="#" className="underline hover:text-black">Email me directly.</a>
            </p>
        </div>
      </SectionContainer>

      {/* SECTION 7: FINAL REASSURANCE */}
      <SectionContainer className="py-24 bg-neutral-950 text-center">
          <div className="max-w-2xl mx-auto">
            <p className="text-white text-xl md:text-2xl font-display leading-relaxed mb-8">
                “You don’t need to overhaul everything. You don’t need to understand every technical detail. You just need clear thinking, applied correctly.”
            </p>
            <p className="text-neutral-500">
                If you’re ready to stop guessing and start trusting your website again, let’s talk.
            </p>
          </div>
      </SectionContainer>
      
    </div>
  );
};