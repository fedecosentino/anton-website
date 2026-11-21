import { useI18n } from '../i18n/useI18n';
import { usePageMeta } from '../lib/hooks';
import HeroPanel from '../components/HeroPanel';
import PassportCard from '../components/PassportCard';
import Band from '../components/Band';
import Photo from '../components/Photo';
import Reveal, { StaggerGrid } from '../components/Reveal';
import BentoCard, { BentoTitle } from '../components/BentoCard';
import { Eyebrow, SampleTag, SectionHeading } from '../components/Bits';
import WaitlistSection from '../components/WaitlistSection';
import { HeroActions, numText, subText, toneAt } from './_shared';

export default function Pasaporte() {
  const { t } = useI18n();
  const p = t.pasaporte;
  usePageMeta(p.meta);
  return (
    <>
      <HeroPanel {...p.hero} actions={<HeroActions />} visual={<PassportCard />} float={false} panel="teal" pattern="rings" />

      <Band tone="white">
        <Reveal><SectionHeading eyebrow={p.identity.eyebrow} title={p.identity.title} /></Reveal>
        <StaggerGrid className="mt-10 grid gap-4 md:grid-cols-3">
          {p.identity.items.map((it, i) => {
            const tone = toneAt('white', i);
            return (
              <BentoCard key={it.title} tone={tone} as="article">
                <BentoTitle className="mt-auto">{it.title}</BentoTitle>
                <p className={`mt-3 text-[16.5px] leading-relaxed ${subText(tone)}`}>{it.body}</p>
              </BentoCard>
            );
          })}
        </StaggerGrid>
      </Band>

      <Band tone="sand" pattern="lines">
        <Reveal><SectionHeading tone="sand" eyebrow={p.levels.eyebrow} title={p.levels.title} body={p.levels.body} /></Reveal>
        <StaggerGrid className="mt-10 grid gap-4 md:grid-cols-3">
          {p.levels.items.map((it, i) => {
            const tone = toneAt('sand', i);
            return (
              <BentoCard key={it.name} tone={tone} as="article">
                <p className={`eyebrow ${numText(tone)}`}>{it.name}</p>
                <BentoTitle className="mt-auto pt-10">{it.title}</BentoTitle>
                <p className={`mt-3 text-[16.5px] leading-relaxed ${subText(tone)}`}>{it.body}</p>
              </BentoCard>
            );
          })}
        </StaggerGrid>
      </Band>

      <Band tone="teal" pattern="rings" className="grid items-center gap-10 lg:grid-cols-[auto_1fr] lg:gap-20">
        <Reveal>
          <Photo name="retrato" alt={t.photos.retrato} sizes="380px" position="50% 40%" className="mx-auto aspect-square w-[min(380px,78vw)] rounded-full" />
        </Reveal>
        <Reveal className="min-w-0 [container-type:inline-size]">
          <Eyebrow className="mb-4">{p.responsible.eyebrow}</Eyebrow>
          <h2 className="h2">{p.responsible.title}</h2>
          <p className="lead mt-5 max-w-xl">{p.responsible.body}</p>
          <p className="mt-6 flex flex-wrap items-center gap-3 font-mono text-[14px] font-bold">
            {t.passport.ownerLabel}: {t.agent.owner}
            <SampleTag onTeal />
          </p>
        </Reveal>
      </Band>

      <WaitlistSection title={p.waitlist.title} body={p.waitlist.body} photo="builders" />
    </>
  );
}
