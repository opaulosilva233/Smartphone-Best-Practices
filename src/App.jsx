import { AnimatePresence, motion } from 'framer-motion'
import { useMemo, useState } from 'react'
import {
  Bluetooth,
  BookOpen,
  Camera,
  Hourglass,
  MessageCircle,
  MessageSquare,
  Moon,
  Play,
  Settings,
  Sparkles,
  Sun,
  Wifi,
} from 'lucide-react'
import AppSocial from './components/AppSocial'
import AppChat from './components/AppChat'
import AppVideo from './components/AppVideo'
import AppDefinicoes from './components/AppDefinicoes'
import ContextPanel from './components/ContextPanel'
import SmartphoneWrapper from './components/SmartphoneWrapper'
import OpenAppShell from './components/OpenAppShell'
import ReferencesNotes from './components/ReferencesNotes'
import HomeScreen from './components/HomeScreen'
import useCurrentTime from './hooks/useCurrentTime'

const apps = [
  {
    key: 'app_privacy',
    label: 'Social',
    icon: Camera,
    iconClassName: 'bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 text-white',
  },
  {
    key: 'app_bias',
    label: 'Vídeo',
    icon: Play,
    iconClassName:
      'bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.45),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(248,113,113,0.45),transparent_45%),#0b0b0d] text-white',
  },
  {
    key: 'app_sustainability',
    label: 'Definições',
    icon: Settings,
    iconClassName: 'bg-gradient-to-b from-zinc-300 to-zinc-500 text-zinc-100',
  },
  {
    key: 'app_impact',
    label: 'Chat',
    icon: MessageSquare,
    iconClassName: 'bg-green-500 text-white',
  },
  {
    key: 'app_references',
    label: 'Referências',
    icon: BookOpen,
    iconClassName: 'bg-gradient-to-br from-amber-100 to-yellow-200 text-zinc-800',
  },
]

const springUnlock = {
  type: 'spring',
  stiffness: 300,
  damping: 30,
}

const heavySpring = {
  type: 'spring',
  stiffness: 190,
  damping: 28,
}

const glassExtreme =
  'backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-4 shadow-2xl shadow-black/45'

function LockScreenPhysical({ currentTime, currentDate, onUnlock }) {
  const [unlocking, setUnlocking] = useState(false)

  const notifications = useMemo(
    () => [
      {
        key: 'screen-time',
        icon: Hourglass,
        iconClassName: 'text-violet-200',
        title: 'Tempo de Ecrã',
        text: 'A sua média subiu para 3h 46min hoje.',
      },
      {
        key: 'whatsapp',
        icon: MessageCircle,
        iconClassName: 'text-green-500',
        title: 'Grupo de Trabalho',
        text: '5 novas mensagens. Precisamos disto para amanhã!',
      },
    ],
    []
  )

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={unlocking ? { y: -920, opacity: 0 } : { y: 0, opacity: 1 }}
      exit={{ opacity: 0, y: -100 }}
      transition={unlocking ? springUnlock : { duration: 0.45, ease: 'easeOut' }}
      onAnimationComplete={() => {
        if (unlocking) {
          onUnlock?.()
        }
      }}
      drag={unlocking ? false : 'y'}
      dragConstraints={{ top: 0, bottom: 0 }}
      dragElastic={0.18}
      dragMomentum={false}
      onDragEnd={(_, info) => {
        if (info.offset.y < -150) {
          setUnlocking(true)
        }
      }}
      style={{ touchAction: 'none' }}
      className="absolute inset-0 w-full h-full flex flex-col justify-between pt-20 pb-8 px-4 z-10"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-teal-900/40 to-slate-900 -z-10" />

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.28),transparent_45%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.18),transparent_45%)]" />
        <div className="absolute -top-12 left-8 h-44 w-44 rounded-full bg-cyan-300/15 blur-3xl" />
        <div className="absolute bottom-10 right-6 h-52 w-52 rounded-full bg-sky-100/15 blur-3xl" />
      </div>

      <div className="relative text-center text-white">
        <p className="text-sm font-medium tracking-[0.14em] text-white/80">{currentDate}</p>
        <h1 className="mt-2 text-7xl font-black leading-none">{currentTime}</h1>
      </div>

      <div className="relative w-full max-w-xs my-auto space-y-3 text-white">
        {notifications.map((notification, index) => (
          <motion.div
            key={notification.key}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...heavySpring, delay: 0.1 + index * 0.06 }}
            className="rounded-2xl bg-black/20 p-4 backdrop-blur-md border border-white/10 shadow-xl"
          >
            <div className="flex items-center gap-2">
              <notification.icon className={`h-4 w-4 ${notification.iconClassName}`} strokeWidth={2.1} aria-hidden="true" />
              <p className="text-sm font-semibold text-white">{notification.title}</p>
            </div>
            <p className="mt-1 text-sm text-white/80">{notification.text}</p>
          </motion.div>
        ))}
      </div>

      <div className="relative flex w-full max-w-xs flex-col items-center gap-3 rounded-3xl px-4 py-3 text-white">
        <div className="h-1.5 w-1/3 rounded-full bg-white/50 shadow-[0_0_18px_rgba(255,255,255,0.18)]" />
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/60">Deslize para desbloquear</p>
      </div>
    </motion.div>
  )
}

