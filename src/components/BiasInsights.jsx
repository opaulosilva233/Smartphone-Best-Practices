import { motion } from 'framer-motion'

const BiasInsights = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 220, damping: 22 }}
      className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
    >
      <h2 className="flex items-center gap-2 text-lg font-semibold text-white">
        <i className="fa-solid fa-filter text-cyan-300" aria-hidden="true" />
        Viés Algorítmico
      </h2>
      <p className="mt-1 text-sm text-zinc-300">
        Verifica recomendações e resultados com pensamento crítico. O teu feed não é neutro: ele amplifica padrões.
      </p>
      <div className="mt-3 flex items-start gap-2 rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-3 text-sm leading-relaxed text-zinc-200">
        <i className="fa-solid fa-lightbulb mt-0.5 text-cyan-200" aria-hidden="true" />
        <p>Boa prática: compara fontes, ajusta preferências e revê permissões para reduzir bolhas informativas.</p>
      </div>
    </motion.section>
  )
}

export default BiasInsights
