'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { portfolioData } from '@/app/data'

export default function Experience() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="experience" className="py-32 relative overflow-hidden bg-[#070707]" ref={ref}>
      <div className="absolute inset-0 grid-bg opacity-15" />
      <div className="absolute right-0 top-1/4 w-1/2 h-1/2 bg-gradient-radial from-violet-900/8 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="font-mono text-xs text-cyan-400/60 tracking-[0.3em] uppercase mb-3">04. Career</p>
          <h2 className="font-display text-5xl md:text-6xl font-bold">
            <span className="text-white/90">Work</span>{' '}
            <span className="gradient-text-2">Experience</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/30 via-violet-500/30 to-transparent" />

          <div className="space-y-12 pl-8 md:pl-24">
            {portfolioData.experience.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative group"
              >
                {/* Timeline dot */}
                <div className="absolute -left-8 md:-left-24 top-6 flex items-center justify-center">
                  <div className={`w-4 h-4 rounded-full bg-gradient-to-br ${exp.gradient} shadow-lg`} />
                  <div className={`absolute w-8 h-8 rounded-full bg-gradient-to-br ${exp.gradient} opacity-20 blur-sm group-hover:opacity-40 transition-opacity`} />
                </div>

                <div className="bg-[#0d0d0d] border border-white/[0.07] hover:border-white/[0.12] rounded-3xl p-7 transition-all duration-300 card-hover">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                    <div>
                      <h3 className="font-display text-xl font-bold text-white mb-1">{exp.role}</h3>
                      <div className="flex items-center gap-2">
                        <span className={`font-body font-semibold text-transparent bg-gradient-to-r ${exp.gradient} bg-clip-text`}>
                          {exp.company}
                        </span>
                        <span className="text-white/20">·</span>
                        <span className="font-mono text-xs text-white/30">{exp.type}</span>
                      </div>
                    </div>
                    <span className="font-mono text-xs text-white/30 bg-white/5 border border-white/8 px-3 py-1.5 rounded-full whitespace-nowrap self-start">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-3">
                    {exp.points.map((point, pi) => (
                      <li key={pi} className="flex items-start gap-3">
                        <span className={`mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gradient-to-br ${exp.gradient}`} />
                        <p className="font-body text-white/50 text-sm leading-relaxed">{point}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
