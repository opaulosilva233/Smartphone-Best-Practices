import { motion } from 'framer-motion'
import { Bell, Heart, MessageCircle, Mic, MicOff, MapPin, MapPinOff, Share2, Shield, Sparkles, UserCircle, Eye, EyeOff } from 'lucide-react'
import { useMemo, useState } from 'react'

const spring = {
  type: 'spring',
  stiffness: 260,
  damping: 24,
}

const stories = [
  {
    key: 'eu-virtual',
    label: 'Eu Virtual',
    gradient: 'from-fuchsia-500 via-rose-500 to-amber-300',
    inner: 'from-zinc-900 via-zinc-800 to-zinc-950',
    icon: UserCircle,
  },
  {
    key: 'meme-econ',
    label: 'Meme Econ.',
    gradient: 'from-cyan-400 via-sky-500 to-indigo-500',
    inner: 'from-zinc-900 via-zinc-800 to-zinc-950',
    icon: Sparkles,
  },
  {
    key: 'activism',
    label: 'Activism',
    gradient: 'from-emerald-400 via-teal-500 to-cyan-500',
    inner: 'from-zinc-900 via-zinc-800 to-zinc-950',
    icon: Shield,
  },
]

const privacyEntries = [
  {
    key: 'tracking',
    label: 'Rastreio',
    description: 'Protege o teu perfil e reduz a personalização invisível.',
    onIcon: Eye,
    offIcon: EyeOff,
  },
  {
    key: 'mic',
    label: 'Microfone',
    description: 'Mantém gravação apenas quando estás em ação.',
    onIcon: Mic,
    offIcon: MicOff,
  },
  {
    key: 'location',
    label: 'Localização em Background',
    description: 'Evita geolocalização contínua quando a app está parada.',
    onIcon: MapPin,
    offIcon: MapPinOff,
  },
]

const defaultPrivacyState = {
  tracking: true,
  mic: true,
  location: true,
}

const Toggle = ({ checked, onChange }) => {
  return (
    <motion.button
      type="button"
      onClick={onChange}
      whileTap={{ scale: 0.96 }}
      className={`relative h-8 w-14 rounded-full border transition-colors ${
        checked ? 'border-emerald-400/50 bg-emerald-400/80' : 'border-zinc-700 bg-zinc-800'
      }`}
    >
      <motion.span
        layout
        transition={spring}
        className={`absolute top-1 h-6 w-6 rounded-full bg-white shadow-[0_8px_24px_rgba(0,0,0,0.35)] ${checked ? 'left-7' : 'left-1'}`}
      />
    </motion.button>
  )
}

const Post = ({ username, avatarLabel, title, caption, children, actions = true, accent }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={spring}
      className="rounded-[1.75rem] border border-zinc-800 bg-zinc-900/85 p-4 shadow-[0_22px_60px_rgba(0,0,0,0.4)] backdrop-blur-xl"
    >
      <header className="flex items-center gap-3">
        <div className={`flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br ${accent} p-0.5`}>
          <div className="flex h-full w-full items-center justify-center rounded-full bg-zinc-950 text-sm font-semibold text-white">
            {avatarLabel}
          </div>
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold text-zinc-100">{username}</p>
          <p className="text-xs text-zinc-400">{title}</p>
        </div>
      </header>

      <div className="mt-4">{children}</div>

      {caption ? <p className="mt-4 text-sm leading-6 text-zinc-300">{caption}</p> : null}

      {actions ? (
        <div className="mt-4 flex items-center justify-between border-t border-zinc-800 pt-3 text-zinc-300">
          <button type="button" className="flex items-center gap-2 rounded-full px-2 py-1 text-sm hover:text-rose-300">
            <Heart className="h-4 w-4" strokeWidth={1.9} aria-hidden="true" />
            Curtir
          </button>
          <button type="button" className="flex items-center gap-2 rounded-full px-2 py-1 text-sm hover:text-sky-300">
            <MessageCircle className="h-4 w-4" strokeWidth={1.9} aria-hidden="true" />
            Responder
          </button>
          <button type="button" className="flex items-center gap-2 rounded-full px-2 py-1 text-sm hover:text-emerald-300">
            <Share2 className="h-4 w-4" strokeWidth={1.9} aria-hidden="true" />
            Partilhar
          </button>
        </div>
      ) : null}
    </motion.article>
  )
}

