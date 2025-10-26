import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Github, Linkedin, Instagram, Send, MessageCircle } from 'lucide-react';

const timeline = [
  {
    title: 'Internship at Zillionite',
    desc: 'Video editing & web work, collaborating with a dynamic team on digital content.',
    year: '2024',
  },
  {
    title: 'Built Joynate',
    desc: 'Food & clothes donation app connecting donors with communities and NGOs.',
    year: '2023',
  },
  {
    title: 'HelpHub – Hackathon AI chatbot',
    desc: 'Prototyped an AI assistant to answer questions and provide quick resources.',
    year: '2023',
  },
];

const Experience = () => (
  <section id="experience" className="relative w-full bg-[#0a0a0a] py-24 text-white">
    <div className="pointer-events-none absolute inset-0" style={{
      background:
        'radial-gradient(40% 40% at 10% 30%, rgba(34,211,238,0.10) 0%, rgba(0,0,0,0) 70%), radial-gradient(40% 40% at 90% 90%, rgba(168,85,247,0.10) 0%, rgba(0,0,0,0) 70%)',
    }} />
    <div className="relative z-10 mx-auto max-w-5xl px-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center text-3xl font-bold sm:text-4xl"
      >
        Experience & Achievements
      </motion.h2>

      <div className="mt-12 relative">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/50 via-white/10 to-purple-400/50 md:left-1/2" />
        <div className="space-y-10">
          {timeline.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className={`relative md:w-1/2 ${idx % 2 === 0 ? 'md:pr-12 md:ml-auto' : 'md:pl-12'}`}
              style={{
                paddingLeft: idx % 2 !== 0 ? undefined : undefined,
              }}
            >
              <div className={`hidden md:block absolute top-2 ${idx % 2 === 0 ? '-left-2' : '-right-2'} h-4 w-4 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.6)]`} />
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                <div className="mb-1 text-xs text-white/60">{item.year}</div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm text-white/70">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Contact = () => {
  const [status, setStatus] = useState({ loading: false, ok: null, msg: '' });

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = {
      service_id: 'your_service_id',
      template_id: 'your_template_id',
      user_id: 'your_public_key',
      template_params: {
        from_name: form.get('name'),
        reply_to: form.get('email'),
        message: form.get('message'),
      },
    };

    try {
      setStatus({ loading: true, ok: null, msg: '' });
      const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        setStatus({ loading: false, ok: true, msg: 'Message sent! I will get back to you soon.' });
        e.currentTarget.reset();
      } else {
        setStatus({ loading: false, ok: false, msg: 'Failed to send. Please try again later.' });
      }
    } catch (err) {
      setStatus({ loading: false, ok: false, msg: 'Network error. Please try again.' });
    }
  };

  return (
    <section id="contact" className="relative w-full bg-[#0a0a0a] py-24 text-white">
      <div className="pointer-events-none absolute inset-0" style={{
        background:
          'radial-gradient(50% 50% at 80% 0%, rgba(34,211,238,0.10) 0%, rgba(0,0,0,0) 70%), radial-gradient(40% 40% at 0% 60%, rgba(168,85,247,0.10) 0%, rgba(0,0,0,0) 70%)',
      }} />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-bold sm:text-4xl"
        >
          Get In Touch
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-5">
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-3 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm text-white/70">Name</label>
                <input name="name" required className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-white outline-none placeholder-white/40 focus:border-cyan-400/50" placeholder="Your name" />
              </div>
              <div>
                <label className="mb-1 block text-sm text-white/70">Email</label>
                <input type="email" name="email" required className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-white outline-none placeholder-white/40 focus:border-cyan-400/50" placeholder="you@email.com" />
              </div>
            </div>
            <div className="mt-4">
              <label className="mb-1 block text-sm text-white/70">Message</label>
              <textarea name="message" required rows={5} className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-white outline-none placeholder-white/40 focus:border-cyan-400/50" placeholder="Say hi and tell me about your project..." />
            </div>
            <button
              type="submit"
              disabled={status.loading}
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 font-semibold text-white shadow-[0_0_30px_rgba(34,211,238,0.25)] disabled:opacity-60"
            >
              <Send className="h-4 w-4" /> {status.loading ? 'Sending...' : 'Send Message'}
            </button>
            {status.msg && (
              <div className={`mt-3 text-sm ${status.ok ? 'text-cyan-200' : 'text-red-300'}`}>{status.msg}</div>
            )}
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-2 flex flex-col justify-between gap-6"
          >
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h3 className="mb-3 text-lg font-semibold">Connect</h3>
              <div className="flex flex-wrap gap-3">
                <a href="mailto:parv@example.com" className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm text-white hover:border-cyan-400/40"><Mail className="h-4 w-4" /> Email</a>
                <a href="tel:+123456789" className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm text-white hover:border-cyan-400/40"><Phone className="h-4 w-4" /> Call</a>
                <a href="https://wa.me/123456789" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm text-white hover:border-cyan-400/40"><MessageCircle className="h-4 w-4" /> WhatsApp</a>
              </div>
              <div className="mt-4 flex items-center gap-4">
                <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="text-white/80 hover:text-cyan-300"><Linkedin /></a>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="text-white/80 hover:text-cyan-300"><Github /></a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-white/80 hover:text-cyan-300"><Instagram /></a>
              </div>
            </div>

            <footer className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center text-white/70 backdrop-blur">
              <div className="mx-auto mb-4 h-px w-24 bg-gradient-to-r from-cyan-400/60 via-white/20 to-purple-400/60" />
              <p>Built with ❤️ by Parv using React & Tailwind CSS.</p>
            </footer>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ExperienceContact = () => (
  <>
    <Experience />
    <Contact />
  </>
);

export default ExperienceContact;
