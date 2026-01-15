
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-bold tracking-[0.05em] transition-all duration-500 ease-out active:scale-[0.96]";
  
  const variants = {
    primary: "bg-[#2dd4bf] text-[#0c0e12] hover:bg-[#5eead4] hover:shadow-[0_10px_30px_rgba(45,212,191,0.2)]",
    outline: "border border-slate-700 text-slate-200 hover:bg-slate-800 hover:border-slate-500 hover:text-white",
    ghost: "text-slate-400 hover:text-[#2dd4bf] transition-colors uppercase text-xs tracking-[0.2em]",
  };

  const sizes = {
    sm: "px-5 py-2.5 text-[10px] rounded-lg uppercase",
    md: "px-8 py-4 text-xs rounded-xl uppercase tracking-widest",
    lg: "px-12 py-5 text-sm rounded-2xl uppercase tracking-[0.2em]",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
