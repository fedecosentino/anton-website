import { useId } from 'react';

type Kind = 'rings' | 'dots' | 'lines';

/**
 * Trama decorativa para bloques con fondo de color. SVG en currentColor (hereda la
 * tinta del bloque) con opacidad baja, sin degradados. Siempre aria-hidden.
 */
export default function Pattern({ kind = 'rings', className = '', opacity }: { kind?: Kind; className?: string; opacity?: number }) {
  const id = useId();
  if (kind === 'rings') {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 200 200"
        className={`pointer-events-none absolute -right-[18%] top-1/2 h-[170%] min-h-[520px] -translate-y-1/2 ${className}`}
        style={{ opacity: opacity ?? 0.16 }}
        fill="none"
        stroke="currentColor"
      >
        {[16, 30, 44, 58, 72, 86, 99].map((r) => (
          <circle key={r} cx="100" cy="100" r={r} strokeWidth="1.4" vectorEffect="non-scaling-stroke" />
        ))}
      </svg>
    );
  }
  return (
    <svg aria-hidden="true" className={`pointer-events-none absolute inset-0 h-full w-full ${className}`} style={{ opacity: opacity ?? (kind === 'dots' ? 0.2 : 0.1) }}>
      <defs>
        {kind === 'dots' ? (
          <pattern id={id} width="26" height="26" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.3" fill="currentColor" />
          </pattern>
        ) : (
          <pattern id={id} width="22" height="22" patternUnits="userSpaceOnUse" patternTransform="rotate(35)">
            <line x1="0" y1="0" x2="0" y2="22" stroke="currentColor" strokeWidth="1.2" />
          </pattern>
        )}
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}
