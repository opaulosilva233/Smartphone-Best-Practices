import { AnimatePresence, motion } from 'framer-motion'

const panelContent = {
  intro: {
    eyebrow: 'Seminário de Ética e Convergência',
    title: 'Fase 3: Ética na Era da Convergência',
    subtitle: 'Paulo Silva & Francisco Rebelo | ISTEC Porto',
    text: 'Uma análise sociotécnica sobre como o dispositivo que levamos no bolso redefiniu o contrato social, a privacidade e a nossa relação com a realidade.',
    visualLabel: 'Convergência',
    accent: 'from-cyan-400/35 to-emerald-300/20',
  },
  privacidade: {
    eyebrow: 'Produção e Dados',
    title: 'Privacidade e a Creator Economy',
    subtitle: 'Economia criativa e vigilância silenciosa',
    text: 'Com um mercado de criadores avaliado em 250 mil milhões de dólares , o smartphone deixou de ser apenas um meio de consumo para ser uma ferramenta de produção original. O dilema ético reside na recolha invisível de dados que sustenta este ecossistema.',
    visualLabel: 'Dados',
    accent: 'from-sky-400/30 to-cyan-300/20',
  },
  vies: {
    eyebrow: 'Media e Cognição',
    title: 'O Algoritmo como Editor',
    subtitle: 'Curadoria automatizada da atenção',
    text: 'Como refere Henry Jenkins, a convergência ocorre no cérebro dos consumidores. Contudo, o viés algorítmico cria bolhas onde o utilizador consome apenas o que reforça as suas crenças, reduzindo a atenção média para menos de 8 segundos.',
    visualLabel: 'Filtro',
    accent: 'from-amber-400/30 to-orange-300/20',
  },
  sustentabilidade: {
    eyebrow: 'Infraestrutura Material',
    title: 'O Custo Físico do Digital',
    subtitle: 'Hardware, cadeia de valor e longevidade',
    text: 'Enquanto 84% da população mundial acede à internet via mobile, a produção de hardware enfrenta desafios éticos na extração de materiais e gestão de e-waste. A sustentabilidade profissional exige combater a obsolescência programada.',
    visualLabel: 'E-Waste',
    accent: 'from-emerald-400/30 to-lime-300/20',
  },
  impacto: {
    eyebrow: 'Relações e Trabalho',
    title: 'Espelho e Palco',
    subtitle: 'Identidade digital e convivência',
    text: 'Sherry Turkle afirma que o smartphone reflete a nossa procura por validação . Fenómenos como o Phubbing e o FOMO alteram os laços sociais, exigindo novas éticas de desconexão no ambiente profissional .',
    visualLabel: 'FOMO',
    accent: 'from-rose-400/30 to-red-300/20',
  },
}

const cardAnimation = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -18 },
  transition: { duration: 0.34, ease: 'easeOut' },
}

function ContextPanel({ activeSection }) {
  const content = panelContent[activeSection] ?? panelContent.intro

  return (
    <div className="relative mx-auto flex min-h-full w-full max-w-2xl items-center">
      <div className="pointer-events-none absolute -left-20 top-8 h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-10 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />

      <AnimatePresence mode="wait">
        <motion.article key={activeSection} {...cardAnimation} className="relative z-10 w-full space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-200/90">{content.eyebrow}</p>

          <div className="space-y-3">
            <h1 className="text-3xl font-black leading-tight text-zinc-100 sm:text-4xl lg:text-5xl">{content.title}</h1>
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-zinc-400">{content.subtitle}</p>
          </div>

          <p className="max-w-xl text-base leading-relaxed text-zinc-300 sm:text-lg">{content.text}</p>

          <div className="grid gap-4 sm:grid-cols-[1.2fr_1fr]">
            <div className="rounded-3xl border border-zinc-700/70 bg-zinc-900/70 p-5 backdrop-blur-xl">
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Leitura Sociotécnica</p>
              <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                Interage com os widgets do smartphone para mapear como cada decisão de interface representa uma consequência ética no mundo real.
              </p>
            </div>

            <div className={`relative overflow-hidden rounded-3xl border border-zinc-700/70 bg-gradient-to-br ${content.accent} p-5`}>
              <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full border border-white/20" />
              <div className="absolute -bottom-7 left-5 h-16 w-16 rounded-full border border-white/20" />
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-100/80">Foco Atual</p>
              <p className="mt-3 text-3xl font-black text-white">{content.visualLabel}</p>
              <p className="mt-2 text-sm text-zinc-100/90">Teoria aplicada ao gesto diário no ecrã.</p>
            </div>
          </div>
        </motion.article>
      </AnimatePresence>
    </div>
  )
}

export default ContextPanel
