
import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { FrameworkPage } from './pages/FrameworkPage';
import { BlogPage } from './pages/BlogPage';
import { ContactPage } from './pages/ContactPage';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/framework" element={<FrameworkPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* Add a 404 Not Found Page if desired */}
            <Route path="*" element={<HomePage />} /> {/* Default to HomePage for unkown routes */}
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
