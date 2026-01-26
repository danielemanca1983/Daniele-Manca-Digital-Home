import React from 'react';
import { SectionContainer } from './ui/GridSystem';
import { Quote, Check, X, ArrowRight } from 'lucide-react';
import { CTA } from './CTA';

export const AboutPage: React.FC = () => {
  return (
    <div className="pt-20">
      {/* SECTION 1: INTRODUCTION */}
      <SectionContainer className="py-24 md:py-32">
        <div className="max-w-4xl">
          <div className="mb-6 flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-500">
            <span className="w-2 h-2 bg-white rounded-full"></span>
            <span>Who This Is Really For</span>
          </div>
          <h1 className="font-display text-4xl md:text-6xl text-white mb-8 leading-tight">
            I help business owners turn their websites into real business assets — not sources of confusion, stress, or quiet risk.
          </h1>
          <div className="text-lg md:text-xl text-neutral-400 space-y-6 leading-relaxed max-w-2xl">
            <p>
              Specifically, I work with professional service firms and established e-commerce businesses who are tired of second-guessing digital decisions and want a website they can trust to support credibility, revenue, and long-term growth.
            </p>
            <p className="text-white font-medium border-l-2 border-white pl-4">
              Without hype. Without jargon. And without needing to micromanage every detail.
            </p>
            <p>
              But I didn’t always see websites this way — and I understand why so many businesses feel stuck.
            </p>
          </div>
        </div>
      </SectionContainer>

      {/* SECTION 2: ORIGIN STORY */}
      <SectionContainer className="py-24 bg-neutral-950">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-display text-3xl text-white mb-6">
              “I Know How This Feels”
            </h2>
            <div className="space-y-6 text-neutral-400 leading-relaxed">
              <p>
                I know how uncomfortable it is to rely on something you don’t fully trust.
              </p>
              <p>
                I’ve seen what happens when a website looks fine on the surface, but underneath is unclear, over-complicated, or misaligned with the actual business. When decisions are made reactively. When vendors speak in abstractions. When responsibility is fragmented and no one is truly accountable.
              </p>
              <p>
                From the outside, everything can appear “done.” But internally, there’s hesitation.
              </p>
              <p>
                 For service firms, that uncertainty shows up as inconsistent enquiries or weakened credibility. For e-commerce businesses, it shows up as conversion friction, fragile systems, or revenue that doesn’t feel dependable.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col justify-center space-y-6">
             <div className="bg-black border border-neutral-900 p-8 relative">
                <Quote className="absolute top-6 right-6 text-neutral-800 w-8 h-8" />
                <h3 className="text-neutral-500 font-mono text-sm uppercase mb-4">Internal Hesitation</h3>
                <ul className="space-y-4 text-white font-display text-lg">
                    <li className="flex gap-4">
                        <span className="text-neutral-700">01</span>
                        Is this really working?
                    </li>
                    <li className="flex gap-4">
                        <span className="text-neutral-700">02</span>
                        Are we leaving money on the table?
                    </li>
                    <li className="flex gap-4">
                        <span className="text-neutral-700">03</span>
                        What breaks if traffic spikes, ads scale, or competitors move faster?
                    </li>
                </ul>
             </div>
             <p className="text-sm text-neutral-500 italic">
                Different symptoms — same underlying issue: no one is treating the website like the business asset it actually is.
             </p>
          </div>
        </div>
      </SectionContainer>

      {/* SECTION 3 & 4: WHAT DIDN'T WORK & TURNING POINT */}
      <SectionContainer className="py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
                <h2 className="font-display text-3xl text-white mb-6">Why It Matters</h2>
                <p className="text-neutral-400 mb-6 leading-relaxed">
                    Most businesses are pushed toward extremes. On one side, you’re told to “just trust the experts” — without being given clarity. On the other, you’re handed tools, dashboards, and DIY systems — and expected to become technical overnight.
                </p>
                <p className="text-white font-medium">
                    Websites don’t fail because owners don’t care. They fail because strategy, stewardship, and accountability are missing.
                </p>
            </div>
            
            <div className="hidden lg:block lg:col-span-1 border-r border-neutral-900 h-full"></div>

            <div className="lg:col-span-6 flex flex-col justify-center">
                 <div className="mb-4 text-xs font-mono uppercase tracking-widest text-green-500">
                    The Turning Point
                 </div>
                 <h3 className="font-display text-4xl text-white mb-6">
                    A website isn’t a project. <br/>
                    It’s a <span className="text-neutral-500">Business Asset</span>.
                 </h3>
                 <p className="text-neutral-400 leading-relaxed mb-6">
                    Once you treat it that way, the decisions become calmer, clearer, and far more effective.
                 </p>
                 <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-white">
                        <ArrowRight className="w-4 h-4 text-neutral-500" />
                        Instead of chasing trends, you build structure.
                    </li>
                    <li className="flex items-center gap-3 text-white">
                         <ArrowRight className="w-4 h-4 text-neutral-500" />
                        Instead of reacting, you steward.
                    </li>
                    <li className="flex items-center gap-3 text-white">
                         <ArrowRight className="w-4 h-4 text-neutral-500" />
                        Instead of hoping it works, you know why it does.
                    </li>
                 </ul>
            </div>
        </div>
      </SectionContainer>

      {/* SECTION 5: PHILOSOPHY */}
      <SectionContainer className="py-24 bg-neutral-950">
        <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl text-white mb-4">The Philosophy</h2>
            <p className="text-neutral-500">Whether your business sells expertise or products, the goal is the same: clarity, confidence, and commercial intent.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-neutral-900 border border-neutral-900">
            {[
                "Support buying decisions, not distract from them",
                "Scale without becoming fragile",
                "Reinforce trust before a conversation begins",
                "Reduce mental load, not add to it"
            ].map((item, i) => (
                <div key={i} className="bg-black p-8 flex flex-col justify-between h-48 group hover:bg-neutral-950 transition-colors">
                    <span className="text-xs font-mono text-neutral-600">0{i+1}</span>
                    <p className="text-white font-medium text-lg leading-snug">{item}</p>
                </div>
            ))}
        </div>
      </SectionContainer>

      {/* SECTION 6: QUALIFICATION */}
      <SectionContainer className="py-24">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-neutral-900/20 p-8 border border-neutral-900">
                <h3 className="text-white font-display text-xl mb-6">I work best with...</h3>
                <ul className="space-y-4">
                    {[
                        "Business owners who take their reputation seriously",
                        "Want fewer digital decisions, not more",
                        "Value calm, expert stewardship",
                        "See their website as a long-term asset"
                    ].map((item, i) => (
                        <li key={i} className="flex gap-3 text-neutral-300 text-sm">
                            <Check className="w-5 h-5 text-white shrink-0" />
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="bg-neutral-900/20 p-8 border border-neutral-900">
                <h3 className="text-neutral-500 font-display text-xl mb-6">This is not for...</h3>
                <ul className="space-y-4">
                    {[
                        "Early-stage experiments or rushed launches",
                        "Businesses chasing hacks, trends, or shortcuts",
                        "Anyone looking for surface-level design only",
                        "Those who want the cheapest option"
                    ].map((item, i) => (
                        <li key={i} className="flex gap-3 text-neutral-500 text-sm">
                            <X className="w-5 h-5 shrink-0" />
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
         </div>
      </SectionContainer>

      {/* SECTION 7: INVITATION / CTA */}
      <CTA />
    </div>
  );
};