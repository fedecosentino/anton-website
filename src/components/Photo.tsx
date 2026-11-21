import { motion } from 'motion/react';
import manifest from '../assets/photos/manifest.json';
import { useReduce } from '../lib/hooks';

const urls = import.meta.glob('../assets/photos/*.{webp,jpg}', { eager: true, query: '?url', import: 'default' }) as Record<string, string>;
const url = (file: string) => urls[`../assets/photos/${file}`];

export type PhotoName = keyof typeof manifest;

interface Props {
  name: PhotoName;
  alt: string;
  /** Atributo sizes: ancho real con el que se pinta la foto. */
  sizes: string;
  /** Foto del hero: sin lazy y con prioridad de descarga. */
  priority?: boolean;
  /** Clases del marco (tamaño, radio, posición). */
  className?: string;
  /** object-position para proteger la zona importante del recorte. */
  position?: string;
  /** Retraso de la entrada (solo con priority, que entra al cargar). */
  delay?: number;
}

/**
 * Foto local con WebP + respaldo JPG, dos tamaños por srcset y width/height explícitos.
 * Entra con un leve zoom (1.06 → 1) y fundido en 900ms; sin movimiento con reduced-motion.
 */
export default function Photo({ name, alt, sizes, priority = false, className = '', position = '50% 50%', delay = 0 }: Props) {
  const reduce = useReduce();
  const meta = manifest[name];
  const largest = meta.sizes[0];
  const srcSet = (ext: 'webp' | 'jpg') => meta.sizes.map((s) => `${url(`${name}-${s.width}.${ext}`)} ${s.width}w`).join(', ');
  const from = { opacity: 0, scale: 1.06 };
  const to = { opacity: 1, scale: 1 };
  const transition = { duration: 0.9, ease: [0.2, 0.7, 0.2, 1] as const, delay };
  const motionProps = reduce
    ? { initial: false as const }
    : priority
      ? { initial: from, animate: to, transition }
      : { initial: from, whileInView: to, viewport: { once: true, amount: 0.2 }, transition };

  return (
    <div className={`photo-zoom overflow-hidden ${className}`}>
      <motion.div className="h-full w-full" {...motionProps}>
        <picture className="block h-full w-full">
          <source type="image/webp" srcSet={srcSet('webp')} sizes={sizes} />
          <img
            src={url(`${name}-${largest.width}.jpg`)}
            srcSet={srcSet('jpg')}
            sizes={sizes}
            width={largest.width}
            height={largest.height}
            alt={alt}
            loading={priority ? 'eager' : 'lazy'}
            decoding={priority ? 'sync' : 'async'}
            {...(priority ? ({ fetchpriority: 'high' } as Record<string, string>) : {})}
            className="h-full w-full object-cover"
            style={{ objectPosition: position }}
          />
        </picture>
      </motion.div>
    </div>
  );
}

/** Hueco señalado para una foto que todavía no existe (fondo rayado + descripción visible). */
export function PhotoSlot({ label, className = '' }: { label: string; className?: string }) {
  return (
    <div role="img" aria-label={label} className={`photo-slot grid place-items-center p-8 ${className}`}>
      <p className="max-w-[260px] rounded-2xl bg-surface px-5 py-4 text-center font-mono text-[12.5px] uppercase leading-relaxed tracking-[0.08em] text-ink">{label}</p>
    </div>
  );
}
