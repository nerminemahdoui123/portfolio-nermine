import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../../../constants';

export const Hero: React.FC = () => {
  return (
    <header id="accueil" className="pt-48 pb-24 md:pt-64 md:pb-40 px-4 bg-gradient-to-b from-blue-50/40 to-white">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-6 py-2 mb-8 bg-blue-50 text-blue-600 rounded-full text-xs font-black uppercase tracking-widest border border-blue-100 shadow-sm animate-pulse">
          <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
          {PERSONAL_INFO.title}
        </div>
        
        <h1 className="text-5xl md:text-9xl font-black text-slate-900 mb-8 tracking-tighter leading-none">
          Nermine <span className="text-blue-600">Mahdoui</span>
        </h1>
        
        <p className="text-lg md:text-2xl text-slate-500 max-w-3xl mb-12 leading-relaxed font-medium">
          Spécialisée dans le développement de solutions efficaces avec <span className="text-slate-900 font-bold border-b-2 border-blue-200">React.js</span>. 
    
        </p>
        
        {/* Boutons principaux */}
        <div className="flex flex-wrap justify-center gap-5">
          <a href="#projets" className="px-10 py-5 bg-blue-600 text-white font-black rounded-2xl shadow-xl shadow-blue-200 hover:bg-blue-700 hover:scale-105 transition-all duration-300">
            VOIR MES PROJETS
          </a>
          <a href="#contact" className="px-10 py-5 bg-white text-slate-900 font-black rounded-2xl border border-slate-200 shadow-sm hover:bg-slate-50 hover:scale-105 transition-all duration-300">
            ME CONTACTER
          </a>
          {/* Nouveau bouton CV */}
          <a 
            href="/CV.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-10 py-5 bg-green-600 text-white font-black rounded-2xl shadow-lg hover:bg-green-700 hover:scale-105 transition-all duration-300 flex items-center gap-2"
          >
            Voir mon CV
          </a>
        </div>

        {/* Icônes réseaux */}
        <div className="mt-24 flex gap-8 grayscale opacity-50 hover:opacity-100 transition-all">
           <a href={`https://github.com/${PERSONAL_INFO.github}`} target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 hover:scale-125 transition-all"><Github size={32} /></a>
           <a href={`https://linkedin.com/in/${PERSONAL_INFO.linkedin}`} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 hover:scale-125 transition-all"><Linkedin size={32} /></a>
           <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-red-500 hover:scale-125 transition-all"><Mail size={32} /></a>
        </div>
      </div>
    </header>
  );
};