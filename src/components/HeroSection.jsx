import { motion } from 'framer-motion'

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -20 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  return (
    <header className="min-h-screen bg-gradient-to-br from-primary-900 via-primary-700 to-accent-500 relative overflow-hidden flex items-center">
      {/* Elementos decorativos de fundo */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{
          y: [0, 50, 0],
          x: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 bg-accent-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{
          y: [0, -50, 0],
          x: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Container principal */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Coluna de conteúdo */}
          <motion.div className="space-y-8" variants={itemVariants}>
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-block"
            >
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-2 w-fit">
                <span className="text-white text-sm font-semibold">
                  📱 Fase 3 - Projeto Universitário
                </span>
              </div>
            </motion.div>

            {/* Título principal */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
            >
              Guia de Sobrevivência Ética do <span className="text-accent-300">Smartphone</span>
            </motion.h1>

            {/* Subtítulo */}
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-xl"
            >
              Descubra as melhores práticas para uma utilização consciente, segura e ética do seu smartphone. 
              Um guia interativo para a dimensão profissional e ética.
            </motion.p>

            {/* Botões de ação */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 pt-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-accent-500 hover:bg-accent-600 text-white font-bold rounded-lg transition-all"
              >
                Começar Exploração
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 text-white font-bold rounded-lg transition-all"
              >
                Saber Mais
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10"
            >
              {[
                { number: '5+', label: 'Módulos' },
                { number: '50+', label: 'Boas Práticas' },
                { number: '∞', label: 'Benefícios' },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="text-3xl font-bold text-accent-300">{stat.number}</p>
                  <p className="text-white/70 text-sm">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Coluna de imagem/ilustração */}
          <motion.div
            variants={imageVariants}
            className="hidden lg:flex justify-center items-center"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative w-full max-w-md h-96"
            >
              {/* Smartphone mockup */}
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-3 shadow-2xl border border-white/10">
                <div className="bg-gradient-to-br from-primary-400 to-accent-400 rounded-2xl p-6 h-full flex flex-col justify-center items-center">
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="text-6xl mb-4"
                  >
                    📱
                  </motion.div>
                  <p className="text-white font-bold text-center text-sm">
                    Práticas Conscientes & Seguras
                  </p>
                </div>
              </div>

              {/* Elementos decorativos flutuantes */}
              <motion.div
                className="absolute -top-8 -right-8 w-20 h-20 bg-accent-400 rounded-full opacity-30 blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              <motion.div
                className="absolute -bottom-8 -left-8 w-24 h-24 bg-primary-400 rounded-full opacity-20 blur-xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-white/70 text-sm">Desça para explorar</span>
          <svg className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </header>
  )
}

export default HeroSection
