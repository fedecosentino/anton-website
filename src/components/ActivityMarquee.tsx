import { useState } from 'react';
import { motion, useAnimationFrame, useMotionValue, useScroll, useSpring, useTransform, useVelocity } from 'motion/react';
import { useI18n } from '../i18n/useI18n';
import { useReduce } from '../lib/hooks';

/**
 * Cinta de actividad: franja negra a todo el ancho, texto en Space Mono alternando
 * blanco y teal. Movimiento continuo (36s por vuelta) que se pausa en hover o con el
 * botón y acelera levemente con el scroll.
 */
export default function ActivityMarquee() {
  const { t } = useI18n();
  const reduce = useReduce();
  const [paused, setPaused] = useState(false);
  const [hover, setHover] = useState(false);
  const base = useMotionValue(0);
  const { scrollY } = useScroll();
  const velocity = useSpring(useVelocity(scrollY), { damping: 50, stiffness: 300 });
  const boost = useTransform(velocity, (v) => 1 + Math.min(Math.abs(v) / 2000, 0.8));
  const x = useTransform(base, (v) => `${v}%`);

  useAnimationFrame((_, delta) => {
    if (reduce || paused || hover) return;
    let v = base.get() - (50 / 36) * (delta / 1000) * boost.get();
    if (v <= -50) v += 50;
    base.set(v);
  });

  const list = (copy: boolean) => (
    <ul className={`flex shrink-0 ${copy ? 'marquee-copy' : ''}`} aria-hidden={copy || undefined}>
      {t.marquee.items.map((item, i) => (
        <li key={item} className={`flex shrink-0 items-center whitespace-nowrap font-mono text-[14px] tracking-[0.02em] ${i % 2 === 0 ? 'text-page' : 'text-teal'}`}>
          {item}
          <span aria-hidden="true" className="mx-7 inline-block h-1.5 w-1.5 rotate-45 bg-onink" />
        </li>
      ))}
    </ul>
  );

  return (
    <section aria-label={t.marquee.label} className="bg-ink text-page">
      <div className="flex items-center">
        <div className="marquee relative min-w-0 flex-1 overflow-hidden py-5" onPointerEnter={() => setHover(true)} onPointerLeave={() => setHover(false)}>
          <motion.div className="marquee-track flex w-max" style={reduce ? undefined : { x }}>
            {list(false)}
            {list(true)}
          </motion.div>
        </div>
        <button
          type="button"
          onClick={() => setPaused((p) => !p)}
          aria-pressed={paused}
          aria-label={paused ? t.marquee.play : t.marquee.pause}
          title={paused ? t.marquee.play : t.marquee.pause}
          className="marquee-pause mx-2 grid h-11 w-11 shrink-0 place-items-center rounded-full text-page hover:bg-white/10 sm:mx-4"
        >
          <svg aria-hidden="true" viewBox="0 0 16 16" width="14" height="14" fill="currentColor">
            {paused ? <path d="M4 2.5v11l9-5.5z" /> : <><rect x="3" y="2.5" width="3.5" height="11" rx="1" /><rect x="9.5" y="2.5" width="3.5" height="11" rx="1" /></>}
          </svg>
        </button>
      </div>
    </section>
  );
}
