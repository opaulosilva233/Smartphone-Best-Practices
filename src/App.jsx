import { motion } from 'framer-motion'
import { useState } from 'react'
import DynamicIsland from './components/DynamicIsland'
import PrivacySettings from './components/PrivacySettings'
import BatteryDrain from './components/BatteryDrain'
import FocusMode from './components/FocusMode'

function App() {
  const [focusEnabled, setFocusEnabled] = useState(false)

  const phases = [
    { label: 'Fase 1', iconClass: 'fa-solid fa-house' },
    { label: 'Fase 2', iconClass: 'fa-solid fa-book-open' },
    { label: 'Fase 3', iconClass: 'fa-solid fa-shield-halved' },
  ]

  return (
    <div className="relative min-h-screen overflow-hidden bg-zinc-950 text-zinc-100 md:bg-[radial-gradient(circle_at_20%_20%,rgba(30,41,59,0.65),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(76,29,149,0.45),transparent_35%),linear-gradient(180deg,#09090b,#111827)]">
      <div className="pointer-events-none absolute inset-0 overflow-hidden md:opacity-100">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute -right-24 top-44 h-80 w-80 rounded-full bg-violet-600/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative z-10 flex min-h-screen items-center justify-center px-3 py-5 md:px-6"
      >
        <div className="relative w-full max-w-sm rounded-[3rem] border-[12px] border-zinc-900 bg-zinc-950 p-3 shadow-2xl shadow-purple-900/20 md:h-[850px]">
          <div className="relative h-full overflow-hidden rounded-[2.3rem] border border-white/10 bg-zinc-900/50">
            <DynamicIsland />

            <main className="scrollbar-hide h-full space-y-4 overflow-y-auto px-4 pb-28 pt-24">
              <section id="privacidade">
                <PrivacySettings />
              </section>

              <section id="vies" className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
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
              </section>

              <section id="sustentabilidade">
                <BatteryDrain />
              </section>

              <section id="impacto">
                <FocusMode onToggle={setFocusEnabled} />
              </section>
            </main>

            <footer className="pointer-events-none absolute bottom-4 left-0 right-0 flex justify-center px-4">
              <div className="pointer-events-auto flex items-center gap-3 rounded-3xl border border-white/20 bg-white/10 px-4 py-3 backdrop-blur-md">
                {phases.map((phase) => {
                  return (
                    <button
                      key={phase.label}
                      type="button"
                      className="flex flex-col items-center justify-center rounded-2xl border border-transparent px-3 py-1 text-[11px] text-zinc-100 hover:border-white/25 hover:bg-white/10"
                    >
                      <i className={`${phase.iconClass} mb-1 text-sm text-cyan-200`} aria-hidden="true" />
                      <span>{phase.label}</span>
                    </button>
                  )
                })}
              </div>
            </footer>
          </div>
        </div>
      </motion.section>

      <motion.div
        initial={false}
        animate={{ opacity: focusEnabled ? 1 : 0 }}
        transition={{ type: 'spring', stiffness: 130, damping: 24 }}
        className="pointer-events-none fixed inset-0 z-40 bg-black/40"
      />
    </div>
  )
}

export default App
