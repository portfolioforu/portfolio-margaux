import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link, NavLink, useLocation } from 'react-router-dom'

const links = [
  { to: '/', label: 'Accueil', end: true },
  { to: '/parcours', label: 'Parcours' },
  { to: '/savoir-faire', label: 'Savoir-faire' },
  { to: '/creations', label: 'Créations' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? 'border-b border-line bg-ink/90 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-4 md:px-10">
        <Link to="/" className="font-display text-2xl leading-none">
          Margaux <em className="text-herb">Vidal</em>
        </Link>

        <ul className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.end}
                className={({ isActive }) =>
                  `relative text-[0.95rem] font-medium transition-colors hover:text-herb ${
                    isActive ? 'text-herb' : 'text-fg-soft'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {l.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute -bottom-1.5 left-0 h-px w-full bg-herb"
                      />
                    )}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        <Link
          to="/contact"
          className="hidden rounded-full bg-herb px-5 py-2 text-sm font-semibold text-ink transition-colors hover:bg-herb-soft md:inline-block"
        >
          Me contacter
        </Link>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={open}
        >
          <span className={`h-0.5 w-6 bg-fg transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`h-0.5 w-6 bg-fg transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`h-0.5 w-6 bg-fg transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden px-6 md:hidden"
          >
            {[...links, { to: '/contact', label: 'Me contacter', end: false }].map((l) => (
              <li key={l.to} className="border-t border-line">
                <NavLink
                  to={l.to}
                  end={l.end}
                  className={({ isActive }) =>
                    `font-display block py-4 text-2xl ${isActive ? 'text-herb' : 'text-fg'}`
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
