import { motion } from 'framer-motion'
import { Bookmark, Filter, Heart, MessageCircle, Share2 } from 'lucide-react'

const actions = [
  { key: 'like', icon: Heart, label: 'Gostar' },
  { key: 'comment', icon: MessageCircle, label: 'Comentar' },
  { key: 'save', icon: Bookmark, label: 'Guardar' },
  { key: 'share', icon: Share2, label: 'Partilhar' },
]

const AppVideo = ({ onBack }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.985 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.28, ease: 'easeOut' }}
      className="relative h-full w-full overflow-hidden bg-zinc-950"
    >
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-zinc-900 to-black"
        animate={{
          backgroundPosition: ['0% 35%', '100% 65%', '0% 35%'],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        style={{ backgroundSize: '180% 180%' }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(167,139,250,0.30),transparent_38%),radial-gradient(circle_at_83%_82%,rgba(56,189,248,0.18),transparent_40%),radial-gradient(circle_at_55%_40%,rgba(255,255,255,0.08),transparent_42%)]"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-black/25" />

      <header className="absolute top-0 z-20 w-full px-4 pt-14">
        <div className="grid grid-cols-3 items-center text-white">
          <button
            type="button"
            onClick={onBack}
            className="justify-self-start rounded-xl border border-white/20 bg-black/25 px-3 py-1.5 text-sm font-medium backdrop-blur-sm"
          >
            &lt; Voltar
          </button>

          <div className="col-start-2 flex items-center justify-center gap-3 text-sm">
            <button type="button" className="text-white/70">
              Seguindo
            </button>
            <button type="button" className="font-bold text-white">
              Para Ti
            </button>
          </div>

          <div className="justify-self-end h-px w-8 bg-transparent" />
        </div>
        <div className="mx-auto mt-1 h-0.5 w-11 rounded-full bg-white" aria-hidden="true" />
      </header>

      <aside className="absolute bottom-32 right-4 z-20 flex flex-col items-center gap-6 text-white">
        {actions.map((action) => (
          <button
            key={action.key}
            type="button"
            aria-label={action.label}
            className="rounded-full border border-white/20 bg-black/30 p-3 backdrop-blur-md transition hover:bg-black/40"
          >
            <action.icon className="h-5 w-5" strokeWidth={2.2} />
          </button>
        ))}
      </aside>

      <div className="absolute bottom-24 left-4 z-20 max-w-[75%] text-white">
        <p className="text-sm font-bold">@algoritmo_editor</p>
        <p className="mt-2 text-sm leading-relaxed text-zinc-100">
          POV: Prestaste atenção 8 segundos a este tema. Bem-vindo à tua nova câmara de eco. Não verás opiniões contrárias durante os próximos 3 meses. 🎯 #FilterBubble #Vies
        </p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.28, ease: 'easeOut' }}
          className="mt-4 rounded-2xl border border-white/20 bg-white/10 p-4 shadow-2xl backdrop-blur-xl"
        >
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-sky-200" strokeWidth={2.2} />
            <p className="text-sm font-semibold">Auditoria de Viés Ativa</p>
          </div>

          <p className="mt-2 text-xs leading-relaxed text-zinc-100/90">
            O algoritmo não é neutro; otimiza para retenção, criando bolhas informativas que substituem a escolha editorial.
          </p>

          <button
            type="button"
            className="mt-3 flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-500"
          >
            Furá-la: Resetar Preferências
          </button>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default AppVideo
