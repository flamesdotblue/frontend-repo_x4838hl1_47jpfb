import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { ArrowDown, Rocket, Send } from 'lucide-react';

const Hero = () => {
  // set initial title
  useEffect(() => {
    document.title = "Parv • Frontend Developer";
  }, []);

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.7, ease: 'easeOut' },
    }),
  };

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-[#0a0a0a] text-white">
      {/* Spline 3D background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient and vignette overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70" />
      <div className="pointer-events-none absolute inset-0" style={{
        background:
          'radial-gradient(60% 60% at 50% 40%, rgba(59,130,246,0.10) 0%, rgba(168,85,247,0.08) 35%, rgba(0,0,0,0) 70%)',
      }} />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center px-6 pt-28 pb-12 md:items-start md:pt-40">
        <motion.p
          className="mb-3 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-xs tracking-wider text-cyan-200 backdrop-blur"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          Futuristic Portfolio · Neon glow
        </motion.p>

        <motion.h1
          className="text-center font-bold leading-tight md:text-left text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
            Hi, I'm Parv
          </span>
          <br />
          <span className="text-white/90">— a Frontend Developer & IT Student</span>
        </motion.h1>

        <motion.p
          className="mt-5 max-w-2xl text-center text-white/70 md:text-left"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          custom={3}
        >
          I craft immersive, responsive web experiences with React, Three.js, and a love for smooth interactions.
        </motion.p>

        <motion.div
          className="mt-8 flex flex-wrap items-center gap-4"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          custom={4}
        >
          <button
            onClick={() => scrollToId('contact')}
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 font-semibold text-white shadow-[0_0_40px_rgba(34,211,238,0.3)] transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
          >
            <Rocket className="h-4 w-4 transition-transform group-hover:-rotate-12" />
            Hire Me
          </button>

          <button
            onClick={() => scrollToId('projects')}
            className="group inline-flex items-center gap-2 rounded-xl border border-purple-500/40 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur transition-colors hover:bg-purple-500/10 focus:outline-none focus:ring-2 focus:ring-purple-400/60"
          >
            <Send className="h-4 w-4" />
            View Work
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="mt-10 hidden items-center gap-2 text-sm text-white/60 md:flex"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
        >
          <span>Scroll</span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </motion.div>

        <div className="pointer-events-none absolute bottom-0 left-0 right-0 mx-auto h-24 w-[90%] rounded-t-[24px] border-t border-white/10 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
