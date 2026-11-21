import { useI18n } from '../i18n/useI18n';
import { usePageMeta } from '../lib/hooks';
import PhotoHero, { FloatingCard } from '../components/PhotoHero';
import { BalanceCard, RuleMiniCard } from '../components/ProductCards';
import Band from '../components/Band';
import PhoneMock from '../components/PhoneMock';
import { WalletScreen } from '../components/PhoneScreens';
import Reveal, { StaggerGrid } from '../components/Reveal';
import BentoCard, { BentoTitle } from '../components/BentoCard';
import { SectionHeading } from '../components/Bits';
import { RuleCardBody, RulePreviewBody } from '../components/RuleCard';
import WaitlistSection from '../components/WaitlistSection';
import { HeroActions, subText, toneAt } from './_shared';

export default function CuentasYReglas() {
  const { t } = useI18n();
  const c = t.cuentas;
  usePageMeta(c.meta);
  return (
    <>
      <PhotoHero {...c.hero} actions={<HeroActions />} photo="control" alt={t.photos.control} position="50% 30%">
        <FloatingCard slot="topRight" delay={1.3}>
          <RuleMiniCard />
        </FloatingCard>
        <FloatingCard slot="bottom">
          <BalanceCard />
        </FloatingCard>
      </PhotoHero>

      <Band tone="teal" pattern="rings">
        <Reveal><SectionHeading tone="teal" eyebrow={c.rule.eyebrow} title={c.rule.title} /></Reveal>
        <StaggerGrid className="mt-10 grid gap-4 lg:grid-cols-[1.55fr_1fr]">
          <BentoCard tone="white" className="min-h-[340px]"><RuleCardBody /></BentoCard>
          <BentoCard tone="ink"><RulePreviewBody title={c.rule.previewTitle} body={c.rule.previewBody} /></BentoCard>
        </StaggerGrid>
      </Band>

      <Band tone="sand" pattern="lines">
        <Reveal><SectionHeading tone="sand" eyebrow={c.features.eyebrow} title={c.features.title} /></Reveal>
        <div className="mt-10 grid items-start gap-8 lg:grid-cols-[1fr_auto] lg:gap-12 [&>*]:min-w-0">
          <StaggerGrid className="grid gap-4 sm:grid-cols-2">
            {c.features.items.map((f, i) => {
              const tone = toneAt('sand', i);
              return (
                <BentoCard key={f.title} tone={tone} as="article" className={i === 4 ? 'sm:col-span-2' : ''}>
                  <BentoTitle className="mt-auto">{f.title}</BentoTitle>
                  <p className={`mt-3 text-[16.5px] leading-relaxed ${subText(tone)}`}>{f.body}</p>
                </BentoCard>
              );
            })}
          </StaggerGrid>
          <Reveal className="flex justify-center lg:sticky lg:top-24 lg:w-[360px]">
            <PhoneMock label={t.phone.walletAria}><WalletScreen /></PhoneMock>
          </Reveal>
        </div>
      </Band>

      <WaitlistSection title={c.waitlist.title} body={c.waitlist.body} photo="control" photoPosition="50% 40%" />
    </>
  );
}
