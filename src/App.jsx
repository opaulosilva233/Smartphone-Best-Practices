import { motion } from 'framer-motion'
import HeroSection from './components/HeroSection'

function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen"
    >
      <HeroSection />
      
      {/* Placeholder para futuras secções */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-20 px-4 bg-white"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Conteúdo em Desenvolvimento
          </h2>
          <p className="text-lg text-slate-600">
            Fase 3 do projeto universitário - Boas Práticas de Smartphones
          </p>
        </div>
      </motion.section>
    </motion.div>
  )
}

export default App
