import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { useState } from 'react'

const spring = {
  type: 'spring',
  stiffness: 280,
  damping: 26,
}

const DynamicIsland = () => {
  const [expanded, setExpanded] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 24)
  })

  const width = expanded ? 260 : scrolled ? 170 : 210
  const height = expanded ? 68 : scrolled ? 46 : 54

  return (
    <motion.header className="fixed left-1/2 top-5 z-50 -translate-x-1/2">
      <motion.button
        type="button"
        onClick={() => setExpanded((prev) => !prev)}
        animate={{ width, height }}
        transition={spring}
        whileTap={{ scale: 0.96 }}
        className="relative flex items-center justify-center overflow-hidden rounded-full border border-white/15 bg-black/70 px-5 text-white shadow-[0_12px_35px_rgba(0,0,0,0.55)] backdrop-blur-xl"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/5 to-transparent" />

        <motion.div
          animate={{ opacity: expanded ? 1 : 0.92 }}
          transition={spring}
          className="relative flex items-center gap-3"
        >
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
        </motion.div>
      </motion.button>
    </motion.header>
  )
}

export default DynamicIsland
