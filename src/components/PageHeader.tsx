import { motion } from 'framer-motion'

export default function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string
  title: string
  intro?: string
}) {
  return (
    <header className="mx-auto max-w-[1280px] px-6 pt-36 pb-14 md:px-10 md:pt-44">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-herb"
      >
        {eyebrow}
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        className="font-display max-w-4xl text-5xl leading-[1.02] md:text-7xl"
      >
        {title}
      </motion.h1>
      {intro && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.18 }}
          className="mt-7 max-w-2xl text-lg leading-relaxed text-fg-soft"
        >
          {intro}
        </motion.p>
      )}
    </header>
  )
}
