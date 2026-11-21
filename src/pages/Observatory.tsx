import { useState } from 'react';
import { useI18n, fmt } from '../i18n/useI18n';
import { usePageMeta } from '../lib/hooks';
import type { StatusKind } from '../data/sample';
import PhotoHero, { FloatingCard } from '../components/PhotoHero';
import { TimelineMiniCard } from '../components/ProductCards';
import Band from '../components/Band';
import TimelineItem from '../components/TimelineItem';
import Reveal, { StaggerGrid } from '../components/Reveal';
import BentoCard from '../components/BentoCard';
import { Eyebrow, SampleTag, SectionHeading, StatusTag } from '../components/Bits';
import WaitlistSection from '../components/WaitlistSection';
import { HeroActions, subText, toneAt } from './_shared';

const kinds: StatusKind[] = ['auto', 'okDone', 'blocked'];

export default function Observatory() {
  const { t } = useI18n();
  const o = t.observatory;
  usePageMeta(o.meta);
  const [filter, setFilter] = useState<StatusKind | 'all'>('all');
  const items = t.timeline.items.filter((it) => filter === 'all' || it.status === filter);
  const filters: (StatusKind | 'all')[] = ['all', ...kinds];

  return (
    <>
      <PhotoHero {...o.hero} actions={<HeroActions />} photo="calle-v" alt={t.photos.calle} position="50% 15%">
        <FloatingCard slot="bottom">
          <TimelineMiniCard />
        </FloatingCard>
      </PhotoHero>

      <Band tone="white">
        <Reveal><SectionHeading eyebrow={o.states.eyebrow} title={o.states.title} /></Reveal>
        <StaggerGrid className="mt-10 grid gap-4 md:grid-cols-3">
          {kinds.map((k, i) => {
            const tone = toneAt('white', i);
            return (
              <BentoCard key={k} tone={tone} as="article">
                <span className="inline-flex w-fit items-center rounded-full bg-phone-card px-4 py-2.5">
                  <StatusTag kind={k} className="text-[13px]" />
                </span>
                <p className="mt-auto pt-10 text-[19px] font-bold leading-snug">{t.status[k]}</p>
                <p className={`mt-2 text-[16.5px] leading-relaxed ${subText(tone)}`}>{o.states[k as 'auto' | 'okDone' | 'blocked']}</p>
              </BentoCard>
            );
          })}
        </StaggerGrid>
      </Band>

      <Band tone="teal" pattern="rings">
        <Reveal className="mx-auto max-w-3xl text-center [container-type:inline-size]">
          <Eyebrow className="mb-4">{o.why.eyebrow}</Eyebrow>
          <h2 className="h2">{o.why.title}</h2>
          <p className="lead mx-auto mt-5 max-w-xl">{o.why.body}</p>
        </Reveal>
      </Band>

      <Band tone="sand" pattern="lines" className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 [&>*]:min-w-0">
        <Reveal><SectionHeading tone="sand" eyebrow={o.explorer.eyebrow} title={o.explorer.title} body={o.explorer.body} /></Reveal>
        <Reveal className="rounded-bento bg-ink p-5 text-page sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div role="group" aria-label={o.explorer.filterLabel} className="flex flex-wrap gap-2">
              {filters.map((f) => (
                <button
                  key={f}
                  type="button"
                  aria-pressed={filter === f}
                  onClick={() => setFilter(f)}
                  className={`min-h-[44px] rounded-full px-5 text-[15px] font-bold ${filter === f ? 'bg-teal text-teal-on' : 'border border-white/25 hover:border-white/60'}`}
                >
                  {f === 'all' ? o.explorer.all : t.status[f]}
                </button>
              ))}
            </div>
            <SampleTag dark />
          </div>
          <p aria-live="polite" className="mt-4 font-mono text-[12.5px] text-onink">
            {fmt(o.explorer.count, { n: items.length, total: t.timeline.items.length })}
          </p>
          <ul className="mt-4 space-y-2">
            {items.map((it) => (
              <TimelineItem key={it.day + it.time} item={it} showWhy />
            ))}
          </ul>
        </Reveal>
      </Band>

      <WaitlistSection title={o.waitlist.title} body={o.waitlist.body} photo="control" photoPosition="50% 40%" />
    </>
  );
}
