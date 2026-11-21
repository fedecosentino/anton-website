import { useRef } from 'react';
import { useInView } from 'motion/react';

/**
 * Tres anillos concéntricos (CSS). Al entrar en pantalla laten dos veces y se asientan
 * en reposo: cada pasada dura menos de 5 s (WCAG 2.2.2). Si salen y vuelven a entrar,
 * se repite la pasada.
 */
export default function SignalRings() {
  const ref = useRef<HTMLDivElement>(null);
  const live = useInView(ref, { amount: 0.3 });
  return (
    <div ref={ref} aria-hidden="true" className={`pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit] ${live ? 'rings-live' : ''}`}>
      <span className="signal-ring" style={{ ['--d' as string]: '0s', ['--s' as string]: 0.55 }} />
      <span className="signal-ring" style={{ ['--d' as string]: '0.3s', ['--s' as string]: 0.85 }} />
      <span className="signal-ring" style={{ ['--d' as string]: '0.6s', ['--s' as string]: 1.15 }} />
    </div>
  );
}
