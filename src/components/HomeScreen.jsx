import { motion } from 'framer-motion'

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

const HomeScreen = ({ onOpenApp }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="relative h-full overflow-hidden rounded-[2.2rem] bg-gradient-to-b from-sky-500/30 via-indigo-700/35 to-zinc-950"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.28),transparent_45%)]" />

      <div className="relative grid grid-cols-4 gap-4 px-4 pt-12">
        {apps.map((app, index) => (
          <motion.button
            key={app.key}
            type="button"
            onClick={() => onOpenApp(app.key)}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.24, delay: index * 0.04, ease: 'easeOut' }}
            className="group flex flex-col items-center gap-2"
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
