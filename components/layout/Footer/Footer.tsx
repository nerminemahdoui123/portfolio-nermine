
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../../../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="py-20 bg-white border-t border-slate-100 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-center md:text-left">
            <a href="#accueil" className="group flex items-center gap-2 justify-center md:justify-start mb-6">
              <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white font-black text-sm">
                N
              </div>
              <span className="font-black text-lg tracking-tighter text-slate-900">
                NERMINE.
              </span>
            </a>
            <p className="text-slate-400 text-sm max-w-xs leading-relaxed">
              Conception et développement d'interfaces modernes et performantes.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex gap-6">
              <a href={`https://github.com/${PERSONAL_INFO.github}`} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-slate-900 hover:text-white transition-all duration-300">
                <Github size={20} />
              </a>
              <a href={`https://linkedin.com/in/${PERSONAL_INFO.linkedin}`} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all duration-300">
                <Linkedin size={20} />
              </a>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-red-500 hover:text-white transition-all duration-300">
                <Mail size={20} />
              </a>
            </div>
            <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">
              © {new Date().getFullYear()} Nermine Mahdoui • Tous droits réservés
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
