import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import Hero from './components/Hero';
import AboutSkills from './components/AboutSkills';
import Projects from './components/Projects';
import ExperienceContact from './components/ExperienceContact';

const ThemeToggle = ({ theme, setTheme }) => (
  <button
    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    className="fixed right-4 top-4 z-50 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-4 py-2 text-white backdrop-blur hover:border-cyan-400/40"
    aria-label="Toggle theme"
  >
    {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    <span className="hidden text-sm sm:inline">{theme === 'dark' ? 'Light' : 'Dark'} Mode</span>
  </button>
);

const Preloader = () => (
  <div className="fixed inset-0 z-50 grid place-items-center bg-[#0a0a0a]">
    <div className="relative h-24 w-24">
      <div className="absolute inset-0 animate-ping rounded-full bg-cyan-500/40" />
      <div className="absolute inset-3 animate-pulse rounded-full bg-purple-500/40" />
      <div className="absolute inset-6 rounded-full bg-gradient-to-tr from-cyan-400 to-purple-500" />
    </div>
    <p className="mt-6 text-sm text-white/60">Loading experience…</p>
  </div>
);

const App = () => {
  const [theme, setTheme] = useState('dark');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.style.backgroundColor = '#0a0a0a';
    } else {
      root.classList.remove('dark');
      root.style.backgroundColor = '#ffffff';
    }
  }, [theme]);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="font-inter selection:bg-cyan-500/30 selection:text-white">
      <ThemeToggle theme={theme} setTheme={setTheme} />
      <AnimatePresence>
        {loading && (
          <motion.div initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
            <Preloader />
          </motion.div>
        )}
      </AnimatePresence>

      <Hero />
      <AboutSkills />
      <Projects />
      <ExperienceContact />
    </div>
  );
};

export default App;
