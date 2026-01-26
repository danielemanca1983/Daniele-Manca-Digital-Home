import React from 'react';
import { SectionContainer } from './ui/GridSystem';
import { ArrowRight, Layers, Monitor, Code, Search, TrendingUp, Check, X } from 'lucide-react';

export const ServicesPage: React.FC = () => {
  return (
    <div className="pt-20">
      
      {/* SECTION 1: HERO */}
      <SectionContainer className="pt-20 pb-24 md:pt-32 md:pb-32">
        <div className="max-w-4xl">
            <div className="mb-6 flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-500">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span>Clear Value, No Confusion</span>
            </div>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-white mb-8 leading-tight tracking-tight">
                Strategic Website Services Built to Support Real <span className="text-neutral-500">Business Outcomes</span>
            </h1>
            <p className="text-xl text-neutral-400 mb-10 max-w-2xl leading-relaxed">
                A business-first approach for professional service firms and established e-commerce businesses who want clarity, credibility, and dependable commercial performance — delivered through expert-led website strategy, not disconnected tactics.
            </p>
            <a href="#cta" className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 font-semibold hover:bg-neutral-200 transition-colors">
                Book a Strategy Consultation <ArrowRight className="w-4 h-4" />
            </a>
        </div>
      </SectionContainer>

      {/* SECTION 2: PHILOSOPHY */}
      <SectionContainer className="py-24 bg-neutral-950 border-b border-neutral-900">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-4">
                <h2 className="font-display text-3xl text-white mb-4">
                    ONE SYSTEM,<br/>
                    <span className="text-neutral-500">MULTIPLE ENTRY POINTS</span>
                </h2>
            </div>
            <div className="lg:col-span-8 text-lg text-neutral-400 leading-relaxed space-y-6">
                <p>
                    Most businesses don’t need more digital services. They need the right services, applied intentionally.
                </p>
                <p>
                    The <strong className="text-white font-normal">Website-as-an-Asset System</strong> is the framework that guides everything I do. It can involve one service — or a combination — depending on what will most effectively support your business.
                </p>
                <div className="pl-6 border-l border-neutral-800">
                    <p className="text-sm italic text-neutral-500">
                        The common thread is this: every service is delivered through a business-first lens, not as an isolated tactic.
                    </p>
                </div>
            </div>
        </div>
      </SectionContainer>

      {/* SECTION 3: FLAGSHIP OFFER */}
      <SectionContainer className="py-24">
        <div className="border border-white/20 bg-neutral-900/20 p-8 md:p-12 relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

            <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative z-10">
                <div className="lg:w-1/2">
                    <div className="inline-block px-3 py-1 bg-white text-black text-xs font-bold font-mono uppercase mb-6">
                        Flagship Offer
                    </div>
                    <h2 className="font-display text-4xl text-white mb-4">The Website-as-an-Asset System</h2>
                    <p className="text-xl text-neutral-400 mb-8">Strategic Website Stewardship for Serious Businesses</p>
                    <p className="text-neutral-300 leading-relaxed mb-8">
                        This is a comprehensive engagement designed to turn your website into a dependable business asset — supporting trust, conversion, and long-term stability.
                    </p>
                    
                    <div className="space-y-2 mb-8">
                        <div className="text-sm text-neutral-500 font-mono uppercase">Starting Investment</div>
                        <div className="text-3xl text-white font-display">From $7,500</div>
                        <div className="text-xs text-neutral-500 italic">(final scope and pricing confirmed after strategy consultation)</div>
                    </div>
                </div>

                <div className="lg:w-1/2">
                    <h3 className="text-white font-medium mb-6 flex items-center gap-2">
                        <Layers className="w-5 h-5" /> What this typically includes:
                    </h3>
                    <ul className="space-y-4 mb-10">
                        {[
                            "Strategic website design",
                            "Robust, scalable web development",
                            "SEO foundations for long-term discoverability",
                            "Paid advertising support where appropriate",
                            "Ongoing strategic oversight and decision-making"
                        ].map((item, i) => (
                            <li key={i} className="flex gap-3 text-neutral-400 text-sm">
                                <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 shrink-0"></div>
                                {item}
                            </li>
                        ))}
                    </ul>

                    <div className="pt-6 border-t border-white/10">
                        <h4 className="text-xs font-mono text-neutral-500 uppercase mb-4">Best For:</h4>
                        <ul className="space-y-2 text-sm text-neutral-300">
                            <li>— Businesses where the website plays a central role in revenue</li>
                            <li>— Companies tired of fragmented vendors and reactive decisions</li>
                            <li>— Leaders who want expert stewardship, not micromanagement</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      </SectionContainer>

      {/* SECTION 4: INDIVIDUAL SERVICES */}
      <SectionContainer className="py-24 bg-neutral-950">
        <div className="mb-16">
            <h2 className="font-display text-3xl text-white mb-4">Individual Services</h2>
            <p className="text-neutral-500 max-w-2xl">
                For businesses that need focused support in one specific area, individual services are available — always aligned with the Website-as-an-Asset philosophy.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Design */}
            <div className="border border-neutral-900 bg-black p-8 hover:border-neutral-800 transition-colors group">
                <Monitor className="w-8 h-8 text-white mb-6 opacity-70 group-hover:opacity-100" />
                <h3 className="text-xl text-white font-bold mb-2">Web Design</h3>
                <p className="text-sm text-neutral-400 mb-6 font-mono">Design That Builds Trust and Supports Decisions</p>
                <p className="text-neutral-500 text-sm mb-6 leading-relaxed">
                    Not about trends or aesthetics for their own sake. It’s about clarity, credibility, and confidence.
                </p>
                <ul className="space-y-2 mb-8 text-sm text-neutral-400 border-l border-neutral-800 pl-4">
                    <li>Clear messaging and structure</li>
                    <li>Trust-building layouts</li>
                    <li>Alignment with brand credibility</li>
                </ul>
                <div className="mt-auto pt-6 border-t border-neutral-900 flex justify-between items-center">
                    <span className="text-white font-display">From $3,500</span>
                    <span className="text-xs text-neutral-600 uppercase">Ideal for Clarity</span>
                </div>
            </div>

            {/* Development */}
            <div className="border border-neutral-900 bg-black p-8 hover:border-neutral-800 transition-colors group">
                <Code className="w-8 h-8 text-white mb-6 opacity-70 group-hover:opacity-100" />
                <h3 className="text-xl text-white font-bold mb-2">Web Development</h3>
                <p className="text-sm text-neutral-400 mb-6 font-mono">Stable, Scalable Infrastructure You Can Rely On</p>
                <p className="text-neutral-500 text-sm mb-6 leading-relaxed">
                     Development is where many websites quietly fail. We ensure technical soundness, security, and performance.
                </p>
                <ul className="space-y-2 mb-8 text-sm text-neutral-400 border-l border-neutral-800 pl-4">
                    <li>Technically sound & Secure</li>
                    <li>Built to scale without breaking</li>
                    <li>Easy to maintain</li>
                </ul>
                <div className="mt-auto pt-6 border-t border-neutral-900 flex justify-between items-center">
                    <span className="text-white font-display">From $4,500</span>
                    <span className="text-xs text-neutral-600 uppercase">Ideal for Stability</span>
                </div>
            </div>

            {/* SEO */}
            <div className="border border-neutral-900 bg-black p-8 hover:border-neutral-800 transition-colors group">
                <Search className="w-8 h-8 text-white mb-6 opacity-70 group-hover:opacity-100" />
                <h3 className="text-xl text-white font-bold mb-2">SEO</h3>
                <p className="text-sm text-neutral-400 mb-6 font-mono">Search Visibility Built for the Long Term</p>
                <p className="text-neutral-500 text-sm mb-6 leading-relaxed">
                    Not about tricks. Positioning your business to be discoverable, credible, and relevant in an AI-driven landscape.
                </p>
                <ul className="space-y-2 mb-8 text-sm text-neutral-400 border-l border-neutral-800 pl-4">
                    <li>Technical SEO foundations</li>
                    <li>Content alignment with buyer intent</li>
                    <li>Long-term visibility strategy</li>
                </ul>
                <div className="mt-auto pt-6 border-t border-neutral-900 flex justify-between items-center">
                    <span className="text-white font-display">From $2,000</span>
                    <span className="text-xs text-neutral-600 uppercase">Ideal for Discovery</span>
                </div>
            </div>

            {/* Ads */}
            <div className="border border-neutral-900 bg-black p-8 hover:border-neutral-800 transition-colors group">
                <TrendingUp className="w-8 h-8 text-white mb-6 opacity-70 group-hover:opacity-100" />
                <h3 className="text-xl text-white font-bold mb-2">Ads</h3>
                <p className="text-sm text-neutral-400 mb-6 font-mono">Paid Traffic That Supports Strategy</p>
                <p className="text-neutral-500 text-sm mb-6 leading-relaxed">
                    Ads are powerful when they amplify a solid foundation. We focus on conversion-aware traffic routing.
                </p>
                <ul className="space-y-2 mb-8 text-sm text-neutral-400 border-l border-neutral-800 pl-4">
                    <li>Strategic ad setup</li>
                    <li>Clear performance expectations</li>
                    <li>Avoiding wasted spend</li>
                </ul>
                <div className="mt-auto pt-6 border-t border-neutral-900 flex justify-between items-center">
                    <span className="text-white font-display">From $2,500</span>
                    <span className="text-xs text-neutral-600 uppercase">Ideal for Traffic</span>
                </div>
            </div>
        </div>
      </SectionContainer>

      {/* SECTION 5: INTEGRATION */}
      <SectionContainer className="py-24">
        <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl text-white mb-6">How Services Work Together</h2>
            <p className="text-neutral-400 text-lg mb-8">
                Some clients engage for one service. Others combine two or more. <br/>
                What matters is not how many services you use — but whether they’re aligned.
            </p>
            <div className="inline-block border border-neutral-800 p-6 bg-neutral-900/30">
                <p className="text-white font-medium">
                    If a single service will solve the problem, that’s what’s recommended. <br/>
                    If multiple services are required, they’re integrated under one strategic direction.
                </p>
            </div>
        </div>
      </SectionContainer>

      {/* SECTION 6: QUALIFICATION */}
      <SectionContainer className="py-24 bg-neutral-950">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
                <h3 className="text-white font-display text-xl mb-6 flex items-center gap-2">
                    <Check className="w-5 h-5 text-white" /> Strong Fit If You:
                </h3>
                <ul className="space-y-4">
                    {[
                        "Take your website seriously as a business asset",
                        "Want fewer decisions, not more tools",
                        "Value expert judgment and accountability",
                        "Care about credibility, conversion, and stability"
                    ].map((item, i) => (
                        <li key={i} className="flex gap-3 text-neutral-400 text-sm border-l border-neutral-800 pl-4">
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <h3 className="text-neutral-500 font-display text-xl mb-6 flex items-center gap-2">
                    <X className="w-5 h-5" /> Not A Fit If You:
                </h3>
                <ul className="space-y-4">
                    {[
                        "Are looking for the cheapest option",
                        "Are chasing hacks or trends",
                        "Expect tactics without strategy"
                    ].map((item, i) => (
                        <li key={i} className="flex gap-3 text-neutral-600 text-sm border-l border-neutral-900 pl-4">
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
         </div>
      </SectionContainer>

      {/* SECTION 7: CALL TO ACTION */}
      <SectionContainer id="cta" className="py-32 bg-white text-black">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tighter mb-8 leading-tight">
                Let’s Clarify What You Actually Need
            </h2>
            
            <p className="text-xl text-neutral-600 mb-12 max-w-2xl mx-auto leading-relaxed">
                The next step is a strategy consultation. We’ll assess your current website, identify what’s holding it back, and determine whether you need the full Website-as-an-Asset System or which individual service will deliver the greatest impact.
            </p>

            <div className="flex flex-col items-center gap-6">
                <button className="group relative inline-flex items-center justify-center px-8 py-5 text-lg font-bold text-white bg-black hover:bg-neutral-800 transition-all duration-300 w-full sm:w-auto">
                    <span>Book Your Strategy Consultation</span>
                    <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <p className="text-sm text-neutral-500">
                    No pressure. No upselling. Just clear, business-first guidance.
                </p>
            </div>
        </div>
      </SectionContainer>
      
    </div>
  );
};