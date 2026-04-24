'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { portfolioData } from '@/app/data'
import Image from 'next/image'

const stats = [
  { value: '2+', label: 'Years Experience' },
  { value: '10+', label: 'Projects Built' },
  { value: '3+', label: 'Tech Stacks' },
  { value: '∞', label: 'Learning Drive' },
]

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="about" className="py-32 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-radial from-violet-900/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="font-mono text-xs text-cyan-400/60 tracking-[0.3em] uppercase mb-3">01. About Me</p>
          <h2 className="font-display text-5xl md:text-6xl font-bold">
            <span className="gradient-text-2">Who I</span>{' '}
            <span className="text-white/90">Am</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <p className="font-body text-white/60 text-lg leading-relaxed mb-6">
              I'm a <span className="text-cyan-400 font-medium">Final-year AI student</span> at COMSATS University Islamabad, 
              with a proven track record of delivering production-ready systems — not just experiments.
            </p>
            <p className="font-body text-white/50 text-lg leading-relaxed mb-6">
              From training and deploying machine learning models to building end-to-end REST APIs 
              and full-stack applications, I work across the entire stack. I believe great AI is only 
              as good as the engineering that delivers it.
            </p>
            <p className="font-body text-white/50 text-lg leading-relaxed mb-10">
              Currently based in <span className="text-white/70">Islamabad, Pakistan</span>, I'm open to 
              remote opportunities and internships where I can make a tangible impact.
            </p>

            <div className="flex gap-4 flex-wrap">
              <a
                href="https://github.com/Maqdadali282"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-body text-sm text-white/50 hover:text-white border border-white/10 hover:border-white/25 px-4 py-2 rounded-full transition-all duration-300"
              >
                GitHub Profile →
              </a>
              <a
                href="https://linkedin.com/in/maqdad-ali-75241b293"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-body text-sm text-white/50 hover:text-white border border-white/10 hover:border-white/25 px-4 py-2 rounded-full transition-all duration-300"
              >
                LinkedIn →
              </a>
            </div>
          </motion.div>

          {/* Stats + Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="space-y-6"
          >
            {/* Profile Image */}
            <div className="relative w-48 h-48 mx-auto lg:mx-0 mb-8">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/30 to-violet-500/30 blur-xl" />
              <div className="relative w-48 h-48 rounded-full overflow-hidden border border-white/10">
                <Image
                  src="/profile.png"
                  alt="Maqdad Ali"
                  fill
                  className="object-cover object-top"
                  style={{ filter: 'grayscale(20%)' }}
                />
              </div>
              {/* floating badge */}
              <div className="absolute -bottom-6 -right-2 bg-emerald-400/20 border border-emerald-400/30 rounded-xl px-3 py-1.5 backdrop-blur-sm">
                <span className="font-mono text-xs text-emerald-400">Open to Work</span>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                  className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-5 card-hover"
                >
                  <div className="font-display text-3xl font-bold gradient-text mb-1">{stat.value}</div>
                  <div className="font-body text-sm text-white/40">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
