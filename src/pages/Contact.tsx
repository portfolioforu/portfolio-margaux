import { Camera, Link2, Mail, MapPin, Phone } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import { profile } from '../data/content'

export default function Contact() {
  const items = [
    { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: 'Téléphone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
    { icon: Link2, label: 'LinkedIn', value: 'Voir mon profil', href: profile.linkedin },
    { icon: Camera, label: 'Instagram', value: 'Mes assiettes au quotidien', href: profile.instagram },
  ]

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Parlons de votre prochaine carte."
        intro="Poste de cheffe, ouverture de restaurant, consulting sur une carte ou un menu : je réponds sous 48 heures."
      />

      <section className="mx-auto grid max-w-[1280px] gap-6 px-6 pb-28 md:grid-cols-[1fr_380px] md:px-10">
        <div className="grid gap-4 sm:grid-cols-2">
          {items.map((it, i) => (
            <Reveal key={it.label} delay={i * 0.06} className="h-full">
              <a
                href={it.href}
                target={it.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener"
                className="group flex h-full flex-col rounded-3xl border border-line bg-ink-alt p-7 transition-colors hover:border-herb/50"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-herb-dim text-herb">
                  <it.icon className="h-5 w-5" />
                </span>
                <p className="mt-6 text-xs uppercase tracking-[0.2em] text-fg-faint">{it.label}</p>
                <p className="mt-1 break-words text-lg font-semibold group-hover:text-herb">{it.value}</p>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="h-full">
          <div className="flex h-full flex-col justify-between rounded-3xl border border-herb/30 bg-herb-dim p-8">
            <div>
              <p className="flex items-center gap-2.5 text-sm font-semibold text-herb">
                <span className="h-2.5 w-2.5 rounded-full bg-ok" /> Disponibilité
              </p>
              <p className="font-display mt-4 text-3xl leading-snug">{profile.status}</p>
            </div>
            <p className="mt-10 flex items-center gap-2 text-fg-soft">
              <MapPin className="h-4 w-4 text-herb" /> Basée à {profile.city}, mobile en Auvergne-Rhône-Alpes
            </p>
          </div>
        </Reveal>
      </section>
    </>
  )
}
