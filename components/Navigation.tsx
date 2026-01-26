import React from 'react';
import { Menu } from 'lucide-react';

interface NavigationProps {
  onNavigate: (view: 'home' | 'about' | 'services' | 'learn' | 'strategy') => void;
  currentView: 'home' | 'about' | 'services' | 'learn' | 'strategy';
}

export const Navigation: React.FC<NavigationProps> = ({ onNavigate, currentView }) => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-neutral-900">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo area */}
            <div 
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => onNavigate('home')}
            >
                <div className="w-4 h-4 bg-white"></div>
                <span className="font-display font-bold text-lg tracking-tight text-white">
                    DANIELE MANCA
                </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8 text-sm font-medium">
                <button 
                  onClick={() => onNavigate('home')} 
                  className={`transition-colors ${currentView === 'home' ? 'text-white' : 'text-neutral-400 hover:text-white'}`}
                >
                  Home
                </button>
                
                <button 
                  onClick={() => onNavigate('about')} 
                  className={`transition-colors ${currentView === 'about' ? 'text-white' : 'text-neutral-400 hover:text-white'}`}
                >
                  About
                </button>
                
                <button 
                  onClick={() => onNavigate('services')} 
                  className={`transition-colors ${currentView === 'services' ? 'text-white' : 'text-neutral-400 hover:text-white'}`}
                >
                  Services
                </button>
                
                <button 
                  onClick={() => onNavigate('learn')} 
                  className={`transition-colors ${currentView === 'learn' ? 'text-white' : 'text-neutral-400 hover:text-white'}`}
                >
                  Learn
                </button>
                
                <button 
                  onClick={() => onNavigate('strategy')}
                  className={`px-5 py-2 font-semibold rounded-full transition-colors ${currentView === 'strategy' ? 'bg-neutral-200 text-black' : 'bg-white text-black hover:bg-neutral-200'}`}
                >
                    Book Strategy Call
                </button>
            </div>

            {/* Mobile Menu Icon */}
            <div className="md:hidden text-white">
                <Menu className="w-6 h-6" />
            </div>
        </div>
      </div>
    </nav>
  );
};