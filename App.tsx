import React, { useState } from 'react';
import { GridLines } from './components/ui/GridSystem';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Solution } from './components/Solution';
import { StrategicDifferentiator } from './components/StrategicDifferentiator';
import { Benefits } from './components/Benefits';
import { Audience } from './components/Audience';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { AboutPage } from './components/AboutPage';
import { ServicesPage } from './components/ServicesPage';
import { LearnPage } from './components/LearnPage';
import { StrategyCallPage } from './components/StrategyCallPage';

function App() {
  const [view, setView] = useState<'home' | 'about' | 'services' | 'learn' | 'strategy'>('home');

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans">
      <GridLines />
      <Navigation onNavigate={setView} currentView={view} />
      
      <main className="relative z-10">
        {view === 'home' && (
          <>
            <Hero />
            <Problem />
            <Solution />
            <StrategicDifferentiator />
            <Benefits />
            <Audience />
            <CTA />
          </>
        )}
        {view === 'about' && <AboutPage />}
        {view === 'services' && <ServicesPage />}
        {view === 'learn' && <LearnPage />}
        {view === 'strategy' && <StrategyCallPage />}
      </main>
      
      <Footer />
    </div>
  );
}

export default App;