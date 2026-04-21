import { motion } from 'framer-motion'
import {
  Bell,
  ChevronLeft,
  Eye,
  EyeOff,
  MapPin,
  MapPinOff,
  Mic,
  MicOff,
  Moon,
  RefreshCw,
  ShieldAlert,
} from 'lucide-react'
import { useState } from 'react'

const spring = {
  type: 'spring',
  stiffness: 260,
  damping: 24,
}

const stories = [
  {
    key: 'cache',
    label: 'Limpar Cache',
    icon: RefreshCw,
    ring: 'from-cyan-400 via-sky-500 to-indigo-500',
    core: 'from-zinc-900 via-zinc-800 to-zinc-950',
  },
  {
    key: 'permissions',
    label: 'Permissões',
    icon: ShieldAlert,
    ring: 'from-amber-300 via-orange-500 to-rose-500',
    core: 'from-zinc-900 via-zinc-800 to-zinc-950',
  },
  {
    key: 'focus',
    label: 'Modo Foco',
    icon: Moon,
    ring: 'from-emerald-300 via-teal-500 to-cyan-500',
    core: 'from-zinc-900 via-zinc-800 to-zinc-950',
  },
]

const privacyEntries = [
  {
    key: 'tracking',
    label: 'Rastreio',
    description: 'Reduz personalizacao invisivel e coleta excessiva.',
    onIcon: Eye,
    offIcon: EyeOff,
  },
  {
    key: 'mic',
    label: 'Microfone',
    description: 'Ativa apenas quando ha necessidade real de audio.',
    onIcon: Mic,
    offIcon: MicOff,
  },
  {
    key: 'location',
    label: 'Localizacao',
    description: 'Bloqueia rastreio continuo quando a app esta em segundo plano.',
    onIcon: MapPin,
    offIcon: MapPinOff,
  },
]

const defaultPrivacyState = {
  tracking: true,
  mic: true,
  location: true,
}

