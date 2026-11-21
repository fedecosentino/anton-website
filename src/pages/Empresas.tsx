import { useI18n } from '../i18n/useI18n';
import { usePageMeta } from '../lib/hooks';
import PhotoHero, { FloatingCard } from '../components/PhotoHero';
import { PolicyMiniCard } from '../components/ProductCards';
import Band from '../components/Band';
import Reveal, { StaggerGrid } from '../components/Reveal';
import BentoCard, { BentoTitle } from '../components/BentoCard';
import { Eyebrow, SectionHeading } from '../components/Bits';
import WaitlistSection from '../components/WaitlistSection';
import { HeroActions, subText, toneAt } from './_shared';

export default function Empresas() {
  const { t } = useI18n();
  const e = t.empresas;
  usePageMeta(e.meta);
  return (
    <>
      <PhotoHero {...e.hero} actions={<HeroActions />} photo="empresas-v" alt={t.photos.empresas} position="62% 10%">
        <FloatingCard slot="bottom">
          <PolicyMiniCard />
        </FloatingCard>
      </PhotoHero>

      <Band tone="white">
        <Reveal><SectionHeading eyebrow={e.pain.eyebrow} title={e.pain.title} /></Reveal>
        <StaggerGrid className="mt-10 grid gap-4 md:grid-cols-2">
          {e.pain.items.map((it, i) => {
            const tone = toneAt('white', i);
            return (
              <BentoCard key={it.title} tone={tone} as="article">
                <BentoTitle className="mt-auto">{it.title}</BentoTitle>
                <p className={`mt-3 text-[17px] leading-relaxed ${subText(tone)}`}>{it.body}</p>
              </BentoCard>
            );
          })}
        </StaggerGrid>
      </Band>

      <Band tone="sand" pattern="lines">
        <Reveal><SectionHeading tone="sand" eyebrow={e.patch.eyebrow} title={e.patch.title} /></Reveal>
        <StaggerGrid className="mt-10 grid gap-4 md:grid-cols-2">
          {e.patch.rows.flatMap((r) => [
            <BentoCard key={r.today} tone="white" as="article" className="min-h-0">
              <Eyebrow className="text-muted">{e.patch.todayLabel}</Eyebrow>
              <BentoTitle className="mt-4">{r.today}</BentoTitle>
              <p className="mt-3 text-[16.5px] leading-relaxed text-muted">{r.todayBody}</p>
            </BentoCard>,
            <BentoCard key={r.anton} tone="ink" as="article" className="min-h-0">
              <Eyebrow className="text-teal">{e.patch.antonLabel}</Eyebrow>
              <BentoTitle className="mt-4">{r.anton}</BentoTitle>
              <p className="mt-3 text-[16.5px] leading-relaxed text-onink">{r.antonBody}</p>
            </BentoCard>,
          ])}
        </StaggerGrid>
      </Band>

      <Band tone="teal" pattern="rings">
        <Reveal><SectionHeading tone="teal" eyebrow={e.features.eyebrow} title={e.features.title} /></Reveal>
        <StaggerGrid className="mt-10 grid gap-4 md:grid-cols-3">
          {e.features.items.map((f, i) => {
            const tone = toneAt('teal', i);
            return (
              <BentoCard key={f.title} tone={tone} as="article">
                <BentoTitle className="mt-auto">{f.title}</BentoTitle>
                <p className={`mt-3 text-[16.5px] leading-relaxed ${subText(tone)}`}>{f.body}</p>
              </BentoCard>
            );
          })}
        </StaggerGrid>
      </Band>

      <WaitlistSection title={e.waitlist.title} body={e.waitlist.body} variant="full" defaultProfile="empresa" photo="builders" />
    </>
  );
}
