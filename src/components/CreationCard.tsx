import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Creation } from '../data/content'
import Plate from './Plate'

export default function CreationCard({ c, index = 0 }: { c: Creation; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="h-full"
    >
      <Link
        to={`/creations/${c.slug}`}
        className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-ink-alt transition-colors hover:border-herb/50"
      >
        <div className="relative flex aspect-[5/4] items-center justify-center overflow-hidden bg-surface">
          <div
            className="absolute inset-0 opacity-40 transition-opacity duration-500 group-hover:opacity-70"
            style={{ background: `radial-gradient(circle at 50% 55%, ${c.plate.base}55, transparent 65%)` }}
          />
          <Plate
            plate={c.plate}
            className="relative w-[68%] transition-transform duration-700 ease-out group-hover:scale-105 group-hover:rotate-12"
          />
          <span className="absolute left-4 top-4 rounded-full bg-ink/70 px-3 py-1 text-xs font-semibold text-fg-soft backdrop-blur">
            {c.category} · {c.season}
          </span>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <h3 className="font-display text-2xl leading-tight">{c.title}</h3>
          <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-fg-soft">{c.short}</p>
          <div className="mt-5 flex items-center justify-between text-sm">
            <span className="text-fg-faint">
              {c.place} · {c.year}
            </span>
            <span className="flex items-center gap-1 font-semibold text-herb">
              Voir la fiche
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
