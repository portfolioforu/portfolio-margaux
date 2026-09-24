import { GraduationCap } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import { education, experiences } from '../data/content'

export default function Parcours() {
  return (
    <>
      <PageHeader
        eyebrow="Parcours"
        title="De commis à cheffe, une maison après l’autre."
        intro="Quatre cuisines, quatre façons de travailler. Chacune m’a appris quelque chose que j’applique encore aujourd’hui."
      />

      <section className="mx-auto grid max-w-[1280px] gap-16 px-6 pb-28 md:grid-cols-[1fr_320px] md:px-10">
        <ol className="relative border-l border-line">
          {experiences.map((e, i) => (
            <li key={e.place} className="relative pb-14 pl-10 last:pb-0">
              <span
                className={`absolute -left-[7px] top-2 h-3.5 w-3.5 rounded-full border-2 ${
                  i === 0 ? 'border-herb bg-herb' : 'border-herb bg-ink'
                }`}
              />
              <Reveal>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-fg-faint">{e.period}</p>
                <h2 className="font-display mt-2 text-3xl md:text-4xl">
                  {e.title} <em className="text-herb">— {e.place}</em>
                </h2>
                <p className="mt-1 text-fg-faint">{e.city}</p>
                <p className="mt-5 max-w-2xl leading-relaxed text-fg-soft">{e.summary}</p>
                <ul className="dish-list mt-5 max-w-2xl text-fg">
                  {e.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </Reveal>
            </li>
          ))}
        </ol>

        <aside className="md:sticky md:top-28 md:self-start">
          <Reveal className="rounded-3xl border border-line bg-ink-alt p-7">
            <div className="flex items-center gap-3 text-herb">
              <GraduationCap className="h-5 w-5" />
              <p className="text-xs font-semibold uppercase tracking-[0.24em]">Formation</p>
            </div>
            <ul className="mt-6 space-y-6">
              {education.map((ed) => (
                <li key={ed.title}>
                  <p className="text-sm text-fg-faint">{ed.period}</p>
                  <p className="font-display text-2xl">{ed.title}</p>
                  <p className="text-sm text-fg-soft">{ed.place}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </aside>
      </section>
    </>
  )
}
