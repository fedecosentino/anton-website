import { useRef, type ReactNode } from 'react';
import { motion, useInView } from 'motion/react';
import { useReduce } from '../lib/hooks';
import { inViewProps, sectionVariants, staggerParent } from '../lib/motion';

/** Bloque que entra al 20% de visibilidad: sube 24px en 600ms, una sola vez. */
export default function Reveal({ children, className = '', as = 'div', id }: { children: ReactNode; className?: string; as?: 'div' | 'section'; id?: string }) {
  const reduce = useReduce();
  const Comp = as === 'section' ? motion.section : motion.div;
  return (
    <Comp id={id} className={className} variants={sectionVariants} {...inViewProps(reduce)}>
      {children}
    </Comp>
  );
}

/** Contenedor que escalona la entrada de sus BentoCard (80ms entre ellas). */
export function StaggerGrid({ children, className = '' }: { children: ReactNode; className?: string }) {
  const reduce = useReduce();
  return (
    <motion.div className={className} variants={staggerParent} {...inViewProps(reduce, true)}>
      {children}
    </motion.div>
  );
}

/** Renderiza children(activo) y activa cuando el bloque entra en pantalla. */
export function InView({ children, className = '' }: { children: (active: boolean) => ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const active = useInView(ref, { once: true, amount: 0.5 });
  return (
    <div ref={ref} className={className}>
      {children(active)}
    </div>
  );
}
