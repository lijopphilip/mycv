
import React from 'react';

interface HeaderProps {
  title?: string;
  subtitle?: string;
}

export const Header: React.FC<HeaderProps> = ({ 
  title = "Lijo Philip's Professional Journey", 
  subtitle = "A timeline of experiences, projects, and key learnings." 
}) => {
  return (
    <header className="bg-slate-900/50 backdrop-blur-sm sticky top-0 z-10 py-4 border-b border-slate-800">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-2xl font-bold text-white tracking-tight">
          {title}
        </h1>
        <p className="text-sm text-slate-400 mt-1">
          {subtitle}
        </p>
      </div>
    </header>
  );
};
