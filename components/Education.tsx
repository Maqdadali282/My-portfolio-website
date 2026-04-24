'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { portfolioData } from '@/app/data'

export default function Education() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="education" className="py-32 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="font-mono text-xs text-cyan-400/60 tracking-[0.3em] uppercase mb-3">05. Education</p>
          <h2 className="font-display text-5xl md:text-6xl font-bold">
            <span className="gradient-text">Academic</span>{' '}
            <span className="text-white/90">Background</span>
          </h2>
        </motion.div>

        {portfolioData.education.map((edu, i) => (
          <motion.div
            key={edu.degree}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative bg-[#0d0d0d] border border-white/[0.07] rounded-3xl p-8 md:p-10 overflow-hidden group card-hover max-w-3xl"
          >
            {/* Gradient accent */}
            <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${edu.gradient}`} />
            <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-radial from-cyan-400/8 to-transparent" />

            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-violet-500/20 border border-white/10 flex items-center justify-center text-2xl">
                    🎓
                  </div>
                  <div>
                    <span className={`font-mono text-xs font-medium text-transparent bg-gradient-to-r ${edu.gradient} bg-clip-text`}>
                      {edu.status}
                    </span>
                    <div className="font-mono text-xs text-white/30">{edu.period}</div>
                  </div>
                </div>
                <span className="font-mono text-xs text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-3 py-1.5 rounded-full self-start md:self-center">
                  In Progress
                </span>
              </div>

              <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">
                {edu.degree}
              </h3>
              <p className={`font-body text-lg font-medium text-transparent bg-gradient-to-r ${edu.gradient} bg-clip-text`}>
                {edu.institution}
              </p>

              {/* Progress indicator */}
              <div className="mt-6 pt-6 border-t border-white/5">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-body text-xs text-white/40">Degree Progress</span>
                  <span className="font-mono text-xs text-cyan-400">~90%</span>
                </div>
                <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${edu.gradient} rounded-full`}
                    initial={{ width: 0 }}
                    animate={inView ? { width: '90%' } : { width: 0 }}
                    transition={{ duration: 1.5, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Languages */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12"
        >
          <h3 className="font-body text-white/50 text-sm mb-4 font-medium uppercase tracking-widest">Languages Spoken</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { lang: 'Urdu', level: 'Native', color: 'from-emerald-400 to-teal-500' },
              { lang: 'Pashto', level: 'Native', color: 'from-cyan-400 to-blue-500' },
              { lang: 'English', level: 'Professional', color: 'from-violet-400 to-purple-500' },
            ].map((l) => (
              <div key={l.lang} className="flex items-center gap-2 bg-white/[0.03] border border-white/[0.07] rounded-full px-4 py-2">
                <span className={`font-display font-bold text-transparent bg-gradient-to-r ${l.color} bg-clip-text`}>{l.lang}</span>
                <span className="text-white/30 font-mono text-xs">· {l.level}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}