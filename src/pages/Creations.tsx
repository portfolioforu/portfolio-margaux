import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import CreationCard from '../components/CreationCard'
import PageHeader from '../components/PageHeader'
import { creations, type Creation } from '../data/content'

const filters: ('Tout' | Creation['category'])[] = ['Tout', 'Entrée', 'Plat', 'Dessert', 'Menu']

export default function Creations() {
  const [active, setActive] = useState<(typeof filters)[number]>('Tout')
  const list = active === 'Tout' ? creations : creations.filter((c) => c.category === active)

  return (
    <>
      <PageHeader
        eyebrow="Créations"
        title="Des assiettes, et tout ce qu’il y a derrière."
        intro="Chaque fiche détaille l’intention, les éléments, les étapes de préparation, les producteurs et les chiffres du plat."
      />

      <section className="mx-auto max-w-[1280px] px-6 pb-28 md:px-10">
        <div className="mb-10 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`relative rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                active === f ? 'text-ink' : 'text-fg-soft hover:text-fg'
              }`}
            >
              {active === f && (
                <motion.span layoutId="filter-pill" className="absolute inset-0 rounded-full bg-herb" />
              )}
              <span className="relative">{f}</span>
            </button>
          ))}
        </div>

        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {list.map((c, i) => (
              <motion.div
                key={c.slug}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35 }}
              >
                <CreationCard c={c} index={i} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </>
  )
}
