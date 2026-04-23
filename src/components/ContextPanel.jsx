import { AnimatePresence, motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'

const contextData = {
  locked: {
    title: 'Soberania Digital',
    points: [
      {
        highlight: 'Desative notificações não essenciais',
        text: ' para recuperar o controlo da sua atenção.',
      },
      {
        highlight: 'Organize o ecrã inicial com ferramentas úteis',
        text: ' e esconda apps de distração (redes sociais/jogos).',
      },
      {
        highlight: 'Defina períodos de "Ecrã Negro" diários',
        text: ' para criar momentos de total desconexão.',
      },
    ],
    focus: 'Otimização Intencional',
  },
  home: {
    title: 'Soberania Digital',
    points: [
      {
        highlight: 'Desative notificações não essenciais',
        text: ' para recuperar o controlo da sua atenção.',
      },
      {
        highlight: 'Organize o ecrã inicial com ferramentas úteis',
        text: ' e esconda apps de distração (redes sociais/jogos).',
      },
      {
        highlight: 'Defina períodos de "Ecrã Negro" diários',
        text: ' para criar momentos de total desconexão.',
      },
    ],
    focus: 'Otimização Intencional',
  },
  social: {
    title: 'Higiene de Privacidade',
    points: [
      {
        highlight: 'Aplique o Princípio do Menor Privilégio',
        text: ': revogue acessos desnecessários (câmara, microfone, localização).',
      },
      {
        highlight: 'Desative o rastreio de atividade inter-apps',
        text: ' nas definições do sistema para reduzir a pegada digital.',
      },
      {
        highlight: 'Audite permissões regularmente',
        text: ': questione sempre por que motivo uma app "gratuita" exige os seus dados.',
      },
    ],
    focus: 'Auditoria de Dados',
  },
  video: {
    title: 'Hacking do Algoritmo',
    points: [
      {
        highlight: 'Fure a bolha ativamente',
        text: ': siga criadores e fontes com perspetivas contrárias às suas.',
      },
      {
        highlight: 'Limpe o histórico de visualizações e a cache',
        text: ' regularmente para resetar recomendações viciadas.',
      },
      {
        highlight: 'Desative a reprodução automática (Autoplay)',
        text: ' para quebrar o ciclo de retenção infinita.',
      },
    ],
    focus: 'Pensamento Crítico',
  },
  chat: {
    title: 'Ética da Hiperconectividade',
    points: [
      {
        highlight: 'Exerça o direito à desconexão',
        text: ': agende o modo "Não Incomodar" fora do horário laboral.',
      },
      {
        highlight: 'Combata o phubbing',
        text: ': guarde o smartphone quando estiver a interagir presencialmente com alguém.',
      },
      {
        highlight: 'Desnormalize a urgência',
        text: ': ative respostas automáticas de ausência para educar o círculo profissional.',
      },
    ],
    focus: 'Limites Saudáveis',
  },
  definicoes: {
    title: 'Combate ao E-Waste',
    points: [
      {
        highlight: 'Exija o direito à reparação',
        text: ': substitua bateria ou ecrã antes de comprar um aparelho novo.',
      },
      {
        highlight: 'Otimize a vida química do lítio',
        text: ': mantenha a carga do dispositivo entre 20% e 80%.',
      },
      {
        highlight: 'Recicle com responsabilidade',
        text: ': entregue hardware antigo em centros certificados para recuperação de minerais raros.',
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
      <header className="relative z-10 flex flex-col shrink-0">
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
          <h1 className="text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-zinc-200 to-zinc-600 tracking-tighter mb-12">
            {content.title}
          </h1>

          <div>
            {content.points.map((point) => (
              <div key={`${content.title}-${point.highlight}`} className="flex items-start gap-5 mb-8 group">
                <div className="w-1 h-full min-h-[24px] bg-teal-500 rounded-full mt-1.5 opacity-80 group-hover:opacity-100 transition-opacity"></div>
                <p className="text-xl lg:text-2xl text-zinc-300 font-light leading-relaxed">
                  <span className="font-semibold text-white">{point.highlight}</span>
                  {point.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 inline-flex items-center gap-3 px-4 py-2 rounded-full border border-teal-500/20 bg-teal-500/5 backdrop-blur-md w-fit">
            <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
            <span className="text-teal-300 text-xs font-bold tracking-widest uppercase">{content.focus}</span>
          </div>
        </motion.main>
      </AnimatePresence>

      <footer className="relative z-10 shrink-0 pt-6 mt-8">
        <p className="text-zinc-600 text-[10px] tracking-widest uppercase font-medium">Desenvolvido por Paulo Silva & Francisco Rebelo</p>
      </footer>
    </>
  )
}

export default ContextPanel
