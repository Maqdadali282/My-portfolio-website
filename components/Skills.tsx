'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { portfolioData } from '@/app/data'
import { useState } from 'react'

const CATEGORIES = ['All', 'Languages', 'Backend & APIs', 'Frontend', 'ML & AI', 'Data & Libraries', 'Cloud & DevOps', 'Tools']

function SkillBar({ skill, inView, delay }: { skill: typeof portfolioData.skills[0], inView: boolean, delay: number }) {
  const radius = 36
  const circumference = 2 * Math.PI * radius
  const dashOffset = circumference - (skill.level / 100) * circumference

  const colorMap: Record<string, string> = {
    'Languages': 'from-cyan-400 to-cyan-600',
    'Backend & APIs': 'from-violet-400 to-violet-600',
    'Frontend': 'from-pink-400 to-rose-600',
    'ML & AI': 'from-amber-400 to-orange-500',
    'Data & Libraries': 'from-emerald-400 to-teal-600',
    'Databases': 'from-blue-400 to-blue-600',
    'Cloud & DevOps': 'from-sky-400 to-indigo-600',
    'Tools': 'from-purple-400 to-fuchsia-600',
  }

  const strokeMap: Record<string, string> = {
    'Languages': '#22d3ee',
    'Backend & APIs': '#a78bfa',
    'Frontend': '#f472b6',
    'ML & AI': '#fbbf24',
    'Data & Libraries': '#34d399',
    'Databases': '#60a5fa',
    'Cloud & DevOps': '#38bdf8',
    'Tools': '#c084fc',
  }

  const strokeColor = strokeMap[skill.category] || '#00d4ff'
  const gradient = colorMap[skill.category] || 'from-cyan-400 to-violet-500'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="group flex items-center gap-4 bg-white/[0.03] hover:bg-white/[0.055] border border-white/[0.06] hover:border-white/10 rounded-2xl p-4 transition-all duration-300"
    >
      {/* Circular progress */}
      <div className="relative flex-shrink-0">
        <svg width="88" height="88" className="-rotate-90">
          {/* Track */}
          <circle cx="44" cy="44" r={radius} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="5" />
          {/* Progress */}
          <motion.circle
            cx="44"
            cy="44"
            r={radius}
            fill="none"
            stroke={strokeColor}
            strokeWidth="5"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={inView ? { strokeDashoffset: dashOffset } : { strokeDashoffset: circumference }}
            transition={{ duration: 1.2, delay: delay + 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{ filter: `drop-shadow(0 0 6px ${strokeColor}80)` }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-mono text-sm font-semibold" style={{ color: strokeColor }}>{skill.level}%</span>
        </div>
      </div>

      {/* Text info */}
      <div className="flex-1 min-w-0">
        <p className="font-body font-semibold text-white/85 text-sm mb-1 truncate">{skill.name}</p>
        <span className={`inline-block font-mono text-[10px] px-2 py-0.5 rounded-full bg-gradient-to-r ${gradient} bg-opacity-10 text-white/50 border border-white/5`}>
          {skill.category}
        </span>
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? portfolioData.skills
    : portfolioData.skills.filter(s => s.category === activeCategory)

  return (
    <section id="skills" className="py-32 relative overflow-hidden bg-[#070707]" ref={ref}>
      <div className="absolute inset-0 grid-bg opacity-15" />
      <div className="absolute bottom-0 left-0 w-1/2 h-3/4 bg-gradient-radial from-cyan-900/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="font-mono text-xs text-cyan-400/60 tracking-[0.3em] uppercase mb-3">02. Technical Skills</p>
          <h2 className="font-display text-5xl md:text-6xl font-bold">
            <span className="text-white/90">My</span>{' '}
            <span className="gradient-text">Arsenal</span>
          </h2>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-body text-xs px-4 py-2 rounded-full border transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-cyan-400/10 border-cyan-400/40 text-cyan-400'
                  : 'border-white/10 text-white/40 hover:text-white/70 hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {filtered.map((skill, i) => (
            <SkillBar key={skill.name} skill={skill} inView={inView} delay={i * 0.04} />
          ))}
        </div>
      </div>
    </section>
  )
}
