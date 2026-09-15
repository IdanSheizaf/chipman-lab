import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, GraduationCap, Compass, CheckCircle2 } from 'lucide-react';
import labInfo from '../data/labInfo.json';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    level: 'PhD',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Open default mail client with pre-filled message
    const subject = encodeURIComponent(`[Lab Inquiry] ${formData.level} - ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nInquiry Level: ${formData.level}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${labInfo.contactEmail}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div className="py-12 sm:py-16 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-semibold">
          <Compass className="w-4 h-4 text-bio-teal" />
          <span>Get in Touch</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Contact & Join Us
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed">
          Whether you have questions regarding our research, are interested in collaboration, or wish to join our lab as a graduate student or postdoc, we would love to hear from you.
        </p>
      </div>

      {/* Prospective Students & Postdocs Section */}
      <section className="bg-gradient-to-br from-brand-900 via-slate-900 to-brand-950 text-white rounded-3xl p-8 sm:p-12 shadow-lg space-y-8">
        <div>
          <span className="text-xs uppercase tracking-wider text-brand-300 font-semibold flex items-center gap-2 mb-2">
            <GraduationCap className="w-4 h-4 text-bio-teal" />
            <span>Opportunities for Prospective Researchers</span>
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold">
            Join The Evo Devo Lab
          </h2>
          <p className="text-slate-300 mt-2 text-base leading-relaxed max-w-3xl">
            We are always seeking enthusiastic, curious, and motivated researchers at all career stages to join our team at the Hebrew University of Jerusalem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          {/* MSc */}
          <div className="bg-slate-800/60 border border-slate-700/80 rounded-2xl p-6 space-y-3">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-400" />
              <span>M.Sc. Students</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Open to students registered in Life Sciences / Biology at HUJI. Rotations and thesis projects in insect embryology, gene expression, and bioimaging.
            </p>
          </div>

          {/* PhD */}
          <div className="bg-slate-800/60 border border-slate-700/80 rounded-2xl p-6 space-y-3">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-bio-teal" />
              <span>Ph.D. Candidates</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Applicants should have a relevant master's degree and a passion for evolutionary biology or developmental genetics. Full fellowship support provided.
            </p>
          </div>

          {/* Postdocs */}
          <div className="bg-slate-800/60 border border-slate-700/80 rounded-2xl p-6 space-y-3">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-bio-amber" />
              <span>Postdoctoral Fellows</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Researchers with experience in genomics, arthropod developmental biology, or evolutionary morphology. We actively assist in fellowship grant applications.
            </p>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            Please include your CV, academic transcripts, and a brief statement of research interests when contacting Prof. Chipman.
          </p>
          <a
            href={`mailto:${labInfo.contactEmail}?subject=Inquiry%20regarding%20position%20in%20Chipman%20Lab`}
            className="px-5 py-2.5 rounded-xl bg-brand-500 hover:bg-brand-400 text-white font-semibold transition shrink-0"
          >
            Email Prof. Chipman Directly
          </a>
        </div>
      </section>

      {/* 2-Column: Contact Details & Message Composer */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left: Contact Info & Campus Location */}
        <div className="lg:col-span-5 space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">
              Lab Details & Address
            </h2>
            <p className="text-sm text-slate-600">
              Our lab is located on the Edmond J. Safra Campus (Givat Ram) of the Hebrew University.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm">Physical Address</h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                  {labInfo.labLocation}<br />
                  {labInfo.department}<br />
                  {labInfo.institute}<br />
                  {labInfo.campus}<br />
                  {labInfo.city}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 border-t border-slate-100 pt-5">
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-bio-teal flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm">Email</h3>
                <a
                  href={`mailto:${labInfo.contactEmail}`}
                  className="text-xs sm:text-sm text-brand-600 hover:text-brand-800 transition font-medium block mt-1"
                >
                  {labInfo.contactEmail}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 border-t border-slate-100 pt-5">
              <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm">Telephone</h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  {labInfo.phone}
                </p>
              </div>
            </div>
          </div>

          {/* Transportation Tips */}
          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 text-xs text-slate-600 space-y-2">
            <h4 className="font-bold text-slate-800 text-sm">Visiting the Campus</h4>
            <p>
              The Edmond J. Safra campus is accessible via the Jerusalem Light Rail (Central Station / Yitzhak Navon stop) followed by buses 68, 66, or 14 to the campus main gate.
            </p>
          </div>
        </div>

        {/* Right: Interactive Inquiry Form */}
        <div className="lg:col-span-7">
          <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 shadow-sm space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Send an Inquiry
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                Fill out this quick form and it will open directly in your preferred email client addressed to Prof. Chipman.
              </p>
            </div>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                <h3 className="font-bold text-emerald-900 text-base">Inquiry Prepared</h3>
                <p className="text-xs text-emerald-700">
                  Your email client has been launched with your message. If it did not open automatically, you can email us directly at <span className="font-semibold">{labInfo.contactEmail}</span>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition"
                    placeholder="Dr. / Jane Doe"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition"
                    placeholder="jane@university.edu"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Purpose of Inquiry
                  </label>
                  <select
                    value={formData.level}
                    onChange={(e) => setFormData({ ...formData, level: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition"
                  >
                    <option value="PhD Candidate">Ph.D. Position Inquiry</option>
                    <option value="MSc Student">M.Sc. / Rotation Inquiry</option>
                    <option value="Postdoctoral Fellow">Postdoctoral Fellowship Inquiry</option>
                    <option value="Scientific Collaboration">Research Collaboration</option>
                    <option value="General Inquiry">General / Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Message / Background *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition"
                    placeholder="Tell us about your background, research interests, or specific questions..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold text-sm shadow-md shadow-brand-600/20 transition"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Inquiry via Email</span>
                </button>
              </form>
            )}
          </div>
        </div>

      </section>
    </div>
  );
}
