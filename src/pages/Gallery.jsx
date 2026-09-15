import React, { useState, useEffect } from 'react';
import { Camera, X, ZoomIn, Info } from 'lucide-react';
import galleryData from '../data/gallery.json';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveImage(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const categories = ['All', ...Array.from(new Set(galleryData.map(g => g.category)))];

  const filteredImages = selectedCategory === 'All'
    ? galleryData
    : galleryData.filter(g => g.category === selectedCategory);

  return (
    <div className="py-12 sm:py-16 space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-semibold">
          <Camera className="w-4 h-4 text-bio-teal" />
          <span>Imaging & Specimens</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Scientific Gallery
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed">
          High-resolution microscopy, fluorescent embryo immunostaining, scanning electron microscopy (SEM), and museum invertebrate specimens from our lab's projects.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition ${
              selectedCategory === cat
                ? 'bg-brand-600 text-white shadow-md shadow-brand-600/20'
                : 'bg-white text-slate-650 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredImages.map((item) => (
          <div
            key={item.id}
            onClick={() => setActiveImage(item)}
            className="group relative bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-slate-900/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="bg-white/90 text-slate-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                  <ZoomIn className="w-3.5 h-3.5" />
                  View Details
                </span>
              </div>
              <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-sm text-white text-[11px] font-semibold px-2.5 py-0.5 rounded-full">
                {item.category}
              </div>
            </div>

            <div className="p-5 flex-1 flex flex-col justify-between space-y-2">
              <h3 className="font-bold text-slate-900 text-base group-hover:text-brand-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="relative bg-slate-900 rounded-3xl overflow-hidden max-w-4xl w-full border border-slate-800 shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white transition focus:outline-none"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Main Image */}
            <div className="relative max-h-[70vh] bg-black flex items-center justify-center overflow-hidden">
              <img
                src={activeImage.imageUrl}
                alt={activeImage.title}
                className="max-h-[70vh] w-auto object-contain"
              />
            </div>

            {/* Caption & Metadata Footer */}
            <div className="p-6 bg-slate-900 text-white space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-bio-teal bg-teal-950/80 border border-teal-800 px-2.5 py-0.5 rounded-full">
                  {activeImage.category}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white">
                {activeImage.title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed flex items-start gap-2">
                <Info className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                <span>{activeImage.description}</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
