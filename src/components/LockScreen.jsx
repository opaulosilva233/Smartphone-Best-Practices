import { motion } from 'framer-motion'

const lockScreenVariants = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -60 },
}

const spring = {
  type: 'spring',
  stiffness: 260,
  damping: 24,
}

const notifications = [
  {
    key: 'screen-time',
    icon: 'fa-solid fa-hourglass-half',
    iconClassName: 'bg-amber-300/20 text-amber-100',
    title: 'Tempo de Ecrã',
    text: 'A sua média subiu para 3h 46min hoje.',
  },
  {
    key: 'whatsapp',
    icon: 'fa-brands fa-whatsapp',
    iconClassName: 'bg-emerald-400/20 text-emerald-200',
    title: 'Grupo de Trabalho',
    text: '5 novas mensagens. Precisamos disto para amanhã!',
  },
]

const LockScreen = ({ currentTime, currentDate, onUnlock }) => {
  const handleDragEnd = (_, info) => {
    if (info.offset.y < -100) {
      onUnlock?.()
    }
  }

  return (
    <motion.div
      variants={lockScreenVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="absolute inset-0 w-full h-full flex flex-col justify-between pt-20 pb-8 px-4 z-10"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-teal-900/40 to-slate-900 -z-10" />

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.28),transparent_45%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.18),transparent_45%)]" />
        <div className="absolute -top-12 left-8 h-44 w-44 rounded-full bg-cyan-300/15 blur-3xl" />
        <div className="absolute bottom-10 right-6 h-52 w-52 rounded-full bg-sky-100/15 blur-3xl" />
        <div className="absolute inset-0 backdrop-blur-[2px]" />
      </div>

      <div className="relative text-center text-white">
        <p className="text-sm font-medium tracking-[0.14em] text-white/80">{currentDate}</p>
        <h1 className="mt-2 text-7xl font-black leading-none">{currentTime}</h1>
      </div>

      <div className="relative w-full max-w-xs my-auto space-y-3 pb-2 text-center text-white">
        {notifications.map((notification, index) => (
          <motion.div
            key={notification.key}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.12 + index * 0.07 }}
            className="backdrop-blur-xl rounded-2xl bg-white/10 p-4 text-left shadow-lg ring-1 ring-white/10"
          >
            <div className="flex items-start gap-3">
              <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${notification.iconClassName}`}>
                <i className={`${notification.icon} text-base`} aria-hidden="true" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-white">{notification.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-white/80">{notification.text}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        drag="y"
        dragConstraints={{ top: 0, bottom: 0 }}
        dragElastic={0.16}
        dragMomentum={false}
        onDragEnd={handleDragEnd}
        whileTap={{ scale: 0.99 }}
        transition={spring}
        style={{ touchAction: 'none' }}
        className="relative flex w-full max-w-xs flex-col items-center gap-3 rounded-3xl px-4 py-3 text-white"
      >
        <div className="h-1.5 w-1/3 rounded-full bg-white/50 shadow-[0_0_18px_rgba(255,255,255,0.18)]" />
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/60">
          Deslize para desbloquear
        </p>
      </motion.div>
    </motion.div>
  )
}

export default LockScreen
