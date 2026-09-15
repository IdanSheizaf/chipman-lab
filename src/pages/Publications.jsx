import React, { useState, useMemo } from 'react';
import { Search, ExternalLink, BookOpen, Copy, Check, Filter, Calendar } from 'lucide-react';
import publicationsData from '../data/publications.json';

export default function Publications() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedYear, setSelectedYear] = useState('All');
  const [selectedTag, setSelectedTag] = useState('All');
  const [expandedAbstract, setExpandedAbstract] = useState(null);
  const [copiedId, setCopiedId] = useState(null);

  // Extract unique years and tags
  const years = useMemo(() => {
    const ySet = new Set(publicationsData.map(p => p.year.toString()));
    return ['All', ...Array.from(ySet).sort((a, b) => b - a)];
  }, []);

  const tags = useMemo(() => {
    const tSet = new Set();
    publicationsData.forEach(p => p.tags.forEach(t => tSet.add(t)));
    return ['All', ...Array.from(tSet).sort()];
  }, []);

  // Filtered publications
  const filteredPublications = useMemo(() => {
    return publicationsData.filter(pub => {
      const matchesSearch =
        pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pub.authors.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pub.journal.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pub.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesYear = selectedYear === 'All' || pub.year.toString() === selectedYear;
      const matchesTag = selectedTag === 'All' || pub.tags.includes(selectedTag);

      return matchesSearch && matchesYear && matchesTag;
    });
  }, [searchQuery, selectedYear, selectedTag]);

  const copyCitation = (pub) => {
    const citation = `${pub.authors} (${pub.year}). ${pub.title}. ${pub.journal}${pub.volume ? `, ${pub.volume}` : ''}${pub.pages ? `, ${pub.pages}` : ''}. ${pub.doi}`;
    navigator.clipboard.writeText(citation);
    setCopiedId(pub.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const toggleAbstract = (id) => {
    setExpandedAbstract(expandedAbstract === id ? null : id);
  };

  return (
    <div className="py-12 sm:py-16 space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-semibold">
          <BookOpen className="w-4 h-4 text-bio-teal" />
          <span>Peer-Reviewed Literature</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Publications
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed">
          Explore research articles, book chapters, and reviews from Prof. Ariel Chipman's laboratory.
        </p>
      </div>

      {/* Interactive Controls Bar */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-5">
        {/* Search Bar */}
        <div className="relative">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search by title, author, journal, or topic..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 font-medium"
            >
              Clear
            </button>
          )}
        </div>

        {/* Filters Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-2 border-t border-slate-100 text-xs">
          
          {/* Year Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-slate-400 font-semibold mr-1 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              Year:
            </span>
            {years.map((y) => (
              <button
                key={y}
                onClick={() => setSelectedYear(y)}
                className={`px-3 py-1 rounded-full font-medium transition ${
                  selectedYear === y
                    ? 'bg-brand-600 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {y}
              </button>
            ))}
          </div>

          {/* Topic Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-slate-400 font-semibold mr-1 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" />
              Topic:
            </span>
            {tags.slice(0, 6).map((t) => (
              <button
                key={t}
                onClick={() => setSelectedTag(t)}
                className={`px-3 py-1 rounded-full font-medium transition ${
                  selectedTag === t
                    ? 'bg-bio-teal text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {t}
              </button>
            ))}
          </div>

        </div>
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between text-sm text-slate-500 px-1">
        <span>
          Showing <strong className="text-slate-900">{filteredPublications.length}</strong> publication{filteredPublications.length !== 1 ? 's' : ''}
        </span>
        {(selectedYear !== 'All' || selectedTag !== 'All' || searchQuery) && (
          <button
            onClick={() => {
              setSelectedYear('All');
              setSelectedTag('All');
              setSearchQuery('');
            }}
            className="text-xs text-brand-600 hover:text-brand-800 font-semibold underline underline-offset-2"
          >
            Reset Filters
          </button>
        )}
      </div>

      {/* Publications List */}
      <div className="space-y-4">
        {filteredPublications.length === 0 ? (
          <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center space-y-3">
            <BookOpen className="w-12 h-12 text-slate-300 mx-auto" />
            <h3 className="text-lg font-bold text-slate-800">No matching publications found</h3>
            <p className="text-sm text-slate-500">
              Try adjusting your search terms or clearing the year and topic filters.
            </p>
          </div>
        ) : (
          filteredPublications.map((pub) => (
            <article
              key={pub.id}
              className="bg-white rounded-2xl border border-slate-200/90 hover:border-brand-300 shadow-sm p-6 sm:p-7 transition-all space-y-3.5"
            >
              {/* Meta pills */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-bold text-xs text-brand-700 bg-brand-50 px-2.5 py-0.5 rounded-md">
                  {pub.journal}
                </span>
                <span className="text-xs text-slate-400 font-semibold">•</span>
                <span className="text-xs font-semibold text-slate-600">
                  {pub.year}
                </span>
                {pub.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-slate-100 text-slate-600 text-[11px] font-medium px-2 py-0.5 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                {pub.title}
              </h2>

              {/* Authors */}
              <p className="text-sm text-slate-600 font-serif italic">
                {pub.authors}
              </p>

              {/* Details & Volume */}
              <p className="text-xs text-slate-400">
                {pub.journal} {pub.volume && `Vol. ${pub.volume}`} {pub.pages && `pp. ${pub.pages}`}
              </p>

              {/* Collapsible Abstract */}
              {pub.abstract && expandedAbstract === pub.id && (
                <div className="pt-2 text-xs sm:text-sm text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100 animate-in fade-in duration-150">
                  <strong className="block text-slate-800 mb-1">Abstract:</strong>
                  {pub.abstract}
                </div>
              )}

              {/* Action Buttons */}
              <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-4">
                  {pub.doi && (
                    <a
                      href={pub.doi}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-brand-600 hover:text-brand-800 font-semibold transition"
                    >
                      <span>View Article / DOI</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {pub.abstract && (
                    <button
                      onClick={() => toggleAbstract(pub.id)}
                      className="text-slate-500 hover:text-slate-800 font-medium transition"
                    >
                      {expandedAbstract === pub.id ? 'Hide Abstract' : 'Read Abstract'}
                    </button>
                  )}
                </div>

                <button
                  onClick={() => copyCitation(pub)}
                  className="inline-flex items-center gap-1 text-slate-500 hover:text-slate-800 transition"
                  title="Copy citation to clipboard"
                >
                  {copiedId === pub.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-600 font-semibold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Citation</span>
                    </>
                  )}
                </button>
              </div>
            </article>
          ))
        )}
      </div>
    </div>
  );
}
