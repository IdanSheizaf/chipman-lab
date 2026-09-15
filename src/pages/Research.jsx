import React from 'react';
import { Microscope, HelpCircle, Bug, CheckCircle2, ArrowRight } from 'lucide-react';
import researchData from '../data/research.json';

export default function Research({ setActiveTab }) {
  const navigateTo = (tab) => {
    setActiveTab(tab);
    window.location.hash = tab;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="py-12 sm:py-16 space-y-16">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-semibold mb-4">
          <Microscope className="w-4 h-4 text-bio-teal" />
          <span>Scientific Inquiries</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
          Research Themes
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed">
          Our laboratory explores the developmental genetics and evolutionary history of the arthropod body plan. By studying both model organisms and phylogenetically informative non-model species, we reveal how molecular pathways drive morphological innovation.
        </p>
      </section>

      {/* Projects Deep-Dive List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {researchData.map((project, index) => {
          const isEven = index % 2 === 0;

          return (
            <article
              key={project.id}
              id={project.id}
              className="bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden p-6 sm:p-10 lg:p-12 scroll-mt-28"
            >
              <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                
                {/* Content Column */}
                <div className={`space-y-6 ${isEven ? 'lg:col-span-7' : 'lg:col-span-7 lg:order-2'}`}>
                  <div className="inline-block bg-brand-50 text-brand-700 font-semibold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
                    {project.tag}
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-snug">
                    {project.title}
                  </h2>

                  <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                    {project.fullDescription}
                  </p>

                  {/* Key Questions */}
                  <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 space-y-3">
                    <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-2">
                      <HelpCircle className="w-4 h-4 text-brand-600" />
                      <span>Key Questions We Address</span>
                    </h3>
                    <ul className="space-y-2 text-sm text-slate-600">
                      {project.keyQuestions.map((q, qIdx) => (
                        <li key={qIdx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-bio-teal shrink-0 mt-0.5" />
                          <span>{q}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Model Organisms */}
                  <div className="space-y-2">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                      <Bug className="w-4 h-4 text-slate-400" />
                      <span>Key Organisms & Taxa</span>
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {project.modelOrganisms.map((org, orgIdx) => (
                        <span
                          key={orgIdx}
                          className="bg-slate-100 text-slate-700 font-medium text-xs px-3 py-1 rounded-lg border border-slate-200/60 italic"
                        >
                          {org}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Image Column */}
                <div className={`${isEven ? 'lg:col-span-5' : 'lg:col-span-5 lg:order-1'}`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 aspect-[4/3] group">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-medium bg-slate-900/75 backdrop-blur-sm p-2.5 rounded-xl">
                      Focus area: {project.title}
                    </div>
                  </div>
                </div>

              </div>
            </article>
          );
        })}
      </section>

      {/* Cross-Link Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-brand-900 via-slate-900 to-brand-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl text-center md:text-left">
            <h3 className="text-2xl font-bold">Interested in Our Publications?</h3>
            <p className="text-sm text-slate-300">
              Browse peer-reviewed articles, books, and preprints stemming from these research projects.
            </p>
          </div>
          <button
            onClick={() => navigateTo('publications')}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-500 hover:bg-brand-400 text-white font-semibold text-sm transition shrink-0"
          >
            <span>Explore Publications</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
}
