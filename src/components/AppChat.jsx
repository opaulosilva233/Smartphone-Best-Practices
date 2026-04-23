import { motion } from 'framer-motion'
import {
  AlertTriangle,
  BookOpen,
  Briefcase,
  Camera,
  ChevronLeft,
  GraduationCap,
  Heart,
  Mic,
  Search,
  Smile,
  Users,
} from 'lucide-react'
import { useState } from 'react'

const spring = {
  type: 'spring',
  stiffness: 240,
  damping: 24,
}

const chatCatalog = {
  equipa: {
    id: 'equipa',
    avatarClassName: 'bg-teal-700',
    icon: Briefcase,
    title: 'Equipa de Projeto',
    subtitle: 'É urgente. 🚨',
    time: '22:31',
    unreadCount: 2,
  },
  mae: {
    id: 'mae',
    avatarClassName: 'bg-pink-700',
    icon: Heart,
    title: 'Mãe',
    subtitle: 'Faz uma pausa dos ecrãs...',
    time: 'Ontem',
  },
  amigos: {
    id: 'amigos',
    avatarClassName: 'bg-orange-700',
    icon: Users,
    title: 'Amigos (Fim de semana)',
    subtitle: 'Vê se não ficas agarrado ao tele...',
    time: 'Segunda',
  },
  prof: {
    id: 'prof',
    avatarClassName: 'bg-purple-700',
    icon: GraduationCap,
    title: 'Prof. Seminário',
    subtitle: 'Sobre a avaliação da Fase 3...',
    time: '14:20',
  },
  scam: {
    id: 'scam',
    avatarClassName: 'bg-zinc-700',
    icon: AlertTriangle,
    title: '+351 912 345 678',
    subtitle: 'Parabéns! Foi selecionado...',
    time: '09:00',
  },
  istec: {
    id: 'istec',
    avatarClassName: 'bg-blue-700',
    icon: BookOpen,
    title: 'Grupo ISTEC',
    subtitle: 'Alguém tem apontamentos?',
    time: '08:45',
  },
}

const chatList = [chatCatalog.equipa, chatCatalog.mae, chatCatalog.amigos, chatCatalog.prof, chatCatalog.scam, chatCatalog.istec]

