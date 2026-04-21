import { motion } from 'framer-motion'
import { useState } from 'react'
import DynamicIsland from './components/DynamicIsland'
import PrivacySettings from './components/PrivacySettings'
import BatteryDrain from './components/BatteryDrain'
import FocusMode from './components/FocusMode'

function App() {
  const [focusEnabled, setFocusEnabled] = useState(false)

  return (
    <div className="relative min-h-screen overflow-hidden bg-zinc-950 text-zinc-100">
      <DynamicIsland />

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute -right-24 top-44 h-80 w-80 rounded-full bg-violet-600/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <motion.main
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative z-10 mx-auto max-w-md px-4 pb-14 pt-28"
      >
        <div className="rounded-[3rem] border border-white/10 bg-black/40 p-3 shadow-[0_20px_80px_rgba(0,0,0,0.5)] backdrop-blur-2xl">
          <div className="space-y-4 rounded-[2.3rem] border border-white/10 bg-zinc-900/30 p-4 backdrop-blur-xl">
            <PrivacySettings />
            <BatteryDrain />
            <FocusMode onToggle={setFocusEnabled} />
          </div>
        </div>
      </motion.main>

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
