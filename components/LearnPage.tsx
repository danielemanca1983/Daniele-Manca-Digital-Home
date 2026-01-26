import React from 'react';
import { SectionContainer } from './ui/GridSystem';
import { ArrowRight, BookOpen, ShieldCheck, BarChart3, Search, TrendingUp, Check, X, FileText, Target } from 'lucide-react';

export const LearnPage: React.FC = () => {
  return (
    <div className="pt-20">
      
      {/* SECTION 1: HERO */}
      <SectionContainer className="pt-20 pb-24 md:pt-32 md:pb-32">
        <div className="max-w-4xl">
            <div className="mb-6 flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-500">
                <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                <span>Insight & Clarity</span>
            </div>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-white mb-8 leading-tight tracking-tight">
                Clear thinking about <br/>
                websites as <span className="text-neutral-500">business assets</span>
            </h1>
            <p className="text-xl text-neutral-400 mb-10 max-w-2xl leading-relaxed">
                Practical guidance for business owners who want clarity, credibility, and dependable commercial performance — without jargon, hype, or reactive digital decisions.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-neutral-800 bg-neutral-900/50 text-sm text-neutral-400 rounded-full">
                <BookOpen className="w-4 h-4" />
                <span>Knowledge Library</span>
            </div>
        </div>
      </SectionContainer>

      {/* SECTION 2: THE PROMISE */}
      <SectionContainer className="py-24 bg-neutral-950 border-b border-neutral-900">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
                <h2 className="font-display text-3xl text-white mb-6">
                    What You’ll Find Here
                </h2>
                <p className="text-neutral-400 text-lg leading-relaxed mb-6">
                    Your website affects credibility, conversion, and revenue — whether you’re actively working on it or not.
                </p>
            </div>
            <div className="lg:col-span-7">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border border-neutral-800 p-6 bg-black">
                        <h3 className="text-white font-medium mb-2">Make Better Decisions</h3>
                        <p className="text-sm text-neutral-500">Stop guessing and start understanding the mechanics of digital assets.</p>
                    </div>
                    <div className="border border-neutral-800 p-6 bg-black">
                        <h3 className="text-white font-medium mb-2">Reduce Risk</h3>
                        <p className="text-sm text-neutral-500">Avoid expensive rebuilds and misaligned strategies.</p>
                    </div>
                    <div className="md:col-span-2 border-l-2 border-white pl-6 py-2">
                        <p className="text-white font-medium italic">
                            Everything here is grounded in the Website-as-an-Asset philosophy: treating your website as infrastructure, not a trend-driven project.
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </SectionContainer>

      {/* SECTION 3: CONTENT PILLARS */}
      <SectionContainer className="py-24">
        <div className="mb-16">
            <h2 className="font-display text-3xl text-white mb-4">Core Topics</h2>
            <p className="text-neutral-500">The fundamental pillars of effective website stewardship.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-900 border border-neutral-900">
            {/* Strategy */}
            <div className="bg-black p-8 group hover:bg-neutral-950 transition-colors">
                <Target className="w-8 h-8 text-white mb-6 opacity-60 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-lg text-white font-bold mb-3">Website Strategy & Clarity</h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                    How to think about your website’s role in the business, define what “success” actually means, and avoid expensive misalignment.
                </p>
            </div>

            {/* Credibility */}
            <div className="bg-black p-8 group hover:bg-neutral-950 transition-colors">
                <ShieldCheck className="w-8 h-8 text-white mb-6 opacity-60 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-lg text-white font-bold mb-3">Credibility & Trust</h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                    Why some websites feel trustworthy immediately — and others quietly undermine confidence, even when they look “fine.”
                </p>
            </div>

            {/* Conversion */}
            <div className="bg-black p-8 group hover:bg-neutral-950 transition-colors">
                <BarChart3 className="w-8 h-8 text-white mb-6 opacity-60 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-lg text-white font-bold mb-3">Commercial Performance</h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                    Clear thinking around enquiries, sales, conversion friction, and why traffic alone is never the problem.
                </p>
            </div>

            {/* SEO */}
            <div className="bg-black p-8 group hover:bg-neutral-950 transition-colors">
                <Search className="w-8 h-8 text-white mb-6 opacity-60 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-lg text-white font-bold mb-3">SEO & AI Discovery</h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                    How search, discoverability, and AI systems evaluate websites — and how to build long-term visibility without chasing algorithms.
                </p>
            </div>

            {/* Ads */}
            <div className="bg-black p-8 group hover:bg-neutral-950 transition-colors">
                <TrendingUp className="w-8 h-8 text-white mb-6 opacity-60 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-lg text-white font-bold mb-3">Ads & Risk Management</h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                    When paid traffic makes sense, when it doesn’t, and how to avoid amplifying weak foundations with ad spend.
                </p>
            </div>

            {/* Philosophy */}
            <div className="bg-neutral-900/40 p-8 flex flex-col justify-center items-center text-center">
                <p className="text-white font-display text-lg mb-4">
                    "Calm, informed decisions — not tactics."
                </p>
            </div>
        </div>
      </SectionContainer>

      {/* SECTION 4: QUALIFICATION */}
      <SectionContainer className="py-24 bg-neutral-950">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="border border-neutral-900 p-8">
                <h3 className="text-white font-display text-xl mb-6">Who This Is For</h3>
                <ul className="space-y-4">
                    {[
                        "Business owners who take credibility seriously",
                        "Leaders who want fewer reactive decisions",
                        "Teams responsible for revenue, growth, or brand trust",
                        "Anyone tired of conflicting digital advice"
                    ].map((item, i) => (
                        <li key={i} className="flex gap-3 text-neutral-300 text-sm">
                            <Check className="w-5 h-5 text-white shrink-0" />
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="border border-neutral-900 p-8 opacity-60">
                <h3 className="text-neutral-500 font-display text-xl mb-6">Who It's Not For</h3>
                <ul className="space-y-4">
                    {[
                        "Early-stage experiments",
                        "“Growth hacks” or shortcuts",
                        "Platform-specific tricks that expire next quarter"
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

      {/* SECTION 5: FEATURED CONTENT PLACEHOLDER */}
      <SectionContainer className="py-24">
        <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-10">
                <div className="h-px bg-neutral-800 flex-grow"></div>
                <span className="text-sm font-mono uppercase tracking-widest text-neutral-500">Start Here</span>
                <div className="h-px bg-neutral-800 flex-grow"></div>
            </div>

            <div className="space-y-4">
                {[
                    "Why Most Websites Don’t Fail — They Just Drift",
                    "What It Actually Means to Treat Your Website as an Asset",
                    "Traffic Isn’t the Problem: Understanding Conversion Friction",
                    "When SEO Helps — and When It Quietly Hurts",
                    "Why Ads Expose Weak Websites Instead of Fixing Them"
                ].map((title, i) => (
                    <div key={i} className="group flex items-center justify-between p-6 border border-neutral-800 hover:bg-neutral-900 hover:border-neutral-700 transition-colors cursor-pointer">
                        <div className="flex items-start gap-4">
                            <span className="text-neutral-600 font-mono text-sm mt-1">0{i+1}</span>
                            <h3 className="text-lg text-neutral-300 group-hover:text-white transition-colors">{title}</h3>
                        </div>
                        <ArrowRight className="w-5 h-5 text-neutral-600 group-hover:text-white group-hover:translate-x-1 transition-transform" />
                    </div>
                ))}
            </div>
            
            <p className="mt-8 text-center text-xs text-neutral-600 font-mono uppercase">
                More articles added regularly
            </p>
        </div>
      </SectionContainer>

      {/* SECTION 6: SOFT CTA */}
      <SectionContainer id="cta" className="py-32 bg-white text-black">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tighter mb-8 leading-tight">
                Want Help Applying This to Your Business?
            </h2>
            
            <p className="text-xl text-neutral-600 mb-12 max-w-2xl mx-auto leading-relaxed">
                Reading creates clarity. Applying it correctly creates results.<br/><br/>
                If you’d like help translating these principles into a website that actually supports your business, the next step is a strategy consultation.
            </p>

            <div className="flex flex-col items-center gap-6">
                <button className="group relative inline-flex items-center justify-center px-8 py-5 text-lg font-bold text-white bg-black hover:bg-neutral-800 transition-all duration-300 w-full sm:w-auto">
                    <span>Book Your Strategy Consultation</span>
                    <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <p className="text-sm text-neutral-500">
                    No pressure. No obligation. Just clear thinking applied to your business.
                </p>
            </div>
        </div>
      </SectionContainer>
      
    </div>
  );
};