
import React from 'react';
import { PERSONAL_INFO, SKILLS } from '../../../constants';

export const About: React.FC = () => {
  return (
    <section id="à-propos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-blue-600 font-black tracking-widest uppercase text-sm">À PROPOS</span>
            <h2 className="text-4xl font-black text-slate-900 mt-4 mb-8 tracking-tight">Focus sur l'excellence technique.</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">{PERSONAL_INFO.summary}</p>
            <div className="flex gap-6 grayscale opacity-40">
              <span className="font-bold text-slate-900 text-xs tracking-widest uppercase">Clean Code</span>
              <span className="font-bold text-slate-900 text-xs tracking-widest uppercase">Agile</span>
              <span className="font-bold text-slate-900 text-xs tracking-widest uppercase">Architecture</span>
            </div>
          </div>
          <div className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100">
            <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-8">Compétences Clés</h4>
            <div className="flex flex-wrap gap-3">
              {SKILLS.map(skill => (
                <span 
                  key={skill.name} 
                  className="px-5 py-3 bg-white border border-slate-200 rounded-2xl text-sm font-bold text-slate-700 hover:border-blue-300 hover:text-blue-600 hover:shadow-lg hover:shadow-blue-100 transition-all cursor-default"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
