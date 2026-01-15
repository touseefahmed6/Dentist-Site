
import React from 'react';
import { Button } from './Button';
import { THEME } from '../constants';

export const DesignSystem: React.FC = () => {
  return (
    <div className="pt-32 pb-20">
      <div className={THEME.spacing.container}>
        <header className="mb-24 pb-12 border-b border-slate-800">
          <span className="text-teal-400 text-[10px] uppercase tracking-[0.4em] font-bold mb-4 block">Design Specification</span>
          <h1 className="text-5xl font-bold mb-6 tracking-tight">Clinical Standards v1.0</h1>
          <p className="text-slate-400 text-lg max-w-2xl font-light leading-relaxed">
            The visual language of Veridian Dental is defined by precision, clarity, and an atmosphere of clinical trust.
          </p>
        </header>

        {/* Colors */}
        <section className="mb-24">
          <h2 className="text-[10px] uppercase tracking-[0.4em] font-bold text-slate-500 mb-12">01 / Palette</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: 'Dark Slate', hex: '#0c0e12', class: 'bg-[#0c0e12]' },
              { name: 'Teal Accent', hex: '#2dd4bf', class: 'bg-[#2dd4bf]' },
              { name: 'Surface', hex: '#171a21', class: 'bg-[#171a21]' },
              { name: 'Muted Text', hex: '#64748b', class: 'bg-[#64748b]' },
            ].map(color => (
              <div key={color.name} className="space-y-4">
                <div className={`h-24 rounded-md ${color.class} border border-white/5 shadow-inner`}></div>
                <div>
                  <p className="font-bold tracking-tight uppercase text-xs">{color.name}</p>
                  <p className="text-[10px] font-mono text-slate-500">{color.hex}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Typography */}
        <section className="mb-24">
          <h2 className="text-[10px] uppercase tracking-[0.4em] font-bold text-slate-500 mb-12">02 / Typography</h2>
          <div className="space-y-16">
            <div>
              <p className="text-[9px] text-teal-400 mb-4 font-mono tracking-widest">H1 / INTER BOLD / 72PX</p>
              <h1 className="text-6xl font-bold tracking-tight">Clinical Excellence.</h1>
            </div>
            <div>
              <p className="text-[9px] text-teal-400 mb-4 font-mono tracking-widest">BODY / INTER REGULAR / 18PX</p>
              <p className="text-xl text-slate-400 leading-relaxed max-w-2xl">
                Precision diagnostics meet patient-centered care. Every clinical decision is backed by peer-reviewed evidence and modern methodology.
              </p>
            </div>
          </div>
        </section>

        {/* Buttons */}
        <section className="mb-24">
          <h2 className="text-[10px] uppercase tracking-[0.4em] font-bold text-slate-500 mb-12">03 / Interaction</h2>
          <div className="flex flex-wrap gap-10 items-center">
            <div className="space-y-4">
              <p className="text-[9px] text-slate-500 font-mono tracking-widest">PRIMARY</p>
              <Button>New Appointment</Button>
            </div>
            <div className="space-y-4">
              <p className="text-[9px] text-slate-500 font-mono tracking-widest">OUTLINE</p>
              <Button variant="outline">Learn More</Button>
            </div>
            <div className="space-y-4">
              <p className="text-[9px] text-slate-500 font-mono tracking-widest">GHOST</p>
              <Button variant="ghost">Secondary Action</Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
