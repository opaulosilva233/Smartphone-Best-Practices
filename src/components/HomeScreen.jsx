import { AnimatePresence, motion } from 'framer-motion'
import { Sun, BatteryMedium, Sparkles, Camera, Play, Settings, MessageSquare, BookOpen } from 'lucide-react'
import { useState } from 'react'

const apps = [
  {
    key: 'app_privacy',
    label: 'Social',
    icon: Camera,
    iconClassName: 'bg-gradient-to-tr from-amber-400 via-rose-500 to-purple-600',
    iconProps: { color: 'white', size: 28, strokeWidth: 1.5 },
  },
  {
    key: 'app_bias',
    label: 'Vídeo',
    icon: Play,
    iconClassName: 'bg-zinc-900 border border-zinc-800',
    iconProps: { color: 'white', size: 28, strokeWidth: 1.5, fill: 'white' },
  },
  {
    key: 'app_sustainability',
    label: 'Definições',
    icon: Settings,
    iconClassName: 'bg-gradient-to-b from-zinc-400 to-zinc-600',
    iconProps: { color: 'white', size: 28, strokeWidth: 1.5 },
  },
  {
    key: 'app_impact',
    label: 'Chat',
    icon: MessageSquare,
    iconClassName: 'bg-gradient-to-t from-green-500 to-green-400',
    iconProps: { color: 'white', size: 28, strokeWidth: 1.5, fill: 'white' },
  },
  {
    key: 'app_references',
    label: 'Fontes',
    icon: BookOpen,
    iconClassName: 'bg-gradient-to-br from-yellow-100 to-yellow-300',
    iconProps: { color: 'black', size: 28, strokeWidth: 1.5 },
  },
]

const spring = {
  type: 'spring',
  stiffness: 280,
  damping: 26,
}

const widgetBaseClass =
  'bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[2rem] p-5 shadow-xl relative overflow-hidden flex flex-col'

const appIconBaseClass = 'flex h-14 w-14 items-center justify-center rounded-2xl shadow-lg'

const HomeScreen = ({ onOpenApp }) => {
  const [controlCenterOpen, setControlCenterOpen] = useState(false)
  const batteryLevel = 19

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
      className="absolute inset-0 w-full h-full flex flex-col pt-12 pb-24 px-5 z-10 overflow-y-auto scrollbar-hide"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-sky-500/30 via-indigo-700/35 to-zinc-950" />
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

      <div className="relative z-10 grid grid-cols-4 gap-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ ...spring, delay: 0.02 }}
          className={`${widgetBaseClass} col-span-2 min-h-44`}
        >
          <div className="flex h-full flex-col text-white">
            <div className="flex items-center justify-between">
              <p className="text-[10px] tracking-widest uppercase font-semibold text-white/50 mb-3">CLIMA</p>
              <Sun size={14} className="text-white/50" />
            </div>
            <p className="text-5xl font-light text-white my-auto">22°</p>
            <div className="mt-3">
              <p className="text-sm font-medium text-white">Ermesinde</p>
              <p className="mt-1 bg-white/10 rounded-full px-2 py-1 text-[9px] text-white/70 w-fit">
                Localização Precisão: ON
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ ...spring, delay: 0.06 }}
          className={`${widgetBaseClass} col-span-2 min-h-44`}
        >
          <div className="flex h-full flex-col text-white">
            <div className="flex items-center justify-between">
              <p className="text-[10px] tracking-widest uppercase font-semibold text-white/50 mb-3">BATERIA</p>
              <BatteryMedium size={14} className="text-white/50" />
            </div>

            <div className="relative flex flex-1 items-center justify-center">
              <svg viewBox="0 0 120 120" className="h-24 w-24 -rotate-90">
                <circle cx="60" cy="60" r="42" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="5" />
                <circle
                  cx="60"
                  cy="60"
                  r="42"
                  fill="none"
                  stroke="url(#batteryGradient)"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeDasharray="264"
                  strokeDashoffset={264 - (264 * batteryLevel) / 100}
                />
                <defs>
                  <linearGradient id="batteryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#facc15" />
                    <stop offset="100%" stopColor="#f97316" />
                  </linearGradient>
                </defs>
              </svg>
              <p className="absolute text-2xl font-light text-white">{batteryLevel}%</p>
            </div>

            <p className="text-[10px] text-red-300 font-medium mt-2">E-waste: Crítico. Reciclar Lítio</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ ...spring, delay: 0.1 }}
          className={`${widgetBaseClass} col-span-4 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[2rem] p-4 shadow-xl flex flex-row items-center justify-between`}
        >
          <div className="flex items-center">
            <Sparkles className="text-purple-400" size={24} />
            <span className="text-white font-medium ml-3">Assistente Ético</span>
          </div>
          <span className="bg-emerald-500/20 text-emerald-400 text-xs px-3 py-1 rounded-full">
            Auditoria ON
          </span>
        </motion.div>

        {apps.map((app, index) => (
          <motion.button
            key={app.key}
            type="button"
            onClick={() => onOpenApp(app.key)}
            initial={{ opacity: 0, y: 14, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ ...spring, delay: 0.16 + index * 0.04 }}
            className="group col-span-1 flex flex-col items-center gap-1.5"
          >
            <span className={`${appIconBaseClass} ${app.iconClassName}`}>
              <app.icon {...app.iconProps} />
            </span>
            <span className="text-[11px] text-white/90 font-medium text-center">
              {app.label}
            </span>
          </motion.button>
        ))}
      </div>
    </motion.div>
  )
}

export default HomeScreen
