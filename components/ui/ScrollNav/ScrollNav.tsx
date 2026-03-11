
import React, { useState, useEffect } from 'react';

export const ScrollNav: React.FC = () => {
  const [activeSection, setActiveSection] = useState('accueil');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['accueil', 'à-propos', 'parcours', 'projets', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    { id: 'accueil', label: 'Accueil' },
    { id: 'à-propos', label: 'À Propos' },
    { id: 'parcours', label: 'Parcours' },
    { id: 'projets', label: 'Projets' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div className="fixed left-8 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-6">
      {sections.map(section => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className="group flex items-center gap-4"
        >
          <div className={`h-px transition-all duration-500 ${
            activeSection === section.id ? 'w-12 bg-blue-600' : 'w-4 bg-slate-300 group-hover:w-8 group-hover:bg-slate-400'
          }`}></div>
          <span className={`text-[10px] font-black uppercase tracking-widest transition-all duration-500 ${
            activeSection === section.id ? 'text-blue-600 opacity-100 translate-x-0' : 'text-slate-400 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0'
          }`}>
            {section.label}
          </span>
        </a>
      ))}
    </div>
  );
};
