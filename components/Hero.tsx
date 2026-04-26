'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { portfolioData } from '@/app/data'

export default function Hero() {
  const roles = [
    "AI Engineer",
    "Full Stack Developer",
    "Machine Learning Engineer",
    "Next.js Developer",
    "Backend Developer"
  ]

  const [text, setText] = useState('')
  const [index, setIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = roles[index]
    let speed = isDeleting ? 50 : 100

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(current.substring(0, text.length + 1))
      } else {
        setText(current.substring(0, text.length - 1))
      }

      // when typing complete
      if (!isDeleting && text === current) {
        setTimeout(() => setIsDeleting(true), 1200)
      }

      // when deleting complete
      if (isDeleting && text === '') {
        setIsDeleting(false)
        setIndex((prev) => (prev + 1) % roles.length)
      }
    }, speed)

    return () => clearTimeout(timeout)
  }, [text, isDeleting, index])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/profile.png')" }}
      />
      <div className="absolute inset-0 backdrop-blur-sm" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/80 via-[#050505]/70 to-[#050505]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/60 via-transparent to-[#050505]/60" />
      <div className="absolute inset-0 grid-bg opacity-30" />

      {/* Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-8"
        >
          <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
          <span className="font-mono text-xs text-white/60 tracking-widest uppercase">
            Available for opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-6xl md:text-7xl lg:text-8xl font-bold mb-4 leading-none tracking-tight"
        >
          <span className="gradient-text">Maqdad</span>
          <br />
          <span className="text-white/90">Ali</span>
        </motion.h1>

        {/* Typing Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mb-6"
        >
          <span className="font-mono text-lg md:text-xl text-cyan-400/80 tracking-wide">
            {text}
            <span className="animate-pulse">|</span>
          </span>
        </motion.div>

        {/* Summary */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="font-body text-white/50 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Building intelligent systems that bridge the gap between research and production.
          ML pipelines, scalable APIs, and full-stack applications — crafted with precision.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <motion.a
            href="#projects"
            className="btn-primary font-body font-semibold px-7 py-3.5 rounded-full text-white text-sm tracking-wide"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
          </motion.a>

          <motion.a
            href="/Maqdad_Ali_CV.v.pdf"
            download
            className="font-body font-medium px-7 py-3.5 rounded-full text-white text-sm border border-white/15 bg-white/5 hover:bg-white/10 hover:border-white/25 transition-all duration-300 tracking-wide"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download CV
          </motion.a>

          <motion.a
            href="#contact"
            className="font-body font-medium px-7 py-3.5 rounded-full text-white/60 text-sm hover:text-white transition-colors duration-300 tracking-wide"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me →
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-px h-16 bg-gradient-to-b from-white/20 to-transparent mx-auto"
          />
        </motion.div>

      </div>
    </section>
  )
}