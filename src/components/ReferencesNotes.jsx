import { motion } from 'framer-motion'
import {
  Book,
  Camera,
  ChevronLeft,
  Edit,
  FileText,
  Globe,
  List,
  Share,
} from 'lucide-react'

const references = [
  {
    type: 'book',
    text: 'Bijker, W. E., & Pinch, T. J. (1987). The social construction of technological systems. MIT Press.',
  },
  {
    type: 'report',
    text: 'GlobalWebIndex. (2023). GWI flagship report: Media consumption trends 2023. GWI.',
  },
  {
    type: 'report',
    text: 'Goldman Sachs. (2023). The creator economy could approach half a trillion dollars by 2027.',
  },
  {
    type: 'report',
    text: 'GSMA. (2023). Mobile gender gap report 2023.',
  },
  {
    type: 'site',
    text: 'ITU. (2024). Digital development dashboard 2024.',
  },
  {
    type: 'book',
    text: 'Jenkins, H. (2006). Convergence culture: Where old and new media collide. NYU Press.',
  },
  {
    type: 'book',
    text: 'Marwick, A., & Boyd, D. (2014). Networked privacy. New Media & Society, 16(7), 1051–1067.',
  },
  {
    type: 'book',
    text: 'Pariser, E. (2011). The filter bubble: What the internet is hiding from you. Penguin Press.',
  },
  {
    type: 'site',
    text: 'Statista. (2024). Smartphone users worldwide 2013–2028.',
  },
  {
    type: 'book',
    text: 'Turkle, S. (2011). Alone together: Why we expect more from technology and less from each other. Basic Books.',
  },
  {
    type: 'book',
    text: 'van Dijck, J. (2013). The culture of connectivity: A critical history of social media. Oxford University Press.',
  },
]

const getReferenceIcon = (type) => {
  if (type === 'site') {
    return <Globe size={18} className="text-yellow-500/70 shrink-0 mt-1" />
  }

  if (type === 'report') {
    return <FileText size={18} className="text-yellow-500/70 shrink-0 mt-1" />
  }

  return <Book size={18} className="text-yellow-500/70 shrink-0 mt-1" />
}

const ReferencesNotes = ({ setPhoneState }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="absolute inset-0 w-full h-full bg-[#1C1C1E] flex flex-col z-20 font-sans text-zinc-100 overflow-hidden"
    >
      <header className="bg-[#1C1C1E]/90 backdrop-blur-md pt-14 pb-3 px-4 flex items-center justify-between z-30 sticky top-0 border-b border-zinc-800/50">
        <div
          onClick={() => setPhoneState('home')}
          className="flex items-center text-yellow-500 cursor-pointer"
          role="button"
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              setPhoneState('home')
            }
          }}
        >
          <ChevronLeft size={24} />
          <span className="text-lg">Voltar</span>
        </div>
        <Share size={20} className="text-yellow-500" />
      </header>

      <div className="flex-1 overflow-y-auto px-5 pt-6 pb-32 scrollbar-hide">
        <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">Bibliografia</h1>
        <p className="text-sm text-zinc-500 mb-8 font-medium">Seminário de Ética e Convergência • APA 7ª Edição</p>

        <div className="flex flex-col gap-5">
          {references.map((item, index) => (
            <div
              key={item.text}
              className={`flex gap-4 items-start group pb-5 ${
                index !== references.length - 1 ? 'border-b border-zinc-800/30' : ''
              }`}
            >
              {getReferenceIcon(item.type)}
              <p className="text-[14px] text-zinc-300 leading-relaxed font-light">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 w-full bg-[#1C1C1E]/90 backdrop-blur-xl border-t border-zinc-800 px-6 py-4 pb-8 flex justify-between items-center">
        <div className="flex items-center gap-5">
          <List size={22} className="text-yellow-500" />
          <Camera size={22} className="text-yellow-500" />
        </div>
        <Edit size={22} className="text-yellow-500" />
      </div>
    </motion.div>
  )
}

export default ReferencesNotes
