
import React from 'react';
import { Button } from './Button';
import { THEME, SERVICES, TESTIMONIALS, CLINICAL_STATS, LEAD_DOCTOR, LogoIcon } from '../constants';

export const LandingPage: React.FC = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background Image Layer - Enhanced for surgical atmosphere */}
      <div className="absolute top-0 left-0 w-full h-[100vh] -z-20">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0c0e12]/90 to-[#0c0e12]"></div>
        <img 
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=2000" 
          alt="Clinical Background" 
          className="w-full h-full object-cover opacity-[0.12] grayscale contrast-125 brightness-50"
        />
      </div>

      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[700px] bg-[#2dd4bf]/[0.03] blur-[140px] rounded-full pointer-events-none -z-10"></div>

      {/* Hero Section - Reverted to previous spacing and scale */}
      <section className="pt-28 pb-24 relative">
        <div className={THEME.spacing.container}>
          <div className="max-w-6xl mx-auto text-center opacity-0 animate-reveal">
            <div className="flex items-center justify-center space-x-8 mb-10">
              <span className="w-16 h-px bg-[#2dd4bf]/20"></span>
              <span className="text-[11px] uppercase tracking-[0.5em] text-[#2dd4bf] font-bold">Clinical Distinction</span>
              <span className="w-16 h-px bg-[#2dd4bf]/20"></span>
            </div>
            
            <h1 className="text-6xl md:text-[9.5rem] font-bold mb-12 leading-[0.85] tracking-tighter uppercase">
              Clinical <span className="text-[#2dd4bf] italic lowercase normal-case">Integrity</span> <br />
              <span className="block">Surgical</span>
              <span className="block">Precision.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-400 mb-14 max-w-3xl mx-auto leading-relaxed font-light">
              Redefining dental architecture with a focus on biological health, precision diagnostics, and enduring patient results.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button size="lg" className="w-full sm:w-auto min-w-[240px]">Request Consultation</Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto min-w-[240px]">View Facility</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-24 border-y border-white/5 bg-white/[0.01]">
        <div className={THEME.spacing.container}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
            {CLINICAL_STATS.map((stat, idx) => (
              <div key={idx} className={`opacity-0 animate-reveal delay-${(idx + 1) * 100} text-center md:text-left border-l-0 md:border-l border-slate-800 pl-0 md:pl-12 group cursor-default transition-all hover:border-[#2dd4bf]`}>
                <p className="text-6xl font-bold text-white mb-3 tracking-tighter transition-all group-hover:text-[#2dd4bf]">{stat.value}</p>
                <p className="text-[11px] uppercase tracking-[0.4em] font-bold text-slate-500 group-hover:text-slate-300 transition-colors">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className={THEME.spacing.sectionPadding}>
        <div className={THEME.spacing.container}>
          <div className="mb-32 opacity-0 animate-reveal flex flex-col md:flex-row items-start justify-between">
            <div className="relative mb-12 md:mb-0">
              <h2 className="text-7xl md:text-[5.5rem] font-bold leading-[0.85] tracking-[-0.04em] text-white">
                Core Clinical <br /> Services
              </h2>
              <div className="w-32 h-[5px] bg-[#2dd4bf] mt-8"></div>
            </div>
            <div className="md:max-w-[420px] md:pt-4">
              <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed tracking-tight">
                Providing specialized oral rehabilitation through evidence-based methodologies and modern technology.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {SERVICES.map((service, idx) => (
              <div 
                key={service.id} 
                className={`p-16 bg-[#171a21] border border-white/[0.03] rounded-3xl group hover-lift transition-all opacity-0 animate-reveal delay-${idx * 100}`}
              >
                <div className="text-5xl mb-12 grayscale group-hover:grayscale-0 transition-all transform group-hover:scale-110 duration-700 origin-left">
                  {service.icon}
                </div>
                <h3 className="text-3xl font-bold mb-6 text-slate-100 group-hover:text-[#2dd4bf] transition-colors uppercase tracking-tighter">{service.title}</h3>
                <p className="text-slate-400 text-lg leading-relaxed mb-10">
                  {service.description}
                </p>
                <button className="text-[12px] font-bold uppercase tracking-[0.3em] text-[#2dd4bf] opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 flex items-center gap-2">
                  Clinical Case Brief <span className="text-lg">→</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Clinician Section - Dedicated to Dr. Elizabeth Thorne */}
      <section className={`${THEME.spacing.sectionPadding} bg-[#0c0e12] border-y border-white/5`}>
        <div className={THEME.spacing.container}>
          <div className="flex flex-col lg:flex-row items-center gap-24">
            <div className="flex-1 opacity-0 animate-reveal">
               <div className="relative group">
                  <div className="absolute -inset-4 bg-[#2dd4bf]/10 rounded-[50px] blur-2xl group-hover:bg-[#2dd4bf]/20 transition-all duration-700"></div>
                  <img 
                    src={LEAD_DOCTOR.image} 
                    alt={LEAD_DOCTOR.name} 
                    className="relative w-full aspect-[4/5] object-cover rounded-[40px] border border-white/10 grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out shadow-2xl"
                  />
                  <div className="absolute bottom-8 left-8 right-8 glass-effect p-8 rounded-3xl border-white/10 group-hover:-translate-y-2 transition-transform duration-500">
                    <p className="text-[10px] text-[#2dd4bf] font-bold uppercase tracking-[0.5em] mb-2">Lead Clinician</p>
                    <p className="text-2xl font-bold text-white tracking-tight uppercase">{LEAD_DOCTOR.name}</p>
                  </div>
               </div>
            </div>
            <div className="flex-1 opacity-0 animate-reveal delay-200">
               <span className="text-[11px] text-[#2dd4bf] font-bold uppercase tracking-[0.6em] mb-8 block">Chief of Surgery</span>
               <h2 className="text-5xl md:text-7xl font-bold mb-10 tracking-tighter leading-none uppercase">A Legacy of <br/>Surgical Integrity.</h2>
               <p className="text-xl text-slate-400 mb-12 leading-relaxed font-light">
                 {LEAD_DOCTOR.bio}
               </p>
               <div className="space-y-6 mb-16">
                 {LEAD_DOCTOR.credentials.map((cred, idx) => (
                   <div key={idx} className="flex items-center gap-6 group">
                     <div className="w-1.5 h-1.5 rounded-full bg-[#2dd4bf]"></div>
                     <span className="text-sm font-bold text-slate-500 uppercase tracking-widest group-hover:text-white transition-colors">{cred}</span>
                   </div>
                 ))}
               </div>
               <Button variant="outline" size="lg" className="group">
                 View Clinical Curriculum <span className="ml-4 group-hover:translate-x-2 transition-transform">→</span>
               </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className={`${THEME.spacing.sectionPadding} bg-[#0e1116] relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-[0.03] grayscale pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover" 
            alt="Clinical Environment Backdrop"
          />
        </div>
        
        <div className={`${THEME.spacing.container} relative z-10`}>
          <div className="flex flex-col lg:flex-row items-center gap-32">
            <div className="flex-1 opacity-0 animate-reveal">
              <div className="relative group mx-auto lg:mx-0">
                <img 
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1200" 
                  className="w-full aspect-[4/5] object-cover rounded-[40px] shadow-3xl grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 ease-in-out border border-white/5" 
                  alt="Clinical Environment"
                />
                <div className="absolute -bottom-10 -right-10 p-12 glass-effect rounded-3xl border-white/10 hidden lg:block group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500">
                   <p className="text-[11px] font-bold text-[#2dd4bf] uppercase tracking-[0.4em] mb-2">Clinical Standard</p>
                   <p className="text-lg text-white font-bold uppercase tracking-widest">Facility ISO 9001</p>
                </div>
              </div>
            </div>
            <div className="flex-1 opacity-0 animate-reveal delay-200">
              <h2 className="text-5xl md:text-6xl font-bold mb-12 leading-tight tracking-tight uppercase">Clinical Excellence <br/>Through Science.</h2>
              <p className="text-2xl text-slate-400 mb-14 leading-relaxed font-light">
                Our approach integrates advanced diagnostics with minimally invasive techniques to preserve natural tissue and ensure lasting stability.
              </p>
              <div className="space-y-8">
                {[
                  'Advanced 3D radiographic diagnostics',
                  'Microscope-guided endodontics',
                  'Biologically neutral implant systems'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-8 group cursor-default">
                    <div className="w-14 h-14 rounded-2xl border border-slate-800 flex items-center justify-center group-hover:border-[#2dd4bf] group-hover:bg-[#2dd4bf]/5 transition-all duration-500">
                      <div className="w-2.5 h-2.5 bg-[#2dd4bf] rounded-full group-hover:scale-150 transition-transform"></div>
                    </div>
                    <span className="text-sm font-bold text-slate-400 group-hover:text-white transition-colors tracking-[0.2em] uppercase">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Medical Professionals / Reputation Section */}
      <section className={THEME.spacing.sectionPadding}>
        <div className={THEME.spacing.container}>
          <div className="text-center mb-24 opacity-0 animate-reveal">
            <h2 className="text-5xl font-bold mb-6 tracking-tight uppercase tracking-[0.05em]">Clinical Reputation</h2>
            <p className="text-slate-500 text-lg font-medium font-light">Trusted by leading medical specialists and discerning patients globally.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {TESTIMONIALS.map((testimonial, idx) => (
              <div key={testimonial.id} className={`bg-white/[0.01] border border-white/[0.04] p-16 rounded-[40px] hover-lift transition-all opacity-0 animate-reveal delay-${idx * 100} group`}>
                <div className="mb-10 text-6xl text-[#2dd4bf] opacity-10">“</div>
                <p className="text-3xl text-slate-300 mb-16 font-light leading-relaxed italic group-hover:text-white transition-colors">
                  {testimonial.content}
                </p>
                <div className="flex items-center gap-8">
                  <div className="w-24 h-24 relative flex-shrink-0">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="w-full h-full rounded-[35%] border border-white/10 grayscale group-hover:grayscale-0 transition-all duration-700 object-cover shadow-2xl" 
                    />
                  </div>
                  <div>
                    <div className="font-bold text-2xl text-white uppercase leading-[1.05] tracking-tight mb-2">
                      {testimonial.name.split(' ').map((part, i) => (
                        <React.Fragment key={i}>
                          {part}{' '}
                          {i === 1 && <br />}
                        </React.Fragment>
                      ))}
                    </div>
                    <p className="text-[10px] text-[#2dd4bf] font-bold tracking-[0.5em] uppercase mt-2 leading-relaxed opacity-90">
                      {testimonial.role.split(' ').map((part, i) => (
                        <span key={i} className="inline-block mr-2">{part}</span>
                      ))}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-32 bg-[#090b0e] border-t border-white/5">
        <div className={THEME.spacing.container}>
          <div className="flex flex-col lg:flex-row justify-between gap-32">
            <div className="max-w-lg">
              <div className="flex items-center space-x-6 mb-12 group cursor-pointer">
                 <LogoIcon />
                <span className="text-3xl font-bold tracking-tighter group-hover:text-[#2dd4bf] transition-colors uppercase">VERIDIAN</span>
              </div>
              <p className="text-slate-500 text-lg leading-relaxed mb-14 font-medium">
                Operating at the intersection of surgical excellence and patient care since 2012. Our facility is designed for specialized restorative dentistry and full oral rehabilitation.
              </p>
              <div className="flex space-x-12">
                {['TW', 'IG', 'LI'].map(social => (
                  <a key={social} href="#" className="text-[12px] font-bold text-slate-600 hover:text-[#2dd4bf] transition-colors tracking-[0.5em] uppercase">{social}</a>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-20 lg:gap-36">
              <div>
                <h5 className="text-[11px] uppercase tracking-[0.8em] font-bold text-white mb-16">Clinical Hub</h5>
                <ul className="space-y-8 text-[11px] font-bold uppercase tracking-[0.25em]">
                  <li className="text-slate-400 hover:text-white cursor-pointer transition-colors">Advanced Lab</li>
                  <li className="text-slate-400 hover:text-white cursor-pointer transition-colors">Digital Suites</li>
                  <li className="text-slate-400 hover:text-white cursor-pointer transition-colors">Patient Aftercare</li>
                </ul>
              </div>
              <div>
                <h5 className="text-[11px] uppercase tracking-[0.8em] font-bold text-white mb-16">Scheduling</h5>
                <ul className="space-y-8 text-[11px] font-bold uppercase tracking-[0.25em]">
                  <li className="text-slate-400">08:30 – 17:30</li>
                  <li className="text-slate-400 hover:text-white cursor-pointer transition-colors">Surgical Urgent</li>
                  <li className="text-slate-400 hover:text-white cursor-pointer transition-colors">Initial Intake</li>
                </ul>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <h5 className="text-[11px] uppercase tracking-[0.8em] font-bold text-white mb-16">Locality</h5>
                <ul className="space-y-8 text-[11px] font-bold uppercase tracking-[0.25em]">
                  <li className="text-slate-400 hover:text-white cursor-pointer transition-colors">+1 555 012 3456</li>
                  <li className="text-slate-400 hover:text-white cursor-pointer transition-colors">NY Central Annex 01</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-40 pt-16 border-t border-white/[0.03] text-center">
            <div className="text-[11px] uppercase tracking-[1em] text-slate-500 font-bold mb-3 leading-loose">
              Veridian Clinical Group · MMXXIV · Excellence
            </div>
            <div className="text-[11px] uppercase tracking-[1em] text-slate-500 font-bold">
              In Restorative Science
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
