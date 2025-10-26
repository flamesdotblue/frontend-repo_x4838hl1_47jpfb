import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Joynate',
    desc: 'A platform for food & clothes donation connecting donors with NGOs and communities.',
    tech: ['React', 'Tailwind', 'Firebase'],
    image: 'https://images.unsplash.com/photo-1670672439982-bb8a0735cfc0?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxKb3luYXRlfGVufDB8MHx8fDE3NjE1MDk4Nzh8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    live: '#',
    github: '#',
  },
  {
    title: 'HelpHub (AI Chatbot)',
    desc: 'Hackathon project: an AI assistant that answers questions and provides quick resources.',
    tech: ['React', 'Vite', 'OpenAI'],
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1200&auto=format&fit=crop',
    live: '#',
    github: '#',
  },
  {
    title: 'Portfolio Engine',
    desc: 'A modular portfolio generator with dark neon theme and smooth animations.',
    tech: ['React', 'Framer Motion'],
    image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop',
    live: '#',
    github: '#',
  },
  {
    title: 'Realtime Dashboard',
    desc: 'Responsive dashboard with live charts and glassmorphism UI.',
    tech: ['React', 'Tailwind', 'Chart.js'],
    image: 'https://images.unsplash.com/photo-1758887698696-3d5221253391?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxSZWFsdGltZSUyMERhc2hib2FyZHxlbnwwfDB8fHwxNzYxNTA5ODgwfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    live: '#',
    github: '#',
  },
];

const ProjectCard = ({ p }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur"
    >
      <div className="relative h-48 w-full overflow-hidden rounded-xl">
        <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
      </div>

      <div className="mt-4 px-1">
        <h3 className="text-lg font-semibold text-white">{p.title}</h3>
        <p className="mt-1 text-sm text-white/70">{p.desc}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {p.tech.map((t) => (
            <span key={t} className="rounded-md border border-cyan-400/30 bg-cyan-500/10 px-2 py-1 text-xs text-cyan-100">
              {t}
            </span>
          ))}
        </div>
        <div className="mt-4 flex items-center gap-3">
          <a href={p.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-[0_0_20px_rgba(34,211,238,0.25)]">
            <ExternalLink className="h-4 w-4" /> Live Demo
          </a>
          <a href={p.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white hover:bg-white/10">
            <Github className="h-4 w-4" /> GitHub
          </a>
        </div>
      </div>

      <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-purple-500/20 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </motion.div>
  );
};

const Projects = () => {
  const rows = useMemo(() => {
    const mid = Math.ceil(projects.length / 2);
    return [projects.slice(0, mid), projects.slice(mid)];
  }, []);

  return (
    <section id="projects" className="relative w-full bg-[#0a0a0a] py-24 text-white">
      <div className="pointer-events-none absolute inset-0" style={{
        background:
          'radial-gradient(40% 40% at 80% 20%, rgba(59,130,246,0.10) 0%, rgba(0,0,0,0) 70%), radial-gradient(50% 50% at 0% 100%, rgba(168,85,247,0.10) 0%, rgba(0,0,0,0) 70%)',
      }} />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-bold sm:text-4xl"
        >
          Projects
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
