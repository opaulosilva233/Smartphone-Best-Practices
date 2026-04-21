import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

const apps = [
  {
    key: 'app_privacy',
    label: 'Social',
    emoji: '📸',
    iconClassName: 'bg-gradient-to-br from-fuchsia-500 to-purple-600 text-white',
  },
  {
    key: 'app_bias',
    label: 'Vídeo',
    emoji: '🎵',
    iconClassName:
      'bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.45),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(248,113,113,0.45),transparent_45%),#0b0b0d] text-white',
  },
  {
    key: 'app_sustainability',
    label: 'Definições',
    emoji: '⚙️',
    iconClassName: 'bg-gradient-to-br from-zinc-400 to-zinc-600 text-zinc-100',
  },
  {
    key: 'app_impact',
    label: 'Chat',
    emoji: '💬',
    iconClassName: 'bg-gradient-to-br from-emerald-400 to-green-600 text-white',
  },
  {
    key: 'app_references',
    label: 'Fontes',
    emoji: '📚',
    iconClassName: 'bg-gradient-to-br from-amber-100 to-yellow-300 text-zinc-800',
  },
]

const spring = {
  type: 'spring',
  stiffness: 280,
  damping: 26,
}

const HomeScreen = ({ onOpenApp }) => {
  const [controlCenterOpen, setControlCenterOpen] = useState(false)
  const batteryLevel = 20

  const handleControlCenterDragEnd = (_, info) => {
    if (info.offset.y > 50) {
      setControlCenterOpen(true)
    }
  }

  const handleCloseControlCenter = () => {
    setControlCenterOpen(false)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="relative h-full overflow-hidden rounded-[2.2rem] bg-gradient-to-b from-sky-500/30 via-indigo-700/35 to-zinc-950"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.28),transparent_45%)]" />

      <AnimatePresence>
        {!controlCenterOpen ? (
          <motion.div
            key="home-drag-zone"
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={0.15}
            dragMomentum={false}
            onDragEnd={handleControlCenterDragEnd}
            transition={spring}
            style={{ touchAction: 'none' }}
            className="absolute top-0 z-50 h-8 w-full"
          />
        ) : null}

        {controlCenterOpen ? (
          <motion.div
            key="control-center-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="absolute inset-0 z-40 bg-black/40 backdrop-blur-2xl"
          >
            <motion.div
              initial={{ y: -18, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -18, opacity: 0 }}
              transition={spring}
              className="absolute left-0 right-0 top-0 rounded-b-[2.25rem] border-b border-white/10 bg-white/10 px-4 pb-5 pt-12 shadow-2xl backdrop-blur-2xl"
            >
              <div className="flex items-center justify-between text-white">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/60">
                    Centro de Controlo
                  </p>
                  <p className="mt-1 text-sm text-white/80">Notificações e atalhos em modo de transparência</p>
                </div>
                <button
                  type="button"
                  onClick={handleCloseControlCenter}
                  className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white/90 shadow-lg"
                >
                  Fechar
                </button>
              </div>

              <motion.div
                drag="y"
                dragConstraints={{ top: 0, bottom: 0 }}
                dragElastic={0.12}
                dragMomentum={false}
                onDragEnd={(_, info) => {
                  if (info.offset.y < -50) {
                    handleCloseControlCenter()
                  }
                }}
                transition={spring}
                style={{ touchAction: 'none' }}
                className="mt-6 flex flex-col items-center gap-3"
              >
                <div className="h-1.5 w-20 rounded-full bg-white/50" />
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/60">
                  Deslize para cima para fechar
                </p>
              </motion.div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-3xl border border-white/10 bg-black/25 p-4 text-white shadow-lg backdrop-blur-xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">Silêncio</p>
                  <p className="mt-6 text-lg font-semibold">Notificações suspensas</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-black/25 p-4 text-white shadow-lg backdrop-blur-xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">Foco</p>
                  <p className="mt-6 text-lg font-semibold">Resposta lenta, atenção alta</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <div className="relative grid grid-flow-dense grid-cols-4 auto-rows-[5.5rem] gap-3 px-4 pt-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ ...spring, delay: 0.02 }}
          className="col-span-2 row-span-2 overflow-hidden rounded-3xl bg-zinc-800/80 p-4 text-white shadow-2xl ring-1 ring-white/10"
        >
          <div className="flex h-full flex-col justify-between">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/55">Bateria</p>
                <p className="mt-2 max-w-[10rem] text-sm font-medium leading-snug text-white/85">
                  Modo Baixo Consumo Recomendado
                </p>
              </div>
              <span className="rounded-full border border-emerald-300/30 bg-emerald-300/10 px-2 py-1 text-[11px] font-semibold text-emerald-100">
                {batteryLevel}%
              </span>
            </div>

            <div className="relative mt-4 flex flex-1 items-center justify-center">
              <svg viewBox="0 0 120 120" className="h-28 w-28 -rotate-90">
                <circle cx="60" cy="60" r="46" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="10" />
                <circle
                  cx="60"
                  cy="60"
                  r="46"
                  fill="none"
                  stroke="rgba(74,222,128,0.95)"
                  strokeWidth="10"
                  strokeLinecap="round"
                  strokeDasharray="289"
                  strokeDashoffset={289 - (289 * batteryLevel) / 100}
                />
              </svg>
              <div className="absolute text-center">
                <p className="text-3xl font-black text-white">{batteryLevel}%</p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-white/55">Carga restante</p>
              </div>
            </div>
          </div>
        </motion.div>

        {apps.map((app, index) => (
          <motion.button
            key={app.key}
            type="button"
            onClick={() => onOpenApp(app.key)}
            initial={{ opacity: 0, y: 14, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ ...spring, delay: 0.04 + index * 0.04 }}
            className="group flex h-full flex-col items-center justify-center gap-2 rounded-3xl bg-white/5 px-2 text-center shadow-lg ring-1 ring-white/10 backdrop-blur-sm"
          >
            <span
              className={`flex h-14 w-14 items-center justify-center rounded-2xl text-2xl shadow-sm ring-1 ring-white/20 ${app.iconClassName}`}
            >
              {app.emoji}
            </span>
            <span className="text-[11px] font-medium text-white/90">{app.label}</span>
          </motion.button>
        ))}
      </div>
    </motion.div>
  )
}

export default HomeScreen
