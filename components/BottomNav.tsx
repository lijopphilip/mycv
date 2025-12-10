
import React from 'react';
import { HomeIcon, BriefcaseIcon, GraduationCapIcon, CodeIcon, MailIcon } from './IconComponents';

interface BottomNavProps {
  currentView: string;
  onViewChange: (view: 'home' | 'experience' | 'academic' | 'developed' | 'contact') => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ currentView, onViewChange }) => {
  const navItems = [
    { id: 'home', icon: <HomeIcon />, label: 'Home' },
    { id: 'experience', icon: <BriefcaseIcon />, label: 'Experience' },
    { id: 'academic', icon: <GraduationCapIcon />, label: 'Academic' },
    { id: 'developed', icon: <CodeIcon />, label: 'Developed' },
    { id: 'contact', icon: <MailIcon />, label: 'Contact' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-neutral-950 border-t border-neutral-900 z-50 pb-safe">
      <div className="flex justify-around items-center h-16 max-w-lg mx-auto">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onViewChange(item.id as 'home' | 'experience' | 'academic' | 'developed' | 'contact')}
            className={`flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors duration-300 ${
              currentView === item.id ? 'text-white' : 'text-neutral-600 hover:text-neutral-400'
            }`}
          >
            <div className="transform scale-90">
             {item.icon}
            </div>
            <span className="text-[10px] font-medium tracking-wide">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
