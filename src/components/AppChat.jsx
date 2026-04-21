import { motion } from 'framer-motion'
import { Briefcase, ChevronLeft, Folder } from 'lucide-react'
import { useState } from 'react'

const spring = {
  type: 'spring',
  stiffness: 240,
  damping: 24,
}

const AppChat = ({ onBack }) => {
  const [isAutoReplyActive, setIsAutoReplyActive] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 18 }}
      transition={{ duration: 0.28, ease: 'easeOut' }}
      className="relative flex h-full flex-col overflow-hidden bg-zinc-950 text-white"
    >
      <header className="sticky top-0 z-30 flex items-center gap-3 border-b border-zinc-800 bg-zinc-900/80 px-4 pb-4 pt-14 backdrop-blur-md">
        <button
          type="button"
          onClick={onBack}
          className="shrink-0 text-sm font-medium text-zinc-200 transition hover:text-white"
        >
          &lt; Voltar
        </button>

        <div className="flex min-w-0 flex-1 items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-zinc-700 text-zinc-200 shadow-lg shadow-black/30">
            <Folder className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
          </div>

          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-white">Equipa de Projeto</p>
            <p className="text-xs font-medium text-emerald-400">online</p>
          </div>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto px-4 pb-6 pt-4">
        <div className="flex flex-col gap-4">
          <div className="max-w-[85%] self-start rounded-2xl rounded-tl-sm bg-zinc-800 p-3 text-sm text-white shadow-md">
            Pessoal, desculpem a hora (22h30). Precisava que revissem aquele relatório de viés tecnológico para amanhã de manhã. Alguém consegue?
          </div>

          <div className="-mt-2 max-w-[85%] self-start rounded-2xl rounded-tl-sm bg-zinc-800 p-3 text-sm text-white shadow-md">
            É urgente. 🚨
          </div>

          <section className="mt-6 rounded-2xl border border-indigo-500/30 bg-indigo-900/20 p-4 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-indigo-100">
              <Briefcase className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
              <h2 className="text-sm font-semibold">Impacto Profissional &amp; Desconexão</h2>
            </div>

            <div className="mt-3 space-y-3 text-sm leading-6 text-zinc-200/95">
              <p>
                O smartphone esbateu a fronteira entre o escritório e a casa. O WhatsApp tornou-se uma nova esfera pública de proximidade que gera hiperconectividade.
              </p>
              <p>
                Direito à Desconexão: Não normalize a urgência fora do horário laboral. A ausência de limites gera ansiedade (FOMO) e afeta os laços sociais físicos (Phubbing).
              </p>
            </div>

            <button
              type="button"
              onClick={() => setIsAutoReplyActive((current) => !current)}
              className="mt-4 w-full rounded-xl bg-indigo-600 py-3 text-center font-medium text-white transition hover:bg-indigo-500"
            >
              {isAutoReplyActive ? 'Resposta Automática Ativa' : 'Ativar Resposta Automática: Fora de Horas'}
            </button>
          </section>

          {isAutoReplyActive && (
            <motion.div
              initial={{ opacity: 0, x: 16, y: 6 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={spring}
              className="max-w-[85%] self-end rounded-2xl rounded-tr-sm bg-emerald-600 p-3 text-sm text-white shadow-md"
            >
              Modo Foco Ativo: A sua mensagem será lida no próximo dia útil. Proteja o seu tempo de descanso.
            </motion.div>
          )}
        </div>
      </main>
    </motion.div>
  )
}

export default AppChat
