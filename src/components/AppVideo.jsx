import { motion } from 'framer-motion'
import { Bookmark, Filter, Heart, MessageCircle, Search, Share2, ShieldCheck } from 'lucide-react'

const actionsFirstVideo = [
  { key: 'like', icon: Heart, label: 'Gostar', value: '142K' },
  { key: 'comment', icon: MessageCircle, label: 'Comentar', value: '19.4K' },
  { key: 'save', icon: Bookmark, label: 'Guardar', value: '8.2K' },
  { key: 'share', icon: Share2, label: 'Partilhar', value: '3.1K' },
]

const actionsSecondVideo = [
  { key: 'like', icon: Heart, label: 'Gostar', value: '89K' },
  { key: 'comment', icon: MessageCircle, label: 'Comentar', value: '12.3K' },
  { key: 'save', icon: Bookmark, label: 'Guardar', value: '6.7K' },
  { key: 'share', icon: Share2, label: 'Partilhar', value: '2.4K' },
]

const AppVideo = ({ onBack, onResetAlgoritmo, onDepolarizationAction }) => {
  const handleDepolarizationClick = () => {
    onDepolarizationAction?.()
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.985 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.28, ease: 'easeOut' }}
      className="absolute inset-0 w-full h-full bg-black z-20 overflow-hidden"
    >
      {/* Scroll Container */}
      <div className="w-full h-full overflow-y-auto snap-y snap-mandatory scrollbar-hide">
        {/* First Video - Viés Tecnológico */}
        <div className="w-full h-full snap-start relative flex-shrink-0 overflow-hidden bg-black">
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

          <aside className="absolute bottom-28 right-4 z-20 flex flex-col items-center gap-6">
            {actionsFirstVideo.map((action) => (
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
        </div>

        {/* Second Video - Despolarização */}
        <div className="w-full h-full snap-start relative flex-shrink-0 overflow-hidden bg-gradient-to-br from-rose-950 via-zinc-900 to-black">
          <motion.div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-br from-rose-950 via-zinc-900 to-black"
            animate={{
              backgroundPosition: ['0% 40%', '100% 60%', '0% 40%'],
              filter: ['brightness(1)', 'brightness(1.06)', 'brightness(1)'],
            }}
            transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
            style={{ backgroundSize: '190% 190%' }}
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(217,119,6,0.2),transparent_38%),radial-gradient(circle_at_82%_75%,rgba(244,63,94,0.15),transparent_42%),radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.06),transparent_42%)]"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-black/38" />

          <aside className="absolute bottom-28 right-4 z-20 flex flex-col items-center gap-6">
            {actionsSecondVideo.map((action) => (
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
            <p className="text-base font-bold">@furo_a_bolha</p>
            <p className="mt-2 text-sm leading-relaxed text-zinc-100">
              Como treinar o teu algoritmo: A passividade é a moeda de troca. O algoritmo não julga a qualidade, julga o tempo de ecrã. Diversifica intencionalmente as tuas fontes. ⚖️ #PensamentoCritico
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22, duration: 0.3, ease: 'easeOut' }}
            className="relative z-30 mx-6 mt-32 rounded-2xl border border-white/20 bg-white/10 p-4 shadow-2xl backdrop-blur-xl"
          >
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-purple-200" strokeWidth={2.2} />
              <p className="text-sm font-semibold text-white">Ação de Despolarização</p>
            </div>

            <p className="mt-2 text-xs leading-relaxed text-zinc-100/90">
              Siga ativamente três perfis que defendam perspetivas fundamentadas opostas às suas. Isto força o algoritmo a diversificar o seu feed.
            </p>

            <button
              type="button"
              onClick={handleDepolarizationClick}
              className="mt-3 w-full rounded-full bg-purple-600 py-2 text-sm font-semibold text-white transition hover:bg-purple-500"
            >
              Desativar Histórico de Recomendações
            </button>
          </motion.div>
        </div>
      </div>

      {/* Fixed Header */}
      <header className="pointer-events-none absolute top-0 left-0 z-30 flex w-full items-center justify-between bg-gradient-to-b from-black/60 to-transparent px-4 pt-14 pb-4 text-white">
        <button
          type="button"
          onClick={onBack}
          aria-label="Voltar"
          className="pointer-events-auto rounded-full bg-black/30 p-2 backdrop-blur-md transition hover:bg-black/45"
        >
          <span className="text-lg leading-none">&lt;</span>
        </button>

        <div className="flex items-center gap-2 text-sm">
          <span className="text-white/60">Seguindo</span>
          <span className="text-white/60">|</span>
          <span className="font-bold text-white">Para Ti</span>
        </div>

        <button
          type="button"
          aria-label="Pesquisar"
          className="pointer-events-auto rounded-full bg-black/30 p-2 backdrop-blur-md transition hover:bg-black/45"
        >
          <Search size={20} />
        </button>
      </header>
    </motion.div>
  )
}

export default AppVideo