const Toggle = ({ checked, onChange }) => {
  return (
    <motion.button
      type="button"
      onClick={onChange}
      whileTap={{ scale: 0.96 }}
      className={`relative h-7 w-12 shrink-0 rounded-full border transition-colors ${checked ? 'border-emerald-400/40 bg-emerald-400/80' : 'border-zinc-700 bg-zinc-800'}`}
    >
      <motion.span
        layout
        transition={spring}
        className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow-[0_8px_24px_rgba(0,0,0,0.35)] ${checked ? 'left-6' : 'left-1'}`}
      />
    </motion.button>
  )
}

const Card = ({ className = '', children }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={spring}
      className={`w-full overflow-hidden rounded-[1.75rem] border border-white/8 bg-zinc-900/86 shadow-[0_22px_60px_rgba(0,0,0,0.38)] backdrop-blur-xl ${className}`}
    >
      {children}
    </motion.article>
  )
}

const AppSocial = ({ onBack }) => {
  const [privacy, setPrivacy] = useState(defaultPrivacyState)

  const toggleSetting = (key) => {
    setPrivacy((current) => ({ ...current, [key]: !current[key] }))
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 18 }}
      transition={{ duration: 0.28, ease: 'easeOut' }}
      className="absolute inset-0 w-full h-full bg-zinc-950 flex flex-col z-20 text-zinc-100"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.03),transparent_20%,transparent_80%,rgba(255,255,255,0.02))]" />

      <header className="relative z-30 border-b border-white/6 bg-zinc-950/92 px-4 pt-14 pb-4 backdrop-blur-xl">
        <div className="grid grid-cols-[2.75rem_minmax(0,1fr)_2.75rem] items-center gap-3">
          <button
            type="button"
            onClick={onBack}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900/90 text-zinc-200 transition hover:border-zinc-700 hover:bg-zinc-800"
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
          </button>

          <div className="min-w-0 justify-self-center text-center">
            <p className="truncate text-[11px] font-semibold uppercase tracking-[0.36em] text-zinc-100">
              App Social
            </p>
          </div>

          <button
            type="button"
            aria-label="Notificacoes"
            className="justify-self-end flex h-11 w-11 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900/90 text-zinc-100 transition hover:border-zinc-700 hover:bg-zinc-800"
          >
            <Bell size={20} strokeWidth={1.9} aria-hidden="true" />
          </button>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto pb-24 scrollbar-hide px-4 pt-4">
        <section className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
          {stories.map((story) => {
            const StoryIcon = story.icon

            return (
              <button key={story.key} type="button" className="flex w-20 shrink-0 flex-col items-center gap-2 text-center">
                <span className={`flex h-16 w-16 rounded-full bg-gradient-to-br ${story.ring} p-[2px] shadow-[0_10px_28px_rgba(0,0,0,0.35)]`}>
                  <span className={`flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br ${story.core}`}>
                    <StoryIcon className="h-7 w-7 text-white/95" strokeWidth={1.9} aria-hidden="true" />
                  </span>
                </span>
                <span className="text-[11px] font-medium leading-tight text-zinc-300">{story.label}</span>
              </button>
            )
          })}
        </section>

        <div className="mt-4 space-y-4">
          <Card>
            <div className="p-4">
              <div className="flex items-start gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-slate-500 via-zinc-700 to-cyan-500 p-0.5">
                  <div className="flex h-full w-full items-center justify-center rounded-full bg-zinc-950 text-sm font-semibold text-white">
                    EA
                  </div>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-zinc-100">@etica.algoritmo</p>
                  <p className="text-xs text-zinc-400">Viés Tecnológico</p>
                </div>
              </div>

              <div className="mt-4 overflow-hidden rounded-[1.6rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(148,163,184,0.16),transparent_36%),linear-gradient(145deg,rgba(9,9,11,0.98),rgba(24,24,27,0.94))] p-5">
                <p className="text-[11px] uppercase tracking-[0.24em] text-sky-200/70">A bolha algorítmica</p>
                <p className="mt-4 text-2xl font-light italic leading-tight text-white">
                  "O algoritmo prioriza o envolvimento em vez da verdade."
                </p>
              </div>

              <p className="mt-4 text-sm leading-6 text-zinc-300">
                Dilema: O viés tecnologico cria "bolhas de filtro" (echo chambers) que polarizam opinioes. Boa Pratica: Fure a sua bolha. Siga intencionalmente contas com opinioes divergentes das suas, limpe o seu historico de navegacao e desative recomendacoes baseadas na atividade.
              </p>
            </div>
          </Card>

          <Card>
            <div className="p-4">
              <div className="flex items-start gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-400/15 text-emerald-300">
                  <ShieldAlert className="h-5 w-5" strokeWidth={1.9} aria-hidden="true" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-zinc-100">@privacidade.ip</p>
                  <p className="text-xs text-zinc-400">Privacidade e Propriedade Intelectual (IP)</p>
                </div>
              </div>

              <p className="mt-4 text-sm leading-6 text-zinc-300">
                Boa Pratica: Aplique o principio do "Menor Privilegio". Desative o acesso a sensores e dados em background.
              </p>

              <div className="mt-4 divide-y divide-zinc-800/60 rounded-[1.6rem] border border-zinc-800/70 bg-zinc-950/60 px-4">
                {privacyEntries.map((item) => {
                  const ItemIcon = privacy[item.key] ? item.onIcon : item.offIcon

                  return (
                    <div key={item.key} className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 py-3.5 pr-1">
                      <div className="flex min-w-0 items-start gap-3">
                        <span className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl ${privacy[item.key] ? 'bg-emerald-400/15 text-emerald-300' : 'bg-zinc-800 text-zinc-400'}`}>
                          <ItemIcon className="h-4 w-4" strokeWidth={1.9} aria-hidden="true" />
                        </span>
                        <div className="min-w-0">
                          <p className="text-sm font-medium text-zinc-100">{item.label}</p>
                          <p className="mt-0.5 text-xs leading-relaxed text-zinc-500">{item.description}</p>
                        </div>
                      </div>
                      <Toggle checked={privacy[item.key]} onChange={() => toggleSetting(item.key)} />
                    </div>
                  )
                })}
              </div>

              <div className="mt-4 rounded-[1.35rem] border border-cyan-400/12 bg-cyan-400/6 p-3.5 text-sm leading-6 text-cyan-50/90">
                <span className="font-medium text-cyan-100">Boa Pratica de IP:</span> Numa Creator Economy de constante remix, o plagio e invisivel. Credite sempre a fonte original de audio, imagem ou texto nas suas publicacoes.
              </div>
            </div>
          </Card>
        </div>
      </main>
    </motion.div>
  )
}

export default AppSocial