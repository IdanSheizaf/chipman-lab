import React from 'react';
import { ArrowRight, Dna, Microscope, Sparkles, BookOpen, Users, Compass, ChevronRight } from 'lucide-react';
import labInfo from '../data/labInfo.json';
import researchData from '../data/research.json';
import publicationsData from '../data/publications.json';
import newsData from '../data/news.json';

export default function Home({ setActiveTab }) {
  const featuredPapers = publicationsData.filter(p => p.featured).slice(0, 3);
  const latestNews = newsData.slice(0, 3);

  const navigateTo = (tab) => {
    setActiveTab(tab);
    window.location.hash = tab;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-20 pb-16">
      {/* Hero Section */}
      <section className="relative hero-pattern text-white overflow-hidden py-24 sm:py-32 border-b border-slate-800">
        {/* Glow Accents */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-bio-teal/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-900/80 border border-brand-500/30 text-brand-300 text-xs sm:text-sm font-medium mb-6">
              <Dna className="w-4 h-4 text-bio-teal" />
              <span>Evolutionary Developmental Biology Lab</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6">
              Decoding the Evolution of <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-sky-200 to-bio-teal">Arthropod Body Plans</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-8">
              At the Hebrew University of Jerusalem, we combine comparative embryology, functional genetics, and genomics to understand how segmentation, head morphology, and diversity arose in nature's most successful animals.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 items-center">
              <button
                onClick={() => navigateTo('research')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold text-sm shadow-lg shadow-brand-600/30 hover:shadow-brand-500/40 transition-all hover:-translate-y-0.5"
              >
                <span>Explore Research</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => navigateTo('people')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700 font-semibold text-sm transition-all hover:-translate-y-0.5"
              >
                <span>Meet the Team</span>
                <Users className="w-4 h-4 text-slate-400" />
              </button>

              <button
                onClick={() => navigateTo('publications')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-transparent hover:bg-white/10 text-slate-300 hover:text-white font-semibold text-sm transition"
              >
                <span>Publications</span>
                <BookOpen className="w-4 h-4 text-slate-400" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Lab Overview Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-200/80 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 text-bio-teal font-semibold text-xs uppercase tracking-wider">
              <Microscope className="w-4 h-4" />
              <span>About Our Laboratory</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
              Bridging Embryology, Genetics & Macroevolution
            </h2>
            <p className="text-slate-650 leading-relaxed text-base sm:text-lg">
              {labInfo.overview}
            </p>
            <div className="pt-2 flex flex-wrap gap-6 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-brand-500" />
                <span className="font-medium">Model & Non-Model Systems</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-bio-teal" />
                <span className="font-medium">National Natural History Collections</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-bio-amber" />
                <span className="font-medium">Confocal Imaging & RNAi</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-brand-950 rounded-2xl p-8 text-white space-y-6 shadow-md">
            <div className="border-b border-slate-800 pb-4">
              <span className="text-xs uppercase tracking-wider text-brand-400 font-semibold block mb-1">
                Principal Investigator
              </span>
              <h3 className="text-2xl font-bold text-white">{labInfo.piName}</h3>
              <p className="text-xs text-slate-400 mt-1">{labInfo.piTitle}</p>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              Former Chair of the Department of Ecology, Evolution and Behavior at the Hebrew University, with ongoing research in panarthropod genomics, cephalization, and segmentation clocks.
            </p>
            <div className="pt-2">
              <button
                onClick={() => navigateTo('people')}
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-300 hover:text-white transition"
              >
                <span>Read Full Biography & Lab Members</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Research Pillars Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-brand-600 font-semibold text-xs uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4" />
              <span>Core Themes</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Key Research Pillars
            </h2>
          </div>
          <button
            onClick={() => navigateTo('research')}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700 transition self-start sm:self-auto"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {researchData.map((project) => (
            <div
              key={project.id}
              onClick={() => navigateTo('research')}
              className="group bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-md hover:border-brand-300 transition-all cursor-pointer flex flex-col justify-between"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-full font-medium">
                  {project.tag}
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-600 transition-colors mb-2 line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed">
                    {project.shortDescription}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-brand-600">
                  <span>Learn more</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Publications & News 2-Column Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Col: Selected Publications */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs uppercase tracking-wider text-brand-600 font-semibold">
                  Recent Discoveries
                </span>
                <h3 className="text-2xl font-bold text-slate-900">
                  Featured Publications
                </h3>
              </div>
              <button
                onClick={() => navigateTo('publications')}
                className="text-xs sm:text-sm font-semibold text-brand-600 hover:text-brand-700 transition"
              >
                All Papers ({publicationsData.length}) →
              </button>
            </div>

            <div className="space-y-4">
              {featuredPapers.map((paper) => (
                <div
                  key={paper.id}
                  className="bg-white p-5 rounded-2xl border border-slate-200/80 hover:border-slate-300 shadow-sm transition space-y-2.5"
                >
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <span className="font-semibold text-brand-700 bg-brand-50 px-2 py-0.5 rounded">
                      {paper.journal}
                    </span>
                    <span className="text-slate-400">•</span>
                    <span className="text-slate-500 font-medium">{paper.year}</span>
                    {paper.tags.slice(0, 2).map((tag, idx) => (
                      <span key={idx} className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded text-[11px]">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h4 className="font-bold text-slate-900 text-base leading-snug">
                    {paper.title}
                  </h4>
                  <p className="text-xs text-slate-600 italic">
                    {paper.authors}
                  </p>
                  <div className="pt-2 flex items-center gap-4 text-xs font-semibold">
                    <a
                      href={paper.doi}
                      target="_blank"
                      rel="noreferrer"
                      className="text-brand-600 hover:text-brand-800 transition underline underline-offset-2"
                    >
                      View via DOI / Journal
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Col: Latest News ("What's Happening") */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs uppercase tracking-wider text-bio-teal font-semibold">
                  Lab Updates
                </span>
                <h3 className="text-2xl font-bold text-slate-900">
                  What's Happening
                </h3>
              </div>
              <button
                onClick={() => navigateTo('news')}
                className="text-xs sm:text-sm font-semibold text-brand-600 hover:text-brand-700 transition"
              >
                More News →
              </button>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm space-y-6">
              {latestNews.map((item, idx) => (
                <div key={item.id} className={idx !== 0 ? "pt-5 border-t border-slate-100" : ""}>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-xs font-bold text-bio-teal bg-teal-50 px-2 py-0.5 rounded-full">
                      {item.category}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      {item.date}
                    </span>
                  </div>
                  <h4 className="text-base font-semibold text-slate-900 mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.summary}
                  </p>
                </div>
              ))}
            </div>

            {/* Opportunities Box */}
            <div className="bg-gradient-to-r from-brand-50 to-blue-50 border border-brand-200/70 rounded-2xl p-6 space-y-3">
              <h4 className="font-bold text-brand-900 text-base flex items-center gap-2">
                <Compass className="w-5 h-5 text-brand-600" />
                <span>Join Our Lab</span>
              </h4>
              <p className="text-xs sm:text-sm text-brand-800 leading-relaxed">
                We are always seeking motivated graduate students (M.Sc. / Ph.D.) and postdoctoral fellows passionate about Evo-Devo and arthropod biology.
              </p>
              <button
                onClick={() => navigateTo('contact')}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-700 hover:text-brand-900 transition underline underline-offset-2"
              >
                <span>Read application details & positions</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
