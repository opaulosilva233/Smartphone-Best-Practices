import { useState } from 'react'
import { motion } from 'framer-motion'
import { Battery, Bluetooth, ChevronLeft, ChevronRight, Recycle, Wifi } from 'lucide-react'

const rowBaseClass =
  'w-full px-4 py-3.5 flex items-center justify-between text-left transition-colors hover:bg-white/5'

const iconWrapBaseClass = 'h-8 w-8 rounded-lg flex items-center justify-center shrink-0'

const AppDefinicoes = ({ setPhoneState }) => {
  const [view, setView] = useState('main')

  if (view === 'battery') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 16 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="absolute inset-0 w-full h-full bg-[#000000] z-20 flex flex-col font-sans"
      >
        <div className="pt-14 pb-4 px-4 flex items-center justify-center relative">
          <button
            type="button"
            onClick={() => setView('main')}
            className="absolute left-4 flex items-center text-blue-400"
            aria-label="Voltar"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <h1 className="text-white text-[20px] font-bold">Saúde da Bateria</h1>
        </div>

        <div className="flex-1 overflow-y-auto pb-6">
          <div className="mx-4 mt-2 rounded-3xl border border-orange-400/25 bg-gradient-to-b from-[#24170E] via-[#1A1A1D] to-[#111113] px-5 py-6">
            <div className="mx-auto h-36 w-36 rounded-full border-[10px] border-orange-400/80 shadow-[0_0_28px_rgba(251,146,60,0.25)] flex items-center justify-center">
              <span className="text-4xl font-black tracking-tight text-orange-300">78%</span>
            </div>

            <p className="mt-5 text-center text-zinc-100 text-lg font-semibold">Capacidade Máxima (Degradada)</p>
            <p className="mt-3 text-center text-sm leading-relaxed text-orange-300">
              A sua bateria perdeu eficiência química devido a ciclos agressivos e sobreaquecimento.
            </p>
          </div>

          <div className="bg-[#1C1C1E] rounded-2xl p-4 mx-4 mt-6 border border-white/5 shadow-xl">
            <div className="flex items-center gap-2">
              <Recycle className="h-5 w-5 text-green-500" />
              <h2 className="text-base font-semibold text-white">E-Waste &amp; Obsolescência</h2>
            </div>

            <p className="mt-3 text-sm leading-relaxed text-zinc-300">
              Trocar de telemóvel apenas porque a bateria degradou agrava a crise de extração de lítio e a
              geração de lixo eletrónico (e-waste) global.
            </p>

            <button
              type="button"
              className="bg-zinc-800 text-white rounded-xl py-3 mt-4 w-full flex justify-center items-center gap-2 hover:bg-zinc-700 transition-colors"
            >
              <Recycle className="h-4 w-4 text-green-400" />
              Guia de Reparação e Reciclagem
            </button>

            <p className="mt-4 text-xs leading-relaxed text-zinc-400">
              Boa Prática: Para prolongar a vida útil do hardware, mantenha a carga entre 20% e 80% e substitua
              apenas a bateria, não o aparelho inteiro.
            </p>
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 16 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="absolute inset-0 w-full h-full bg-[#000000] z-20 flex flex-col font-sans"
    >
      <div className="pt-14 pb-4 px-4 flex items-center justify-center relative">
        <button
          type="button"
          onClick={() => setPhoneState('home')}
          className="absolute left-4 flex items-center text-blue-400"
          aria-label="Voltar para ecrã inicial"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <h1 className="text-white text-[22px] font-bold">Definições</h1>
      </div>

      <div className="bg-[#1C1C1E] mx-4 mt-6 rounded-2xl overflow-hidden border border-white/5">
        <div className={rowBaseClass}>
          <div className="flex items-center gap-3 min-w-0">
            <span className={`${iconWrapBaseClass} bg-blue-500`}>
              <Wifi className="h-4 w-4 text-white" />
            </span>
            <span className="text-white text-[16px]">Wi-Fi</span>
          </div>

          <div className="flex items-center gap-2 text-zinc-400">
            <span className="text-sm">ISTEC_Guest</span>
            <ChevronRight className="h-4 w-4" />
          </div>
        </div>

        <div className="border-t border-zinc-800">
          <div className={rowBaseClass}>
            <div className="flex items-center gap-3 min-w-0">
              <span className={`${iconWrapBaseClass} bg-blue-500`}>
                <Bluetooth className="h-4 w-4 text-white" />
              </span>
              <span className="text-white text-[16px]">Bluetooth</span>
            </div>

            <div className="flex items-center gap-2 text-zinc-400">
              <span className="text-sm">Ligado</span>
              <ChevronRight className="h-4 w-4" />
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-800">
          <button type="button" onClick={() => setView('battery')} className={rowBaseClass}>
            <div className="flex items-center gap-3 min-w-0">
              <span className={`${iconWrapBaseClass} bg-green-500`}>
                <Battery className="h-4 w-4 text-white" />
              </span>
              <span className="text-white text-[16px]">Bateria &amp; Sustentabilidade</span>
            </div>

            <div className="flex items-center gap-2 text-zinc-400">
              <span className="text-sm text-red-400">Aviso</span>
              <ChevronRight className="h-4 w-4" />
            </div>
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default AppDefinicoes