import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import PrivacySettings from './components/PrivacySettings'
import BatteryDrain from './components/BatteryDrain'
import FocusMode from './components/FocusMode'
import ContextPanel from './components/ContextPanel'
import SmartphoneWrapper from './components/SmartphoneWrapper'
import LockScreen from './components/LockScreen'
import HomeScreen from './components/HomeScreen'
import OpenAppShell from './components/OpenAppShell'
import BiasInsights from './components/BiasInsights'
import ReferencesNotes from './components/ReferencesNotes'

function App() {
  const [focusEnabled, setFocusEnabled] = useState(false)
  const [phoneState, setPhoneState] = useState('locked')
  const showFocusOverlay = phoneState === 'app_impact' && focusEnabled

  const openApp = (appState) => {
    setPhoneState(appState)
  }

  const renderPhoneView = () => {
    if (phoneState === 'locked') {
      return <LockScreen key="locked" onUnlock={() => setPhoneState('home')} />
    }

    if (phoneState === 'home') {
      return <HomeScreen key="home" onOpenApp={openApp} />
    }

    if (phoneState === 'app_privacy') {
      return (
        <OpenAppShell key="app_privacy" title="Social" onBack={() => setPhoneState('home')}>
          <PrivacySettings />
        </OpenAppShell>
      )
    }

    if (phoneState === 'app_bias') {
      return (
        <OpenAppShell key="app_bias" title="Vídeo" onBack={() => setPhoneState('home')}>
          <BiasInsights />
        </OpenAppShell>
      )
    }

    if (phoneState === 'app_sustainability') {
      return (
        <OpenAppShell key="app_sustainability" title="Definições" onBack={() => setPhoneState('home')}>
          <BatteryDrain />
        </OpenAppShell>
      )
    }

    if (phoneState === 'app_impact') {
      return (
        <OpenAppShell key="app_impact" title="Chat" onBack={() => setPhoneState('home')}>
          <FocusMode onToggle={setFocusEnabled} />
        </OpenAppShell>
      )
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
    <div className="min-h-screen bg-black text-zinc-100">
      <div className="grid min-h-screen lg:grid-cols-2">
        <section className="relative overflow-hidden border-b border-zinc-800/60 px-6 py-10 lg:border-b-0 lg:border-r lg:border-zinc-800/60 lg:px-10 lg:py-14">
          <ContextPanel phoneState={phoneState} />
        </section>

        <section className="sticky top-0 flex h-screen items-center justify-center bg-zinc-900/30 px-3 py-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="origin-center scale-[0.84] sm:scale-[0.94] lg:scale-100"
          >
            <SmartphoneWrapper contentClassName="space-y-0 overflow-hidden px-0 pb-0 pt-0">
              <AnimatePresence mode="wait" initial={false}>
                {renderPhoneView()}
              </AnimatePresence>
            </SmartphoneWrapper>
          </motion.div>
        </section>
      </div>

      <motion.div
        initial={false}
        animate={{ opacity: showFocusOverlay ? 1 : 0 }}
        transition={{ type: 'spring', stiffness: 130, damping: 24 }}
        className="pointer-events-none fixed inset-0 z-40 bg-black/40"
      />
    </div>
  )
}

export default App
