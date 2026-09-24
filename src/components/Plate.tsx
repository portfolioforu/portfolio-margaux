import { useId } from 'react'
import type { PlateStyle } from '../data/content'

// Illustration vectorielle d'une assiette vue du dessus.
// Sert de visuel en attendant les vraies photos du client.
export default function Plate({
  plate,
  className = '',
  spin = false,
}: {
  plate: PlateStyle
  className?: string
  spin?: boolean
}) {
  const id = useId().replace(/:/g, '')
  const { base, accent, elements } = plate

  return (
    <svg viewBox="0 0 200 200" className={className} role="img" aria-label="Illustration de l’assiette">
      <defs>
        <radialGradient id={`rim-${id}`} cx="42%" cy="38%" r="70%">
          <stop offset="0%" stopColor="#fbfaf5" />
          <stop offset="70%" stopColor="#e9e6dc" />
          <stop offset="100%" stopColor="#cfcabb" />
        </radialGradient>
        <radialGradient id={`well-${id}`} cx="45%" cy="40%" r="65%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#ece9df" />
        </radialGradient>
        <filter id={`shadow-${id}`} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="6" stdDeviation="7" floodColor="#000" floodOpacity="0.45" />
        </filter>
      </defs>

      <circle cx="100" cy="100" r="92" fill={`url(#rim-${id})`} filter={`url(#shadow-${id})`} />
      <circle cx="100" cy="100" r="66" fill={`url(#well-${id})`} stroke="#dcd7ca" strokeWidth="1" />

      <g className={spin ? 'spin-slow' : ''} style={{ transformOrigin: '100px 100px' }}>
        {elements === 'crescent' && (
          <>
            <path d="M60 118 A44 44 0 0 1 140 82 A36 36 0 0 0 60 118 Z" fill={base} opacity="0.92" />
            <ellipse cx="112" cy="104" rx="20" ry="9" fill="#e6a189" transform="rotate(-24 112 104)" />
            <ellipse cx="92" cy="96" rx="14" ry="7" fill="#e9ae98" transform="rotate(-24 92 96)" />
            {[70, 84, 128, 136].map((x, i) => (
              <circle key={i} cx={x} cy={i % 2 ? 122 : 88} r="3.2" fill={accent} />
            ))}
            <circle cx="120" cy="124" r="6" fill="#f6f1e6" stroke="#e2dccd" />
          </>
        )}

        {elements === 'stack' && (
          <>
            <path d="M58 112 Q100 140 142 108 Q124 132 100 134 Q74 134 58 112 Z" fill={base} opacity="0.85" />
            <rect x="76" y="80" width="46" height="24" rx="8" fill="#e1b98a" transform="rotate(-14 99 92)" />
            <rect x="80" y="86" width="40" height="5" rx="2" fill="#c98d56" transform="rotate(-14 99 92)" />
            <circle cx="126" cy="80" r="9" fill="#9a6a3d" />
            <circle cx="68" cy="92" r="7" fill="#b88550" />
            <circle cx="74" cy="80" r="4" fill={accent} />
            <circle cx="134" cy="98" r="4" fill={accent} />
          </>
        )}

        {elements === 'leaf' && (
          <>
            {[0, 60, 120, 180, 240, 300].map((a) => (
              <path
                key={a}
                d="M100 100 Q112 72 100 48 Q88 72 100 100 Z"
                fill={a % 120 === 0 ? base : '#6f9a58'}
                opacity="0.9"
                transform={`rotate(${a} 100 100)`}
              />
            ))}
            <circle cx="100" cy="100" r="11" fill={accent} />
            <circle cx="100" cy="100" r="5" fill="#f4f1e4" />
          </>
        )}

        {elements === 'dots' && (
          <>
            <path d="M62 100 Q100 70 138 100 Q100 116 62 100 Z" fill={base} opacity="0.88" />
            <path d="M70 99 Q100 80 130 99" stroke="#c9d4dc" strokeWidth="2" fill="none" opacity="0.8" />
            {[
              [76, 120, 7],
              [96, 126, 6],
              [118, 122, 7.5],
              [134, 114, 5],
              [84, 78, 4],
            ].map(([x, y, r], i) => (
              <circle key={i} cx={x} cy={y} r={r} fill={i % 2 ? '#c8475a' : accent} opacity="0.95" />
            ))}
            {[70, 88, 112, 130].map((x, i) => (
              <circle key={i} cx={x} cy={134 - (i % 2) * 4} r="2.4" fill="#4e7a3f" />
            ))}
          </>
        )}

        {elements === 'swirl' && (
          <>
            <path
              d="M100 60 C140 60 146 110 116 124 C92 136 70 116 80 96 C88 82 110 84 112 100"
              stroke={base}
              strokeWidth="7"
              fill="none"
              strokeLinecap="round"
            />
            <ellipse cx="104" cy="98" rx="18" ry="22" fill="#d9b173" transform="rotate(18 104 98)" />
            <ellipse cx="104" cy="92" rx="8" ry="9" fill="#e9cf9c" transform="rotate(18 104 92)" />
            <circle cx="76" cy="126" r="11" fill={accent} />
            {[64, 70, 82, 128, 134].map((x, i) => (
              <circle key={i} cx={x} cy={i < 3 ? 76 + i * 4 : 126 - i} r="2.2" fill="#6b4a2a" />
            ))}
          </>
        )}

        {elements === 'ring' && (
          <>
            <circle cx="100" cy="100" r="40" fill="none" stroke={base} strokeWidth="10" opacity="0.8" />
            {Array.from({ length: 12 }).map((_, i) => {
              const a = (i / 12) * Math.PI * 2
              return (
                <circle
                  key={i}
                  cx={100 + Math.cos(a) * 40}
                  cy={100 + Math.sin(a) * 40}
                  r={i % 3 === 0 ? 6 : 3.5}
                  fill={i % 3 === 0 ? accent : '#e9a770'}
                />
              )
            })}
            <circle cx="100" cy="100" r="16" fill="#e7dcc2" />
            <circle cx="100" cy="100" r="7" fill={base} opacity="0.7" />
          </>
        )}
      </g>
    </svg>
  )
}
