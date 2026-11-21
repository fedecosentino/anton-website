import { Fragment, useRef, type PointerEvent, type ReactNode } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { useMediaQuery, useReduce } from '../lib/hooks';
import { EASE } from '../lib/motion';
import { Eyebrow } from './Bits';
import SignalRings from './SignalRings';
import Pattern from './Pattern';

interface Props {
  eyebrow: string;
  titleLead: string;
  titleAccent: string;
  body?: string;
  actions?: ReactNode;
  /** Teléfono o tarjeta de producto sobre panel teal. */
  visual?: ReactNode;
  /** Flotación lenta (solo para teléfonos). */
  float?: boolean;
  below?: ReactNode;
  /** Visual sin retraso ni inclinación (p. ej., un formulario). */
  interactiveVisual?: boolean;
  /** Color del panel del visual y su trama. */
  panel?: 'teal' | 'ink' | 'sand';
  pattern?: 'rings' | 'dots' | 'lines';
}

const panelCls = { teal: 'bg-teal text-teal-on', ink: 'bg-ink text-page', sand: 'bg-sand text-ink' };

interface TextProps {
  eyebrow: string;
  titleLead: string;
  titleAccent: string;
  body?: string;
  actions?: ReactNode;
  below?: ReactNode;
}

/**
 * Columna de texto del hero. Secuencia: 0s etiqueta → 0.12s titular palabra a palabra
 * (60ms) → 0.36s párrafo → 0.48s botones; a 0.9s se dibuja el subrayado teal.
 */
export function HeroText({ eyebrow, titleLead, titleAccent, body, actions, below }: TextProps) {
  const reduce = useReduce();
  const enter = (delay: number) =>
    reduce
      ? { initial: false as const }
      : { initial: { opacity: 0, y: 26 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.75, ease: EASE, delay } };

  const lead = titleLead.split(' ').filter(Boolean);
  const accent = titleAccent.split(' ');
  const seg = 0.8 / accent.length;

  return (
    <div className="min-w-0 [container-type:inline-size]">
      <motion.div {...enter(0)}>
        <Eyebrow className="mb-6 text-teal-text">{eyebrow}</Eyebrow>
      </motion.div>
      <h1 className="h1">
        {lead.map((w, i) => (
          <Fragment key={`l${i}`}>
            <motion.span className="inline-block" {...enter(0.12 + i * 0.06)}>
              {w}
            </motion.span>{' '}
          </Fragment>
        ))}
        {accent.map((w, j) => (
          <Fragment key={`a${j}`}>
            <motion.span className="relative isolate inline-block" {...enter(0.12 + (lead.length + j) * 0.06)}>
              {w}
              <motion.span
                aria-hidden="true"
                className="absolute bottom-[0.02em] left-0 -z-10 h-[0.17em] origin-left bg-teal"
                style={{ right: j < accent.length - 1 ? '-0.3em' : 0 }}
                initial={reduce ? false : { scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.9 + j * seg, duration: seg, ease: j === 0 ? 'easeIn' : j === accent.length - 1 ? 'easeOut' : 'linear' }}
              />
            </motion.span>
            {j < accent.length - 1 ? ' ' : ''}
          </Fragment>
        ))}
      </h1>
      {body && (
        <motion.p className="lead mt-7 max-w-xl text-muted" {...enter(0.36)}>
          {body}
        </motion.p>
      )}
      {actions && (
        <motion.div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap" {...enter(0.48)}>
          {actions}
        </motion.div>
      )}
      {below}
    </div>
  );
}

/**
 * Hero en panel blanco de dos columnas. Secuencia:
 * 0s etiqueta → 0.12s titular palabra a palabra (60ms) → párrafo → botones,
 * 0.9s subrayado teal, 1.0s entra el visual con muelle y queda flotando.
 */
export default function HeroPanel({ eyebrow, titleLead, titleAccent, body, actions, visual, float = true, below, interactiveVisual = false, panel = 'teal', pattern }: Props) {
  const reduce = useReduce();
  const finePointer = useMediaQuery('(pointer: fine)');
  const tilt = finePointer && !reduce && !!visual && !interactiveVisual;
  const ref = useRef<HTMLElement>(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 120, damping: 20 });
  const sry = useSpring(ry, { stiffness: 120, damping: 20 });

  const onPointerMove = (e: PointerEvent<HTMLElement>) => {
    if (!tilt || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    ry.set(px * 12); // ±6°
    rx.set(-py * 12);
  };
  const onPointerLeave = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <section ref={ref} onPointerMove={onPointerMove} onPointerLeave={onPointerLeave} className="container-site pb-4 pt-3 sm:pt-4">
      <div className={`grid gap-4 ${visual ? 'lg:grid-cols-[1.15fr_0.85fr]' : ''}`}>
        <div className={`panel-hero flex flex-col justify-center ${visual ? 'lg:py-20' : ''}`}>
          <HeroText eyebrow={eyebrow} titleLead={titleLead} titleAccent={titleAccent} body={body} actions={actions} below={below} />
        </div>
        {visual && (
          <div className={`relative flex min-h-[460px] items-center justify-center overflow-hidden rounded-hero px-5 py-12 sm:px-10 lg:min-h-[640px] ${panelCls[panel]}`}>
            {pattern ? <Pattern kind={pattern} /> : <SignalRings />}
            <motion.div className="relative z-10 flex w-full justify-center" style={{ rotateX: srx, rotateY: sry, transformPerspective: 1000 }}>
              <motion.div
                className="flex w-full justify-center"
                initial={reduce ? false : interactiveVisual ? { y: 26, opacity: 0 } : { y: 160, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={
                  interactiveVisual
                    ? { duration: 0.75, ease: EASE, delay: 0.24 }
                    : { y: { type: 'spring', stiffness: 120, damping: 13, delay: 1.0 }, opacity: { duration: 0.3, delay: 1.0 } }
                }
              >
                <div className={`flex w-full justify-center ${float && !reduce && !interactiveVisual ? 'phone-float' : ''}`}>{visual}</div>
              </motion.div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}
