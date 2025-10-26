import React, { useEffect, useMemo } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import { Code2, Cpu, Sparkles } from 'lucide-react';

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Tailwind',
  'Node.js',
  'MongoDB',
  'Firebase',
  'Git',
  'Flutter',
];

const AboutCard = ({ title, description, icon: Icon }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6, ease: 'easeOut' }}
    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 text-white backdrop-blur hover:border-cyan-400/40"
  >
    <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl transition-opacity group-hover:opacity-100 opacity-0" />
    <div className="mb-3 inline-flex items-center justify-center rounded-xl bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 p-3">
      <Icon className="h-6 w-6 text-cyan-300" />
    </div>
    <h3 className="mb-2 text-lg font-semibold">{title}</h3>
    <p className="text-sm text-white/70">{description}</p>
  </motion.div>
);

const SkillsMarquee = () => {
  const controls = useAnimationControls();
  const doubled = useMemo(() => [...skills, ...skills], []);

  useEffect(() => {
    controls.start({
      x: [0, -140 * skills.length],
      transition: { repeat: Infinity, repeatType: 'loop', duration: 18, ease: 'linear' },
    });
  }, [controls]);

  return (
    <div
      className="relative mt-10 w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 py-5"
      onMouseEnter={() => controls.stop()}
      onMouseLeave={() =>
        controls.start({
          x: [0, -140 * skills.length],
          transition: { repeat: Infinity, repeatType: 'loop', duration: 18, ease: 'linear' },
        })
      }
    >
      <motion.div className="flex gap-4" animate={controls}>
        {doubled.map((s, idx) => (
          <div
            key={idx}
            className="shrink-0 rounded-xl border border-cyan-400/30 bg-gradient-to-b from-cyan-500/10 to-purple-500/10 px-5 py-2 text-sm text-cyan-100 shadow-[0_0_20px_rgba(34,211,238,0.15)]"
          >
            {s}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const AboutSkills = () => {
  return (
    <section id="about" className="relative w-full bg-[#0a0a0a] py-24 text-white">
      <div className="pointer-events-none absolute inset-0" style={{
        background:
          'radial-gradient(50% 50% at 20% 0%, rgba(34,211,238,0.10) 0%, rgba(0,0,0,0) 70%), radial-gradient(40% 40% at 100% 50%, rgba(168,85,247,0.10) 0%, rgba(0,0,0,0) 70%)',
      }} />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-bold sm:text-4xl"
        >
          About Me
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          <AboutCard
            title="Who I Am"
            description="I’m an IT student passionate about building responsive web apps, combining creativity with logic, and exploring React, Three.js, and digital innovation."
            icon={Sparkles}
          />
          <AboutCard
            title="Frontend Focus"
            description="I design and build modern interfaces with React and Tailwind, paying extra attention to motion, accessibility, and performance."
            icon={Code2}
          />
          <AboutCard
            title="Beyond the UI"
            description="I connect APIs, explore WebGL and 3D, and prototype interactions that feel alive and intuitive."
            icon={Cpu}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-14"
        >
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-2xl font-semibold">My Tech Stack ⚡</h3>
            <span className="text-xs text-white/50">Hover to pause</span>
          </div>
          <SkillsMarquee />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSkills;
