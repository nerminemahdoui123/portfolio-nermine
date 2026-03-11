
import React from 'react';
import { EXPERIENCES, EDUCATION } from '../../../constants';
import { Briefcase, GraduationCap } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="parcours" className="py-24 bg-slate-50 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <span className="text-blue-600 font-black tracking-widest uppercase text-xs">PARCOURS</span>
          <h2 className="text-5xl font-black text-slate-900 mt-4 tracking-tighter">Expériences & Études</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Expériences */}
          <div className="space-y-8">
            <h3 className="flex items-center gap-3 text-xl font-black text-slate-900 mb-8 uppercase tracking-tight">
              <Briefcase className="text-blue-600" /> Professionnel
            </h3>
            {EXPERIENCES.map((exp, i) => (
              <div key={i} className="group p-8 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{exp.period}</span>
                <h4 className="text-2xl font-black text-slate-900 mt-2">{exp.role}</h4>
                <p className="text-blue-600 font-bold mb-6">{exp.company}</p>
                <ul className="space-y-3 mb-8">
                  {exp.description.map((d, j) => (
                    <li key={j} className="text-slate-500 text-sm flex gap-2">
                      <span className="text-blue-600">•</span> {d}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map(t => (
                    <span key={t} className="text-[10px] font-black bg-slate-50 text-slate-400 px-3 py-1.5 rounded-full uppercase tracking-widest">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Formation */}
          <div className="space-y-8">
            <h3 className="flex items-center gap-3 text-xl font-black text-slate-900 mb-8 uppercase tracking-tight">
              <GraduationCap className="text-blue-600" /> Académique
            </h3>
            {EDUCATION.map((edu, i) => (
              <div key={i} className="p-8 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{edu.period}</span>
                  <span className="text-[10px] font-black text-blue-500 bg-blue-50 px-2 py-1 rounded uppercase tracking-widest">{edu.location}</span>
                </div>
                <h4 className="text-2xl font-black text-slate-900 mt-2">{edu.institution}</h4>
                <p className="text-slate-700 font-bold text-lg">{edu.degree}</p>
                {edu.specialty && (
                  <p className="mt-4 px-4 py-2 bg-blue-50 text-blue-600 text-xs font-black inline-block rounded-full uppercase tracking-widest">
                    {edu.specialty}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
