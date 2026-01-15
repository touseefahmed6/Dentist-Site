
import React from 'react';

// Refined LogoIcon: Minimalist 'V' mark suggesting clinical precision and surgical integrity
export const LogoIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-all duration-500 group-hover:scale-110">
    <path 
      d="M10 8L20 32L30 8" 
      stroke="#2dd4bf" 
      strokeWidth="3.5" 
      strokeLinecap="square" 
    />
    <path 
      d="M16 14L20 24L24 14" 
      stroke="#2dd4bf" 
      strokeWidth="1.5" 
      strokeLinecap="square"
      opacity="0.5"
    />
    <circle cx="20" cy="32" r="2" fill="#2dd4bf" />
  </svg>
);

export const THEME = {
  colors: {
    background: '#0c0e12',
    surface: '#171a21',
    primary: '#2dd4bf', 
    secondary: '#94a3b8',
    text: '#f8fafc',
    textMuted: '#64748b',
  },
  spacing: {
    container: 'max-w-[1440px] mx-auto px-6 md:px-16',
    sectionPadding: 'py-20 md:py-28', 
  }
};

export const SERVICES = [
  {
    id: '1',
    title: 'Diagnostic Precision',
    description: 'Advanced digital imaging and thorough clinical assessments for accurate treatment planning.',
    icon: '🔍',
  },
  {
    id: '2',
    title: 'Restorative Care',
    description: 'High-integrity dental restorations focused on long-term structural health and function.',
    icon: '🛡️',
  },
  {
    id: '3',
    title: 'Periodontal Health',
    description: 'Specialized maintenance and therapy protocols to ensure stable supporting tissue.',
    icon: '🌱',
  },
  {
    id: '4',
    title: 'Oral Surgery',
    description: 'Complex extractions and implant placements performed with clinical excellence.',
    icon: '🏥',
  }
];

export const LEAD_DOCTOR = {
  name: 'Dr. Elizabeth Thorne',
  role: 'Chief Clinical Surgeon',
  bio: 'With over 15 years of experience in complex oral rehabilitation, Dr. Thorne leads our surgical department with a focus on biological integrity and minimally invasive techniques.',
  image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=1000',
  credentials: [
    'Board Certified Oral Surgeon',
    'Member of the International Congress of Oral Implantologists',
    'Specialist in Full Mouth Rehabilitation'
  ]
};

export const TESTIMONIALS = [
  {
    id: '1',
    name: 'Dr. Elizabeth Thorne',
    role: 'Medical Professional',
    content: 'The clinical standards at Veridian are exceptional. Their commitment to evidence-based practice is evident in every procedure.',
    avatar: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=300&h=300',
  },
  {
    id: '2',
    name: 'Robert Sterling',
    role: 'Executive Director',
    content: 'A professional and highly efficient environment. The team prioritizes patient communication and clinical outcomes above all else.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300&h=300',
  }
];

export const CLINICAL_STATS = [
  { label: 'Clinical Accuracy', value: '99.8%' },
  { label: 'Patient Retention', value: '96%' },
  { label: 'Specialist Network', value: '15+' },
];
