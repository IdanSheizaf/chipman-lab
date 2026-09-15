import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Research from './pages/Research';
import People from './pages/People';
import Publications from './pages/Publications';
import Gallery from './pages/Gallery';
import News from './pages/News';
import Contact from './pages/Contact';

export default function App() {
  // Read initial tab from URL hash if present
  const getInitialTab = () => {
    const hash = window.location.hash.replace('#', '').toLowerCase();
    const validTabs = ['home', 'research', 'people', 'publications', 'gallery', 'news', 'contact'];
    if (validTabs.includes(hash)) return hash;
    // Map previous Wix URL aliases if someone clicks legacy links
    if (hash === 'group' || hash === 'members') return 'people';
    if (hash.startsWith('publications')) return 'publications';
    if (hash.startsWith('what-s-happening')) return 'news';
    if (hash.startsWith('contact')) return 'contact';
    return 'home';
  };

  const [activeTab, setActiveTab] = useState(getInitialTab);

  // Sync hash changes (e.g. browser back/forward buttons)
  useEffect(() => {
    const handleHashChange = () => {
      setActiveTab(getInitialTab());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case 'research':
        return <Research setActiveTab={setActiveTab} />;
      case 'people':
        return <People setActiveTab={setActiveTab} />;
      case 'publications':
        return <Publications />;
      case 'gallery':
        return <Gallery />;
      case 'news':
        return <News />;
      case 'contact':
        return <Contact />;
      case 'home':
      default:
        return <Home setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-1">
        {renderContent()}
      </main>
      <Footer setActiveTab={setActiveTab} />
    </div>
  );
}
