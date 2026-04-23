import { AnimatePresence, motion } from 'framer-motion'
import {
  BatteryCharging,
  BellOff,
  Clock,
  EyeOff,
  FilterX,
  GraduationCap,
  History,
  LayoutGrid,
  Moon,
  PlaySquare,
  PowerOff,
  Recycle,
  Search,
  ShieldAlert,
  Users,
  Wrench,
} from 'lucide-react'

const contextData = {
  locked: {
    title: 'Soberania Digital',
    points: [
      {
        icon: BellOff,
        title: 'Desative notificações não essenciais',
        text: 'para recuperar o controlo da sua atenção.',
      },
      {
        icon: LayoutGrid,
        title: 'Organize o ecrã inicial com ferramentas úteis',
        text: 'e esconda apps de distração (redes sociais/jogos).',
      },
      {
        icon: Moon,
        title: 'Defina períodos de "Ecrã Negro" diários',
        text: 'para criar momentos de total desconexão.',
      },
    ],
    focus: 'Otimização Intencional',
  },
  home: {
    title: 'Soberania Digital',
    points: [
      {
        icon: BellOff,
        title: 'Desative notificações não essenciais',
        text: 'para recuperar o controlo da sua atenção.',
      },
      {
        icon: LayoutGrid,
        title: 'Organize o ecrã inicial com ferramentas úteis',
        text: 'e esconda apps de distração (redes sociais/jogos).',
      },
      {
        icon: Moon,
        title: 'Defina períodos de "Ecrã Negro" diários',
        text: 'para criar momentos de total desconexão.',
      },
    ],
    focus: 'Otimização Intencional',
  },
  social: {
    title: 'Higiene de Privacidade',
    points: [
      {
        icon: ShieldAlert,
        title: 'Aplique o Princípio do Menor Privilégio:',
        text: 'revogue acessos desnecessários (câmara, microfone, localização).',
      },
      {
        icon: EyeOff,
        title: 'Desative o rastreio de atividade inter-apps',
        text: 'nas definições do sistema para reduzir a pegada digital.',
      },
      {
        icon: Search,
        title: 'Audite permissões regularmente:',
        text: 'questione sempre por que motivo uma app "gratuita" exige os seus dados.',
      },
    ],
    focus: 'Auditoria de Dados',
  },
  video: {
    title: 'Hacking do Algoritmo',
    points: [
      {
        icon: FilterX,
        title: 'Fure a Bolha Ativamente:',
        text: 'siga intencionalmente criadores e fontes com perspetivas contrárias às suas.',
      },
      {
        icon: History,
        title: 'Limpe o histórico de visualizações',
        text: 'e a cache regularmente para "resetar" as recomendações viciadas.',
      },
      {
        icon: PlaySquare,
        title: 'Desative a reprodução automática (Autoplay)',
        text: 'para quebrar o ciclo de retenção infinita.',
      },
    ],
    focus: 'Pensamento Crítico',
  },
  chat: {
    title: 'Ética da Hiperconectividade',
    points: [
      {
        icon: PowerOff,
        title: 'Exerça o Direito à Desconexão:',
        text: 'agende o modo "Não Incomodar" fora do horário laboral.',
      },
      {
        icon: Users,
        title: 'Combata o Phubbing:',
        text: 'guarde fisicamente o smartphone quando interagir presencialmente com alguém.',
      },
      {
        icon: Clock,
        title: 'Desnormalize a Urgência:',
        text: 'ative respostas automáticas de ausência para educar o seu círculo profissional.',
      },
    ],
    focus: 'Limites Saudáveis',
  },
  definicoes: {
    title: 'Combate ao E-Waste',
    points: [
      {
        icon: Wrench,
        title: 'Exija o direito à reparação:',
        text: 'substitua bateria ou ecrã antes de comprar um aparelho novo.',
      },
      {
        icon: BatteryCharging,
        title: 'Otimize a vida química do lítio:',
        text: 'mantenha a carga do dispositivo entre 20% e 80%.',
      },
      {
        icon: Recycle,
        title: 'Recicle com responsabilidade:',
        text: 'entregue hardware antigo em centros certificados para recuperação de minerais raros.',
      },
    ],
    focus: 'Sustentabilidade de Hardware',
  },
}

const contentAnimation = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
  transition: { duration: 0.3, ease: 'easeOut' },
}

function ContextPanel({ phoneState, activeApp }) {
  const contentKey = phoneState === 'locked' || phoneState === 'home' ? phoneState : activeApp
  const content = contextData[contentKey] ?? contextData.home

  return (
    <>
      <header className="relative z-10 flex flex-col shrink-0 min-h-min">
        <div className="flex items-center gap-3 text-teal-400">
          <GraduationCap size={28} />
        </div>
        <p className="text-zinc-500 text-[10px] font-bold tracking-[0.3em] uppercase mt-2">ISTEC PORTO</p>
        <p className="text-zinc-500 text-[10px] font-bold tracking-[0.3em] uppercase mt-2">HISTÓRIA DA CIÊNCIA E DAS TÉCNICAS</p>
      </header>

      <AnimatePresence mode="wait" initial={false}>
        <motion.main
          key={`${phoneState}-${activeApp}`}
          className="flex flex-col justify-center my-auto z-10 relative max-w-2xl"
          {...contentAnimation}
        >
          <div>
            <h1 className="text-3xl lg:text-4xl 2xl:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-zinc-200 to-zinc-600 tracking-tighter mb-4 2xl:mb-10">
              {content.title}
            </h1>

            <div>
              {content.points.map((Item) => (
                <div key={`${content.title}-${Item.title}`} className="flex items-start gap-4 2xl:gap-5 mb-5 2xl:mb-8 group">
                  <div className="mt-1 p-2 rounded-xl bg-teal-500/10 text-teal-400 group-hover:bg-teal-500 group-hover:text-black transition-colors shrink-0">
                    <Item.icon size={20} className="2xl:w-6 2xl:h-6" />
                  </div>
                  <p className="text-base lg:text-lg 2xl:text-2xl text-zinc-300 font-light leading-snug 2xl:leading-relaxed">
                    <strong className="font-semibold text-white">{Item.title}</strong> {Item.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-2 2xl:mt-8 inline-flex items-center gap-3 px-3 2xl:px-4 py-1.5 2xl:py-2 rounded-full border border-teal-500/20 bg-teal-500/5 backdrop-blur-md w-fit">
              <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
              <span className="text-teal-300 text-xs font-bold tracking-widest uppercase">{content.focus}</span>
            </div>
          </div>
        </motion.main>
      </AnimatePresence>

      <footer className="relative z-10 shrink-0 min-h-min pt-6 mt-8">
        <p className="text-zinc-600 text-[10px] tracking-widest uppercase font-medium">Desenvolvido por Paulo Silva & Francisco Rebelo</p>
      </footer>
    </>
  )
}

export default ContextPanel
