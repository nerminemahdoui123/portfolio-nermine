import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../../../constants';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '#accueil' },
    { name: 'À Propos', href: '#à-propos' },
    { name: 'Parcours', href: '#parcours' },
    { name: 'Projets', href: '#projets' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled ? 'bg-white/80 backdrop-blur-xl py-4 shadow-sm' : 'bg-transparent py-8'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#accueil" className="group flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-blue-200 group-hover:rotate-12 transition-transform">
            N
          </div>
          <span className="font-black text-xl tracking-tighter text-slate-900 group-hover:text-blue-600 transition-colors">
            NERMINE.
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors uppercase tracking-widest"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="h-6 w-px bg-slate-200"></div>
          <div className="flex gap-5">
            <a href={`https://github.com/${PERSONAL_INFO.github}`} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 transition-all hover:scale-110">
              <Github size={20} />
            </a>
            <a href={`https://linkedin.com/in/${PERSONAL_INFO.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-600 transition-all hover:scale-110">
              <Linkedin size={20} />
            </a>
            {/* Lien direct vers le PDF du CV */}
            <a href="/CV.pdf" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-green-600 transition-all hover:scale-110">
              <FileText size={20} />
            </a>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-slate-900" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 transition-all duration-500 md:hidden ${
        isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
      }`}>
        <button className="absolute top-8 right-8 text-slate-900" onClick={() => setIsOpen(false)}>
          <X size={32} />
        </button>
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="text-3xl font-black text-slate-900 hover:text-blue-600 transition-colors uppercase tracking-tighter"
          >
            {link.name}
          </a>
        ))}
        <div className="flex gap-8 mt-8">
          <a href={`https://github.com/${PERSONAL_INFO.github}`} target="_blank" rel="noopener noreferrer" className="text-slate-900">
            <Github size={32} />
          </a>
          <a href={`https://linkedin.com/in/${PERSONAL_INFO.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-blue-600">
            <Linkedin size={32} />
          </a>
          <a href={`mailto:${PERSONAL_INFO.email}`} className="text-red-500">
            <Mail size={32} />
          </a>
          {/* Lien direct vers le PDF du CV */}
          <a href="/CV.pdf" target="_blank" rel="noopener noreferrer" className="text-green-600">
            <FileText size={32} />
          </a>
        </div>
      </div>
    </nav>
  );
};