import { motion } from 'framer-motion'

const OpenAppShell = ({ title, onBack, children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 24 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="relative h-full space-y-4 rounded-[2.2rem] bg-zinc-950/90 px-4 pb-6 pt-14"
    >
      <header className="sticky top-0 z-10 -mx-4 flex items-center justify-between border-b border-white/10 bg-zinc-950/85 px-4 pb-3 backdrop-blur">
        <button
          type="button"
          onClick={onBack}
          className="rounded-xl border border-white/20 bg-white/5 px-3 py-1.5 text-sm font-medium text-cyan-200 hover:bg-white/10"
        >
          &lt; Voltar
        </button>
        <p className="text-sm font-semibold tracking-wide text-zinc-100">{title}</p>
        <span className="w-16" aria-hidden="true" />
      </header>

      <div className="scrollbar-hide h-[calc(100%-3.25rem)] overflow-y-auto pr-0.5">{children}</div>
    </motion.div>
  )
}

export default OpenAppShell
