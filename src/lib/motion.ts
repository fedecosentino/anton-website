import type { Transition, Variants } from 'motion/react';

export const EASE = [0.2, 0.7, 0.2, 1] as const;

export const rise: Transition = { duration: 0.75, ease: EASE };

/** Entrada de sección: sube 24px, 600ms. */
export const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export const staggerParent: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

/** Props para un bloque que entra al verse (o queda fijo con reduced motion). */
export function inViewProps(reduce: boolean, tall = false) {
  // tall: rejillas que en móvil se apilan y miden varias pantallas; con "20% visible"
  // tardarían demasiado en aparecer, así que entran en cuanto asoman 120px.
  const viewport = tall ? { once: true, amount: 'some' as const, margin: '0px 0px -120px 0px' } : { once: true, amount: 0.2 };
  return reduce ? { initial: false as const, animate: 'visible' } : { initial: 'hidden', whileInView: 'visible', viewport };
}
