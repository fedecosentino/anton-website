import { useRef, useState } from 'react';
import { motion, useMotionValueEvent, useScroll } from 'motion/react';
import { useI18n, fmt } from '../i18n/useI18n';
import { useMediaQuery, useReduce } from '../lib/hooks';
import { EASE } from '../lib/motion';
import { Eyebrow } from './Bits';
import PhoneMock from './PhoneMock';
import { ApprovalScreen, AutoScreen, BlockedScreen, RuleScreen } from './PhoneScreens';
import Reveal from './Reveal';
import SignalRings from './SignalRings';

function Screen({ step, active }: { step: number; active: boolean }) {
  if (step === 0) return <RuleScreen active={active} />;
  if (step === 1) return <AutoScreen active={active} />;
  if (step === 2) return <ApprovalScreen active={active} resolve />;
  return <BlockedScreen active={active} />;
}

/** Escritorio: sección fijada mientras se recorren los pasos con el scroll (100vh por paso). */
function Pinned() {
  const { t } = useI18n();
  const f = t.home.flow;
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  const [step, setStep] = useState(0);
  const n = f.steps.length;
  useMotionValueEvent(scrollYProgress, 'change', (v) => setStep(Math.min(n - 1, Math.max(0, Math.floor(v * n)))));

  return (
    <section ref={ref} id="como-funciona" aria-labelledby="flow-title" className="relative bg-ink text-page" style={{ height: `${n * 100}vh` }}>
      <div className="sticky top-0 flex h-screen items-center pt-[68px]">
        <div className="container-site grid w-full grid-cols-[1fr_auto_0.5fr] items-center gap-10 xl:gap-14">
          <div className="min-w-0 [container-type:inline-size]">
            <Eyebrow className="mb-4 text-teal">{f.eyebrow}</Eyebrow>
            <h2 id="flow-title" className="h2">{f.title}</h2>
            <div className="mt-10 grid [grid-template-areas:'s']">
              {f.steps.map((s, i) => (
                <motion.div
                  key={s.n}
                  className="[grid-area:s]"
                  initial={false}
                  animate={{ opacity: step === i ? 1 : 0, y: step === i ? 0 : step > i ? -18 : 18 }}
                  transition={{ duration: 0.45, ease: EASE }}
                >
                  <p className="font-mono text-[13px] font-bold text-teal">{s.n}</p>
                  <h3 className="card-title mt-3">{s.title}</h3>
                  <p className="lead mt-4 max-w-md text-onink">{s.body}</p>
                </motion.div>
              ))}
            </div>
            <div className="mt-10 max-w-md">
              <div className="h-1.5 overflow-hidden rounded-full bg-white/15">
                <motion.div className="h-full w-full origin-left rounded-full bg-teal" style={{ scaleX: scrollYProgress }} />
              </div>
              <p className="mt-3 font-mono text-[12.5px] text-onink" aria-live="polite">
                {fmt(f.progress, { n: step + 1, total: f.steps.length })}
              </p>
            </div>
          </div>
          <div className="panel-teal relative grid h-[min(720px,80vh)] w-[min(460px,36vw)] place-items-center overflow-hidden px-8">
            <SignalRings />
            <PhoneMock label={f.title} className="relative z-10">
              <div className="grid [grid-template-areas:'s']">
                {f.steps.map((_, i) => (
                  <motion.div
                    key={i}
                    className="[grid-area:s]"
                    initial={false}
                    animate={{ opacity: step === i ? 1 : 0 }}
                    transition={{ duration: 0.35 }}
                    aria-hidden={step !== i}
                  >
                    <Screen step={i} active={step === i} />
                  </motion.div>
                ))}
              </div>
            </PhoneMock>
          </div>
          <ol className="space-y-4">
            {f.steps.map((s, i) => (
              <li key={s.n} className="flex items-baseline gap-3">
                <span className={`font-mono text-[13px] font-bold ${step === i ? 'text-teal' : 'text-onink'}`}>{s.n}</span>
                <span className={`text-[15.5px] leading-snug ${step === i ? 'font-bold text-page' : 'text-onink'}`}>{s.title}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/** Móvil y movimiento reducido: los pasos apilados. */
function Stacked() {
  const { t } = useI18n();
  const f = t.home.flow;
  return (
    <section id="como-funciona" aria-labelledby="flow-title" className="scroll-mt-16 bg-ink py-20 text-page sm:py-28">
     <div className="container-site">
      <Reveal>
        <Eyebrow className="mb-4 text-teal">{f.eyebrow}</Eyebrow>
        <h2 id="flow-title" className="h2">{f.title}</h2>
      </Reveal>
      <ol className="mt-10 space-y-12">
        {f.steps.map((s, i) => (
          <li key={s.n}>
            <Reveal className="grid items-center gap-8 border-t border-white/15 pt-10 md:grid-cols-2">
              <div>
                <p className="font-mono text-[13px] font-bold text-teal">{s.n}</p>
                <h3 className="card-title mt-3">{s.title}</h3>
                <p className="lead mt-4 text-onink">{s.body}</p>
              </div>
              <div className="panel-teal relative flex justify-center overflow-hidden px-4 py-10">
                <SignalRings />
                <PhoneMock label={s.title} className="relative z-10">
                  <Screen step={i} active />
                </PhoneMock>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
     </div>
    </section>
  );
}

export default function HowItWorks() {
  const desktop = useMediaQuery('(min-width: 1024px) and (min-height: 700px)');
  const reduce = useReduce();
  return desktop && !reduce ? <Pinned /> : <Stacked />;
}