const MessageBubble = ({ side = 'received', time, children, className = '', animate = false }) => {
  const bubbleClassName = side === 'sent'
    ? 'bg-[#005C4B] text-zinc-100 self-end rounded-tr-none'
    : 'bg-[#202C33] text-zinc-100 self-start rounded-tl-none'

  const bubble = (
    <div className={`${bubbleClassName} p-3 rounded-2xl max-w-[85%] relative shadow-sm ${className}`}>
      <p className="text-sm">{children}</p>
      <span className={`text-[10px] text-zinc-400 float-right mt-2 ml-3 ${side === 'sent' ? 'flex items-center justify-end gap-1 float-none' : ''}`}>
        {time}
      </span>
    </div>
  )

  if (!animate) {
    return bubble
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: side === 'sent' ? 16 : -16, y: 6 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={spring}
      className={side === 'sent' ? 'self-end' : 'self-start'}
    >
      {bubble}
    </motion.div>
  )
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
  const currentChat = activeChat ? chatCatalog[activeChat] : null

  const renderChatBody = () => {
    switch (activeChat) {
      case 'equipa':
        return (
          <>
            <MessageBubble side="sent" time="18:00">Pessoal, a minha parte do protótipo já está no repositório.</MessageBubble>
            <MessageBubble side="received" time="18:15">Boa! Vou dar uma vista de olhos depois do jantar.</MessageBubble>
            <MessageBubble side="sent" time="18:20">Perfeito. Falamos amanhã no horário normal.</MessageBubble>
            <MessageBubble side="received" time="22:30">Pessoal, desculpem a hora (22h30). Precisava que revissem aquele relatório de viés tecnológico para amanhã de manhã. Alguém consegue?</MessageBubble>
            <MessageBubble side="received" time="22:31">É urgente. 🚨</MessageBubble>

            {hasReplied && (
              <>
                <MessageBubble side="sent" time="22:35" animate className="mt-4">
                  Modo Foco Automático: A sua mensagem será lida no próximo dia útil. Proteja o seu tempo de descanso. 🛑
                </MessageBubble>

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
          </>
        )
      case 'mae':
        return (
          <>
            <MessageBubble side="received" time="Ontem 10:00">Filho, não te esqueças de ligar à avó hoje.</MessageBubble>
            <MessageBubble side="sent" time="Ontem 10:15">Já liguei mãe! Tudo tranquilo.</MessageBubble>
            <MessageBubble side="received" time="Ontem 18:30">Ainda bem. E como está a correr esse trabalho da faculdade?</MessageBubble>
            <MessageBubble side="sent" time="Ontem 19:00">Muito puxado, estou o dia todo agarrado ao ecrã a programar...</MessageBubble>
            <MessageBubble side="received" time="Ontem">Vens jantar amanhã? E por favor, faz uma pausa dos ecrãs, pareces um zombie ultimamente. 🧟‍♂️</MessageBubble>
          </>
        )
      case 'amigos':
        return (
          <>
            <MessageBubble side="received" time="Segunda 10:00">Malta, jantarada esta sexta?</MessageBubble>
            <MessageBubble side="sent" time="Segunda 10:05">Siga! Onde?</MessageBubble>
            <MessageBubble side="received" time="Segunda 10:10">Pode ser cá em casa. Mandamos vir umas pizzas.</MessageBubble>
            <MessageBubble side="received" time="Segunda">O João leva as bebidas. Tu trazes o quê? E vê se não ficas agarrado ao telemóvel o jantar todo como da última vez! 📵</MessageBubble>

            <div className="mt-2 rounded-2xl bg-zinc-800 p-3 text-sm text-zinc-200 max-w-[90%] self-start border border-zinc-700/70">
              Easter Egg Ético: O "Phubbing" (Phone + Snubbing) é o ato de ignorar os seus companheiros físicos em favor do ecrã, desgastando os laços sociais.
            </div>
          </>
        )
      case 'prof':
        return (
          <>
            <MessageBubble side="sent" time="10:00">Bom dia Professor, enviámos o link para a simulação do smartphone atualizada.</MessageBubble>
            <MessageBubble side="received" time="11:30">Obrigado. Vou analisar a vossa interface durante a tarde.</MessageBubble>
            <MessageBubble side="sent" time="11:35">Ficamos a aguardar feedback.</MessageBubble>
            <MessageBubble side="received" time="14:19">Paulo e Francisco, estive a ver a vossa simulação de smartphone para a Fase 3...</MessageBubble>
            <MessageBubble side="received" time="14:20">Tem um bug gravíssimo... Brincadeira! Está excelente. Estão aprovados. 🏆</MessageBubble>
          </>
        )
      case 'scam':
        return (
          <>
            <MessageBubble side="received" time="08:50">Aviso: A sua encomenda CTT #84729 está retida na alfândega.</MessageBubble>
            <MessageBubble side="received" time="08:55">Para libertar a encomenda, pague a taxa de 2.50€ aqui: http://fake-ctt-pay.com</MessageBubble>
            <MessageBubble side="received" time="09:00">Parabéns! O seu número foi selecionado para ganhar um iPhone 16 Pro Max. Clique aqui para reclamar o prémio: http://phishing-scam-istec.com</MessageBubble>

            <div className="mt-2 rounded-2xl bg-red-950/50 p-3 text-sm text-red-200 max-w-[90%] self-start border border-red-500/30">
              Alerta de Privacidade: Phishing! Nunca clique em links suspeitos. A recolha excessiva de dados começa frequentemente com falsas promessas.
            </div>
          </>
        )
      case 'istec':
        return (
          <>
            <MessageBubble side="received" time="08:30">Pessoal, a aula hoje é na sala 4 ou 5?</MessageBubble>
            <MessageBubble side="sent" time="08:32">Sala 5. O prof já lá está.</MessageBubble>
            <MessageBubble side="received" time="08:35">Obrigado! Estou a chegar.</MessageBubble>
            <MessageBubble side="received" time="08:45">Alguém tem os apontamentos de Ética e Convergência da aula passada?</MessageBubble>
          </>
        )
      default:
        return null
    }
  }

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
            {chatList.map((chat) => (
              <ChatListItem
                key={chat.id}
                avatarClassName={chat.avatarClassName}
                icon={chat.icon}
                title={chat.title}
                subtitle={chat.subtitle}
                time={chat.time}
                unreadCount={chat.unreadCount}
                onClick={() => setActiveChat(chat.id)}
              />
            ))}
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
              <div className={`w-10 h-10 rounded-full ${currentChat?.avatarClassName ?? 'bg-zinc-700'} flex items-center justify-center`}>
                {currentChat?.icon ? <currentChat.icon size={20} className="text-white" /> : <Users size={20} className="text-white" />}
              </div>

              <div className="min-w-0">
                <p className="truncate text-sm font-bold text-white">{currentChat?.title ?? 'Conversa'}</p>
                <p className="text-xs font-medium text-green-500">Online</p>
              </div>
            </div>
          </div>

          <div className="flex-1 min-h-0 overflow-y-auto p-4 flex flex-col gap-3 pb-24 scrollbar-hide">
            {renderChatBody()}
          </div>

          <div className="bg-[#202C33] p-4 pb-8 w-full shrink-0">
            {activeChat === 'equipa' && !hasReplied ? (
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
