import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Accessibility,
  Battery,
  Bell,
  Bluetooth,
  ChevronLeft,
  ChevronRight,
  Hourglass,
  Moon,
  Plane,
  Recycle,
  Shield,
  Signal,
  Smartphone,
  Wifi,
} from 'lucide-react'

const rowBaseClass = 'w-full flex justify-between items-center p-3 text-left transition-colors hover:bg-white/5'

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

  if (view === 'screentime') {
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
          <h1 className="text-white text-[20px] font-bold">Tempo de Ecrã</h1>
        </div>

        <div className="flex-1 overflow-y-auto pb-24 scrollbar-hide">
          <div className="bg-[#1C1C1E] rounded-2xl p-4 mx-4 mt-6">
            <p className="text-5xl font-black tracking-tight text-white">4h 12m</p>
            <p className="mt-2 text-zinc-400 text-sm">Média Diária</p>

            <div className="mt-6 rounded-xl bg-zinc-900/70 border border-white/5 p-4">
              <h2 className="text-white font-semibold">Saúde Mental &amp; Hiperconectividade</h2>
              <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                O smartphone é um espelho e um palco. Fenómenos como o FOMO (medo de ficar de fora) e o
                Phubbing afetam as relações físicas.
              </p>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-zinc-300">
              Boa Prática: Defina limites de tempo para redes sociais. A desconexão é um direito fundamental
              para preservar a saúde mental e os laços sociais.
            </p>
          </div>
        </div>
      </motion.div>
    )
  }

  if (view === 'accessibility') {
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
          <h1 className="text-white text-[20px] font-bold">Acessibilidade</h1>
        </div>

        <div className="flex-1 overflow-y-auto pb-24 scrollbar-hide">
          <div className="bg-[#1C1C1E] rounded-2xl p-4 mx-4 mt-6">
            <div className="flex items-center gap-3">
              <div className="h-16 w-16 rounded-2xl bg-cyan-500/15 border border-cyan-400/25 flex items-center justify-center">
                <Smartphone className="h-9 w-9 text-cyan-300" />
              </div>
              <p className="text-white text-2xl font-bold">A Brecha Digital</p>
            </div>

            <div className="mt-6 rounded-xl bg-zinc-900/70 border border-white/5 p-4">
              <h2 className="text-white font-semibold">Acesso ≠ Literacia</h2>
              <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                Embora 84% da população tenha acesso móvel, muitos enfrentam barreiras de literacia ou
                exclusão (idade, território).
              </p>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-zinc-300">
              Boa Prática: Ative modos de alto contraste e texto maior. Projetar ou configurar tecnologia sem
              pensar na acessibilidade aprofunda a desigualdade sociotécnica.
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

      <div className="flex-1 overflow-y-auto pb-24 scrollbar-hide">
        <div className="bg-[#1C1C1E] mx-4 mt-6 rounded-2xl overflow-hidden">
          <div className={`${rowBaseClass} border-b border-zinc-800/50`}>
            <div className="flex items-center gap-3 min-w-0">
              <span className={`${iconWrapBaseClass} bg-orange-500`}>
                <Plane className="h-4 w-4 text-white" />
              </span>
              <span className="text-white text-[16px]">Modo Avião</span>
            </div>

            <div className="h-7 w-12 rounded-full bg-zinc-700/80 p-1 flex items-center">
              <span className="h-5 w-5 rounded-full bg-white/90" />
            </div>
          </div>

          <div className={`${rowBaseClass} border-b border-zinc-800/50`}>
            <div className="flex items-center gap-3 min-w-0">
              <span className={`${iconWrapBaseClass} bg-blue-500`}>
                <Wifi className="h-4 w-4 text-white" />
              </span>
              <span className="text-white text-[16px]">Wi-Fi</span>
            </div>

            <span className="text-sm text-zinc-400">ISTEC_Guest</span>
          </div>

          <div className={`${rowBaseClass} border-b border-zinc-800/50`}>
            <div className="flex items-center gap-3 min-w-0">
              <span className={`${iconWrapBaseClass} bg-blue-500`}>
                <Bluetooth className="h-4 w-4 text-white" />
              </span>
              <span className="text-white text-[16px]">Bluetooth</span>
            </div>

            <span className="text-sm text-zinc-400">Ligado</span>
          </div>

          <div className={rowBaseClass}>
            <div className="flex items-center gap-3 min-w-0">
              <span className={`${iconWrapBaseClass} bg-green-500`}>
                <Signal className="h-4 w-4 text-white" />
              </span>
              <span className="text-white text-[16px]">Dados Móveis</span>
            </div>
          </div>
        </div>

        <div className="bg-[#1C1C1E] mx-4 mt-6 rounded-2xl overflow-hidden">
          <div className={`${rowBaseClass} border-b border-zinc-800/50`}>
            <div className="flex items-center gap-3 min-w-0">
              <span className={`${iconWrapBaseClass} bg-red-500`}>
                <Bell className="h-4 w-4 text-white" />
              </span>
              <span className="text-white text-[16px]">Notificações</span>
            </div>
          </div>

          <button type="button" onClick={() => setView('screentime')} className={`${rowBaseClass} border-b border-zinc-800/50`}>
            <div className="flex items-center gap-3 min-w-0">
              <span className={`${iconWrapBaseClass} bg-violet-500`}>
                <Hourglass className="h-4 w-4 text-white" />
              </span>
              <span className="text-white text-[16px]">Tempo de Ecrã</span>
            </div>

            <div className="flex items-center gap-2 text-zinc-400">
              <span className="text-sm">4h 12m</span>
              <ChevronRight className="h-4 w-4" />
            </div>
          </button>

          <div className={rowBaseClass}>
            <div className="flex items-center gap-3 min-w-0">
              <span className={`${iconWrapBaseClass} bg-indigo-500`}>
                <Moon className="h-4 w-4 text-white" />
              </span>
              <span className="text-white text-[16px]">Modo Foco</span>
            </div>
          </div>
        </div>

        <div className="bg-[#1C1C1E] mx-4 mt-6 rounded-2xl overflow-hidden">
          <button type="button" onClick={() => setView('battery')} className={`${rowBaseClass} border-b border-zinc-800/50`}>
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

          <div className={`${rowBaseClass} border-b border-zinc-800/50`}>
            <div className="flex items-center gap-3 min-w-0">
              <span className={`${iconWrapBaseClass} bg-zinc-500`}>
                <Shield className="h-4 w-4 text-white" />
              </span>
              <span className="text-white text-[16px]">Privacidade e IP</span>
            </div>
          </div>

          <button type="button" onClick={() => setView('accessibility')} className={rowBaseClass}>
            <div className="flex items-center gap-3 min-w-0">
              <span className={`${iconWrapBaseClass} bg-cyan-500`}>
                <Accessibility className="h-4 w-4 text-white" />
              </span>
              <span className="text-white text-[16px]">Acessibilidade</span>
            </div>

            <ChevronRight className="h-4 w-4 text-zinc-400" />
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default AppDefinicoes