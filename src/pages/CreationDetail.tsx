import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, MapPin, Sprout } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import Plate from '../components/Plate'
import Reveal from '../components/Reveal'
import { creations } from '../data/content'

const ease = [0.22, 1, 0.36, 1] as const

export default function CreationDetail() {
  const { slug } = useParams()
  const index = creations.findIndex((c) => c.slug === slug)
  const c = creations[index]

  if (!c) {
    return (
      <section className="mx-auto max-w-[1280px] px-6 pt-44 pb-32 md:px-10">
        <h1 className="font-display text-5xl">Cette fiche n’existe pas.</h1>
        <Link to="/creations" className="mt-8 inline-block font-semibold text-herb">
          ← Retour aux créations
        </Link>
      </section>
    )
  }

  const next = creations[(index + 1) % creations.length]

  return (
    <article>
      {/* En-tête */}
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute left-1/2 top-24 h-[640px] w-[640px] -translate-x-1/2 rounded-full opacity-25 blur-3xl md:left-auto md:right-0 md:translate-x-0"
          style={{ background: `radial-gradient(circle, ${c.plate.base}, transparent 65%)` }}
        />
        <div className="relative mx-auto grid max-w-[1280px] items-center gap-12 px-6 pt-32 pb-16 md:grid-cols-[1.2fr_1fr] md:px-10 md:pt-40">
          <div>
            <Link to="/creations" className="group mb-8 inline-flex items-center gap-2 text-sm font-semibold text-fg-soft hover:text-herb">
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" /> Toutes les créations
            </Link>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xs font-semibold uppercase tracking-[0.28em] text-herb"
            >
              {c.category} · {c.season} · {c.year}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.05, ease }}
              className="font-display mt-4 text-5xl leading-[1.02] md:text-7xl"
            >
              {c.title}
            </motion.h1>
            <p className="mt-5 flex items-center gap-2 text-fg-soft">
              <MapPin className="h-4 w-4 text-herb" /> {c.place}
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, rotate: -30, scale: 0.9 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            transition={{ duration: 1.2, ease }}
            className="mx-auto w-full max-w-[440px]"
          >
            <Plate plate={c.plate} className="w-full" />
            <p className="mt-3 text-center text-xs text-fg-faint">Illustration — photo du plat à venir</p>
          </motion.div>
        </div>
      </section>

      {/* Fiche technique */}
      <section className="border-y border-line bg-ink-alt">
        <div className="mx-auto grid max-w-[1280px] grid-cols-2 md:grid-cols-4">
          {c.techSheet.map((t, i) => (
            <Reveal key={t.label} delay={i * 0.06} className="border-line px-6 py-8 md:px-10 [&:not(:last-child)]:md:border-r">
              <p className="text-xs uppercase tracking-[0.18em] text-fg-faint">{t.label}</p>
              <p className="font-display mt-2 text-4xl text-herb">{t.value}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Contexte & intention */}
      <section className="mx-auto grid max-w-[1280px] gap-6 px-6 py-20 md:grid-cols-2 md:px-10">
        <Reveal className="h-full">
          <div className="h-full rounded-3xl border border-line p-8 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-copper">Le contexte</p>
            <p className="mt-5 text-lg leading-relaxed text-fg">{c.context}</p>
          </div>
        </Reveal>
        <Reveal delay={0.08} className="h-full">
          <div className="h-full rounded-3xl border border-herb/30 bg-herb-dim p-8 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-herb">L’intention</p>
            <p className="font-display mt-5 text-3xl leading-snug">« {c.intention} »</p>
          </div>
        </Reveal>
      </section>

      {/* Composition */}
      <section className="mx-auto max-w-[1280px] px-6 pb-20 md:px-10">
        <Reveal>
          <h2 className="font-display text-4xl md:text-5xl">Dans l’assiette</h2>
        </Reveal>
        <div className="mt-10 divide-y divide-line border-y border-line">
          {c.components.map((comp, i) => (
            <Reveal key={comp.name} delay={i * 0.04}>
              <div className="grid gap-2 py-6 md:grid-cols-[80px_260px_1fr] md:items-baseline">
                <span className="font-display text-2xl text-fg-faint">{String(i + 1).padStart(2, '0')}</span>
                <p className="font-display text-2xl">{comp.name}</p>
                <p className="leading-relaxed text-fg-soft">{comp.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Étapes */}
      <section className="mx-auto max-w-[1280px] px-6 pb-20 md:px-10">
        <Reveal>
          <h2 className="font-display text-4xl md:text-5xl">De la préparation à l’envoi</h2>
        </Reveal>
        <div className={`mt-10 grid gap-4 sm:grid-cols-2 ${c.steps.length === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-4'}`}>
          {c.steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08} className="h-full">
              <div className="relative h-full rounded-3xl border border-line bg-ink-alt p-7">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-herb text-sm font-bold text-ink">
                  {i + 1}
                </span>
                <p className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-herb">{s.title}</p>
                <p className="mt-2 leading-relaxed text-fg-soft">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Producteurs */}
      {c.producers && (
        <section className="mx-auto max-w-[1280px] px-6 pb-20 md:px-10">
          <Reveal>
            <h2 className="font-display flex items-center gap-3 text-4xl md:text-5xl">
              <Sprout className="h-8 w-8 text-herb" /> Les producteurs
            </h2>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="mt-10 overflow-x-auto rounded-3xl border border-line">
              <table className="w-full min-w-[480px] text-left">
                <thead className="bg-ink-alt text-xs uppercase tracking-[0.18em] text-fg-faint">
                  <tr>
                    <th className="px-6 py-4 font-semibold">Producteur</th>
                    <th className="px-6 py-4 font-semibold">Produit</th>
                    <th className="px-6 py-4 font-semibold">Distance</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {c.producers.map((p) => (
                    <tr key={p.name}>
                      <td className="px-6 py-4 font-semibold">{p.name}</td>
                      <td className="px-6 py-4 text-fg-soft">{p.product}</td>
                      <td className="px-6 py-4 text-herb">{p.distance}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </section>
      )}

      {/* Retour d'expérience */}
      <section className="mx-auto max-w-[1280px] px-6 pb-24 md:px-10">
        <Reveal>
          <div className="rounded-3xl border border-line p-8 md:p-12">
            <h2 className="font-display text-4xl">Ce que j’en retiens</h2>
            <ul className="dish-list mt-6 max-w-3xl text-lg text-fg-soft">
              {c.learnings.map((l) => (
                <li key={l}>{l}</li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>

      {/* Suivante */}
      <Link
        to={`/creations/${next.slug}`}
        className="group block border-t border-line transition-colors hover:bg-ink-alt"
      >
        <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-6 px-6 py-12 md:px-10">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-fg-faint">Création suivante</p>
            <p className="font-display mt-2 truncate text-3xl md:text-5xl">{next.title}</p>
          </div>
          <ArrowRight className="h-8 w-8 shrink-0 text-herb transition-transform group-hover:translate-x-2" />
        </div>
      </Link>
    </article>
  )
}
