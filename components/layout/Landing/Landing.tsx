
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface LandingProps {
  onEnter: () => void;
}

export const Landing: React.FC<LandingProps> = ({ onEnter }) => {
  return (
    <div className="fixed inset-0 z-[100] bg-slate-900 flex items-center justify-center p-6 overflow-hidden">
      {/* Cercles décoratifs en arrière-plan */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-600/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-4xl w-full text-center relative z-10 animate-in fade-in zoom-in duration-1000">
        <div className="inline-block px-4 py-1.5 mb-8 bg-blue-500/10 text-blue-400 rounded-full text-sm font-bold border border-blue-500/20 tracking-widest uppercase">
          Portfolio Professionnel
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter">
          Nermine <span className="text-blue-500">Mahdoui</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-400 mb-12 leading-relaxed max-w-2xl mx-auto font-light">
          Ingénieure en Informatique spécialisée dans le <span className="text-white font-medium">développement Web & Mobile</span>. 
         Vos projets, ma mission.
        </p>
        
        <button 
          onClick={onEnter}
          className="group relative inline-flex items-center gap-3 px-10 py-5 bg-blue-600 text-white font-bold rounded-2xl overflow-hidden transition-all hover:bg-blue-700 hover:scale-105 active:scale-95 shadow-2xl shadow-blue-500/25"
        >
          <span className="relative z-10">Découvrir mon univers</span>
          <ArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" size={20} />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
        </button>
      </div>
    </div>
  );
};
