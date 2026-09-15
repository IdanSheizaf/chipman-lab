import React from 'react';
import { Mail, MapPin, Phone, GraduationCap, Globe, Heart } from 'lucide-react';
import labInfo from '../data/labInfo.json';

export default function Footer({ setActiveTab }) {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (id) => {
    setActiveTab(id);
    window.location.hash = id;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Lab Bio */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-bold tracking-tight">
              {labInfo.labName}
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Investigating the developmental and genetic mechanisms responsible for arthropod body plan evolution, segmentation, and head novelty.
            </p>
            <div className="text-xs text-slate-400">
              <span className="font-semibold text-slate-300">{labInfo.piName}</span>
              <br />
              {labInfo.department}
              <br />
              {labInfo.institution}
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleNavClick('research')}
                  className="hover:text-brand-400 transition"
                >
                  Research Themes
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('people')}
                  className="hover:text-brand-400 transition"
                >
                  People & Alumni
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('publications')}
                  className="hover:text-brand-400 transition"
                >
                  Publications
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('gallery')}
                  className="hover:text-brand-400 transition"
                >
                  Microscopy Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('news')}
                  className="hover:text-brand-400 transition"
                >
                  Latest News
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('contact')}
                  className="hover:text-brand-400 transition"
                >
                  Join the Lab
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Location */}
          <div className="space-y-4">
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider">
              Location & Contact
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-bio-teal shrink-0 mt-0.5" />
                <span>
                  {labInfo.labLocation}<br />
                  {labInfo.campus}<br />
                  {labInfo.city}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-bio-teal shrink-0" />
                <a
                  href={`mailto:${labInfo.contactEmail}`}
                  className="hover:text-brand-400 transition"
                >
                  {labInfo.contactEmail}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-bio-teal shrink-0" />
                <span>{labInfo.phone}</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Affiliations & Academic Profiles */}
          <div className="space-y-4">
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider">
              Affiliations & Profiles
            </h4>
            <div className="flex flex-col gap-2.5 text-sm">
              <a
                href={labInfo.links.googleScholar}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-white transition"
              >
                <GraduationCap className="w-4 h-4 text-brand-400" />
                <span>Google Scholar</span>
              </a>
              <a
                href={labInfo.links.orcid}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-white transition"
              >
                <Globe className="w-4 h-4 text-bio-teal" />
                <span>ORCID Profile</span>
              </a>
              <a
                href={labInfo.links.researchGate}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-white transition"
              >
                <Globe className="w-4 h-4 text-bio-cyan" />
                <span>ResearchGate</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>
            © {currentYear} {labInfo.labName} • Prof. Ariel Chipman • The Hebrew University of Jerusalem
          </p>
          <p className="flex items-center gap-1">
            Built with React & Tailwind for academic research
          </p>
        </div>
      </div>
    </footer>
  );
}
