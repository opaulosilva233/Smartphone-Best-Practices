import { motion } from 'framer-motion'
import { useState } from 'react'
import DynamicIsland from './components/DynamicIsland'
import PrivacySettings from './components/PrivacySettings'
import BatteryDrain from './components/BatteryDrain'
import FocusMode from './components/FocusMode'
import ContextPanel from './components/ContextPanel'

function App() {
  const [focusEnabled, setFocusEnabled] = useState(false)
  const [activeSection, setActiveSection] = useState('intro')

  const phases = [
    { label: 'Fase 1', iconClass: 'fa-solid fa-house' },
    { label: 'Fase 2', iconClass: 'fa-solid fa-book-open' },
    { label: 'Fase 3', iconClass: 'fa-solid fa-shield-halved' },
  ]

  const handleWidgetInteraction = (section) => {
    setActiveSection(section)
  }

  return (
    <div className="min-h-screen bg-black text-zinc-100">
      <div className="grid min-h-screen lg:grid-cols-2">
        <section className="relative overflow-hidden border-b border-zinc-800/60 px-6 py-10 lg:border-b-0 lg:border-r lg:border-zinc-800/60 lg:px-10 lg:py-14">
          <ContextPanel activeSection={activeSection} />
        </section>

        <section className="sticky top-0 flex h-screen items-center justify-center bg-zinc-900/30 px-3 py-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative h-[760px] w-[360px] rounded-[3rem] border-[12px] border-zinc-900 bg-zinc-950 p-3 shadow-2xl shadow-cyan-950/30 sm:h-[820px] sm:w-[400px] lg:h-[860px] lg:w-[420px]"
            onMouseEnter={() => handleWidgetInteraction('intro')}
            onClick={() => handleWidgetInteraction('intro')}
          >
            <div className="relative h-full overflow-hidden rounded-[2.3rem] border border-white/10 bg-zinc-900/50">
              <DynamicIsland onTopicSelect={handleWidgetInteraction} />

              <main className="scrollbar-hide h-full space-y-4 overflow-y-auto px-4 pb-[120px] pt-24">
                <section
                  id="privacidade"
                  onMouseEnter={() => handleWidgetInteraction('privacidade')}
                  onClick={() => handleWidgetInteraction('privacidade')}
                >
                  <PrivacySettings />
                </section>

                <section
                  id="vies"
                  onMouseEnter={() => handleWidgetInteraction('vies')}
                  onClick={() => handleWidgetInteraction('vies')}
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
                </section>

                <section
                  id="sustentabilidade"
                  onMouseEnter={() => handleWidgetInteraction('sustentabilidade')}
                  onClick={() => handleWidgetInteraction('sustentabilidade')}
                >
                  <BatteryDrain />
                </section>

                <section
                  id="impacto"
                  onMouseEnter={() => handleWidgetInteraction('impacto')}
                  onClick={() => handleWidgetInteraction('impacto')}
                >
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
                        onMouseEnter={() => handleWidgetInteraction('intro')}
                        onClick={() => handleWidgetInteraction('intro')}
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
          </motion.div>
        </section>
      </div>

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
