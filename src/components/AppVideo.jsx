import { motion } from 'framer-motion'
import { Bookmark, Filter, Heart, MessageCircle, Search, Share2 } from 'lucide-react'

const actions = [
  { key: 'like', icon: Heart, label: 'Gostar', value: '142K' },
  { key: 'comment', icon: MessageCircle, label: 'Comentar', value: '19.4K' },
  { key: 'save', icon: Bookmark, label: 'Guardar', value: '8.2K' },
  { key: 'share', icon: Share2, label: 'Partilhar', value: '3.1K' },
]

const AppVideo = ({ onBack, onResetAlgoritmo }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.985 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.28, ease: 'easeOut' }}
      className="relative h-full w-full overflow-hidden rounded-[2.5rem] bg-black"
    >
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-zinc-900 to-black"
        animate={{
          backgroundPosition: ['0% 40%', '100% 60%', '0% 40%'],
          filter: ['brightness(1)', 'brightness(1.08)', 'brightness(1)'],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        style={{ backgroundSize: '190% 190%' }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(167,139,250,0.24),transparent_38%),radial-gradient(circle_at_82%_75%,rgba(56,189,248,0.15),transparent_42%),radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.08),transparent_42%)]"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-black/35" />

      <header className="absolute top-0 z-20 flex w-full items-center justify-between px-4 pt-14 text-white">
        <button
          type="button"
          onClick={onBack}
          aria-label="Voltar"
          className="rounded-full bg-black/30 p-2 backdrop-blur-md"
        >
          <span className="text-lg leading-none">&lt;</span>
        </button>

        <div className="flex items-center gap-2 text-sm">
          <span className="text-white/60">Seguindo</span>
          <span className="text-white/60">|</span>
          <span className="font-bold text-white">Para Ti</span>
        </div>

        <button type="button" aria-label="Pesquisar" className="rounded-full bg-black/30 p-2 backdrop-blur-md">
          <Search size={20} />
        </button>
      </header>

      <aside className="absolute bottom-28 right-4 z-20 flex flex-col items-center gap-6">
        {actions.map((action) => (
          <button
            key={action.key}
            type="button"
            aria-label={action.label}
            className="flex flex-col items-center gap-1 text-white"
          >
            <span className="rounded-full border border-white/20 bg-black/30 p-3 backdrop-blur-md transition hover:bg-black/45">
              <action.icon className="h-5 w-5" strokeWidth={2.2} />
            </span>
            <span className="text-[10px] text-white">{action.value}</span>
          </button>
        ))}
      </aside>

      <div className="absolute bottom-24 left-4 z-20 max-w-[70%] text-white">
        <p className="text-base font-bold">@algoritmo.editor</p>
        <p className="mt-2 text-sm leading-relaxed text-zinc-100">
          O teu feed não é neutro. POV: Prestaste atenção 8 segundos a este tema. Bem-vindo à tua nova câmara de eco. Não verás opiniões contrárias durante os próximos 3 meses. 🎯 #FilterBubble #Vies
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.22, duration: 0.3, ease: 'easeOut' }}
        className="relative z-30 mx-6 mt-32 rounded-2xl border border-white/20 bg-white/10 p-4 shadow-2xl backdrop-blur-xl"
      >
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-sky-200" strokeWidth={2.2} />
          <p className="text-sm font-semibold text-white">Auditoria de Viés Ativa</p>
        </div>

        <p className="mt-2 text-xs leading-relaxed text-zinc-100/90">
          O algoritmo otimiza para retenção, criando bolhas informativas. A convergência ocorre no cérebro do consumidor.
        </p>

        <button
          type="button"
          onClick={onResetAlgoritmo}
          className="mt-3 w-full rounded-full bg-blue-600 py-2 text-sm font-semibold text-white transition hover:bg-blue-500"
        >
          Furar a Bolha: Resetar Algoritmo
        </button>
      </motion.div>
    </motion.div>
  )
}

export default AppVideo
