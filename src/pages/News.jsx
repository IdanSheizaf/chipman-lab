import React from 'react';
import { Newspaper, Calendar, ExternalLink } from 'lucide-react';
import newsData from '../data/news.json';

export default function News() {
  return (
    <div className="py-12 sm:py-16 space-y-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold">
          <Newspaper className="w-4 h-4 text-bio-teal" />
          <span>Announcements & Milestones</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          What's Happening
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed">
          Stay updated with the latest news, grants, publications, and conference presentations from The Evo Devo Lab.
        </p>
      </div>

      {/* News Feed Timeline */}
      <div className="space-y-6">
        {newsData.map((item) => (
          <article
            key={item.id}
            className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm hover:border-slate-300 transition space-y-3"
          >
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-bold text-bio-teal bg-teal-50 px-2.5 py-1 rounded-full border border-teal-100">
                {item.category}
              </span>
              <span className="text-xs text-slate-400 font-medium flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {item.date}
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              {item.title}
            </h2>

            <p className="text-base text-slate-650 leading-relaxed">
              {item.summary}
            </p>

            {item.link && (
              <div className="pt-2">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-600 hover:text-brand-800 transition"
                >
                  <span>Read more / view resource</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
