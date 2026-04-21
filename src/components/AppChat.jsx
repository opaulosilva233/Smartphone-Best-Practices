import { motion } from 'framer-motion'
import { Briefcase, ChevronLeft, CheckCheck, Smile, Mic } from 'lucide-react'
import { useState } from 'react'

const spring = {
  type: 'spring',
  stiffness: 240,
  damping: 24,
}

const AppChat = ({ onBack }) => {
  const [hasReplied, setHasReplied] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 18 }}
      transition={{ duration: 0.28, ease: 'easeOut' }}
      className="absolute inset-0 w-full h-full bg-[#0B141A] flex flex-col z-20 font-sans"
    >
      {/* Header Fixo */}
      <div className="bg-[#202C33] pt-14 pb-3 px-4 flex items-center gap-3 shadow-md z-30">
        <button
          type="button"
          onClick={onBack}
          className="shrink-0 text-gray-300 hover:text-white transition"
        >
          <ChevronLeft size={24} />
        </button>

        <div className="flex min-w-0 flex-1 items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-zinc-600 flex items-center justify-center">
            <Briefcase size={20} className="text-white" />
          </div>

          <div className="min-w-0">
            <p className="truncate text-sm font-bold text-white">Equipa de Projeto</p>
            <p className="text-xs font-medium text-green-500">Online</p>
          </div>
        </div>
      </div>

      {/* Área de Mensagens */}
      <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3 pb-24 scrollbar-hide">
        {/* Mensagem Recebida 1 */}
        <div className="bg-[#202C33] text-zinc-100 p-3 rounded-2xl rounded-tl-none max-w-[85%] self-start relative shadow-sm">
          <p className="text-sm">Pessoal, desculpem a hora (22h30). Precisava que revissem aquele relatório de viés tecnológico para amanhã de manhã. Alguém consegue?</p>
          <span className="text-[10px] text-zinc-400 float-right mt-2 ml-3">22:30</span>
        </div>

        {/* Mensagem Recebida 2 */}
        <div className="bg-[#202C33] text-zinc-100 p-3 rounded-2xl rounded-tl-2xl max-w-[85%] self-start relative shadow-sm">
          <p className="text-sm">É urgente. 🚨</p>
          <span className="text-[10px] text-zinc-400 float-right mt-2 ml-3">22:31</span>
        </div>

        {/* Renderização Condicional - Resposta do Utilizador */}
        {hasReplied && (
          <>
            <motion.div
              initial={{ opacity: 0, x: 16, y: 6 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={spring}
              className="bg-[#005C4B] text-zinc-100 p-3 rounded-2xl rounded-tr-none max-w-[85%] self-end relative shadow-sm mt-4"
            >
              <p className="text-sm">Modo Foco Automático: A sua mensagem será lida no próximo dia útil. Proteja o seu tempo de descanso. 🛑</p>
              <div className="flex items-center justify-end gap-1 mt-2">
                <span className="text-[10px] text-zinc-400">22:35</span>
                <CheckCheck size={14} className="text-blue-400" />
              </div>
            </motion.div>

            {/* Cartão de Alerta Ético */}
            <motion.section
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={spring}
              className="mt-6 rounded-2xl border border-emerald-500/30 bg-emerald-900/20 p-4 backdrop-blur-sm self-end max-w-[90%]"
            >
              <div className="flex items-center gap-2 text-emerald-100">
                <Briefcase size={18} strokeWidth={2} aria-hidden="true" />
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
            </motion.section>
          </>
        )}
      </div>

      {/* Área de Input / Ação - Fundo do Ecrã */}
      <div className="bg-[#202C33] p-4 pb-8 w-full shrink-0">
        {!hasReplied ? (
          <button
            onClick={() => setHasReplied(true)}
            className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-medium py-3 rounded-xl flex items-center justify-center gap-2 transition-all"
          >
            <Briefcase size={18} />
            Impor Limite: Resposta Automática
          </button>
        ) : (
          <div className="w-full bg-[#1C2C34] rounded-2xl px-4 py-3 flex items-center justify-between">
            <Smile size={20} className="text-zinc-400" />
            <div className="text-zinc-400 text-sm">Mensagens</div>
            <Mic size={20} className="text-zinc-400" />
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default AppChat