function HomeScreenDense({ onOpenApp, onUnlockHome }) {
  const [controlCenterOpen, setControlCenterOpen] = useState(false)
  const [pullDownOffset, setPullDownOffset] = useState(0)

  const panelTranslate = controlCenterOpen ? 0 : Math.min(0, -440 + pullDownOffset)
  const panelOpacity = controlCenterOpen ? 1 : Math.min(1, pullDownOffset / 160)
  const batteryLevel = 19

  const controlButtons = [
    { label: 'WiFi', icon: Wifi },
    { label: 'Bluetooth', icon: Bluetooth },
    { label: 'Não Incomodar', icon: Moon },
    { label: 'Brilho', icon: Sun },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="relative h-full overflow-hidden rounded-[2.2rem] bg-gradient-to-b from-[#101731] via-[#121a3e] to-[#05070f]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(86,194,255,0.23),transparent_38%),radial-gradient(circle_at_90%_85%,rgba(255,195,107,0.16),transparent_35%)]" />

      <motion.div
        drag="y"
        dragConstraints={{ top: 0, bottom: 0 }}
        dragElastic={0.2}
        dragMomentum={false}
        style={{ touchAction: 'none' }}
        onDrag={(_, info) => {
          if (info.offset.y > 0) {
            setPullDownOffset(Math.min(info.offset.y, 220))
          }
        }}
        onDragEnd={(_, info) => {
          if (info.offset.y > 90) {
            setControlCenterOpen(true)
          }
          setPullDownOffset(0)
        }}
        className="absolute left-0 top-0 z-40 h-14 w-full"
      />

      <AnimatePresence>
        {(controlCenterOpen || pullDownOffset > 0) && (
          <motion.div
            key="control-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: panelOpacity }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="absolute inset-0 z-50"
          >
            <button
              type="button"
              aria-label="Fechar Control Center"
              onClick={() => setControlCenterOpen(false)}
              className="absolute inset-0 h-full w-full bg-black/20"
            />

            <motion.div
              animate={{ y: panelTranslate }}
              transition={heavySpring}
              className="absolute left-0 right-0 top-0 rounded-b-[2.3rem] bg-black/40 px-4 pb-6 pt-14 backdrop-blur-3xl"
            >
              <div className="mx-auto h-1.5 w-24 rounded-full bg-white/50" />
              <p className="mt-3 text-center text-[11px] uppercase tracking-[0.22em] text-zinc-200/75">Control Center</p>

              <div className="mt-5 grid grid-cols-2 gap-3">
                {controlButtons.map((item) => (
                  <button
                    key={item.label}
                    type="button"
                    className="rounded-3xl border border-white/10 bg-white/10 px-4 py-4 text-left text-white shadow-xl backdrop-blur-xl"
                  >
                    <item.icon className="h-5 w-5" strokeWidth={2.1} aria-hidden="true" />
                    <p className="mt-2 text-sm font-semibold">{item.label}</p>
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={() => setControlCenterOpen(false)}
                className="mt-5 w-full rounded-2xl border border-white/10 bg-white/10 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/85"
              >
                Fechar painel
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative grid grid-cols-4 gap-x-4 gap-y-6 px-4 pt-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ ...heavySpring, delay: onUnlockHome ? 0.03 : 0 }}
          className={`col-span-2 row-span-2 ${glassExtreme}`}
        >
          <div className="flex h-full flex-col justify-between text-white">
            <div>
              <p className="text-[11px] uppercase tracking-[0.18em] text-zinc-300">Clima</p>
              <p className="mt-2 text-4xl font-light tracking-tight">21°C</p>
              <p className="mt-1 text-sm text-white/85">Ermesinde • Ensolarado</p>
            </div>

            <div className="flex items-end justify-between">
              <div className="rounded-2xl border border-amber-200/20 bg-amber-100/10 px-2.5 py-2 text-[10px] leading-relaxed text-amber-100">
                Localização precisa ativa (Auditoria de Dados)
              </div>
              <motion.div
                animate={{ rotate: [0, 14, -8, 0], scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 4.2, ease: 'easeInOut' }}
                className="relative flex h-12 w-12 items-center justify-center"
              >
                <div className="absolute h-11 w-11 rounded-full bg-amber-300/25 blur-sm" />
                <Sun className="relative h-8 w-8 text-amber-300" strokeWidth={2} aria-hidden="true" />
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ ...heavySpring, delay: onUnlockHome ? 0.1 : 0.04 }}
          className={`col-span-2 row-span-1 ${glassExtreme}`}
        >
          <div className="flex items-center gap-3 text-white">
            <div className="relative h-16 w-16">
              <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90">
                <circle cx="60" cy="60" r="47" fill="none" stroke="rgba(255,255,255,0.14)" strokeWidth="10" />
                <circle
                  cx="60"
                  cy="60"
                  r="47"
                  fill="none"
                  stroke="rgba(250,204,21,0.95)"
                  strokeWidth="10"
                  strokeLinecap="round"
                  strokeDasharray="295"
                  strokeDashoffset={295 - (295 * batteryLevel) / 100}
                />
              </svg>
              <p className="absolute inset-0 flex items-center justify-center text-sm font-bold">{batteryLevel}%</p>
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-[11px] uppercase tracking-[0.18em] text-zinc-300">Modo Baixo Consumo</p>
              <p className="mt-1 text-xs text-red-200/90">E-waste impact: Crítico</p>
              <button
                type="button"
                onClick={() => onOpenApp('app_references')}
                className="mt-2 text-xs font-semibold text-cyan-200 underline decoration-cyan-300/60 underline-offset-2"
              >
                Reciclagem de lítio (Fase 2)
              </button>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ ...heavySpring, delay: onUnlockHome ? 0.16 : 0.08 }}
          className={`col-span-4 row-span-1 ${glassExtreme}`}
        >
          <p className="text-[11px] uppercase tracking-[0.18em] text-zinc-300">Assistente IA</p>
          <div className="mt-2 flex items-center gap-2 rounded-2xl border border-white/10 bg-black/20 px-3 py-2.5">
            <motion.div
              animate={{ rotate: [0, -8, 8, 0], scale: [1, 1.08, 1] }}
              transition={{ repeat: Infinity, duration: 3.8, ease: 'easeInOut' }}
              className="relative"
            >
              <Sparkles
                className="h-4 w-4 text-transparent"
                strokeWidth={2.1}
                aria-hidden="true"
                style={{
                  stroke: 'url(#aiSparkleGradient)',
                  filter: 'drop-shadow(0 0 10px rgba(125,211,252,0.55))',
                }}
              />
            </motion.div>
            <p className="flex-1 text-sm text-zinc-200">Assistente Ético: Em que posso ajudar?</p>
            <span className="rounded-full border border-emerald-300/30 bg-emerald-300/15 px-2 py-0.5 text-[10px] font-semibold text-emerald-100">
              Auditoria de Viés Ativa
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ ...heavySpring, delay: onUnlockHome ? 0.22 : 0.12 }}
          className={`col-span-4 row-span-2 ${glassExtreme}`}
        >
          <svg width="0" height="0" className="absolute">
            <defs>
              <linearGradient id="aiSparkleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#67e8f9" />
                <stop offset="50%" stopColor="#f9a8d4" />
                <stop offset="100%" stopColor="#fef08a" />
              </linearGradient>
            </defs>
          </svg>
          <div className="grid grid-cols-4 gap-3">
            {apps.map((app) => (
              <button
                key={app.key}
                type="button"
                onClick={() => onOpenApp(app.key)}
                className="flex flex-col items-center justify-center gap-1.5"
              >
                {app.key === 'app_bias' ? (
                  <span
                    className={`relative flex h-14 w-14 items-center justify-center rounded-2xl ring-1 ring-white/20 shadow-2xl shadow-black/45 ${app.iconClassName}`}
                  >
                    <Play className="absolute h-6 w-6 -translate-x-[1px] translate-y-[1px] text-cyan-300/75" strokeWidth={2.4} fill="currentColor" />
                    <Play className="absolute h-6 w-6 translate-x-[1px] -translate-y-[1px] text-rose-300/75" strokeWidth={2.4} fill="currentColor" />
                    <Play className="relative h-6 w-6 text-white" strokeWidth={2.4} fill="currentColor" />
                  </span>
                ) : (
                  <span
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl shadow-2xl shadow-black/45 ring-1 ring-white/20 ${app.iconClassName}`}
                  >
                    <app.icon className="h-6 w-6" strokeWidth={2.1} aria-hidden="true" />
                  </span>
                )}
                <span className="text-[11px] text-zinc-300">{app.label}</span>
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

function App() {
  const [phoneState, setPhoneState] = useState('locked')
  const [homeUnlockTick, setHomeUnlockTick] = useState(0)
  const [algoritmoResetAtivo, setAlgoritmoResetAtivo] = useState(false)
  const [depolarizacaoAtiva, setDepolarizacaoAtiva] = useState(false)
  const { currentTime, currentDate } = useCurrentTime()

  const openApp = (appState) => {
    setPhoneState(appState)
  }

  const renderPhoneView = () => {
    if (phoneState === 'locked') {
      return (
        <LockScreenPhysical
          key="locked"
          currentTime={currentTime}
          currentDate={currentDate}
          onUnlock={() => {
            setHomeUnlockTick((prev) => prev + 1)
            setPhoneState('home')
          }}
        />
      )
    }

    if (phoneState === 'home') {
      return <HomeScreen key={`home-${homeUnlockTick}`} onOpenApp={openApp} />
    }

    if (phoneState === 'app_privacy') {
      return (
        <AppSocial key="app_privacy" onBack={() => setPhoneState('home')} />
      )
    }

    if (phoneState === 'app_bias') {
      return (
        <AppVideo
          key="app_bias"
          onBack={() => setPhoneState('home')}
          onResetAlgoritmo={() => setAlgoritmoResetAtivo(true)}
          onDepolarizationAction={() => setDepolarizacaoAtiva(true)}
        />
      )
    }

    if (phoneState === 'app_sustainability') {
      return <AppDefinicoes key="app_sustainability" setPhoneState={setPhoneState} />
    }

    if (phoneState === 'app_impact') {
      return <AppChat key="app_impact" onBack={() => setPhoneState('home')} />
    }

    if (phoneState === 'app_references') {
      return (
        <OpenAppShell key="app_references" title="Fontes" onBack={() => setPhoneState('home')}>
          <ReferencesNotes />
        </OpenAppShell>
      )
    }

    return <HomeScreen key="home_fallback" onOpenApp={openApp} />
  }

  return (
    <div className="h-screen w-full bg-black flex flex-col lg:flex-row overflow-hidden">
      {/* Painel Esquerdo - Contexto */}
      <section className="hidden lg:flex lg:w-1/2 lg:h-screen flex-col justify-center py-10 px-4 sm:px-6 md:px-8 lg:px-8 xl:px-10 overflow-y-auto border-b border-zinc-800/60 lg:border-b-0 lg:border-r lg:border-zinc-800/60">
        <ContextPanel phoneState={phoneState} algoritmoResetAtivo={algoritmoResetAtivo} depolarizacaoAtiva={depolarizacaoAtiva} />
      </section>

      {/* Painel Direito - Smartphone */}
      <section className="w-full lg:w-1/2 h-screen flex items-center justify-center relative bg-zinc-900/30 overflow-hidden ">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex items-center justify-center h-full w-full"
        >
          <div className="transform scale-50 sm:scale-[0.60] md:scale-[0.70] lg:scale-[0.75] xl:scale-[0.88] 2xl:scale-100 origin-center transition-transform duration-300">
            <SmartphoneWrapper currentTime={currentTime} contentClassName="space-y-0 overflow-hidden px-0 pb-0 pt-0">
              <AnimatePresence mode="wait" initial={false}>
                {renderPhoneView()}
              </AnimatePresence>
            </SmartphoneWrapper>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

export default App