const AppSocial = ({ onBack }) => {
  const [privacy, setPrivacy] = useState(defaultPrivacyState)

  const privacyConfig = useMemo(
    () =>
      privacyEntries.map((item) => ({
        ...item,
        enabled: privacy[item.key],
      })),
    [privacy],
  )

  const toggleSetting = (key) => {
    setPrivacy((current) => ({ ...current, [key]: !current[key] }))
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 18 }}
      transition={{ duration: 0.28, ease: 'easeOut' }}
      className="relative h-full overflow-hidden rounded-[2.2rem] bg-zinc-950 text-zinc-100"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(39,39,42,0.8),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(34,197,94,0.12),transparent_30%),radial-gradient(circle_at_20%_90%,rgba(14,165,233,0.12),transparent_28%)]" />

      <header className="sticky top-0 z-30 flex items-center justify-between border-b border-zinc-800/80 bg-zinc-950/90 px-4 py-4 backdrop-blur-xl">
        <button
          type="button"
          onClick={onBack}
          className="rounded-full border border-zinc-800 bg-zinc-900/90 px-3.5 py-2 text-sm font-medium text-zinc-200 transition hover:border-zinc-700 hover:bg-zinc-800"
        >
          &lt; Voltar
        </button>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-100">Social Feed</p>
        <button
          type="button"
          aria-label="Notificações"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900/90 text-zinc-100 transition hover:border-zinc-700 hover:bg-zinc-800"
        >
          <Bell size={20} strokeWidth={1.9} aria-hidden="true" />
        </button>
      </header>

      <div className="scrollbar-hide h-[calc(100%-4.25rem)] overflow-y-auto px-4 pb-6 pt-4">
        <section className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
          {stories.map((story) => {
            const StoryIcon = story.icon

            return (
              <button key={story.key} type="button" className="flex w-20 shrink-0 flex-col items-center gap-2 text-center">
                <span className={`flex h-16 w-16 rounded-full bg-gradient-to-br ${story.gradient} p-[2px] shadow-[0_10px_28px_rgba(0,0,0,0.35)]`}>
                  <span className={`flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br ${story.inner}`}>
                    <StoryIcon className="h-7 w-7 text-white/95" strokeWidth={1.9} aria-hidden="true" />
                  </span>
                </span>
                <span className="text-[11px] font-medium leading-tight text-zinc-300">{story.label}</span>
              </button>
            )
          })}
        </section>

        <div className="mt-4 space-y-4 pb-10">
          <Post
            username="@sherry_turkle"
            avatarLabel="ST"
            title="Conversa, identidade e presença digital"
            accent="from-fuchsia-500 via-rose-500 to-amber-300"
            caption='Na era digital, a construção do nosso "Eu" virtual exige validação constante. Editamos e projetamos apenas os nossos melhores momentos para uma plateia invisível. #Identidade #FOMO'
          >
            <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.22),transparent_35%),linear-gradient(135deg,rgba(255,255,255,0.12),rgba(24,24,27,0.75))] p-5 shadow-[0_24px_60px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
              <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-white/10 blur-2xl" />
              <div className="absolute bottom-0 left-0 h-20 w-20 rounded-full bg-fuchsia-300/10 blur-2xl" />
              <p className="relative max-w-[12ch] text-3xl font-light italic leading-[1.05] tracking-tight text-white sm:text-[2.45rem]">
                O smartphone é um espelho e um palco.
              </p>
            </div>
          </Post>

          <section className="rounded-[1.75rem] border border-zinc-800 bg-zinc-900 p-4 shadow-[0_22px_60px_rgba(0,0,0,0.35)]">
            <div className="flex items-start gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-zinc-800 text-zinc-100">
                <Shield className="h-5 w-5" strokeWidth={1.9} aria-hidden="true" />
              </div>
              <div className="min-w-0 flex-1">
                <h2 className="text-base font-semibold text-zinc-100">🔒 Revisão de Privacidade e IP</h2>
                <p className="mt-1 text-sm text-zinc-400">Protege a tua pegada digital antes de publicares.</p>
              </div>
            </div>

            <div className="mt-4 divide-y divide-zinc-800/50 rounded-3xl border border-zinc-800/50 bg-zinc-950/60 px-4">
              {privacyConfig.map((item) => {
                const ItemIcon = item.enabled ? item.onIcon : item.offIcon

                return (
                  <div key={item.key} className="flex items-center justify-between gap-3 py-3">
                    <div className="flex min-w-0 items-start gap-3">
                      <span className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl ${item.enabled ? 'bg-emerald-400/15 text-emerald-300' : 'bg-zinc-800 text-zinc-400'}`}>
                        <ItemIcon className="h-4 w-4" strokeWidth={1.9} aria-hidden="true" />
                      </span>
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-zinc-100">{item.label}</p>
                        <p className="mt-0.5 text-xs leading-relaxed text-zinc-500">{item.description}</p>
                      </div>
                    </div>
                    <Toggle checked={item.enabled} onChange={() => toggleSetting(item.key)} />
                  </div>
                )
              })}
            </div>
          </section>

          <Post
            username="@creator_hub"
            avatarLabel="CH"
            title="Creator economy e propriedade intelectual"
            accent="from-cyan-400 via-sky-500 to-indigo-500"
            caption='A barreira entre consumir e produzir cultura desapareceu. Com mais de 200 milhões de criadores ativos, como protegemos a Propriedade Intelectual na era do remix? #CreatorEconomy'
          >
            <div className="relative overflow-hidden rounded-[1.5rem] border border-cyan-400/20 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.2),transparent_40%),linear-gradient(145deg,rgba(24,24,27,0.95),rgba(9,9,11,0.98))] p-5 shadow-[0_20px_55px_rgba(0,0,0,0.35)]">
              <div className="absolute inset-x-8 top-5 h-px bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent" />
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl" />
              <div className="relative flex items-end justify-between gap-4">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.24em] text-cyan-200/75">Volume de mercado</p>
                  <p className="mt-2 text-5xl font-semibold tracking-tight text-white sm:text-6xl">250 Mil Milhões $</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-right">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-400">Creators ativos</p>
                  <p className="mt-1 text-sm font-semibold text-zinc-100">200M+</p>
                </div>
              </div>
              <div className="relative mt-5 grid grid-cols-3 gap-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-3">
                  <p className="text-xs text-zinc-400">Licenças</p>
                  <p className="mt-1 text-sm font-semibold text-white">Gestão ativa</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-3">
                  <p className="text-xs text-zinc-400">Remix</p>
                  <p className="mt-1 text-sm font-semibold text-white">Distribuição</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-3">
                  <p className="text-xs text-zinc-400">IP</p>
                  <p className="mt-1 text-sm font-semibold text-white">Proteção</p>
                </div>
              </div>
            </div>
          </Post>
        </div>
      </div>
    </motion.div>
  )
}

export default AppSocial