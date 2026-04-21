import { motion } from 'framer-motion'

const references = [
  'Bijker, W. E., & Pinch, T. J. (1987). The social construction of technological systems. MIT Press.',
  'GlobalWebIndex. (2023). GWI flagship report: Media consumption trends 2023. GWI.',
  'Goldman Sachs. (2023). The creator economy could approach half a trillion dollars by 2027.',
  'GSMA. (2023). Mobile gender gap report 2023.',
  'ITU. (2024). Digital development dashboard 2024.',
  'Jenkins, H. (2006). Convergence culture: Where old and new media collide. NYU Press.',
  'Marwick, A., & Boyd, D. (2014). Networked privacy. New Media & Society, 16(7), 1051–1067.',
  'Pariser, E. (2011). The filter bubble: What the internet is hiding from you. Penguin Press.',
  'Statista. (2024). Smartphone users worldwide 2013–2028.',
  'Turkle, S. (2011). Alone together: Why we expect more from technology and less from each other. Basic Books.',
  'van Dijck, J. (2013). The culture of connectivity: A critical history of social media. Oxford University Press.',
]

const ReferencesNotes = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="rounded-3xl border border-amber-200/50 bg-gradient-to-b from-amber-50 to-amber-100 p-4 text-zinc-800 shadow-inner"
    >
      <h2 className="text-lg font-semibold">Referências (APA 7.ª edição)</h2>
      <div className="mt-3 space-y-2 text-[13px] leading-relaxed">
        {references.map((item) => (
          <p key={item} className="rounded-xl border border-amber-200/80 bg-white/60 p-2.5">
            {item}
          </p>
        ))}
      </div>
    </motion.section>
  )
}

export default ReferencesNotes
