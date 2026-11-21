import { useI18n } from '../i18n/useI18n';
import { usePageMeta } from '../lib/hooks';
import PhotoHero, { FloatingCard } from '../components/PhotoHero';
import { ApprovalMiniCard } from '../components/ProductCards';
import Band from '../components/Band';
import PhoneMock from '../components/PhoneMock';
import { ApprovalScreen, BlockedScreen } from '../components/PhoneScreens';
import Reveal, { InView, StaggerGrid } from '../components/Reveal';
import BentoCard, { BentoTitle } from '../components/BentoCard';
import { SectionHeading } from '../components/Bits';
import { RuleCardBody, RulePreviewBody } from '../components/RuleCard';
import SignalRings from '../components/SignalRings';
import WaitlistSection from '../components/WaitlistSection';
import { HeroActions, numText, subText, toneAt } from './_shared';

export default function Personal() {
  const { t } = useI18n();
  const p = t.personal;
  usePageMeta(p.meta);
  return (
    <>
      <PhotoHero {...p.hero} actions={<HeroActions />} photo="personal-v" alt={t.photos.personal} position="45% 30%">
        <FloatingCard slot="bottom">
          <ApprovalMiniCard />
        </FloatingCard>
      </PhotoHero>

      <Band tone="white">
        <Reveal className="mx-auto max-w-3xl text-center">
          <SectionHeading eyebrow={p.steps.eyebrow} title={p.steps.title} className="mx-auto" />
        </Reveal>
        <StaggerGrid className="mt-12 grid gap-4 md:grid-cols-3">
          {p.steps.items.map((s, i) => {
            const tone = toneAt('white', i);
            return (
              <BentoCard key={s.n} tone={tone} as="article">
                <p className={`font-mono text-[13px] font-bold ${numText(tone)}`}>{s.n}</p>
                <BentoTitle className="mt-auto pt-10">{s.title}</BentoTitle>
                <p className={`mt-3 text-[16.5px] leading-relaxed ${subText(tone)}`}>{s.body}</p>
              </BentoCard>
            );
          })}
        </StaggerGrid>
      </Band>

      <Band tone="teal" pattern="rings">
        <Reveal><SectionHeading tone="teal" eyebrow={p.rule.eyebrow} title={p.rule.title} /></Reveal>
        <StaggerGrid className="mt-10 grid gap-4 lg:grid-cols-[1.55fr_1fr]">
          <BentoCard tone="white" className="min-h-[340px]"><RuleCardBody /></BentoCard>
          <BentoCard tone="ink"><RulePreviewBody title={p.rule.previewTitle} body={p.rule.previewBody} /></BentoCard>
        </StaggerGrid>
      </Band>

      <Band tone="ink" pattern="dots" className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16 [&>*]:min-w-0">
        <Reveal><SectionHeading tone="ink" eyebrow={p.approve.eyebrow} title={p.approve.title} body={p.approve.body} /></Reveal>
        <Reveal className="panel-teal relative flex justify-center overflow-hidden px-5 py-12 sm:py-16">
          <SignalRings />
          <InView className="relative z-10 flex w-full justify-center">
            {(active) => (
              <PhoneMock label={t.approval.aria}>
                <ApprovalScreen active={active} resolve />
              </PhoneMock>
            )}
          </InView>
        </Reveal>
      </Band>

      <Band tone="sand" pattern="lines" className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16 [&>*]:min-w-0">
        <Reveal className="order-2 flex justify-center lg:order-1">
          <InView className="flex w-full justify-center">
            {(active) => (
              <PhoneMock label={p.freeze.title}>
                <BlockedScreen active={active} />
              </PhoneMock>
            )}
          </InView>
        </Reveal>
        <Reveal className="order-1 lg:order-2"><SectionHeading tone="sand" eyebrow={p.freeze.eyebrow} title={p.freeze.title} body={p.freeze.body} /></Reveal>
      </Band>

      <WaitlistSection title={p.waitlist.title} body={p.waitlist.body} defaultProfile="persona" photo="control" photoPosition="50% 40%" />
    </>
  );
}
