import { useCallback, useEffect, useRef } from 'react';
import { stagger, useAnimate, type AnimationSequence } from 'motion/react';
import { useReduce } from '../lib/hooks';

const LETTERS = ['A', 'N', 'T', 'O', 'N'];
const MID = (LETTERS.length - 1) / 2;
const EASE = [0.2, 0.7, 0.2, 1] as const;

// Tarjetas del mazo, de abajo arriba: los dos teal de la marca.
const CARDS = ['#006B5C', '#00E5C3', '#006B5C', '#00E5C3'];
const FAN = [
  { rotate: -36, x: '-26%', y: '8%' },
  { rotate: -15, x: '-8%', y: '-16%' },
  { rotate: 15, x: '12%', y: '-14%' },
  { rotate: 36, x: '28%', y: '8%' },
];

/**
 * Secuencia (≈2.8 s): las letras se vuelven bloques → los bloques se recogen en un cuadrado
 * → un mazo de tarjetas teal se abre en abanico y se recoge → el cuadrado se parte en un
 * bloque por letra → cada bloque destella en teal y deja ver su letra.
 * Solo se animan transform y opacity.
 */
const SEQUENCE: AnimationSequence = [
  ['.lg-letter', { opacity: 0 }, { duration: 0.16, at: 0 }],
  ['.lg-block', { opacity: 1, scaleX: 1 }, { duration: 0.16, at: 0 }],
  ['.lg-block', { scaleX: 0, opacity: 0 }, { duration: 0.26, at: 0.3, ease: 'easeIn' }],
  ['.lg-deck', { scale: [0, 1.1, 1], opacity: 1 }, { duration: 0.34, at: 0.42, ease: 'easeOut' }],
  ...FAN.map((f, i) => [`.lg-card-${i}`, f, { duration: 0.36, at: 0.74, ease: EASE }] as AnimationSequence[number]),
  ['.lg-top', { rotate: -20 }, { duration: 0.36, at: 0.74, ease: EASE }],
  ['.lg-card', { rotate: 0, x: '0%', y: '0%' }, { duration: 0.3, at: 1.22, ease: 'easeInOut' }],
  ['.lg-top', { rotate: 0 }, { duration: 0.3, at: 1.22, ease: 'easeInOut' }],
  ['.lg-deck', { scale: 0, opacity: 0 }, { duration: 0.2, at: 1.52, ease: 'easeIn' }],
  ['.lg-block', { scaleX: 1, opacity: 1 }, { duration: 0.28, at: 1.54, delay: stagger(0.04, { from: 'center' }), ease: EASE }],
  ['.lg-flash', { opacity: 1 }, { duration: 0.1, at: 1.98, delay: stagger(0.11) }],
  ['.lg-letter', { opacity: 1 }, { duration: 0.12, at: 2.1, delay: stagger(0.11) }],
  ['.lg-block', { opacity: 0 }, { duration: 0.12, at: 2.12, delay: stagger(0.11) }],
  ['.lg-flash', { opacity: 0 }, { duration: 0.01, at: 2.85 }],
];

const rand = (min: number, max: number) => min + Math.random() * (max - min);

/**
 * Logo de ANTON con la animación de bloques. Se dispara sola de vez en cuando, a intervalos
 * aleatorios, y al pasar el mouse por encima; nunca con prefers-reduced-motion.
 */
export default function AnimatedLogo({ className = '' }: { className?: string }) {
  const reduce = useReduce();
  const [scope, animate] = useAnimate<HTMLSpanElement>();
  const playing = useRef(false);
  const lastPlayed = useRef(-Infinity);

  const play = useCallback(async () => {
    if (playing.current || !scope.current) return;
    playing.current = true;
    try {
      await animate(SEQUENCE);
    } catch {
      /* el logo se desmontó a mitad de la animación */
    } finally {
      playing.current = false;
      lastPlayed.current = performance.now();
    }
  }, [animate, scope]);

  useEffect(() => {
    if (reduce) return;
    let timer = 0;
    const schedule = (min: number, max: number) => {
      timer = window.setTimeout(async () => {
        // Si acaba de sonar por hover, esta vuelta se salta.
        if (performance.now() - lastPlayed.current > 8000) await play();
        schedule(14000, 32000);
      }, rand(min, max));
    };
    schedule(5000, 9000);
    return () => window.clearTimeout(timer);
  }, [reduce, play]);

  return (
    <span
      ref={scope}
      onMouseEnter={reduce ? undefined : () => void play()}
      className={`relative inline-block font-display text-[26px] font-extrabold leading-none tracking-[-0.02em] ${className}`}>
      {LETTERS.map((ch, i) => (
        <span key={i} className="relative inline-block">
          <span className="lg-letter inline-block">{ch}</span>
          <span
            aria-hidden="true"
            className="lg-block pointer-events-none absolute inset-x-[4%] bottom-[0.13em] top-[0.17em] overflow-hidden rounded-[0.14em] bg-current"
            style={{ opacity: 0, transformOrigin: i < MID ? 'right center' : i > MID ? 'left center' : 'center' }}
          >
            <span className="lg-flash absolute inset-0 bg-teal" style={{ opacity: 0 }} />
          </span>
        </span>
      ))}
      <span aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 h-[0.9em] w-[0.9em] -translate-x-1/2 -translate-y-1/2">
        <span className="lg-deck absolute inset-0 block" style={{ opacity: 0, transform: 'scale(0)' }}>
          {CARDS.map((color, i) => (
            <span key={i} className={`lg-card lg-card-${i} absolute inset-0 rounded-[0.2em]`} style={{ backgroundColor: color }} />
          ))}
          <span className="lg-top absolute inset-0 rounded-[0.2em] bg-current" />
        </span>
      </span>
    </span>
  );
}
