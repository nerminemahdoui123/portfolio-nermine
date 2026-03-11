
import React from 'react';
import { Mail, Send, Linkedin, Github } from 'lucide-react';
import { PERSONAL_INFO } from '../../../constants';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-slate-900 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">Prêt à collaborer ?</h2>
        <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto font-light">
          Je suis actuellement ouverte à de nouvelles opportunités. Envoyez-moi un message pour discuter de votre projet ou connectez-vous sur les réseaux.
        </p>

        <div className="bg-white/5 p-8 md:p-12 rounded-[3.5rem] border border-white/10 backdrop-blur-xl mb-12 shadow-2xl">
          <form className="grid gap-6 text-left" onSubmit={e => e.preventDefault()}>
            <div>
              <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-3 ml-1">Votre Email</label>
              <input type="email" required className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:border-blue-500 transition-all focus:bg-white/10" placeholder="votre@email.com" />
            </div>
            <div>
              <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-3 ml-1">Votre Message</label>
              <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:border-blue-500 transition-all resize-none focus:bg-white/10" placeholder="Comment puis-je vous aider ?"></textarea>
            </div>
            <button className="group w-full py-5 bg-blue-600 text-white font-black rounded-2xl flex items-center justify-center gap-3 hover:bg-blue-700 hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-blue-500/20">
              ENVOYER LE MESSAGE <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          <a href={`mailto:${PERSONAL_INFO.email}`} className="text-slate-400 hover:text-white transition-all flex items-center gap-3 font-bold text-sm uppercase tracking-widest">
            <Mail size={20} className="text-blue-500" /> Email
          </a>
          <a href={`https://linkedin.com/in/${PERSONAL_INFO.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-all flex items-center gap-3 font-bold text-sm uppercase tracking-widest">
            <Linkedin size={20} className="text-blue-500" /> LinkedIn
          </a>
          <a href={`https://github.com/${PERSONAL_INFO.github}`} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-all flex items-center gap-3 font-bold text-sm uppercase tracking-widest">
            <Github size={20} className="text-blue-500" /> GitHub
          </a>
        </div>
      </div>
    </section>
  );
};
