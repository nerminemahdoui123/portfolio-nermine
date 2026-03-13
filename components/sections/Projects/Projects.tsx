import React, { useState } from 'react';
import { ExternalLink, Layers } from 'lucide-react';
import { PROJECTS } from '../../../constants';

export const Projects: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [currentImage, setCurrentImage] = useState<Record<string, number>>({});

  const handleNextImage = (projectId: string, total: number) => {
    setCurrentImage(prev => ({
      ...prev,
      [projectId]: prev[projectId] === undefined ? 1 : (prev[projectId] + 1) % total
    }));
  };

  const handlePrevImage = (projectId: string, total: number) => {
    setCurrentImage(prev => ({
      ...prev,
      [projectId]: prev[projectId] === undefined ? total - 1 : (prev[projectId] - 1 + total) % total
    }));
  };

  return (
    <section id="projets" className="py-24 bg-white px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20 text-center md:text-left">
          <span className="text-blue-600 font-black tracking-widest uppercase text-xs">RÉALISATIONS</span>
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 mt-4 tracking-tighter">
            Mon Portfolio
          </h2>
          <p className="mt-4 text-slate-500 max-w-2xl leading-relaxed">
            Découvrez mes projets académiques et professionnels, illustrant mes compétences en développement web , ainsi que mes expériences en gestion de projets.
          </p>
        </div>

        {/* Grid des projets */}
        <div className="grid lg:grid-cols-2 gap-16">
          {PROJECTS.map(project => {
            const imgIndex = currentImage[project.id] || 0;
            const totalImages = project.images.length;

            return (
              <div
                key={project.id}
                className="group bg-slate-50 rounded-3xl p-6 border border-slate-100 hover:bg-white hover:shadow-xl transition-all duration-500"
              >
                {/* Galerie d'images */}
                <div className="flex overflow-x-auto gap-4 mb-6">
                  {project.images.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`${project.title} ${index + 1}`}
                      className="flex-shrink-0 w-[300px] h-[200px] object-contain rounded-2xl border border-slate-200 shadow-sm"
                      referrerPolicy="no-referrer"
                    />
                  ))}
                </div>

                {/* Catégorie */}
                <div className="mb-4">
                  <span className="px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-black rounded-full uppercase tracking-widest">
                    {project.category}
                  </span>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map(t => (
                    <span
                      key={t}
                      className="text-[10px] font-black text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-widest"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Titre */}
                <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-4 tracking-tight">
                  {project.title}
                </h3>

                {/* Description complète avec retours à la ligne */}
                <div className="relative mb-6 whitespace-pre-line text-slate-700 text-base leading-relaxed">
                  {expandedId === project.id
                    ? project.fullDescription
                    : project.description}
                  <button
                    onClick={() => setExpandedId(expandedId === project.id ? null : project.id)}
                    className="mt-2 block text-xs font-black text-blue-600 hover:underline uppercase tracking-widest"
                  >
                    {expandedId === project.id ? 'Voir moins' : 'Détails du projet'}
                  </button>
                </div>

                {/* Footer avec status et lien */}
                <div className="pt-4 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-slate-900 text-white rounded-xl flex items-center justify-center">
                      <Layers size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">
                        Status
                      </p>
                      <p className="text-sm font-bold text-slate-900">Code Complet</p>
                    </div>
                  </div>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-12 px-6 bg-blue-600 text-white rounded-2xl flex items-center justify-center gap-2 hover:bg-blue-700 transition-all shadow-md"
                    >
                      <span className="font-black text-sm uppercase tracking-widest">Voir</span>
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};