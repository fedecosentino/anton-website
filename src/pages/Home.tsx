import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useI18n } from '../i18n/useI18n';
import { usePageMeta, useReduce } from '../lib/hooks';
import { sample } from '../data/sample';
import HomeHero from '../components/HomeHero';
import ActivityMarquee from '../components/ActivityMarquee';
import HowItWorks from '../components/HowItWorks';
import Photo, { PhotoSlot } from '../components/Photo';
import PillButton from '../components/PillButton';
import Reveal, { StaggerGrid } from '../components/Reveal';
import BentoCard, { BentoTitle, type Tone } from '../components/BentoCard';
import { ArrowIcon, Eyebrow, SampleTag, StatusTag } from '../components/Bits';
import TimelineItem from '../components/TimelineItem';
import WaitlistSection from '../components/WaitlistSection';
import Pattern from '../components/Pattern';

const pillarRoutes = ['/pasaporte', '/cuentas-y-reglas', '/observatory'];

/** Tarjeta de alerta "Bloqueada" sobre la foto de la sección Tú mandas. */
function AlertCard() {
  const { t } = useI18n();
  const reduce = useReduce();
  const blocked = t.timeline.items[0];
  // El flotado es finito (4.8s): arranca cuando la tarjeta entra en pantalla, no al cargar.
  const [seen, setSeen] = useState(false);
  return (
    <motion.div
      className="absolute bottom-5 left-4 z-10 w-[min(300px,82%)] sm:left-5 lg:-left-12 lg:bottom-12"
      initial={reduce ? false : { opacity: 0, y: 28, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.6 }}
      onViewportEnter={() => setSeen(true)}
      transition={{ type: 'spring', stiffness: 140, damping: 16, delay: 0.5 }}
    >
      <div className={seen && !reduce ? 'card-float' : ''}>
        <div className="rounded-[26px] border border-phone-border bg-phone-bg p-5 text-phone-text shadow-[0_18px_40px_rgba(6,6,8,.4)]">
          <p className="flex flex-wrap items-center gap-x-2">
            <StatusTag kind="blocked" />
            <span className="font-mono text-[11.5px] uppercase text-phone-muted">· {blocked.detail}</span>
          </p>
          <p className="mt-3 text-[15.5px] font-bold leading-snug">{blocked.title}</p>
          <div className="mt-1 flex flex-wrap items-end justify-between gap-2">
            <p className="font-mono text-[28px] font-bold leading-none">{blocked.amount}</p>
            <SampleTag dark />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Home() {
  const { t } = useI18n();
  const h = t.home;
  usePageMeta(h.meta);
  const a = h.audience;
  const audience: { to: string; tone: Tone; photo: 'personal' | 'empresas' | 'builders'; data: typeof a.personal; sub: string; position: string }[] = [
    { to: '/personal', tone: 'white', photo: 'personal', data: a.personal, sub: 'text-muted', position: '60% 40%' },
    { to: '/empresas', tone: 'ink', photo: 'empresas', data: a.empresas, sub: 'text-onink', position: '50% 15%' },
    { to: '/builders', tone: 'teal', photo: 'builders', data: a.builders, sub: 'text-teal-on', position: '55% 35%' },
  ];

  return (
    <>
      {/* 1 · Hero — fondo #F3F5F2 */}
      <HomeHero />

      {/* 2 · Cinta de actividad — franja negra */}
      <ActivityMarquee />

      {/* 3 · Un día cualquiera — fondo blanco. La escena antes que el producto. */}
      <section className="bg-surface py-20 sm:py-28">
        <div className="container-site grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="order-1 min-w-0 lg:order-2">
            <Reveal className="[container-type:inline-size]">
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <Eyebrow className="text-teal-text">{h.day.eyebrow}</Eyebrow>
                <SampleTag />
              </div>
              <h2 className="h2">{h.day.title}</h2>
            </Reveal>
            <StaggerGrid className="mt-10 grid gap-3">
              {h.day.moments.map((m) => (
                <BentoCard key={m.when} tone="gray" as="article" className="min-h-0 !rounded-[28px] !p-6 sm:flex-row sm:items-center sm:gap-6">
                  <p className="eyebrow shrink-0 text-teal-text sm:w-[150px]">{m.when}</p>
                  <p className="mt-2 flex-1 text-[17px] font-medium leading-snug sm:mt-0">{m.text}</p>
                  <span className="mt-4 inline-flex w-fit shrink-0 items-center rounded-full bg-phone-card px-3.5 py-2 sm:mt-0">
                    <StatusTag kind={m.status} />
                  </span>
                </BentoCard>
              ))}
            </StaggerGrid>
          </div>
          <Reveal className="order-2 mx-auto w-full max-w-[440px] lg:order-1 lg:mx-0">
            <Photo name="calle-v" alt={t.photos.calle} sizes="(min-width: 1024px) 440px, 100vw" position="50% 15%" className="aspect-[4/5] w-full rounded-bento" />
          </Reveal>
        </div>
      </section>

      {/* 4 · La idea — fondo teal: la línea de marca y los tres pilares */}
      <section className="relative overflow-hidden bg-teal py-20 text-teal-on sm:py-28">
        <Pattern kind="rings" />
        <div className="container-site relative grid items-center gap-10 lg:grid-cols-[auto_1fr] lg:gap-20">
          <Reveal>
            <Photo name="retrato" alt={t.photos.retrato} sizes="380px" position="50% 40%" className="mx-auto aspect-square w-[min(380px,78vw)] rounded-full" />
          </Reveal>
          <Reveal className="min-w-0 [container-type:inline-size]">
            <Eyebrow className="mb-4">{h.idea.eyebrow}</Eyebrow>
            <h2 className="h2">
              {/* La línea de marca siempre en dos golpes: una frase por línea */}
              {h.idea.title.split(/(?<=\.)\s+/).map((line) => (
                <span key={line} className="block">{line}</span>
              ))}
            </h2>
            <p className="lead mt-5 max-w-xl">{h.idea.body}</p>
            <ul className="mt-8 border-t border-teal-on/25">
              {h.idea.pillars.map((p, i) => (
                <li key={p.name} className="border-b border-teal-on/25">
                  <Link to={pillarRoutes[i]} className="group grid min-h-[44px] items-baseline gap-x-6 gap-y-1 py-4 sm:grid-cols-[150px_1fr_auto]">
                    <span className="eyebrow">{p.name}</span>
                    <span>
                      <span className="block font-display text-[clamp(20px,2.2vw,28px)] font-extrabold leading-tight tracking-[-0.01em]">{p.line}</span>
                      <span className="mt-1 block text-[15.5px] leading-snug">{p.body}</span>
                    </span>
                    <ArrowIcon className="hidden self-center transition-transform group-hover:translate-x-1 sm:block" />
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* 5 · Así trabaja tu agente — fondo negro, cuatro pasos */}
      <HowItWorks />

      {/* 6 · Por qué fiarte — fondo blanco */}
      <section className="bg-surface py-20 sm:py-28">
        <div className="container-site grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
          <div className="min-w-0">
            <Reveal className="[container-type:inline-size]">
              <Eyebrow className="mb-4 text-teal-text">{h.code.eyebrow}</Eyebrow>
              <h2 className="h2">{h.code.title}</h2>
            </Reveal>
            <StaggerGrid className="mt-10 grid gap-3 sm:grid-cols-2">
              {h.code.points.slice(0, 4).map((p, i) => (
                <BentoCard key={p.title} tone="gray" as="article" className="min-h-0 !rounded-[28px] !p-6">
                  <p className="font-mono text-[13px] font-bold text-teal-text">0{i + 1}</p>
                  <h3 className="mt-3 text-[19px] font-bold leading-snug">
                    <span className="bento-title">{p.title}</span>
                  </h3>
                  <p className="mt-2 text-[15.5px] leading-relaxed text-muted">{p.body}</p>
                </BentoCard>
              ))}
            </StaggerGrid>
          </div>
          <Reveal className="relative mx-auto w-full max-w-[460px] lg:mx-0 lg:justify-self-end">
            <Photo name="control" alt={t.photos.control} sizes="(min-width: 1024px) 460px, 100vw" position="50% 35%" className="aspect-[4/5] w-full rounded-bento" />
            <AlertCard />
          </Reveal>
        </div>
      </section>

      {/* 7 · Observatory — fondo arena */}
      <section className="relative overflow-hidden bg-sand py-20 sm:py-28">
        <Pattern kind="lines" />
        <div className="container-site relative grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <Reveal className="order-2 rounded-bento bg-surface p-5 sm:p-8 lg:order-1">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span aria-hidden="true" className="grid h-10 w-10 place-items-center rounded-full bg-ink font-display text-[15px] text-page">CJ</span>
                <div>
                  <p className="text-[15px] font-bold leading-tight">{t.agent.name}</p>
                  <p className="font-mono text-[11.5px] text-muted">{sample.agentId}</p>
                </div>
              </div>
              <SampleTag />
            </div>
            <ul aria-label={t.timeline.aria} className="mt-5 space-y-2">
              {t.timeline.items.slice(0, 4).map((it) => (
                <TimelineItem key={it.day + it.time} item={it} />
              ))}
            </ul>
          </Reveal>
          <Reveal className="order-1 min-w-0 [container-type:inline-size] lg:order-2">
            <Eyebrow className="mb-4 text-teal-text">{h.watch.eyebrow}</Eyebrow>
            <h2 className="h2">{h.watch.title}</h2>
            <p className="lead mt-5 text-muted">{h.watch.body}</p>
            <div className="mt-8 flex">
              <PillButton to="/observatory" className="w-full sm:w-auto">
                {h.watch.link}
              </PillButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 8 · Para quién — fondo #F3F5F2 */}
      <section className="bg-page py-20 sm:py-28">
        <div className="container-site">
          <Reveal className="mx-auto max-w-4xl text-center [container-type:inline-size]">
            <Eyebrow className="mb-4 text-teal-text">{a.eyebrow}</Eyebrow>
            <h2 className="h2">{a.title}</h2>
          </Reveal>
          <StaggerGrid className="mt-12 grid gap-4 md:grid-cols-3">
            {audience.map((c) => (
              <BentoCard key={c.to} to={c.to} tone={c.tone} className="overflow-hidden p-0">
                <Photo name={c.photo} alt={t.photos[c.photo]} sizes="(min-width: 768px) 400px, 100vw" position={c.position} className="h-[260px] w-full shrink-0" />
                <div className="flex flex-1 flex-col p-8 [container-type:inline-size]">
                  <BentoTitle>{c.data.title}</BentoTitle>
                  <p className={`mt-3 text-[17px] leading-relaxed ${c.sub}`}>{c.data.body}</p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-8 font-bold">
                    {c.data.cta}
                    <ArrowIcon />
                  </span>
                </div>
              </BentoCard>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* 9 · Dónde estamos — fondo blanco, panel partido. "Todavía no somos un banco." */}
      <section className="bg-surface py-20 sm:py-28">
        <div className="container-site">
          <Reveal className="grid overflow-hidden rounded-hero bg-page lg:grid-cols-2">
            <PhotoSlot label={h.status.photoSlot} className="min-h-[280px] lg:min-h-[540px]" />
            <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16 [container-type:inline-size]">
              <Eyebrow className="mb-4 text-teal-text">{h.status.eyebrow}</Eyebrow>
              <h2 className="h2">{h.status.title}</h2>
              <p className="lead mt-6 text-muted">{h.status.body}</p>
              <p className="mt-6 font-mono text-[13px] uppercase tracking-[0.08em]">{h.status.signature}</p>
              <Link to="/manifiesto" className="link-arrow mt-4 w-fit text-teal-text">
                {h.status.link}
                <ArrowIcon />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 10 · Lista de espera — fondo negro, centrada, con foto de fondo muy tenue */}
      <WaitlistSection title={h.waitlist.title} body={h.waitlist.body} photo="builders" />
    </>
  );
}
