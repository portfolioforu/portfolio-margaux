import { Link } from 'react-router-dom'
import { profile } from '../data/content'

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-[1280px] px-6 py-14 md:px-10">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
          <div>
            <p className="font-display text-4xl md:text-5xl">
              Une table à monter <em className="text-herb">ensemble</em> ?
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-block rounded-full border border-herb px-6 py-2.5 text-sm font-semibold text-herb transition-colors hover:bg-herb hover:text-ink"
            >
              Écrire à {profile.firstName}
            </Link>
          </div>
          <p className="max-w-xs text-sm text-fg-faint">
            Profil fictif présenté à titre de démonstration : personnes, établissements et chiffres sont inventés.
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-6 text-sm text-fg-faint sm:flex-row sm:justify-between">
          <span>
            © {new Date().getFullYear()} {profile.name} — {profile.role}
          </span>
          <span>
            Portfolio créé par{' '}
            <a
              href="https://portfolio-for-u.fr"
              target="_blank"
              rel="noopener"
              className="font-semibold text-herb-soft hover:underline"
            >
              Portfolio For U
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}
