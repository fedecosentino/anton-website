import { useRef, useState, type KeyboardEvent } from 'react';
import { useI18n } from '../i18n/useI18n';
import { usePageMeta } from '../lib/hooks';
import PhotoHero, { FloatingCard } from '../components/PhotoHero';
import { PassportMiniCard } from '../components/ProductCards';
import Band from '../components/Band';
import PillButton from '../components/PillButton';
import Reveal, { StaggerGrid } from '../components/Reveal';
import BentoCard from '../components/BentoCard';
import { Eyebrow, SampleTag, SectionHeading } from '../components/Bits';
import WaitlistSection from '../components/WaitlistSection';
import { HeroActions, numText, subText, toneAt } from './_shared';

function ConnectTabs() {
  const { t } = useI18n();
  const c = t.builders.connect;
  const [sel, setSel] = useState(0);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const onKey = (e: KeyboardEvent) => {
    const n = c.tabs.length;
    let next = sel;
    if (e.key === 'ArrowRight') next = (sel + 1) % n;
    else if (e.key === 'ArrowLeft') next = (sel - 1 + n) % n;
    else if (e.key === 'Home') next = 0;
    else if (e.key === 'End') next = n - 1;
    else return;
    e.preventDefault();
    setSel(next);
    refs.current[next]?.focus();
  };
  return (
    <div className="rounded-bento border border-phone-border bg-field p-5 text-page sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div role="tablist" aria-label={c.tabsLabel} className="flex flex-wrap gap-2" onKeyDown={onKey}>
          {c.tabs.map((tab, i) => (
            <button
              key={tab.name}
              ref={(el) => (refs.current[i] = el)}
              role="tab"
              id={`tab-${i}`}
              aria-selected={sel === i}
              aria-controls={`panel-${i}`}
              tabIndex={sel === i ? 0 : -1}
              onClick={() => setSel(i)}
              className={`min-h-[44px] rounded-full px-5 text-[15px] font-bold ${sel === i ? 'bg-teal text-teal-on' : 'border border-white/25 text-page hover:border-white/60'}`}
            >
              {tab.name}
            </button>
          ))}
        </div>
        <SampleTag dark />
      </div>
      {c.tabs.map((tab, i) => (
        <div key={tab.name} role="tabpanel" id={`panel-${i}`} aria-labelledby={`tab-${i}`} hidden={sel !== i} tabIndex={0} className="mt-6">
          <p className="text-[15px] text-onink">
            <span className="font-bold text-page">{c.whereLabel}:</span> {tab.where}
          </p>
          <pre className="mt-4 overflow-x-auto whitespace-pre-wrap break-words rounded-3xl border border-phone-border bg-phone-card p-5 font-mono text-[13.5px] leading-[1.7] text-phone-text">
            <code>{c.code.join('\n')}</code>
          </pre>
        </div>
      ))}
    </div>
  );
}

export default function Builders() {
  const { t } = useI18n();
  const b = t.builders;
  usePageMeta(b.meta);
  return (
    <>
      <PhotoHero {...b.hero} actions={<HeroActions />} photo="builders-v" alt={t.photos.builders} position="55% 30%">
        <FloatingCard slot="bottom">
          <PassportMiniCard />
        </FloatingCard>
      </PhotoHero>

      <Band tone="white" className="grid gap-8 lg:grid-cols-2 lg:gap-16 [&>*]:min-w-0">
        <Reveal><SectionHeading eyebrow={b.kya.eyebrow} title={b.kya.title} /></Reveal>
        <Reveal className="space-y-5 lg:pt-10">
          <p className="lead">{b.kya.body1}</p>
          <p className="lead text-muted">{b.kya.body2}</p>
        </Reveal>
      </Band>

      <Band tone="sand" pattern="lines">
        <Reveal><SectionHeading tone="sand" eyebrow={b.contents.eyebrow} title={b.contents.title} /></Reveal>
        <StaggerGrid className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {b.contents.items.map((it, i) => {
            const tone = toneAt('sand', i);
            return (
              <BentoCard key={it.label} tone={tone} as="article" className={i < 3 ? 'lg:col-span-2' : 'lg:col-span-3'}>
                <p className={`eyebrow ${numText(tone)}`}>{it.label}</p>
                <p className="mt-auto break-words pt-8 font-mono text-[19px] font-bold leading-snug">{it.value}</p>
                <p className={`mt-3 text-[16px] leading-relaxed ${subText(tone)}`}>{it.body}</p>
              </BentoCard>
            );
          })}
        </StaggerGrid>
      </Band>

      <Band tone="ink" pattern="dots" className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 [&>*]:min-w-0">
        <Reveal><SectionHeading tone="ink" eyebrow={b.connect.eyebrow} title={b.connect.title} body={b.connect.body} /></Reveal>
        <Reveal><ConnectTabs /></Reveal>
      </Band>

      <Band tone="teal" pattern="rings" className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
        <Reveal className="w-full max-w-2xl [container-type:inline-size]">
          <Eyebrow className="mb-4">{b.validate.eyebrow}</Eyebrow>
          <h2 className="h2">{b.validate.title}</h2>
          <p className="lead mt-5">{b.validate.body}</p>
        </Reveal>
        <Reveal className="flex shrink-0">
          <PillButton to="/lista-de-espera?perfil=builder" className="w-full sm:w-auto">{b.validate.cta}</PillButton>
        </Reveal>
      </Band>

      <WaitlistSection title={b.waitlist.title} body={b.waitlist.body} defaultProfile="builder" photo="builders" />
    </>
  );
}
