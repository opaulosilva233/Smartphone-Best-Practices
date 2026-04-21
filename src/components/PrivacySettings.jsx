import { AnimatePresence, motion } from 'framer-motion'
import { useMemo, useState } from 'react'

const spring = {
  type: 'spring',
  stiffness: 260,
  damping: 22,
}

const tips = {
  tracking: 'Boa prática: desligue rastreio para reduzir perfilamento e publicidade invasiva.',
  mic: 'Boa prática: ative microfone apenas quando necessário e revogue em apps inativas.',
  location: 'Boa prática: prefira permissão de localização apenas durante uso do app.',
}

const Toggle = ({ checked, onChange }) => {
  return (
    <motion.button
      type="button"
      onClick={onChange}
      whileTap={{ scale: 0.95 }}
      className={`relative h-8 w-14 rounded-full border transition-colors ${
        checked ? 'border-emerald-300/70 bg-emerald-400/70' : 'border-white/15 bg-white/10'
      }`}
    >
      <motion.span
        layout
        transition={spring}
        className={`absolute top-1 h-6 w-6 rounded-full bg-white shadow ${checked ? 'left-7' : 'left-1'}`}
      />
    </motion.button>
  )
}

const PrivacySettings = () => {
  const [settings, setSettings] = useState({
    tracking: true,
    mic: true,
    location: true,
  })

  const config = useMemo(
    () => [
      { key: 'tracking', label: 'Permitir Rastreio de Dados' },
      { key: 'mic', label: 'Acesso ao Microfone' },
      { key: 'location', label: 'Localização em Background' },
    ],
    [],
  )

  const toggleSetting = (key) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={spring}
      className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
    >
      <h2 className="text-lg font-semibold text-white">Privacidade e IP</h2>
      <p className="mt-1 text-sm text-zinc-300">Definições sensíveis para reduzir recolha excessiva de dados.</p>

      <div className="mt-5 space-y-4">
        {config.map((item) => {
          const isEnabled = settings[item.key]

          return (
            <div key={item.key} className="rounded-2xl border border-white/10 bg-black/20 p-3">
              <div className="flex items-center justify-between gap-3">
                <span className="text-sm text-zinc-100">{item.label}</span>
                <Toggle checked={isEnabled} onChange={() => toggleSetting(item.key)} />
              </div>

              <AnimatePresence initial={false}>
                {!isEnabled && (
                  <motion.p
                    initial={{ opacity: 0, height: 0, y: -6 }}
                    animate={{ opacity: 1, height: 'auto', y: 0 }}
                    exit={{ opacity: 0, height: 0, y: -6 }}
                    transition={spring}
                    className="mt-2 text-xs leading-relaxed text-emerald-200"
                  >
                    {tips[item.key]}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>
    </motion.section>
  )
}

export default PrivacySettings
