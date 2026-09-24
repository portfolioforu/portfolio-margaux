import { motion } from 'framer-motion'
import { ArrowRight, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import CreationCard from '../components/CreationCard'
import Plate from '../components/Plate'
import Reveal from '../components/Reveal'
import { creations, experiences, keyFigures, philosophy, profile } from '../data/content'

const ease = [0.22, 1, 0.36, 1] as const

export default function Home() {
  const featured = creations.slice(0, 3)
  const current = experiences[0]

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute -right-40 top-10 h-[720px] w-[720px] rounded-full opacity-30 blur-3xl"
          style={{ background: 'radial-gradient(circle, #3f5a2c 0%, transparent 65%)' }}
        />
        <div className="relative mx-auto grid max-w-[1280px] items-center gap-12 px-6 pt-36 pb-20 md:grid-cols-[1.15fr_1fr] md:px-10 md:pt-44 md:pb-28">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-herb"
            >
              <MapPin className="h-3.5 w-3.5" /> {profile.role} — {profile.city}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease }}
              className="font-display text-[3.4rem] leading-[0.98] md:text-[5.6rem]"
            >
              Cuisine de saison, <em className="text-herb">gestes précis.</em>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="mt-8 max-w-xl text-lg leading-relaxed text-fg-soft"
            >
              {profile.intro}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.38 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Link
                to="/creations"
                className="group inline-flex items-center gap-2 rounded-full bg-herb px-7 py-3.5 font-semibold text-ink transition-colors hover:bg-herb-soft"
              >
                Voir mes créations
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/parcours"
                className="rounded-full border border-line px-7 py-3.5 font-semibold text-fg transition-colors hover:border-fg-soft"
              >
                Mon parcours
              </Link>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-8 flex items-center gap-2.5 text-sm text-fg-soft"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ok opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-ok" />
              </span>
              {profile.status}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -20 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.3, delay: 0.15, ease }}
            className="relative mx-auto w-full max-w-[520px]"
          >
            <Plate plate={creations[2].plate} spin className="w-full" />
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="absolute -bottom-2 left-0 rounded-2xl border border-line bg-ink/85 px-5 py-4 backdrop-blur md:-left-8"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-fg-faint">Actuellement</p>
              <p className="font-display mt-1 text-xl">
                {current.title} · <em className="text-herb">{current.place}</em>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Chiffres clés */}
      <section className="border-y border-line bg-ink-alt">
        <div className="mx-auto grid max-w-[1280px] gap-px md:grid-cols-3">
          {keyFigures.map((f, i) => (
            <Reveal key={f.label} delay={i * 0.08} className="px-6 py-10 md:px-10">
              <p className="font-display text-6xl text-herb md:text-7xl">{f.value}</p>
              <p className="mt-2 text-fg-soft">{f.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Philosophie */}
      <section className="mx-auto max-w-[1280px] px-6 py-24 md:px-10 md:py-32">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-herb">Ma façon de cuisiner</p>
          <h2 className="font-display mt-4 max-w-3xl text-4xl leading-tight md:text-6xl">
            Trois règles qui ne changent pas, même quand la carte change chaque semaine.
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {philosophy.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1} className="h-full">
              <div className="h-full rounded-3xl border border-line p-8">
                <span className="font-display text-5xl text-copper">0{i + 1}</span>
                <h3 className="font-display mt-6 text-3xl">{p.title}</h3>
                <p className="mt-4 leading-relaxed text-fg-soft">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Créations */}
      <section className="mx-auto max-w-[1280px] px-6 pb-24 md:px-10 md:pb-32">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-herb">À la carte</p>
            <h2 className="font-display mt-4 text-4xl md:text-6xl">Créations récentes</h2>
          </Reveal>
          <Link to="/creations" className="group flex items-center gap-2 font-semibold text-herb">
            Toutes les créations ({creations.length})
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {featured.map((c, i) => (
            <CreationCard key={c.slug} c={c} index={i} />
          ))}
        </div>
      </section>
    </>
  )
}
