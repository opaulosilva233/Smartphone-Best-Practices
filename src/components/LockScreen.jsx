import { motion } from 'framer-motion'

const lockScreenVariants = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -60 },
}

const unlockHintAnimation = {
  opacity: [0.5, 1, 0.5],
  y: [0, -4, 0],
}

const LockScreen = ({ onUnlock }) => {
  const formattedDate = new Intl.DateTimeFormat('pt-PT', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  }).format(new Date())

  const capitalizedDate = `${formattedDate.charAt(0).toUpperCase()}${formattedDate.slice(1)}`

  return (
    <motion.div
      variants={lockScreenVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="relative flex h-full flex-col items-center justify-between overflow-hidden rounded-[2.2rem] bg-gradient-to-b from-slate-950 via-sky-900/60 to-cyan-600/40 px-6 pb-14 pt-24"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.28),transparent_45%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.18),transparent_45%)]" />
        <div className="absolute -top-12 left-8 h-44 w-44 rounded-full bg-cyan-300/15 blur-3xl" />
        <div className="absolute bottom-10 right-6 h-52 w-52 rounded-full bg-sky-100/15 blur-3xl" />
        <div className="absolute inset-0 backdrop-blur-[2px]" />
      </div>

      <div className="relative text-center text-white">
        <p className="text-sm font-medium tracking-[0.14em] text-white/80">{capitalizedDate}</p>
        <h1 className="mt-2 text-7xl font-black leading-none">09:41</h1>
      </div>

      <motion.button
        type="button"
        onClick={onUnlock}
        whileTap={{ scale: 0.98 }}
        className="relative rounded-2xl border border-white/35 bg-white/10 px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white backdrop-blur-xl"
      >
        <motion.span
          animate={unlockHintAnimation}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="inline-flex items-center gap-2"
        >
          <i className="fa-solid fa-lock-open text-xs" aria-hidden="true" />
          Clica para desbloquear
        </motion.span>
      </motion.button>
    </motion.div>
  )
}

export default LockScreen
