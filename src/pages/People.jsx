import React from 'react';
import { Mail, GraduationCap, Globe, Users, ArrowRight } from 'lucide-react';
import teamData from '../data/team.json';

export default function People({ setActiveTab }) {
  const { pi, current, alumni } = teamData;

  const navigateTo = (tab) => {
    setActiveTab(tab);
    window.location.hash = tab;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="py-12 sm:py-16 space-y-16">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-semibold mb-4">
          <Users className="w-4 h-4 text-bio-teal" />
          <span>The Lab Community</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
          People & Alumni
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed">
          Meet the researchers, graduate students, and alumni driving our investigations into arthropod development and evolution.
        </p>
      </section>

      {/* PI Spotlight Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* PI Photo */}
            <div className="lg:col-span-4">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-md border border-slate-200">
                <img
                  src={pi.photo}
                  alt={pi.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="font-bold text-lg leading-tight">{pi.name}</p>
                  <p className="text-xs text-slate-200">{pi.role}</p>
                </div>
              </div>
            </div>

            {/* PI Bio & Info */}
            <div className="lg:col-span-8 space-y-5">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-600">
                  Principal Investigator
                </span>
                <h2 className="text-3xl font-bold text-slate-900 mt-1">
                  {pi.name}
                </h2>
                <p className="text-sm font-medium text-slate-500">
                  {pi.role} • {pi.degree}
                </p>
              </div>

              <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
                {pi.bio}
              </p>

              {/* Profiles & Contact */}
              <div className="pt-3 border-t border-slate-100 flex flex-wrap gap-4 items-center">
                <a
                  href={`mailto:${pi.email}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition"
                >
                  <Mail className="w-4 h-4 text-slate-500" />
                  <span>{pi.email}</span>
                </a>

                {pi.links.scholar && (
                  <a
                    href={pi.links.scholar}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-50 hover:bg-brand-100 text-brand-700 text-xs font-semibold transition"
                  >
                    <GraduationCap className="w-4 h-4 text-brand-600" />
                    <span>Google Scholar</span>
                  </a>
                )}

                {pi.links.orcid && (
                  <a
                    href={pi.links.orcid}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-teal-50 hover:bg-teal-100 text-teal-800 text-xs font-semibold transition"
                  >
                    <Globe className="w-4 h-4 text-bio-teal" />
                    <span>ORCID</span>
                  </a>
                )}

                {pi.links.researchgate && (
                  <a
                    href={pi.links.researchgate}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-50 hover:bg-cyan-100 text-cyan-800 text-xs font-semibold transition"
                  >
                    <Globe className="w-4 h-4 text-bio-cyan" />
                    <span>ResearchGate</span>
                  </a>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Current Lab Members Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <span className="text-xs uppercase tracking-wider text-bio-teal font-semibold">
            Active Researchers
          </span>
          <h2 className="text-3xl font-bold text-slate-900">
            Current Members
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {current.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden hover:shadow-md transition flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-slate-900/80 backdrop-blur-sm text-white text-xs font-medium px-2.5 py-1 rounded-full">
                      {member.role}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold text-slate-900">
                    {member.name}
                  </h3>
                  <p className="text-xs text-brand-600 font-semibold uppercase tracking-wider">
                    {member.role}
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {member.project}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                <a
                  href={`mailto:${member.email}`}
                  className="inline-flex items-center gap-1.5 text-slate-500 hover:text-brand-600 transition"
                  title={member.email}
                >
                  <Mail className="w-4 h-4" />
                  <span>Email</span>
                </a>

                <div className="flex items-center gap-3">
                  {member.links?.scholar && (
                    <a
                      href={member.links.scholar}
                      target="_blank"
                      rel="noreferrer"
                      className="text-slate-400 hover:text-brand-600 transition"
                      title="Google Scholar"
                    >
                      <GraduationCap className="w-4 h-4" />
                    </a>
                  )}
                  {member.links?.orcid && (
                    <a
                      href={member.links.orcid}
                      target="_blank"
                      rel="noreferrer"
                      className="text-slate-400 hover:text-bio-teal transition"
                      title="ORCID"
                    >
                      <Globe className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Alumni Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">
            Where Are They Now
          </span>
          <h2 className="text-3xl font-bold text-slate-900">
            Lab Alumni
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Former graduate students and postdoctoral researchers who have contributed to our scientific output.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden">
          <div className="divide-y divide-slate-100">
            {alumni.map((alum, idx) => (
              <div
                key={idx}
                className="p-5 sm:px-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50/60 transition"
              >
                <div>
                  <h3 className="font-bold text-slate-900 text-base">
                    {alum.name}
                  </h3>
                  <p className="text-xs text-brand-600 font-medium">
                    {alum.degree} • <span className="text-slate-600">{alum.pastProject}</span>
                  </p>
                </div>
                <div className="sm:text-right">
                  <span className="inline-block bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full">
                    {alum.currentPosition}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join the Lab CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-50 border border-brand-200 rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="text-2xl font-bold text-brand-950">
              Want to Join Our Research Group?
            </h3>
            <p className="text-sm text-brand-800">
              We welcome applications for M.Sc., Ph.D., and postdoctoral positions.
            </p>
          </div>
          <button
            onClick={() => navigateTo('contact')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold text-sm transition shrink-0 shadow-md shadow-brand-600/20"
          >
            <span>View Opportunities</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

    </div>
  );
}
