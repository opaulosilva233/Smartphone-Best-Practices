import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const spring = {
  type: 'spring',
  stiffness: 280,
  damping: 26,
}

const quickTopics = [
  { key: 'privacidade', label: 'Privacidade', iconClass: 'fa-solid fa-user-lock' },
  { key: 'vies', label: 'Viés', iconClass: 'fa-solid fa-filter' },
  { key: 'sustentabilidade', label: 'Sustentabilidade', iconClass: 'fa-solid fa-recycle' },
  { key: 'impacto', label: 'Impacto', iconClass: 'fa-solid fa-briefcase' },
]

const DynamicIsland = ({ className = '', onTopicSelect }) => {
  const [expanded, setExpanded] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    const closeOnOutsideClick = (event) => {
      if (!containerRef.current?.contains(event.target)) {
        setExpanded(false)
      }
    }

    document.addEventListener('mousedown', closeOnOutsideClick)
    document.addEventListener('touchstart', closeOnOutsideClick)

    return () => {
      document.removeEventListener('mousedown', closeOnOutsideClick)
      document.removeEventListener('touchstart', closeOnOutsideClick)
    }
  }, [])

  const width = expanded ? 292 : 210
  const height = expanded ? 168 : 54

  const handleQuickNav = (topic) => {
    const section = document.getElementById(topic)
    section?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    onTopicSelect?.(topic)
    setExpanded(false)
  }

  return (
    <motion.header ref={containerRef} className={`absolute left-1/2 top-5 z-50 -translate-x-1/2 ${className}`}>
      <motion.button
        type="button"
        onClick={() => setExpanded((prev) => !prev)}
        animate={{ width, height }}
        transition={spring}
        whileTap={{ scale: 0.96 }}
        className="relative flex flex-col items-center justify-start overflow-hidden rounded-[2rem] border border-white/15 bg-black/80 px-4 pb-3 pt-3 text-white shadow-[0_12px_35px_rgba(0,0,0,0.55)] backdrop-blur-xl"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/5 to-transparent" />

        <div className="relative flex items-center gap-3">
          <motion.span
            animate={{ scale: expanded ? 1 : 0.9 }}
            transition={spring}
            className="inline-block h-2.5 w-2.5 rounded-full bg-emerald-400"
          />
          <span className="text-sm font-semibold tracking-wide">Ética Mobile</span>
          <motion.span
            animate={{ width: expanded ? 28 : 14 }}
            transition={spring}
            className="inline-block h-2.5 rounded-full bg-white/35"
          />
        </div>

        <motion.div
          initial={false}
          animate={{ opacity: expanded ? 1 : 0, y: expanded ? 0 : -6, pointerEvents: expanded ? 'auto' : 'none' }}
          transition={{ duration: 0.2 }}
          className="relative mt-3 grid w-full grid-cols-2 gap-2"
        >
          {quickTopics.map((topic) => (
            <button
              key={topic.key}
              type="button"
              onClick={() => handleQuickNav(topic.key)}
              className="flex items-center justify-center gap-1.5 rounded-xl border border-white/15 bg-white/10 px-2 py-1.5 text-xs font-medium text-zinc-100 hover:bg-white/20"
            >
              <i className={`${topic.iconClass} text-[10px] text-cyan-200`} aria-hidden="true" />
              {topic.label}
            </button>
          ))}
        </motion.div>
      </motion.button>
    </motion.header>
  )
}

export default DynamicIsland
