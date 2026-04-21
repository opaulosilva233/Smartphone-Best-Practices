import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const spring = {
  type: 'spring',
  stiffness: 220,
  damping: 24,
}

const BatteryDrain = () => {
  const [battery, setBattery] = useState(100)

  useEffect(() => {
    const timer = setInterval(() => {
      setBattery((prev) => {
        const next = prev - 4
        if (next <= 20) {
          clearInterval(timer)
          return 20
        }
        return next
      })
    }, 90)

    return () => clearInterval(timer)
  }, [])

  const lowBattery = battery <= 20

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={spring}
      className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
    >
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-white">Sustentabilidade</h2>
        <span className="text-sm text-zinc-300">{battery}%</span>
      </div>

      <div className="mt-4">
        <div className="relative h-7 rounded-xl border border-white/10 bg-black/35 p-1">
          <motion.div
            animate={{ width: `${battery}%` }}
            transition={spring}
            className={`h-full rounded-lg ${lowBattery ? 'bg-red-400/85' : 'bg-emerald-400/80'}`}
          />
        </div>
      </div>

      <motion.div
        initial={false}
        animate={{ opacity: lowBattery ? 1 : 0.5, y: lowBattery ? 0 : 4 }}
        transition={spring}
        className="mt-4 rounded-2xl border border-white/10 bg-black/25 p-3 text-sm leading-relaxed text-zinc-200"
      >
        {lowBattery
            ? 'A queda de bateria evidencia o custo material: lítio, e-waste e ciclos agressivos degradam o hardware. Boas práticas: evite sobreaquecimento, mantenha entre 20% e 80% e troque bateria antes de trocar aparelho.'
            : 'Consumo estável. Acompanhe energia para prolongar vida útil do smartphone.'}
      </motion.div>
    </motion.section>
  )
}

export default BatteryDrain
