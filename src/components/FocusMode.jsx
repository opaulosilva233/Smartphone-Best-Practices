import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const spring = {
  type: 'spring',
  stiffness: 240,
  damping: 22,
}

const FocusMode = ({ onToggle }) => {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    onToggle?.(enabled)
  }, [enabled, onToggle])

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={spring}
      className="rounded-[2.5rem] border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
    >
      <h2 className="text-lg font-semibold text-white">Impacto Profissional</h2>
      <p className="mt-1 text-sm text-zinc-300">Ative um bloco de notificações para preservar foco e saúde mental.</p>

      <motion.button
        type="button"
        onClick={() => setEnabled((prev) => !prev)}
        whileTap={{ scale: 0.97 }}
        whileHover={{ scale: 1.01 }}
        transition={spring}
        className={`mt-4 w-full rounded-2xl border px-4 py-5 text-left ${
          enabled
            ? 'border-amber-300/60 bg-amber-300/20 text-amber-100'
            : 'border-white/10 bg-black/25 text-zinc-100'
        }`}
      >
        <div className="flex items-center justify-between">
          <span className="text-base font-semibold">Não Incomodar</span>
          <span className="text-sm">{enabled ? 'Ligado' : 'Desligado'}</span>
        </div>
      </motion.button>

      <AnimatePresence>
        {enabled && (
          <motion.p
            initial={{ opacity: 0, y: -6, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -6, height: 0 }}
            transition={spring}
            className="mt-3 text-sm leading-relaxed text-zinc-200"
          >
            Direito à desconexão: reduzir interrupções protege produtividade e ajuda a combater phubbing, FOMO e exaustão cognitiva.
          </motion.p>
        )}
      </AnimatePresence>
    </motion.section>
  )
}

export default FocusMode
