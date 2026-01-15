
import React from 'react';
import { Button } from './Button';
import { THEME, LogoIcon } from '../constants';
import { View } from '../types';

interface NavbarProps {
  onNavigate: (view: View) => void;
  currentView: View;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentView }) => {
  return (
    <nav className="fixed top-0 w-full z-50 glass-effect py-4 transition-all duration-300 border-b border-white/[0.05]">
      <div className={THEME.spacing.container}>
        <div className="flex items-center justify-between">
          <div 
            className="flex items-center space-x-4 cursor-pointer group"
            onClick={() => onNavigate(View.LANDING)}
          >
            <LogoIcon />
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight leading-none group-hover:text-[#2dd4bf] transition-colors">VERIDIAN</span>
              <span className="text-[10px] text-slate-500 font-medium tracking-[0.3em] uppercase transition-colors group-hover:text-slate-400">Dental Group</span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-10">
            {['Services', 'Philosophy', 'Doctors'].map(item => (
              <button key={item} className="relative text-[11px] font-bold text-slate-400 hover:text-[#2dd4bf] transition-all uppercase tracking-widest group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#2dd4bf] transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            <button 
              className={`text-[11px] font-bold uppercase tracking-widest transition-all ${currentView === View.DESIGN_SYSTEM ? 'text-[#2dd4bf]' : 'text-slate-400 hover:text-[#2dd4bf]'}`}
              onClick={() => onNavigate(currentView === View.DESIGN_SYSTEM ? View.LANDING : View.DESIGN_SYSTEM)}
            >
              System
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <Button size="sm" variant="outline" className="hidden sm:inline-flex">Portal</Button>
            <Button size="sm">Schedule</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
