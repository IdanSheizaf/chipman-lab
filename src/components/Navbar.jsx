import React, { useState } from 'react';
import { Menu, X, Dna, ExternalLink } from 'lucide-react';
import labInfo from '../data/labInfo.json';

export default function Navbar({ activeTab, setActiveTab }) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'research', label: 'Research' },
    { id: 'people', label: 'People' },
    { id: 'publications', label: 'Publications' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'news', label: 'News' },
    { id: 'contact', label: 'Contact & Join' },
  ];

  const handleNavClick = (id) => {
    setActiveTab(id);
    window.location.hash = id;
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 glass-nav border-b border-slate-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Lab Title */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3.5 text-left group transition"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-brand-700 via-brand-600 to-bio-teal flex items-center justify-center text-white shadow-md shadow-brand-500/20 group-hover:scale-105 transition-transform">
              <Dna className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <span className="font-bold text-lg sm:text-xl text-slate-900 block tracking-tight group-hover:text-brand-600 transition-colors">
                {labInfo.labName}
              </span>
              <span className="text-xs text-slate-500 font-medium block">
                {labInfo.piName} • The Hebrew University
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeTab === item.id
                    ? 'bg-brand-50 text-brand-700 font-semibold shadow-sm'
                    : 'text-slate-650 hover:text-slate-900 hover:bg-slate-100/70'
                }`}
              >
                {item.label}
              </button>
            ))}
            
            {/* Direct University Link */}
            <a
              href={labInfo.links.departmentUrl}
              target="_blank"
              rel="noreferrer"
              className="ml-2 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 hover:text-slate-900 transition"
              title="Alexander Silberman Institute of Life Sciences"
            >
              <span>HUJI</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>
          </nav>

          {/* Mobile Hamburger Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Drawer */}
      {isOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white/95 backdrop-blur-md px-4 pt-3 pb-5 space-y-1 shadow-xl animate-in slide-in-from-top duration-200">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium transition ${
                activeTab === item.id
                  ? 'bg-brand-50 text-brand-700 font-semibold'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2 border-t border-slate-100">
            <a
              href={labInfo.links.departmentUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between px-4 py-2.5 text-sm text-slate-600 hover:text-slate-900"
            >
              <span>Hebrew University Faculty Page</span>
              <ExternalLink className="w-4 h-4 text-slate-400" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
