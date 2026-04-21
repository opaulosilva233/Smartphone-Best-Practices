import { motion } from 'framer-motion'
import { Briefcase, Camera, ChevronLeft, CheckCheck, Heart, Mic, Search, Smile, Users } from 'lucide-react'
import { useState } from 'react'

const spring = {
  type: 'spring',
  stiffness: 240,
  damping: 24,
}

const ChatListItem = ({ avatarClassName, icon: Icon, title, subtitle, time, unreadCount, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full flex items-center gap-4 p-4 border-b border-zinc-800/50 cursor-pointer hover:bg-zinc-800/30 transition text-left"
    >
      <div className={`w-11 h-11 rounded-full ${avatarClassName} flex items-center justify-center shrink-0`}>
        <Icon size={20} className="text-white" />
      </div>

      <div className="min-w-0 flex-1">
        <p className="font-bold text-zinc-100 truncate">{title}</p>
        <p className="text-zinc-400 text-sm truncate">{subtitle}</p>
      </div>

      <div className="flex flex-col items-end gap-1">
        <span className={`text-xs ${unreadCount ? 'text-emerald-400' : 'text-zinc-500'}`}>{time}</span>
        {unreadCount ? (
          <span className="h-5 min-w-5 rounded-full bg-emerald-500 text-[#0B141A] text-[11px] font-bold flex items-center justify-center px-1.5">
            {unreadCount}
          </span>
        ) : null}
      </div>
    </button>
  )
}

const AppChat = ({ onBack }) => {
  const [hasReplied, setHasReplied] = useState(false)
  const [activeChat, setActiveChat] = useState(null)

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 18 }}
      transition={{ duration: 0.28, ease: 'easeOut' }}
      className="absolute inset-0 w-full h-full bg-[#0B141A] flex flex-col z-20 font-sans text-zinc-100"
    >
      {activeChat === null ? (
        <>
          <div className="bg-[#202C33] pt-14 pb-4 px-4 flex justify-between items-center shadow-md z-30">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onBack}
                className="shrink-0 text-gray-300 hover:text-white transition"
                aria-label="Voltar ao ecrã inicial"
              >
                <ChevronLeft size={24} />
              </button>
              <h1 className="text-xl font-bold text-white">Chats</h1>
            </div>

            <div className="flex items-center gap-4 text-zinc-300">
              <Camera size={20} />
              <Search size={20} />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto">
            <ChatListItem
              avatarClassName="bg-teal-700"
              icon={Briefcase}
              title="Equipa de Projeto"
              subtitle="É urgente. 🚨"
              time="22:31"
              unreadCount={2}
              onClick={() => setActiveChat('equipa')}
            />

            <ChatListItem
              avatarClassName="bg-pink-700"
              icon={Heart}
              title="Mãe"
              subtitle="Vens jantar amanhã?"
              time="Ontem"
            />

            <ChatListItem
              avatarClassName="bg-orange-700"
              icon={Users}
              title="Amigos (Fim de semana)"
              subtitle="O João leva as bebidas."
              time="Segunda"
            />
          </div>
        </>
      ) : (
        <>
          <div className="bg-[#202C33] pt-14 pb-3 px-4 flex items-center gap-3 shadow-md z-30">
            <button
              type="button"
              onClick={() => setActiveChat(null)}
              className="shrink-0 text-gray-300 hover:text-white transition"
              aria-label="Voltar à lista de conversas"
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

          <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3 pb-24 scrollbar-hide">
            <div className="bg-[#202C33] text-zinc-100 p-3 rounded-2xl rounded-tl-none max-w-[85%] self-start relative shadow-sm">
              <p className="text-sm">Pessoal, desculpem a hora (22h30). Precisava que revissem aquele relatório de viés tecnológico para amanhã de manhã. Alguém consegue?</p>
              <span className="text-[10px] text-zinc-400 float-right mt-2 ml-3">22:30</span>
            </div>

            <div className="bg-[#202C33] text-zinc-100 p-3 rounded-2xl rounded-tl-2xl max-w-[85%] self-start relative shadow-sm">
              <p className="text-sm">É urgente. 🚨</p>
              <span className="text-[10px] text-zinc-400 float-right mt-2 ml-3">22:31</span>
            </div>

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
        </>
      )}
    </motion.div>
  )
}

export default AppChat
