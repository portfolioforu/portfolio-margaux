import { ChefHat, LineChart, Users } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import { skillGroups } from '../data/content'

const icons = [ChefHat, LineChart, Users]

export default function SavoirFaire() {
  return (
    <>
      <PageHeader
        eyebrow="Savoir-faire"
        title="Ce que je sais faire, en cuisine et autour."
        intro="Tenir un poste, tenir des comptes, tenir une équipe : un poste de cheffe demande les trois."
      />

      <section className="mx-auto max-w-[1280px] space-y-8 px-6 pb-28 md:px-10">
        {skillGroups.map((g, gi) => {
          const Icon = icons[gi]
          return (
            <Reveal key={g.title}>
              <div className="grid gap-10 rounded-3xl border border-line bg-ink-alt p-8 md:grid-cols-[300px_1fr] md:p-12">
                <div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-herb-dim text-herb">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h2 className="font-display mt-6 text-4xl">{g.title}</h2>
                  <p className="mt-3 leading-relaxed text-fg-soft">{g.intro}</p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {g.items.map((it) => (
                    <div key={it.name} className="min-w-0 rounded-2xl border border-line p-5">
                      <p className="font-semibold">{it.name}</p>
                      <p className="mt-1.5 text-[0.95rem] leading-relaxed text-fg-soft">{it.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          )
        })}
      </section>
    </>
  )
}
