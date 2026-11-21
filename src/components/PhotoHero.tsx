import type { ReactNode } from 'react';
import { motion } from 'motion/react';
import { useReduce } from '../lib/hooks';
import { HeroText } from './HeroPanel';
import Photo, { type PhotoName } from './Photo';
import { SampleTag } from './Bits';

const slots = {
  /** A la derecha, por debajo de la zona de la cara. */
  right: 'right-4 top-[44%] w-[min(250px,64%)] sm:right-5 lg:top-[42%]',
  /** Arriba a la derecha (fotos sin cara en esa zona). */
  topRight: 'right-4 top-14 w-[min(230px,58%)] sm:right-5 lg:top-5',
  /** Abajo a la izquierda. */
  bottom: 'bottom-4 left-4 w-[min(290px,76%)] sm:bottom-5 sm:left-5',
};

/** Tarjeta de producto sobre la foto: entra con un muelle suave y luego flota 4px. */
export function FloatingCard({ slot, delay = 1.05, children, className = '' }: { slot: keyof typeof slots; delay?: number; children: ReactNode; className?: string }) {
  const reduce = useReduce();
  return (
    <motion.div
      className={`absolute z-10 ${slots[slot]} ${className}`}
      initial={reduce ? false : { opacity: 0, y: 28, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: 'spring', stiffness: 140, damping: 16, delay }}
    >
      <div className={reduce ? '' : 'card-float'} style={{ animationDelay: slot === 'bottom' ? '0s' : '-1.8s' }}>
        {children}
      </div>
    </motion.div>
  );
}

interface Props {
  eyebrow: string;
  titleLead: string;
  titleAccent: string;
  body?: string;
  actions?: ReactNode;
  photo: PhotoName;
  alt: string;
  position?: string;
  /** Tarjetas de producto (FloatingCard) sobre la foto. */
  children?: ReactNode;
}

/**
 * Hero con foto: panel blanco con el texto + panel con foto a sangre y tarjetas de
 * producto encima. Texto 0–0.5s, foto 0.15s (900ms), tarjetas desde 1.05s.
 */
export default function PhotoHero({ photo, alt, position = '50% 20%', children, ...text }: Props) {
  return (
    <section className="container-site pb-4 pt-3 sm:pt-4">
      <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="panel-hero flex flex-col justify-center lg:py-20">
          <HeroText {...text} />
        </div>
        <div className="relative min-h-[660px] overflow-hidden rounded-hero bg-surface2 lg:min-h-[640px]">
          <Photo name={photo} alt={alt} priority delay={0.15} sizes="(min-width: 1024px) 520px, 100vw" position={position} className="absolute inset-0" />
          <SampleTag className="absolute left-4 top-4 z-10 !bg-surface !text-ink" />
          {children}
        </div>
      </div>
    </section>
  );
}
